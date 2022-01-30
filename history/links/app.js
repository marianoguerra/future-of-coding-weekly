//@format
/*globals Vue*/
function main() {
  const app = new Vue({
    el: '#app',
    data: {links: [], allLinks: [], filter: ''},
    methods: {
      refilter: function () {
        const filter = this.filter.toLowerCase();
        this.links = this.allLinks.filter(({_searchText}) =>
          _searchText.includes(filter)
        );
      },
      doSearch() {
        this.refilter();
      },
    },
  });

  fetch('./links.txt')
    .then((res) => res.text())
    .then((text) => {
      for (let line of text.split('\n')) {
        if (!line) {
          continue;
        }

        const [count, url, title, ts, status] = JSON.parse(line),
          date = new Date(ts).toISOString().slice(0, 16).replace('T', ' '),
          _searchText = `${count}\n${url}\n${title.toLowerCase()}\n${date}\n${status}`,
          isOkLink = status >= 200 && status <= 299,
          linkStatus = isOkLink ? 'ok' : 'error';

        app.allLinks.push({
          count,
          url,
          title,
          status,
          linkStatus,
          ts,
          date,
          _searchText,
        });
      }

      app.refilter();
    });
}

main();
