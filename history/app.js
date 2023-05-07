//@format
/*globals Vue, Set, Promise*/
import {
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
  loadUsers,
  msgMatchesFilter,
  msgToMd,
  msgToMdNL,
  parseHistoryChannelData,
  parseQuery,
  setHistoryPathBase,
} from "./history.js";
import { getInfoForWeekAndDay, MONDAY } from "./newsletter.js";
import { AUTHORS } from "./common.js";

setHistoryPathBase(".");
function getBaseUrl() {
  const { origin, pathname } = location;
  return origin + pathname;
}

function mdTitle1(t) {
  return "# " + t + "\n\n";
}

function main() {
  const query = parseQuery(window.location.search),
    baseUrl = getBaseUrl(),
    app = new Vue({
      el: "#app",
      data: {
        baseUrl,
        queryLink: baseUrl,
        fromDate: dateDayOffset(-7),
        toDate: dateDayOffset(0),
        channel: "two-minute-week",
        loadingStatus: null,
        msgFilter: "",
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
          onFinish,
        ) {
          if (dateIsLessThanDate(fromDate, toDateFinal)) {
            const [year, month, day] = dateParts(fromDate),
              path = `${year}/${month}/${day}/${channel}.json?t=${
                new Date().getTime()
              }`;

            this.loadingStatus = "Loading " + path;

            fetch(path).then((res) => {
              if (res.status === 200) {
                res.json().then((data) => {
                  parseHistoryChannelData(
                    data,
                    this.users,
                    this.channels,
                    this.history.msgsByTs,
                    this.history.msgs,
                    olderMessagesToLoad,
                    channel,
                  );

                  this.loadChannelDate(
                    channel,
                    toDate,
                    addDays(toDate, 1),
                    toDateFinal,
                    olderMessagesToLoad,
                    onFinish,
                  );
                });
              } else {
                this.loadChannelDate(
                  channel,
                  toDate,
                  addDays(toDate, 1),
                  toDateFinal,
                  olderMessagesToLoad,
                  onFinish,
                );
              }
            });
          } else {
            this.loadingStatus = null;
            this.filterMessages();
            onFinish({ olderMessagesToLoad, channel });
          }
        },
        loadChannelDateRange: function (channel, fromDateBase, toDateFinal) {
          const fromDate = cloneDate(fromDateBase),
            toDate = addDays(fromDate, 1),
            olderMessagesToLoad = [];

          return new Promise((resolve) =>
            this.loadChannelDate(
              channel,
              fromDate,
              toDate,
              toDateFinal,
              olderMessagesToLoad,
              (info) => {
                this.onLoadChannelDateRangeFinished(info);
                resolve(info);
              },
            )
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
          this.loadOlderMessages(paths, 0, messagesToLoadByPath, channel);

          window.setTimeout(() => {
            // scroll to hash if set
            const id = location.hash.slice(1);
            if (id) {
              const element = document.getElementById(id);

              if (element) {
                element.style.border = "2px solid rgb(0, 51, 34)";
                element.scrollIntoView();
              }
            }
          }, 500);
        },
        loadOlderMessages: function (paths, i, messagesToLoadByPath, channel) {
          const path = paths[i],
            enrichArgs = { users: this.users, channels: this.channels },
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
                      enrichMessage(msg, enrichArgs, true, channel);
                      msg.responses = dummyMsg.responses;
                      this.history.msgs[index] = msg;
                    }
                  }
                  this.loadOlderMessages(
                    paths,
                    i + 1,
                    messagesToLoadByPath,
                    channel,
                  );
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

          return this.loadChannelDateRange(this.channel, fromDate, toDate);
        },
        getDumpFileName: function (extension) {
          return this.channel + "." + extension;
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
              result.push(Object.assign({}, parentMsg, { responses }));
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
            .join("\n\n---\n\n");
          downloadAs(txt, this.getDumpFileName("md"), "text/markdown");
        },
        getMdTitleForCurrentChannel: function () {
          switch (this.channel) {
            case "two-minute-week":
              return mdTitle1("Two Minute Week");
            case "share-your-work":
              return mdTitle1("Our Work");
            case "reading-together":
              return mdTitle1("Reading Together");
            case "thinking-together":
              return mdTitle1("Thinking Together");
            case "devlog-together":
              return mdTitle1("Devlog Together");
            case "linking-together":
              return mdTitle1("Content");
            case "of-ai":
              return mdTitle1("🤖");
            default:
              return mdTitle1(this.channel);
          }
        },
        exportThisAsNewsletterWithWeek: function (week) {
          const month = this.toDate.split("-")[1],
            title = this.getMdTitleForCurrentChannel();
          this.exportAsNewsletter(
            `${month}/${week}/${this.channel}.html`,
            title,
          );
          this.exportAsHTML();
        },
        exportAsNewsletter: function (linkSuffix, title) {
          const linkPrefix =
              `https://history.futureofcoding.org/history/weekly/${
                new Date().getFullYear()
              }/${linkSuffix}`,
            txt = title +
              this.history.msgs
                .filter((msg) => !msg.$isOlder)
                .map((msg) => msgToMdNL(msg, linkPrefix))
                .join("\n\n---\n\n");

          downloadAs(txt, this.getDumpFileName("md"), "text/markdown");
          this.printMessageUsersNotInAuthors();
        },
        printMessageUsersNotInAuthors() {
          console.log(
            Array.from(this.getMessageUsersNotInAuthors(this.history.msgs))
              .sort()
              .join(", "),
          );
        },
        getMessageUsersNotInAuthors(msgs) {
          const result = new Set();
          msgs.forEach((msg) => {
            const username = msg.$userName;
            if (AUTHORS[username] === undefined) {
              result.add(username);
            }
          });

          return result;
        },
        exportAsHTML: function () {
          const msgsOutputNode = document.getElementById("msgs-output"),
            msgsOutput = msgsOutputNode.innerHTML,
            html = EXPORT_HTML_PREFIX + msgsOutput + EXPORT_HTML_SUFFIX;

          downloadAs(html, this.getDumpFileName("html"), "text/html");
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
    infoProm
      .then((_) => app.loadSelected())
      .then((info) => {
        console.log("finished!", info);
        if (query.forNewsletter !== undefined) {
          // {prevDay, nextDay, weekNumber, weekStr, monthStr, curYear}
          const { weekStr } = getInfoForWeekAndDay(new Date(), MONDAY);
          app.exportThisAsNewsletterWithWeek(weekStr);
        }
      });
  }

  window.focApp = app;
}

main();
