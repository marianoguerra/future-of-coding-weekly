//@format
/*globals Vue*/
import { AUTHORS_TABLE } from "../common.js";
function main() {
  const app = new Vue({
    el: "#app",
    data: {
      allUsers: AUTHORS_TABLE.map((
        { user, name, url },
      ) => ({
        user,
        name,
        url,
        _index: `${user}\n${name}\n${url}`.toLowerCase(),
      })),
      users: [],
      loading: false,
      filter: "",
    },
    methods: {
      doSearch() {
        const filter = this.filter.toLowerCase();
        this.users = this.allUsers.filter((row, _i, _) =>
          row._index.includes(filter)
        );
      },
    },
  });

  app.doSearch();
}

main();
