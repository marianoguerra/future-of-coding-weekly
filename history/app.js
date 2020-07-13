//@format
/*globals Vue, SimpleMarkdown*/
import {getNameToCode, textFromCode, skinIdsToCodes} from './emoji.js';
import {AUTHORS} from '../common.js';

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
  return `[${label}](${url})`;
}

const EMPTY_LINK = mdLink('', '');
function findFirstLink({blocks}) {
  if (!blocks) {
    return EMPTY_LINK;
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

              return mdLink(label, url);
            }
          }
        }
      }
    }
  }

  return EMPTY_LINK;
}

function msgToMdNL(msg, linkPrefix) {
  const userLink = AUTHORS[msg.$userName],
    userText = userLink || `**${msg.$userName}**`,
    conversationLink = mdLink(
      '🧵conversation',
      `${linkPrefix}#${msg.$dateStrISO}`
    ),
    resourceLink = findFirstLink(msg),
    base = `x ${resourceLink} via ${userText} ${conversationLink}\n\n${msg.$text}`;

  return base;
}

function msgToMd(msg) {
  const base = `*[${msg.$dateStr}]* **${msg.$userName}**:\n\n${msg.$text}`;
  if (msg.responses.length === 0) {
    return base;
  } else {
    return (
      base +
      '\n\n\n' +
      msg.responses
        .map(
          (msg) => `> *[${msg.$dateStr}]* **${msg.$userName}**:\n\n${msg.$text}`
        )
        .join('\n\n\n')
    );
  }
}

function dummyUser(user) {
  return {user, name: user, real_name: user};
}

function getRealName(username, users) {
  const user = users[username];
  return user === undefined ? username : '**' + user.real_name + '**';
}

const TW_URL_REF_REGEX = /<(https?:\/\/.*?)>/g,
  TW_MENTION_REF_REGEX = /<(https?:\/\/.*?)\|(@.*?)>/g;
