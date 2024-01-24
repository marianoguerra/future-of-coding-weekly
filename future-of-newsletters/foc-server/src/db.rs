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
    let email = email.to_string();
    let token = token.to_string();
    conn.call(move |conn| {
        let current_time = Utc::now().to_rfc3339();
        conn.execute(
            "INSERT INTO newsletter_subscriptions (email, token, created_at) VALUES (?1, ?2, ?3)",
            params![email, token, current_time],
        )?;
        Ok(())
    })
    .await
}

pub async fn remove_subscription(conn: &Connection, email: &str, token: &str) -> Result<()> {
    let email = email.to_string();
    let token = token.to_string();
    conn.call(move |conn| {
        let current_time = Utc::now().to_rfc3339();
        conn.execute(
            "UPDATE newsletter_subscriptions SET deleted_at = ?1 WHERE email = ?2 ANd token = ?3",
            params![current_time, email, token],
        )?;
        Ok(())
    })
    .await
}

#[derive(Debug)]
pub struct Subscriber {
    pub email: String,
    pub created_at: String,
    pub token: String,
}

pub async fn get_active_subscriptions(conn: &Connection) -> Result<Vec<Subscriber>> {
    conn.call(move |conn| {
        let mut stmt =
            conn.prepare("SELECT email, created_at, token FROM newsletter_subscriptions WHERE deleted_at IS NULL")?;
        let rows = stmt.query_map(params![], |row| Ok(Subscriber {
             email: row.get(0)?,
             created_at: row.get(1)?,
             token: row.get(2)?,
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

        remove_subscription(&conn, "test@example.com", "bad token").await?;
        assert_eq!(get_active_subscriptions(&conn).await?.len(), 1);

        remove_subscription(&conn, "test@example.com", &token).await?;
        assert_eq!(get_active_subscriptions(&conn).await?.len(), 0);

        Ok(())
    }

    #[tokio::test]
    async fn test_get_active_subscriptions() -> Result<()> {
        let conn = setup_in_memory_db().await?;
        add_subscription(&conn, "active@example.com", &new_token()).await?;
        let token = new_token();
        add_subscription(&conn, "inactive@example.com", &token).await?;
        remove_subscription(&conn, "inactive@example.com", &token).await?;

        let active_subscriptions = get_active_subscriptions(&conn).await?;

        assert_eq!(active_subscriptions.len(), 1);
        assert_eq!(active_subscriptions[0].email, "active@example.com");
        Ok(())
    }
}
