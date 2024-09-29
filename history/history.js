//@format
import {mdToHTML} from './md.js';
import {getNameToCode, skinIdsToCodes, textFromCode} from './emoji.js';
import {AUTHORS} from './common.js';

let historyPathBase = '/history';

function setHistoryPathBase(v) {
  historyPathBase = v;
}

function zeroUnpad(v) {
  return v.replace(/^0+/g, '');
}

function loadMsgsForDay(year, month0, day0, channel) {
  const month = zeroUnpad('' + month0),
    day = zeroUnpad('' + day0),
    path = `${historyPathBase}/${year}/${month}/${day}/${channel}.json`;

  return fetch(path).then((resp) => resp.json());
}

function loadUsers() {
  return fetch(`${historyPathBase}/users.json?t=${new Date().getTime()}`)
    .then((resp) => resp.json())
    .then((usersData) => {
      return usersToUsersById(usersData);
    });
}

function loadChannels() {
  return fetch(`${historyPathBase}/channels.json?t=${new Date().getTime()}`)
    .then((resp) => resp.json())
    .then((data) => {
      return channelsToChannelsById(data);
    });
}

function msgMatchesFilter(msg, filter) {
  const matches = msg.$filterText.indexOf(filter) !== -1;
  return matches;
}

function downloadAs(exportObj, exportName, contentType) {
  const dataBlob = new Blob([exportObj], {type: contentType});

  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(dataBlob, exportName);
  } else {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(dataBlob);
    link.setAttribute('download', exportName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

function mdLink(label, url) {
  return `[${humanizeUrl(label)}](${url})`;
}

function findFirstLink(msg) {
  const {blocks, attachments} = msg,
    firstAttachment = attachments ? attachments[0] : null;
  if (attachmentCanBeFirstLink(firstAttachment)) {
    addMsgAttachmentsText(msg);

    return [
      attachmentThumbnail(firstAttachment),
      subjectLineForAttachment(firstAttachment),
    ];
  }

  if (!blocks) {
    return [null, null];
  }

  for (let i = 0, len = blocks.length; i < len; i += 1) {
    const block = blocks[i];
    if (block.type === 'rich_text') {
      const elems = block.elements;
      for (let j = 0, len = elems.length; j < len; j += 1) {
        const elem = elems[j];
        if (
          elem.type === 'rich_text_section' ||
          elem.type === 'rich_text_quote'
        ) {
          const subElems = elem.elements;
          for (let k = 0, len = subElems.length; k < len; k += 1) {
            const subElem = subElems[k];
            if (subElem.type === 'link') {
              const {url, text} = subElem,
                label = text || url;

              const match = url.match(
                /^https:\/\/(twitter|x).com\/(.*)\/status\/[0-9]+/
              );
              if (match === null) {
                return [urlThumbnail(url), '📝 ' + mdLink(label, url)];
              } else {
                return [null, '🐦 ' + mdLink('Tweet from @' + match[1], url)];
              }
            }
          }
        }
      }
    }
  }

  return [null, null];
}

function msgToMdNL(msg, linkPrefix) {
  const userLink = AUTHORS[msg.$userName],
    userText = userLink || `**${msg.$userName}**`,
    conversationLink = mdLink(
      '🧵 conversation',
      `${linkPrefix}#${msg.$dateStrISO}`
    ),
    [thumbnail, resourceLink] = findFirstLink(msg),
    thumbnailText = thumbnail ? thumbnail + '\n\n' : '',
    resourceText = resourceLink ? `${resourceLink} via ` : '💬 ',
    oldMark = msg.$isOlder ? '🕰️ ' : '',
    base = `## ${resourceText}${userText}${oldMark}\n\n${conversationLink}\n\n${thumbnailText}${msg.$text}\n${msg.$attachmentsText}\n${msg.$filesText}`;

  return base;
}

function msgToMd(msg) {
  const base = `_[${msg.$dateStr}]_ **${msg.$userName}**:\n\n${msg.$text}\n${msg.$attachmentsText}\n${msg.$filesText}`;
  if (msg.responses.length === 0) {
    return base;
  } else {
    return (
      base +
      '\n\n\n' +
      msg.responses
        .map(
          (msg) =>
            `> _[${msg.$dateStr}]_ **${msg.$userName}**:\n\n${msg.$text}\n${msg.$attachmentsText}\n${msg.$filesText}`
        )
        .join('\n\n\n')
    );
  }
}

function dummyUser(user) {
  return {user, name: user, real_name: user, profile: {real_name: user}};
}

function getRealName(username, users) {
  const user = users[username];
  return user === undefined ? username : '**' + user.real_name + '**';
}

function subjectLineForAttachment(att) {
  if (att.service_name === 'twitter') {
    // tweets with no text (like a video) have no text field O.o
    return `🐦 [${att.author_name}](https://x.com/${att.author_subname})`;
  } else if (
    att.service_name === 'Twitter' ||
    att.service_name === 'X (formerly Twitter)'
  ) {
    // tweets with no text (like a video) have no text field O.o
    const {title, fallback, title_link, from_url, original_url} = att,
      author = title || fallback,
      url = title_link || from_url || original_url;
    return `🐦 [${author}](${url})`;
  } else if (att.service_name === 'YouTube' || att.service_name === 'Vimeo') {
    return `🎥 [${att.title}](${att.title_link})`;
  } else if (att.title && att.title_link) {
    return `📝 [${att.title}](${att.title_link})`;
  } else {
    return '';
  }
}

const TW_URL_REF_REGEX = /<(https?:\/\/.*?)>/g,
  TW_MENTION_REF_REGEX = /<(https?:\/\/.*?)\|(@.*?)>/g;
function enrichAttachment(att) {
  if (att.service_name === 'twitter') {
    // tweets with no text (like a video) have no text field O.o
    const text = (
      (att.text || '') +
      (att.thumb_url ? `\n\n![Tweet Thumbnail](${att.thumb_url})` : '')
    )
      .replace(TW_MENTION_REF_REGEX, (_, url, handle) => `[${handle}](${url})`)
      .replace(TW_URL_REF_REGEX, (_, url) => url)
      .replace(EMOJI_REF_REGEX, (_, emojiCode) =>
        textFromCode(EMOJI_NAME_TO_CODE[emojiCode])
      )
      .replace(/\n/g, '\n> ');
    att.$text = `\n> 🐦 [${att.author_name}](https://x.com/${att.author_subname}): ${text}`;
  } else if (
    att.service_name === 'Twitter' ||
    att.service_name === 'X (formerly Twitter)'
  ) {
    // tweets with no text (like a video) have no text field O.o
    const {
        title,
        fallback,
        title_link,
        from_url,
        original_url,
        text,
        image_url,
      } = att,
      author = title || fallback,
      url = title_link || from_url || original_url,
      md = (
        `\n🐦 [${author}](${url}): ${text || ''}` +
        (image_url ? `\n\n![Tweet Thumbnail](${image_url})` : '')
      )
        .replace(EMOJI_REF_REGEX, (_, emojiCode) =>
          textFromCode(EMOJI_NAME_TO_CODE[emojiCode])
        )
        .replace(/\n/g, '\n> ');
    att.$text = md;
    console.log(text, md);
  } else if (att.service_name === 'YouTube' || att.service_name === 'Vimeo') {
    const {thumb_url, title} = att,
      previewMd = thumb_url ? `\n>\n> ![${title}](${thumb_url})` : '';
    att.$text = `> 🎥 [${att.title}](${att.title_link})${previewMd}`;
  } else if (att.title && att.title_link) {
    const moreText = att.text ? `\n>\n>${att.text}` : '';
    att.$text = `> 📝 [${att.title}](${att.title_link})${moreText}`;
  } else if (att.image_url) {
    att.$text = `> ![${att.fallback || att.image_url}](${att.image_url})`;
  } else if (att.fallback) {
    att.$text = '> ' + att.fallback.replace(/\n/g, '\n> ');
  } else {
    att.$text = '';
  }
}

function attachmentCanBeFirstLink(att) {
  return (
    att &&
    (att.service_name === 'YouTube' ||
      att.service_name === 'Vimeo' ||
      (att.title && att.title_link))
  );
}

function attachmentThumbnail(att) {
  if (!att) {
    return null;
  }

  if (att.service_name === 'YouTube') {
    return urlThumbnail(att.title_link);
  } else if (att.service_name === 'Vimeo') {
    return `![Vimeo Thumbnail](${att.thumb_url})`;
  }

  return null;
}

const YOUTUBE_REGEX = /youtu(?:.*\/v\/|.*v=|\.be\/)([A-Za-z0-9_-]{11})/i;
function urlThumbnail(url) {
  const match = url.match(YOUTUBE_REGEX),
    id = match && match[1];
  if (id) {
    return `![Youtube Thumbnail](https://img.youtube.com/vi/${id}/hqdefault.jpg)`;
  } else {
    return null;
  }
}

const ENTITIES_TO_TEXT = {lt: '<', gt: '>', amp: '&'},
  EMOJI_NAME_TO_CODE = getNameToCode(),
  USER_REF_REGEX = /<@(.*?)>/g,
  ENTITIES_REGEX = /&(gt|lt|amp);/g,
  GROUP_REF_REGEX = /<#(.*?)\|(.*?)>/g,
  URL_REF_REGEX = /<([^|>].*?)>/g,
  URL_LABEL_REF_REGEX = /<([^>]*?)\|([^>]*?)>/g,
  THING_REF_REGEX = /<!(.*?)>/g,
  SKIN_REF_REGEX_TEXT = ':(' + Object.keys(skinIdsToCodes).join('|') + '):',
  SKIN_REF_REGEX = new RegExp(SKIN_REF_REGEX_TEXT, 'g'),
  EMOJI_REF_REGEX_TEXT =
    ':(' + Object.keys(EMOJI_NAME_TO_CODE).join('|').replace('+', '\\+') + '):',
  EMOJI_REF_REGEX = new RegExp(EMOJI_REF_REGEX_TEXT, 'g');
function parseMsgText(msg, {users}) {
  return msg.text
    .replace(URL_LABEL_REF_REGEX, (_, url, label) => `[${label}](${url})`)
    .replace(USER_REF_REGEX, (_, username) => getRealName(username, users))
    .replace(
      GROUP_REF_REGEX,
      (_, _gid, groupName) => '**`#' + groupName + '`**'
    )
    .replace(THING_REF_REGEX, (_, thing) => '**`@' + thing + '`**')
    .replace(URL_REF_REGEX, (_, url) => `[${url}](${url})`)
    .replace(
      ENTITIES_REGEX,
      (match, entity) => ENTITIES_TO_TEXT[entity] || match
    )
    .replace(EMOJI_REF_REGEX, (_, emojiCode) =>
      textFromCode(EMOJI_NAME_TO_CODE[emojiCode])
    )
    .replace(SKIN_REF_REGEX, (_, skinCode) =>
      textFromCode(skinIdsToCodes[skinCode])
    );
}

function dateFromTsDayOffset(ts, offset) {
  const date = new Date(ts);
  date.setUTCDate(date.getUTCDate() + offset);
  return date.toISOString().split('T')[0];
}

const msgLinkRoot = 'https://history.futureofcoding.org/';
function msgLink(tsFrom, tsTo, tsMsg, name) {
  const date = new Date(tsMsg),
    dateIso = date.toISOString(),
    dateDayBefore = dateFromTsDayOffset(tsFrom, -3),
    dateDayAfter = dateFromTsDayOffset(tsTo, 3),
    url = `${msgLinkRoot}?fromDate=${dateDayBefore}&toDate=${dateDayAfter}&channel=${name}&filter=#${dateIso}`;

  return {url, dateIso};
}

function historyLinkFromSlackMsgInfo(channelId, tsRaw, channels) {
  const ts = +tsRaw / 1000,
    channel = channels[channelId],
    name = channel ? channel.name : channelId,
    {url, dateIso} = msgLink(ts, ts, ts, name);
  return `[💬 #${name}@${dateIso.slice(0, 10)}](${url})`;
}

function historyLinkFromSlackReplyInfo(
  channelId,
  tsRaw,
  replyTs,
  _channelId1,
  channels
) {
  const tsFrom = +tsRaw / 1000,
    tsTo = +replyTs * 1000,
    channel = channels[channelId],
    name = channel ? channel.name : channelId,
    {url, dateIso} = msgLink(tsFrom, tsTo, tsTo, name);
  return `[💬 #${name}@${dateIso.slice(0, 10)}](${url})`;
}

function addMsgAttachmentsText(msg) {
  const atts = msg.attachments;
  if (atts) {
    let accum = '';
    for (let i = 0, len = atts.length; i < len; i += 1) {
      if (i !== 0) {
        accum += '\n\n';
      }
      const att = atts[i];
      enrichAttachment(att);
      accum += att.$text;
    }

    msg.$attachmentsText = accum + '\n';
    msg.$attachmentsHtml = mdToHTML(accum);
  } else {
    msg.$attachmentsText = '';
  }
}

const FILES_BASE_URL = 'http://history.futureofcoding.org/history/msg_files/';
function msgFileToUrl({id, filetype}) {
  const extension = filetype ? '.' + filetype : '',
    filename = id + extension,
    prefix = id.slice(0, 3);

  return FILES_BASE_URL + prefix + '/' + filename;
}

//const types = {};
function enrichMessage(msg, args, isOlder, channel) {
  const {users} = args,
    msgTs = +msg.ts * 1000,
    date = new Date(msgTs),
    {user} = msg;

  msg.$date = date;
  msg.$text = msgBlocksToMd(msg, args);
  msg.$html = mdToHTML(msg.$text);
  addMsgAttachmentsText(msg);

  const files = msg.files;
  if (files) {
    let accum = '';
    for (let i = 0, len = files.length; i < len; i += 1) {
      if (i !== 0) {
        accum += '\n\n';
      }

      const file = files[i],
        mimetype = file.mimetype || '';
      let prefix = '📝 ';
      if (mimetype.startsWith('video/')) {
        prefix = '🎥 ';
      } else if (mimetype.startsWith('image/')) {
        prefix = '!';
      } else if (mimetype.startsWith('application/')) {
        prefix = '📄 ';
      } else if (mimetype.startsWith('text/')) {
        prefix = '🗒️ ';
      } else {
        console.warn('unknown mimetype', file);
      }

      if (file.title) {
        file.$text = `${prefix}[${file.title}](${msgFileToUrl(file)})`;
        accum += file.$text;
      }
    }

    msg.$filesText = accum + '\n';
    msg.$filesHtml = mdToHTML(accum);
  } else {
    msg.$filesText = '';
  }

  msg.$isOlder = isOlder;
  try {
    const datePrefix = isOlder ? '🕰️ ' : '',
      {url, dateIso} = msgLink(msgTs, msgTs, msgTs, channel);
    msg.$dateStrISO = dateIso;
    msg.$dateStr = datePrefix + dateIso.replace('T', ' ').slice(0, -5);
    msg.$url = url;
  } catch (error) {
    console.log(date, msg, error);
    msg.$dateStr = 'Invalid Date';
    msg.$dateStrISO = 'Invalid Date';
    msg.$url = '#';
  }
  msg.$user = users[user] || dummyUser(user);
  msg.$userName =
    msg.$user.real_name || msg.$user.profile.real_name || msg.$user.name;
  msg.$filterText = (
    msg.$dateStrISO +
    msg.$userName +
    msg.$text +
    msg.$filesText +
    msg.$attachmentsText
  ).toLowerCase();

  /*const blocks = msg.blocks || [];
  for (let i = 0, len = blocks.length; i < len; i += 1) {
    const block = blocks[i],
      subTypes = types[block.type] || {};

    types[block.type] = subTypes;
    const elems = block.elements || [];
    for (let j = 0, len = elems.length; j < len; j += 1) {
      const elem = elems[j],
        subSubType = subTypes[elem.type] || {};

      subTypes[elem.type] = subSubType;

      const subElems = elem.elements || [];
      for (let k = 0, len = subElems.length; k < len; k += 1) {
        const subElem = subElems[k];
        subSubType[subElem.type] = JSON.parse(JSON.stringify(subElem));
      }
    }
  }
  console.log(types);*/

  return msg;
}

function msgBlocksToMd(msg, args) {
  if (msg.blocks) {
    return msg.blocks
      .map((block, _i, _it) => blockToMd(block, args))
      .join('\n\n');
  } else {
    return parseMsgText(msg, args);
  }
}

function mapElements(o, fn, args, joinStr) {
  return (o.elements || [])
    .map((element, _i, _it) => fn(element, args))
    .join(joinStr);
}

function blockToMd(block, args) {
  switch (block.type) {
    case 'rich_text':
      return mapElements(block, elementToMd, args, '\n\n');
    default:
      console.warn('Unknown type', block.type, block);
      return `Unknown type ${block.type}`;
  }
}

function elementToMd(element, args) {
  switch (element.type) {
    case 'rich_text_list':
      return '\n* ' + mapElements(element, nodeToMd, args, '\n* ');
    case 'rich_text_preformatted':
      return '\n```\n' + mapElements(element, nodeToMd, args, '') + '\n```\n\n';
    case 'rich_text_quote':
      return '\n> ' + mapElements(element, nodeToMd, args, '\n> ');
    case 'rich_text_section':
      return mapElements(element, nodeToMd, args, '');
    default:
      console.warn('Unknown type', element.type, element);
      return `Unknown type ${element.type}`;
  }
}

function mdChannel(id, channels) {
  const channel = channels[id],
    name = channel ? channel.name : id;
  return `**#${name}**`;
}

function mdUser(id, {users}) {
  const user = users[id],
    name = user && user.profile ? user.profile.real_name : id;

  return AUTHORS[name] || `**@${name}**`;
}

function humanizeUrl(url) {
  if (url.startsWith('http')) {
    return url
      .replace(/(^https:\/\/|^http:\/\/)/, '')
      .replace(/^www\./, '')
      .replace(/\/$/, '');
  } else {
    return url;
  }
}

const SLACK_MSG_LINK_REGEX =
    /https:\/\/futureofcoding\.slack\.com\/archives\/([A-Z0-9]+)\/p([0-9]+)/g,
  SLACK_MSG_REPLY_REGEX =
    /https:\/\/futureofcoding\.slack\.com\/archives\/([A-Z0-9]+)\/p([0-9]+)\?thread_ts=([0-9.]+)&cid=([A-Z0-9]+)/g,
  INLINE_MARKUP = {code: '`', italic: '_', strike: '~', bold: '*'};
function nodeToMd(node, args) {
  switch (node.type) {
    case 'text': {
      const {style} = node;
      let s = node.text,
        hasStyle = false;
      for (let k in style) {
        const formatStr = INLINE_MARKUP[k];
        if (formatStr) {
          s = formatStr + s.trim() + formatStr;
          hasStyle = true;
        } else {
          console.warn('unknown format', k, 'in node');
        }
      }

      if (hasStyle) {
        s = ' ' + s + ' ';
      }

      return s.replace(/\n/g, '\n\n');
    }
    case 'link': {
      const url = node.url || '',
        match = SLACK_MSG_LINK_REGEX.exec(url);
      if (match === null) {
        const match1 = SLACK_MSG_REPLY_REGEX.exec(url);
        if (match1 === null) {
          return mdLink(node.text || node.name || url, node.name || url);
        } else {
          return historyLinkFromSlackReplyInfo(
            match1[1],
            match1[2],
            match1[3],
            match1[4],
            args.channels
          );
        }
      } else {
        return historyLinkFromSlackMsgInfo(match[1], match[2], args.channels);
      }
    }
    case 'emoji': {
      const code = EMOJI_NAME_TO_CODE[node.name];
      return code ? textFromCode(code) : `:${node.name}:`;
    }
    case 'channel':
      return mdChannel(node.channel_id, args.channels);
    case 'user':
      return mdUser(node.user_id, args);
    default:
      return elementToMd(node, args);
  }
}

function parseHistoryChannelData(
  data,
  users,
  channels,
  msgByTs,
  msgOrder,
  olderMessagesToLoad,
  channel
) {
  for (let i = 0, len = data.length; i < len; i += 1) {
    const msg = data[i];

    let {type, ts, thread_ts} = msg;

    if (type !== 'message') {
      console.warn('unknown message type', type, msg);
      continue;
    }

    if (thread_ts === undefined) {
      if (ts === undefined) {
        console.log('msg without ts nor thread_ts', msg);
        continue;
      } else {
        msg.thread_ts = ts;
        thread_ts = ts;
      }
    } else if (ts === undefined) {
      console.log('msg without ts', msg);
      msg.ts = thread_ts;
      ts = thread_ts;
    }

    enrichMessage(msg, {users, channels}, false, channel);
    const isParent = ts === thread_ts;
    msg.$isParent = isParent;

    if (isParent) {
      msg.responses = [];
      msgOrder.push(msg);
      msgByTs[ts] = msg;
    } else {
      const parentMsg = msgByTs[thread_ts];
      msgByTs[ts] = msg;
      if (parentMsg) {
        parentMsg.responses.push(msg);
      } else {
        olderMessagesToLoad.push(thread_ts);
        const parentMsg = enrichMessage(
          {
            ts: thread_ts,
            thread_ts,
            user: '',
            text: '...',
            $index: msgOrder.length,
            responses: [msg],
          },
          {users, channels},
          true,
          channel
        );
        msgOrder.push(parentMsg);
        msgByTs[thread_ts] = parentMsg;
      }
    }
  }

  return msgOrder;
}

function usersToUsersById(users) {
  const result = {};

  for (let i = 0, len = users.length; i < len; i += 1) {
    const user = users[i],
      {id} = user;

    result[id] = user;
  }

  return result;
}

function channelsToChannelsById(channels) {
  const result = {};

  for (let i = 0, len = channels.length; i < len; i += 1) {
    const channel = channels[i],
      {id} = channel;

    result[id] = channel;
  }

  return result;
}

function cloneDate(d) {
  return new Date(d.getTime());
}

function addDays(d0, dayOffset) {
  const d = cloneDate(d0);
  d.setDate(d.getDate() + dayOffset);
  return d;
}

function dateIsLessThanDate(d1, d2) {
  return d1.getTime() < d2.getTime();
}

function nowDayOffset(dayOffset) {
  const d = new Date();
  return addDays(d, dayOffset);
}

function tomorrowDate() {
  return dateToDateString(nowDayOffset(1));
}

function yesterdayDate() {
  return dateToDateString(nowDayOffset(-1));
}

function dateDayOffset(offset) {
  return dateToDateString(nowDayOffset(offset));
}

function padZero(n) {
  const s = '' + n;
  return s.length === 1 ? '0' + s : s;
}

function dateParts(d) {
  return [d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()];
}

function dateToDateString(d) {
  const [year, month, day] = dateParts(d);
  return `${year}-${padZero(month)}-${padZero(day)}`;
}

const hasOwn = Object.prototype.hasOwnProperty;

function decodeQuery(string, escapeQuerySpace) {
  string += '';
  if (escapeQuerySpace === undefined) {
    escapeQuerySpace = true;
  }

  try {
    return decodeURIComponent(
      escapeQuerySpace ? string.replace(/\+/g, '%20') : string
    );
  } catch (e) {
    // we're not going to mess with weird encodings,
    // give up and return the undecoded original string
    // see https://github.com/medialize/URI.js/issues/87
    // see https://github.com/medialize/URI.js/issues/92
    return string;
  }
}

function parseQuery(string, escapeQuerySpace) {
  if (!string) {
    return {};
  }

  // throw out the funky business - "?"[name"="value"&"]+
  string = string.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '');

  if (!string) {
    return {};
  }

  const items = {},
    splits = string.split('&'),
    length = splits.length;

  for (let i = 0; i < length; i += 1) {
    const v = splits[i].split('='),
      name = decodeQuery(v.shift(), escapeQuerySpace),
      // no "=" is null according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#collect-url-parameters
      value = v.length ? decodeQuery(v.join('='), escapeQuerySpace) : null;

    if (hasOwn.call(items, name)) {
      if (typeof items[name] === 'string' || items[name] === null) {
        items[name] = [items[name]];
      }

      items[name].push(value);
    } else {
      items[name] = value;
    }
  }

  return items;
}

const EXPORT_HTML_PREFIX = `
<!doctype html>
<html>
  <head>
    <meta charset=utf-8>
    <title>Future of Coding History</title>
    <link rel="stylesheet" href="https://marianoguerra.github.io/future-of-coding-weekly/history/style.css">
  </head>
  <body>
    <div id="ui">
      <a id="logo" href="https://futureofcoding.org">
        <img src="https://marianoguerra.github.io/future-of-coding-weekly/history/logo.svg" alt="Future of Coding History">
      </a>
      <div id="small-logo">
        <a href="https://futureofcoding.org">Future of Coding</a> History
      </div>
      <div id="center">
        <h4>
          You are viewing archived messages.<br>
          Go <a href="https://marianoguerra.github.io/future-of-coding-weekly/history">here</a> to search the history.
        </h4>
      </div>
      <div id="actions"></div>
    </div>
    <div id="msgs-output">
`,
  EXPORT_HTML_SUFFIX = `
    </div>
  </body>
</html>
`;

export {
  addDays,
  cloneDate,
  dateDayOffset,
  dateIsLessThanDate,
  dateParts,
  downloadAs,
  enrichMessage,
  EXPORT_HTML_PREFIX,
  EXPORT_HTML_SUFFIX,
  loadChannels,
  loadMsgsForDay,
  loadUsers,
  msgMatchesFilter,
  msgToMd,
  msgToMdNL,
  parseHistoryChannelData,
  parseQuery,
  setHistoryPathBase,
  tomorrowDate,
  yesterdayDate,
};
