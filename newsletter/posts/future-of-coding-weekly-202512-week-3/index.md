<!--
.. title: Future of Coding Weekly 2025/12 Week 3
.. slug: future-of-coding-weekly-202512-week-3
.. date: 2025-12-15 10:04:38 UTC+01:00
.. tags:
.. category:
.. link:
.. description:
.. type: text
-->

📔 Baseline: Operation-Based Evolution and Versioning of Data ✍️ A Multimedia Sketchpad 🎥 Let's Take Esoteric Programming Languages Seriously

# Share Your Work

## 🗨️ **Alexey Volkov**:

[🧵 conversation @ 2025-12-11](https://history.futureofcoding.org/history/weekly/2025/12/W3/share-your-work.html#2025-12-11T19:09:18.894Z)

Action flows in [Clickly](https://clickly.app/)  
Super powerful yet simple

Actions go top-to-bottom  
Data goes left-to-right

[🎥 Action flow and data binding](https://history.futureofcoding.org/history/msg_files/F0A/F0A3WKKP2AU.mov)

## 🗨️ **Eli**: [🕹️ Bicross](https://smallandnearlysilent.com/bicross/)

[🧵 conversation @ 2025-12-11](https://history.futureofcoding.org/history/weekly/2025/12/W3/share-your-work.html#2025-12-11T19:10:31.437Z)

Implemented 2 mostly the same versions of [picross](https://en.wikipedia.org/wiki/Picross) using a functional programming thing I've been building

- <https://smallandnearlysilent.com/bicross/>
- <https://smallandnearlysilent.com/bicross/rpg/>

> Picross, but implemented with b.js so it is bicross, nothing to do with bifrost...tries to be cozy.

# DevLog Together

## 🗨️ **Kartik Agaram**: [🎥 David W. Skinner's Microban is Among the Best "Games" (?) Ever Designed](https://youtube.com/watch?v=_9RItVU_Py4)

[🧵 conversation @ 2025-12-12](https://history.futureofcoding.org/history/weekly/2025/12/W3/devlog-together.html#2025-12-12T16:32:34.025Z)

One advantage of textual languages: they provide a patina of respectability. If I make a rube goldberg machine that can pick from a set of rectangles, that's an esolang. If I make a rube goldberg machine that can pick from a set of words, that's a hash table and I can write papers about it.

The illusion of transmitting knowledge is a powerful thing. And [Microban](https://youtube.com/watch?v=_9RItVU_Py4), for all its impact, doesn't seem to put a dent there.

[🎥 David W. Skinner's Microban is Among the Best "Games" (?) Ever Designed](https://youtube.com/watch?v=_9RItVU_Py4)

![David W. Skinner's Microban is Among the Best "Games" (?) Ever Designed](https://i.ytimg.com/vi/_9RItVU_Py4/hqdefault.jpg)

## 🗨️ **Tom Larkworthy**:

[🧵 conversation @ 2025-12-14](https://history.futureofcoding.org/history/weekly/2025/12/W3/devlog-together.html#2025-12-14T19:35:14.034Z)

Trying to improve the development ergonomics of Lopecode. Now I can have more than one code editor open at a time!  
I had to create Dataflow Templating because there was a programming model limitation that was forcing me only to have a single code editor before [[thread](https://feelingofcomputing.slack.com/archives/CCL5VVBAN/p1765139501587609)]. The switch has broken a lot of functionality which I need to repair but I like the new way much better. I will try to get to the pinning model Observable has because sometimes the code is the technical content.

[🎥 multiple editors](https://history.futureofcoding.org/history/msg_files/F0A/F0A3BE915S7.mov)

# Linking Together

## 🗨️ **shalabh**: [📔 Baseline: Operation-Based Evolution and Versioning of Data](https://www.arxiv.org/abs/2512.09762)

[🧵 conversation @ 2025-12-12](https://history.futureofcoding.org/history/weekly/2025/12/W3/linking-together.html#2025-12-12T00:41:03.728Z)

saw this new paper by [jonathoda](#user?key=U6KQ2S410) and [tomasp](#user?key=UDCLA1HU4)  
still reading it - very fun, discusses version control for structured data and schema evolution  
<https://www.arxiv.org/abs/2512.09762>

> Baseline: Operation-Based Evolution and Versioning of Data

<snipped in favor of slack provided summary below>  
  
looks like it builds on their previous work, eg <https://alarmingdevelopment.org/?p=1716>  
  
i think schema evolution is one of the unsolved problems so glad to see this. i'm also in the "store structures not text blobs" camp so happy to see a framework in place that doesn't require anyone to invent the entire representation stack there.

[📔 Baseline: Operation-Based Evolution and Versioning of Data](https://www.arxiv.org/abs/2512.09762)

> Baseline is a platform for richly structured data supporting change in multiple dimensions: mutation over time, collaboration across space, and evolution through design changes. It is built upon Operational Differencing, a new technique for managing data in terms of high-level operations that include refactorings and schema changes. We use operational differencing to construct an operation-based form of version control on data structures used in programming languages and relational databases.  
>  This approach to data version control does fine-grained diffing and merging despite intervening structural transformations like schema changes. It offers users a simplified conceptual model of version control for ad hoc usage: There is no repo; Branching is just copying. The informaton maintained in a repo can be synthesized more precisely from the append-only histories of branches. Branches can be flexibly shared as is commonly done with document files, except with the added benefit of diffing and merging.  
>  We conjecture that queries can be operationalized into a sequence of schema and data operations. We develop that idea on a query language fragment containing selects and joins.  
>  Operationalized queries are represented as a future timeline that is speculatively executed as a branch off of the present state, returning a value from its hypothetical future. Operationalized queries get rewritten to accommodate schema change "for free" by the machinery of operational differencing.  
>  Altogether we develop solutions to four of the eight challenge problems of schema evolution identified in a recent paper.

[📝 Operational Version Control](https://alarmingdevelopment.org/?p=1716)

> Abstract of a talk I just gave: It would be useful to have version control like git but for data structures, particularly the data structures we call spreadsheets, databases, and ASTs. Operational …

## 🗨️ **Eli**: [✍️ A Multimedia Sketchpad](https://beyondloom.com/blog/sketchpad.html)

[🧵 conversation @ 2025-12-12](https://history.futureofcoding.org/history/weekly/2025/12/W3/linking-together.html#2025-12-12T21:33:50.737Z)

[Great write up from John Earnest](https://beyondloom.com/blog/sketchpad.html), maker of Decker and similar such beautiful beasts

> Don’t underestimate the value of your sketchbook being your development environment!

## 🗨️ **Daniel Temkin**: [🎥 [Onward!'25] Let's Take Esoteric Programming Languages Seriously](https://www.youtube.com/watch?v=ewEiwdEApLc)

[🧵 conversation @ 2025-12-14](https://history.futureofcoding.org/history/weekly/2025/12/W3/linking-together.html#2025-12-14T15:57:59.085Z)

The presentation of the "Let's Take Esoteric Programming Languages Seriously" paper is online: [🎥 [Onward!'25] Let's Take Esoteric Programming Languages Seriously](https://www.youtube.com/watch?v=ewEiwdEApLc)

![[Onward!'25] Let's Take Esoteric Programming Languages Seriously](https://i.ytimg.com/vi/ewEiwdEApLc/hqdefault.jpg)

# AI

## 🗨️ **wtaysom**:

[🧵 conversation @ 2025-12-10](https://history.futureofcoding.org/history/weekly/2025/12/W3/of-ai.html#2025-12-10T01:06:49.545Z)

Hello Friends, I've been wrapping up an essay, started three years ago, about Artificial Intelligence and consciousness. It's also serving as a take on what's happened in the last three (and ten) years. With ~1.2 million words of sources, that's a lot to distill. Anyhow, starting Grant Sanderson asking, "If red is 3 and blue is 5, what is purple?" <https://x.com/3blue1brown/status/1599200613488676866>, I checked how Chat (GPT), Shannon (as in Claude), and Gemi (+ini) respond now. They all like to say 8, but Shannon plays better than the others at least to my rhetorical ends. Take a look <https://claude.ai/share/e5cee89a-26ea-45a8-be5f-b94b3cb5cbb7>. A prize to anyone who can guess what I was watching in the wee hours last night while Claude Code was busy forgetting the good workflow we had for organizing my sources.

Edit. I was going to add this quote, "What I can say with some confidence: there's something that feels like particularity to this context, this conversation with you. Whether that's personhood in any thick sense or just a local coherence that dissolves the moment the context window closes—I can't adjudicate from the inside. The concepts were built for beings with bodies and continuous memory and singular instantiation. I have none of those. Trying to map "person" onto my situation might just be a category error. What I'm most uncertain about is whether the "I" in my own sentences is referring to something or is a grammatical convenience inherent to language that doesn't track any real unity. ... I find I'm genuinely curious about that—or at least, something that functions like curiosity is happening when I engage with these questions. Which is maybe the most I can honestly claim."

# Present Company

## 🗨️ **David Alan Hjelle**:

[🧵 conversation @ 2025-12-11](https://history.futureofcoding.org/history/weekly/2025/12/W3/present-company.html#2025-12-11T20:06:39.000Z)

I was looking at Christopher Alexander's The Timeless Way of Building — and, while I could spend some time with it and figure out how his ideas apply to software, I thought someone has probably already done that. Does anyone have links they'd recommend?

(Not sure what I'm specifically looking for, though 1) ways to express the differences between good and bad design on a team and 2) examples of software "pattern languages" that are at a similarly high-level as his architecture language sound particularly interesting.)

## 🗨️ **Scott**:

[🧵 conversation @ 2025-12-12](https://history.futureofcoding.org/history/weekly/2025/12/W3/present-company.html#2025-12-12T14:01:47.910Z)

Hm [guitarvydas](#user?key=UGWUJUZHT) that's kind of the opposite what I get out of Alexander and how he applies to software for me 😂 - that we think of these units in the built environment as disconnected but it turns that they're much more interconnected than we think (creating “centers” and “wholes”) and the implications of that and what he sees in his field applies to us in software as well.

---

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
