<!--
.. title: Future of Coding Weekly 2026/01 Week 3
.. slug: future-of-coding-weekly-202601-week-3
.. date: 2026-01-25 20:27:35 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

📝 The Blurry Boundaries Between Programming and Direct Use 🎙️ Feeling of Computing 79 • The Computer is a Feeling 🎥 Verbs vs Nouns: The Word Order That Shaped User Interfaces

📢 Hi! I'm in Argentina for 2 months and brought my "travel machine" and forgot to sync some stuff, enjoy the retro/broken/late newsletters until I find time to fix it :)

# Our Work

## 📝 [The Blurry Boundaries Between Programming and Direct Use](https://feelingofcomputing.slack.com/archives/CCL5VVBAN/p1767851065489519) via [Joshua Horowitz](https://twitter.com/qualmist)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2026/01/W3/share-your-work.html#2026-01-13T09:32:21.815Z)

Here’s my other PLATEAU paper (first was [here](https://feelingofcomputing.slack.com/archives/CCL5VVBAN/p1767851065489519)):



 _*Technical Dimensions of Live Feedback in Programming Systems*_ 




> While live feedback plays an important role in many interactive programming systems, its design space remains largely unmapped, making it difficult to discuss and build on the wide range of designs explored by past systems. As a first step towards establishing this map, we present six dimensions that can be used to characterize and evaluate live feedback in programming systems: granularity, reactivity, velocity, moldability, bidirectionality, and materiality. 



 (This is my presentation from LIVE 2024, written up and extended and polished.)



PDF version attached below; I might make an HTML version someday but who knows.



I’d appreciate hearing any feedback, reactions, questions, etc.!

📄 [feedback.pdf](http://history.futureofcoding.org/history/msg_files/F0A/F0A8S4FLH4Z.pdf)




---

## 💬 [Joshua Horowitz](https://twitter.com/qualmist)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2026/01/W3/share-your-work.html#2026-01-13T09:33:05.908Z)



![Screenshot_2025-12-20_at_1.21.13_AM.png](http://history.futureofcoding.org/history/msg_files/F0A/F0A8B5T64UE.png)


---

## 🎙️ [Feeling of Computing #79 • The Computer is a Feeling by Tim Hwang and Omar Rizwan](https://feelingof.com/episodes/079/) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2026/01/W3/share-your-work.html#2026-01-14T21:49:45.058Z)

[Feeling of Computing by Ivan Reese and Jimmy Miller and sometimes others, episode 79 • The Computer is a Feeling by Tim Hwang and Omar Rizwan](https://feelingof.com/episodes/079/)



This paper… is not a paper. What is it, other than a paper? Name the medium!



A relatively short list of points generally on the theme of… the Computer is a Feeling.



As Ivan wrote over on the Feeling of Computing website:






> This piece makes us question what the computer means in our lives, and how that may have changed over time. Light on specifics and arguably steeped in nostalgic yearning, its series of declarative statements come out more like broadly probing questions. Is the computer feeling possessed only by those who remember the time before the internet? Are computers even required? What does 
>  _feeling this feeling_ 
>  elicit one to do?



Yeah, I have no idea either.



---

## 📝 [Building Software by Rolling the Dice: A Qualitative Study of Vibe Coding](https://www.researchgate.net/publication/399166870_Building_Software_by_Rolling_the_Dice_A_Qualitative_Study_of_Vibe_Coding) via **Yi-Hung Chou**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2026/01/W3/share-your-work.html#2026-01-16T23:14:54.057Z)

Hi everyone! This is my first time sharing my work here, and I’d love any feedback or future research ideas. Please let me know if my work is relevant to this community. I really enjoy seeing all the cool programming tools shared here!



I've been curious about “vibe coding” recently, so I invited some researchers and my friends to watch YouTube videos to study their behaviors. We tried not to assume it’s good or bad, and just want to understand what actually happens in practice. (Some of our co-authors thought it would democratize programming, but some of us, like me, thought it was irresponsible lol.) In our study, we saw that people often deal with long wait times and unpredictable AI behavior, making the process feel a bit like “rolling the dice.” We also noticed a lot of prompt repetition, with some vibe coders, especially those without programming experience, spending nearly 40% of their prompts just rephrasing the same thing with no new information to get the AI to behave as expected. Our work has been accepted to FSE 2026. Below is our preprint. Let me know what you think!



[researchgate.net/publication/399166870_Building_Software_by_Rolling_the_Dice_A_Qualitative_Study_of_Vibe_Coding](https://www.researchgate.net/publication/399166870_Building_Software_by_Rolling_the_Dice_A_Qualitative_Study_of_Vibe_Coding)



# Devlog Together

## 💬 [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2026/01/W3/devlog-together.html#2026-01-17T17:31:54.034Z)

My velocity is increasing quite a lot now, and bugs are much easier to fix. I had a problem that code changes by the inline markdown editor (or by AI) were not picked up by the code editor; its state lagged. I seeded Robocoop context with the  `change history` ,  `inline md editor`  and  `code editor`  notebooks, and asked for a fix, which it one shotted, and now all the editors are in sync by reusing the change-history trick of listening to runtime for code changes.

Architecturally this is very pleasing to me, none of the editors know about each other, they are all triggered from runtime-is-the-source of truth, and thus are radically decoupled and I can add additional methods of code authoring (doesn't have to be text based!) without having to do any plumbing to all the others. Multiple views of the same thing!

🎥 [live-editing.mov](http://history.futureofcoding.org/history/msg_files/F0A/F0A9CGNAM3L.mov)

# Content

## 🎥 [Verbs vs Nouns: The Word Order That Shaped User Interfaces](https://www.youtube.com/watch?v=jP5PQ8ix7JE) via [Orion Reed](https://twitter.com/OrionReedOne)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2026/01/W3/linking-together.html#2026-01-13T09:30:00.328Z)

![Youtube Thumbnail](https://img.youtube.com/vi/jP5PQ8ix7JE/hqdefault.jpg)

I am 5 minutes into [Verbs vs Nouns: The Word Order That Shaped User Interfaces](https://www.youtube.com/watch?v=jP5PQ8ix7JE) and enjoying it quite a bit, especially excited that the channel has a dozen videos which seem super high quality with only a few hundred views so I'm excited to have a new source of FoC-adjacent video essays which are sadly very rare.



EDIT: huh the [author](https://x.com/mskayyali) follows me on Twitter maybe he is in this Slack?
> 🎥 [Verbs vs Nouns: The Word Order That Shaped User Interfaces](https://www.youtube.com/watch?v=jP5PQ8ix7JE)
>
> ![Verbs vs Nouns: The Word Order That Shaped User Interfaces](https://i.ytimg.com/vi/jP5PQ8ix7JE/hqdefault.jpg)



---

## 📝 [Show HN: Blah — a blah-blah programming language](https://news.ycombinator.com/showlang) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2026/01/W3/linking-together.html#2026-01-14T04:32:38.809Z)

Hacker News moderator 'dang' put together an index of all the [Show HN: Blah — a blah-blah programming language](https://news.ycombinator.com/showlang) posts and all the [The Blah Programming Language](https://news.ycombinator.com/thelang) posts.



I bet there'd be at least a handful of discoveries to be had by spending an afternoon giving each of them a browse.



---

## 📝 [corca.app](https://corca.app/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2026/01/W3/linking-together.html#2026-01-16T13:33:15.062Z)

[corca.app](https://corca.app/)






>  *People still do math on paper.* 
>  We believe there is a better way.



We are building a 
>  *fast, intuitive* 
>  
> [math editor](https://corca.app/signup)





---

## 📝 [Board – The First Ever Face-to-Face Gaming Console](https://board.fun/) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2026/01/W3/linking-together.html#2026-01-16T19:53:06.125Z)

New tangible computing system: [board.fun](https://board.fun/)
> 📝 [Board – The First Ever Face-to-Face Gaming Console](https://board.fun/)
>
><http://Board.fun|Board.fun> — the official site for the Board Console. Board fuses the best of board games and video games into something entirely new. A 24” face-to-face gaming console that brings everyone together to play.



---

## 📝 [A deep dive into ASCII rendering](https://alexharri.com/blog/ascii-rendering) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2026/01/W3/linking-together.html#2026-01-18T18:50:37.552Z)

[A deep dive into ASCII rendering](https://alexharri.com/blog/ascii-rendering)



[Ivan Reese](http://ivanish.ca/) there's a plot twist you'll appreciate by the end, I think.

# 🤖

## 📝 [Robocoop-2](https://observablehq.com/@tomlarkworthy/robocoop-2) via [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2026/01/W3/of-ai.html#2026-01-14T09:33:09.939Z)

I was asked to compare my AI notebook coding assistant [Robocoop-2](https://observablehq.com/@tomlarkworthy/robocoop-2) to Observable Desktop coding assistant and Claude Code. My findings are on the forum.



[talk.observablehq.com/t/roboco-op-notebook-coding-assistent/9809/8](https://talk.observablehq.com/t/roboco-op-notebook-coding-assistent/9809/8)







----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)

