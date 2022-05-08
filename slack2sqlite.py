#!/usr/bin/env python3
import sys
import json
import glob
import sqlite3

def main(db_path, path_glob):
    (con, cur) = setup_db(db_path)
    for path in glob.glob(path_glob, recursive=True):
        with open(path, 'r') as handle:
            msgs = json.load(handle)
            for msg in msgs:
                insert_msg(cur, msg)

        con.commit()

    con.close()

FIELD_DEFAULTS = {
        "client_msg_id": '',
        "type": '',
        "text": '',
        "user": '',
        "user_name": '?', # this one is value in user_profile.name
        "ts": '',
        "team": '',
        "user_team": '',
        "source_team": '',
        "thread_ts": '',
        "is_locked": 0,
        "subscribed": 0,
}

FIELD_NAMES = list(FIELD_DEFAULTS.keys())
INSERT_MSG_QUERY = f"INSERT INTO message ({', '.join(FIELD_NAMES)}) VALUES ({', '.join(['?' for _ in FIELD_DEFAULTS])})"
INSERT_REPLY_QUERY = "INSERT INTO reply (user, ts, msg_ts) VALUES (?, ?, ?)"
INSERT_REACTION_QUERY = "INSERT INTO reaction (user, name, msg_ts) VALUES (?, ?, ?)"
INSERT_BLOCK_QUERY = "INSERT INTO msg_block (type, block_id, raw, msg_ts) VALUES (?, ?, ?, ?)"
INSERT_BLOCK_ELEMENT_QUERY = "INSERT INTO block_element (type, text, raw, block_id) VALUES (?, ?, ?, ?)"

def setup_db(db_path):
    con = sqlite3.connect(db_path)
    cur = con.cursor()

    cur.execute('''CREATE TABLE IF NOT EXISTS message (client_msg_id text, type text, text text, user text, user_name text, ts text, team text, user_team text, source_team text, user_profile integer, thread_ts text, is_locked integer, subscribed integer)''')

    cur.execute('''CREATE TABLE IF NOT EXISTS reply (user text, ts text, msg_ts text)''')
    cur.execute('''CREATE TABLE IF NOT EXISTS reaction (user text, name text, msg_ts text)''')
    cur.execute('''CREATE TABLE IF NOT EXISTS msg_block (type text, block_id text, raw text, msg_ts text)''')
    cur.execute('''CREATE TABLE IF NOT EXISTS block_element (type text, text text, raw text, block_id text)''')

    con.commit()

    return (con, cur)

def insert_msg(cur, msg):
    values = [msg.get(key, def_val)
              if key != "user_name"
              else msg.get('user_profile', {}).get('name', '?')
              for (key, def_val)
              in FIELD_DEFAULTS.items()]
    cur.execute(INSERT_MSG_QUERY, values)

    msg_ts = msg.get('ts', '?')
    for reply in msg.get('replies', []):
        cur.execute(INSERT_REPLY_QUERY, [reply.get('user', '?'), reply.get('ts', '?'), msg_ts])

    for reaction in msg.get('reactions', []):
        name = reaction.get('name', '?')
        for user in reaction.get('users', []):
            cur.execute(INSERT_REACTION_QUERY, [user, name, msg_ts])

    for block in msg.get('blocks', []):
        elements = block.get('elements', [])
        block_id = block.get('block_id', '?')
        cur.execute(INSERT_BLOCK_QUERY, [block.get('type', '?'), block_id, json.dumps(elements), msg_ts])
        for element in elements:
            cur.execute(INSERT_BLOCK_ELEMENT_QUERY, [element.get('type', '?'), element.get('text', '?'), json.dumps(element), block_id])


if __name__ == '__main__':
    main(*sys.argv[1:])
