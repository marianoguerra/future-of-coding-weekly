//@format
/*globals Deno*/
import {expandGlob} from 'https://deno.land/std@0.123.0/fs/mod.ts';
import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts';

async function main() {
  const [glob, curLinkPath] = Deno.args,
    rawData = await Deno.readFile(curLinkPath),
    decoder = new TextDecoder('utf-8'),
    text = decoder.decode(rawData, {stream: true}),
    titleCache = {};

  for (const line of text.split('\n')) {
    if (!line) {
      continue;
    }

    const [_count, url, title, _ts, status] = JSON.parse(line),
      isOkLink = status >= 200 && status <= 299;
    if (isOkLink) {
      titleCache[url] = title;
    }
  }

  await dumpLinks(glob, titleCache);
}

async function dumpLinks(glob, titleCache) {
  const decoder = new TextDecoder('utf-8'),
    urls = {};

  for await (const file of expandGlob(glob)) {
    const rawData = await Deno.readFile(file.path),
      data = JSON.parse(decoder.decode(rawData, {stream: true}));

    for (let {blocks, ts} of data) {
      if (!blocks) {
        continue;
      }

      const tsMs0 = +ts * 1000,
        tsMs = Number.isNaN(tsMs0) ? 0 : tsMs0;

      for (let {elements} of blocks) {
        if (!elements) {
          continue;
        }

        for (let {elements: elements1} of elements) {
          if (!elements1) {
            continue;
          }

          for (let {url: rawUrl} of elements1) {
            if (!rawUrl) {
              continue;
            }

            addUrl(rawUrl, urls, tsMs);
          }
        }
      }
    }
  }

  const urlList = Object.values(urls).sort(
    ({count: a, ts: tsA}, {count: b, ts: tsB}) => {
      const countDiff = b - a;
      return countDiff === 0 ? tsB - tsA : countDiff;
    }
  );

  await fetchTitles(urlList, titleCache);
}

function logUrlListEntry({rawUrl, count, title, status, ts}) {
  console.log(JSON.stringify([count, rawUrl, title, ts, status]));
}

function addUrl(rawUrl, urls, ts) {
  const url = rawUrl.replace(/^https?:\/\/(www\.)?/, '');
  if (url.startsWith('mailto:')) {
    return;
  }

  const curData = urls[url];
  if (curData === undefined) {
    urls[url] = {count: 0, url, title: url, rawUrl, status: -1, ts};
  }

  urls[url].count += 1;
}

async function fetchTitles(urlList, titleCache) {
  for (let entry of urlList) {
    try {
      const title = titleCache[entry.rawUrl];
      if (title) {
        entry.title = title;
        entry.status = 200;
      } else {
        await fetchTitle(entry);
      }
    } catch (error) {
      console.error(error);
    }

    logUrlListEntry(entry);
  }
}

const CUSTOM_TITLE_BY_DOMAIN = {
  'twitter.com': (entry, _url, urlText) => {
    entry.status = 200;
    entry.title = urlText;
  },
};
async function fetchTitle(entry) {
  const url = new URL(entry.rawUrl),
    handler = CUSTOM_TITLE_BY_DOMAIN[url.hostname];

  if (handler) {
    handler(entry, url, entry.rawUrl);
    return;
  }

  const res = await fetch(entry.rawUrl),
    contentType = res.headers.get('content-type') || '';

  entry.status = res.status;

  if (res.status > 299 || !contentType.includes('text/html')) {
    console.error(entry.rawUrl, res.status, contentType);
    return;
  }

  const html = await res.text(),
    domParser = new DOMParser(),
    doc = domParser.parseFromString(html, 'text/html'),
    titleNode = doc.querySelector('title'),
    node = titleNode || doc.querySelector('h1'),
    title = node && node.textContent;

  if (title) {
    if (title.length < 200) {
      entry.title = title.trim() || url;
    } else {
      console.error('title too long for', url, title.length);
    }
  }
}

main();
