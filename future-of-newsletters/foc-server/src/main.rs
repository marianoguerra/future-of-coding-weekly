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
        .subcommand(clap::Command::new("export-subscribers"))
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
        Some(("send-newsletter", matches)) => {
            cli_send_newsletter(matches).await;
        }
        Some(("export-subscribers", _matches)) => match db::open_and_setup(DEFAULT_DB_NAME).await {
            Ok(conn) => match db::get_active_subscriptions(&conn).await {
                Ok(subscribers) => {
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
                Err(err) => {
                    eprintln!("Error listting subscriber: {err:?}");
                }
            },
            Err(err) => {
                eprintln!("Error opening database: {err:?}");
            }
        },
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
