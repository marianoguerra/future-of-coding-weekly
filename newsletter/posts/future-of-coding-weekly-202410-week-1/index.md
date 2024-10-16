<!--
.. title: Future of Coding Weekly 2024/10 Week 1
.. slug: future-of-coding-weekly-202410-week-1
.. date: 2024-10-07 09:59:00 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎥 Boxer demo ✍ Exploration of Drawing as Programming Language 🧦 We have Dynamicland at home

# Two Minute Week

## 🎥 [k means clustering algorithm implemented in code flow canvas](https://youtu.be/2OIE6HoVOfo) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/two-minute-week.html#2024-10-04T13:08:51.559Z)

![Youtube Thumbnail](https://img.youtube.com/vi/2OIE6HoVOfo/hqdefault.jpg)

Here's a new [video](https://youtu.be/2OIE6HoVOfo) where I show the k-means clustering algorithm build in code flow canvas using some escape hatches. You can try it yourself on [demo.codeflowcanvas.io](http://demo.codeflowcanvas.io) (it's available in the examples)


## 💬 client-side RAG and ticky UI holder for Observable by [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/two-minute-week.html#2024-10-06T20:47:36.831Z)

I got excited about a client-side RAG thing working this week, but the most videoable thing I also got working was a sticky UI holder for Observable, which will be useful for hanging notebook extension upon.

