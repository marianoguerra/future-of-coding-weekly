<!--
.. title: Future of Coding Weekly 2024/04 Week 2
.. slug: future-of-coding-weekly-202404-week-2
.. date: 2024-04-07 23:14:22 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🔮 Towards a modern Web stack 🎥 ThinkyCon 2024 👷 FoC Project Updates

# Two Minute Week

💬 [Chris Maughan](http://www.chrismaughan.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/two-minute-week.html#2024-04-03T13:20:41.156Z)

A simple demo, trying to show how a pin-hole camera works.  Not really how it works, but kind of. 😉

The 'film' in the back of the camera is a 'flatland' view of the scene, upside down, of course....

🎥 [balls demo](http://history.futureofcoding.org/history/msg_files/F06/F06SNV978H2.mp4)

# Our Work

💻 [resheet.dev: A notes-spreadsheet-hybrid for programmers](https://resheet.dev) via **Daniel Krüger**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/share-your-work.html#2024-04-01T13:15:00.083Z)

I'm currently building [resheet.dev](https://resheet.dev), a notion-spreadsheet-hybrid. Started because I often ran into limitations with Notion and with spreadsheets. In Notion I wanted to be able to just do some calculations (or even have some embedded spreadsheet). Spreadsheets are nice, but I always ran into limitations. I always thought these could easily be overcome by having a more feature-complete programming language. Because I previously failed very hard by being too ambitious, I tried to keep this project simple. ReSheet runs JavaScript with React because of the vast ecosystem and wide adoption.



It was important to me that it's core is simple and extensible: Everything revolves around the concept of a "Block", which can be thought of like a cell in a spreadsheet. Blocks can be nested and you're able to write and then use your custom Block completely in ReSheet itself. As ReSheet itself is just one big Block you can embed ReSheet in itself.



Maybe sometime in the future I'll get to work on a Block for visual and interactive programming, but currently I'm trying to get it reliably working and useful in the current state.



I'd love to hear your feedback and to answer any questions! (Documentation is still lacking. Currently working on adding some example documents (in ReSheet) to better show what's possible)

📝 [Lattice now compiles to .NET IL — John Austin](https://johnaustin.io/articles/2024/lattice-now-compiles-to-net-il) via **John Austin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/share-your-work.html#2024-04-02T21:26:41.512Z)

I wrote up a blog post recently on Lattice, a high performance visual programming system aimed at Unity.


Thought you all might find it interesting!

> 📝 [Lattice now compiles to .NET IL — John Austin](https://johnaustin.io/articles/2024/lattice-now-compiles-to-net-il)
>
>Lattice is a high-performance visual scripting system targeting Unity ECS. Read more here . I’ve tried several times to write blog posts about Lattice, and each time I’ve gotten lost in the weeds. It’s hard to pick a point to start. So instead, I’ve resolved to just start writing — quantity o

🚲 [Projects related to Bicycle Computing](https://github.com/bicycle-codes/) via **nichoth**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/share-your-work.html#2024-04-07T05:57:09.501Z)

Another day, another module



* [@bicycle-codes/scroll-progress](https://github.com/bicycle-codes/scroll-progress)
* [@bicycle-codes/raf-scroll](https://github.com/bicycle-codes/raf-scroll)
* [@bicycle-codes/tonic](https://github.com/bicycle-codes/tonic)
* [@bicycle-codes/copy-button](https://github.com/bicycle-codes/copy-button)


# Devlog Together

📜 [Future of Coding Weekly **2020**/01 Week 3](https://newsletter.futureofcoding.org/posts/future-of-coding-weekly-202001-week-3/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/devlog-together.html#2024-04-03T09:31:18.889Z)

I got a simple idea to migrate the old newsletter posts to the "blog", here's the first one I have: [newsletter.futureofcoding.org/posts/future-of-coding-weekly-202001-week-3](https://newsletter.futureofcoding.org/posts/future-of-coding-weekly-202001-week-3/)



I noticed that all links go through tinyletter but they still seem to work, example: [mail01.tinyletterapp.com/marianoguerra/future-of-coding-weekly-2020-01-week-3/161[…]youtube.com/watch?c=f8edef3a-2c5e-4af4-a34d-904e97c707cf](http://mail01.tinyletterapp.com/marianoguerra/future-of-coding-weekly-2020-01-week-3/16109598-www.youtube.com/watch?c=f8edef3a-2c5e-4af4-a34d-904e97c707cf)



there's not enough information to recover them from url itself but since they are still working I should resolve them to the originals as fast as possible in case that service is turned off too 😕



Update: I wrote [a script](https://github.com/marianoguerra/future-of-coding-weekly/blob/gh-pages/detinyletter.js) to replace all redirect urls to the original ones, the post above is updated

💬 [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/devlog-together.html#2024-04-03T20:55:37.540Z)

Today, I'm trying to get function signatures for all the std lib stuff in JS… at runtime. Current attempt is converting various d.ts files from the typescript package (like, say, es5.d.ts) into a JSON file with just the bits I need. If that fails, I might try parsing the official WebIDL files (that are used to generate these d.ts files — at least, the dom ones).



If there's a much more obvious way to get this info, let me know. I basically just want something that, for a given function (eg: Array.prototype.splice), gives me some basic signature info (eg: 1-2 args with rest, first arg is called "index", optional second is called "delete", rest is "items"). If all else fails I'll just do .length on these functions, but I'd prefer to get names too.

🎥 [Simple state machine with value slider for brightness control and image in code-flow-canvas](https://youtu.be/3t6XUXdFMZU) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/devlog-together.html#2024-04-07T19:09:34.158Z)

![Youtube Thumbnail](https://img.youtube.com/vi/3t6XUXdFMZU/hqdefault.jpg)

I've been fixing some bugs in the state-machine node-type in my visual programming system "code-flow-canvas" and also added a small media-library node-type which can be used by the show-image node-type.

The show-image node-type can be controlled by the state-machine together with some UI node-types (button and slider).

The show-image node-type also has an ability to change it's css and use flow parameters/variables (currently only the incoming value of a event/value special input-type.. I want to make this more generic in the near future so that you can send custom property-bags "over the wire" to other nodes).



The timeline slider doesn't work together nicely with the slider node-type yet, so I have to work on that further.



This example can be found on [demo.codeflowcanvas.io](https://demo.codeflowcanvas.io) in the "examples" drop down: "Simple state machine with image and brightness". 

# Thinking Together

📝 [The origins of silicon valley](https://guitarvydas.github.io/2024/04/05/The-Origins-of-Silicon-Valley.html) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/thinking-together.html#2024-04-06T03:15:50.726Z)

Silicon Valley vs. non-compete clauses. [guitarvydas.github.io/2024/04/05/The-Origins-of-Silicon-Valley.html](https://guitarvydas.github.io/2024/04/05/The-Origins-of-Silicon-Valley.html)

> 📝 [The origins of silicon valley](https://guitarvydas.github.io/2024/04/05/The-Origins-of-Silicon-Valley.html)
>
>I attended this talk <https://events.vtools.ieee.org/m/409693> by Paul Wesling in-person, yesterday.


# Content

📝 [Month of Future of Coding Past](https://history.futureofcoding.org/?fromDate=2024-03-28&toDate=2024-04-03&channel=present-company&filter=#2024-03-31T20:15:39.930Z) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/linking-together.html#2024-04-03T13:57:12.950Z)

Following the [💬 conversation here](https://history.futureofcoding.org/?fromDate=2024-03-28&toDate=2024-04-03&channel=present-company&filter=#2024-03-31T20:15:39.930Z) I decided to experiment with a "Month of Future of Coding Past".



Every week I will dump from tinyletter and re upload one month of the [Future of Coding Newsletter](https://newsletter.futureofcoding.org/) and publish it as a message here, that way we can all go over past conversations and links and I have a reason and rhythm to make them available again.



A month re uploaded per week will allow me to catch up faster than "realtime" but still at a pace I can probably keep.



Here's the first edition, the first two newsletters I have in my email (January 2020):






* [Future of Coding Weekly 2020/01 Week 3](https://newsletter.futureofcoding.org/posts/future-of-coding-weekly-202001-week-3/)
* [Future of Coding Weekly 2020/01 Week 4](https://newsletter.futureofcoding.org/posts/future-of-coding-weekly-202001-week-4/)

🕹️ [free software and game development](https://henriquelalves.com/posts/free-software-and-game-development/) via [Joe Nash](https://twitter.com/jna_sh)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/linking-together.html#2024-04-03T16:27:30.252Z)

This article talks about “Living games” and game engines that enable living games by i.e. having no separation between the editor and the runtime, and gets into some FoC territory I think y’all will enjoy

🔮 [Towards a modern Web stack](https://docs.google.com/document/d/1peUSMsvFGvqD5yKh3GprskLC3KVdAlLGOsK6gFoEOD0/edit?resourcekey=0-bPajpoo9IBZpG__-uCBE6w) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/linking-together.html#2024-04-04T21:13:11.536Z)

-> [Towards a modern Web stack](https://docs.google.com/document/d/1peUSMsvFGvqD5yKh3GprskLC3KVdAlLGOsK6gFoEOD0/edit?resourcekey=0-bPajpoo9IBZpG__-uCBE6w)



Cool new take on the [Extensible Web Manifesto](https://github.com/extensibleweb/manifesto), this one from [Hixie](https://en.wikipedia.org/wiki/Ian_Hickson) (Acid2, Acid3, WHATWG, Pingback, Flutter, etc).



I love the breakdown — Wasm, WebGPU, ARIA, and HID. I would build on that stack!

🐦 [Amelia Wattenberger 🪷 (@Wattenberger) on X](https://x.com/Wattenberger/status/1776032867031900608) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/linking-together.html#2024-04-04T23:52:14.449Z)

New music genre just dropped

> 🐦 [Amelia Wattenberger 🪷 (@Wattenberger) on X](https://x.com/Wattenberger/status/1776032867031900608): I did some cutting-edge AI research into the best way to read code. 100% now part of my workflow:
> 
> ["use client"; mongolian throat singing v3](https://app.suno.ai/song/f44c966a-7c41-4c13-88a8-8e0e88b492bf/)

📑 [a list of random software engg ideas](https://github.com/jbenet/random-ideas/issues) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/linking-together.html#2024-04-05T08:02:17.111Z)

A couple of years ago, I noticed how Juan Benet (founder of IPFS) was keeping [a list of random software engg ideas](https://github.com/jbenet/random-ideas/issues) in a github repo as issues. Since then I too started keeping my own list of "RFH"s ("Request for Hacks") - similar to Request for Comments and Request for Startups - here: [codeberg.org/nilesh/request-for-hacks/issues](https://codeberg.org/nilesh/request-for-hacks/issues) and recently made it public.



Posting ideas in a place where public discussion can take place seems like an excellent way to get open feedback or review. I encourage other programmers to do the same. Perhaps,  `/<username>/request-for-hacks`  can become a standard way to discover these. 🙂

![image.png](http://history.futureofcoding.org/history/msg_files/F06/F06SY9PPPQB.png)

🎥 [Alan Kay at MIT-EECS 1998 Fall Semester Colloquium Series (VPRI 834)](https://www.youtube.com/watch?v=BUud1gcbS9k&amp;t=2050) via [Oleksandr Kryvonos](https://twitter.com/o_kryvonos)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/linking-together.html#2024-04-05T20:41:10.291Z)

![Youtube Thumbnail](https://img.youtube.com/vi/BUud1gcbS9k/hqdefault.jpg)

I watched older video by Alan Kay and now I want to give a Squeak another try


🎥 [ThinkyCon 2024 - Day 1](https://www.youtube.com/watch?v=7kgXBifWQXI&amp;t=12992s) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W2/linking-together.html#2024-04-05T20:58:10.451Z)

![Youtube Thumbnail](https://img.youtube.com/vi/7kgXBifWQXI/hqdefault.jpg)

There's a puzzle game conference called ThinkyCon that's currently running. Some of the talks are about editor tooling ([like this one](https://www.youtube.com/watch?v=7kgXBifWQXI&t=5591s), about the dev tooling used for the game A Monster's Expedition), which feels roughly relevant to this community. But there's one talk in particular that I  _must_  draw your attention to because this is the internet and I need to earn points. The talk is called "[Rewinding: moving time backwards in planning-based games](https://www.youtube.com/watch?v=7kgXBifWQXI&t=12992s)". The first example they use of a game that ought to have rewind but doesn't is Opus Magnum, a game by Zachtronics that is the spiritual successor to SpaceChem. I'd argue that both of these games are visual programming environments, and that this talk is basically an argument that visual programming deserves the ability to rewind time.


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
