use aws_config::meta::region::RegionProviderChain;
use aws_sdk_ses::types::{Body, Content, Destination, Message};
use aws_sdk_ses::{Client, Error};
use thiserror::Error;

pub async fn make_aws_client() -> Client {
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

pub async fn send_newsletter(
    title: &str,
    mail_path: &str,
    subscribers: Vec<String>,
) -> Result<(), NewsletterSendErr> {
    println!("send newsletter: {title} {mail_path}");
    let base_path = std::path::Path::new(mail_path);
    let mail_text_path = base_path.join("mail.txt");
    let mail_html_path = base_path.join("mail.html");

    let mail_text_content = std::fs::read_to_string(mail_text_path)?;
    let mail_html_content = std::fs::read_to_string(mail_html_path)?;

    let client = make_aws_client().await;
    let mut count = 0;
    for address in subscribers {
        send_message(
            &client,
            vec![address],
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

    send_message_with_body(client, contacts, from, subject, body).await
}

const CONFIRM_MAIL_TEMPLATE: &str = r###"
Please confirm your subscription by clicking the link below:

{{confirm_link}}

If you don't want to subscribe, please ignore this email. 

---

Use this link to unsubscribe {{unsubscribe_link}}
"###;

pub fn format_action_link(
    base_url: &str,
    action: &str,
    mail: &str,
    token: &str,
) -> Result<String, url::ParseError> {
    let mut link = url::Url::parse(base_url)?;

    link.query_pairs_mut()
        .append_pair("action", action)
        .append_pair("mail", mail)
        .append_pair("token", token);

    Ok(link.to_string())
}

pub fn format_confirm_link(
    base_url: &str,
    mail: &str,
    token: &str,
) -> Result<String, url::ParseError> {
    format_action_link(base_url, "confirm", mail, token)
}

pub fn format_unsubscribe_link(
    base_url: &str,
    mail: &str,
    token: &str,
) -> Result<String, url::ParseError> {
    format_action_link(base_url, "unsubscribe", mail, token)
}

#[derive(Error, Debug)]
pub enum FormatMessageError {
    #[error("template rendering error")]
    TemplateError(#[from] minijinja::Error),
    #[error("url format error")]
    UrlFormatError(#[from] url::ParseError),
}

pub fn format_confirm_address_message(
    base_url: &str,
    mail: &str,
    token: &str,
) -> Result<String, FormatMessageError> {
    let confirm_link = format_confirm_link(base_url, mail, token)?;
    let unsubscribe_link = format_unsubscribe_link(base_url, mail, token)?;
    let mut env = minijinja::Environment::new();
    env.add_template("confirm.txt", CONFIRM_MAIL_TEMPLATE)?;
    let template = env.get_template("confirm.txt")?;

    Ok(template.render(
        minijinja::context! { confirm_link => confirm_link, unsubscribe_link => unsubscribe_link },
    )?)
}

#[derive(Error, Debug)]
pub enum SendMessageError {
    #[error("format message error")]
    FormatError(#[from] FormatMessageError),
    #[error("mail send error")]
    UrlFormatError(#[from] Error),
}

pub async fn send_confirm_address_message(
    client: &Client,
    base_url: &str,
    mail: &str,
    token: &str,
    from: &str,
    subject: &str,
) -> Result<(), SendMessageError> {
    let message_text = format_confirm_address_message(base_url, mail, token)?;
    Ok(send_plain_message(client, vec![mail.to_string()], from, subject, &message_text).await?)
}

pub async fn send_plain_message(
    client: &Client,
    contacts: Vec<String>,
    from: &str,
    subject: &str,
    message_text: &str,
) -> Result<(), Error> {
    let body_text_content = Content::builder()
        .data(message_text)
        .charset("UTF-8")
        .build()?;

    let body = Body::builder().text(body_text_content).build();

    send_message_with_body(client, contacts, from, subject, body).await
}

pub async fn send_message_with_body(
    client: &Client,
    contacts: Vec<String>,
    from: &str,
    subject: &str,
    body: Body,
) -> Result<(), Error> {
    let mut dest: Destination = Destination::builder().build();
    dest.to_addresses = Some(contacts);
    let subject_content = Content::builder().data(subject).charset("UTF-8").build()?;

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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add_subscription() {
        let text =
            format_confirm_address_message("http://foo.com", "a@b.com", "secret123").unwrap();
        assert_eq!(
            text.contains("http://foo.com/?action=confirm&mail=a%40b.com&token=secret123"),
            true
        );
        assert_eq!(
            text.contains("http://foo.com/?action=unsubscribe&mail=a%40b.com&token=secret123"),
            true
        );
    }

    #[test]
    fn test_format_confirm_link() {
        assert_eq!(
            format_confirm_link("http://foo.com", "a@b.com", "secret123").unwrap(),
            "http://foo.com/?action=confirm&mail=a%40b.com&token=secret123"
        );
    }

    #[test]
    fn test_format_unsubscribe_link() {
        assert_eq!(
            format_unsubscribe_link("http://foo.com", "a@b.com", "secret123").unwrap(),
            "http://foo.com/?action=unsubscribe&mail=a%40b.com&token=secret123"
        );
    }
}