🎥 [sticky view](http://history.futureofcoding.org/history/msg_files/F07/F07QPFZHQ9J.mov)



# Our Work

## 🎥 [The Coronavirus dashboard on Kendraio App](https://youtu.be/OD_SN99Sy8Q) via **Daniel Harris**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/share-your-work.html#2024-09-30T12:53:31.071Z)

![Youtube Thumbnail](https://img.youtube.com/vi/OD_SN99Sy8Q/hqdefault.jpg)

Hi everyone! I just made [💬 #introduce-yourself@2024-09-30](https://history.futureofcoding.org/?fromDate=2024-09-27&toDate=2024-10-03&channel=introduce-yourself&filter=#2024-09-30T12:53:21.324Z) and promised a glimpse of our work. We (the [Kendraio](https://www.kendra.io) [team](https://www.linkedin.com/posts/kendraio_kendraio-kendraioapp-interoperability-activity-7199366975783858177-3vKL)) are currently experimenting with no-code, local-first and malleable-software isms.



We want to create a local environment where it is really easy for end-users and non-developers to build workflows and manage their own data, whilst also being able to plug into the services (apps and websites) that they currently use and build their own user-interfaces for those services. It's a big dream and we've started small.



A few years ago during the pandemic we built a [dashboard for COVID-19 data](https://app.kendra.io/kendraio/coronavirus). Our Flow plugged into various APIs and then visualised the received data on one page – so a good demonstration of one aspect of our dream. The dashboard still exists but shows historical data. We wrote an [article](https://medium.com/kendraio/covid-19-kendraio-creates-coronavirus-dashboard-within-kendraio-app-a0185e526b25) about the dashboard which also has an accompanying [video](https://youtu.be/OD_SN99Sy8Q) explaining how it works and how you can edit the Flow while it's running.



Enjoy! Look forward to any comments or questions. Cheers!

## 📝 [How we built mietencheck.de](https://watwa.re/mietencheck) via **Gregor**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/share-your-work.html#2024-09-30T22:10:38.525Z)

Come for the rent price rant, stay for the i-cant-believe-its-no-code editor


## 📑 [SPLASH](https://2024.splashcon.org/) via **Thomas van Binsbergen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/share-your-work.html#2024-10-06T08:13:38.739Z)

My students and I have worked on three papers (two prototypes) that will be presented at [SPLASH](https://2024.splashcon.org/) at end of October




* Christopher Esterhuyse -- [Cooperative Specification via Composition Control ](https://ltvanbinsbergen.nl/files/papers/sle2024.pdf)(SLE2024)


* This paper investigates control mechanisms in declarative languages that can be used by a programmer to have guarantees about the written program even when it is extended by other programmers. The work is motivated by distributed systems governed by policies in which the actors that provide the policies may have been competing interests. Concretely, think about (data sharing) contracts that are embedded in a federated cloud infrastructure.


* Damian Frölich -- [On the Soundness of Auto-completion Services for Dynamically Typed Languages ](https://ltvanbinsbergen.nl/files/papers/gpce2024.pdf)(GPCE2024)


* This paper investigates the use of "abstract interpretation" to give sound auto-complete suggestions for dynamic languages and demonstrates the technique on a subset of Python. Here "sound" means: if you select a given candidate, the inserted code will not contain variables that turns out to be undefined when the code runs. 


* Max Boksem -- [Bridging Incremental Programming and Complex Software Development Environments ](https://ltvanbinsbergen.nl/files/papers/paint2024.pdf)(PAINT2024)


* This paper demos a prototype that we built to investigate a modular graph structure for representing and running source code. The tool allows you to create different projections out of the code such as code structure, documentation view, and execution history. The tool supports incremental and exploratory programming and "nested graphs" (importing a graph as a node) for hierarchical views, although this is a more recent add-on. 



# Devlog Together

## 📝 [My notebook](https://git.sr.ht/~akkartik/notebook.love) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/devlog-together.html#2024-10-01T04:46:52.831Z)

[My notebook](https://git.sr.ht/~akkartik/notebook.love) now synchronizes the results of computation into named blanks in prose.

🎥 [notebook eval](http://history.futureofcoding.org/history/msg_files/F07/F07Q5K5CZRP.webm)


## 💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/devlog-together.html#2024-10-02T16:30:19.582Z)

This debug UI has been surprisingly handy over the last few days. I'm able to visualize a parse tree even after it's been flattened, just using color transparency. All I'm doing is painting all the rects that contain the mouse cursor. Since the color is transparent, it doesn't matter what order they're in. (The larger rects actually come later; they're fall-backs if a more fine-grained rect isn't found.)

🎥 [notebook debug](http://history.futureofcoding.org/history/msg_files/F07/F07Q30NJ0JE.webm)

## 📝 [A plain-text notebook with tabsl](https://akkartik.name/tabs.html) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/devlog-together.html#2024-10-06T15:01:36.991Z)

🎥 [Notebook tabs](http://history.futureofcoding.org/history/msg_files/F07/F07QDV3BMCN.webm)


# Reading Together

## 📝 [Eudability: A New Construct at the Intersection of End-User Development and Computational Literacy](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4129683) via **Jasmine Otto**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/reading-together.html#2024-09-30T20:05:33.453Z)

through the visualization literacy working group, an extensive discussion of end-user development models & overlap with computational thinking. the two design axes alone are worth the price of admission::




* component-based / rule-based / programming-by-demonstration
* direct manipulation / conversational interface


# Thinking Together

## 🪵 [pinokio](https://pinokio.computer/) via [Andreas S](https://twitter.com/curious_reader)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/thinking-together.html#2024-09-30T11:13:09.803Z)

Hey 👋  I was recently searching again how "usable"  "AI" became. So I stumbled on this tool: [pinokio](https://pinokio.computer/) . Its all just JSON. Before just evalutating the tool I might describe the criteria I would be interested in. Broadly speaking I would like to have tool similar to what we see in this clip: [youtube.com/watch?v=HGYFEI6uLy0](https://www.youtube.com/watch?v=HGYFEI6uLy0)

Consider The following more specific scenario:

I have a PKM Zettelkasten and I have some friends. Now my workflow is to write and then to publish. I want to provide for them a Voice assistant that can summarize contents based on various parameters: By time e.g. topics of last 3 months, last week. But I also want to provide overviews on specific topics as well as interesting interconnections.

Do you know of any tools that could help with creating such use cases?


## 💬 **Tomas Petricek**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/thinking-together.html#2024-10-01T23:59:57.316Z)

This is a very random thought - but something that I've been occasionally wondering for some time now. If we have lambda calculus as a model of functional languages and Turing machines as a model of imperative languages, what would be a good model for programming systems that have "document" as the basic underlying structure (Subtext is an example of this) - i.e., you have some tree structure and the program evaluates by modifying this document - appending new things or rewriting evaluated bits. (Lambda calculus itself is basically a tree, but what if this also allows imperative document edits?)



Could this be something like a "Turing machine" that works on trees rather than tapes? There would be "current location" which can move in various ways around the tree and modify it. If your document has references (perhaps you can have  `../../foo`  to refer to  `foo`  of a parent of a parent), the machine would have to somehow walk up the tree, remembering that it wants to copy a value back to the original location - and then walk over the tree back to put the value in place of the reference).



Is this something completely silly or something that lots of people have already done but under different names?



## 💬 **Rafi Khan**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/thinking-together.html#2024-10-03T00:52:53.338Z)

Would anyone be interested in a browser based smalltalk environment that tries to simplify the task of building software?

# Content

## 🎥 [Boxer demo by Michael Ballantyne](https://www.youtube.com/watch?v=MJlBGZ-kpg0) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/linking-together.html#2024-10-03T01:22:52.802Z)

![Youtube Thumbnail](https://img.youtube.com/vi/MJlBGZ-kpg0/hqdefault.jpg)

[A rare and precious video walking us through Boxer.](https://www.youtube.com/watch?v=MJlBGZ-kpg0)

## 🧦 [A little wheel invention jam making a realtalk like environment. ](https://forkingpaths.dev/posts/24-10-02/wheel_reinvention_jam_writeup.html) via [Jimmy Miller](https://jimmyhmiller.github.io/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/linking-together.html#2024-10-03T01:44:11.676Z)

[A little wheel invention jam making a realtalk like environment. ](https://forkingpaths.dev/posts/24-10-02/wheel_reinvention_jam_writeup.html)Super neat project. Love some of the implementation questions at the end as well. 


## 🧦 [Bret Victor's Worst Nightmare](https://handmade.network/p/590/bret-victor-s-worst-nightmare/) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/linking-together.html#2024-10-03T01:58:29.718Z)

Oh wow, so there were two Dynamicland homages in the jam! I was following **@Ben Visness**'s project.

## ✍ [λ-2D: An Exploration of Drawing as Programming Language, Featuring Ideas from Lambda Calculus – MIT Media Lab](https://www.media.mit.edu/projects/2d-an-exploration-of-drawing-as-programming-language-featuring-ideas-from-lambda-calculus/overview/) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/linking-together.html#2024-10-03T16:53:33.801Z)

An Exploration of Drawing as Programming Language, Featuring Ideas from Lambda Calculus




## 🐦 [Maxence Faldor (@maxencefaldor) on X](https://x.com/maxencefaldor/status/1842211478796918945) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/linking-together.html#2024-10-05T09:43:35.819Z)

[CAX: Cellular Automata Accelerated in JAX, a high-performance and  flexible library designed to accelerate cellular automata research. ](https://x.com/maxencefaldor/status/1842211478796918945) 

> 🐦 [Maxence Faldor (@maxencefaldor) on X](https://x.com/maxencefaldor/status/1842211478796918945): Interested in emergence, self-organization or morphogenesis?
> 
> Introducing CAX: Cellular Automata Accelerated in JAX, a high-performance and flexible library designed to accelerate cellular automata research. 🦎
> 
> 📄: [CAX: Cellular Automata Accelerated in JAX](https://arxiv.org/abs/2410.02651)
> 🌟: https://github.com/maxencefaldor/cax
> 🧵1/12
> 
> ![Tweet Thumbnail](https://pbs.twimg.com/media/GZDHN7JWMAAhTZO.jpg:large)


# Music

## 🎹 [trane is a music playground](https://lisp.trane.studio/?tutor) via **Greg Ash**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/of-music.html#2024-10-02T20:59:13.273Z)

A few people were asking for a link at the London meetup earlier, so posting here:



[lisp.trane.studio/?tutor](https://lisp.trane.studio/?tutor)



Code/docs [here](https://github.com/gwegash/trane)

# 🤖

## 💬 **William Taysom**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/of-ai.html#2024-10-03T04:05:32.704Z)

Fiddling with OpenAI o1-preview, I didn't know it cannot run Python to draw charts.  Still it tried its darndest using ASCII art... Not bad except when you compare with the data it's trying to chart.

![not-quite-right.png](http://history.futureofcoding.org/history/msg_files/F07/F07QUJSFHH6.png)

![raw-data.png](http://history.futureofcoding.org/history/msg_files/F07/F07Q2V14WLV.png)



# Present Company

## 🎥 [Back to Basics with Technology - Future of Coding Meetup - London, 2nd Oct 2024](https://youtu.be/Q-rvkIQ0lu8?si=YyzrHUJZnVxbKNo2) via [Tak Tran](https://twitter.com/zlog)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W1/present-company.html#2024-10-06T22:33:54.574Z)

![Youtube Thumbnail](https://img.youtube.com/vi/Q-rvkIQ0lu8/hqdefault.jpg)

This is the talk I gave at the last Future of Coding London Meetup - Back to Basics with Technology. It goes through some of my recent explorations in electronics, crochet and light + a bunch of ideas I’ve been mulling over: [Back to Basics with Technology](https://youtu.be/Q-rvkIQ0lu8?si=YyzrHUJZnVxbKNo2)



Also in blog form: [forestinthetree.com/blog/back-to-basics](https://www.forestinthetree.com/blog/back-to-basics)


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