function enrichAttachment(att) {
  if (att.service_name === 'twitter') {
    att.$html = att.text
      .replace(
        TW_MENTION_REF_REGEX,
        (_, url, handle) => `<a href="${url}">${handle}</a>`
      )
      .replace(TW_URL_REF_REGEX, (_, url) => `<a href="${url}">${url}</a>`)
      .replace(EMOJI_REF_REGEX, (_, emojiCode) =>
        textFromCode(EMOJI_NAME_TO_CODE[emojiCode])
      );
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
function enrichMessage(msg, users) {
  const date = new Date(+msg.ts * 1000),
    {user} = msg;

  msg.$date = date;
  msg.$text = msg.text
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
  msg.$html = mdToHTML(msg.$text);
  const atts = msg.attachments;
  if (atts) {
    for (let i = 0, len = atts.length; i < len; i += 1) {
      enrichAttachment(atts[i]);
    }
  }
  try {
    msg.$dateStrISO = date.toISOString();
    msg.$dateStr = msg.$dateStrISO.replace('T', ' ').slice(0, -5);
  } catch (error) {
    console.log(date, msg, error);
    msg.$dateStr = 'Invalid Date';
    msg.$dateStrISO = 'Invalid Date';
  }
  msg.$user = users[user] || dummyUser(user);
  msg.$userName = msg.$user.real_name;
  msg.$filterText = (msg.$dateStrISO + msg.$userName + msg.$text).toLowerCase();

  return msg;
}

function parseHistoryChannelData(data, users, msgByTs, msgOrder) {
  for (let i = 0, len = data.length; i < len; i += 1) {
    const msg = data[i];

    let {type, ts, thread_ts} = msg;

    if (type !== 'message') {
      console.warn('unknown message type', type, msg);
      continue;
    }

    if (thread_ts === undefined) {
      if (ts === undefined) {
        continue;
      } else {
        msg.thread_ts = ts;
        thread_ts = ts;
      }
    } else if (ts === undefined) {
      if (thread_ts === undefined) {
        continue;
      } else {
        msg.ts = thread_ts;
        ts = thread_ts;
      }
    }

    enrichMessage(msg, users);
    const isParent = ts === thread_ts;

    if (isParent) {
      msg.responses = [];
      msgOrder.push(msg);
      msgByTs[ts] = msg;
    } else {
      const parentMsg = msgByTs[thread_ts];
      if (parentMsg) {
        parentMsg.responses.push(msg);
      } else {
        const parentMsg = enrichMessage(
          {
            ts: thread_ts,
            thread_ts,
            user: 'Unknown User',
            text: 'MSG NOT FOUND',
            responses: [msg],
            WHAT_IS_THIS:
              'a dummy message to attach thread messages to a parent that is not on this file',
          },
          users
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

function padZero(n) {
  const s = '' + n;
  return s.length === 1 ? '0' + s : s;
}

function dateParts(d) {
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
}

function dateToDateString(d) {
  const [year, month, day] = dateParts(d);
  return `${year}-${padZero(month)}-${padZero(day)}`;
}

function getBaseUrl() {
  const {origin, pathname} = location;
  return origin + pathname;
}

function main() {
  const query = parseQuery(window.location.search),
    baseUrl = getBaseUrl(),
    app = new Vue({
      el: '#app',
      data: {
        baseUrl,
        queryLink: baseUrl,
        fromDate: yesterdayDate(),
        toDate: tomorrowDate(),
        channel: 'general',
        loadingStatus: null,
        msgFilter: '',
        filteredMsgs: [],
        history: {
          msgs: [],
          msgsByTs: {},
        },
        users: {},
      },
      methods: {
        loadUsers: function () {
          return fetch('users.json')
            .then((resp) => resp.json())
            .then((usersData) => {
              this.users = usersToUsersById(usersData);
            });
        },
        loadChannelDate(channel, fromDate, toDate, toDateFinal) {
          if (dateIsLessThanDate(fromDate, toDateFinal)) {
            const [year, month, day] = dateParts(fromDate),
              path = `${year}/${month}/${day}/${channel}.json`;

            this.loadingStatus = 'Loading ' + path;

            fetch(path).then((res) => {
              if (res.status === 200) {
                res.json().then((data) => {
                  parseHistoryChannelData(
                    data,
                    this.users,
                    this.history.msgsByTs,
                    this.history.msgs
                  );

                  this.loadChannelDate(
                    channel,
                    toDate,
                    addDays(toDate, 1),
                    toDateFinal
                  );
                });
              } else {
                this.loadChannelDate(
                  channel,
                  toDate,
                  addDays(toDate, 1),
                  toDateFinal
                );
              }
            });
          } else {
            this.loadingStatus = null;
            this.filterMessages();
          }
        },
        loadChannelDateRange: function (channel, fromDateBase, toDateFinal) {
          let fromDate = cloneDate(fromDateBase),
            toDate = addDays(fromDate, 1);

          this.loadChannelDate(channel, fromDate, toDate, toDateFinal);
        },
        loadSelected: function () {
          const fromDate = new Date(this.fromDate),
            toDate = new Date(this.toDate);

          this.filteredMsgs = [];
          this.history.msgs = [];
          this.history.msgsByTs = {};

          this.loadChannelDateRange(this.channel, fromDate, toDate);
        },
        getDumpFileName: function (extension) {
          return (
            this.channel +
            '_' +
            this.fromDate +
            '_' +
            this.toDate +
            '.' +
            extension
          );
        },
        filterMessages: function () {
          const filterText = this.msgFilter.toLowerCase(),
            result = [];
          for (
            let i = 0, msgs = this.history.msgs, len = msgs.length;
            i < len;
            i += 1
          ) {
            const parentMsg = msgs[i],
              parentMatches = msgMatchesFilter(parentMsg, filterText),
              responses = parentMsg.responses.filter((msg, _i, _it) =>
                msgMatchesFilter(msg, filterText)
              );

            if (parentMatches || responses.length > 0) {
              result.push(Object.assign({}, parentMsg, {responses}));
            }
          }

          this.filteredMsgs = result;
        },
        onFilterChanged: function (e) {
          this.msgFilter = e.target.value;
          this.filterMessages();
          this.updateQueryLink();
        },
        getQueryString: function () {
          return `?fromDate=${this.fromDate}&toDate=${this.toDate}&channel=${this.channel}&filter=${this.msgFilter}`;
        },
        onFromDateChange: function (_e) {
          this.updateQueryLink();
        },
        onToDateChange: function (_e) {
          this.updateQueryLink();
        },
        onChannelChange: function (_e) {
          this.updateQueryLink();
        },
        updateQueryLink: function () {
          this.queryLink = this.baseUrl + this.getQueryString() + location.hash;
        },
        exportAsMd: function () {
          const txt = this.history.msgs
            .map((msg) => msgToMd(msg))
            .join('\n\n---\n\n');
          downloadAs(txt, this.getDumpFileName('md'), 'text/markdown');
        },
        exportAsNewsletter: function (linkSuffix) {
          const linkPrefix =
              'https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2020/' +
              linkSuffix,
            txt = this.history.msgs
              .map((msg) => msgToMdNL(msg, linkPrefix))
              .join('\n\n---\n\n');
          downloadAs(txt, this.getDumpFileName('md'), 'text/markdown');
        },
        exportAsHTML: function () {
          const msgsOutputNode = document.getElementById('msgs-output'),
            msgsOutput = msgsOutputNode.innerHTML,
            html = EXPORT_HTML_PREFIX + msgsOutput + EXPORT_HTML_SUFFIX;

          downloadAs(html, this.getDumpFileName('html'), 'text/html');
        },
      },
    });

  const userProm = app.loadUsers();
  let someParam = false;
  if (query.fromDate) {
    app.fromDate = query.fromDate;
    someParam = true;
  }

  if (query.toDate) {
    app.toDate = query.toDate;
    someParam = true;
  }

  if (query.channel) {
    app.channel = query.channel;
    someParam = true;
  }

  if (query.filter) {
    app.msgFilter = query.filter;
    someParam = true;
  }

  app.updateQueryLink();
  if (someParam) {
    userProm.then((_) => app.loadSelected());
  }

  window.focApp = app;
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

const defaultRules = SimpleMarkdown.defaultRules;

function overrideDefaultHtml(ruleName, overrideFn) {
  return Object.assign({}, defaultRules[ruleName], {html: overrideFn});
}

const customRules = {
    paragraph: overrideDefaultHtml('paragraph', function (node, output, state) {
      return '<p>' + output(node.content, state) + '</p>\n';
    }),
    blockQuote: overrideDefaultHtml('blockQuote', function (
      node,
      output,
      state
    ) {
      return '<blockquote>' + output(node.content, state) + '</blockquote>\n';
    }),
  },
  rules = Object.assign({}, defaultRules, customRules),
  rawBuiltParser = SimpleMarkdown.parserFor(rules),
  htmlOutput = SimpleMarkdown.htmlFor(SimpleMarkdown.ruleOutput(rules, 'html'));

function mdToHTML(txt) {
  return htmlOutput(rawBuiltParser(txt + '\n\n', {inline: false}));
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

main();
