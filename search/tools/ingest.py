import os
import sys
import json
import glob
import asyncio

from asonic import Client
from asonic.enums import Channel

def user_ids_to_names(path):
    result = {}
    for user_data in json.load(open(path)):
        user_id = user_data['id']
        name = user_data.get('name', user_id)
        real_name = user_data.get('real_name', name)
        result[user_id] = '@' + name + ':' + real_name

    return result


async def main(history_glob, users_path):
  user_id_to_name = user_ids_to_names(users_path)
  c = Client(host='127.0.0.1', port=1491, password="SecretPassword")
  await c.channel(Channel.INGEST)

  count = 0
  errors = 0
  for base_path in glob.glob(history_glob):
    year_dir = os.path.basename(base_path)
    for (dirpath, dirnames, _filenames) in os.walk(base_path):
      for month_dir in dirnames:
        month_dir_path = os.path.join(base_path, month_dir)
        for (dirpath, dirnames, _filenames) in os.walk(month_dir_path):
          for day_dir in dirnames:
            day_dir_path = os.path.join(month_dir_path, day_dir)
            msg_date = year_dir + '-' + month_dir + '-' + day_dir
            for channel_filename in glob.glob(os.path.join(day_dir_path, '*.json')):
              channel_name = os.path.basename(channel_filename).split('.')[0]
              for item in json.load(open(channel_filename, 'r')):
                text = item.get('text', '').replace('\n', '')
                # it seems that messages are either stored in the day thread_ts falls
                # or the day that ts falls, just in case we store both and the
                # date of the file as key
                ts = item.get('ts', '0')
                thread_ts = item.get('thread_ts', ts)
                key =  ts + ':' + thread_ts + ':' + msg_date + ':' + channel_name
                user_id = item.get('user', '?')
                user_name = user_id_to_name.get(user_id, '@unknown:unknown')
                bucket = 'all'

                if text:
                  try:
                    await c.push('messages', bucket, key, user_name + ' ' + text, 'eng')
                    count += 1
                    if count % 100 == 0:
                      print('.', end='', flush=True)
                  except Exception as ex:
                    errors += 1
                    print('messages', channel_name, key, text)
                    print(ex)

  print('count', count, 'errors', errors)

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main(sys.argv[1], sys.argv[2]))
