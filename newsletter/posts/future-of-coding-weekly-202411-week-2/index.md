<!--
.. title: Future of Coding Weekly 2024/11 Week 2
.. slug: future-of-coding-weekly-202411-week-2
.. date: 2024-11-10 22:30:25 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎙️ Hest — The Podcast 🦋 Future of Coding Meetup & Starter Pack 🧑‍💻 inside the head of a J programmer 

# Our Work

## 📝 [It takes a collective to raise an idea](https://marianoguerra.org/posts/it-takes-a-collective-to-raise-an-idea/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/share-your-work.html#2024-11-09T15:36:31.147Z)

I wrote: [It takes a collective to raise an idea](https://marianoguerra.org/posts/it-takes-a-collective-to-raise-an-idea/)






> You may know about Alan Turing or John von Neumann, but what about John Vincent Atanasoff or Konrad Zuse?

# Devlog Together

## 📝 [Beginning to Work On a REPL for Drawware](https://open.substack.com/pub/programmingsimplicity/p/beginning-to-work-on-a-repl-for-drawware?r=1egdky&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/devlog-together.html#2024-11-05T20:43:01.105Z)

Exploring / fooling around with making a REPL for drawware (inspired by [Ivan Reese](http://ivanish.ca/)’s reference to the paper [Advanced Game Engine Wizardry for Visual Programming Environments](https://vrozen.github.io/assets/papers/PAINT2024_preprint.pdf).



Surprising revelation: On the same computer, using just a websocket to connect a browser-based GUI to a Python program which interprets the diagram by shelling out results in turn-around that is "fast enough". It looks instantaneous. No further optimization, nor premature optimization, is required. Biggest missing feature at this point: a change to the diagram should cause the Python program to recompile and re-run the diagram and to update the output fields on the GUI. I think that this could be done by having the Python program periodically sample the 'test.drawio' file timestamp. I know that this is possible, but, I haven't worked out the details yet (suggestions welcome).


## 🎲 [probabilistic programming language project](http://alltom.com/pages/ppl-lab-notebook/) via [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/devlog-together.html#2024-11-07T04:28:55.107Z)

People who were interested in my [probabilistic programming language project](http://alltom.com/pages/ppl-lab-notebook/) for the statistics might enjoy this sprawling post where I dig deep into the guts of the surprisingly approachable inference algorithm underlying it:



[alltom.com/pages/spawelo](http://alltom.com/pages/spawelo/)



Cool problem ✅ 

Cool model ✅ 

Cool algorithms ✅ 




## 💬 **Pietu**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/devlog-together.html#2024-11-07T16:56:02.873Z)

Hi all 👋.



I've started a project to try out some of the ideas I've had regarding markdown and writing.



The perspective I'm coming from is that I've found it difficult to write technical articles. Especially ones containing code examples. The  _cut-n-paste_  nature of building such articles usually results in some files missing, broken code or incorrect output.



I've had a bad habit of not sharing what i'm doing, so this time I want to share baby-steps i'm making with the project. It's very barebones. I've got the first feature (if you permit) working, so the below video demonstrates includable blocks.

🎥 [Murkdown example blocks](http://history.futureofcoding.org/history/msg_files/F07/F07VDR65QPN.mp4)

## ⏰ [for hopefully the final time](https://futureofcoding.slack.com/archives/C01932BJGE8/p1731005785976349) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/devlog-together.html#2024-11-08T00:01:51.715Z)

I have gotten annoyed by timezone calculations [💬 #present-company@2024-11-07](https://history.futureofcoding.org/?fromDate=2024-11-04&toDate=2024-11-10&channel=present-company&filter=#2024-11-07T18:56:25.976Z). Here's a static html page you can download and save locally to roughly compare times in different timezones (just hours; you're on your own for minutes)






* [without daylight savings time](https://akkartik.name/tz.html)
* [with daylight savings time](https://akkartik.name/tz-dst.html)



The way I'm naively imagining using this:




* Scroll to the timezone you know the time in.
* Click on the nearest hour.
* It'll highlight that column all over the page.
* Scroll or find the timezone you care about.


* If you're not in a whole-number timezone (Hello India), you'll need to do some additional mental arithmetic by comparing nearby rows.



Right now you need to know if you're currently in Daylight Savings Time. Which is often beyond me, but I'm not yet sure what to do about that..



Inspired by [Bret Victor](https://worrydream.com/MagicInk/), but of course [the inevitable mistakes](https://infiniteundo.com/post/25509354022/more-falsehoods-programmers-believe-about-time) are all mine.



## 🎙️ [Hest — The Podcast](https://ivanish.ca/hest-podcast/) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/devlog-together.html#2024-11-08T02:00:00.188Z)

Lately I've felt a lot of "big feelings” — pain, yearning, confusion, frustration, desire — about computer programming.



I can't quite explain how I feel. Certainly can't write it down. Most definitely not in brief.



So I did the only thing that comes naturally: felt my way through it, out loud, exploratively.



Titles are hard, so it's called "Live as in Alive”, perhaps glancing sideways at the recent d-d-discourse about live programming vs live coding.




## 📝 [Experiment With A Simple REPL For A DPL](https://programmingsimplicity.substack.com/p/experiment-with-a-simple-repl-for?r=1egdky) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/devlog-together.html#2024-11-09T21:11:22.217Z)

[Simple REPL for a DPL including a file watcher.](https://programmingsimplicity.substack.com/p/experiment-with-a-simple-repl-for?r=1egdky)

>Towards Higher Level Syntax for Programming Languages

# Thinking Together

## 📝 [The Future of Programming](https://open.substack.com/pub/programmingsimplicity/p/the-future-of-programming?r=1egdky&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/thinking-together.html#2024-11-04T02:24:28.670Z)

For discussion...The face of hardware is vastly different than it was in the 1950s and as it was in the early days of computer-ing, when concepts like programming languages and operating systems were invented. I think that this means re-imagining how we use what we've got, instead of just tweaking what we've got. It augments the meaning of "programming". To start things off, here are some thoughts: [The Future of Programming](https://open.substack.com/pub/programmingsimplicity/p/the-future-of-programming?r=1egdky&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true)



## 💬 **Guyren Howe**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/thinking-together.html#2024-11-07T00:46:49.666Z)

I am quite interested in Event Handlers.



In college, I remember in my languages course discussing how you could have static scope or dynamic scope — whether a non-local identifier is searched for in the scope where the thing being called was defined, or in the scope where it’s being called.



Static won out, because in general it’s easier to reason about.



I mention all this, because I *think* I understand what Event Handlers are and how they work, and afaict, they’re just “a thing with dynamic scope”.



That all seems fine and good, but I never hear EH being described that way. Maybe because folks have forgotten about dynamic scope?



## 📝 [Thinking about "syntax families", and how to ~categorize them](https://gist.github.com/jaredly/593d66a955b09572f3810b43b75a22a1) via [Jared Forsyth](https://jaredforsyth.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/thinking-together.html#2024-11-09T13:22:23.695Z)

I've put together some thoughts about syntax, they're pretty roughly defined at the moment, but I'd love to get your feedback!

## 📝 [Single-Paradigm vs. Multi-Paradigm Thinking (Slight Return)](https://programmingsimplicity.substack.com/p/single-paradigm-vs-multi-paradigm-d7e?r=1egdky) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/thinking-together.html#2024-11-09T21:34:21.123Z)

Thinking about multi-paradigm programming. Why FP isn't enough, IMO... 

>Managing Programming Complexity

# Content

## 📝 [One way to do applied research](https://dubroy.com/blog/one-way-to-do-applied-research/) via [Patrick Dubroy](https://twitter.com/dubroy)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/linking-together.html#2024-11-07T15:17:18.920Z)

Hello! I just published this blog post which is relevant to folks here:



One way to do applied research

## 🧑‍💻 [ShareMyScreen puts you inside the head of a J programmer as they write a program.](https://code.jsoftware.com/wiki/ShareMyScreen) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/linking-together.html#2024-11-08T09:19:33.138Z)

## 🟧 [automat.org @ HN](https://news.ycombinator.com/item?id=42013109) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/linking-together.html#2024-11-08T15:52:40.137Z)

[Automat on hacker news](https://news.ycombinator.com/item?id=42013109) .. awesome **@Marek Rogalski** !!

## 🌲 [best way to visualize / explore nested data structures](https://bsky.app/profile/watwa.re/post/3l6pkv5v6zx22) via **Gregor**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/linking-together.html#2024-11-08T23:38:11.361Z)

adding onto [my post](https://bsky.app/profile/watwa.re/post/3l6pkv5v6zx22) over at bsky:

I'm curious, what is the best way to visualize / explore nested data structures you have seen?
> 📝 [Gregor (@watwa.re)](https://bsky.app/profile/watwa.re/post/3l6pkv5v6zx22)
>
>The core thesis of my new programming environment is once again: we can do better than text

Ironically enough I still dumped its AST (for lack of a better word) as pretty printed JSON. I could not handle that irony, so here's my shot at beating pretty JSON for looking at nested data structures


## 💬 [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/present-company.html#2024-11-07T18:56:25.976Z)

Here's the date for our next online FoC meetup: wednesday 27 nov 16:00 UTC.. and we have at least one demo already from [Kartik Agaram](http://akkartik.name/about) , so we need 2 more. If you want to demo then please react in this thread.


## 🕸️ [wiki.futureofcoding.org/meetups](https://wiki.futureofcoding.org/meetups/) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/present-company.html#2024-11-08T08:35:33.369Z)

I created a wiki page for our meetups [wiki.futureofcoding.org/meetups](https://wiki.futureofcoding.org/meetups/) .. if anyone organises an offline FoC meetup, this also can be placed there (or online FoC meetup by other people of the community off course). If you need help with this, please let me know.


## 🦋 [Future of Coding - Community](https://go.bsky.app/TosmmHK) via **Gregor**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/11/W2/present-company.html#2024-11-08T23:40:25.133Z)

My BlueSky has a distinct lack of your faces (and thoughts), I tried to collect as many of you into this pack as I could find, but I'd be happy to add more: 🦋 [Future of Coding - Community](https://go.bsky.app/TosmmHK)


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
