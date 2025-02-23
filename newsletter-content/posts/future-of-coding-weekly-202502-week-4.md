<!--
.. title: Future of Coding Weekly 2025/02 Week 4
.. slug: future-of-coding-weekly-202502-week-4
.. date: 2025-02-23 22:26:52 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

 📢 Submit to Onward! papers & essays 🤔 Visual programming is stuck on the form 💻 Peter Norvig's Code

## 🕸️ [smallweb](https://smallweb.run) via **Achille Lacoin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/share-your-work.html#2025-02-21T10:19:24.503Z)

I posted in the wrong channel, so I'm reposting here (sry for the noise):



I'm working a new [dokku](https://dokku.com/) inspired deploy method to [smallweb](https://smallweb.run). For example, I have to create a new website on my own domain ( `smallweb.run` ), hosted on my vps, I just need to run two commands:






```
$ git remote add smallweb.run smallweb.run:git-push-example

$ git push smallweb.run

... git push output...

App available at [git-push-example.pomdtr.smallweb.live](https://git-push-example.pomdtr.smallweb.live)
```



In the video below, I use this method to install excalidraw to my instance, then update the app in a second commit to install [smallblog](https://jsr.io/@tayzendev/smallblog) instead. All of this is happening instantly, without a build step.



[smallweb git integration demo](https://videos.smallweb.run/watch/5c707fb03c226333157f)



I'm quite proud of this workflow, and I would love feedbacks.



Also, if you're interested to try out smallweb, you can either install it by following the docs, or register in the [smallweb.live waitlist]([cloud.smallweb.run](https://cloud.smallweb.run/)) (an hosted version of smallweb I'm working on)

## 🧑‍🤝‍🧑 [hands.sonnet.io](https://hands.sonnet.io) via **Rafał Pastuszak**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/share-your-work.html#2025-02-21T17:18:15.473Z)

I made a site/plaything where you can... hold hands with strangers:



1. go to [hands.sonnet.io](https://hands.sonnet.io)

2. wait for a buddy

3. hold hands



(recommended with sound on)



On a somewhat more serious note, I build little toys/experiments dealing with non-verbal communication online, like [this](https://untested.sonnet.io/notes/sit-together-devlog-002-space-kalimba/). This is an experiment in a similar vein.

## 🐛 [Ariana - Debugging JS/TS with AI](https://marketplace.visualstudio.com/items?itemName=dedale-dev.ariana&ssr=false#overview) via **Isaline Goudeau**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/share-your-work.html#2025-02-23T17:00:31.385Z)

Hey guys, I built a VS code extension that allows you to [debug in JS/TS faster than with traditional debuggers](https://marketplace.visualstudio.com/items?itemName=dedale-dev.ariana&ssr=false#overview). Would love to have your opinion 😊

# Devlog Together

## 👨‍💻 [Peter Norvig's famous Sudoku solver](https://norvig.com/sudoku.html) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/devlog-together.html#2025-02-18T04:21:55.836Z)

Today I ported [Peter Norvig's famous Sudoku solver](https://norvig.com/sudoku.html). 100 lines in Python turns into 200 lines in Lua. But something is starting to click in my head about constraint propagation.

## 👨‍💻 [github.com/uprun/egalite-ai](https://github.com/uprun/egalite-ai) via [Oleksandr Kryvonos](https://twitter.com/o_kryvonos)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/devlog-together.html#2025-02-18T09:57:53.526Z)

egalite-ai -- prolog-lite thingy that does pattern matching in JS

[github.com/uprun/egalite-ai](https://github.com/uprun/egalite-ai)

![Знімок екрана 2025-02-18 о 10.55.32.png](http://history.futureofcoding.org/history/msg_files/F08/F08E5LFU7GR.png)



## 💬 **Scott**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/devlog-together.html#2025-02-23T04:52:47.457Z)

Have been trying to build out and share more demos of practical uses of agents these last few weeks using the ai framework I've been building, and all my past demos have involved calls to LLMs, but this latest one is just API calls between different services but using the agent patterns.



Was just struck by how different and much simpler the design for this came out using an agent framework than if i had built it a few years ago before diving in to building AI apps.



I'm starting to wonder if a pattern we'll start to see with all these agents people are building is to use an LLM in certain places at first (or just an old-school pre-llm implementation), but then over time replace that call over to something more deterministic or at least specialized once something stable comes out. Almost having to have well-factored designs up front because you're guaranteed to need to swap components out as better, cheaper, or faster ones come along.

## 💬 [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/devlog-together.html#2025-02-23T10:45:11.252Z)

I have redone my UI concepts. A dockable panel now is "just" a notebook. This works out much better. Before I was adding lots boilerplate to slice a top level notebook into pieces that were manually placed. It was hard to program and very fragile. Furthermore, it was hard to navigate the module structure of notebooks.



This new way is much better. A whole lot of concepts are removed, but also, I think notebooks tend to explain what they do within the notebook, so you end up learning about the orthogonal components in a more approachable way, plus the whole concept of a module structure manifest to the UI in a way that encourages learning.



The entire concept of a top level notebook kind of disappears altogether as well, which is closer to what the serialized and runtime format is. You can have circular imports in Observable, there is no "top" at the runtime level, its a graph of reactively cooperating modules. The UI now reflect that properly.



I've mapped the nested docker layout structure to the hash URL so the view layout can be saved and hyperlinked, and in HTTP terms is a pointer to a specific part of the cooperating module graph. I will add the ability to set a default layout if no hash is found, and that kinda servers the purpose of pointing to what the intended purpose of the assembly is (a role previously fulfilled by having a single top level notebook).

🎥 [multi module editing](http://history.futureofcoding.org/history/msg_files/F08/F08EM4A8Z6F.mp4)

# Thinking Together

## 🎥 [Coroutine Secrets](https://youtu.be/PSYj2OQwi8Y) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/thinking-together.html#2025-02-17T16:59:21.420Z)

![Youtube Thumbnail](https://img.youtube.com/vi/PSYj2OQwi8Y/hqdefault.jpg)

Thinking about coroutines and whether we can reduce bloat by rolling-our-own...

## 💬 **Federico Pereiro**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/thinking-together.html#2025-02-17T19:55:25.697Z)

For fans of the spreadsheet ([Duncan Cragg](https://twitter.com/Duncan__Cragg) et al):






>  In essence, a spreadsheet is immensely powerful because it has three properties:



1. All of its data is contained in cells, each of them with an address.

2. A cell can reference another cell.

3. When a cell changes, all of the cells depending on it change as well.





I wrote the above just now. Do you think I'm on the money here, or would you summarize the spreadsheet's power with different points?

## 🤔 [Subroutines are not Functions](https://programmingsimplicity.substack.com/p/subroutines-are-not-functions-71a?r=1egdky) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/thinking-together.html#2025-02-23T18:45:35.187Z)

More remembering what's at the bottom of all this and wondering if we can make it simple again

# Content

## 📝 [Don't fork the ecosystem](https://newsletter.squishy.computer/p/dont-fork-the-ecosystem) via [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/linking-together.html#2025-02-17T08:13:49.369Z)

[Don't fork the ecosystem](https://newsletter.squishy.computer/p/dont-fork-the-ecosystem), by Gordon Brander. Drawing on analogies between software and living systems.

## 💬 [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/linking-together.html#2025-02-17T15:04:06.698Z)

Did some kinds of progress break the ecosystem, though? Galilean cosmology vs. Ptolemaic, iPhone replaced land-lines, electric grid, Gutenberg press, internet vs. paper books, cable TV vs antennas, streaming vs. cable TV...

## 📢 [Please submit to Onward! papers and essays](http://2025.splashcon.org/track/splash) via [Jonathan Edwards](https://twitter.com/jonathoda/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/linking-together.html#2025-02-19T01:30:05.620Z)

Please submit to Onward! papers and essays. One of the best places to publish ambitious non-mainstream ideas on programming.



- [Call for Papers](https://2025.splashcon.org/track/splash-2025-Onward-papers#Call-for-Papers)
- [Call for Essay](https://2025.splashcon.org/track/splash-2025-Onward-Essays#Call-for-Essays)


## 🤔 [Visual programming is stuck on the form](https://interjectedfuture.com/visual-programming-is-stuck-on-the-form/) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/linking-together.html#2025-02-20T01:40:37.601Z)

“Visual programming is stuck on the form” by **@Wil Chung**


## 🛸 [Lisp code for the textbook "Paradigms of Artificial Intelligence Programming"](https://github.com/norvig/paip-lisp) via [Oleksandr Kryvonos](https://twitter.com/o_kryvonos)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/linking-together.html#2025-02-22T23:31:12.870Z)

Whole book of Paradigms of Artificial Intelligence by Peter Norvig is availble on His github [github.com/norvig/paip-lisp](https://github.com/norvig/paip-lisp)



# Present Company

## 📢 [Virtual meetup 26th March](https://lu.ma/ikq24se9) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/02/W4/present-company.html#2025-02-23T11:00:46.500Z)

Hi,



Our next meetup is 26th March 18:00 UTC. We have 3 presentations/demos planned:



- [Konrad Hinsen](https://khinsen.net/) : demo of a prototype framework for explainable computations

- [Mariano Guerra](https://twitter.com/warianoguerra): Gloodata update

- [Maikel van de Lisdonk](https://www.devhelpr.com/)/ OCWG : Open Canvas Interchange Format



All presentations are done following the "chess-clock-talk" format.

🔗 [Virtual meetup 26th March · Luma](https://lu.ma/ikq24se9)


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)

