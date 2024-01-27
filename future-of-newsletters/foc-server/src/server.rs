use crate::{db, mail};
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

const BASE_NEWSLETTER_ACTION_URL: &str = "https://newsletter.futureofcoding.org/join/";
const NEWSLETTER_FROM_MAIL_ADDRESS: &str = "Mariano Guerra <mariano@marianoguerra.org>";
const NEWSLETTER_CONFIRM_ADDRESS_MAIL_SUBJECT: &str = "Please confirm your subscription";

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
    Confirm { mail: String, token: String },
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
                Ok(handle_subscribe(&state, mail, headers).await)
            }
        }
        Action::Confirm { mail, token } => {
            match db::confirm_subscription(&state.db_connection, &mail, &token).await {
                Ok(0) => Ok((
                    StatusCode::BAD_REQUEST,
                    headers,
                    Json(ActionResult::error("No match")),
                )),
                Ok(_) => Ok((StatusCode::OK, headers, Json(ActionResult::OK))),
                Err(err) => {
                    log::error!("Error confirming subscription: {err:?}");
                    Ok((
                        StatusCode::BAD_REQUEST,
                        headers,
                        Json(ActionResult::error("database error")),
                    ))
                }
            }
        }
        Action::Unsubscribe { mail, token } => {
            match db::remove_subscription(&state.db_connection, &mail, &token).await {
                Ok(0) => Ok((
                    StatusCode::BAD_REQUEST,
                    headers,
                    Json(ActionResult::error("No match")),
                )),
                Ok(_) => Ok((StatusCode::OK, headers, Json(ActionResult::OK))),
                Err(err) => {
                    log::error!("Error adding subscription: {err:?}");
                    Ok((
                        StatusCode::BAD_REQUEST,
                        headers,
                        Json(ActionResult::error("Database error")),
                    ))
                }
            }
        }
    }
}

async fn handle_subscribe(
    state: &ServerState,
    mail: String,
    headers: HeaderMap,
) -> (StatusCode, HeaderMap, Json<ActionResult>) {
    let token = db::new_token();
    match db::add_subscription(&state.db_connection, &mail, &token).await {
        Ok(()) => {
            let aws_client = mail::make_aws_client().await;

            match mail::send_confirm_address_message(
                &aws_client,
                BASE_NEWSLETTER_ACTION_URL,
                &mail,
                &token,
                NEWSLETTER_FROM_MAIL_ADDRESS,
                NEWSLETTER_CONFIRM_ADDRESS_MAIL_SUBJECT,
            )
            .await
            {
                Ok(()) => (StatusCode::OK, headers, Json(ActionResult::OK)),
                Err(err) => {
                    log::error!("sending confirmation mail: {err:?}");
                    (
                        StatusCode::INTERNAL_SERVER_ERROR,
                        headers,
                        Json(ActionResult::error("Sending confirmation mail")),
                    )
                }
            }
        }
        Err(tokio_rusqlite::Error::Rusqlite(rusqlite::Error::SqliteFailure(
            libsqlite3_sys::Error {
                code: libsqlite3_sys::ErrorCode::ConstraintViolation,
                ..
            },
            _,
        ))) => (
            StatusCode::BAD_REQUEST,
            headers,
            Json(ActionResult::error("Subscription exists")),
        ),
        Err(err) => {
            log::error!("Error adding subscription: {err:?}");
            (
                StatusCode::BAD_REQUEST,
                headers,
                Json(ActionResult::error("Database error")),
            )
        }
    }
}
