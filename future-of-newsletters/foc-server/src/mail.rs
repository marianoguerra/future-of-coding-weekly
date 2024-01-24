use aws_config::meta::region::RegionProviderChain;
use aws_sdk_ses::types::{Body, Content, Destination, Message};
use aws_sdk_ses::{Client, Error};

async fn make_aws_client() -> Client {
    let region_provider = RegionProviderChain::default_provider().or_else("us-east-1");
    let config = aws_config::from_env().region(region_provider).load().await;

    aws_sdk_ses::Client::new(&config)
}

#[derive(Debug)]
pub enum NewsletterSendErr {
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

pub async fn send_newsletter(
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
