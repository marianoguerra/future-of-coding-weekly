<!--
.. title: Future of Coding Weekly 2024/09 Week 3
.. slug: future-of-coding-weekly-202409-week-3
.. date: 2024-09-15 23:17:41 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

 📑 Little Languages Reading Club 🐛 Debugging in the Multiverse 💡 DrawTalking: Building Interactive Worlds by Sketching and Speaking

# Two Minute Week

## 🎥 [warping text in webgl space](https://youtu.be/7JG20yprxIs) via **Leonard Pauli**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/two-minute-week.html#2024-09-11T18:35:59.352Z)

![Youtube Thumbnail](https://img.youtube.com/vi/7JG20yprxIs/hqdefault.jpg)

# Our Work

## 💻 [An editor for text that renders fractions vertically](https://git.sr.ht/~akkartik/fractions.love#readme) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/share-your-work.html#2024-09-09T07:53:01.776Z)

A minimalist project for creating arbitrary policies for drawing text to screen while remembering where you put everything so you can respond to mouse and keyboard events.



## 🎥 [Juice demo (vim++)](https://youtu.be/owuuFxDBQh4) via **Zak Miller**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/share-your-work.html#2024-09-09T14:57:37.804Z)

![Youtube Thumbnail](https://img.youtube.com/vi/owuuFxDBQh4/hqdefault.jpg)

Very early days (and not as innovative as a lot of the things I see on here), but I started working on a vscode extension that takes some ideas from semantic editing to build something sort of vimlike but that has things like functions, parameters, etc as first class ideas so you can e.g. press f to select the nearest function, press q to go to parameters, and then press a to append a new parameter at the end (which adds a comma and space, or newline and space, or whatever, and then drops you in insert mode) [Here's a little video if you're interested ](https://youtu.be/owuuFxDBQh4)

## 🧮 [HowMuchIs13BillionEuros.com](https://howmuchis13billioneuros.com) via **Declan**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/share-your-work.html#2024-09-11T21:25:47.701Z)

Hi all, I made a page to contextualize 13 billion euros (or 14): an amount owed to Ireland in an EU Apple tax case and all over the airwaves here this week. I use some pretty silly back-of-the-envelope type calculations (the same ones also repeated a lot here this week!).

These calculations aren't especially interesting, but I think I'll use this example to illustrate a close link between numbers: the type that we read and report about everyday, and their formulas/workings - because all numbers have these.

Here you can also change numbers in calculang (e.g. change that 13Bn to 14Bn) and related numbers on the page will flash with updates.



I was glad of this exercise to focus on something a little more relatable to a simple spreadsheet, but portable and structured in terms of calculations imo, unlike a spreadsheet.

And I needed to face a wee small bit about the pains of finding data, and even afterwards: "linking" to it 🤒 (i did a lot of c&p hardcode :dotted_line_face:)



The page is: [HowMuchIs13BillionEuros.com](https://howmuchis13billioneuros.com)

## 🎥 [Future of Coding Schrödinger's Wiki as a Gloodata Plugin](https://www.youtube.com/watch?v=qWlTxQAcFQQ) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/share-your-work.html#2024-09-12T10:38:49.214Z)

![Youtube Thumbnail](https://img.youtube.com/vi/qWlTxQAcFQQ/hqdefault.jpg)

My contribution to the wikijam: [Schrödinger's Wiki](https://www.youtube.com/watch?v=qWlTxQAcFQQ)



A wiki with  *all the articles*  in it, each page "collapses" into existence on the first observation/visit.



The generation process uses Slack messages, podcast transcripts and community-adjacent papers to produce articles grounded in FoC's ideas.



It also has hypermedia features to navigate and explore the references in the same application.

## 📊 [graph.cubode.com](http://graph.cubode.com) via **Rebeca Garcia**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/share-your-work.html#2024-09-12T11:16:46.586Z)

Hey guys, we built, documented, and soft-launched [graph.cubode.com](http://graph.cubode.com) using agentic AI technology.



It’s a basic micro platform that auto-generates customisable graphs from csv your data files, it then renders an embeddable web component and we’ve used echarts, which we’re very happy with.



It took us one month to build it and another month to ship it, (highlighting a potential opportunity in AI deployment infrastructure). We’re rolling out new features weekly like a filtering settings, improvements in the AI Engine or pulling data from Notion DBs directly,  we’re gathering user feedback to refine the UX and functionalities if you use it and like it/dislike it let me know!



Or if anyone is interested in the Medium articles look for Cubode and they’re all there with step by step guides on AI architecting.

🎥 [Cubode Product Demo](http://history.futureofcoding.org/history/msg_files/F07/F07LXT0J09L.mp4)


# Devlog Together

## 📝 [Peeking Behind the Curtain](https://programmingsimplicity.substack.com/p/peeking-behind-the-curtain?r=1egdky) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/devlog-together.html#2024-09-13T09:42:00.470Z)

a one-liner reply to someone turned into something with more lines than 1 ...



My biggest interest is in thinking about  _programming_  instead of  _coding_ .



Make reprogrammable electronic machines do something using whatever means possible.



ATM, I'm using [draw.io](http://draw.io)[1] to draw programs, then t2t to compile [draw.io](http://draw.io)'s XML (graphML[2]) to code (say Python), then run.



Articles on my desktop, awaiting attention (coded and running and in github, but need more expansive docs and/or people with more energy) ...

## 💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/devlog-together.html#2024-09-14T15:33:56.892Z)

I've got a REPL loaded up with all of FoC archives.



Just Lua, not something powerful like Common Lisp or Smalltalk. Still quite nice.

# Thinking Together

## 🗭 [My reaction to something mentioned in the latest FoC podcast ](https://futureofcoding.org/episodes/073) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/thinking-together.html#2024-09-10T14:42:54.057Z)

FWIW, my reaction to something mentioned in the latest FoC podcast ([futureofcoding.org/episodes/073](https://futureofcoding.org/episodes/073)):



Computer Science isn’t about  _programming_ . Computer Science is about mapping computational thinking into the digital domain and discovering problems in an ad-hoc manner, then fixing the problems to make the mapping work on reprogrammable electronic machines.

## 💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/thinking-together.html#2024-09-12T00:50:08.402Z)

When I started my law firm, I thought everything I knew about a client matter needed to be in "the file". I wasted a lot of time moving things that were perfectly fine where they were. I realized that "the file" was a naive metaphor I took from law firms pre-cloud. That changed my outlook about data models. I don't want my digital model of things to mimic the real world artifacts involved, and spend a lot of time trying to explain to my colleagues that just because a person files a motion by delivering a real or digital pile of pages with real or digital ink on them doesn't mean that the document and the motion are the same thing. A motion doesn't have a page orientation, and a document isn't potentially vexatious. But when I argue that we should be modeling the domain, not only the artifacts, my colleagues — who are all also former lawyers — don't seem to disagree so much as act as though I'm speaking heavenly script. Does anyone have any tips for persuading people who haven't been converted to the wisdom of domain modeling that maybe our systems should deal with the things we care about, and not only the things we can download or touch?

## 📱 [Huawei's triple foldable display phone](https://www.youtube.com/watch?v=qe5dJCRWifo) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/thinking-together.html#2024-09-12T08:35:28.675Z)

![Youtube Thumbnail](https://img.youtube.com/vi/qe5dJCRWifo/hqdefault.jpg)

Could [Huawei's triple foldable display phone](https://www.youtube.com/watch?v=qe5dJCRWifo) combined with software like [Samsung Dex](https://www.samsung.com/us/apps/dex/) liberate portable devices from being consumption-oriented devices? 🤔



Apple has kept a strong hold on keeping ipadOS from threatening macOS. But the Android ecosystem does not have that limitation (see [Waydroid](https://waydro.id/) or [BlissOS](https://blissos.org/) or [PostmarketOS](https://postmarketos.org/) for example)



Projecting in the future, we might even get briefcase size displays/machines that unfold into a full tabletop-style communal computing interface.

## 🍰 [The main ideas behind Hest are...](https://mastodon.social/@spiralganglion/113139647325964835) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/thinking-together.html#2024-09-15T04:26:42.150Z)

[Reposting ;)](https://mastodon.social/@spiralganglion/113139647325964835)



Periodic self-reminder.



The main ideas behind Hest are:






* Nobody’s made a good computer code out of things moving through space.
* Moving through space is also about moving through time. Rewind is table stakes.
* If moving through space is meaningful, then space itself is part of that meaning. Position, distance, velocity — they mean something.
* You can do things with this meaningful space-time visual code that you simply can't do in a non-moving visual code.

## 🤔 Are there languages that emphasize the single-datum <=> collection-of-data duality? by **Beni Cherniavsky-Paskin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/thinking-together.html#2024-09-15T14:01:53.644Z)

Are there languages that emphasize the single-datum <=> collection-of-data duality?  E.g. making loop-with- `if`  <=>  `filter` -on-the-whole look very similar?



But that's just a programming curiousity; I'm more interested if there are any mind bicycles that help one think about local vs. global rules?

Physics is rich with examples where seeing both perspectives is insightful:




* local  _F = ma_  <=> conservation of  _potential energy_  independent of specific path (for certain forces)
* Gauss's laws relating single-point "differential" <=> volume/surface "integral" [formulations of Maxwell equations](https://en.wikipedia.org/wiki/Maxwell%27s_equations#Formulation_with_Gaussian_quantities)
* [Noether's theorem](https://en.wikipedia.org/wiki/Noether%27s_theorem) is certainly up there, relating shapes of laws with conserved stuff, but I'll admit over my head...



Example task: For a while now I've dreamed of making a model of weather that's simple enough for paper+pen+tokens, or generally something "board game-ish".  Lies-to-children are fine, but would like it to demonstrate at least basic mechanics: (A) wind caused by hotter air rising and leaving a vacuum; (B) evaporation over sea => rain over land (C) "[rain shadow](https://en.wikipedia.org/wiki/Rain_shadow)" beyond a mountain (my country has this).

It's not easy to discretize continuous-quantity equations into something like a cellular automaton...  I'm leaning towards representing conserved quantities like water with tokens you can move, rather than per-cell state.

And I don't want some huge "simulation"—I'd love to find rules that can demonstrate these processes in few enough steps to follow by hand.

Hmm say I have air that wants to go up + right, and it holds just 1 water token—which way do I move it?  Well I suppose I want a bit larger numbers so quantization won't matter that much...  And I probably want alternating horizontal vs. vertical game phases (also dealing with 1D slice at a time can reduce previous-vs-next-state confusions).

Any advice for tools to help think about rules/mechanics and what can emerge from them,  _beyond_  "try and see what what happens"?

(But I guess I really should play with large "sand" style models, then try to scale down! try-and-see  _is_  more powerful than merely keeping in my head.)

# Content

## 📑 [Little Languages - Reading Club](https://github.com/Little-Languages/reading-club/tree/main/topics) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/linking-together.html#2024-09-09T09:30:39.142Z)

[Little Languages - Reading Club](https://github.com/Little-Languages/reading-club/tree/main/topics) a list of reading resources around programming languages organized by topic

## 💡 [DrawTalking: Building Interactive Worlds by Sketching and Speaking](https://ktrosenberg.github.io/drawtalking/DrawTalking.pdf) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/linking-together.html#2024-09-10T10:36:26.450Z)

Don't know if this already got linked here but... very cool paper about creating interactive scenes by drawing and talking

## 🐛 [Debugging in the Multiverse](https://antithesis.com/blog/multiverse_debugging/) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/linking-together.html#2024-09-10T15:19:03.835Z)


>  Antithesis simulates a purely deterministic universe. The reasons we do that are to find bugs faster, and to make them perfectly reproducible once found.


## 🤔 [Containers](https://xkcd.com/1988/) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/linking-together.html#2024-09-12T16:36:38.568Z)

[This XKCD](https://xkcd.com/1988/) still hits with the force of revelation 5 years later.

## 🧦🎥 [Hypercard in the World, May 2016](https://youtu.be/uI7J3II59lc) via [Daniel Garcia](https://pel-daniel.github.io/cv/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/linking-together.html#2024-09-13T02:08:29.411Z)

![Youtube Thumbnail](https://img.youtube.com/vi/uI7J3II59lc/hqdefault.jpg)

[HyperCard in the world](https://youtu.be/uI7J3II59lc). A laser-powered live-programming environment for the real world.

## 📝 [a turnkey solution for making inline canvases as a Jupyter extension](https://github.com/ianarawjo/notate-jupyter) via **Jasmine Otto**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W3/linking-together.html#2024-09-13T22:37:09.703Z)

There might be [a turnkey solution for making inline canvases as a Jupyter extension](https://github.com/ianarawjo/notate-jupyter). Good luck identifying logical objects, but there must be some advantages over drag-and-drop. I'd use this for my current prototype but that my target domain's existing DSL is not (yet) graphical. For any other paper tool, diagram, nonlinear algebraic notation, what have you, there is a lot of potential.


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
