use clap::Arg;
use libfoc::{db, mail, server::start};

const DEFAULT_PORT: u16 = 3852;
const DEFAULT_PORT_STR: &str = "3852";
const DEFAULT_ADDRESS: &str = "127.0.0.1";
const DEFAULT_DB_NAME: &str = "foc.db";
const COMMAND: &str = "foc";

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
            clap::Command::new("export-subscribers").arg(
                clap::Arg::new("db-path")
                    .long("db-path")
                    .value_parser(clap::builder::NonEmptyStringValueParser::new())
                    .action(clap::ArgAction::Set)
                    .required(true),
            ),
        )
        .subcommand(
            clap::Command::new("import-subscribers")
                .arg(
                    clap::Arg::new("db-path")
                        .long("db-path")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set)
                        .required(true),
                )
                .arg(
                    clap::Arg::new("subscribers-path")
                        .long("subscribers-path")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set)
                        .required(true),
                ),
        )
        .subcommand(
            clap::Command::new("send-newsletter")
                .arg(
                    clap::Arg::new("db-path")
                        .long("db-path")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set)
                        .required(true),
                )
                .arg(
                    clap::Arg::new("config-path")
                        .long("config-path")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set),
                )
                .arg(
                    clap::Arg::new("mail-path")
                        .long("mail-path")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set)
                        .required(true),
                ),
        )
        .subcommand(
            clap::Command::new("subscribe")
                .arg(
                    clap::Arg::new("db-path")
                        .long("db-path")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set)
                        .required(true),
                )
                .arg(
                    clap::Arg::new("mail")
                        .long("mail")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set),
                ),
        )
        .subcommand(
            clap::Command::new("unsubscribe")
                .arg(
                    clap::Arg::new("db-path")
                        .long("db-path")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set)
                        .required(true),
                )
                .arg(
                    clap::Arg::new("mail")
                        .long("mail")
                        .value_parser(clap::builder::NonEmptyStringValueParser::new())
                        .action(clap::ArgAction::Set),
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
            match db::open_and_setup(DEFAULT_DB_NAME).await {
                Ok(conn) => {
                    start(address, *port, conn).await;
                }
                Err(err) => {
                    eprintln!("Error opening database: {err:?}");
                }
            }
        }
        Some(("import-subscribers", matches)) => {
            cli_import_subscribers(matches).await;
        }
        Some(("send-newsletter", matches)) => {
            cli_send_newsletter(matches).await;
        }
        Some(("export-subscribers", matches)) => {
            cli_export_subscribers(matches).await;
        }
        Some(("subscribe", matches)) => {
            cli_subscribe(matches).await;
        }
        Some(("unsubscribe", matches)) => {
            cli_unsubscribe(matches).await;
        }
        _ => {}
    };
}

async fn cli_send_newsletter(matches: &clap::ArgMatches) {
    let mail_path = matches
        .get_one::<String>("mail-path")
        .expect("no mail-path");
    let db_path = matches.get_one::<String>("db-path").expect("no db-path");

    let base_config_path = matches
        .get_one::<String>("config-path")
        .expect("no config-path");
    let base_config = mail::RawConfig::from_file(base_config_path).expect("can't load base config");
    let config_path = std::path::Path::new(mail_path).join("config.toml");
    let mail_config =
        mail::RawConfig::from_file(config_path.to_str().expect("invalid config path"))
            .expect("can't load newsletter's config.toml");
    let config = base_config
        .merge(&mail_config)
        .to_config()
        .expect("invalid config merge");
    let conn = db::open_and_setup(db_path)
        .await
        .expect("can't open db connection");
    let subscribers = db::get_active_subscriptions(&conn)
        .await
        .expect("can't load active subscribers");

    if let Err(err) = mail::send_newsletter(&config, mail_path, subscribers).await {
        eprintln!("Error sending newsletter: {err:?}");
    }
}

async fn cli_export_subscribers(matches: &clap::ArgMatches) {
    let db_path = matches.get_one::<String>("db-path").expect("no db-path");

    let conn = db::open_and_setup(db_path)
        .await
        .expect("can't open db connection");

    let subscribers = db::get_active_subscriptions(&conn)
        .await
        .expect("error getting subscribers");
    let mut wtr = csv::Writer::from_writer(std::io::stdout());
    wtr.write_record([
        "E-mail",
        "Subscribe Date (GMT)",
        "confirm Date (GMT)",
        "Token",
    ])
    .expect("opening csv writer");
    for subscriber in subscribers {
        wtr.write_record(&[
            subscriber.email,
            subscriber.created_at,
            subscriber.confirmed_at.unwrap_or_else(|| "".to_string()),
            subscriber.token,
        ])
        .expect("writing csv record");
    }

    wtr.flush().expect("flushing writer");
}

