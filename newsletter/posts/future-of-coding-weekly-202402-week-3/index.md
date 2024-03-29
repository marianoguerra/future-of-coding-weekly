<!--
.. title: Future of Coding Weekly 2024/02 Week 3
.. slug: future-of-coding-weekly-202402-week-3
.. date: 2024-02-18 22:32:03 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

📢 You should write an Onward! paper 💡 Maybe Everything Is a Coroutine ߷ Unison Cloud Demo 

# Two Minute Week

💬 **Robin Allison**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/two-minute-week.html#2024-02-12T01:51:39.312Z)

[A screen recording from a program I did a while ago. Its an idea.](http://history.futureofcoding.org/history/msg_files/F06/F06JC690LUC.mov)

# Our Work

🎥 [Embed an Extensible AI Copilot in Any Web Application](https://www.youtube.com/watch?v=04itLyq6Mdg) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/share-your-work.html#2024-02-16T15:42:49.164Z)

![Youtube Thumbnail](https://img.youtube.com/vi/04itLyq6Mdg/hqdefault.jpg)

Making Gloodata embeddable using Web Components and Shadow DOM



The demo embeds Gloodata in the Future of Coding history search web app and shows how it can do external requests to the app and get information back from it.



Shadow DOM allows to isolate all scripts and styles from both sides and allow embedding in any web app using vanilla js/DOM and Web Components.

# Devlog Together

💬 [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/devlog-together.html#2024-02-12T06:29:12.951Z)

I started all this by saying PPLs were surprisingly visual and physical, so I'm concentrating on the interaction loop that I had in mind when I said those things: every time you edit a program, you see how it affects the distributions of data flowing through.



So in the attached GIF, there's a dataflow graph for a simple model where every few seconds I add an additional wire.



PPLs don't solve for a result—they  _converge_ . So I expected the visualizations to have a very springy response to changes. And that's what I get! In fact, the juiciness of the program output contrasts so much with the stilted UI that I might have to resubscribe to some game design blogs sooner than later. 😬



But this is good. I have ideas for where to take the language that are milquetoast but implementable by me in my spare time, at a pace that I think should allow me to explore complex models within my lifetime.

![2024-02-11 binomialish buildup.gif](http://history.futureofcoding.org/history/msg_files/F06/F06JZ0874GY.gif)


📝 [Lab notebook for “Tom’s PPL”](http://alltom.com/pages/ppl-lab-notebook/) via [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/devlog-together.html#2024-02-14T07:58:44.563Z)

I've actually been keeping a lab notebook for this project. Tonight I decided to put it online, since it explains some of my design choices at a length that wouldn't be appropriate in Slack. 

🎠 [New version after 51 days](https://akkartik.itch.io/carousel/devlog/678890/new-version-after-51-days) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/devlog-together.html#2024-02-16T23:20:25.251Z)

I just published a new version of my thing, with focus not on the new version number but on the number of days the previous version lasted. Because I find these numbers in our statements subconsciously go from facts to bragging to metrics..




>I just published a new version with a few changes. Firstly, an incompatibility: creating an editor now requires a font, where it used to implicitly use the current font. I'm fixing one previous Devlog...

💬 [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/devlog-together.html#2024-02-17T16:12:19.259Z)

I haven't been doing much coding lately (past ~4 months), so I'm doing a tiny side project to test out some new ways of working.




* I'm converting an old CLJS project to TypeScript. I really wanted to authentically  _live in_  CLJS, but after months and months of trying, I never got over pain caused by the tooling. (This was back in ~2016, and I hear things have come a long way since. I'd give it another shot, but I no longer have much free time to learn languages/ecosystems.) I tried to get GPT to actually just convert the whole CLJS codebase. It was a mixed success. This is why I chose TypeScript, rather than (my preference) some dynamically-typed language. As it passes through an intentional state of  _chaotic mush_ , I want as much  _structure_  as possible to be imposed upon my work. Once the conversion is done and I'm ready to resume work on the actual capabilities of the system, I'll probably gradually convert it to JS so that I can get away from needing a build step at all.
* Inspired by **@Maggie Appleton**, I'm using native apps for Whisper and GPT. When I want to know how to do something, I just ramble out loud. Eg: "Does JavaScript have any syntax yet for iterating over the keys and values of an object without using object.entries?" I've found that for certain kinds of question, it feels really fluid. It might not be any faster than switching to my browser, typing [mdn.io](http://mdn.io) followed by my query, and then scanning the page. But it often is, and even when it isn't it just feels really nice to get some help from the computer without having to touch the keyboard. (I have a weird relationship with my sense of touch — for instance, I really dislike touching anything made of metal and think we need to put all the metal back in the ground where it belongs, we've awoken a demon of unhindered conduction and are reaping the consequences, we're all damn fools — so it's nice to be able to converse directly with my computer without having to touch anything)

📝 [What's immediately next?](http://alltom.com/pages/ppl-lab-notebook/003.html) via [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/devlog-together.html#2024-02-18T16:12:04.227Z)

I've resigned myself to the fact that models in my language are going to get worse before they get better. There are things I love about this representation already, but I can already see it getting mired in "syntax".



I'll get to it. I want to work on model  _editing_  so badly that I'm just throwing in first drafts of the language features that I need in order to implement more interesting models as quickly as possible. I'm only a few away.



I added new entries in the lab notebook about [why](http://alltom.com/pages/ppl-lab-notebook/003.html) and [how](http://alltom.com/pages/ppl-lab-notebook/004.html), and created this lovely GIF for you. This is a "trait attribution" model that infers whether an exam is fair based on an assumption about the base rate of exams being fair, and how many people pass. (Only one person took this particular test—and they failed. 😰) Cute and small.

![2024-02-17 fair exam - one failure.gif](http://history.futureofcoding.org/history/msg_files/F06/F06L2FX0SFJ.gif)


# Reading Together

📝 [Programming-in-the-large versus programming-in-the-small by DeRemer and Kron (1975)](https://dl.acm.org/doi/pdf/10.1145/800027.808431) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/reading-together.html#2024-02-13T05:01:10.651Z)

📝 [A Small Matter of Programming Perspectives on End User Computing By Bonnie A. Nardi](https://mitpress.mit.edu/9780262140539/a-small-matter-of-programming/) via **Stephen De Gabrielle**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/reading-together.html#2024-02-16T15:13:18.023Z)

 ~_*Chapter 1 Introduction*_~  (11 pages) 

[A Small Matter of Programming
Perspectives on End User Computing
By Bonnie A. Nardi](https://mitpress.mit.edu/9780262140539/a-small-matter-of-programming/)

# Thinking Together

💬 **Guyren Howe**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/thinking-together.html#2024-02-15T08:12:15.036Z)

Trying to see what I can do with the relational model, only supporting multi-model. Tagging each row of tables with a “model” identifier, much as temporal databases attach an interval or whatever to a row.



This would be give us a First Order Modal logic. I could have some fund pondering what various modal logics can do here (I’ve studied Modal Logic, but not recently). It occurred to me to ask about existing work in the area. At least what the concept is called, so I can go look for prior art.



Think of having a Datalog database and being able to set a “current model” or being able to do separate parts of queries in different models.



I’m also interested in the idea of merging multiple models to build new ones.



What should I look for?



Thanks.

📼 [WAFlash is a WebAssembly AS2/AS3 Flash compatible player developed with HTML5, WebGL, WebAssembly and Emscripten.](https://vidkidz.github.io/) via **Justin Janes**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/thinking-together.html#2024-02-16T04:54:35.628Z)

I’m not sure which channel this belongs in or the usernames of the podcast but i’ve been working through the podcasts backlog. I wanted to share that Flash isn’t entirely dead and it’s based on a usable and sandboxed Wasm. 

❓ [app.myinnergenius.com/ibm/techtypes](https://app.myinnergenius.com/ibm/techtypes/) via **Justin Janes**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/thinking-together.html#2024-02-17T17:30:11.149Z)

I’m not planning on working for IBM/Rhel when i share this but - i did learn in 2015-2016 that for a long time IBM was the third largest employer of psychologists and therefore they have good assessments and profiling quizes lol.



![IMG_3665](http://history.futureofcoding.org/history/msg_files/F06/F06K5C4283Y.png)


# Content

🐦 [Duncan Cragg on X](https://twitter.com/Duncan__Cragg/status/1757168903875108906) via [Duncan Cragg](https://twitter.com/Duncan__Cragg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/linking-together.html#2024-02-12T22:32:58.320Z)

> 🐦 [Duncan Cragg (@Duncan__Cragg) on X](https://twitter.com/Duncan__Cragg/status/1757168903875108906): @jonathoda I'm a "crazy, misfit, rebel, trouble-making" person, who "sees things differently"
> 
> I don't just "provide entertainment for jaded developers" in my blog; I want to "add to human knowledge"
> 
> But:
> 
> <https://t.co/oTZHbNBVYB>
> 
> I see folk stifled by conformist academia
> 
> What did I miss?
> 
> ![Tweet Thumbnail](https://pbs.twimg.com/media/GGK0h0WWAAAjMkl.png:large)


💡 [Maybe Everything Is a Coroutine - Adam Nelson](https://adam.nels.onl/blog/maybe-everything-is-a-coroutine) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/linking-together.html#2024-02-13T17:44:21.905Z)

Coroutines as a foundation for state machines, effect types and resumable exceptions.


>I was inspired, after reading the excellent blog post Let Futures Be Futures, by the author's thought experiment of a language in which all functions are coroutines and this is used to express asynchr…

🎥 [Tomorrow Corporation Tech Demo](https://youtube.com/watch?v=72y2EC5fkcE) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/linking-together.html#2024-02-15T00:08:44.023Z)

![Youtube Thumbnail](https://img.youtube.com/vi/72y2EC5fkcE/hqdefault.jpg)

Reposting a classic in case any of the new folks here haven't seen it. 

📝 [Capital and enclosure in software commons: Linux & Ethereum](https://trent.mirror.xyz/GDDRqetgglGR5IYK1uTXxLalwIH6pBF9nulmY9zarUw) via [Andreas S](https://twitter.com/curious_reader)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/linking-together.html#2024-02-16T09:26:08.812Z)

Stumbled upon this interesting perspective on Commons

>Entities which extract profits from software commons like Linux and Ethereum have the greatest incentive and capacity to co-opt them.

🎥 [Creating and Deploying Slackbots with Unison Cloud](https://www.youtube.com/watch?v=uSNJFGITta8) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/linking-together.html#2024-02-18T11:36:32.088Z)

![Youtube Thumbnail](https://img.youtube.com/vi/uSNJFGITta8/hqdefault.jpg)



This video guides you through creating a Slackbot in Unison and deploying it to Unison Cloud, starting with a simple example and finishing with a ChatGPT bot.

# Present Company

📢 [To the crazy ones](https://alarmingdevelopment.org/?p=1708) via [Jonathan Edwards](https://twitter.com/jonathoda/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W3/present-company.html#2024-02-12T22:02:20.371Z)

 *To:*  the crazy ones, the misfits, the rebels, the troublemakers, the ones who see things differently

 *Subject:*  you should write an Onward! paper


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://tinyletter.com/marianoguerra/) / [Archive](https://newsletter.futureofcoding.org/) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
