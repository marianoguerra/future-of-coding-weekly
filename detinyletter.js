#!/usr/bin/env bun

function getTinyLetterURLs(s) {
  return s.match(/http:\/\/mail01.tinyletterapp.com\/[^\s)]+/g) ?? [];
}

async function resolveURLs(urls) {
  const r = [];

  for (const url of urls) {
    const body = await (await fetch(url)).text(),
      target = body
        .split('meta http-equiv="refresh" content="0;url=')[1]
        .split('"')[0];
    r.push([url, target]);
  }

  return r;
}

async function readText(path) {
  return await Bun.file(path).text();
}

async function writeText(path, content) {
  return await Bun.write(path, content);
}

async function readJSON(path) {
  return JSON.parse(await readText(path));
}

async function replaceURLs(content, urls) {
  const urlMap = {};

  for (const [from, to] of urls) {
    urlMap[from] = to;
  }

  return content.replace(
    /http:\/\/mail01.tinyletterapp.com\/[^\s)]+/g,
    (match) => {
      const newUrl = urlMap[match];
      return newUrl ?? match;
    },
  );
}

function logJSON(v) {
  console.log(toJSON(v));
}

function toJSON(v) {
  return JSON.stringify(v, null, 2);
}

async function main(args) {
  const [action, ...actionArgs] = args;

  switch (action) {
    case "dump-urls":
      logJSON(getTinyLetterURLs(await readText(path)));
      break;

    case "resolve-urls":
      logJSON(await resolveURLs(await readJSON(actionArgs[0])));
      break;

    case "replace-urls":
      console.log(
        await replaceURLs(
          await readText(actionArgs[0]),
          await readJSON(actionArgs[1]),
        ),
      );
      break;

    case "replace-in-place": {
      const contentPath = actionArgs[0],
        backupPath = contentPath + ".original",
        content = await readText(contentPath),
        urls = getTinyLetterURLs(content),
        urlPairs = await resolveURLs(urls),
        newContent = await replaceURLs(content, urlPairs);

      writeText(backupPath, content);
      writeText(contentPath, newContent);
      console.log("updated at", contentPath, "backup at", backupPath);
      break;
    }

    default:
      console.warn("Unknown action", action, actionArgs);
  }
}

await main(Bun.argv.slice(2));
