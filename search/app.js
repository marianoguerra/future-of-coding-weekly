//@format
/*globals Vue, Set*/
import {
  loadMsgsForDay,
  loadUsers,
  loadChannels,
  parseHistoryChannelData,
} from '/history/history.js';

function main() {
  new Vue({
    el: '#app',
    data: {
      channel: 'thinking-together',
      search: '',
      isError: false,
      errorMsg: '',
      msgsByTs: {},
      allMsgs: [],
      msgs: [],
      channels: {},
      users: {},
      channelsLoadProm: null,
      usersLoadProm: null,
    },
    methods: {
      loadUsers: function () {
        if (this.usersLoadProm) {
          return this.usersLoadProm;
        } else {
          this.usersLoadProm = loadUsers().then((users) => {
            this.users = users;
            return users;
          });
          return this.usersLoadProm;
        }
      },
      loadChannels: function () {
        if (this.channelsLoadProm) {
          return this.channelsLoadProm;
        } else {
          this.channelsLoadProm = loadChannels().then((channels) => {
            this.channels = channels;
            return channels;
          });
          return this.channelsLoadProm;
        }
      },
      doSearch: function () {
        this.msgs = [];
        this.allMsgs = [];
        this.msgsByTs = {};
        fetch(`search/?query=${this.search}&channel=${this.channel}`)
          .then((r) => r.json())
          .then((data) => {
            if (data.ok) {
              const ranges = new Set(),
                msgsByDay = {};
              this.isError = false;
              data.result.forEach((rawKey, _i, _it) => {
                const key = rawKey.trim(),
                  [tsStr /*threadTs*/, , msgFileDate, channel] = key.split(':'),
                  [yearStr, monthStr, dayStr] = msgFileDate.split('-'),
                  year = parseInt(yearStr, 10),
                  month = parseInt(monthStr, 10),
                  day = parseInt(dayStr, 10),
                  dateFromTs = Date.UTC(year, month - 1, day),
                  dateFrom = new Date(dateFromTs),
                  dateTo = new Date(dateFromTs + 24 * 60 * 60 * 1000),
                  dateFromStr = dateFrom.toISOString().split('T')[0],
                  dateToStr = dateTo.toISOString().split('T')[0];

                ranges.add(dateFromStr + ' ' + dateToStr);

                let msgsForDay = msgsByDay[dateFromStr];
                if (msgsForDay === undefined) {
                  msgsForDay = [];
                  msgsByDay[msgFileDate] = msgsForDay;
                }

                msgsForDay.push([tsStr, dateFromStr, dateToStr, channel]);
              });

              const daysToLoad = Object.keys(msgsByDay);
              daysToLoad.sort();
              this.loadUsers()
                .then((_) => this.loadChannels())
                .then((_) => this.loadMsgsByDay(daysToLoad, 0, msgsByDay, []));
            } else {
              this.isError = true;
              this.errorMsg = data.reason;
            }
          });
      },
      loadMsgsByDay: function (daysToLoad, i, msgsByDay, olderMessagesToLoad) {
        const date = daysToLoad[i];
        if (date) {
          const [year, month, day] = date.split('-'),
            msgsForThisDayOnAllChannels = msgsByDay[date],
            msgsForThisDayByChannel = {};

          for (
            let i = 0, len = msgsForThisDayOnAllChannels.length;
            i < len;
            i += 1
          ) {
            const msg = msgsForThisDayOnAllChannels[i],
              channel = msg[3];

            let msgs = msgsForThisDayByChannel[channel];
            if (msgs === undefined) {
              msgs = [];
              msgsForThisDayByChannel[channel] = msgs;
            }

            msgs.push(msg);
          }

          Object.keys(msgsForThisDayByChannel).forEach((channel) => {
            const msgsForThisDay = msgsForThisDayByChannel[channel];
            loadMsgsForDay(year, month, day, channel).then((msgs) => {
              parseHistoryChannelData(
                msgs,
                this.users,
                this.channels,
                this.msgsByTs,
                this.allMsgs,
                olderMessagesToLoad
              );

              msgsForThisDay.sort();
              for (let i = 0, len = msgsForThisDay.length; i < len; i += 1) {
                const [msgTs, fromDate, toDate] = msgsForThisDay[i],
                  msg = this.msgsByTs[msgTs];

                if (msg) {
                  msg.$searchURL = `https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate=${fromDate}&toDate=${toDate}&channel=${channel}`;
                  this.msgs.push(msg);
                } else {
                  console.log(
                    date,
                    msgTs,
                    new Date(parseFloat(msgTs) * 1000).toISOString(),
                    'not found'
                  );
                }
              }
              this.loadMsgsByDay(
                daysToLoad,
                i + 1,
                msgsByDay,
                olderMessagesToLoad
              );
            });
          });
        }
      },
    },
  });
}

main();
