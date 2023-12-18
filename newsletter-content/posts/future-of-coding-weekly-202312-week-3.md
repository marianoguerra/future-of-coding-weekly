<!--
.. title: Future of Coding Weekly 2023/12 Week 3
.. slug: future-of-coding-weekly-202312-week-3
.. date: 2023-12-18 10:29:30 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

💻 The Future of Cloud Computing 🚰 The life and times of Yahoo Pipes 🐸 CellPond: Spatial programming without escape

# Our Work

👓 [LookAtThat: Render source code in 3D, for macOS and iOS.](http://GitHub.com/tikimcfee/LookAtThat) via **Ivan Lugo**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/share-your-work.html#2023-12-11T03:40:31.337Z)

Hey all! All abuzz that I’ve finally pushed the alpha version up of my Metal-based 3D code visualizer apps. After many months, I’ve finally gotten in my place:




* A brand new and extremely amateurish Metal rendering “engine” focused primarily on character glyphs.
* An, “is this a joke?” UTF8->UTF32->UnicodeGraphemeCluster GPU based text parser and basic layout engine.
* Download GitHub repositories in-app and view arbitrary textual files.
* Reset your atlas if you stumble into new languages online 🤓



If you’ve got an iPhone, iPad, or Mac device, I’d be happy to invite ya to the TestFlight to give the app a whirl where you’d like. Desktop builds and releases coming upon next coffee intake ritual.




![IMG_20231210_210128118_HDR](http://history.futureofcoding.org/history/msg_files/F06/F069KGKQBKN.jpg)

📝 [Shader Park is Kinda Neat - Untested](https://untested.sonnet.io/Shader+Park+is+Kinda+Neat) via **Rafał Pastuszak**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/share-your-work.html#2023-12-12T11:49:31.080Z)

I wrote a quick intro to Shader Park (a JS-like DSL for programming shaders) which gained some traction on similar forums:

> 📝 [Shader Park is Kinda Neat - Untested](https://untested.sonnet.io/Shader+Park+is+Kinda+Neat)


💻 [The Unison™ Cloud Platform | Say hello to the future of cloud computing](https://www.unison.cloud/) via **Stew O'Connor**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/share-your-work.html#2023-12-14T00:38:01.219Z)

I've been working for Unison for the last three years. I got hired start and head up the Unison Cloud project, which today we are starting to open up to early adopters: [unison.cloud](https://www.unison.cloud/) The idea is that we want to make it as easy as possible to go from some function from  `HttpRequest -> HttpServer`  to a deployed service, but we also want to give a rich and modern distributed programming interface to that function.   Hit me up if you want to get access to the Beta!

>Say hello to the future of cloud computing. Deploy with a function call. Call services as easily as local functions, verified by the typechecker. Access typed storage as easily as in-memory data structures.

🏕️ [Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/local-first/) via **Anton Podviaznikov**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/share-your-work.html#2023-12-14T21:00:52.622Z)

I'm currently working on a set of simple tools to make data from the apple products available on the traditional web.






* [montaigne.io](https://montaigne.io) - create website from apple notes
* [public.photos](https://public.photos) - publish photos online from apple photos. a bit on pause
* [kiwi.page](https://kiwi.page) - publish apple notes online. a bit on pause too



There are few interesting moments here for me:






* liberate data from apple products
* explore idea of [local first software](https://www.inkandswitch.com/local-first/) but in a different way. what is cool with this approach that data lives locally on your devices and then I just sync it to the web where it can be viewed and used by everyone





It's not super challenging programming wise, but interesting to think about in terms of how software can be written

# Devlog Together

🎠 [Lua Carousel](https://futureofcoding.slack.com/archives/CCL5VVBAN/p1700767728533219) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/devlog-together.html#2023-12-11T05:26:34.523Z)

[💬 #share-your-work@2023-11-23](./?fromDate=2023-11-20&toDate=2023-11-26&channel=share-your-work&filter=#2023-11-23T19:28:48.533Z) is starting to contribute to [Rectangle World](https://futureofcoding.slack.com/archives/C03RR0W5DGC/p1699075511054269)



[Pushing objects around in a dozen lines of code](https://akkartik.itch.io/carousel/devlog/648849/pushing-objects-around-in-a-dozen-lines-of-code)

🎥 [aabb collision](http://history.futureofcoding.org/history/msg_files/F06/F069W0KHG8H.webm)




📝 [Handling cascading collisions](https://akkartik.itch.io/carousel/devlog/649349/handling-cascading-collisions) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/devlog-together.html#2023-12-12T06:04:41.477Z)

🎥 [slide](http://history.futureofcoding.org/history/msg_files/F06/F069HGY4FGW.webm)

🧮 [App for drilling addition problems](https://git.sr.ht/~akkartik/sum-grid.love) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/devlog-together.html#2023-12-14T16:42:35.530Z)

Yesterday I turned a couple of my unused kids apps into just scripts you could run on Lua Carousel.



[git.sr.ht/~akkartik/sum-grid.love](https://git.sr.ht/~akkartik/sum-grid.love)

[git.sr.ht/~akkartik/spell-cards.love](https://git.sr.ht/~akkartik/spell-cards.love) (exercising my phone's microphone for the first time)



Both qualified successes. I didn't uncover any bugs, but the programs were 250 and 350 lines long, which starts to feel too long for my implementation of scrollbars.

🎥 [Advent of Code 2023 day 5 part1 using visual programming](https://youtu.be/td0QeePvfGQ) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/devlog-together.html#2023-12-17T16:19:59.880Z)

![Youtube Thumbnail](https://img.youtube.com/vi/td0QeePvfGQ/hqdefault.jpg)

I heard that day-5 part two was a curveball, so I really want to be able to implement it using my visual programming system... which failed so far. Using a brute force solution would mean that the program would run very very long. And my current "speed run" solution wouldn't suffice for this. 



Part one actually provided a big challenge for my vps as well, running the program with the small test dataset can be seen in the video: [youtu.be/td0QeePvfGQ](https://youtu.be/td0QeePvfGQ) . I've spend a lot of time adding more new node-types this weekend (like handling a while-loop and improved array handling) and making changes to the variable-nodes and expressions. Also the variable scoping (needed for local function variables) that I implemented had some flaws, so I fixed that as well. You can now define global and scoped variables. I've also made some simple variable visualizers that better show the data for data types like dictionary/array and grid. 



My current vps solution works better than the flow-based vps that I was building last year. A big difference is that the data that is send from node to node is now just a single value. That value can still be of different types (number, string, array).. and special variable-nodes are needed to keep track of data. These variables also have a type like number, string, array, dictionary, grid. Often working with a single value is not enough and that's why these variables are needed. They can be referenced from within expressions. Also being able to run some flow-parts in parallel or sequentially helps a lot. This starts to feel much more like a regular 3rd gen programming language. 



The UI is currently quite limited.. to be able to create a flow program efficiently it definitely needs a lot of work. Textual programming is much faster. I want to finish at least one of the advent of code puzzles where a grid is involved .. so today's puzzle (17) seems like a good fit. I'll probably work on that next weekend.

🧬 [Re: Conway's game of life](https://love2d.org/forums/viewtopic.php?p=236661#p236661) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/devlog-together.html#2023-12-17T18:33:32.985Z)

One nice reusable abstraction my LÖVE apps have all converged on is an immediate-mode button primitive. I draw all my buttons each frame along with all the callbacks they need, and a couple of framework-y lines of code in the mouse-press callback is all it takes to get them working. Last night I realized (while poking inside [Re: Conway's game of life](https://love2d.org/forums/viewtopic.php?p=236661&sid=2693d6bb97fdec2945964df8ab60a34a#p236661)) that my hacky sliders in Lua Carousel's settings admit a similar abstraction (even better than the one there). The only additional complexity is it needs a couple more lines in the  `update`  callback that continually refresh the backing value as you drag the slider.

💬 [Jimmy Miller](https://jimmyhmiller.github.io/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/devlog-together.html#2023-12-17T18:35:20.211Z)

Finally starting to see a workflow come together in my editor. Here you can see Fibonacci at three different levels in the language I'm making. These functions live in three different files. Looking at them at once and comparing them isn't easily supported in any other editor I use. On the left is a simplistic symbol browser.



I'm super excited that I'm slowly getting to the point where I can do these kinds of things. Having different views of our codebases that we can switch between is something I've been wanting for years.

![Screenshot 2023-12-17 at 1.31.15 PM.png](http://history.futureofcoding.org/history/msg_files/F06/F06ALKFHNCC.png)


# Thinking Together

💬 **Prabhanshu Gupta**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/thinking-together.html#2023-12-14T10:04:32.780Z)

I'm making a system for working with loosely structured tables in spreadsheets. Tables/lists in sheets represent collections of things, however formulas and drag-filling works at an item-level (cell-level) abstraction. This causes a lot of problems – duplicated effort, hard to do lookups across tables, errors when new data is added. However, committing to a structure upfront (a SQL style table for example) has a big cost. An effective system would allow users to gradually introduce structure that works with whatever rich table they draw.



Right now I'm onto a language for pulling data from such rich tables. It works by manipulation of the ranges (rectangles) pointed to by Labels. Queries can be made by intersecting/unioning rectangles (in picture is a small example). What ideas/projects would you recommend looking at in this space? I've looked around a fair bit for "2D grammar" and "spatial programming language" but haven't had much luck.

 ![image.png](http://history.futureofcoding.org/history/msg_files/F06/F06AHB86LQH.png)


💬 [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/thinking-together.html#2023-12-16T20:09:09.726Z)

In linguistics, we have "denotation" and "connotation" as two forms of meaning. In programming, we have denotational semantics and operational semantics. Do we have connotational semantics? (If not — may we?)


# Content

🚰 [lovely tribute to Yahoo Pipes](https://retool.com/pipes) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/linking-together.html#2023-12-15T05:35:59.718Z)

A [lovely tribute to Yahoo Pipes](https://retool.com/pipes) written by the inimitable Glenn Fleishman appeared on the Retool site today.






> Every Pipes’ mapping was public; every Pipe could be copied and modified. “That was design principle one for us, and I think that had a lot to do with making it accessible to non-developers,” Sadri said. This openness that encouraged—really, required—knowledge-sharing embodied some of the internet’s best qualities that were on the verge of being lost at that time.




📝 [The subjective experience of coding in different programming languages](https://interconnected.org/home/2023/12/05/code) via [Jimmy Miller](https://jimmyhmiller.github.io/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/linking-together.html#2023-12-16T22:28:24.365Z)


> Different programming languages feel viscerally different, right? I can’t be the only one. It’s so embodied.






> When I’m deep in multiple nested parentheses in a C-like language, even Python, I feel precarious, like I’m walking a high wire or balancing things in my hands and picking my way down steep stairs. It’s a relief to close the braces.



🐸 [CellPond: Spatial programming without escape](https://www.youtube.com/watch?v=cBYudbaqHAk&amp;t=6704s) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/linking-together.html#2023-12-17T21:00:07.917Z)

![Youtube Thumbnail](https://img.youtube.com/vi/cBYudbaqHAk/hqdefault.jpg)

As a Cellular Automata and design tools aficionado I loved this whole thing from [Lu Wilson](https://twitter.com/TodePond) .

(saw some shared essence with [Apparatus](http://aprt.us/editor/?load=doc/examples/Wheel%20Diagram.json) and Netlogo)

📝 [ln.hixie.ch/?start=1700627373&count=1](https://ln.hixie.ch/?start=1700627373&count=1) via [Andreas S](https://twitter.com/curious_reader)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/linking-together.html#2023-12-17T21:32:57.879Z)

Hello 🙋‍♂️  future of coding. 

I came across this some time ago but I still think it’s worthwhile sharing,

It showed for me how one the one hand the ethical decline of google went from “don’t be evil- to… what ever it is today that’s their guiding principle. But also more importantly how a change in company culture also reflected on technical innovation. 


# Present Company

💬 **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/12/W3/present-company.html#2023-12-15T13:03:10.625Z)

Today, is there a way to build state-driven UI components (like React/Vue/Svelte) where some of the state, but not all, can be persisted periodically in the backend perhaps as an event log which would enable things like playback of past interactions? How would you go about creating something like this with usual tools like Javascript, REST and Postgresql? 🤔


