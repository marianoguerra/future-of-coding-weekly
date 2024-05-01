#!/usr/bin/env python3
import sys
import json
import glob
import sqlite3
import pathlib

class Channels:
    def __init__(self, by_name):
        self.by_name = by_name

    def from_name(self, name):
        return self.by_name[name]

class Channel:
    def __init__(self, id, name, is_old_name, info):
        self.id = id
        self.name = name
        self.info = info
        self.is_old_name = is_old_name

    def to_old_name(self):
        return Channel(self.id, self.name, True, self.info)

def parse_channels(path):
    r = {}
    with open(path, 'r') as handle:
        items = json.load(handle)
        for info in items:
            id = info.get("id")
            name = info.get("name")
            g = Channel(id, name, False, info)
            r[name] = g
            prev_names = info.get("previous_names", [])

            for name in prev_names:
                # some groups are their own previous names
                if name not in r:
                    r[name] = g.to_old_name()

    return Channels(r)

class Users:
    def __init__(self, by_name):
        self.by_name = by_name

    def from_name(self, name):
        return self.by_name[name]

class User:
    def __init__(self, id, name, info):
        self.id = id
        self.name = name
        self.info = info

def parse_users(path):
    r = {}
    with open(path, 'r') as handle:
        items = json.load(handle)
        for info in items:
            id = info.get("id")
            name = info.get("real_name", info.get("name", id))
            g = User(id, name, info)
            r[name] = g

    return Users(r)


def main(db_path, channels_path, users_path, path_glob):
    channels = parse_channels(channels_path)
    users = parse_users(users_path)

    (con, cur) = setup_db(db_path)

    for channel in channels.by_name.values():
        if not channel.is_old_name:
            cur.execute(INSERT_CHANNEL_QUERY, [channel.id, channel.name])

    for user in users.by_name.values():
        cur.execute(INSERT_USER_QUERY, [user.id, user.name])

    for path in glob.glob(path_glob, recursive=True):
        with open(path, 'r') as handle:
            p = pathlib.Path(path)
            channel = channels.from_name(p.stem)
            msgs = json.load(handle)
            for msg in msgs:
                insert_msg(cur, msg, channel)

        con.commit()

    con.close()

FIELD_DEFAULTS = {
        "client_msg_id": '',
        "type": '',
        "text": '',
        "user": '',
        "ts": '',
        "team": '',
        "user_team": '',
        "source_team": '',
        "thread_ts": '',
        "is_locked": 0,
        "subscribed": 0,
        "channel_id": '',
}


FIELD_NAMES = list(FIELD_DEFAULTS.keys())
INDEX_OF_TS = FIELD_NAMES.index('ts')
INSERT_MSG_QUERY = f"INSERT INTO message ({', '.join(FIELD_NAMES)}) VALUES ({', '.join(['?' for _ in FIELD_DEFAULTS])})"
INSERT_REPLY_QUERY = "INSERT INTO reply (user, ts, msg_ts) VALUES (?, ?, ?)"
INSERT_REACTION_QUERY = "INSERT INTO reaction (user, name, msg_ts) VALUES (?, ?, ?)"
INSERT_BLOCK_QUERY = "INSERT INTO msg_block (type, block_id, raw, msg_ts) VALUES (?, ?, ?, ?)"
INSERT_CHANNEL_QUERY = "INSERT INTO channel (id, name) VALUES (?, ?)"
INSERT_USER_QUERY = "INSERT INTO user (id, name) VALUES (?, ?)"

def setup_db(db_path):
    con = sqlite3.connect(db_path)
    cur = con.cursor()

    cur.execute('''CREATE TABLE IF NOT EXISTS message (client_msg_id text, type text, text text, user text, ts int, team text, user_team text, source_team text, thread_ts text, is_locked integer, subscribed integer, channel_id text)''')

    cur.execute('''CREATE TABLE IF NOT EXISTS reply (user text, ts text, msg_ts text)''')
    cur.execute('''CREATE TABLE IF NOT EXISTS reaction (user text, name text, msg_ts text)''')
    cur.execute('''CREATE TABLE IF NOT EXISTS msg_block (type text, block_id text, raw text, msg_ts text)''')

    cur.execute('''CREATE TABLE IF NOT EXISTS channel (id text, name text)''')

    cur.execute('''CREATE TABLE IF NOT EXISTS user (id text, name text)''')

    con.commit()

    return (con, cur)

def insert_msg(cur, msg, channel):
    values = [msg.get(key, def_val) for (key, def_val) in FIELD_DEFAULTS.items()]

    values[-1] = channel.id
    values[INDEX_OF_TS] = int(float(values[INDEX_OF_TS]))

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


if __name__ == '__main__':
    main(*sys.argv[1:])
