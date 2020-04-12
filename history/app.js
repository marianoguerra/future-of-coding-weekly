//@format
/*globals Vue*/

function dummyUser(user) {
  return {user, name: user, real_name: user};
}

function getRealName(username, users) {
  const user = users[username];
  console.log(username, user);
  return user === undefined ? username : '@(' + user.real_name + ')';
}

const USER_REF_REGEX = /<@(.*?)>/g;
function enrichMessage(msg, users) {
  const date = new Date(+msg.ts * 1000),
    {user} = msg;

  msg.$date = date;
  msg.$text = msg.text.replace(USER_REF_REGEX, (_, username) =>
    getRealName(username, users)
  );
  try {
    msg.$dateStr = date.toISOString();
  } catch (error) {
    console.log(date, msg, error);
    msg.$dateStr = 'Invalid Date';
  }
  msg.$user = users[user] || dummyUser(user);

  return msg;
}

function parseHistoryChannelData(data, users) {
  const msgOrder = [],
    msgByTs = {};

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

  console.log(msgOrder, msgByTs);
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
      history: {
        loading: false,
        channel: 'general',
        folder: '2020-03-w-1',
        file: '2020-02-24',
        data: [],
        msgs: []
      },
      users: {
        loading: false,
        data: [],
        byUserId: {}
      }
    },
    methods: {
      loadUsers: function () {
        const {folder} = this.history;
        this.users.loading = true;
        return fetch(`${folder}/users.json`)
          .then(resp => resp.json())
          .then(data => {
            this.users.loading = false;
            this.users.data = data;
            this.users.byUserId = usersToUsersById(data);
          });
      },
      loadHistory: function () {
        const {folder, channel, file} = this.history;
        this.history.loading = true;
        this.history.data = [];
        return fetch(`${folder}/${channel}/${file}.json`)
          .then(resp => resp.json())
          .then(data => {
            console.log('got', data);
            this.history.loading = false;
            Vue.set(
              this.history,
              'msgs',
              parseHistoryChannelData(data, this.users.byUserId)
            );
            this.history.data = data;
          });
      }
    }
  });

  app.loadUsers().then(_ => app.loadHistory());
}

main();
