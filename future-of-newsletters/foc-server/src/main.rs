use aws_config::meta::region::RegionProviderChain;
use aws_sdk_ses::types::{Body, Content, Destination, Message};
use aws_sdk_ses::{Client, Error};
use axum::{
    extract::{self, Path},
    http::header::{HeaderMap, HeaderValue},
    http::StatusCode,
    routing::{get, post},
    Json, Router,
};
use clap::Arg;
use rust_embed::RustEmbed;
use serde::{Deserialize, Serialize};
use std::{borrow::Cow, net::SocketAddr};

#[derive(RustEmbed)]
#[folder = "./ui/"]
struct Asset;

pub type CowStr = Cow<'static, [u8]>;

pub const DEFAULT_PORT: u16 = 3852;
pub const DEFAULT_PORT_STR: &str = "3852";
pub const DEFAULT_ADDRESS: &str = "127.0.0.1";
pub const DEFAULT_DB_NAME: &str = "foc.db";
pub const APP_NAME: &str = "foc";
pub const COMMAND: &str = "foc";

async fn make_aws_client() -> Client {
    let region_provider = RegionProviderChain::default_provider().or_else("us-east-1");
    let config = aws_config::from_env().region(region_provider).load().await;
    let client = aws_sdk_ses::Client::new(&config);
    client
}

#[derive(Debug)]
enum NewsletterSendErr {
    SesError(aws_sdk_ses::Error),
    ReadFileError(std::io::Error),
    CsvReadError(csv::Error),
}

impl From<aws_sdk_ses::Error> for NewsletterSendErr {
    fn from(error: aws_sdk_ses::Error) -> Self {
        NewsletterSendErr::SesError(error)
    }
}

impl From<std::io::Error> for NewsletterSendErr {
    fn from(error: std::io::Error) -> Self {
        NewsletterSendErr::ReadFileError(error)
    }
}

impl From<csv::Error> for NewsletterSendErr {
    fn from(error: csv::Error) -> Self {
        NewsletterSendErr::CsvReadError(error)
    }
}

#[derive(Debug, serde::Deserialize)]
pub struct NewsletterSubscriptionRecord {
    #[serde(rename = "E-mail")]
    address: String,
    #[serde(rename = "Subscribe Date (GMT)")]
    pub subscribe_date: String,
    #[serde(rename = "Notes")]
    pub notes: String,
}

async fn send_newsletter(
    title: &str,
    mail_path: &str,
    subscriber_list: &str,
) -> Result<(), NewsletterSendErr> {
    println!("send newsletter: {title} {mail_path} {subscriber_list}");
    let base_path = std::path::Path::new(mail_path);
    let mail_text_path = base_path.join("mail.txt");
    let mail_html_path = base_path.join("mail.html");

    let mail_text_content = std::fs::read_to_string(mail_text_path)?;
    let mail_html_content = std::fs::read_to_string(mail_html_path)?;

    let mut sub_reader = csv::Reader::from_path(subscriber_list)?;

    let client = make_aws_client().await;
    let mut count = 0;
    for result in sub_reader.deserialize() {
        let record: NewsletterSubscriptionRecord = result?;
        println!("{:?}", record);
        send_message(
            &client,
            vec![record.address.to_string()],
            "Mariano Guerra <mariano@marianoguerra.org>",
            title,
            &mail_text_content,
            &mail_html_content,
        )
        .await?;

        count += 1;

        if (count % 100) == 0 {
            println!("Sent to {count}");
        }
    }

    Ok(())
}

