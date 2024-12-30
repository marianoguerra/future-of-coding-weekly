<!--
.. title: Future of Coding Weekly 2024/12 Week 5
.. slug: future-of-coding-weekly-202412-week-5
.. date: 2024-12-30 13:30:40 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🕶️ Visualizer: Own Cell Renderer 📚 Advent of Papers (2024) 🌳 Tree Calculus

# Our Work

## 🎨 [Splash is a colour format](https://www.todepond.com/lab/splash/) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/share-your-work.html#2024-12-24T08:28:26.474Z)

i made an explainable for a weird colour format i use



Splash

[todepond.com/lab/splash](https://www.todepond.com/lab/splash/)

## 💻 [all pairs](https://akovantsev.github.io/corpus/pairs-campaign) via **misha**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/share-your-work.html#2024-12-26T10:33:19.827Z)

I made a thing! [akovantsev.github.io/corpus/pairs-campaign](https://akovantsev.github.io/corpus/pairs-campaign)

## 🎙️ [FUTURE OF CODING: INTERVIEW](https://www.patreon.com/posts/118714678) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/share-your-work.html#2024-12-26T19:40:01.601Z)

Bonus episode alert!



[FUTURE OF CODING: INTERVIEW](https://www.patreon.com/posts/118714678)



(featuring **@Philippa Markovics**)



This is the first FUTURE OF CODING interview since January 2022.

It's an experimental pilot so it's for patrons only this time. Thank you to everyone who supports the podcast and I hope you enjoy this behind-the-scenes look!



I tried out various different editing techniques to give them a whirrrrrrr before the Real Interviews. Let me know what you think!!!!!



I really enjoyed Steve Krouse's wholesome interviews back in the day so I hope I can do them justice with a 2024/2025 version. I promise this first one is (at the very least) not boring. Any other qualities are up to you to determine.



Of course, many thanks to Philippa for helping me out and being my first victim (and we'll maybe see her again soon).



# Devlog Together

## 💬 [Jimmy Miller](https://jimmyhmiller.github.io/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/devlog-together.html#2024-12-26T16:27:19.186Z)

Finally getting to work on beagle again. I was able to get some Cffi working. So here you see a simple sdl application and a socket server on a background thread. I made a quick vs code extension that sends the contents of a buffer to this socket and the code evals. Now I have a quick and simple live coding setup. Here I just invoke a function, but you can redefine functions as well. I need to work on live redefinition of structs and all sorts of bugs and edge cases. But it's pretty exciting to see some real stuff working!

![live.gif](http://history.futureofcoding.org/history/msg_files/F08/F086G6ZGZFF.gif)



## 💬 **Roma Komarov**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/devlog-together.html#2024-12-26T22:47:58.289Z)

Working on a native CSS mixin that would allow to easily debug any other custom properties in CSS by outputting their value into  `::after`  pseudo-element. It is sometimes frustrating doing various complex calculations in CSS while not seeing the result itself (without applying it to something), and without looking into devtools (which is nice, but can be slow). So, being able to just output some CSS variable, calculation, viewport, or container unit for  _any_  element just by assigning a single CSS variable will be very useful.



(the code for achieving this is overcomplicated — but 100% fine for debugging purposes; I'll try to write an article about it in the next few weeks)

🎥 [Screen Recording](http://history.futureofcoding.org/history/msg_files/F08/F0878N12Y64.mov)

## 🕶️ [Visualizer: Own Cell Renderer](https://observablehq.com/@tomlarkworthy/visualizer) via [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/devlog-together.html#2024-12-28T17:49:32.497Z)

got the notebook cell visualizer finished. Its the final part MVP part for an userspace Observable-like experience off the platform, but I still need to actually put all the pieces together so its not hugely interesting yet [observablehq.com/@tomlarkworthy/visualizer](https://observablehq.com/@tomlarkworthy/visualizer).

## 💻 [just stage every change in git repo](https://github.com/uprun/git-auto-commit) via [Oleksandr Kryvonos](https://twitter.com/o_kryvonos)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/devlog-together.html#2024-12-29T13:55:45.955Z)

so previously I created a small tool that creates commits on every file change

and though it was very fun in the beginning it turned out to be a trouble to remember what I actually did

so now I downgraded it to just "create a new feature branch if I make some changed on main branch and stage everything"

[github.com/uprun/git-auto-commit](https://github.com/uprun/git-auto-commit)

## 🐘 [Emacs](https://merveilles.town/@akkartik/113635605044781800) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/devlog-together.html#2024-12-29T23:17:57.187Z)

After a conversation with [Jack Rusher](https://twitter.com/jackrusher) and others about [Emacs](https://merveilles.town/@akkartik/113635605044781800) [Nature](https://merveilles.town/@akkartik/113656713644512122), and playing with [Seymour](https://harc.github.io/seymour-live2017) by **@Alessandro Warth**, I'm getting interested in building..



An environment for visualizing programs



(Not to be confused with visual programs, or visualization more generally.)






* Start with a tiling window manager for managing named graphical canvas "buffers", using Emacs operations like split and resize.
* Each buffer exposes a coordinate space of its choosing, listens for messages and positions objects in the space in response to messages.
* Buffers can send messages to other buffers.



Examples, etc. in 🧵


# Reading Together

## 📚 [Advent of Papers (2024)](https://jimmyhmiller.github.io/advent-of-papers) via [Jimmy Miller](https://jimmyhmiller.github.io/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/reading-together.html#2024-12-26T21:21:18.810Z)

Maybe I should have posted this here at the beginning. But I did an advent of papers. All of them are papers we haven't done on Future of Coding. And most of them will probably never be papers we do


# Thinking Together

## 💬 **Iacob Nasca**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/thinking-together.html#2024-12-30T02:20:50.792Z)

does anyone work on making a programming language ? and if so, can you share a repo or some notes ? I'm curious what features are you implementing and what programming language are you using do develop it and how you do the codegen part. I'm currently struggling quite a bit with LLVM

# Content

## 🌳 [Tree Calculus](https://treecalcul.us/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/linking-together.html#2024-12-23T10:06:42.544Z)

[Tree calculus](https://treecalcul.us/) is minimal, modular, Turing-complete, reflective



anyone has any opinions on this?

>One operator. Trivial semantics. Turing complete. Intensional.

## ✍️ [Drakon](https://en.wikipedia.org/wiki/DRAKON) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/linking-together.html#2024-12-26T06:29:22.461Z)

[Drakon](https://en.wikipedia.org/wiki/DRAKON) is a visual programming language. I haven't dug into [the modern editor implementation](https://drakon-editor.sourceforge.net/) yet; [the language description pdf](https://drakon-editor.sourceforge.net/DRAKON.pdf) is lovely just as an opinionated guide to drawing clear visual descriptions of programs.


## 📝 [alt.chi](https://chi2025.acm.org/for-authors/alt-chi/) via **Andrew McNutt**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W5/linking-together.html#2024-12-28T04:58:10.828Z)

Kind of a weird link, but: 

There’s a paper under review at alt chi right now called “Eden OS: A Call for a New Concept and Metaphor for Operating Systems for PCs”. This feels within the remit of this community and looks pretty interesting. Alt chi does an interesting thing where anyone can review any paper, all you need to do is volunteer to review for it on PCS (some instructions avail [here](https://chi2025.acm.org/for-authors/alt-chi/)). So, if this seems interesting to you, you can read it now or review if you want


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
