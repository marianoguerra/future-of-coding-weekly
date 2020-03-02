//@format
/*globals Vue*/

function main() {
  new Vue({
    el: '#app',
    data: {
      curAuthor: '',
      authors: {
        'Sol Bekic': '[Sol Bekic](https://twitter.com/S0lll0s)',
        'Shalabh Chaturvedi':
          '[Shalabh Chaturvedi](https://mobile.twitter.com/chatur_shalabh)',
        'Geoffrey Litt': '[Geoffrey Litt](https://twitter.com/geoffreylitt)',
        'Kartik Agaram': '[Kartik Agaram](http://akkartik.name/about)'
      }
    },
    computed: {
      curAuthorText: function() {
        return this.authors[this.curAuthor] || '**' + this.curAuthor + '**';
      }
    },

    methods: {
      copyAuthorText: function() {
        navigator.clipboard.writeText(this.curAuthorText);
      }
    }
  });
}

window.copyInnerContent = function(e) {
  navigator.clipboard.writeText(e.target.innerText);
};

main();
