//@format
/*globals Vue, Set*/
import {
  yesterdayDate,
  tomorrowDate,
  loadUsers,
  loadChannels,
  dateIsLessThanDate,
  dateParts,
  parseHistoryChannelData,
  addDays,
  cloneDate,
  enrichMessage,
  msgMatchesFilter,
  msgToMd,
  downloadAs,
  msgToMdNL,
  parseQuery,
  EXPORT_HTML_PREFIX,
  EXPORT_HTML_SUFFIX,
  setHistoryPathBase,
} from './history.js';

setHistoryPathBase('.');
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
        channel: 'thinking-together',
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
          return loadUsers().then((users) => {
            this.users = users;
          });
        },
        loadChannels: function () {
          return loadChannels().then((channels) => {
            this.channels = channels;
          });
        },

        loadChannelDate(
          channel,
          fromDate,
          toDate,
          toDateFinal,
          olderMessagesToLoad,
          onFinish
        ) {
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
                    this.channels,
                    this.history.msgsByTs,
                    this.history.msgs,
                    olderMessagesToLoad
                  );

                  this.loadChannelDate(
                    channel,
                    toDate,
                    addDays(toDate, 1),
                    toDateFinal,
                    olderMessagesToLoad,
                    onFinish
                  );
                });
              } else {
                this.loadChannelDate(
                  channel,
                  toDate,
                  addDays(toDate, 1),
                  toDateFinal,
                  olderMessagesToLoad,
                  onFinish
                );
              }
            });
          } else {
            this.loadingStatus = null;
            this.filterMessages();
            onFinish({olderMessagesToLoad, channel});
          }
        },
        loadChannelDateRange: function (channel, fromDateBase, toDateFinal) {
          const fromDate = cloneDate(fromDateBase),
            toDate = addDays(fromDate, 1),
            olderMessagesToLoad = [];

          this.loadChannelDate(
            channel,
            fromDate,
            toDate,
            toDateFinal,
            olderMessagesToLoad,
            (info) => this.onLoadChannelDateRangeFinished(info)
          );
        },
        onLoadChannelDateRangeFinished: function ({
          olderMessagesToLoad,
          channel,
        }) {
          const pathSet = new Set(),
            messagesToLoadByPath = {};
          for (let i = 0, len = olderMessagesToLoad.length; i < len; i += 1) {
            const ts = olderMessagesToLoad[i],
              date = new Date(+ts * 1000),
              [year, month, day] = dateParts(date),
              path = `${year}/${month}/${day}/${channel}.json`;
            pathSet.add(path);

            let msgsForPath = messagesToLoadByPath[path];

            if (!msgsForPath) {
              msgsForPath = {};
              messagesToLoadByPath[path] = msgsForPath;
            }

            msgsForPath[ts] = true;
          }
          const paths = Array.from(pathSet);
          paths.sort();
          this.loadOlderMessages(paths, 0, messagesToLoadByPath);

          window.setTimeout(() => {
            // scroll to hash if set
            const id = location.hash.slice(1),
              element = document.getElementById(id);

            if (element) {
              element.style.border = '2px solid rgb(0, 51, 34)';
              element.scrollIntoView();
            }
          }, 500);
        },
        loadOlderMessages: function (paths, i, messagesToLoadByPath) {
          const path = paths[i],
            enrichArgs = {users: this.users, channels: this.channels},
            msgsByTs = this.history.msgsByTs;

          if (path) {
            fetch(path).then((res) => {
              if (res.status === 200) {
                res.json().then((msgs) => {
                  const msgsForPath = messagesToLoadByPath[path];
                  for (let i = 0, len = msgs.length; i < len; i += 1) {
                    const msg = msgs[i];
                    if (msgsForPath[msg.ts]) {
                      const dummyMsg = msgsByTs[msg.ts],
                        index = dummyMsg.$index;
                      enrichMessage(msg, enrichArgs, true);
                      msg.responses = dummyMsg.responses;
                      this.history.msgs[index] = msg;
                    }
                  }
                  this.loadOlderMessages(paths, i + 1, messagesToLoadByPath);
                });
              }
            });
          } else {
            this.filterMessages();
          }
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
          return this.channel + '.' + extension;
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
        exportThisAsNewsletterWithWeek: function (week) {
          const month = this.toDate.split('-')[1];
          this.exportAsNewsletter(`${month}/${week}/${this.channel}.html`);
        },
        exportAsNewsletter: function (linkSuffix) {
          const linkPrefix =
              'https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2020/' +
              linkSuffix,
            txt = this.history.msgs
              .filter((msg) => !msg.$isOlder)
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

  const infoProm = app.loadUsers().then((_) => app.loadChannels());
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
    infoProm.then((_) => app.loadSelected());
  }

  window.focApp = app;
}

main();