async fn cli_import_subscribers(matches: &clap::ArgMatches) {
    let subscribers_path = matches
        .get_one::<String>("subscribers-path")
        .expect("no subscribers-path");

    let db_path = matches.get_one::<String>("db-path").expect("no db-path");

    let conn = db::open_and_setup(db_path)
        .await
        .expect("can't open db connection");

    let reader = csv::ReaderBuilder::new()
        .has_headers(true)
        .from_path(subscribers_path)
        .expect("can't create csv reader");

    for maybe_record in reader.into_records() {
        match maybe_record {
            Ok(record) => {
                if let (Some(mail), Some(created_raw)) = (record.get(0), record.get(1)) {
                    import_subscriber(&conn, mail, created_raw).await;
                } else {
                    eprintln!("Bad record: {record:?}");
                }
            }
            Err(err) => {
                eprintln!("Error reading record {err:?}");
            }
        }
    }
}

async fn import_subscriber(conn: &tokio_rusqlite::Connection, mail: &str, created_raw: &str) {
    let created_result = chrono::NaiveDateTime::parse_from_str(created_raw, "%Y-%m-%d %H:%M:%S");
    match created_result {
        Ok(created_at_ndt) => {
            let created_at = created_at_ndt.and_utc().to_rfc3339();
            let confirmed_at = chrono::Utc::now().to_rfc3339();
            let token = db::new_token();

            println!("{mail} {created_at} {confirmed_at} {token}");

            match db::add_subscription_with_date(&conn, mail, &token, created_at).await {
                Ok(()) => {
                    match db::confirm_subscription_with_date(&conn, mail, &token, confirmed_at)
                        .await
                    {
                        Ok(1) => {
                            println!("Added and confirmed");
                        }
                        Ok(count) => {
                            eprintln!("Expected to confirm one row, got: {count}");
                        }
                        Err(err) => {
                            eprintln!("Error confirming: {err:?}");
                        }
                    }
                }
                Err(err) => {
                    eprintln!("Error adding: {err:?}");
                }
            }
        }
        Err(err) => {
            eprintln!("Bad created at date format: {mail}: {created_raw} ({err:?})");
        }
    }
}

async fn cli_unsubscribe(matches: &clap::ArgMatches) {
    let db_path = matches.get_one::<String>("db-path").expect("no db-path");
    let email = matches.get_one::<String>("mail").expect("no mail");

    let conn = db::open_and_setup(db_path)
        .await
        .expect("can't open db connection");

    let subs = db::get_subscription_by_email(&conn, &email)
        .await
        .expect("no subscriptions");

    match subs.get(0) {
        Some(sub) => match db::remove_subscription(&conn, email, &sub.token).await {
            Ok(r) if r == 0 => {
                println!("No match for unsubscribe");
            }
            Ok(_r) => {
                println!("Unsubscribed {email}");
            }
            Err(err) => {
                eprintln!("error unsubscribing {err:?}");
            }
        },
        None => {
            eprintln!("subscription not found for {email}");
        }
    }
}

async fn cli_subscribe(matches: &clap::ArgMatches) {
    let db_path = matches.get_one::<String>("db-path").expect("no db-path");
    let email = matches.get_one::<String>("mail").expect("no mail");
    let token = db::new_token();

    let conn = db::open_and_setup(db_path)
        .await
        .expect("can't open db connection");

    match db::add_subscription(&conn, &email, &token).await {
        Ok(()) => match db::confirm_subscription(&conn, &email, &token).await {
            Ok(r) if r == 0 => {
                eprintln!("error confirming subscription (not found)");
            }
            Ok(_r) => {
                println!("subscribed {email}");
            }
            Err(err) => {
                eprintln!("error confirming subscription {err:?}");
            }
        },
        Err(err) => {
            eprintln!("error subscribing {err:?}");
        }
    }
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
        .level_for("aws_config::meta::region", log::LevelFilter::Off)
        // Output to stdout, files, and other Dispatch configurations
        .chain(std::io::stdout())
        .chain(fern::log_file("output.log")?)
        // Apply globally
        .apply()?;
    Ok(())
}
