//@format

const AUTHORS = {
  'Sol Bekic': '[Sol Bekic](https://twitter.com/S0lll0s)',
  'Shalabh Chaturvedi':
    '[Shalabh Chaturvedi](https://twitter.com/chatur_shalabh)',
  'Geoffrey Litt': '[Geoffrey Litt](https://twitter.com/geoffreylitt)',
  'Kartik Agaram': '[Kartik Agaram](https://github.com/akkartik/mu)',
  'Scott Anderson': '[Scott Anderson](https://twitter.com/ImpossibleScott)',
  'Will Crichton': '[Will Crichton](willcrichton.net)',
  'Charlie Roberts': '[Charlie Roberts](https://www.charlie-roberts.com)',
  'Ivan Reese': '[Ivan Reese](https://twitter.com/spiralganglion)',
  'Chris Martens':
    '[Chris Martens](https://sites.google.com/ncsu.edu/cmartens?authuser=2)',
  'Mariano Guerra': '[Mariano Guerra](https://twitter.com/warianoguerra)',
  Prathyush: '[Prathyush](https://twitter.com/prabros)',
  'Peter Abrahamsen': '[Peter Abrahamsen](https://twitter.com/peidran)',
  'Michael Mamic': '[Michael Mamic](https://twitter.com/mchlmmc)',
  'Christopher Galtenberg':
    '[Christopher Galtenberg](https://twitter.com/galtenberg)',
  'Edward de Jong': '[Edward de Jong](http://beadslang.org/)',
  Karki: '[Karki](https://github.com/deepakkarki)',
  Brent: '[Brent](https://www.linkedin.com/in/brentgracey/)',
  'Steve Peak': '[Steve Peak](https://twitter.com/iopeak)',
  'Daniel Garcia': '[Daniel Garcia](https://pel-daniel.github.io/cv/)',
  'Vladimir Gordeev': '[Vladimir Gordeev](https://twitter.com/vladimir_vg)',
  'Temirlan Nugmanov': '[Temirlan Nugmanov](https://twitter.com/optemization)',
  'Max Krieger': '[Max Krieger](https://twitter.com/maxkriegers)',
  'David Piepgrass': '[David Piepgrass](https://twitter.com/DPiepgrass)',
  'Josh Cho': '[Josh Cho](https://twitter.com/JoshCho321)',
  'Samuel Squire': '[Samuel Squire](https://github.com/samsquire)',
  'Aria Minaei': '[Aria Minaei](https://twitter.com/ariaminaei)',
  'Stefan Lesser': '[Stefan Lesser](https://twitter.com/stefanlesser)',
  'Paul Biggar': '[Paul Biggar](https://twitter.com/paulbiggar)',
  'Chris Maughan': '[Chris Maughan](http://www.chrismaughan.com/)',
  'Yair Chuchem': '[Yair Chuchem](https://twitter.com/yairchu)',
  'Jacob Chapman': '[Jacob Chapman](https://unli.xyz/)',
  Justin: '[Justin](https://twitter.com/newplagiarist)',
  'Jonathan Edwards': '[Jonathan Edwards](https://twitter.com/jonathoda/)',
  'Tom Lieber': '[Tom Lieber](https://twitter.com/alltom)',
  noahtren: '[noahtren](https://twitter.com/noahtren)',
  'Jack Armitage': '[Jack Armitage](https://twitter.com/jdkarmitage)',
  'Dan Swirsky': '[Dan Swirsky](https://twitter.com/danskydan)',
  yoshiki: '[yoshiki](https://twitter.com/yoshikischmitz)',
  'Alex Wein': '[Alex Wein](https://vis.social/@alexwein)',
  'Doug Moen': '[Doug Moen](http://curv3d.org/)',
  'Jamie Brandon': '[Jamie Brandon](https://scattered-thoughts.net/)',
  'Ryan King': '[Ryan King](https://twitter.com/_RyKi_)',
  'Shubhadeep Roychowdhury':
    '[Shubhadeep Roychowdhury](https://github.com/rcshubhadeep)',
  'Maikel van de Lisdonk': '[Maikel van de Lisdonk](https://www.devhelpr.com/)',
  'Grigory Hatsevich': '[Grigory Hatsevich](https://hatsevich.ru/)',
  'Dominik Jančík': '[Dominik Jančík](https://twitter.com/domjancik)',
  'Paul Sonnentag': '[Paul Sonnentag](https://twitter.com/paulsonnentag)',
  'Felix Kohlgrüber': '[Felix Kohlgrüber](https://twitter.com/FKohlgrueber)',
  'Chris Granger': '[Chris Granger](https://twitter.com/ibdknox)',
  'Nicolas Decoster': '[Nicolas Decoster](https://twitter.com/ogadaki)',
  'Daniel Owsianski': '[Daniel Owsianski](https://twitter.com/dannyow)',
  'Vitorio Miliano': '[Vitorio Miliano](http://vitor.io/)',
  'Andreas S': '[Andreas S](https://twitter.com/curious_reader)',
  'Robbie Gleichman': '[Robbie Gleichman](https://www.rgleichman.com/)',
  'J. Ryan Stinnett': '[J. Ryan Stinnett](https://twitter.com/jryans)',
  'Korede Aderele': '[Korede Aderele](twitter.com/korede_ta)',
  'Garth Goldwater': '[Garth Goldwater](https://twitter.com/no_defects)',
  'S.M Mukarram Nainar': '[S.M Mukarram Nainar](https://git.sr.ht/~sm2n/)',
  'Clemens Klokmose': '[Clemens Klokmose](http://www.klokmose.net/clemens/)',
  Maeliza:
    '[Maeliza](https://www.linkedin.com/in/ma%C3%ABliza-seymour-ab749a36/)',
  'Paul Butler': '[Paul Butler](https://paulbutler.org/)',
  'Chris Knott': '[Chris Knott](https://github.com/ChrisKnott)',
  'Steve Dekorte': '[Steve Dekorte](https://dekorte.com/)',
  'Duncan Cragg': '[Duncan Cragg](https://twitter.com/duncancragg)',
  'Jimmy Miller': '[Jimmy Miller](https://jimmyhmiller.github.io/)',
  'Gregg Tavares': '[Gregg Tavares](https://gregggman.com)',
  'Daniel Hines': '[Daniel Hines](https://github.com/d4hines)',
  'Spencer Baugh': '[Spencer Baugh](http://github.com/catern)',
  'Aleks Litynski': '[Aleks Litynski](https://github.com/AleksLitynski)',
  'Srini Kadamati': '[Srini Kadamati](https://twitter.com/SriniKadamati)',
  'Eddy Parkinson': '[Eddy Parkinson](http://www.cellmaster.com.au/)',
  'Robert Butler': '[Robert Butler](https://github.com/grokthis)',
  Ope: '[Ope](https://twitter.com/opeispo)',
  'Harry Brundage': '[Harry Brundage](https://twitter.com/harrybrundage)',
  'Konrad Hinsen': '[Konrad Hinsen](https://khinsen.net/)',
  'Xandor Schiefer': '[Xandor Schiefer](https://twitter.com/zeorin)',
};

export {AUTHORS};