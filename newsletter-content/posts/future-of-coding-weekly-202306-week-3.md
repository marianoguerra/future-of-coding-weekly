<!--
.. title: Future of Coding Weekly 2023/06 Week 3
.. slug: future-of-coding-weekly-202306-week-3
.. date: 2023-06-23 15:23:25 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

💡 Inventing Mario on Principle 📙 Live Coding User's Manual  🤖 Generative all the Things

# Two Minute Week

🎥 [Nette Generate: Start With A Word](https://youtu.be/uycD_QoffDc) via **Pawel Ceranka**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W3/two-minute-week.html#2023-06-16T13:06:14.889Z)

![Youtube Thumbnail](https://img.youtube.com/vi/uycD_QoffDc/hqdefault.jpg)

Generating initial content for an any workspace.



 *We are, by design, about non-linear explorations, in that setting it’s not always easy to start.* 

A bit like sitting in front of a blank page. This feature is like priming / toning the canvas 😉



I personally think visually a lot of the time (spatially / moving pictures), but  *the*   *trigger for starting a thread of thought is quite often a word, term, phrase or a sentence* .

This feature is about that kind of exploration, you drop a word and it ripples out into all kinds of useful directions.

(of course, being useful is the trick here, this is very minimal atm)



The way the app is set-up it’s not difficult for us to generate those workspaces (the blocks are Clojure maps in a re-frame db), so if it turns out that it’s useful we’ll probably generate more content.

# Our Work

📝 [BASIC to JS Compiler](https://codepen.io/kgr/details/yLQyLjR) via [Kevin Greer](https://twitter.com/kgrgreer)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W3/share-your-work.html#2023-06-12T17:34:11.099Z)

Not my main work, but a fun little programming project that's relevant in a number of ways, despite apparently being more about the Past of Coding, than the Future.

I wrote a small (<500 lines of code) BASIC to JS compiler, that lets me run the programs from the class book _101 BASIC Computer Games_ from 1978. It's interesting for two reasons I think: 1. for those who want to learn about languages and compilers, this provides a very simple example 2. philosophically, I think BASIC really exemplifies the Worse is Better approach outlined by  Richard Gabriel and covered in a FOC podcast. It is a terrible language in many ways, but it was small enough to be stored in a 4k ROM and be used to to useful things on an early microcomputer with only 4k of RAM. If we had waited for machines with enough memory to run Lisp, Smalltalk or Algol, the microcomputer revolution would have been delayed by a decade or more. Source: [github.com/kgrgreer/foam3/tree/429f2fd2b4cef0e37996a4c4ad35cdf5f83a8b97/src/foam/demos/basic](https://github.com/kgrgreer/foam3/tree/429f2fd2b4cef0e37996a4c4ad35cdf5f83a8b97/src/foam/demos/basic)

Online version:

> 📝 [BASIC to JS Compiler](https://codepen.io/kgr/details/yLQyLjR)
>
>A BASIC to JS compiler that lets you compile classic programs written in the BASIC programming language to JS and then run them in your browser. To us...

🐦 [Matt Webb 🌸🌼🌸 on Twitter](https://twitter.com/genmon/status/1668948562460266497) via **Matt Webb**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W3/share-your-work.html#2023-06-14T13:23:50.352Z)

I’ve been sketching multiplayer UIs. Folks who came to the most recent London meet will recognise these from my demo. I’m trying not to converge on anything right now — how we interact with AI NPCs is still so open.



I made a new one today, with spatial multiplayer chatrooms and an NPC inhabiting each. It’s on Twitter 



An archive of all of my sketches, including a bonus gesture-controlled lamp [actsnotfacts.com/made/multiplayer](https://www.actsnotfacts.com/made/multiplayer)

> 🐦 [Matt Webb 🌸🌼🌸 on Twitter](https://twitter.com/genmon/status/1668948562460266497): what if you had one chatroom with an AI for wild ideas... and another next door for a dose of reality?
> 
> and you travel between AI NPC chatrooms like a spatial map?
> 
> yeah and it's all multiplayer so your friends can be there too?
> 
> oh yes ALSO one of the rooms is haunted 👻
> 
> ![Tweet Thumbnail](https://pbs.twimg.com/tweet_video_thumb/FylK_7mXoAMzJOz.jpg:large)

> 📝 [Multiplayer sketches](https://www.actsnotfacts.com/made/multiplayer)
>
>A series of software sketches exploring multiplayer UI.

👮 [lintrule.com: Let the LLM review your code.](http://lintrule.com) via **Evan Conrad**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W3/share-your-work.html#2023-06-15T22:20:34.503Z)

with encouragement from **@Joe Grossberg**, down to share what I’m doing…



I make [lintrule.com](http://lintrule.com), a little CLI for having a language model do your code review.



You write rules in plain text, and then it checks them against your code, like a test framework. Here’s an example rule that runs on SQL migrations:






```

include: ["migrations/*.sql"]




Make sure our postgres migrations follow these rules:



1. ensure new tables are at least 3NF (third normal form). If they're not, fail and give an example of what's wrong, assuming the reader does not know terms like "BNCF", "3NF", "BCNF", and so on.

2. make sure that all tables have a created_at and updated_at

3. make sure migrations don't have breaking changes. For example, removing a table, removing column, and so on.

   3.1 It's okay to have a breaking change if there's a comment on the migration that explains why it's safe to have that change.

4. prefer 'uuid' over 'serial' or 'int' for primary keys. Ignore this check if it's primary key made up of two columns.
```





![Screen Shot 2023-06-15 at 3.20.06 PM.png](http://history.futureofcoding.org/history/msg_files/F05/F05CLMDLLRL.png)


# Devlog Together



💬 [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W3/devlog-together.html#2023-06-18T18:06:43.121Z)

Worked on a prototype for visualizing a map operation on arrays using the visual programming system that I am working on, hopefully it's clear from the video what is going on, at least that is the intention 😅



🎥 [Demo Video](http://history.futureofcoding.org/history/msg_files/F05/F05DF96LCCR.mp4)

# Thinking Together

💬 [Matthew Linkous](https://twitter.com/aspen_cloud)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W3/thinking-together.html#2023-06-13T16:38:15.843Z)

I’m been thinking about this concept of a “full-stack” database. I’m curious what connotations that invokes for folks here and what features you might imagine a futuristic, “full-stack” database would have? Bonus question: is it “fullstack”, “full-stack” or “full stack”?

💡💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W3/linking-together.html#2023-06-13T17:29:36.400Z)

Are people here aware of  _Super Mario Maker 2_ ? I somehow totally missed the memo that one part of Bret Victor's  _Inventing on Principle_  has been productionized.



Screenshots from:




* [Bret Victor - Inventing on Principle](https://www.youtube.com/watch?v=PUv66718DII)
* [Making a Super Mario Maker 2 Course with Trial and Error!](https://www.youtube.com/watch?v=yKLfaVC0zzU)

![iop.png](http://history.futureofcoding.org/history/msg_files/F05/F05CBCZ8H5Z.png)

![smm2.png](http://history.futureofcoding.org/history/msg_files/F05/F05BX0WLBJT.png)

📝 [Emily Dickinson’s Apple Computer House](https://spikeartmagazine.com/?q=articles/discourse-emily-dickinson-apple-computer-house) via **Ibro C.**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W3/linking-together.html#2023-06-15T06:32:11.697Z)

A look at Folk Computer (ofshoot from Dynamicland by Omar Rizwan and Andrés Cuervo) through Emily Dickinson’s poetry


>The 19th-century poet, whose verse still resonates with its open-ended sense of how language produces meaning, is a model for a group of Brooklyn coders inventing a more humane computer.

📝 [Live Coding: A User's Manual](https://livecodingbook.toplap.org/book/) via [Josh Justice](https://codingitwrong.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W3/linking-together.html#2023-06-15T12:18:52.610Z)

Coworker just shared this book and I was surprised not to see it in the search history here (maybe I missed it). I thought this group would be interested: [livecodingbook.toplap.org/book/#](https://livecodingbook.toplap.org/book/#)



To give some scope:






> In asking “What is live coding?,” our intention is not to fix or define but rather to explore how live coding  _opens up_ . Live coding is about people interacting with the world, and each other, in real time, via code. Live coding is about making software  _live_ .






> The first part is more practice focused, offering an account of the origins, development, and aspirations associated with the evolution of live coding alongside presenting documentation and examples of live coding practice. The second part is more speculative and conceptual in its register, allowing space for discussion of the many ways live coding reflects and informs wider cultural and political concerns.


> 📝 [Live Coding: A User's Manual](https://livecodingbook.toplap.org/book/)
>
>Live Coding: A User's Manual, published by MIT Press

# 🤖

💬 **Greg Bylenok**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W3/of-ai.html#2023-06-14T19:18:59.927Z)

This might fall under "thinking-together", but I'm throwing this here as it specifically relates to AI. For context, I've been working to integrate an LLM into an existing application.  If "prompt engineering" is part of the future of coding, here are some challenges to expect:




* *Non determinism:* I can repeat a prompt and get back drastically different results, in both content and format.
* *Capabilities:* I feel like I'm constantly probing to discover the capabilities and limits of the model. Every interaction is similar to being presented with a blank canvas: What should I ask? What can I ask? Is there something that I could ask that I am forgetting about? Can I reword my prompt slightly and (potentially) get better results? This leads to a lot of experimentation.
* *Expectations*: We are tricked into believing the LLM comprehends what we are saying, when it's really just a giant prediction table. Then we are disappointed when it gives less-than-satisfactory replies.

Compare this to programming against a traditional API:




* On in the input side, an API constrains the vocabulary. With an LLM, everything is fair game.
* On the output side, I can guess (or learn) the effect of a given API call. With an LLM, it's all probabilistic.

Curious about others experiences here, ways to reason about these models, techniques for overcoming, etc...

💬 **Jarno Montonen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W3/present-company.html#2023-06-12T08:07:53.026Z)

What are good web based node-based programming environments for implementing simple arithmetic and boolean logic?

