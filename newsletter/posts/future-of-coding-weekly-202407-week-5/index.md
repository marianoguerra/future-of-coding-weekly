<!--
.. title: Future of Coding Weekly 2024/07 Week 5
.. slug: future-of-coding-weekly-202407-week-5
.. date: 2024-07-28 22:37:34 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎥 Structured editor in a shell 📢 Snap 10 Released 🎥 Toward a Live, Rich, Composable, and Collaborative Planetary Compute Engine

# Two Minute Week

💬 **Marek Rogalski**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/two-minute-week.html#2024-07-26T16:25:59.167Z)

It's now possible to delete objects. Ten months into Automat development may be late but it's better than never. Now I'm working on auto-connections when objects are nearby.

🎥 [Demo](http://history.futureofcoding.org/history/msg_files/F07/F07DUAN4H55.mp4)

💬 [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/two-minute-week.html#2024-07-28T19:03:49.796Z)

I am trying to get my lazer cut box joint generator thing less like a notebook and more like an app. So I have pushed all my observable UI cells into a single cell with a custom layout overlaying a three.js visualisation.

I wrote a new UI tool that allows the UI to be decomposed at runtime, so I can move the (live) ui visualisations to their appropriate place when needed.

🎥 [decomposable ui](http://history.futureofcoding.org/history/msg_files/F07/F07E7E5K630.mov)

# Our Work

📝 [Why Do We Need Operating Systems?](https://programmingsimplicity.substack.com/p/2024-07-19-why-do-we-need-operating?r=1egdky) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/share-your-work.html#2024-07-22T02:34:12.644Z)

>Operating systems are generally thought, by software developers, to be necessary. What do operating systems accomplish? Engine for running code written in the function-based paradigm. Library of pre-fabricated subroutines that could be used in any app.

🎥 [Structured editor in a shell](https://vimeo.com/988536234?share=copy) via [Peter Saxton](https://twitter.com/CrowdHailer)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/share-your-work.html#2024-07-22T18:48:05.310Z)

![Vimeo Thumbnail](https://i.vimeocdn.com/video/1904192537-292dee26363cc8cf566eb5cab1970e4454fe57ce8b2d4b3605d427f2928ca0e3-d_295x166)

I have put my structural editor in a "cloud native" shell. I think quickly writing scripts has more value than quickly writing applications, because applications are normally meant to be around longer.

🕹️ [DendryScope: a static analysis tool for interactive fiction, quests, and dialogue in videogames](https://jazztap.github.io/DendryScope/) via **Jasmine Otto**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/share-your-work.html#2024-07-22T19:51:28.353Z)

I wrote DendryScope, a static analysis tool for interactive fiction, quests, and dialogue in videogames. Given a story written in Dendry, the skein will generate all of the playtraces which match queries such as 'reached the good ending, did not find the thief's treasure, and offended the barkeep'. [jazztap.github.io/DendryScope](https://jazztap.github.io/DendryScope/)



More detail is available in our conference paper, which describes the technical system and documents further use cases. If you're wondering why the tool  _currently_  works on one Dendry game and not all of them, please let me know so I have an excuse to finish the transpiler. [ojs.aaai.org/index.php/AIIDE/article/view/27527](https://ojs.aaai.org/index.php/AIIDE/article/view/27527)

![dendryscope-thumb.png](http://history.futureofcoding.org/history/msg_files/F07/F07DXAC8AQZ.png)

🐘 [a little neovim terminal fiddle](https://mastodon.social/@Ezhik/112830950176229170) via **Ezhik**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/share-your-work.html#2024-07-23T10:45:30.228Z)

do little things count? because i made a little thing. i'm not a big fan of using repls for messing around because i want to go back and redo things all the damn time. recently i caught myself opening a text editor and doing  `~_*watch -n1 some-script*_~`  in a separate window. 



so i went ahead and made a little (vim)script that does just that - it automatically reruns your code as you type. 



it's been pretty convenient for doing little bits of napkin math.   



🎥 [Screen Recording](http://history.futureofcoding.org/history/msg_files/F07/F07D7AYBF39.mp4)


💡 [The Entire History of… Computing?](https://www.patreon.com/posts/108944598) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/share-your-work.html#2024-07-27T23:15:41.615Z)

On this month's FoC bonus episode for Patreon backers, [Jimmy Miller](https://jimmyhmiller.github.io/), [Lu Wilson](https://twitter.com/TodePond), and I recount the entire history of computing.



…from memory. 🤦


# Devlog Together

🌝 [move.lua](https://git.sr.ht/~akkartik/lines2.love/tree/main/item/move.lua#L11-28) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/devlog-together.html#2024-07-22T18:57:53.632Z)

For the past month I've been doing something very unnatural for myself: "throwing the first one away." Going back and rewriting an aspect of a working program just to improve one property of the  _code_  rather than the behavior: eliminating all derived data structures and re-deriving everything all the time in a performant way.



The result is a simpler API that seems applicable to pixel-based editors that use proportional fonts. Basically the problem is: as you do line-wrapping on a screen, how do you deal with interactive operations like clicking at a pixel coordinate or pressing the down arrow (which might result in a scroll). These primitives seem to make the implementation fairly self-evident: [git.sr.ht/~akkartik/lines2.love/tree/main/item/move.lua#L11-28](https://git.sr.ht/~akkartik/lines2.love/tree/main/item/move.lua#L11-28)

💻 [www.holograph.so](http://www.holograph.so) via **Dennis Hansen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/devlog-together.html#2024-07-26T20:18:30.960Z)

Hello- little update on [www.holograph.so](http://www.holograph.so) - formerly known as the [💬 #share-your-work@2024-05-22](https://history.futureofcoding.org/?fromDate=2024-05-19&toDate=2024-05-25&channel=share-your-work&filter=#2024-05-22T21:33:18.853Z)- I am working on performance had had the nerdiest proud moment ever and figured of all people, ya'll would appreciate it.



I built a propagation speed profiler in holograph to test how fast propagation was occurring for a little recursively incrementing loop (in the grey box). Im using a buffer to collect and average the values over time and another buffer to collect and display averages as a chart. You can see the propagation speed and compare it with the total Propagations Per Second (PPS in the top left). Before this work i was at a hard cap of 60 pps and now total pps often gets over 300. Still a long road ahead but it feels like a big win right now 🎉



In any case, this example demonstrates major stuff added since my first post here:




* Get and set shape properties
* Trigger click events
* Dashed arrows that don't fire propagators
* Async functions/fetch/await syntax
* Lots of cool examples to explore- including some made my folk here :)



Hope ya'll enjoyed the update! If ya'll find anything wonky or have ideas let me know !

![ezgif-3-b2fdc5e7db.gif](http://history.futureofcoding.org/history/msg_files/F07/F07ECFZPEJG.gif)

# Thinking Together

📝 [theory of bunches](https://www.youtube.com/watch?v=wgd6MtQHuLQ&list=PLfsVAYSMwskseQbJ242TApAzA7fW83KyH&index=5) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/thinking-together.html#2024-07-27T02:50:44.159Z)

![Youtube Thumbnail](https://img.youtube.com/vi/wgd6MtQHuLQ/hqdefault.jpg)

Prof Eric Hehner's [theory of bunches](https://www.youtube.com/watch?v=wgd6MtQHuLQ&list=PLfsVAYSMwskseQbJ242TApAzA7fW83KyH&index=5) (think of the comma in  `x,y,z`  as a binary operator on bunches) seems very foundational and delightfully elegant. Once you see it, you can't see but think that the way we have handled collections of various kinds (sets, strings, tuples) is ad-hoc and not systematic.



What if we had notation that supported all these structures? 🤔

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07EDFTGLUU.png)

💬 [Dominik Jančík](https://twitter.com/domjancik)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/thinking-together.html#2024-07-27T20:14:57.263Z)

Thought the format may better fit here

> [July 20th, 2024 10:22 PM] hi565: Thank you so much for your feedback <@U0296ACR13M>. It's really interesting to think about the strengths and weaknesses of these different paradigms.
> 
> I would say that with any sufficiently complex application, it comes down to what tooling is available and whether the codebase has consistent standards. I spend much of my day job in more standard code, in complex distributed codebases.
> 
> It's invaluable to be able to use an IDE, navigate through definitions, search across the full codebase, seamless debugging and lately even having the ability to analyze and explain larger parts of the codebase with AI in tools such as Cursor. This all can help understand new code. Using common or at least consistent patterns, good naming and all that stuff will make it easier. It can still involve learning new paradigms, libraries and so on.
> 
> I would say that a lot of the same applies to working in node based environments. With the added complexity of usually having to lay out things yourself, which can absolutely make or break readability - whereas formatters are absolutely standard for text code nowadays. Also, given the lack of standardization in node based tools (yes, it's often nodes, but with so many flavors), each language requires its own IDE, putting a lot of strain on developers to match the mature tooling for text code.
> 
> Still, I find that some types of flows, especially data piping, and some types of use-cases, such as realtime multimedia applications, generally work better for me in visual environments. vvvv gamma (<https://visualprogramming.net/>), which all of Schema is created with, seems to be the closest to a full featured IDE I've come across in visual programming. I've also found that Reactive programming is incredibly intuitive in this environment, compared to C# for instance. Though  it still has some way to go, such as improved tooling for git or multiwindow.
> 
> During development I've certainly had moments where the realtime code update and amazing protocol abstractions made it a joy, while there were others where the tooling and constant tidying needed made me wish for more standard lands.
> 
> Going back to the original point with complexity, In Schema, while theoretically possible, I do not encourage there to be a huge amount of complexity at the same time. First of all, there is a big focus on fairly high level nodes aimed mainly at animation and a good amount of things happening implicitly, such as referencing extents of objects in space. Of course, all this interconnected machinery is its own complexity, even when there may be less "code" to see at a time.
> 
> Secondly, there are a number of ways of switching up parts of the stacks using assigning via Director, layers, groupings, referencing other objects and modifying slightly. With the general idea that you can get a lot of variety by combining and switching around small-ish stacks of blocks.
> 
> Additionally, when you look at a Block based code, which may seem visual, it's actually no more than nested functions, not far from Lisp or any code AST in general.
> 
> Blockly, for instance, is often used to build out regular text code. Though I agree drag and dropping everything is a pretty obnoxious way if you know your way around code.
> 
> As a matter of fact, all of Schema Block stacks can actually be represented as a very succinct YAML (<https://docs.scenic.tools/future-concepts/scenicscript>), which allows for a human readable transfer format, text editing (helpful on terminal devices also), LLM completions and more.
> 
> What the UI in Schema helps with is interfacing with the parameters and providing immediate in-place feedback of the individual data processing steps (similar to TouchDesigner which does this very well). It also providing domain specific overlays such as MIDI mapping or DMX channel output visualization.
> 
> Overall I am trying to strike a balance between the two worlds while finding new ways to interact with code.
> 
> This new Cursor work aims to make the block programming feel as efficient, if not more than, writing textual code, while also making it more accessible and fun with the goal of enabling full game controller support.
> 
> I really appreciate that you find some of these approaches novel :heart:

# Content

📢 [Snap 10.0.0 Released](https://github.com/jmoenig/Snap/releases/tag/v10.0.0) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/linking-together.html#2024-07-25T08:21:19.540Z)

[Snap 10.0.0 Released](https://github.com/jmoenig/Snap/releases/tag/v10.0.0), some highlights:






* Blocks all the way
* Metaprogramming
* New "Code to Blocks to Code" library, translates text code to blocks and vice-versa
* New live coding "performer mode" setting
* Matrix-kernel convolutions
* New LISP-like text syntax for blocks and scripts



Play with it here: [snap.berkeley.edu/snap/snap.html](https://snap.berkeley.edu/snap/snap.html)


🧑‍💻 [Ilograph Interactive Architecture Diagrams](https://www.ilograph.com/) via **Ionuț G. Stan**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/linking-together.html#2024-07-26T06:43:08.548Z)

Zoomable architecture diagrams: [ilograph.com](https://www.ilograph.com/)

>Create interactive system architecture diagrams to document, share, and explain your systems with amazing clarity and detail

🎥 [[PROPL'24] Toward a Live, Rich, Composable, and Collaborative Planetary Compute Engine](https://www.youtube.com/watch?v=74mrJPBIuWU) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/linking-together.html#2024-07-26T17:20:56.469Z)

![Youtube Thumbnail](https://img.youtube.com/vi/74mrJPBIuWU/hqdefault.jpg)

[Toward a Live, Rich, Composable, and Collaborative Planetary Compute Engine](https://www.youtube.com/watch?v=74mrJPBIuWU)






> Addressing the climate crisis poses many computing challenges for a variety of stakeholders, many of whom are not CS experts but rather scientists, policymakers, journalists, and members of the public. In order to solve these challenges there needs to be a large-scale collaborative compute engine that is live, rich, composable, and collaborative. Specifically, we present Planet Hazel, a vision of the Hazel programming environment geared toward planetary computing.


# Present Company

🎥 [Virtual Meetup 3 • July 24, 2024](https://www.youtube.com/watch?v=SoArGq7YFdY) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W5/present-company.html#2024-07-25T01:25:03.344Z)

![Youtube Thumbnail](https://img.youtube.com/vi/SoArGq7YFdY/hqdefault.jpg)

Recording of today's [Future of Coding virtual meetup #3](https://www.youtube.com/watch?v=SoArGq7YFdY)



This one featured a demo of LabView + AI from **@Jim Kring**, a smalltalk-esq browser for Lisp from [Konrad Hinsen](https://khinsen.net/), plus a nice discussion about collaboration within the community led by [Kartik Agaram](http://akkartik.name/about).


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
