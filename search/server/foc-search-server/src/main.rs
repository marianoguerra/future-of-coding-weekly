#[macro_use]
extern crate nickel;
use serde_json::json;
use sonic_client::search::SearchChan;

use nickel::{HttpRouter, Nickel, QueryString, Request, StaticFilesHandler};

fn main() {
    let http_host = std::env::var("FOC_HTTP_HOST").unwrap_or("127.0.0.1".to_string());
    let http_port = std::env::var("FOC_HTTP_PORT")
        .unwrap_or("8080".to_string())
        .parse::<u16>()
        .expect("FOC_HTTP_PORT is not a number");

    let mut server = Nickel::new();

    let sonic_host = std::env::var("FOC_SONIC_HOST").unwrap_or("127.0.0.1".to_string());
    let sonic_port = std::env::var("FOC_SONIC_PORT")
        .unwrap_or("1491".to_string())
        .parse::<usize>()
        .expect("FOC_SONIC_PORT is not a number");
    let sonic_password =
        std::env::var("FOC_SONIC_PASSWORD").unwrap_or("SecretPassword".to_string());

    server.get(
        "/search/",
        middleware! { |request| search_handler(request, &sonic_host, sonic_port, &sonic_password) },
    );
    server.utilize(StaticFilesHandler::new("static/"));

    match server.listen(format!("{}:{}", http_host, http_port)) {
        Ok(_) => {}
        Err(err) => {
            println!("Error starting: {}", err);
        }
    }
}

fn search_handler(request: &mut Request, host: &str, port: usize, password: &str) -> String {
    let params = request.query();
    let channel = params.get("channel").unwrap_or("general");
    let query = params.get("query").unwrap_or("Bret Victor");

    match search(
        &host,
        port,
        &password,
        "messages",
        &channel,
        &query,
        Some(10000),
        None,
    ) {
        Ok(items) => json!({"ok": true, "result": items[3..]}).to_string(),
        Err(err) => json!({"ok": false, "reason": format!("{:?}", err)}).to_string(),
    }
}

fn search(
    host: &str,
    port: usize,
    password: &str,
    collection: &str,
    channel: &str,
    query: &str,
    max_results: Option<i32>,
    locale: Option<&str>,
) -> Result<Vec<String>, std::io::Error> {
    let mut s = SearchChan::new(host, port, password).expect("Connection error");
    let handle = s.read();
    s.connect()?;
    let result = s.query(collection, channel, query, max_results, locale);
    match s.quit() {
        Ok(v) => match v.recv() {
            Ok(_) => {}
            Err(err) => {
                println!("Error recv quit: {:?}", err);
            }
        },
        Err(err) => {
            println!("Error quiting sonic connection: {:?}", err);
        }
    }
    handle.join().expect("Failed to wait process");
    result
}
