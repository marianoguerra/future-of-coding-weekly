<!--
.. title: Future of Coding Weekly 2025/04 Week 3
.. slug: future-of-coding-weekly-202504-week-3
.. date: 2025-04-21 10:03:15 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎥 Multiplayer Live Coding 📝 Why frameworks are evil 🔤 Typography meets scifi

# Our Work

## 🎥 [pastagang @ Noughty Fingers Second Date](https://youtu.be/k0H_rX7G2oQ) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W3/share-your-work.html#2025-04-13T23:55:56.629Z)

![Youtube Thumbnail](https://img.youtube.com/vi/k0H_rX7G2oQ/hqdefault.jpg)

here's a 45 minute slot of many people editing the same code document at the same time to make music and visuals. four people are there in person, many more are remote - connecting in from around the world. it's all made LIVE, from scratch - during the slot. 



i am still shocked that the LIVE programming world is largely oblivious to this sort of thing 


## 📝 [Programming In The Age Of Abundance](https://guyren.me/2025/04/16/programming-in-the-age-of-abundance.html) via **Guyren Howe**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W3/share-your-work.html#2025-04-20T16:45:18.063Z)

This may be of interest


## 💬 [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W3/share-your-work.html#2025-04-20T16:55:20.907Z)


> A world of rapid change that is almost entirely driven by and enabled by software is not one in which programmers will be idle.

I'd have said "yes" to that conclusion even without reading the arguments before it.



I am less convinced about some of your more detailed predictions, because many of them depend on changes in incentives (whether by markets, regulators, or something else), which are hard to predict.


# Thinking Together

## 💬 **Marek Rogalski**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W3/thinking-together.html#2025-04-16T15:06:48.382Z)

I've spent a considerable amount of time now figuring out in which "direction" do memory addresses mentally increase. I'm trying to pick a convention for presenting memory in Automat that would make it easier to mentally picture what's happening. No direction is perfect and each one involves some friction when mentally manipulating order of things.



The established conventions that I know of are:






* Text goes right and down (when lines wrap). Text direction may be pretty much arbitrary when different scripts are involved.
* Bits increase towards left (because << shifts bits up) and then up (because of "higher" bytes). Computer science courses teach that "stacks grow down".
* Numbers increase towards left (more significant digits go towards left) but for a typical (little-endian) CPU more significant bytes are written towards right.
* Points on a cartesian system tend to increase first towards right and up.
* In nature things usually grow up.


## 📝 [Library patterns: Why frameworks are evil](https://tomasp.net/blog/2015/library-frameworks/) via [xyzzy](http://blog.xyzzyapps.link)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W3/thinking-together.html#2025-04-17T13:55:29.637Z)


A good comparison can be Qt vs Skia.



I agree with most claims of this essay. However, having used many frameworks and after having analyzed why they work well, it boils down to.






* Good documentation
* Multiplatform abstraction behind a standard interface
*  Combine many calls into a simple end point (button->draw in Qt vs drawing a button via Skia)



If these are addressed by libraries, then libraries with simple callbacks are much more preferrable to frameworks.



One problem which frameworks and libraries don't address or hide away is state machines.

An app is fundamentally event loop + state machine.



Any framework that you use long enough, you will want to peek into how it is actually handling events and customize it.

# Content

## 🐦 [Aurelien (@Aurelien_Gz) on X](https://x.com/aurelien_gz/status/1911050685468250337?s=46) via [Steve Dekorte](https://dekorte.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W3/linking-together.html#2025-04-14T10:51:40.843Z)


> 🐦 [Aurelien (@Aurelien_Gz) on X](https://x.com/aurelien_gz/status/1911050685468250337?s=46): omg.. this is next level..
> 
> typography meets scifi.. schultzschultz's tools feel like they’re from the future
> 
> ![Tweet Thumbnail](https://pbs.twimg.com/ext_tw_video_thumb/1911050648813998080/pu/img/PtjdioZa7p2zliHt.jpg:large)



## 📝 [Feral Cogitation | David West | Substack](https://profwest.substack.com/) via **Erik Stel**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W3/linking-together.html#2025-04-15T09:55:19.390Z)

A number of interesting reads from a friend and former colleague/partner of mine:


> 📝 [Feral Cogitation | David West | Substack](https://profwest.substack.com/)
>
>Professor Dave West talks about business software development, software, engineering, cognitive science, AI, Mysticism, education, and much more. Click to read Feral Cogitation, by David West, a Substack publication. Launched 2 months ago.



----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)

