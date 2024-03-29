<!--
.. title: Future of Coding Weekly 2024/03 Week 3
.. slug: future-of-coding-weekly-202403-week-3
.. date: 2024-03-18 14:09:39 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🚀 codeflowcanvas.io 🎥 Collective Problem Solving in Music, Science, Art... 🦠 Demon horde sort

# Our Work

🚀 [codeflowcanvas.io](https://codeflowcanvas.io) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/share-your-work.html#2024-03-17T08:54:31.072Z)

Yes, the time has finally come! I'll share a link to my visual programming project online! I've been mainly showing some video's on the devlog channel about the project.



Warning upfront: Although I've been working on this for quite some time (I even started from the ground up last year after working on my previous visual programming project for multiple years).. there's still a lot of work to be done and bugs to be fixed. The UI/UX is far from perfect but it is demo-able enough I think. However, it's still just in "demo-stage" and not usable by other projects (I haven't build any npm packages for integrating or vs-code extension for example).



My goal is to make a generic visual programming system (VPS) with which domain or application specific vpl's can be made. For now I am implementing 2 vpl's on top of the current base: a flow-based-programming inspired system and a "visual shader-toy".



Since the tool is an infinite canvas, you can zoom and drag the canvas using mouse/wheel/touchpad. I've spend some time getting touchscreen support, but more work definitely needs to be done there.



When you open up one of the editors, you can use the dropdown in the top-menu to load an example flow.



Without further ado, here's the link: [codeflowcanvas.io](https://codeflowcanvas.io) : there are 2 demo playgrounds in which you can play around.



I'll post some more details in the 🧵.



Thanks for some feedback!

# Devlog Together

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/devlog-together.html#2024-03-12T17:13:39.920Z)

A little thing like an 'edit' button introduces cascading issues:






* LÖVE (in combination with mobile restrictions) won't let me modify code files in place. I have to overlay my changes in a new location.
* But now I can't pick up any upgrades to my app. Upgrades modify code files in place, but any overlay persists (otherwise you'd completely lose your changes after upgrading).
* But hey I have a programmable editor here! I'll just create a new file called 'scratch' with a one-liner to blow away the overlay. (With my app user's hat on, I know in this case my changes are minor in a way that I don't with my app developer's hat on.)
* (A few hours later.) Wait, now none of my changes are having any effect. And they're completely blown away when I go back to the code.
* 🤦 Oh it's that 'scratch' file still hanging around. So it needs to be a 2-liner. I have to make any changes I want to the file system -- and then delete 'scratch' to make this a one-time operation.
* I could try to create a screen of helpers for this, along with a comment that says, "insert file system operations here" after which is a delete of 'scratch'.



In this way I find myself playing meta-Sokoban.. 🙄



Tl;dr - the 'edit' button isn't really usable yet.

I  _really_  don't want to go down the road of building a compare and merge flow 🙄

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/devlog-together.html#2024-03-13T09:57:36.501Z)

Simple shortest-path routing to reduce some of the drudgery in Sokoban. Integrated with undo.



Next up: routing while pushing a single crate without moving any other crates. That feels more complicated than this glorified breadth-first search. In particular, I'm not yet sure how to detect cycles. Moving a crate can involve being in the same place over and over again. I think I need to hash the player's location in combination with the crate's location 🤔

