import json
import asyncio
import datetime

from sanic import Sanic
from sanic.response import json

from asonic import Client
from asonic.enums import Channel

app = Sanic("FoC Search Server")
app.static('/history/', './history/')
app.static('/', './search')

async def search(_channel, term, offset=0, limit=100, host='127.0.0.1', port=1491, password='SecretPassword'):
  c = Client(host=host, port=port, password=password, max_connections=100)
  await c.channel(Channel.SEARCH)
  bucket = 'all'
  keys_raw = await c.query('messages', bucket, term, offset=offset, limit=limit, locale='eng')
  return [key.decode('utf-8') for key in keys_raw]

@app.route("/search/")
async def server(request):
  args = request.args
  channel = args.get('channel', 'general')
  term = args.get('query', 'Bret Victor')
  offset = parse_int_or(args.get('offset', '0'), 0)
  limit = parse_int_or(args.get('limit', '100'), 100)
  return json({"ok": True, "result": await search(channel, term, offset, limit)})

def parse_int_or(s, default_value=0):
    try:
        return int(s)
    except:
        return default_value

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)

