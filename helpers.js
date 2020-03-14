//@format
/*globals Vue*/

function main() {
  const app = new Vue({
    el: '#app',
    data: {
      curAuthor: '',
      curBy: '',
      curByUrl: '',
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
        'Will Crichton': '[Will Crichton](willcrichton.net)',
        'Charlie Roberts': '[Charlie Roberts](https://www.charlie-roberts.com)',
        'Ivan Reese': '[Ivan Reese](https://twitter.com/spiralganglion)',
        'Chris Martens':
          '[Chris Martens](https://sites.google.com/ncsu.edu/cmartens?authuser=2)',
        'Mariano Guerra': '[Mariano Guerra](https://twitter.com/warianoguerra)',
        Prathyush: '[Prathyush](https://twitter.com/prabros)'
      },
      pronouns: {
        'Chris Martens': 'They/Them'
      }
    },
    computed: {
      curAuthorText: function() {
        return this.authors[this.curAuthor] || '**' + this.curAuthor + '**';
      },
      curByText: function() {
        return this.curBy ? `[${this.curBy}](${this.curByUrl})` : '';
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
          (this.curByText ? ' By ' + this.curByText : '') +
          ' ' +
          this.curSlackThreadText
        );
      }
    },

    methods: {
      copyAuthorText: function() {
        navigator.clipboard.writeText(this.curAuthorText);
      },
      copyByText: function() {
        navigator.clipboard.writeText(this.curByText);
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
