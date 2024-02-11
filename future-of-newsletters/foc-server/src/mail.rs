use aws_config::meta::region::RegionProviderChain;
use aws_sdk_ses::types::{Body, Content, Destination, Message};
use aws_sdk_ses::{Client, Error};
use serde::Deserialize;
use thiserror::Error;

use crate::db::Subscriber;

#[derive(Deserialize)]
pub struct RawConfig {
    title: Option<String>,
    from: Option<String>,
    base_url: Option<String>,
    html: Option<HtmlConfig>,
    text: Option<TextConfig>,
}

#[derive(Debug)]
pub struct Config {
    title: String,
    from: String,
    base_url: String,
    html: Option<HtmlConfig>,
    text: Option<TextConfig>,
}

#[derive(Deserialize, Debug, Clone)]
pub struct HtmlConfig {
    prefix: Option<String>,
    suffix: Option<String>,
}

#[derive(Deserialize, Debug, Clone)]
pub struct TextConfig {
    prefix: Option<String>,
    suffix: Option<String>,
}

#[derive(Error, Debug)]
pub enum ConfigLoadError {
    #[error("config parsing error")]
    ParseError(#[from] toml::de::Error),
    #[error("file rendering error")]
    ReadError(#[from] std::io::Error),
}

impl RawConfig {
    pub fn from_string(content: &str) -> Result<RawConfig, toml::de::Error> {
        let config: RawConfig = toml::from_str(content)?;
        Ok(config)
    }

    pub fn from_file(path: &str) -> Result<RawConfig, ConfigLoadError> {
        let content = std::fs::read_to_string(path)?;
        let config = Self::from_string(&content)?;
        Ok(config)
    }

    pub fn merge(&self, other: &Self) -> Self {
        Self {
            title: merge_options(self.title.as_ref(), other.title.as_ref()),
            from: merge_options(self.from.as_ref(), other.from.as_ref()),
            base_url: merge_options(self.base_url.as_ref(), other.base_url.as_ref()),
            html: if let Some(v) = self.html.as_ref() {
                if let Some(other_v) = other.html.as_ref() {
                    Some(v.merge(&other_v))
                } else {
                    self.html.clone()
                }
            } else {
                other.html.clone()
            },
            text: if let Some(v) = self.text.as_ref() {
                if let Some(other_v) = other.text.as_ref() {
                    Some(v.merge(&other_v))
                } else {
                    self.text.clone()
                }
            } else {
                other.text.clone()
            },
        }
    }

    pub fn to_config(self) -> Result<Config, ToConfigError> {
        let title = self
            .title
            .ok_or(ToConfigError::MissingField("title".into()))?;
        let from = self
            .from
            .ok_or(ToConfigError::MissingField("from".into()))?;
        let base_url = self
            .base_url
            .ok_or(ToConfigError::MissingField("base_url".into()))?;

        Ok(Config {
            title,
            from,
            base_url,
            html: self.html,
            text: self.text,
        })
    }
}

impl Config {
    pub fn get_html_wrappers(&self) -> (String, String) {
        if let Some(html) = &self.html {
            html.get_wrappers()
        } else {
            ("".into(), "".into())
        }
    }

    pub fn get_text_wrappers(&self) -> (String, String) {
        if let Some(text) = &self.text {
            text.get_wrappers()
        } else {
            ("".into(), "".into())
        }
    }
}

#[derive(Debug)]
pub enum ToConfigError {
    MissingField(String),
}

impl HtmlConfig {
    pub fn get_wrappers(&self) -> (String, String) {
        (
            self.prefix.as_ref().map_or("".to_string(), |v| v.clone()),
            self.suffix.as_ref().map_or("".to_string(), |v| v.clone()),
        )
    }

    pub fn merge(&self, other: &Self) -> Self {
        Self {
            prefix: merge_options(self.prefix.as_ref(), other.prefix.as_ref()),
            suffix: merge_options(self.suffix.as_ref(), other.suffix.as_ref()),
        }
    }
}

impl TextConfig {
    pub fn get_wrappers(&self) -> (String, String) {
        (
            self.prefix.as_ref().map_or("".to_string(), |v| v.clone()),
            self.suffix.as_ref().map_or("".to_string(), |v| v.clone()),
        )
    }

    pub fn merge(&self, other: &Self) -> Self {
        Self {
            prefix: merge_options(self.prefix.as_ref(), other.prefix.as_ref()),
            suffix: merge_options(self.suffix.as_ref(), other.suffix.as_ref()),
        }
    }
}

fn merge_options<T: Clone>(left: Option<&T>, right: Option<&T>) -> Option<T> {
    match (left, right) {
        (Some(v), None) => Some(v.clone()),
        (_, Some(v)) => Some(v.clone()),
        (None, None) => None,
    }
}

pub async fn make_aws_client() -> Client {
    let region_provider = RegionProviderChain::default_provider().or_else("us-east-1");
    let config = aws_config::from_env().region(region_provider).load().await;

    aws_sdk_ses::Client::new(&config)
}

#[derive(Error, Debug)]
pub enum NewsletterSendErr {
    #[error("message send error")]
    MessageSendError(#[from] MessageSendError),
    #[error("file rendering error")]
    ReadFileError(#[from] std::io::Error),
    #[error("csv parsing error")]
    CsvReadError(#[from] csv::Error),
}

pub async fn send_newsletter(
    config: &Config,
    mail_path: &str,
    subscribers: Vec<Subscriber>,
) -> Result<(), NewsletterSendErr> {
    println!("send newsletter: {} {mail_path}", config.title);
    let base_path = std::path::Path::new(mail_path);
    let mail_text_path = base_path.join("mail.txt");
    let mail_html_path = base_path.join("mail.html");

    let mail_text_content = std::fs::read_to_string(mail_text_path)?;
    let mail_html_content = std::fs::read_to_string(mail_html_path)?;

    let client = make_aws_client().await;

    send_message(
        &client,
        config,
        subscribers,
        &mail_text_content,
        &mail_html_content,
    )
    .await?;

    Ok(())
}

#[derive(Error, Debug)]
pub enum MessageSendError {
    #[error("template rendering error")]
    TemplateError(#[from] minijinja::Error),
    #[error("url format error")]
    UrlFormatError(#[from] url::ParseError),
    #[error("AWS SES error")]
    SesError(#[from] aws_sdk_ses::Error),
    #[error("AWS SES Build error")]
    SesBuildError(#[from] aws_sdk_ses::error::BuildError),
}

fn render_message(
    prefix: &str,
    body: &str,
    suffix: &str,
    ctx: minijinja::value::Value,
) -> Result<aws_sdk_ses::types::Content, MessageSendError> {
    let message_text = render_template(&format!("{prefix}{body}{suffix}"), ctx)?;

    Ok(Content::builder()
        .data(message_text)
        .charset("UTF-8")
        .build()?)
}

async fn send_message(
    client: &Client,
    config: &Config,
    subscribers: Vec<Subscriber>,
    message_body_text: &str,
    message_body_html: &str,
) -> Result<(), MessageSendError> {
    let mut count = 0;

    for subscriber in subscribers {
        count += 1;

        let unsubscribe_link =
            format_unsubscribe_link(&config.base_url, &subscriber.email, &subscriber.token)?;
        let ctx = minijinja::context! { unsubscribe_link => unsubscribe_link };

        let (prefix_html, suffix_html) = config.get_html_wrappers();
        let message_html =
            render_message(&prefix_html, message_body_html, &suffix_html, ctx.clone())?;

        let (prefix_text, suffix_text) = config.get_text_wrappers();
        let message_text =
            render_message(&prefix_text, message_body_text, &suffix_text, ctx.clone())?;

        let body = Body::builder()
            .html(message_html)
            .text(message_text)
            .build();

        let contacts = vec![subscriber.email.clone()];
        send_message_with_body(client, contacts, &config.from, &config.title, body).await?;

        if (count % 100) == 0 {
            println!("Sent to {count}");
        }
    }

    Ok(())
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
    Ok(render_template(
        CONFIRM_MAIL_TEMPLATE,
        minijinja::context! { confirm_link => confirm_link, unsubscribe_link => unsubscribe_link },
    )?)
}

pub fn render_template(
    template: &str,
    ctx: minijinja::value::Value,
) -> Result<String, minijinja::Error> {
    let mut env = minijinja::Environment::new();
    env.add_template("template.txt", template)?;
    let template = env.get_template("template.txt")?;

    template.render(ctx)
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

    #[test]
    fn test_parse_simple_config() {
        let config = RawConfig::from_string(
            r#"
            title = "Hello World"
            from = "Foo Bar <foo@bar.org>"
            base_url = "base url"
        "#,
        )
        .unwrap()
        .to_config()
        .unwrap();

        assert_eq!(config.base_url, "base url");
        assert_eq!(config.title, "Hello World");
        assert_eq!(config.from, "Foo Bar <foo@bar.org>");
    }

    #[test]
    fn test_parse_config_sections() {
        let config = RawConfig::from_string(
            r#"
            title = "Hello World"
            from = "Foo Bar <foo@bar.org>"
            base_url = "base url"

            [html]
            prefix = 'html "prefix"'
            suffix = "html suffix"

            [text]
            prefix = "text prefix"
            suffix = "text suffix"
        "#,
        )
        .unwrap()
        .to_config()
        .unwrap();

        assert_eq!(config.base_url, "base url");
        assert_eq!(config.title, "Hello World");
        assert_eq!(config.from, "Foo Bar <foo@bar.org>");
        let html = config.html.unwrap();
        assert_eq!(html.prefix.unwrap(), "html \"prefix\"");
        assert_eq!(html.suffix.unwrap(), "html suffix");
        let text = config.text.unwrap();
        assert_eq!(text.prefix.unwrap(), "text prefix");
        assert_eq!(text.suffix.unwrap(), "text suffix");
    }

    #[test]
    fn test_merge_base_all_empty() {
        let base_raw_config = RawConfig::from_string(
            r#"
        "#,
        )
        .unwrap();
        let other_raw_config = RawConfig::from_string(
            r#"
            title = "Hello World"
            from = "Foo Bar <foo@bar.org>"
            base_url = "base url"

            [html]
            prefix = 'html "prefix"'
            suffix = "html suffix"

            [text]
            prefix = "text prefix"
            suffix = "text suffix"
        "#,
        )
        .unwrap();
        let config = base_raw_config
            .merge(&other_raw_config)
            .to_config()
            .unwrap();

        assert_eq!(config.base_url, "base url");
        assert_eq!(config.title, "Hello World");
        assert_eq!(config.from, "Foo Bar <foo@bar.org>");
        let html = config.html.unwrap();
        assert_eq!(html.prefix.unwrap(), "html \"prefix\"");
        assert_eq!(html.suffix.unwrap(), "html suffix");
        let text = config.text.unwrap();
        assert_eq!(text.prefix.unwrap(), "text prefix");
        assert_eq!(text.suffix.unwrap(), "text suffix");
    }

    #[test]
    fn test_merge_other_all_empty() {
        let base_raw_config = RawConfig::from_string(
            r#"
            title = "Hello World"
            from = "Foo Bar <foo@bar.org>"
            base_url = "base url"

            [html]
            prefix = 'html "prefix"'
            suffix = "html suffix"

            [text]
            prefix = "text prefix"
            suffix = "text suffix"
        "#,
        )
        .unwrap();
        let other_raw_config = RawConfig::from_string(
            r#"
        "#,
        )
        .unwrap();
        let config = base_raw_config
            .merge(&other_raw_config)
            .to_config()
            .unwrap();

        assert_eq!(config.base_url, "base url");
        assert_eq!(config.title, "Hello World");
        assert_eq!(config.from, "Foo Bar <foo@bar.org>");
        let html = config.html.unwrap();
        assert_eq!(html.prefix.unwrap(), "html \"prefix\"");
        assert_eq!(html.suffix.unwrap(), "html suffix");
        let text = config.text.unwrap();
        assert_eq!(text.prefix.unwrap(), "text prefix");
        assert_eq!(text.suffix.unwrap(), "text suffix");
    }

    #[test]
    fn test_merge_override_all() {
        let base_raw_config = RawConfig::from_string(
            r#"
            title = "override me"
            from = "override me"
            base_url = "override me"

            [html]
            prefix = "override me"
            suffix = "override me"

            [text]
            prefix = "override me"
            suffix = "override me"
        "#,
        )
        .unwrap();
        let other_raw_config = RawConfig::from_string(
            r#"
            title = "Hello World"
            from = "Foo Bar <foo@bar.org>"
            base_url = "base url"

            [html]
            prefix = 'html "prefix"'
            suffix = "html suffix"

            [text]
            prefix = "text prefix"
            suffix = "text suffix"
        "#,
        )
        .unwrap();
        let config = base_raw_config
            .merge(&other_raw_config)
            .to_config()
            .unwrap();

        assert_eq!(config.title, "Hello World");
        assert_eq!(config.from, "Foo Bar <foo@bar.org>");
        assert_eq!(config.base_url, "base url");
        let html = config.html.unwrap();
        assert_eq!(html.prefix.unwrap(), "html \"prefix\"");
        assert_eq!(html.suffix.unwrap(), "html suffix");
        let text = config.text.unwrap();
        assert_eq!(text.prefix.unwrap(), "text prefix");
        assert_eq!(text.suffix.unwrap(), "text suffix");
    }

    #[test]
    fn test_merge_half_and_half() {
        let base_raw_config = RawConfig::from_string(
            r#"
            from = "Foo Bar <foo@bar.org>"
            base_url = "base url"

            [html]
            prefix = 'html "prefix"'

            [text]
            suffix = "text suffix"
        "#,
        )
        .unwrap();
        let other_raw_config = RawConfig::from_string(
            r#"
            title = "Hello World"

            [html]
            suffix = "html suffix"

            [text]
            prefix = "text prefix"
        "#,
        )
        .unwrap();
        let config = base_raw_config
            .merge(&other_raw_config)
            .to_config()
            .unwrap();

        assert_eq!(config.base_url, "base url");
        assert_eq!(config.title, "Hello World");
        assert_eq!(config.from, "Foo Bar <foo@bar.org>");
        let html = config.html.unwrap();
        assert_eq!(html.prefix.unwrap(), "html \"prefix\"");
        assert_eq!(html.suffix.unwrap(), "html suffix");
        let text = config.text.unwrap();
        assert_eq!(text.prefix.unwrap(), "text prefix");
        assert_eq!(text.suffix.unwrap(), "text suffix");
    }

    #[test]
    fn test_merge_half_and_half_2() {
        let base_raw_config = RawConfig::from_string(
            r#"
            from = "Foo Bar <foo@bar.org>"
            base_url = "base url"

            [html]
            prefix = 'html "prefix"'
            suffix = "html suffix"
        "#,
        )
        .unwrap();
        let other_raw_config = RawConfig::from_string(
            r#"
            title = "Hello World"

            [text]
            prefix = "text prefix"
            suffix = "text suffix"
        "#,
        )
        .unwrap();
        let config = base_raw_config
            .merge(&other_raw_config)
            .to_config()
            .unwrap();

        assert_eq!(config.base_url, "base url");
        assert_eq!(config.title, "Hello World");
        assert_eq!(config.from, "Foo Bar <foo@bar.org>");
        let html = config.html.unwrap();
        assert_eq!(html.prefix.unwrap(), "html \"prefix\"");
        assert_eq!(html.suffix.unwrap(), "html suffix");
        let text = config.text.unwrap();
        assert_eq!(text.prefix.unwrap(), "text prefix");
        assert_eq!(text.suffix.unwrap(), "text suffix");
    }
}
