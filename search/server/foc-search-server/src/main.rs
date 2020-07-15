use sonic_client::search::SearchChan;

use canteen::utils;
use canteen::{Canteen, Method, Request, Response};

fn search_handler(req: &Request) -> Response {
    let mut res = Response::new();

    let host = std::env::var("FOC_SONIC_HOST").unwrap_or("127.0.0.1".to_string());
    let password = std::env::var("FOC_SONIC_PASSWORD").unwrap_or("SecretPassword".to_string());
    let port = std::env::var("FOC_SONIC_PORT")
        .unwrap_or("1491".to_string())
        .parse::<usize>()
        .expect("FOC_SONIC_PORT is not a number");

    match search(
        &host,
        port,
        &password,
        "messages",
        req.params.get("channel").unwrap_or(&"general".to_string()),
        req.params
            .get("query")
            .unwrap_or(&"Bret Victor".to_string()),
        Some(10000),
        None,
    ) {
        Ok(items) => {
            res.set_status(200);
            res.set_content_type("application/json");
            res.append(format!("{:?}", items));
        }
        Err(err) => {
            println!("{:?}", err);
            res.set_status(500);
            res.set_content_type("application/json");
            res.append("{\"ok\":false,\"reason\":\"unknown\"}");
        }
    }

    res
}

fn main() {
    let mut cnt = Canteen::new();
    let http_host = std::env::var("FOC_HTTP_HOST").unwrap_or("127.0.0.1".to_string());
    let http_port = std::env::var("FOC_HTTP_PORT")
        .unwrap_or("8080".to_string())
        .parse::<u16>()
        .expect("FOC_HTTP_PORT is not a number");

    // bind to an address
    cnt.bind((&*http_host, http_port));

    // set the default route handler to show a 404 message
    cnt.set_default(utils::err_404);

    cnt.add_route("/search", &[Method::Get], search_handler);
    cnt.add_route("/static/<path:path>", &[Method::Get], utils::static_file);

    cnt.run();
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
    s.read();
    s.connect()?;
    s.query(collection, channel, query, max_results, locale)
}
