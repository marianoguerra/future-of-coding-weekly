//@format
/*globals Vue, TextDecoderStream*/

function main() {
  let nextFilterId = null;
  const app = new Vue({
    el: '#app',
    data: {
      links: [],
      tableLinks: [],
      page: 0,
      itemsPerPage: 50,
      allLinks: [],
      filter: '',
      loading: false,
    },
    methods: {
      refilter: function () {
        const filter = this.filter.toLowerCase().trim();
        this.links = [];
        if (filter === '') {
          this.links = this.allLinks;
          this._updateTableLinks();
        } else {
          this.loading = true;
          if (nextFilterId) {
            clearTimeout(nextFilterId);
            nextFilterId = null;
          }
          this._refilter(filter, this.allLinks, 0, 1000, []);
        }
      },
      _refilter(filter, allLinks, i0, chunkSize, toAdd) {
        const len = Math.min(i0 + chunkSize, allLinks.length);
        for (let i = i0; i < len; i++) {
          const link = allLinks[i];
          if (link._searchText.includes(filter)) {
            toAdd.push(link);
          }
        }

        if (len < allLinks.length) {
          nextFilterId = setTimeout(
            () => this._refilter(filter, allLinks, len, chunkSize, toAdd),
            0
          );
        } else {
          nextFilterId = null;
          this.loading = false;
          this.links = toAdd;
          this._updateTableLinks();
        }
      },
      _updateTableLinks() {
        const from = this.page * this.itemsPerPage,
          to = from + this.itemsPerPage;

        if (from >= this.links.length) {
          this.page = this.getLastPageNum();

          const from = this.page * this.itemsPerPage,
            to = from + this.itemsPerPage;

          this.tableLinks = this.links.slice(from, to);
        } else {
          this.tableLinks = this.links.slice(from, to);
        }
      },
      tablePrev() {
        this.tablePrevCount(1);
      },
      tablePrevCount(count) {
        this.page = Math.max(0, this.page - count);
        this._updateTableLinks();
      },
      tableNext() {
        this.tableNextCount(1);
      },
      tableNextCount(count) {
        this.page = this.page + count;
        this._updateTableLinks();
      },
      tableFirst() {
        this.page = 0;
        this._updateTableLinks();
      },
      getLastPageNum() {
        return Math.floor(this.links.length / this.itemsPerPage);
      },
      tableLast() {
        this.page = this.getLastPageNum();
        this._updateTableLinks();
      },
      doSearch() {
        this.refilter();
        history.replaceState({}, null, '?search=' + this.filter);
      },
      _sortAllLinks() {
        this.allLinks.sort((a, b) => b.date.localeCompare(a.date));
      },
    },
  });

  async function fetchUrlChunks(url, handleChunk, onFinish) {
    const response = await fetch(url);
    const reader = response.body
      .pipeThrough(new TextDecoderStream())
      .getReader();
    fetchChunks(reader, '', handleChunk, onFinish);
  }

  async function fetchChunks(reader, remaining, handleChunk, onFinish) {
    const {value, done} = await reader.read(),
      newRemaining = value ? handleChunk(remaining + value) : '';

    if (done) {
      onFinish();
    } else {
      window.setTimeout(
        () => fetchChunks(reader, newRemaining, handleChunk, onFinish),
        0
      );
    }
  }

  function handleUrlsChunk(data) {
    let remaining = '';
    if (data) {
      data.split(/\n/g).forEach((line, _i, _) => {
        if (line) {
          try {
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
          } catch (err) {
            console.error(line);
            remaining = line;
          }
        }
      });
    }
    return remaining;
  }

  app.loading = true;
  function onUrlsFinish() {
    app.loading = false;
    app._sortAllLinks();
    const query = new URLSearchParams(location.search),
      search = query.get('search');

    if (search) {
      app.filter = search;
    }
    app.refilter();
    document.body.addEventListener('keyup', (e) => {
      if (e.target.nodeName === 'INPUT') {
        return;
      }

      const {key} = e;
      switch (key) {
        case 'f':
          app.tableFirst();
          break;
        case 'l':
          app.tableLast();
          break;
        case 'n':
          app.tableNext();
          break;
        case 'N':
          app.tableNextCount(10);
          break;
        case 'p':
          app.tablePrev();
          break;
        case 'P':
          app.tablePrevCount(10);
          break;
        case 's':
          document.getElementById('search').focus();
          break;
        default:
      }
    });
  }

  fetchUrlChunks('./links.txt', handleUrlsChunk, onUrlsFinish);
}

main();
