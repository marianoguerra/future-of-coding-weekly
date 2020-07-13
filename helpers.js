//@format
/*globals Vue*/
import {AUTHORS} from './common.js';

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
      quotes: '',
      authors: AUTHORS,
      pronouns: {
        'Chris Martens': 'They/Them',
      },
    },
    computed: {
      curAuthorText: function () {
        return this.curAuthor
          ? this.authors[this.curAuthor] || '**' + this.curAuthor + '**'
          : '';
      },
      curByText: function () {
        return this.curBy ? `[${this.curBy}](${this.curByUrl})` : '';
      },
      curSlackThreadText: function () {
        return '🧵[Conversation](' + this.curSlackThread + ')';
      },
      urlMd: function () {
        return this.urlTitle && this.url
          ? `[${this.urlTitle}](${this.url})`
          : '';
      },
      message: function () {
        return (
          this.lastSelectedEmoji +
          ' ' +
          this.urlMd +
          (this.curAuthorText ? ' via ' + this.curAuthorText : '') +
          (this.curByText ? ' by ' + this.curByText : '') +
          ' ' +
          this.curSlackThreadText +
          '\n\n' +
          this.quotesMd
        );
      },
      quotesMd: function () {
        const quotes = this.quotes.trim();
        return quotes === ''
          ? ''
          : quotes
              .split('\n')
              .map((line, _i, _it) => '> ' + line)
              .join('\n\n');
      },
    },

    methods: {
      copyAuthorText: function () {
        navigator.clipboard.writeText(this.curAuthorText);
      },
      clearAuthor: function () {
        this.curAuthor = '';
      },
      copyByText: function () {
        navigator.clipboard.writeText(this.curByText);
      },
      clearBy: function () {
        this.curBy = '';
        this.curByUrl = '';
      },
      copySlackThreadText: function () {
        navigator.clipboard.writeText(this.curSlackThreadText);
      },
      clearSlackThread: function () {
        this.curSlackThread = '';
      },
      copyMessage: function () {
        navigator.clipboard.writeText(this.message);
      },
      copyUrl: function () {
        navigator.clipboard.writeText(this.urlMd);
      },
      clearUrl: function () {
        this.url = '';
        this.urlTitle = '';
      },
      clearQuotes: function () {
        this.quotes = '';
      },
      clearAll: function () {
        this.clearAuthor();
        this.clearBy();
        this.clearSlackThread();
        this.clearUrl();
        this.clearQuotes();
      },
    },
  });

  window.copyInnerContent = function (e) {
    const emoji = e.target.innerText;
    navigator.clipboard.writeText(emoji);
    app.lastSelectedEmoji = emoji;
  };
}

main();
