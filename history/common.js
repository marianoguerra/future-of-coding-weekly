//@format

const AUTHORS_DATA = {
  "Sol Bekic": { name: "Sol Bekic", url: "https://twitter.com/S0lll0s" },
  "Shalabh": {
    name: "Shalabh Chaturvedi",
    url: "https://twitter.com/chatur_shalabh",
  },
  "Geoffrey Litt": {
    name: "Geoffrey Litt",
    url: "https://twitter.com/geoffreylitt",
  },
  "Kartik Agaram": {
    name: "Kartik Agaram",
    url: "https://github.com/akkartik/mu",
  },
  "Scott Anderson": {
    name: "Scott Anderson",
    url: "https://twitter.com/ImpossibleScott",
  },
  "Will Crichton": { name: "Will Crichton", url: "willcrichton.net" },
  "Charlie Roberts": {
    name: "Charlie Roberts",
    url: "https://www.charlie-roberts.com",
  },
  "Ivan Reese": {
    name: "Ivan Reese",
    url: "http://ivanish.ca/",
  },
  "Chris Martens": {
    name: "Chris Martens",
    url: "https://sites.google.com/ncsu.edu/cmartens?authuser=2",
  },
  "Mariano Guerra": {
    name: "Mariano Guerra",
    url: "https://twitter.com/warianoguerra",
  },
  Prathyush: { name: "Prathyush", url: "https://twitter.com/prabros" },
  "Peter Abrahamsen": {
    name: "Peter Abrahamsen",
    url: "https://twitter.com/peidran",
  },
  "Michael Mamic": {
    name: "Michael Mamic",
    url: "https://twitter.com/mchlmmc",
  },
  "Christopher Galtenberg": {
    name: "Christopher Galtenberg",
    url: "https://twitter.com/galtenberg",
  },
  "Edward de Jong": { name: "Edward de Jong", url: "http://beadslang.org/" },
  Karki: { name: "Karki", url: "https://github.com/deepakkarki" },
  Brent: { name: "Brent", url: "https://www.linkedin.com/in/brentgracey/" },
  "Steve Peak": { name: "Steve Peak", url: "https://twitter.com/iopeak" },
  "Daniel Garcia": {
    name: "Daniel Garcia",
    url: "https://pel-daniel.github.io/cv/",
  },
  "Vladimir Gordeev": {
    name: "Vladimir Gordeev",
    url: "https://twitter.com/vladimir_vg",
  },
  "Temirlan Nugmanov": {
    name: "Temirlan Nugmanov",
    url: "https://twitter.com/optemization",
  },
  "Max Krieger": {
    name: "Max Krieger",
    url: "https://twitter.com/maxkriegers",
  },
  "David Piepgrass": {
    name: "David Piepgrass",
    url: "https://twitter.com/DPiepgrass",
  },
  "Josh Cho": { name: "Josh Cho", url: "https://twitter.com/JoshCho321" },
  "Samuel Squire": {
    name: "Samuel Squire",
    url: "https://github.com/samsquire",
  },
  "Aria Minaei": { name: "Aria Minaei", url: "https://twitter.com/ariaminaei" },
  "Stefan Lesser": {
    name: "Stefan Lesser",
    url: "https://twitter.com/stefanlesser",
  },
  "Paul Biggar": { name: "Paul Biggar", url: "https://twitter.com/paulbiggar" },
  "Chris Maughan": {
    name: "Chris Maughan",
    url: "http://www.chrismaughan.com/",
  },
  "Yair Chuchem": { name: "Yair Chuchem", url: "https://twitter.com/yairchu" },
  "Jacob Chapman": { name: "Jacob Chapman", url: "https://unli.xyz/" },
  Justin: { name: "Justin", url: "https://twitter.com/newplagiarist" },
  "Jonathan Edwards": {
    name: "Jonathan Edwards",
    url: "https://twitter.com/jonathoda/",
  },
  "Tom Lieber": { name: "Tom Lieber", url: "https://twitter.com/alltom" },
  noahtren: { name: "noahtren", url: "https://twitter.com/noahtren" },
  "Jack Armitage": {
    name: "Jack Armitage",
    url: "https://twitter.com/jdkarmitage",
  },
  "Dan Swirsky": { name: "Dan Swirsky", url: "https://twitter.com/danskydan" },
  yoshiki: { name: "yoshiki", url: "https://twitter.com/yoshikischmitz" },
  "Alex Wein": { name: "Alex Wein", url: "https://vis.social/@alexwein" },
  "Doug Moen": { name: "Doug Moen", url: "http://curv3d.org/" },
  "Jamie Brandon": {
    name: "Jamie Brandon",
    url: "https://scattered-thoughts.net/",
  },
  "Ryan King": { name: "Ryan King", url: "https://twitter.com/_RyKi_" },
  "Shubhadeep Roychowdhury": {
    name: "Shubhadeep Roychowdhury",
    url: "https://github.com/rcshubhadeep",
  },
  "Maikel van de Lisdonk": {
    name: "Maikel van de Lisdonk",
    url: "https://www.devhelpr.com/",
  },
  "Grigory Hatsevich": {
    name: "Grigory Hatsevich",
    url: "https://hatsevich.ru/",
  },
  "Dominik Jančík": {
    name: "Dominik Jančík",
    url: "https://twitter.com/domjancik",
  },
  "Paul Sonnentag": {
    name: "Paul Sonnentag",
    url: "https://twitter.com/paulsonnentag",
  },
  "Felix Kohlgrüber": {
    name: "Felix Kohlgrüber",
    url: "https://twitter.com/FKohlgrueber",
  },
  "Chris Granger": {
    name: "Chris Granger",
    url: "https://twitter.com/ibdknox",
  },
  "nicolas decoster": {
    name: "Nicolas Decoster",
    url: "https://twitter.com/ogadaki",
  },
  "Daniel Owsianski": {
    name: "Daniel Owsianski",
    url: "https://twitter.com/dannyow",
  },
  "Vitorio Miliano": { name: "Vitorio Miliano", url: "http://vitor.io/" },
  "Andreas S.": {
    name: "Andreas S",
    url: "https://twitter.com/curious_reader",
  },
  "Robbie Gleichman": {
    name: "Robbie Gleichman",
    url: "https://www.rgleichman.com/",
  },
  "J. Ryan Stinnett": {
    name: "J. Ryan Stinnett",
    url: "https://twitter.com/jryans",
  },
  "Korede Aderele": { name: "Korede Aderele", url: "twitter.com/korede_ta" },
  "Garth Goldwater": {
    name: "Garth Goldwater",
    url: "https://twitter.com/no_defects",
  },
  "S.M Mukarram Nainar": {
    name: "S.M Mukarram Nainar",
    url: "https://git.sr.ht/~sm2n/",
  },
  "Clemens Klokmose": {
    name: "Clemens Klokmose",
    url: "http://www.klokmose.net/clemens/",
  },
  Maeliza: {
    name: "Maeliza",
    url: "https://www.linkedin.com/in/ma%C3%ABliza-seymour-ab749a36/",
  },
  "Paul Butler": { name: "Paul Butler", url: "https://paulbutler.org/" },
  "Chris Knott": { name: "Chris Knott", url: "https://github.com/ChrisKnott" },
  "Steve Dekorte": { name: "Steve Dekorte", url: "https://dekorte.com/" },
  "Duncan Cragg": {
    name: "Duncan Cragg",
    url: "https://twitter.com/duncancragg",
  },
  "Jimmy Miller": {
    name: "Jimmy Miller",
    url: "https://jimmyhmiller.github.io/",
  },
  "Gregg Tavares": { name: "Gregg Tavares", url: "https://gregggman.com" },
  "Daniel Hines": { name: "Daniel Hines", url: "https://github.com/d4hines" },
  "Spencer Baugh": { name: "Spencer Baugh", url: "http://github.com/catern" },
  "Aleks Litynski": {
    name: "Aleks Litynski",
    url: "https://github.com/AleksLitynski",
  },
  "Srini Kadamati": {
    name: "Srini Kadamati",
    url: "https://twitter.com/SriniKadamati",
  },
  "Eddy Parkinson": {
    name: "Eddy Parkinson",
    url: "http://www.cellmaster.com.au/",
  },
  "Robert Butler": {
    name: "Robert Butler",
    url: "https://github.com/grokthis",
  },
  Ope: { name: "Ope", url: "https://twitter.com/opeispo" },
  "Harry Brundage": {
    name: "Harry Brundage",
    url: "https://twitter.com/harrybrundage",
  },
  "Konrad Hinsen": { name: "Konrad Hinsen", url: "https://khinsen.net/" },
  "Xandor Schiefer": {
    name: "Xandor Schiefer",
    url: "https://twitter.com/zeorin",
  },
  "Tudor Girba": { name: "Tudor Girba", url: "https://twitter.com/girba" },
  "Alex Miller": { name: "Alex Miller", url: "https://twitter.com/puredanger" },
  "Jack Rusher": { name: "Jack Rusher", url: "https://twitter.com/jackrusher" },
  "Emmanuel Oga": { name: "Emmanuel Oga", url: "https://emmanueloga.com/" },
  "Ray Imber": {
    name: "Ray Imber",
    url: "https://www.linkedin.com/in/raymond-imber-3a445b21",
  },
  "Ricardo A. Medina": {
    name: "Ricardo A. Medina",
    url: "https://twitter.com/ricmedr",
  },
  "Joe Nash": { name: "Joe Nash", url: "https://twitter.com/jna_sh" },
  "Peter van Hardenberg": {
    name: "Peter van Hardenberg",
    url: "https://twitter.com/pvh",
  },
  "Philipp Krüger": {
    name: "Philipp Krüger",
    url: "https://twitter.com/matheusdev23",
  },
  "Nick Smith": { name: "Nick Smith", url: "https://twitter.com/NickSmit_" },
  ikrima: { name: "ikrima", url: "https://twitter.com/ikrimae" },
  "Brian Hempel": {
    name: "Brian Hempel",
    url: "http://people.cs.uchicago.edu/~brianhempel/",
  },
  "Roben Kleene": {
    name: "Roben Kleene",
    url: "https://twitter.com/robenkleene",
  },
  "Joshua Horowitz": {
    name: "Joshua Horowitz",
    url: "https://twitter.com/qualmist",
  },
  "Dennis Heihoff": {
    name: "Dennis Heihoff",
    url: "https://twitter.com/denik",
  },
  "hamish todd": {
    name: "Hamish Todd",
    url: "https://twitter.com/hamish_todd",
  },
  "Cameron Yick": {
    name: "Cameron Yick",
    url: "https://twitter.com/hydrosquall",
  },
  "Chris Rabl": { name: "Chris Rabl", url: "https://twitter.com/crabl" },
  "Mike Cann": { name: "Mike Cann", url: "https://twitter.com/mikeysee" },
  "Andrew Carr": {
    name: "Andrew Carr",
    url: "https://twitter.com/andrew_n_carr",
  },
  Drewverlee: { name: "Drewverlee", url: "https://drewverlee.github.io/" },
  "Henning Dieterichs": {
    name: "Henning Dieterichs",
    url: "https://twitter.com/hediet_dev",
  },
  "Breck Yunits": {
    name: "Breck Yunits",
    url: "https://twitter.com/breckyunits",
  },
  "Steve Krouse": {
    name: "Steve Krouse",
    url: "https://twitter.com/stevekrouse",
  },
  "Stathis Sideris": {
    name: "Stathis Sideris",
    url: "https://twitter.com/stathissideris",
  },
  "Martin Sosic": {
    name: "Martin Sosic",
    url: "https://twitter.com/MartinSosic",
  },
  "Adnan Chaumette": {
    name: "Adnan Chaumette",
    url: "https://twitter.com/AdnanChaumette",
  },
  "elvis chidera": { name: "elvis chidera", url: "https://elvischidera.com" },
  bmitc: { name: "bmitc", url: "https://github.com/bmitc" },
  forresto: { name: "forresto", url: "https://twitter.com/forresto" },
  "Yousef El-Dardiry": {
    name: "Yousef El-Dardiry",
    url: "https://twitter.com/YousefED",
  },
  "Florian Schulz": {
    name: "Florian Schulz",
    url: "https://twitter.com/getflourish",
  },
  OperonGuy: { name: "OperonGuy", url: "https://twitter.com/OperonGuy" },
  xyzzy: { name: "xyzzy", url: "http://blog.xyzzyapps.link" },
  "Jean-Louis Villecroze": {
    name: "Jean-Louis Villecroze",
    url: "https://twitter.com/CocoaGeek",
  },
  "Glen Chiacchieri": {
    name: "Glen Chiacchieri",
    url: "https://twitter.com/Glench",
  },
  "Marcel Goethals": {
    name: "Marcel Goethals",
    url: "https://twitter.com/wolkenmachine",
  },
  "Marcin Ignac": {
    name: "Marcin Ignac",
    url: "https://twitter.com/marcinignac",
  },
  "Rob Haisfield": {
    name: "Rob Haisfield",
    url: "https://twitter.com/RobertHaisfield",
  },
  "Cole Lawrence": {
    name: "Cole Lawrence",
    url: "https://github.com/colelawrence",
  },
  "Braden Eliason": {
    name: "Braden Eliason",
    url: "https://github.com/bradeneliason",
  },
  "Andrew F": { name: "Andrew F", url: "http://github.com/andrewf" },
  "Kevin Greer": { name: "Kevin Greer", url: "https://twitter.com/kgrgreer" },
  taowen: { name: "taowen", url: "https://github.com/taowen" },
  "Yusuke Shinyama": {
    name: "Yusuke Shinyama",
    url: "https://github.com/euske",
  },
  "Tak Tran": { name: "Tak Tran", url: "https://twitter.com/zlog" },
  "Alexander Chichigin": {
    name: "Alexander Chichigin",
    url: "https://github.com/gabriel-fallen/",
  },
  "Pablo Donato": {
    name: "Pablo Donato",
    url: "https://twitter.com/pablogician",
  },
  Xavier: { name: "Xavier", url: "https://lambein.xyz" },
  "Denny Vrandečić": {
    name: "Denny Vrandečić",
    url: "https://twitter.com/vrandezo",
  },
  "Paul Tarvydas": {
    name: "Paul Tarvydas",
    url: "https://guitarvydas.github.io/2021/09/23/Manifesto.html",
  },
  "Allan Campopiano": {
    name: "Allan Campopiano",
    url: "https://www.linkedin.com/in/allan-campopiano-703394120/",
  },
  "Alex Bit": { name: "Alex Bit", url: "https://www.linkedin.com/in/alexbit/" },
  "Nick Fox-Gieg": { name: "Nick Fox-Gieg", url: "https://twitter.com/n1ckfg" },
  "Sophie Smithburg": {
    name: "Sophie Smithburg",
    url: "https://twitter.com/heartpunkk",
  },
  "Felipe Reigosa": {
    name: "Felipe Reigosa",
    url: "https://twitter.com/MockMechanics",
  },
  "Lukas Süss": { name: "Lukas Süss", url: "https://twitter.com/mechadense" },
  "George Campbell": { name: "George Campbell", url: "https://gibr.net/" },
  "Eric Gade": { name: "Eric Gade", url: "https://homoridiculus.com" },
  "Diego Moya": { name: "Diego Moya", url: "https://twitter.com/DialMove" },
  "Nick Arner": { name: "Nick Arner", url: "https://twitter.com/nickarner" },
  "Alexey Shmalko": {
    name: "Alexey Shmalko",
    url: "https://www.alexeyshmalko.com/",
  },
  "Matthew Linkous": {
    name: "Matthew Linkous",
    url: "https://twitter.com/aspen_cloud",
  },
  "Srini K": { name: "Srini K", url: "https://www.viz.gl/" },
  "Benjamin Smith": {
    name: "Benjamin Smith",
    url: "https://benjaminsmith.dev",
  },
  "Mattia Fregola": {
    name: "Mattia Fregola",
    url: "https://twitter.com/MattiaFregola",
  },
  "Tom Larkworthy": { name: "Tom Larkworthy", url: "https://webcode.run" },
  "Sam Butler": { name: "Sam Butler", url: "https://twitter.com/sambutlerUS" },
  "Andrew Condon": {
    name: "Andrew Condon",
    url: "https://github.com/afcondon/purescript-d3-tagless-II",
  },
  "Tony O'Dell": { name: "Tony O'Dell", url: "https://twitter.com/oynoto" },
  Jamshid: { name: "Jamshid", url: "https://twitter.com/jamshidhashimi" },
  "Sam Ritchie": { name: "Sam Ritchie", url: "https://samritchie.io" },
  "Tom MacWright": { name: "Tom MacWright", url: "https://macwright.com/" },
  "Corey Montella": {
    name: "Corey Montella",
    url: "https://github.com/mech-lang/mech",
  },
  "Orion Reed": { name: "Orion Reed", url: "https://twitter.com/OrionReedOne" },
  "Christopher Shank": {
    name: "Christopher Shank",
    url: "https://mobile.twitter.com/chrisshank23",
  },
  "Jason Morris": {
    name: "Jason Morris",
    url: "https://twitter.com/RoundTableLaw",
  },
  "Danny O’Brien": {
    name: "Danny O’Brien",
    url: "https://www.spesh.com/danny",
  },
  Cristóbal: { name: "Cristóbal", url: "https://cristobal.space/" },
  "Evan Payne": { name: "Evan Payne", url: "https://twitter.com/evanfuture" },
  "Jarrett Atkinson": {
    name: "Jarrett Atkinson",
    url: "http://github.com/JJ-Atkinson",
  },
  "Jim Meyer": { name: "Jim Meyer", url: "https://twitter.com/jimmeyer" },
  "Václav Blažej": {
    name: "Václav Blažej",
    url: "https://blazeva1.pages.fit/",
  },
  "Kiril Videlov": { name: "Kiril Videlov", url: "https://twitter.com/krlvi" },
  "Ryo Hirayama": { name: "Ryo Hirayama", url: "https://github.com/ryo33" },
  "Parker Henderson": {
    name: "Parker Henderson",
    url: "http://twitter.com/parkerhendo",
  },
  "Andrew Reece": {
    name: "Andrew Reece",
    url: " https://twitter.com/azmreece",
  },
  "Oleksandr Kryvonos": {
    name: "Oleksandr Kryvonos",
    url: "https://twitter.com/o_kryvonos",
  },
  "Tony Worm": { name: "Tony Worm", url: "https://twitter.com/verdverm" },
  "Peter Saxton": {
    name: "Peter Saxton",
    url: "https://twitter.com/CrowdHailer",
  },
  "Szymon Kaliski": {
    name: "Szymon Kaliski",
    url: "https://twitter.com/szymon_k",
  },
  "Patrick Dubroy": {
    name: "Patrick Dubroy",
    url: "https://twitter.com/dubroy",
  },
  "Lu Wilson": { name: "Lu Wilson", url: "https://twitter.com/TodePond" },
  "Pasha Sadri": { name: "Pasha Sadri", url: "https://twitter.com/pashasadri" },
  "Ketan Agrawal": {
    name: "Ketan Agrawal",
    url: "https://twitter.com/_ketan0",
  },
  "Jan Ruzicka": { name: "Jan Ruzicka", url: "https://github.com/ruza-net" },
  "Sylwia Brodacka": {
    name: "Sylwia Brodacka",
    url: "https://twitter.com/sylwiab",
  },
  "Jared Forsyth": { name: "Jared Forsyth", url: "https://jaredforsyth.com/" },
  "Jason Chan": { name: "Jason Chan", url: "https://twitter.com/thejasonchan" },
  "Ulysses Popple": { name: "Ulysses Popple", url: "https://nodysseus.io/" },
  "Josh Justice": { name: "Josh Justice", url: "https://codingitwrong.com/" },
  //'': { name: "", url: "" },
};

const AUTHORS = Object.entries(AUTHORS_DATA).reduce(
  (accum, [user, { name, url }]) => {
    accum[user] = `[${name}](${url})`;
    return accum;
  },
  {},
);

const AUTHORS_TABLE = Object.entries(AUTHORS_DATA).reduce(
  (accum, [user, { name, url }]) => {
    accum.push({ user, name, url });
    return accum;
  },
  [],
);

AUTHORS_TABLE.sort((a, b) => a.name.localeCompare(b.name));

export { AUTHORS, AUTHORS_DATA, AUTHORS_TABLE };