🎥 [sokoban empty path](http://history.futureofcoding.org/history/msg_files/F06/F06NVCX4T1V.webm)

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/devlog-together.html#2024-03-14T15:29:35.780Z)

My solver can now push a single crate to a destination without moving any other crates. But I feel ambivalent about this. Devlog in 🧵

🎥 [sokoban solver](http://history.futureofcoding.org/history/msg_files/F06/F06PN2WJYJY.webm)

# Thinking Together

💬 **Stephen De Gabrielle**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/thinking-together.html#2024-03-13T11:40:19.429Z)

Does a  ~_*parametric IDE*_~ exist? 

I’m not sure if this makes sense, but I’m thinking similar to Parametric CAD tools(&sketchpad), but for code?



Maybe making use of type annotations, contracts, interfaces, etc. at  ~_*edit-time*_~  (instead waiting for  ~_*compile-time*_~ or  ~_*run-time*_~ ).


💬 **Kongwei Ying**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/thinking-together.html#2024-03-15T12:15:01.802Z)

Another concept I've been ideating about is how to bring Literate Programming, by Donald Knuth, into my daily work, which involves modern tools and stacks like VSCode and Node.js. I believe inline, rich text snippets which are integrated with some kind of personal knowledge management system is the way to go. This way, instead of having comments like this:



// TODO: Refactor this to use the revised approach



It instead would look like using Notion or Obsidian inside VSCode. So above a function, would be a small window into a single page that describes a single function. You can do anything here, like linking references that are relevant to the design of the function. Or you could even have a lengthy design document that explains why a function was written a certain way. Going even further, you could have a page which describes the evolution of a function over time, why at the beginning it was written a certain way, why changes had to be made, and why it looks the way it looks right now.



And added bonus of this approach is that now it's possible to have a single source of truth for docs and your code. So rather than maintaining a separate Docusaurus that has to be updated to sync it with evolution in code, you can just maintain documentation in line. And then to publish developer docs online, you merely just take all the little snippets above each function and then aggregate them onto a single page.

Basically, this approach is powerful because instead of 1D strings of text, now you can have the power of rich text in your code. Including diagrams, and even embedding other programs through <iframes> would be possible. And when your code needs to be compiled, all these rich text snippets are simply removed.

# Content

📝 [Accessibility Has Failed: Try Generative UI = Individualized UX](https://www.uxtigers.com/post/accessibility-generative-ui) via **Dave Liepmann**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/linking-together.html#2024-03-12T09:49:47.337Z)

Jakob Nielsen asserts that accessibility has failed to serve disabled users because of a mistaken focus on standards. This approach is unable to address the wide variety of disabilities, and because it is by definition a derivative of a GUI, it is doomed to provide a second-class experience to e.g. blind users. He points out differing needs by older and less literate users, and proposes generative UI as a promising solution.


I was skeptical of the headline and tweet-length summaries. There has been not-insignificant backlash. The full article leaves me still skeptical but certainly willing to see where the idea of bespoke-to-one's-needs UIs could take us.

🎼 [cmajor.dev](https://cmajor.dev/) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/linking-together.html#2024-03-12T23:17:12.081Z)

> You’ve heard of C, C++, C#, objective-C… well, Cmajor is a C-family language designed specifically for writing DSP signal processing code.



They have a JIT engine, but it also compiles to WASM so it can run on the web. This means old synths can be ported to run on the web!



[cmajor.dev/docs/Examples/Pro54](https://cmajor.dev/docs/Examples/Pro54/)

🎥 [RubyConf 2019 - Keynote - Collective Problem Solving in Music, Science, Art... by Jessica Kerr](https://www.youtube.com/watch?v=1oeigCANJVQ) via [Oleksandr Kryvonos](https://twitter.com/o_kryvonos)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/linking-together.html#2024-03-13T19:22:40.542Z)

![Youtube Thumbnail](https://img.youtube.com/vi/1oeigCANJVQ/hqdefault.jpg)

this is a great inspirational talk about sharing ideas

📝 [An overdue status update on Darklang](https://blog.darklang.com/an-overdue-status-update/) via **Jeffrey Tao**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/linking-together.html#2024-03-13T20:11:43.210Z)

Haven't checked in on Dark in a few years but it seems they're dropped the custom editing environment, among other changes [blog.darklang.com/an-overdue-status-update](https://blog.darklang.com/an-overdue-status-update/)

>We've been working hard at Darklang for the past year, but haven't been very vocal about what we've been up to.

Here’s the “Darklang” that’s been live for years:

Darklang – the live version, which we're now calling Darklang classic – is a developer tool composed of a few interconnected


📝 [CP 2024 - Choreographic Programming 2024 - PLDI 2024](https://pldi24.sigplan.org/home/cp-2024) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/linking-together.html#2024-03-14T04:59:17.000Z)

A [call for talks](https://pldi24.sigplan.org/home/cp-2024) for the first ever workshop on Choreographic Programming at PLDI this summer. Deadline next Friday.

>Choreographies are coordination plans for concurrent and distributed systems. A choreography defines the roles of the involved participants and how they are supposed to work together. In the emerging paradigm of choreographic programming (CP), choreographies are programs that can be compiled to executable implementations. 
CP originated primarily in the context of process calculi, with preliminary work done to establish its foundations and experiment with implementations. Recently, several proposals have shown that one can adapt CP to work in synergy with mainstream programming paradigms ...


📝 [‹Programming› 2024 - Arts - ‹Programming› 2024](https://2024.programming-conference.org/track/programming-2024-arts#About) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/linking-together.html#2024-03-14T14:36:43.535Z)

I've only just noticed that there  _is_  an arts track at the ongoing <programming> conference this year! awesome [‹Programming› 2024 - Arts - ‹Programming› 2024](https://2024.programming-conference.org/track/programming-2024-arts?#About)

>Step into a world where lines of code dance with strokes of creativity! 
At this year’s edition of the Programming conference, we are opening an Arts track to engage with the idea that art can inform computational practices and their presence in the world. With this track we invite participants of the conference to join a series of presentations and meet with the artists. We hope the Arts track will inspire the programming community to propose artistic projects for future editions. 
Events include: KhipuKoding, a session with live coding by Paola Torres Nunez del Prado; 
 Programming a ...

🦠🎥 [T2 Matrix Brain Challenge T-2 And Counting - T2sday 3148](https://youtu.be/G2HSfOjG_uw?si=FWlpVOvBf0xH7C8y) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/linking-together.html#2024-03-15T10:21:10.185Z)

![Youtube Thumbnail](https://img.youtube.com/vi/G2HSfOjG_uw/hqdefault.jpg)

Update from Dave Ackley (whose essay we talked about on the last episode)



A large part of this video is about some initial work on making the 'demon horde sort' better, which is his proposed robust-first way of doing number sorting

📝 [If What We Made Were Real](https://www.ppig.org/files/2017-PPIG-28th-basman.pdf) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/linking-together.html#2024-03-16T07:03:21.034Z)

“If What We Made Were Real:

Against Imperialism and Cartesianism in Computer Science, and for a discipline that creates real artifacts for real communities, following the faculties of real cognition” by Basman (2020)

# 🤖

📝 [Cognition emerges from stealth to launch AI software engineer Devin](https://venturebeat.com/ai/cognition-emerges-from-stealth-to-launch-ai-software-engineer-devin/) via **Greg Bylenok**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W3/of-ai.html#2024-03-13T17:26:40.893Z)

Is the future of coding just not coding?

>In the SWE-bench test, Devin was able to correctly resolve 13.86% of GitHub issues without any assistance, performing far better than GPT-4.


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
