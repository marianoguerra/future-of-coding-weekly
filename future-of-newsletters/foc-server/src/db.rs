use chrono::Utc;
use tokio_rusqlite::{params, Connection, Result};
use uuid::Uuid;

pub async fn open_and_setup(path: &str) -> Result<Connection> {
    let conn = Connection::open(path).await?;
    create_tables(&conn).await?;
    Ok(conn)
}

// Function to create the subscriptions table
pub async fn create_tables(conn: &Connection) -> Result<()> {
    conn.call(move |conn| {
        conn.execute(
            r###" 
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    email TEXT NOT NULL UNIQUE,
    token TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    confirmed_at TIMESTAMP,
    deleted_at TIMESTAMP
)
"###,
            [],
        )?;
        Ok(())
    })
    .await
}

pub fn new_token() -> String {
    Uuid::now_v7().to_string()
}

pub async fn add_subscription(conn: &Connection, email: &str, token: &str) -> Result<()> {
    let created_at = Utc::now().to_rfc3339();
    add_subscription_with_date(conn, email, token, created_at).await
}

pub async fn add_subscription_with_date(
    conn: &Connection,
    email: &str,
    token: &str,
    created_at: String,
) -> Result<()> {
    let email = email.to_string();
    let token = token.to_string();
    conn.call(move |conn| {
        conn.execute(
            r#"INSERT INTO newsletter_subscriptions (email, token, created_at)
VALUES (?1, ?2, ?3)
ON CONFLICT (email) DO UPDATE SET
    token = excluded.token,
    created_at = excluded.created_at,
    deleted_at = NULL
WHERE deleted_at IS NOT NULL;
"#,
            params![email, token, created_at],
        )?;
        Ok(())
    })
    .await
}

pub async fn confirm_subscription(conn: &Connection, email: &str, token: &str) -> Result<usize> {
    let confirmed_at = Utc::now().to_rfc3339();
    confirm_subscription_with_date(conn, email, token, confirmed_at).await
}

pub async fn confirm_subscription_with_date(
    conn: &Connection,
    email: &str,
    token: &str,
    confirmed_at: String,
) -> Result<usize> {
    let email = email.to_string();
    let token = token.to_string();
    conn.call(move |conn| {
        let rows = conn.execute(
            "UPDATE newsletter_subscriptions SET confirmed_at = ?1 WHERE email = ?2 AND token = ?3",
            params![confirmed_at, email, token],
        )?;
        Ok(rows)
    })
    .await
}

pub async fn remove_subscription(conn: &Connection, email: &str, token: &str) -> Result<usize> {
    let email = email.to_string();
    let token = token.to_string();
    conn.call(move |conn| {
        let current_time = Utc::now().to_rfc3339();
        let rows = conn.execute(
            "UPDATE newsletter_subscriptions SET deleted_at = ?1 WHERE email = ?2 AND token = ?3",
            params![current_time, email, token],
        )?;
        Ok(rows)
    })
    .await
}

#[derive(Debug)]
pub struct Subscriber {
    pub email: String,
    pub created_at: String,
    pub confirmed_at: Option<String>,
    pub token: String,
}

pub async fn get_active_subscriptions(conn: &Connection) -> Result<Vec<Subscriber>> {
    conn.call(move |conn| {
        let mut stmt =
            conn.prepare("SELECT email, created_at, confirmed_at, token FROM newsletter_subscriptions WHERE deleted_at IS NULL AND confirmed_at IS NOT NULL")?;
        let rows = stmt.query_map(params![], |row| Ok(Subscriber {
             email: row.get(0)?,
             created_at: row.get(1)?,
             confirmed_at: row.get(2)?,
             token: row.get(3)?,
        }))?;

        let mut subscriptions = Vec::new();
        for row in rows {
            subscriptions.push(row?);
        }
        Ok(subscriptions)
    })
    .await
}

#[cfg(test)]
mod tests {
    use super::*;

    async fn setup_in_memory_db() -> Result<Connection> {
        let conn = Connection::open_in_memory().await?;
        create_tables(&conn).await?;
        Ok(conn)
    }

    #[tokio::test]
    async fn test_add_subscription() -> Result<()> {
        let conn = setup_in_memory_db().await?;
        let token = new_token();
        add_subscription(&conn, "test@example.com", &token).await?;
        confirm_subscription(&conn, "test@example.com", &token).await?;

        let active_subscriptions = get_active_subscriptions(&conn).await?;

        assert_eq!(active_subscriptions.len(), 1);
        assert_eq!(active_subscriptions[0].email, "test@example.com");
        assert_eq!(active_subscriptions[0].token, token);
        Ok(())
    }

    #[tokio::test]
    async fn test_remove_subscription() -> Result<()> {
        let conn = setup_in_memory_db().await?;
        let token = new_token();
        add_subscription(&conn, "test@example.com", &token).await?;
        confirm_subscription(&conn, "test@example.com", &token).await?;

        remove_subscription(&conn, "test@example.com", "bad token").await?;
        assert_eq!(get_active_subscriptions(&conn).await?.len(), 1);

        remove_subscription(&conn, "test@example.com", &token).await?;
        assert_eq!(get_active_subscriptions(&conn).await?.len(), 0);

        Ok(())
    }

    #[tokio::test]
    async fn test_unsubscribe_subscribe_subscription() -> Result<()> {
        let conn = setup_in_memory_db().await?;
        let token = new_token();
        add_subscription(&conn, "test@example.com", &token).await?;
        confirm_subscription(&conn, "test@example.com", &token).await?;
        assert_eq!(get_active_subscriptions(&conn).await?.len(), 1);
        remove_subscription(&conn, "test@example.com", &token).await?;
        assert_eq!(get_active_subscriptions(&conn).await?.len(), 0);

        let token1 = new_token();
        add_subscription(&conn, "test@example.com", &token1).await?;
        let subs = get_active_subscriptions(&conn).await?;
        assert_eq!(subs.len(), 1);
        let sub = subs.get(0).unwrap();
        assert_eq!(sub.token, token1);
        Ok(())
    }

    #[tokio::test]
    async fn test_get_active_subscriptions() -> Result<()> {
        let conn = setup_in_memory_db().await?;
        let token = new_token();
        add_subscription(&conn, "active@example.com", &token).await?;
        confirm_subscription(&conn, "active@example.com", &token).await?;

        let token1 = new_token();
        add_subscription(&conn, "inactive@example.com", &token1).await?;
        confirm_subscription(&conn, "inactive@example.com", &token1).await?;
        remove_subscription(&conn, "inactive@example.com", &token1).await?;

        let token2 = new_token();
        add_subscription(&conn, "notconfirmed@example.com", &token2).await?;

        let active_subscriptions = get_active_subscriptions(&conn).await?;

        assert_eq!(active_subscriptions.len(), 1);
        assert_eq!(active_subscriptions[0].email, "active@example.com");
        Ok(())
    }
}
