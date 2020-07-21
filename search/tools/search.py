import sys
import asyncio
import datetime

from asonic import Client
from asonic.enums import Channel

async def main(channel, term):
  c = Client(host='127.0.0.1', port=1491, password='SecretPassword', max_connections=100)
  await c.channel(Channel.SEARCH)
  keys = await c.query('messages', channel, term, limit=10000, locale='eng')
  one_day = datetime.timedelta(days=1)
  unique_dates = set()
  for key in keys:
      dt = datetime.date.fromtimestamp(float(key))
      dates = dt.isoformat() + ' ' + (dt + one_day).isoformat()
      unique_dates.add(dates)

  for dates in sorted(unique_dates):
      (from_date, to_date) = dates.split(' ')
      url = "https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate={}&toDate={}&channel={}&filter=".format(from_date, to_date, channel)
      print(url)

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main(sys.argv[1], sys.argv[2]))
