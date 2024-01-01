<!--
.. title: Future of Coding Weekly 2024/01 Week 1
.. slug: future-of-coding-weekly-202401-week-1
.. date: 2024-01-01 22:44:40 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎙️ FoC: Mary Shaw • Myths & Mythconceptions 🥕 Elliot Evans 2023 projects 📑 Malleable Systems Collective 2023 Digest

# Our Work

🐸 [World’s first full-stack tadi website](https://www.todepond.com/wikiblogarden/tadi-web/fame/facts/) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W1/share-your-work.html#2023-12-26T22:04:10.556Z)

I wrote an overly in-depth [write-up](https://www.todepond.com/wikiblogarden/tadi-web/fame/facts/) of how I built a dashboard.



It was the first time I've tried to build something a bit more ambitious using the new "[tadi web](https://todepond.com/wikiblogarden/tadi-web)" principles that got [💬 #devlog-together@2023-12-20](./?fromDate=2023-12-17&toDate=2023-12-23&channel=devlog-together&filter=#2023-12-20T16:10:34.360Z) a few days ago.

📝 [Being Stuck in Someone Else’s Theory](https://jimmyhmiller.github.io/stuck) via [Jimmy Miller](https://jimmyhmiller.github.io/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W1/share-your-work.html#2023-12-27T17:48:05.130Z)

The perhaps most melodramatic thing I've ever written about software. Sat in my to publish folder for a while. But I realized I am just a bit melodramatic, no one will care :)






> Theory creation, world-building, and crafting software are all one in the same activity. Removing any of these elements eliminates the very value you hired software engineers to provide. But it does more than that. It forces these software engineers to make a difficult choice: fight to create the world they believe in, or give up and live in a world they are no longer invested in.

🎙️ [Future of Coding • Episode 69 • Mary Shaw • Myths & Mythconceptions](https://futureofcoding.org/episodes/069) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W1/share-your-work.html#2023-12-29T00:12:30.611Z)



𒂶 [futureofcoding.org/episodes/069](https://futureofcoding.org/episodes/069)



In the spirit of clearly communicating what you're signing up for, this podcast episode is nearly three hours long, and among other things it contains a discussion of a paper by author Mary Shaw titled [Myths & Mythconceptions](https://dl.acm.org/doi/pdf/10.1145/3480947) which takes as an organizing principle a collection of myths that are widely believed by programmers, largely unacknowledged, which shape our views on the nature of programming  _as an activity_  and the needs of programmers  _as people_  and the sort of work that we do  _as a sort of work_ , and where by acknowledging these myths the three of us (Mary Shaw primarily, and by extension Jimmy and I, those three people, that's it, no other people appear on this podcast) are able to more vividly grip the image of programming with our mind's eye (or [somesuch](https://aphantasia.com)) and conceive of a different formulation for programming, and in addition to these myths this paper also incudes a number of excellent lists that I take great pleasure in reading, beyond which I should also note that the paper does a job of explaining itself and that hopefully you'll find I've done a similar job, that's the spirit, please enjoy.

# Devlog Together

🎠 [Building an equation plotter](https://akkartik.itch.io/carousel/devlog/656473/building-an-equation-plotter) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W1/devlog-together.html#2023-12-27T03:55:01.958Z)

Combining charting with the pinch-zoom gesture

I've written a couple of programs now that have felt too large for this particular devlog, which I've been trying to limit to a size I can comfortably edit on a phone, around 200 lines or so.. 🤔

🎥 [carousel plot](http://history.futureofcoding.org/history/msg_files/F06/F06BKR73UKF.webm)


🎥 [Quicksort with visualization and decorators build using my own visual programming system](https://youtu.be/YtDvPAfJ8jE) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W1/devlog-together.html#2023-12-30T12:16:54.561Z)

![Youtube Thumbnail](https://img.youtube.com/vi/YtDvPAfJ8jE/hqdefault.jpg)



In [this video](https://youtu.be/YtDvPAfJ8jE) I show an implementation of the quicksort algorithm using my visual programming system and not only that, but also the different steps of the output of the algorithm are visualized using a node tree. 

One thing I noticed when making these kinds of algorithm flows, that they tend to grow horizontally quickly. So, to help prevent that, I've introduced the concept of "decorators" (they are in the "stacked" nodes). Decorators can be added before or after node-types that support this. 



Now at least flows can also grow vertically a bit more. In the future I also want to be able to combine multiple nodes in a component or grouped node. 



There are currently only 2 decorator types: expressions and sending data to the node-tree. Editing is not yet possible via the editor itself but only directly in the underlying json data of a flow. Also I needed to improve the way scoped variables work with regard to recursive functions, the same for the "merge"-node-type. Each node receives a scopeId depending on the scope within it is executed (every call to a function creates a new scope, this scopeId is passed to the function-node which passes it through to its connected nodes and so on).

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W1/devlog-together.html#2023-12-30T21:31:34.149Z)



![Screenshot_20231230-051117.jpg](http://history.futureofcoding.org/history/msg_files/F06/F06C2A9TATE.jpg)


💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W1/devlog-together.html#2023-12-31T08:44:17.572Z)

Thought about a new architecture for my tool that would make it play better with LLMs, so as to get more help with generating code. Built an MVP version of it over the last week, or so, with just text-based code, and it works well enough that I'm going to have to re-implement my visual language in the new architecture.

# Thinking Together

💡 [I think programming, software engineering, and computer science are three different things](https://futureofcoding.slack.com/archives/CCL5VVBAN/p1703859436830029?thread_ts=1703808750.611779&channel=CCL5VVBAN&message_ts=1703859436.830029) via [Stefan Lesser](https://twitter.com/stefanlesser)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W1/thinking-together.html#2023-12-30T13:04:55.921Z)

Can we make this a top-level discussion please? 

> [December 29th, 2023 6:17 AM] jack529: A mythconception that chaps my bottom: I think programming, software engineering, and computer science are three different things, but people insist on using the terms interchangeably. :disappointed:

I’m not so much interested in what the “correct” way of distinguishing those three is, more in how people distinguish them, in their idiosyncratic ways. 

So what do you think makes  ~_*programming*_~  different from  ~_*software engineering*_~  different from  ~_*computer science*_~ ?

# Content

🥕 [Elliot Evans 2023 projects](https://vezwork.github.io/polylab/dist/demo/2023/projects.html) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W1/linking-together.html#2023-12-27T09:11:37.278Z)


* [Polytope](https://elliot.website/editor/) is a [rich and composable](https://arxiv.org/abs/2303.06777) experimental code editor that combines text and visual coding; structured and unstructured (I call this mixture "ummm-structured") representations of code; and symbolic and direct manipulation of code.
* Caretope: I began working on adapting text editor caret navigation to visual editors in 2022 as a part of Polytope. I slowly realized that caret navigation is a rich topic in and of itself so I seperated it into its own project: Caretope!
* Made a small experimental bidirectional programming language
* Made [bidirectional parser combinators](https://elk.zone/mathstodon.xyz/@vez/110476698542079972) which were used for the bidirectional programming language
* Ended the year working on a [bidirectional+recursion library](https://vezwork.github.io/polylab/dist/demo/drawTests/category/note.html).
* I'm currently using it to make some [interactive recursive visuals. ](https://vezwork.github.io/polylab/dist/demo/drawTests/category/) It is inspired by [Lu Wilson's ScreenPond](https://screenpond.cool/) and [Toby Schachman's Recursive Drawing.](http://recursivedrawing.com/) Talking with Lu, Ivan, Sharon, Josh, and Marcel has helped me think about this project quite a bit.
* Nudging is about exploring a large space of values by making local movements through that space. Constraints limit large spaces to smaller ones, and change how those spaces are navigated.


* [This year I made a bidirectional nudging with constraints demo](https://codepen.io/vez/pen/dyggGNm).
* [I also made an equation plotter.](https://observablehq.com/d/ce4fba3a2e6706d4) This plotter will be used to visualize constraints. It will also add visualization to complement direct manipulation of constraints and values.




📑 [Malleable Systems Collective 2023 Digest](https://malleable.systems/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W1/linking-together.html#2023-12-27T09:14:50.031Z)

* [Collaborative work on malleable software](https://forum.malleable.systems/t/collaborative-work-on-malleable-software/109)
* [A World Without Apps](https://forum.malleable.systems/t/a-world-without-apps/38)
* [Joyful Creation](https://forum.malleable.systems/t/joyful-creation/103)
* [Window management](https://forum.malleable.systems/t/window-management/43)
* [Smooth Gradients of Composability, or Old Man Yells At Compilers](https://forum.malleable.systems/t/smooth-gradients-of-composability-or-old-man-yells-at-compilers/115)
* [Freewheeling apps](https://forum.malleable.systems/t/freewheeling-apps/52)
* [understandability => malleability](https://forum.malleable.systems/t/understandability-malleability/127)
* [Tangible Functional Programming](https://forum.malleable.systems/t/tangible-functional-programming/92)
* [SUSN: Simple Uniform Semantic Notation](https://forum.malleable.systems/t/susn-simple-uniform-semantic-notation/112)
* [An interesting quote about the origin of MVC and event handling](https://forum.malleable.systems/t/an-interesting-quote-about-the-origin-of-mvc-and-event-handling/133)
* [Tiddlywiki](https://forum.malleable.systems/t/tiddlywiki/65)
* [Thoughts on WebAssembly / Component Model / WASI?](https://forum.malleable.systems/t/thoughts-on-webassembly-component-model-wasi/104)
* [Empowering users by inverting three key relationships](https://forum.malleable.systems/t/empowering-users-by-inverting-three-key-relationships/64)
* [What Lies in the Path of the Revolution](https://forum.malleable.systems/t/what-lies-in-the-path-of-the-revolution/23)
* [Götz Bachmann’s Ethnographic Research on Dynamicland](https://forum.malleable.systems/t/gotz-bachmann-s-ethnographic-research-on-dynamicland/116)
* [Fengari](https://forum.malleable.systems/t/fengari/62)
* [Beyond Web 2.0 and the Browser?](https://forum.malleable.systems/t/beyond-web-2-0-and-the-browser/111)
* [UXN and Varvara](https://forum.malleable.systems/t/uxn-and-varvara/107)
* [Mu: designing a safe computing stack from the ground up](https://forum.malleable.systems/t/mu-designing-a-safe-computing-stack-from-the-ground-up/51)
* [The future of software, the end of apps, and why UX designers should care about type theory](https://forum.malleable.systems/t/the-future-of-software-the-end-of-apps-and-why-ux-designers-should-care-about-type-theory/40)

🖨️ [A Core Calculus for Documents. Or, Lambda: The Ultimate Document](https://blog.brownplt.org/2023/12/28/document-calculus.html) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W1/linking-together.html#2023-12-29T17:40:35.704Z)

> There are no  _theoretical tools_   for reasoning about the design of a document language. Programming language theorists can use the lambda calculus to reason about the design of general-purpose programming languages. No such formal model exists for document languages.

> Our work addresses this issue by providing a  _document calculus_ , or a formal model of the _programmatic aspects_  of document languages.

