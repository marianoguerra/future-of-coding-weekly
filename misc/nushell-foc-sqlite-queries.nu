# most messages
db open foc.sqlite | db query "SELECT COUNT(*) as count, user_name FROM message GROUP BY user ORDER BY count DESC" | first 10

# most replies
db open foc.sqlite | db query "SELECT COUNT(*) as count, user FROM reply GROUP BY user ORDER BY count DESC" | first 10

# most common reactions
db open foc.sqlite | db query "SELECT COUNT(*) as count, name FROM reaction GROUP BY name ORDER BY count DESC" | first 10

# most comments in thread
db open foc.sqlite | db query "SELECT COUNT(*) as count, msg_ts FROM reply GROUP BY msg_ts ORDER BY count DESC" | first 10

# most comments in thread (text)
for msg in (db open foc.sqlite | db query "SELECT COUNT(*) as count, msg_ts FROM reply GROUP BY msg_ts ORDER BY count DESC" | first 10) {
    db open foc.sqlite
        | db query $"SELECT * from message WHERE ts = \"($msg.msg_ts)\"" 
        | first 
        | get text
}

for msg in (db open foc.sqlite | db query "SELECT COUNT(*) as count, msg_ts FROM reply GROUP BY msg_ts ORDER BY count DESC" | first 10) { echo $"SELECT * from message WHERE ts = '($msg.msg_ts)'" }

# fetch text of message by id
db open foc.sqlite | db query 'SELECT * from message WHERE ts = "1570632039.005300"' | get text

# msg block type count
db open foc.sqlite | db query "SELECT COUNT(*) as count, type FROM block_element GROUP BY type ORDER BY count DESC"

# block element type count
db open foc.sqlite | db query "SELECT COUNT(*) as count, type FROM block_element GROUP BY type ORDER BY count DESC"

db open foc.sqlite | db schema | get databases.tables
db open foc.sqlite | db schema | get databases.tables.message.columns
db open foc.sqlite | db schema | get databases.tables.reply.columns
db open foc.sqlite | db schema | get databases.tables.reaction.columns
db open foc.sqlite | db schema | get databases.tables.msg_block.columns
db open foc.sqlite | db schema | get databases.tables.block_element.columns
