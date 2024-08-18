<!--
.. title: Future of Coding Weekly 2024/08 Week 3
.. slug: future-of-coding-weekly-202408-week-3
.. date: 2024-08-18 23:38:54 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎥 A structured, type safe and web native shell 🐸 Arroost: Unblocking creation with friends 🔌 Nodes & wires experiments

# Two Minute Week

🎥 [Draw a Triangle to a Window](https://www.youtube.com/watch?v=ItitokeXx6c) via **Dany**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W3/two-minute-week.html#2024-08-13T12:18:26.256Z)

![Youtube Thumbnail](https://img.youtube.com/vi/ItitokeXx6c/hqdefault.jpg)

Hello Triangle!


# Our Work

🎥 [A structured, type safe and web native shell.](https://vimeo.com/997719570?share=copy) via [Peter Saxton](https://twitter.com/CrowdHailer)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W3/share-your-work.html#2024-08-12T20:42:55.007Z)

![Vimeo Thumbnail](https://i.vimeocdn.com/video/1913862209-758e00e32ee5a2fe70bb082eed05ce7d5fcea6eae68cab1ea9dfb360b0d4b349-d_295x166)

This video is a break from my normal log. This time I assume no previous knowledge and try to show what I thing a structured, type-safe and web-native shell should look like.

🪜 [Bootstrap post-collapse OOP technology with Wasm GC (Part 2)](https://marianoguerra.org/posts/bootstrap-post-collapse-oop-technology-with-wasm-gc-part-2/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W3/share-your-work.html#2024-08-15T13:28:26.576Z)

🪜 Bootstrap post-collapse OOP technology with Wasm GC (Part 2)



A raw WebAssembly (Text Format) implementation that bootstraps a compact object-oriented language in itself



~1500 lines of WAST, 5.8KB compiled to Wasm

🐸 [Arroost: Unblocking creation with friends](https://www.todepond.com/report/arroost/) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W3/share-your-work.html#2024-08-16T20:04:20.620Z)

My submission to LIVE just got accepted. Here it is!



Please read and share and let me know what you think


# Devlog Together

💬 [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W3/devlog-together.html#2024-08-18T03:09:22.028Z)

Not an exhaustive test, but the gemtext superset / markdown subset is coming along. The parser is really simple. I need to style blockquotes and code blocks (like… at all), and improve the styling on other elements. Also need to document this subset. But hey, getting closer.

![Screenshot 2024-08-17 at 9.05.00 PM.png](http://history.futureofcoding.org/history/msg_files/F07/F07HA586C8M.png)

![Screenshot 2024-08-17 at 9.07.45 PM.png](http://history.futureofcoding.org/history/msg_files/F07/F07HD1U0PDG.png)



🗺️ [the FoC starmap](https://futureofcoding.slack.com/archives/C5T9GPWFL/p1724009682290899) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W3/devlog-together.html#2024-08-18T19:47:26.556Z)

Quick aside on "the making of" [💬 #thinking-together@2024-08-18](https://history.futureofcoding.org/?fromDate=2024-08-15&toDate=2024-08-21&channel=thinking-together&filter=#2024-08-18T19:34:42.290Z). I've been reading Christopher Alexander's "The Nature of Order". I'm 250 pages (so 1/8th of the way) in, but I tried to make each node (problem statement) a "center" as CA defines it.



Initially I wanted distances to be meaningful but I couldn't see a way to make it work, so they're mostly meaningless (except for a couple of nodes with very few edges). Instead I ended up focusing on angles. I tried to make every edge unambiguously go to a specific node, and this had the effect of improving use of all 360 degrees around every node.



I started out putting myself in the center, but eventually realized it was better to start with people who had the most 1s and 2s (for the most part the only edges shown in these graphs).

![FoC-starmap3-1.png](http://history.futureofcoding.org/history/msg_files/F07/F07H7GW2SNS.png)

[🧵 read more...](https://history.futureofcoding.org/history/weekly/2024/08/W3/devlog-together.html#2024-08-18T19:47:26.556Z)

# Thinking Together

🔌 [ Writing software without a programming language ](https://www.youtube.com/watch?v=qM2mtAPEmd4) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W3/thinking-together.html#2024-08-15T10:46:10.309Z)

![Youtube Thumbnail](https://img.youtube.com/vi/qM2mtAPEmd4/hqdefault.jpg)

I’ve been pointed at the Kronark YouTube channel which is only a few days old and purports to show how to build software using nodes.



Several things jump out at me: (1) nodes do NOT need to return a value (unlike functions, which must always return something ; does the need to return something lead to bloat???) (2) undefined behaviour is allowed (does over-defining of ALL behaviour lead to bloat???) (3) encapsulation and abstraction - 0D defines Container components which encapsulate and elide layers, 0D does this encapsulation at runtime ; Kronark compiles out encapsulation at compile time (AOT). I feel uneasy about this, when taken to the extreme. Maybe 0D should be described as“structured concurrency” (???) Whereas Kronark is just more-of-the-same linear composition (???) that works in a feed-forward, single-threaded manner. It will be interesting to see examples of concurrency and feedback in Kronark. (FTR, “feedback” is not the same as “recursion”).

🗫 Final-ish state of problem statements and reactions by [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W3/thinking-together.html#2024-08-18T19:34:42.290Z)





Also, a final-ish personal visualization of the "star map of FoC". All the caveats and disclaimers [💬 #thinking-together@2024-08-04](https://history.futureofcoding.org/?fromDate=2024-08-01&toDate=2024-08-07&channel=thinking-together&filter=#2024-08-04T18:23:55.688Z) continue to apply.



I'll post some even more personal comments and critiques of people's responses and the whole process in comments. I hope it provokes comments and reflection from others.



I'm looking forward to putting this up on the [FoC wiki](https://futureofcoding.slack.com/archives/CEXED56UR/p1723509401438699) in some form.

🗒️ [problems.html](http://history.futureofcoding.org/history/msg_files/F07/F07HDT9NGUA.html)

![FoC-starmap4-4.png](http://history.futureofcoding.org/history/msg_files/F07/F07H7GGBLDU.png)


# Content

🤖 [The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery](https://sakana.ai/ai-scientist/) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W3/linking-together.html#2024-08-13T04:32:58.660Z)

Curious to see how this  `Fully Automated Open-Ended Scientific Discovery`  thing unfolds


🔌🧮 [They turned MATH into a factory game...](https://youtu.be/s5GTnqOxe8k?si=stw2VE4oXPp3fE2b) via [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W3/linking-together.html#2024-08-13T23:04:27.206Z)

![Youtube Thumbnail](https://img.youtube.com/vi/s5GTnqOxe8k/hqdefault.jpg)

Saw *Beltmatic" and thought of Hest. 😅 

🔌🐦 [@KennedyRichard@fosstodon.org (@KennedyRichard)](https://twitter.com/KennedyRichard/status/1824197928040173783) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W3/linking-together.html#2024-08-17T10:29:19.436Z)

Spaghetti-code polemics aside – how cute!

> 🐦 [🦣 @KennedyRichard@fosstodon.org (@KennedyRichard) on X](https://twitter.com/KennedyRichard/status/1824197928040173783): @KenneyNL No guys, hear me out, we might be onto something here! What about tracking eyes that become happy when the connection is reached out? (also in Nodezator's dev branch)
> 
> 
> ![Tweet Thumbnail](https://pbs.twimg.com/tweet_video_thumb/GVDZXUXX0AAM-F7.jpg:large)

# 🤖

📝 [The Turing Test and our shifting conceptions of intelligence](https://www.science.org/doi/10.1126/science.adq9356) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W3/of-ai.html#2024-08-16T01:26:56.814Z)

Good short article by Melanie Mitchell


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
