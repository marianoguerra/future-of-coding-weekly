import os
import sys
import json
import glob
import asyncio

from asonic import Client
from asonic.enums import Channel


async def main(history_glob):
  c = Client(host='127.0.0.1', port=1491, password="SecretPassword")
  await c.channel(Channel.INGEST)

  count = 0
  errors = 0
  for base_path in glob.glob(history_glob):
    for (dirpath, dirnames, _filenames) in os.walk(base_path):
      for month_dir in dirnames:
        month_dir_path = os.path.join(base_path, month_dir)
        for (dirpath, dirnames, _filenames) in os.walk(month_dir_path):
          for day_dir in dirnames:
            day_dir_path = os.path.join(month_dir_path, day_dir)
            for channel_filename in glob.glob(os.path.join(day_dir_path, '*.json')):
              channel_name = os.path.basename(channel_filename).split('.')[0]
              for item in json.load(open(channel_filename, 'r')):
                text = item.get('text', '').replace('\n', '')
                key = item.get('ts', '')
                if text:
                  try:
                    await c.push('messages', channel_name, key, text, 'eng')
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
    loop.run_until_complete(main(sys.argv[1]))
