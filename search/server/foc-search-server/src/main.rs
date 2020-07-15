use sonic_client::search::SearchChan;

fn main() {
    let host = "127.0.0.1";
    let port = 1491;
    let password = "SecretPassword";

    let mut s = SearchChan::new(host, port, password).expect("Connection error");
    let handle = s.read();
    match s.connect() {
        Ok(_) => {
            let collection = "messages";
            let channel = "general";
            let query = "victor";
            let max_results = 10000;
            let offset = None;

            match s.query(collection, channel, query, Some(max_results), offset) {
                Ok(r) => {
                    println!("result: {:?}", r);
                }
                Err(err) => {
                    println!("Error in query: {:?}", err);
                }
            }
        }
        Err(err) => {
            println!("Error in connect: {:?}", err);
        }
    }

    match handle.join() {
        Ok(_) => {
            println!("join!");
        }
        Err(err) => {
            println!("Error in join: {:?}", err);
        }
    }
}
