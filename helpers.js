//@format
/*globals Vue*/

function main() {
  const app = new Vue({
    el: '#app',
    data: {
      curAuthor: '',
      curSlackThread: '',
      url: '',
      urlTitle: '',
      lastSelectedEmoji: '',
      authors: {
        'Sol Bekic': '[Sol Bekic](https://twitter.com/S0lll0s)',
        'Shalabh Chaturvedi':
          '[Shalabh Chaturvedi](https://twitter.com/chatur_shalabh)',
        'Geoffrey Litt': '[Geoffrey Litt](https://twitter.com/geoffreylitt)',
        'Kartik Agaram': '[Kartik Agaram](http://akkartik.name/about)',
        'Scott Anderson':
          '[Scott Anderson](https://twitter.com/ImpossibleScott)',
        'Will Crichton': '[Will Crichton](willcrichton.net)'
      }
    },
    computed: {
      curAuthorText: function() {
        return this.authors[this.curAuthor] || '**' + this.curAuthor + '**';
      },
      curSlackThreadText: function() {
        return '(🧵[Slack Thread](' + this.curSlackThread + '))';
      },
      urlMd: function() {
        return `[${this.urlTitle}](${this.url})`;
      },
      message: function() {
        return (
          this.lastSelectedEmoji +
          ' ' +
          this.urlMd +
          '. Via ' +
          this.curAuthorText +
          ' ' +
          this.curSlackThreadText
        );
      }
    },

    methods: {
      copyAuthorText: function() {
        navigator.clipboard.writeText(this.curAuthorText);
      },
      copySlackThreadText: function() {
        navigator.clipboard.writeText(this.curSlackThreadText);
      },
      copyMessage: function() {
        navigator.clipboard.writeText(this.message);
      },
      copyUrl: function() {
        navigator.clipboard.writeText(this.urlMd);
      }
    }
  });

  window.copyInnerContent = function(e) {
    const emoji = e.target.innerText;
    navigator.clipboard.writeText(emoji);
    app.lastSelectedEmoji = emoji;
  };
}

main();
