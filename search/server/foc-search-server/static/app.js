//@format
/*globals Vue, Set*/

function main() {
  new Vue({
    el: '#app',
    data: {
      channel: 'general',
      search: '',
      isError: false,
      errorMsg: '',
      items: [],
    },
    methods: {
      doSearch: function () {
        fetch(`search/?query=${this.search}&channel=${this.channel}`)
          .then((r) => r.json())
          .then((data) => {
            console.log(data);
            if (data.ok) {
              const ranges = new Set();
              this.isError = false;
              data.result.forEach((key, _i, _it) => {
                const ts = parseFloat(key.trim()) * 1000,
                  dateFrom = new Date(ts),
                  dateTo = new Date(ts + (24 * 60 * 60 * 1000)),
                  dateFromStr = dateFrom.toISOString().split('T')[0],
                  dateToStr = dateTo.toISOString().split('T')[0];

                ranges.add(dateFromStr + ' ' + dateToStr);
              });

              this.items = Array.from(ranges).sort().map((range, _i, _it) => {
                const [from, to] = range.split(' ');
                return {from, to, url: `https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate=${from}&toDate=${to}&channel=${this.channel}`};
              });
            } else {
              this.isError = true;
              this.errorMsg = data.reason;
            }
          });
      },
    },
  });
}

main();
