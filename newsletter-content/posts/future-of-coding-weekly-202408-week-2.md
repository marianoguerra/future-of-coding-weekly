<!--
.. title: Future of Coding Weekly 2024/08 Week 2
.. slug: future-of-coding-weekly-202408-week-2
.. date: 2024-08-11 23:43:25 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

📔 Userspace notebook editor ⛏️ Bootstrap post-collapse OOP technology 🔌 cables.gl is now open source

# Two Minute Week

💬 **Marek Rogalski**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W2/two-minute-week.html#2024-08-09T15:39:05.156Z)

This week I've implemented serialization format for machines built in Automat. Simple JSON file (pretty-printed) stored next to the executable. Turns out its quite handy during interactive development. And also opens the way for regression testing. Restoring the window state was (surprisingly) the hardest challenge (due to DPI and monitors) and I didn't manage to correctly persist it. Both on Linux and Windows, the window managers just don't want to share some of the window properties... (especially around window tiling)

🎥 [Demo](http://history.futureofcoding.org/history/msg_files/F07/F07G79SSBPF.mp4)

📔 [observablehq.com/@tomlarkworthy/userspace-editor](https://observablehq.com/@tomlarkworthy/userspace-editor) via [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W2/two-minute-week.html#2024-08-10T14:43:21.759Z)

What would it take to make an open source front end to the Observable Runtime? One where you have control over the runtime and layout and are free from iframe sandbox restrictions?

🎥 [open-notebook](http://history.futureofcoding.org/history/msg_files/F07/F07GAJ8495K.mov)

# Our Work

⛏️ [Bootstrap post-collapse OOP technology (Part 1)](https://marianoguerra.org/posts/bootstrap-post-collapse-oop-technology-part-1/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W2/share-your-work.html#2024-08-09T10:29:00.459Z)

>  How do we preserve the ability to program OOP through civilizational collapse?

![2024-08-09_12-25.png](http://history.futureofcoding.org/history/msg_files/F07/F07G8KB1475.png)

![2024-08-09_12-26.png](http://history.futureofcoding.org/history/msg_files/F07/F07G23V1JKG.png)

# Devlog Together

💬 [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W2/devlog-together.html#2024-08-05T05:36:47.656Z)

Got the visual design of the wiki mostly fleshed out. Fluid layout, one breakpoint that moves elements around for smaller screens, light and dark modes, nice keyboard nav, etc etc. Thoroughly documented too, since I figure some folks might want to peek at the css but aren't up on all the new weird stuff you can do.



Also, I'll be eating my hat now: everyone who scolded me for attempting to parse a markdown-like syntax with Regex, well, yeah, it kinda stinks. Not sure what to do about this, given the values I'd like to impart in this project. Since it's not a blocker on writing pages, I think I'll ship it half-finished and we can talk about it. This feels like a great area to draw on the wisdom of the crowd.



Markdown or not, we'll still need a build script, I reckon, unless we want to  ~_*require*_~  that anyone adding a new page also add their page to any relevant indexes — since, I reckon, we'll need some indexes just to get through the early phase where the wiki will be sparsely interconnected. To start, I'm thinking one index of broad categories (or maybe tags, dunno), and then another that's just a list of all pages. But if anyone has strong feelings about the right way to do this, I'm at least 75% ears.

# Thinking Together

📝 [How I program in 2024](http://akkartik.name/post/programming-2024) via [Andreas S](https://twitter.com/curious_reader)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W2/thinking-together.html#2024-08-05T10:28:07.265Z)

[Kartik Agaram](http://akkartik.name/about) is that your blog?

# Content

🔌 [cables.gl](http://cables.gl) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W2/linking-together.html#2024-08-06T06:16:25.602Z)

The [cables.gl](http://cables.gl) visual programming language for making cool WebGL shaders was just [open-sourced](https://cables.gl/standalone).

💬 **Beni Cherniavsky-Paskin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W2/linking-together.html#2024-08-11T20:37:26.404Z)


* Just found [Mr. 4th Programming Conversations](https://conversations.mr4th.com/) podcast which mentions multiple FoC topics 🍰.  Visual programming, Bush & Englebart...
* [Developer Voices](https://pod.link/developer-voices) podcast is maybe less 1:1 match but interviews many developers building new/experimental/visionary languages.



# 🤖

💬 **Mark Dewing**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W2/of-ai.html#2024-08-07T16:37:31.713Z)

We now have two examples of systems that can turn text descriptions into code - humans and LLMs.  And we don't understand how either of them works.

📝 [No apps no masters](https://interconnected.org/home/2024/08/09/no-apps-no-masters) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W2/of-ai.html#2024-08-09T17:31:24.596Z)

# Present Company

💬 **Dany**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W2/present-company.html#2024-08-10T07:25:05.524Z)

So I have this c/c++ codebase, around 116,000 lines of code. A full release compilation takes 6:25 minutes. Not too bad to work on.



If I break this down, a single line of c/c++ code takes 0.0033s (3.3 miliseconds). For comparison, a game that runs at 60 fps, draws a new frame in under 16 miliseconds. So while a game simulates and renders a frame, a c/c++ compiler compiles 5 lines of code. That is usually not even a single function.



My cpu avarages at around 10 instructions per clock cycle. At 3.6Ghz it can do 3.6 * 10 * 1,000,000,000 instructions on each core, per second. That's 36,000,000 per milisecond, on 8 cores.. but let's add some cache misses, any instructions can either go full speed 1x or go to main memory around 200x slower.

We are looking at around 5 million instructions per milisecond.



If we print out (9pt font) all instructions executed to compile a single line of c/c++ code, we'd end up with over 6 kilometer long paper.





----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