#[tokio::main(flavor = "multi_thread")]
async fn main() {
    let cmd = clap::Command::new(COMMAND)
        .bin_name(COMMAND)
        .arg(
            Arg::new("verbose")
                .short('v')
                .long("verbose")
                .action(clap::ArgAction::Count)
                .help("Sets the level of verbosity"),
        )
        .subcommand_required(true)
        .subcommand(
            clap::Command::new("send-newsletter")
                .arg(
                    clap::Arg::new("title")
                        .long("title")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set)
                        .required(true),
                )
                .arg(
                    clap::Arg::new("mail-path")
                        .long("mail-path")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set)
                        .required(true),
                )
                .arg(
                    clap::Arg::new("subscriber-list")
                        .long("subscriber-list")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set)
                        .required(true),
                ),
        )
        .subcommand(
            clap::Command::new("server")
                .arg(
                    clap::Arg::new("address")
                        .long("address")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set)
                        .default_value(DEFAULT_ADDRESS),
                )
                .arg(
                    clap::Arg::new("config-path")
                        .long("config-path")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set),
                )
                .arg(
                    clap::Arg::new("port")
                        .long("port")
                        .value_parser(clap::value_parser!(u16).range(3000..))
                        .action(clap::ArgAction::Set)
                        .default_value(DEFAULT_PORT_STR),
                ),
        );

    let matches = cmd.get_matches();

    let log_level = match matches.get_count("verbose") {
        0 => log::LevelFilter::Info,
        1 => log::LevelFilter::Debug,
        _ => log::LevelFilter::Trace,
    };

    if let Err(err) = setup_logs(log_level) {
        println!("Error setting up logging: {err:?}");
    }

    match matches.subcommand() {
        Some(("server", matches)) => {
            let default_address: String = DEFAULT_ADDRESS.into();
            let address = matches
                .get_one::<String>("address")
                .unwrap_or(&default_address);
            let port = matches.get_one::<u16>("port").unwrap_or(&DEFAULT_PORT);
            start(address, *port).await;
        }
        Some(("send-newsletter", matches)) => {
            let o_title = matches.get_one::<String>("title");
            let o_mail_path = matches.get_one::<String>("mail-path");
            let o_subscriber_list = matches.get_one::<String>("subscriber-list");

            if let (Some(title), Some(mail_path), Some(subscriber_list)) =
                (o_title, o_mail_path, o_subscriber_list)
            {
                if let Err(err) = send_newsletter(title, mail_path, subscriber_list).await {
                    eprintln!("Error sending newsletter: {err:?}");
                }
            } else {
                eprintln!("missing arguments for send-newsletter");
            }
        }
        _ => {}
    };
}

pub fn setup_logs(log_level: log::LevelFilter) -> Result<(), anyhow::Error> {
    fern::Dispatch::new()
        // Perform allocation-free log formatting
        .format(|out, message, record| {
            out.finish(format_args!(
                "{}[{}][{}] {}",
                chrono::Local::now().format("[%Y-%m-%d][%H:%M:%S]"),
                record.target(),
                record.level(),
                message
            ))
        })
        .level(log_level)
        .level_for("sea_schema", log::LevelFilter::Off)
        .level_for("sqlx", log::LevelFilter::Off)
        // Output to stdout, files, and other Dispatch configurations
        .chain(std::io::stdout())
        .chain(fern::log_file("output.log")?)
        // Apply globally
        .apply()?;
    Ok(())
}

async fn start(address: &str, port: u16) {
    match format!("{address}:{port}").parse() {
        Ok(addr) => {
            log::info!("Serving @ {}:{}", address, port);
            let _ = serve(addr).await;
        }
        Err(err) => {
            log::error!("bad address: {:?}", err);
        }
    }
}

async fn serve(addr: SocketAddr) -> Result<(), hyper::Error> {
    let app = Router::new()
        // routes are matched from bottom to top
        .route("/", get(get_index))
        .route("/action", post(handle_action))
        .route("/*path", get(get_asset));

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
                Ok((StatusCode::OK, headers, Json(ActionResult::OK)))
            }
        }
        Action::Unsubscribe { .. } => Ok((
            StatusCode::BAD_REQUEST,
            headers,
            Json(ActionResult::error("not implemented")),
        )),
    }
}

async fn send_message(
    client: &Client,
    contacts: Vec<String>,
    from: &str,
    subject: &str,
    message_text: &str,
    message_html: &str,
) -> Result<(), Error> {
    let mut dest: Destination = Destination::builder().build();
    dest.to_addresses = Some(contacts);
    let subject_content = Content::builder().data(subject).charset("UTF-8").build()?;
    let body_text_content = Content::builder()
        .data(message_text)
        .charset("UTF-8")
        .build()?;
    let body_html_content = Content::builder()
        .data(message_html)
        .charset("UTF-8")
        .build()?;

    let body = Body::builder()
        .html(body_html_content)
        .text(body_text_content)
        .build();

    let msg = Message::builder()
        .subject(subject_content)
        .body(body)
        .build();

    client
        .send_email()
        .source(from)
        .destination(dest)
        .message(msg)
        .send()
        .await?;

    println!("Email sent");

    Ok(())
}
