use crate::db;
use axum::{
    extract::{self, Path, State},
    http::header::{HeaderMap, HeaderValue},
    http::StatusCode,
    routing::{get, post},
    Json, Router,
};
use rust_embed::RustEmbed;
use serde::{Deserialize, Serialize};
use std::{borrow::Cow, net::SocketAddr};
use tokio_rusqlite::Connection;

pub type CowStr = Cow<'static, [u8]>;

#[derive(RustEmbed)]
#[folder = "./ui/"]
struct Asset;

#[derive(Clone)]
pub struct ServerState {
    db_connection: Connection,
}

impl ServerState {
    pub fn new(db_connection: Connection) -> Self {
        Self { db_connection }
    }
}

pub async fn start(address: &str, port: u16, conn: Connection) {
    match format!("{address}:{port}").parse() {
        Ok(addr) => {
            log::info!("Serving @ {}:{}", address, port);
            let _ = serve(addr, conn).await;
        }
        Err(err) => {
            log::error!("bad address: {:?}", err);
        }
    }
}

async fn serve(addr: SocketAddr, conn: Connection) -> Result<(), hyper::Error> {
    let state = ServerState::new(conn);
    let app = Router::new()
        // routes are matched from bottom to top
        .route("/", get(get_index))
        .route("/action", post(handle_action))
        .route("/*path", get(get_asset))
        .with_state(state);

    match axum_server::bind(addr).serve(app.into_make_service()).await {
        Ok(_) => Ok(()),
        Err(err) => {
            log::error!("Error Starting Server: {}", err.to_string());
            std::process::exit(1);
        }
    }
}

async fn get_asset(
    Path(path): Path<String>,
) -> Result<(StatusCode, HeaderMap, CowStr), StatusCode> {
    serve_file(path).await
}

async fn serve_file(path: String) -> Result<(StatusCode, HeaderMap, CowStr), StatusCode> {
    match Asset::get(&path) {
        Some(file) => {
            let guess = mime_guess::from_path(path);
            let mime = guess
                .first_raw()
                .map(HeaderValue::from_static)
                .unwrap_or_else(|| {
                    HeaderValue::from_str(mime::APPLICATION_OCTET_STREAM.as_ref()).unwrap()
                });

            let mut headers = HeaderMap::new();
            headers.append("content-type", mime);

            Ok((StatusCode::OK, headers, file.data))
        }
        None => Err(StatusCode::NOT_FOUND),
    }
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(tag = "type")]
enum Action {
    Subscribe { mail: String },
    Unsubscribe { mail: String, token: String },
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(tag = "type")]
enum ActionResult {
    OK,
    Error { reason: String },
}

impl ActionResult {
    fn error(reason: &str) -> Self {
        Self::Error {
            reason: reason.to_string(),
        }
    }
}

async fn get_index() -> Result<(StatusCode, HeaderMap, CowStr), StatusCode> {
    serve_file("index.html".into()).await
}

async fn handle_action(
    State(state): State<ServerState>,
    extract::Json(payload): extract::Json<Action>,
) -> Result<(StatusCode, HeaderMap, Json<ActionResult>), StatusCode> {
    log::info!("{payload:?}");
    let mut headers = HeaderMap::new();
    headers.insert("content-type", "application/json".parse().unwrap());
    match payload {
        Action::Subscribe { mail } => {
            if mail == "FAIL" {
                Ok((
                    StatusCode::BAD_REQUEST,
                    headers,
                    Json(ActionResult::error("asked to fail")),
                ))
            } else {
                match db::add_subscription(&state.db_connection, &mail, &db::new_token()).await {
                    Ok(()) => Ok((StatusCode::OK, headers, Json(ActionResult::OK))),
                    Err(err) => {
                        log::error!("Error adding subscription: {err:?}");
                        Ok((
                            StatusCode::BAD_REQUEST,
                            headers,
                            Json(ActionResult::error("db error")),
                        ))
                    }
                }
            }
        }
        Action::Unsubscribe { mail, token } => {
            match db::remove_subscription(&state.db_connection, &mail, &token).await {
                Ok(()) => Ok((StatusCode::OK, headers, Json(ActionResult::OK))),
                Err(err) => {
                    log::error!("Error adding subscription: {err:?}");
                    Ok((
                        StatusCode::BAD_REQUEST,
                        headers,
                        Json(ActionResult::error("db error")),
                    ))
                }
            }
        }
    }
}
