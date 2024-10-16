<!--
.. title: Future of Coding Weekly 2024/05 Week 1
.. slug: future-of-coding-weekly-202405-week-1
.. date: 2024-05-05 22:47:24 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🏹 Arrow toolkit 🎹 Tone Dome 📝 The cognitive surface of software 📢 FoC Berlin Meetup

# Our Work

🎥 [Introducing autocomplete for canvas](https://youtu.be/r6ls8Gw9MmY?si=JT8VjUvxgcRk9MxP) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/share-your-work.html#2024-04-30T12:37:21.447Z)

![Youtube Thumbnail](https://img.youtube.com/vi/r6ls8Gw9MmY/hqdefault.jpg)

I've been (trying) to build autocomplete for canvas. keen to hear thoughts/ideas from anyone else who's worked on anything similar-ish!


🏹 [Quiver: arrow toolkit for the web](https://github.com/Little-Languages/quiver) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/share-your-work.html#2024-05-01T00:13:21.546Z)

For the last month I've been working on an arrow toolkit for the web, called Quiver 🏹. It's exploring 3 problems:






* What if visual connection could be declaratively expressed in HTML? 
* What if there was a tiny toolkit that enabled all kinds of connection/arrows to be built? 
* How do we break arrows out from spatial canvases and enable them to used on any website?



Currently I'm prototyping some pre-built arrows/connection: curved arrows, orthogonal edges, Xanadu links and hyperedges. But the library is also explicitly designed to be extensible so you can use your own layout algorithms or designs. Part of the extensibility means the ability to easily animate objects along the arrow (for all of those dataflow VPLs out there 😜) or add arbitrary labels/annotations to arrows.



Given that connection is probably one of the most commonly used relationships in visual programming systems, I'm curious if there are any other types of arrows or functionality you would find useful in your own projects? Its not published to NPM yet, but the repo is [here](https://github.com/Little-Languages/quiver).

![quiver.gif](http://history.futureofcoding.org/history/msg_files/F07/F0718E6CQJ2.gif)

🎥 [Screen Recording](http://history.futureofcoding.org/history/msg_files/F07/F0710H1P9RD.mov)




💻 [github.com/bicycle-codes/progress-indicator](https://github.com/bicycle-codes/progress-indicator) via **nichoth**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/share-your-work.html#2024-05-01T06:27:18.011Z)

Another day, another module. Learning some things about web components this time.

🔍 [Exploring Spaces 3.5: Zoomable Number Line](https://vezwork.github.io/polylab/dist/demo/articles/exploring_spaces_3_and_a_half/) via **Elliot**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/share-your-work.html#2024-05-03T18:56:58.104Z)

I made a zoomable number line 🙂 

![Screenshot 2024-05-03 at 2.56.38 PM.png](http://history.futureofcoding.org/history/msg_files/F07/F071HFPCPDM.png)


🐟 [Draw dead fish](https://drawdeadfish.com/) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/share-your-work.html#2024-05-04T23:27:08.948Z)

I made a new experimental tool where you have to draw dead fish

[drawdeadfish.com](https://drawdeadfish.com)

# Devlog Together

🎹 [tonedome.surge.sh](https://tonedome.surge.sh) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/devlog-together.html#2024-05-01T00:48:29.120Z)

Ink & Switch are having a hack week, and I'm working on a generative sound project. You can check out the current version (likely to change as the week progresses) here: [tonedome.surge.sh](https://tonedome.surge.sh)



It sounds a little different every time you run it, but it's also synced to the system clock. So if you run it on, say, every device you own and scatter them around the room, it creates a rather neat immersive aural space.



Would appreciate any bug reports, especially on Android!

# Thinking Together

📝 [Bloatware](https://guitarvydas.github.io/2024/04/27/Bloatware.html) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/thinking-together.html#2024-04-29T09:35:12.740Z)

preliminary musings on bloatware

📝 [The cognitive surface of software](https://science-in-the-digital-era.khinsen.net/#The%20cognitive%20surface%20of%20software) via [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/thinking-together.html#2024-04-30T15:19:28.887Z)

Trying to name a concept: [The cognitive surface of software](https://science-in-the-digital-era.khinsen.net/#The%20cognitive%20surface%20of%20software)

Has something similar already been discussed, or at least introduced?

📝 [intro post](https://futureofcoding.slack.com/archives/CC2JRGVLK/p1714619157913519) via **Assaf**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/thinking-together.html#2024-05-02T22:54:52.856Z)

I'm exploring strategies to enable scientists (biologists in pharma) without computational expertise be able to interact with big data more intuitively. My ultimate goal is to have users ask biological questions, and the system to generate and execute analytical workflows utilizing existing methods from the scientific domain to answer these questions with data visualizations,

I evaluated the non-interpretable and inaccurate "chat your data" LLM solutions. I'm currently thinking about the possibilities of developing/using a DSL as intermediary output prior to code generation to make the process more interpretable. I am also considering what would be the most efficient abstraction strategies of the analytical functionalities/libraries in certain biological domains to improve the accuracy of the outputs (of the higher level strategy and the actual code). I would love to brainstorm about these problems offline/online. Here's my [💬 #introduce-yourself@2024-05-02](./?fromDate=2024-04-29&toDate=2024-05-05&channel=introduce-yourself&filter=#2024-05-02T03:05:57.913Z) for a bit more context about me.

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/thinking-together.html#2024-05-03T21:52:38.564Z)

I am once again looking at pages of notes I wrote three years ago attempting to find a way to declaratively diagram concurrent legal processes so as to illuminate the steps available to the parties as the process unfolds. I feel like I have something worth exploring, but to illustrate it I need a diagramming language that allows me to nest nodes inside of one another, and draw edges that originate and terminate at arbitrary depths of nodes. DOT won't let you draw an arrow starting at the edge of a subgraph, and doesn't have any way of nesting actual nodes, for example. Is anyone aware of a text-based graphing language that will let me nest objects and draw edges between arbitrary depths?

# Content

🚜 [International Workshop on Functional Art, Music, Modeling and Design](https://functional-art.org/2024/) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/linking-together.html#2024-04-29T13:13:40.894Z)

FARM (aka ACM SIGPLAN International Workshop on Functional Art, Music, Modeling and Design) is taking place in Milan, Italy this year, September 2nd. The call for papers, demos and performances is open, deadline June 1st.

[functional-art.org/2024](https://functional-art.org/2024/)

🐦 [Tweet from @OrionReedOne](https://twitter.com/OrionReedOne/status/1784871153787420920) via **Marek Rogalski**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/linking-together.html#2024-04-29T17:15:53.740Z)

Here is an interesting 2.5D experiment for those who like the canvas approach. I'm pretty sure it could have some practical applications. [2D canvases have a whole dimension spare....](https://twitter.com/OrionReedOne/status/1784871153787420920)

🎥 [Demo](http://history.futureofcoding.org/history/msg_files/F07/F0715TMBNHG.mp4)



🎥 [Tomorrow Corporation Tech Demo](https://youtu.be/72y2EC5fkcE?si=MI2T1IME2SH3OCjp) via [Chris Maughan](http://www.chrismaughan.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/linking-together.html#2024-04-29T18:53:25.041Z)

![Youtube Thumbnail](https://img.youtube.com/vi/72y2EC5fkcE/hqdefault.jpg)

The tooling here is next-level.  Bret Victor would be proud

🎥 [Laurie Spiegel - Waveshaper TV Ep.6 (Part 1 of 3: Bell Labs)](https://www.youtube.com/watch?v=zLd1RUDmX6w) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/linking-together.html#2024-05-01T08:19:33.798Z)

![Youtube Thumbnail](https://img.youtube.com/vi/zLd1RUDmX6w/hqdefault.jpg)

👁️ [Vyaakaran - Visualize automata, parsers, grammars for free](https://vyaakaran.vercel.app/) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/linking-together.html#2024-05-01T17:13:51.566Z)

Really good Automata and formal language visualizer:

> 📝 [Vyaakaran - Visualize automata, parsers, grammars for free](https://vyaakaran.vercel.app/)
>
>Visualize automata, parsers and formal languages right on the browser in an easy to use interface with Vyaakaran.

🎥 [Resonite VR November 2023 (Content Showcase)](https://www.youtube.com/watch?v=GXetjTQhd2g&amp;t=1103s) via [Duncan Cragg](https://twitter.com/Duncan__Cragg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/linking-together.html#2024-05-03T18:06:03.106Z)

![Youtube Thumbnail](https://img.youtube.com/vi/GXetjTQhd2g/hqdefault.jpg)

I've been following Resonite - ex-NeosVR - for a while now, but for some reason I never thought to link it here, perhaps because it's mostly about social VR. But it has an interesting 3D in-world programming system

🐦 [Hieu :rocket: (@hieuSSR) on X](https://x.com/hieuSSR/status/1786270259206668643) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/linking-together.html#2024-05-04T02:01:21.929Z)

Design principles of SQL from it’s creator


> 🐦 [Hieu 🚀 (@hieuSSR) on X](https://x.com/hieuSSR/status/1786270259206668643): Inventor of SQL talks about how they come up with the language


# 🤖

💬 **Naresh R**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/of-ai.html#2024-04-29T16:31:36.844Z)

I've been thinking about this tweet from John Carmack (who created Doom), and just generally about a future where AI does most of the coding and I'm managing AI - and... I hate it? It's not to say that I don't see this happening. There's a ton of capital flying around to make it happen, and I think end-users will inevitably gain the capability to build certain categories of simple, customised software.



But as someone who has deeply loved the practice of programming for more than a decade, the future that GitHub (who - in the midst of me writing this - launched Copilot Workspace), Devin, and the rest are painting seems to be leaving out so much of nuances that comes with building anything non-trivial. I absolutely love the idea of operating at a higher level of abstraction (just like how I enjoy writing modern programming languages compared to C or assembly) and getting my ideas/work out faster. But not spending my entire day just asking AI to do things or reviewing code all day - which makes me wonder: how do developers even get good at reviewing code if they aren't spending a ton of time writing code and problem solving? What's the right level of abstraction in this "promised future" that lets me get into the nuances of building software for anything non-trivial and continue problem solving in general? This is perhaps not even a question, and just a general thought I've been thinking a lot about.

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F070R3MQK71.png)



# Present Company

💬 [J. Ryan Stinnett](https://twitter.com/jryans)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/present-company.html#2024-05-01T15:24:39.904Z)

I am looking around for tools / frameworks / UI patterns that are roughly of the shape "spreadsheet with editable computation pipeline". What do people know of that's in that category?



To clarify, I realise spreadsheets alone can achieve computation... but I am thinking more of projects where the computation is a bit more "visual" than just formulas in cells, perhaps like a nodes or blocks environment that then feeds into a table / spreadsheet to display data. **@Paul Shen**'s Natto is one such example of the kind of thing I am thinking of. There might be other ways to do this beyond just a series of nodes that feed into a table... I'm curious to see what else might be out there already. I wonder if there are projects in the data analysis / computational science spaces that might fit...?



Apologies if my question is too vague, I'm still trying to work out what I'm even looking for. 🙂



💬 [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W1/present-company.html#2024-05-03T11:37:59.561Z)


> [April 10th, 2024 8:20 PM] mariano: :loudspeaker: Future of Coding Berlin Meetup: Show and Tell + Walk and Talk on June 1st!
> 
> We are organizing an informal meetup the day after <https://www.localfirstconf.com/> in Berlin, the idea is to meet early in the day somewhere TBD, do a show and tell and then if you are willing go for a walk through Berlin stopping for food/drinks/resting every now and then.
> 
> If you are interested send me a DM with your email (will only be used to share updates and info about this), the places are limited so please contact me as soon as possible.




----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
