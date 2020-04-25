//@format
/*globals Vue, Promise, SimpleMarkdown*/

const INDEX_ENTRY_REGEX = /^([0-9]{4})-([0-9]{2})-w-([0-9])\/(.*?)\/([0-9]{4})-([0-9]{2})-([0-9]{2}).json$/;

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

function msgToMd(msg) {
  const base = `*[${msg.$dateStr}]* **${msg.$user.real_name}**:\n\n${msg.$text}`;
  if (msg.responses.length === 0) {
    return base;
  } else {
    return (
      base +
      '\n\n\n' +
      msg.responses
        .map(
          msg =>
            `> *[${msg.$dateStr}]* **${msg.$user.real_name}**:\n\n${msg.$text}`
        )
        .join('\n\n\n')
    );
  }
}
class IndexEntry {
  constructor(
    weekYear,
    weekMonth,
    weekNum,
    channel,
    segmentYear,
    segmentMonth,
    segmentDay
  ) {
    this.weekYear = weekYear;
    this.weekMonth = weekMonth;
    this.weekNum = weekNum;
    this.channel = channel;
    this.segmentYear = segmentYear;
    this.segmentMonth = segmentMonth;
    this.segmentDay = segmentDay;
  }

  toUrl() {
    const {
      weekYear,
      weekMonth,
      weekNum,
      channel,
      segmentYear,
      segmentMonth,
      segmentDay
    } = this;
    return `${weekYear}-${weekMonth}-w-${weekNum}/${channel}/${segmentYear}-${segmentMonth}-${segmentDay}.json`;
  }
}

function dummyUser(user) {
  return {user, name: user, real_name: user};
}

function getRealName(username, users) {
  const user = users[username];
  return user === undefined ? username : '**' + user.real_name + '**';
}

const ENTITIES_TO_TEXT = {lt: '<', gt: '>', amp: '&'};

const USER_REF_REGEX = /<@(.*?)>/g,
  ENTITIES_REGEX = /&(gt|lt|amp);/g,
  GROUP_REF_REGEX = /<#(.*?)\|(.*?)>/g;
function enrichMessage(msg, users) {
  const date = new Date(+msg.ts * 1000),
    {user} = msg;

  msg.$date = date;
  msg.$text = msg.text
    .replace(USER_REF_REGEX, (_, username) => getRealName(username, users))
    .replace(
      GROUP_REF_REGEX,
      (_, _gid, groupName) => '**`#' + groupName + '`**'
    )
    .replace(
      ENTITIES_REGEX,
      (match, entity) => ENTITIES_TO_TEXT[entity] || match
    );
  msg.$html = mdToHTML(msg.$text);
  try {
    msg.$dateStr = date.toISOString().replace('T', ' ').slice(0, -5);
  } catch (error) {
    console.log(date, msg, error);
    msg.$dateStr = 'Invalid Date';
  }
  msg.$user = users[user] || dummyUser(user);

  return msg;
}

function parseHistoryChannelData(data, users, msgByTs) {
  const msgOrder = [];

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
              'a dummy message to attach thread messages to a parent that is not on this file'
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

function main() {
  const app = new Vue({
    el: '#app',
    data: {
      index: {
        loading: false,
        weeksSelected: {},
        channelsSelected: {},
        loadedWeeks: {},
        channels: {},
        entries: [],
        weeks: {}
      },
      history: {
        msgs: [],
        msgsByTs: {}
      }
    },
    methods: {
      loadChannelWeek: function (channel, week) {
        const weekEntries = this.index.weeks[week];

        this.msgs = [];

        fetch(`${week}/users.json`)
          .then(resp => resp.json())
          .then(usersData => {
            const usersById = usersToUsersById(usersData),
              reqs = weekEntries
                .filter(entry => entry.channel === channel)
                .map(entry =>
                  fetch(entry.toUrl())
                    .then(resp => resp.json())
                    .then(msgs => {
                      return {msgs, usersById};
                    })
                );

            return Promise.allSettled(reqs);
          })
          .then(results => {
            // first fill all msgs by ts
            results.forEach(({value}) =>
              value.msgs.forEach(msg => {
                this.history.msgsByTs[msg.ts] = msg;
              })
            );

            // then parse msgs (because they may refer to msgs from other
            // days/weeks
            results.forEach(({value}) => {
              this.history.msgs = this.history.msgs.concat(
                parseHistoryChannelData(
                  value.msgs,
                  value.usersById,
                  this.history.msgsByTs
                )
              );
            });
          });
      },
      loadSelected: function () {
        for (let channel in this.index.channelsSelected) {
          for (let week in this.index.weeksSelected) {
            this.loadChannelWeek(channel, week);
          }
        }
      },
      exportAsMd: function () {
        const txt = this.history.msgs
          .map(msg => msgToMd(msg))
          .join('\n\n---\n\n');
        downloadAs(txt, 'foc-dump.md', 'text/markdown');
      },
      exportAsHTML: function () {
        const msgsOutputNode = document.getElementById('msgs-output'),
          msgsOutput = msgsOutputNode.innerHTML,
          html = EXPORT_HTML_PREFIX + msgsOutput + EXPORT_HTML_SUFFIX;

        downloadAs(html, 'foc-dump.html', 'text/html');
      },
      onWeekSelected: function (weekKey) {
        console.log('weekKeySelected', weekKey);
      },
      onChannelSelected: function (channel) {
        console.log('channelSelected', channel);
      },
      parseIndex: function (indexText) {
        const indexWeeks = {};

        this.index.entries = indexText
          .trim()
          .split('\n')
          .map(line => {
            const [
                weekYear,
                weekMonth,
                weekNum,
                channel,
                segmentYear,
                segmentMonth,
                segmentDay
              ] = line.match(INDEX_ENTRY_REGEX).slice(1),
              indexEntry = new IndexEntry(
                weekYear,
                weekMonth,
                weekNum,
                channel,
                segmentYear,
                segmentMonth,
                segmentDay
              ),
              indexWeekKey = `${weekYear}-${weekMonth}-w-${weekNum}`;

            if (indexWeeks[indexWeekKey] === undefined) {
              indexWeeks[indexWeekKey] = [];
            }

            indexWeeks[indexWeekKey].push(indexEntry);
            this.index.channels[channel] = true;

            return indexEntry;
          });

        this.index.weeks = indexWeeks;
      },
      loadIndex: function () {
        this.index.loading = true;
        return fetch('index.txt')
          .then(resp => resp.text())
          .then(indexText => {
            this.index.loading = false;
            this.parseIndex(indexText);
          });
      }
    }
  });

  app.loadIndex();
}

const EXPORT_HTML_PREFIX = `
<!doctype html>
<html>
  <head>
    <meta charset=utf-8>
    <title>Future of Coding History</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <style>.alert{border-radius:0}.msg-response{background-color:white!important}</style>
  </head>
  <body class="p-3">
`,
  EXPORT_HTML_SUFFIX = `
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
      return (
        '<blockquote style="margin-left:1em;color:#555555;font-style:italic">' +
        output(node.content, state) +
        '</blockquote>\n'
      );
    })
  },
  rules = Object.assign({}, defaultRules, customRules),
  rawBuiltParser = SimpleMarkdown.parserFor(rules),
  htmlOutput = SimpleMarkdown.htmlFor(SimpleMarkdown.ruleOutput(rules, 'html'));

function mdToHTML(txt) {
  return htmlOutput(rawBuiltParser(txt + '\n\n', {inline: false}));
}

main();
