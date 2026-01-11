<!--
.. title: Future of Coding Weekly 2026/01 Week 2
.. slug: future-of-coding-weekly-202601-week-2
.. date: 2026-01-12 00:16:51 UTC+01:00
.. tags:
.. category:
.. link:
.. description:
.. type: text
-->

💡 Tailrmade - Your Visual App Builder 📢 Submit to the PX/26 workshop 📢 Substrates 2026 workshop

# Two Minute Week

## 🗨️ **Tom Larkworthy**:

[🧵 conversation @ 2026-01-11](https://history.futureofcoding.org/history/weekly/2026/01/W2/two-minute-week.html#2026-01-11T20:26:44.521Z)

My notebook AI [Robocoop](https://observablehq.com/@tomlarkworthy/robocoop-2) is able to 1-shot whole notebooks now. By importing other notebooks you can add them to the context and then it has good examples of how to achieve something. I used to use it one cell at a time but now it seems to be able to do a crazy amount now without making a mistake (GPT 5.2). I think literate notebooks are a better medium for AI because of the prose and that it can see runtime values as well as the code.

[🎥 Whole Notebook](https://history.futureofcoding.org/history/msg_files/F0A/F0A8F9AU4BT.mp4)

# Share Your Work

## 🗨️ **tomasp**:

[🧵 conversation @ 2026-01-06](https://history.futureofcoding.org/history/weekly/2026/01/W2/share-your-work.html#2026-01-06T00:27:48.582Z)

This has been a long time in the making - but my book Cultures of Programming is out (as open-access): <https://www.cambridge.org/core/books/cultures-of-programming/075A2D1DE611EE47807A683147B21691>

It looks at the history of programming as interaction between five different cultures (hacker, engineering, mathematical, managerial, humanistic) that look at programming in different ways and have different basic ideas about what programs are and how to best construct them.

One interesting observation from the book is that the humanistic culture (which includes Engelbart, Kay, Papert and many other favourite references here 🙂 ) seems to historically be the one that comes up with interesting ideas, but those are later adopted by more pragmatic engineering/managerial cultures and transformed in a way that removes what makes them unique (OO turns from medium for thinking into a controlled engineering tool). Alas, I do not have any historical lessons suggesting how to go against this trend!

## 🗨️ **Joshua Horowitz**:

[🧵 conversation @ 2026-01-08](https://history.futureofcoding.org/history/weekly/2026/01/W2/share-your-work.html#2026-01-08T05:44:25.489Z)

I put together two last-minute essays to send to [PLATEAU](https://2026.plateau-workshop.org/) back in December. I’ll share them here one-at-a-time.

The Blurry Boundaries Between Programming and Direct Use

> While a narrow conception of programming makes it possible to draw sharp lines between “programming” and “direct use”, many of the efforts of the PL + HCI community call for expanded senses of programming that blur these lines. In this paper, we explore these murky boundaries from both sides, exploring situations where programming systems are used for direct use, and situations where direct-use systems take on the characteristic powers of programming.

[HTML version here](https://joshuahhh.com/paper-plateau-2026-blurry/)  
PDF version attached below

I’d appreciate hearing any feedback, reactions, questions, etc.!

[📄 blurry.pdf](https://history.futureofcoding.org/history/msg_files/F0A/F0A79H7K011.pdf)

## 🗨️ **guitarvydas**: [📝 Jail-breaking Parser Technology](https://programmingsimplicity.substack.com/p/jail-breaking-parser-technology?r=1egdky)

[🧵 conversation @ 2026-01-09](https://history.futureofcoding.org/history/weekly/2026/01/W2/share-your-work.html#2026-01-09T10:56:40.428Z)

[📝 Jail-breaking Parser Technology](https://programmingsimplicity.substack.com/p/jail-breaking-parser-technology?r=1egdky)

## 🗨️ **Ella Hoeppner**:

[🧵 conversation @ 2026-01-10](https://history.futureofcoding.org/history/weekly/2026/01/W2/share-your-work.html#2026-01-10T05:20:28.254Z)

Here's a little demo of my visual programming project! It's a graphics programming programming environment where the code is laid out in a hierarchy of nested circles representing the nodes of the AST, rather than as text. The code the user edits is a shader that gets live recompiled and displayed on the right half of the screen. In the vid I use it to make a little parametric animation, just to show how it looks to edit a program.

Despite the unusual layout, the language being edited is very similar to a traditional shader language, and has all the abstractions and capabilities you'd expect in shader programming. But in addition to all that, there are also special "slider" expressions you can insert in the editor that allow you to manipulate values real-time just by clicking and dragging, as you can see in the video. This makes it really easy to gesturally explore parameter spaces in a way that you can't in a normal text editor. The way the code is laid out makes it very natural and intuitive to have miniature GUIs like these sliders embedded as part of the structure a program. Right now the sliders are the only example of this, but the goal eventually is to support many kinds of GUI elements, and make it extensible. You'll be able to use the editor to design little shader-based GUIs, then use instances of those GUIs as expressions in other programs.

[🎥 Screen Recording](https://history.futureofcoding.org/history/msg_files/F0A/F0A7V6Z7XD4.mov)

## 🗨️ **Declan Naughton**: [🎥 Towards Interactive and Transparent Actuarial Modelling](https://www.youtube.com/watch?v=3C1mojRzfBA)

[🧵 conversation @ 2026-01-10](https://history.futureofcoding.org/history/weekly/2026/01/W2/share-your-work.html#2026-01-10T12:48:07.938Z)

Last year I gave a presentation to the society of actuaries in Ireland about calculang  
It outlines key features about structuring models, function purity, sharing numbers with a link to calculations/workings, and applies 250 cloud workers to get to 200M numbers that are fully reproducible via such links - all navigable locally on my old PC using duckdb in an interactive dashboard. Features also an interactive and visual modelling environment.  
I hope to generalize on all of this in 2026 with more tools/platforms and that are public, and more integrations including with markup languages and LLM responses

[🎥 Towards Interactive and Transparent Actuarial Modelling](https://www.youtube.com/watch?v=3C1mojRzfBA)

![Towards Interactive and Transparent Actuarial Modelling](https://i.ytimg.com/vi/3C1mojRzfBA/hqdefault.jpg)

## 🗨️ **Jouke Waleson**:

[🧵 conversation @ 2026-01-11](https://history.futureofcoding.org/history/weekly/2026/01/W2/share-your-work.html#2026-01-11T20:01:30.642Z)

I've been creating a 2d stack-based programming game for kids (4+) called Stacky Bird. Inspired by the game 2048 and my old RPN HP calculator. <https://game.stackybird.com/>

Finishing levels unlock instructions and after a while you can go back and solve old levels in new ways with those instructions. Let me know what you think 🙂

[🎥 stacky-bird-demo](https://history.futureofcoding.org/history/msg_files/F0A/F0A7LSUPS1M.mp4)

## 🗨️ **Eli**: [📝 Bicross](https://smallandnearlysilent.com/bicross/)

[🧵 conversation @ 2026-01-11](https://history.futureofcoding.org/history/weekly/2026/01/W2/share-your-work.html#2026-01-11T20:35:31.892Z)

I...can’t stop working on my procedurally generated picross puzzle game. I think I’m getting to the point where I’m willing to call it “done” though, now that I have 3 distinct versions:

- <https://smallandnearlysilent.com/bicross/> is the base sketch where I figured it all out, and have been experimenting with layout and puzzle generation
- <https://smallandnearlysilent.com/bicross/rpg/> is a more “fun” version of the puzzle because it has some nuance to it
- and <https://smallandnearlysilent.com/bicross/daily/> is really really actually me capitalizing on how easy it is to ensure that everyone plays the same puzzle because I have seeded level generation

I still haven’t written up or recorded a “how to play” thing 😂

[📝 Bicross](https://smallandnearlysilent.com/bicross/)

> Picross, but implemented with b.js so it is bicross, nothing to do with bifrost...tries to be cozy.

[📝 Bicross RPG](https://smallandnearlysilent.com/bicross/rpg/)

> RPG Picross, but implemented with b.js so it is bicross, nothing to do with bifrost...tries to be a cozy adventure.

## 🗨️ **Jakob Schindegger**: [💡 Tailrmade - Your Visual App Builder](https://tailrmade.app/)

[🧵 conversation @ 2026-01-11](https://history.futureofcoding.org/history/weekly/2026/01/W2/share-your-work.html#2026-01-11T22:37:12.931Z)

Hey all!  
A friend and I have been working on a side project for a while, and even though there are still rough edges, I thought it might resonate with folks here.  
It's called Tailrmade - <https://tailrmade.app/> - a visual app builder that runs entirely in your browser. Think of it as a way to prototype and build interactive web apps without starting from scratch every time.  
How it works:

- Node-based system for logic (connect data sources, APIs, transformations, etc.)
- Visual UI layer on top where you build dashboards and interfaces
- For every app you create, you can "look under the hood/UI" at the logic and see/tweak everything
- Basic AI assistance (requires signup) that uses the same building blocks instead of being a black box

Fair warning, it's still a work in progress:

- Mobile version needs work (best on desktop for now)
- No auto-save yet
- Some workflows aren't as intuitive as we'd like
- And there are still bugs around

While Tailrmade itself isn't open source (yet), we're trying to keep the spirit of transparency. Every app you build shows its full logic, can be remixed by others, and you're never locked into a black box. We're still figuring out the right model as we grow and get more feedback. Speaking of :-)  
If anyone has 10-15 minutes on desktop to poke around, we'd love feedback! There's some help at <https://tailrmade.app/help>, but feel free to reply or DM with questions.

[📝 Tailrmade - Your Visual App Builder](https://tailrmade.app/)

> Create web apps visually with drag-and-drop components. See changes instantly, work with a variety of data types, and share your tailrmade apps - all in your browser. No signup required.

![Tailrmade - Your Visual App Builder](https://tailrmade.app/assets/PlugAndPlayground-Drawing-a-chart.jpg)

# DevLog Together

## 🗨️ **Tom Larkworthy**:

[🧵 conversation @ 2026-01-10](https://history.futureofcoding.org/history/weekly/2026/01/W2/devlog-together.html#2026-01-10T12:43:27.158Z)

Trying to improve the look of some of my diagrams by minimising the edge crossings. Came up with quite a fast algorithm with chatGPT based on spectral methods.  
wrote it up in a literal notebook <https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_spectral-layout.html> which includes an interactive playground. It was the playground that convinced me to add a sift step and now its quite good I think at its goal.

[🎥 Screen Recording](https://history.futureofcoding.org/history/msg_files/F0A/F0A81RX4DNY.mov)

# Thinking Together

## 🗨️ **Scott**:

[🧵 conversation @ 2026-01-05](https://history.futureofcoding.org/history/weekly/2026/01/W2/thinking-together.html#2026-01-05T18:16:31.559Z)

It's been really interesting to me that we still haven't seen multi-agent systems take off, even with how powerful a single agent system like Claude Code is, and it's got me thinking that we might be dealing with something different and need a new programming/computing environment to explore it...

So...I've been playing around with this idea of taking some of the core original ideas of OO/Smalltalk (Objects as self contained computers that pass messages with binding at late as possible) and seeing what we could do if we added an LLM in there...and have landed on this concept of "Prompt-Objects" that are self-contained computers (essentially what people call agents) that have plaintext instructions, have access to tools as primitives, and run in a loop with an LLM, can pass messages to each other (or to humans) in natural language, and basically no binding (or essentially semantic late binding(?)).

So far I've got a simple environment set up where you can interact with these prompt objects, create new ones, and trace their communication with each other...but I'm curious if anyone else has gone down this line or thinking or gives you any ideas? I recently rewatched Kay's "[The Computer Revolution Hasn't Happened Yet](https://www.youtube.com/watch?v=oKg1hTOQXoY)" and have been toying around with other biological inspired ideas like environmental/pheromone-style signaling...but that's down the line

I played around with it a bit this weekend and it might just be me, but it's actually been kind of easier to think of different "agentic" flows by not really thinking of them as "agents" and thinking of them as "prompt objects" that you build a program with...

![📷 image.png](https://history.futureofcoding.org/history/msg_files/F0A/F0A6Q834TQT.png)

## 🗨️ **guitarvydas**: [🎥 Alan Kay at OOPSLA 1997 - The computer revolution hasnt happened yet](https://youtu.be/oKg1hTOQXoY?t=3190)

[🧵 conversation @ 2026-01-11](https://history.futureofcoding.org/history/weekly/2026/01/W2/thinking-together.html#2026-01-11T20:00:57.064Z)

Is Anthropic's MCP an instance of the object protocol that Alan Kay talked about in his '97 OOPSLA [keynote](https://youtu.be/oKg1hTOQXoY?t=3190) which [Scott](#user?key=U05GSC0B4A0) mentions in <https://feelingofcomputing.slack.com/archives/C5T9GPWFL/p1767636991559059>?

[🎥 Alan Kay at OOPSLA 1997 - The computer revolution hasnt happened yet](https://youtu.be/oKg1hTOQXoY?t=3190)

![Alan Kay at OOPSLA 1997 - The computer revolution hasnt happened yet](https://i.ytimg.com/vi/oKg1hTOQXoY/hqdefault.jpg)

[📝 [January 5th, 2026 10:16 AM] scott099:](https://feelingofcomputing.slack.com/archives/C5T9GPWFL/p1767636991559059)

> It's been really interesting to me that we still haven't seen multi-agent systems take off, even with how powerful a single agent system like Claude Code is, and it's got me thinking that we might be dealing with something different and need a new programming/computing environment to explore it...
>
> So...I've been playing around with this idea of taking some of the core original ideas of OO/Smalltalk (Objects as self contained computers that pass messages with binding at late as possible) and seeing what we could do if we added an LLM in there...and have landed on this concept of "Prompt-Objects" that are self-contained computers (essentially what people call agents) that have plaintext instructions, have access to tools as primitives, and run in a loop with an LLM, can pass messages to each other (or to humans) in natural language, and basically no binding (or essentially semantic late binding(?)).
>
> So far I've got a simple environment set up where you can interact with these prompt objects, create new ones, and trace their communication with each other...but I'm curious if anyone else has gone down this line or thinking or gives you any ideas? I recently rewatched Kay's "<https://www.youtube.com/watch?v=oKg1hTOQXoY|The Computer Revolution Hasn't Happened Yet>" and have been toying around with other biological inspired ideas like environmental/pheromone-style signaling...but that's down the line
>
> I played around with it a bit this weekend and it might just be me, but it's actually been kind of easier to think of different "agentic" flows by not really thinking of them as "agents" and thinking of them as "prompt objects" that you build a program with...

# Linking Together

## 🗨️ **Ivan Reese**: [📢 Submit to the PX/26 workshop](https://2026.programming-conference.org/home/px-2026#Call-for-Papers-Essays-and-Demos)

[🧵 conversation @ 2026-01-06](https://history.futureofcoding.org/history/weekly/2026/01/W2/linking-together.html#2026-01-06T16:27:33.439Z)

I'd encourage folks here to [submit to the PX/26 workshop](https://2026.programming-conference.org/home/px-2026#Call-for-Papers-Essays-and-Demos). Here's how they describe it:

> Some programming feels fun, other programming feels annoying. Why?  
> For a while now the study of programming has forced improvements to be described through the Fordist lens of usability and productivity, where the thing that matters is how much software can get built, how quickly.  
> But along the way, something has gone missing. What makes programmers feel the way they do when they’re programming? It’s not usually fun to spend an age doing something that could have been done easily, so efficiency and usability still matter, but they’re not the end of the story.  
> Some environments, activities, contexts, languages, infrastructures make programming feel alive, others feel like working in a bureaucracy. This is not purely technologically determined, writing Lisp to do your taxes probably still isn’t fun, but it’s also not technologically neutral, writing XML to produce performance art is still likely to be <bureaucratic></bureaucratic>.  
> Whilst we can probably mostly agree about what isn’t fun, what is remains more personal and without a space within the academy to describe it.  
> PX set its focus on questions like: Do programmers create text that is transformed into running behavior (the old way), or do they operate on behavior directly (“liveness”); are they exploring the live domain to understand the true nature of the requirements; are they like authors creating new worlds; does visualization matter; is the experience immediate, immersive, vivid and continuous; do fluency, literacy, and learning matter; do they build tools, meta-tools; are they creating languages to express new concepts quickly and easily; and curiously, is joy relevant to the experience?  
> PX also covers the experience that programmers have. What makes it and what breaks it? For whom? What can we build to share the joy of programming with others?  
> Here is a list of topic areas to get you thinking:

- creating programs
- experience of programming
- exploratory programming
- liveness
- non-standard tools
- visual, auditory, tactile, and other non-textual
- languages
- text and more than text
- program understanding
- domain-specific languages
- psychology of programming
- error tolerance
- user studies
- theories about all that

> Correctness, performance, standard tools, foundations, and text-as-program are important traditional research areas, but the experience of programming and how to improve and evolve it are the focus of this workshop. We also welcome a wide spectrum of contributions on programming experience.

The submission deadline is Friday!

## 🗨️ **J. Ryan Stinnett**: [📢 Substrates 2026 workshop](https://2026.programming-conference.org/home/substrates-2026)

[🧵 conversation @ 2026-01-07](https://history.futureofcoding.org/history/weekly/2026/01/W2/linking-together.html#2026-01-07T11:48:22.962Z)

The [Substrates 2026 workshop](https://2026.programming-conference.org/home/substrates-2026) may also be of interest here:

> An increasing number of researchers see their work as interactive authoring tools or software substrates for interactive computational media. By talking about “authoring tools”, we remove the divide between programmers and users; “software substrates” let us look beyond conventional programming languages and systems; and “interactive computational media” promises a more malleable and adaptable notion of tools for thought we are striving for. This workshop aims to bring together a wide range of perspectives on these matters.
>
> Researchers in education, design, and software systems alike have long explored how computation can become visible and adaptable to its users, from diSessa’s learner-centered Boxer microworlds of the 80s, Hypercard, and Maclean et al’s Buttons. Even mundane systems such as spreadsheets blur the distinction between use and creation.
>
> The notion of a substrate is an umbrella for many different traditions which are bringing local agency over software systems.
>
> [...many more words, see the site!...]
>
> We welcome participation from workers from academia, industry, independent scholars, and others, from any of the communities named above, and from any others who can see their goals reflected in the substrate agenda.

The submission deadline for this workshop is 2026-02-20.

## 🗨️ **Ivan Reese**:

[🧵 conversation @ 2026-01-07](https://history.futureofcoding.org/history/weekly/2026/01/W2/linking-together.html#2026-01-07T20:51:45.302Z)

Just a small shout-out. I keep coming back to [Mariano Guerra](#user?key=UBN9AFS0N)'s [No-code History](https://instadeq.com/blog/categories/cat_nocodehistory/) blog posts. They're such a great way to start learning about (or page back in) some of the most interesting, historically significant projects in our field. Each has a nice summary of the project and historical context, a bunch of quotes and videos and extracts, and then canonical resources for digging deeper. Wonderful stuff.

- [Pygmalion](https://instadeq.com/blog/posts/no-code-history-pygmalion-1975/)
- [Geometry Theorem Machine](https://instadeq.com/blog/posts/no-code-history-the-geometry-theorem-machine-1959/)
- [GRAIL](https://instadeq.com/blog/posts/no-code-history-graphical-input-language-grail-1969/)
- [Frox](https://instadeq.com/blog/posts/no-code-history-frox-a-scriptable-smarttv-with-a-magic-wand-1991/)
- [Sketchpad](https://instadeq.com/blog/posts/no-code-history-sketchpad-a-man-machine-graphical-communication-system-1963/)
- [Peridot](https://instadeq.com/blog/posts/no-code-history-peridot-uis-by-example-visual-programming-constraints-1987/)
- [Lotus Improv](https://instadeq.com/blog/posts/no-code-history-lotus-improv-spreadsheets-done-right-1991/)

So — thank you, Mariano!

## 🗨️ **Ivan Reese**:

[🧵 conversation @ 2026-01-07](https://history.futureofcoding.org/history/weekly/2026/01/W2/linking-together.html#2026-01-07T21:10:07.366Z)

I've been doing some deeper research about Sketchpad lately, and only just discovered that the Computer History Museum has a wonderful online collection. You can create an account, and then browse through their archives adding items to your own little personal collections. For whatever reason, this "it's bookmarks, but just for this one website" feels really nice to me?

What sort of stuff will you find on the CHM website?

- [200 photos of modules from the TX-2](https://www.computerhistory.org/collections/catalog/search-catalog/search/keyword:tx-2-module/), for some reason!!
- A [coffee mug](https://www.computerhistory.org/collections/catalog/102682003/search/keyword:sutherland/) branded [Evans & Sutherland](https://en.wikipedia.org/wiki/Evans_%26_Sutherland), who pioneered head-mounted displays and did a bunch of early work in 3d graphics
- Almost 500 [oral](https://www.computerhistory.org/collections/catalog/search-catalog/search/collection:oral-histories--format:mov-57-mp4-61/) history videos (why did I only put the hyperlink on "oral"? am I having a laugh?)
- The source code for [Photoshop version 1.01](https://computerhistory.org/blog/adobe-photoshop-source-code/?key=adobe-photoshop-source-code) — don't sleep on the delightful photos of the Knoll brothers at the top of this post. Someone should put these on a tee shirt.
- A video of ma[g](https://www.computerhistory.org/collections/highlights/page/2/)netic RAM (okay, now you're just being daft on purpose).

For some reason, I find the CHM youtube channel irritating, but love browsing their website. And that reason is design. The website feels like the website of a computer history museum. That's a nice feeling. (Can you imagine if the Exploratorium had a website that felt like the Exploratorium? Why the hell haven't they done that?)

## 🗨️ **Ivan Reese**:

[🧵 conversation @ 2026-01-07](https://history.futureofcoding.org/history/weekly/2026/01/W2/linking-together.html#2026-01-07T21:22:14.435Z)

Last one for now — [Bitsavers](http://www.bitsavers.org) has an incredible archive of software, photos, PDFs, magazines, and other historical materials. A real goldmine if you're looking to place yourself, say, back at MIT in '63.

## 🗨️ **Jasmine Otto**:

[🧵 conversation @ 2026-01-09](https://history.futureofcoding.org/history/weekly/2026/01/W2/linking-together.html#2026-01-09T22:49:01.022Z)

redblobgames has released a bookmarklet which attaches a codemirror with linked scrubbing (alt-drag any number) to arbitrary SVGs, including illustrations and data visualizations. the utility is limited only by the readability of your SVG's textual representation  
<https://www.redblobgames.com/x/2550-scrubbable-codemirror/>

---

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
