<!--
.. title: Future of Coding Weekly 2023/09 Week 3
.. slug: future-of-coding-weekly-202309-week-3
.. date: 2023-09-17 23:06:54 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

💾 Riffle: Reactive Relational State 🪜 Prolog Meta-interpreters 💻 Deploy Functions as Services

# Two Minute Week

🎥 [A Visual Summary — Entity Graph](https://youtu.be/zwEIYtG_KrI) via **Pawel Ceranka**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/two-minute-week.html#2023-09-16T16:54:52.945Z)

![Youtube Thumbnail](https://img.youtube.com/vi/zwEIYtG_KrI/hqdefault.jpg)

We’re experimenting with different ways of summarising information visually.

This a simple one where we get ‘named entities’, group and lay them out as a tree.

(other categories can be added of course based on anything that an LLM can produce)


To me at least there are couple of interesting things in this space:

-  *interactions* 

  - pagination (done!), sorting, filtering, (re-) moving of the nodes

  - bidirectional connection to the source (e.g. navigating to a particular mention in the parent block,) and canvas (drag and drop of the nodes to expand on canvas)—cf. the video

-  *multiple sources + analysis & comparison* 

  - e.g. a graph that answers the question of what are some common themes, ideas, entities in two pieces of information (e.g. a video lecture and a webpage)

-  *tools for extending the graph* 

  - by search

  - by generative AI

  - by custom/manual annotations



I would of course be very grateful for comments on any of the above 🙏



Wonderful weekend to you all 🍹

🎥 [Save and Seal CodeParadise image](https://youtu.be/9YUXYuo_HaM) via **Erik Stel**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/two-minute-week.html#2023-09-17T17:00:29.238Z)

![Youtube Thumbnail](https://img.youtube.com/vi/9YUXYuo_HaM/hqdefault.jpg)

CodeParadise is a (Pharo) Smalltalk project to create web applications using Smalltalk only (and HTML/CSS 😉).

A tiny Smalltalk image runs inside the browser and performs all the UI logic. Normally applications created with CodeParadise have a highly interactive character and communicate with a server environment.



A new feature allows a running tiny image to be saved and restarted later as a Single Page Application. A sealed snapshot is made, meaning the connection with the server environment is removed. All code running inside the browser (in the tiny image) is saved in the snapshot as well as the current DOM. After the snapshot is restarted the application will create the same DOM structure and rehydrate the WebComponents and you'll have a running application again!



For a short video see: [youtu.be/9YUXYuo_HaM](https://youtu.be/9YUXYuo_HaM)

Or go to the resulting SPA at: [codeparadise.nl/blog-example](https://codeparadise.nl/blog-example) (open the browser inspector to see all the WebComponents)

Happy coding!


# Our Work

🎥 [Build and deploy as continuations](https://vimeo.com/863287985) via [Peter Saxton](https://twitter.com/CrowdHailer)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/share-your-work.html#2023-09-11T20:10:20.939Z)

![Vimeo Thumbnail](https://i.vimeocdn.com/video/1722450723-bb52d86e353456d24c765329e1047be03d640401901a1cee49aa162a0946ba8c-d_295x166)

Latest update from my project.  This has finally got me to the point where I can consider deployment as just passing continuations from a build script to a server. The same is true for a client just being a continuation from the server. I think I need a better name for what I'm doing. In this is the video I try and explain it.

💻 [Unison: A new approach to Distributed programming](http://unison-lang.org) via **Stew O'Connor**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/share-your-work.html#2023-09-13T06:21:29.504Z)

at [unison-lang.org](http://unison-lang.org) we're getting ready to open up the ability for users to easily deploy any function from  `HttpRequest -> HttpResponse`  as a web service. here's a simple example of what one might look like: [stew.unison-services.cloud/s/dice-roll](https://stew.unison-services.cloud/s/dice-roll/)


🎥 [UI Combinators / Regular UI Expressions](https://www.youtube.com/watch?v=5VMiwcWHzEs) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/share-your-work.html#2023-09-15T15:33:27.072Z)

![Youtube Thumbnail](https://img.youtube.com/vi/5VMiwcWHzEs/hqdefault.jpg)

🧬 UI Combinators: express complex UIs by composing a small set of combinators and terminals



🌳 Combinators: Option, Alternatives, List & Record



🍁 Terminals:  Int, Float, Bool, ConstantSet (select), Text, Color, Date, Time etc

# Devlog Together

🐦 [Chris Rabl on X](https://x.com/crabl/status/1702559962545709140?s=20) via [Chris Rabl](https://twitter.com/crabl)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/devlog-together.html#2023-09-15T05:50:09.020Z)

Re-hashed a prototype from wayyyy back and iterated on it (two demo videos [in the thread](https://x.com/crabl/status/1702559962545709140?s=20))

>There's something to be said for letting ideas "marinade"... I was working on an outline today and that got me thinking about the Layered Text prototype I built almost 3 years ago (link in the :thread:). With a little encouragement from @niveor, I decided to give it a go:

🎥 [visual flow: traffic light](https://youtu.be/mIfs9Axqeic) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/devlog-together.html#2023-09-17T09:19:29.662Z)

![Youtube Thumbnail](https://img.youtube.com/vi/mIfs9Axqeic/hqdefault.jpg)

Hi,

I am working on a visual programming system to allow for combining multiple visual programming paradigms and not just flow-based-progamming. Finally I've made enough progress to my project to make a small video of it again: [🎥](https://youtu.be/mIfs9Axqeic). 

In the video you see a very simple statechart for a traffic light including the visualisation and other needed logic (it also has timers, gates, splitters, a html-node with support for expression-script and a bit more). The traffic light also shows a countdown when the light is red and will countdown to 0 and show a green light again.. all still very simple offcourse.

In the video you can see that the running of the flow is also being shown by those animated elements which move through the flow... since I want to prevent "spaghetti", I've created some node-types that allow for triggering other nodes without having a physical connection. Currently it's not clearly visible (except by text) which nodes are invisibly connected to what node, but I have some ideas on how to improve that. But that's for another video.

The upcoming months I want to focus on improving the UI, interaction and fix bugs to be able to put this online somewhere so it can be tried out and I hopefully can collect some feedback.  

Greetings, Maikel

# Thinking Together

💬 **Patrick Connolly**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/thinking-together.html#2023-09-15T17:32:45.437Z)

hey all! i was at a future of coding meetup maybe 6 months ago (at Newspeak in London UK), and someone gave an amazing presentation showing what I think was a  *collab drawing tool that continuously scrolling* , which I think used some sort of service to handle  *websockets*  between a lot of ppl. Anyone recall this and have any hints on  *what this tool, services or person was called* ??? THANK YOU


# Content

💾🎥 [Geoffrey Litt: Riffle - Reactive Relational State (Local-First Meetup Berlin #1)](https://youtu.be/zjl7CpG9h3w?si=93Ih3xlL7fGurs2Y) via **Marcelle Rusu (they/them)**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/linking-together.html#2023-09-12T17:08:17.243Z)

![Youtube Thumbnail](https://img.youtube.com/vi/zjl7CpG9h3w/hqdefault.jpg)



Local-first has got me actually optimistic for future of mainstream app dev. 



So much complexity arises from the many client - 1+ server architecture. 

📕 [CS 6120: Advanced Compilers: The Self-Guided Online Course](https://www.cs.cornell.edu/courses/cs6120/2023fa/self-guided/) via **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/linking-together.html#2023-09-13T12:08:02.686Z)

Has anyone checked this out? [CS 6120: Advanced Compilers: The Self-Guided Online Course](https://www.cs.cornell.edu/courses/cs6120/2023fa/self-guided/)






> It covers universal compilers topics like intermediate representations, data flow, and “classic” optimizations as well as more research-flavored topics such as parallelization, just-in-time compilation, and garbage collection. The work consists of reading papers and open-source hacking tasks, which use  [LLVM](https://llvm.org/)  and [an educational IR invented just for this class](https://capra.cs.cornell.edu/bril/).

🛸 [Why Fennel? Fennel is a programming language that runs on the Lua runtime.](https://fennel-lang.org/rationale) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/linking-together.html#2023-09-13T20:02:26.441Z)

📝 [Alienation, Marvelous Pursuits and the New Nomadic Sciences](https://theanarchistlibrary.org/library/anonymous-alienation-marvelous-pursuits-and-the-new-nomadic-sciences) via **Devine Lu Linvega**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/linking-together.html#2023-09-14T20:41:13.515Z)

On Unity

🎙️ [EP03: Alternatives to Modern Programming Languages with Ramsey Nasser and Jon Corbett – Fission](https://fission.codes/blog/causal-islands-podcast-ep03-alternatives-to-modern-programming-languages/) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/linking-together.html#2023-09-16T04:59:58.848Z)

> This month, we are joined by special guests Ramsey Nasser and Jon Corbett to discuss their work creating Arabic and Cree programming languages, respectively.


> For episode 3 of the Causal Islands Podcast, we are joined by special guests Ramsey Nasser and Jon Corbett to discuss their work creating Arabic and Cree programming languages, and what they learned in the process.

# 🤖

🪜🎥 [Prolog Meta-interpreters](https://www.youtube.com/watch?v=nmBkU-l1zyc) via **Devine Lu Linvega**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/of-logic-programming.html#2023-09-16T01:37:19.965Z)

![Youtube Thumbnail](https://img.youtube.com/vi/nmBkU-l1zyc/hqdefault.jpg)

Excellent talk on meta-interpretation in Prolog




💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/of-ai.html#2023-09-17T06:08:25.584Z)

Apart from things like the langchain and hugging face blogs, does anyone have any good resources for the latest tools and techniques for LLM prompt engineering? I need to bone up, this week.

# Present Company

🍰 [Don't Do Math](https://spiralganglion.bandcamp.com/track/dont-do-math) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/present-company.html#2023-09-12T01:29:19.512Z)

Some personal news: I just released my first new song in 9 years. You can [listen to it here.](https://spiralganglion.bandcamp.com/track/dont-do-math)



Can I find a way to make this even vaguely relevant to you, members of the FoC community, other than merely the personal connection we share? Why yes! It's a song about meaning and interpretation, things that I love thinking about when programming and detest thinking about when creative writing. I had to pick some subject, thus: what's something wryly confrontational I can say to all my programmer friends? Don't do math! Stop it. Don't think about it. Don't look for meaning. Stop formalizing, stop proving. Stop saying "easy to reason about".



For those who enjoy this sort of thing, the song is also loaded with music-math "jokes" — collect them all! Microtones, time signature changes, polyrhythm, polymeter, isometer, hocketing, … I even count-in at the beginning (and yes, the first bar comes in waaay early).



Enjoy.

🌱 [An approach to computing and sustainability inspired from permaculture - Strange Loop](https://www.thestrangeloop.com/2023/an-approach-to-computing-and-sustainability-inspired-from-permaculture.html) via **Devine Lu Linvega**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W3/present-company.html#2023-09-13T21:00:44.141Z)

Working on my slides for the [strange loop talk](https://www.thestrangeloop.com/2023/an-approach-to-computing-and-sustainability-inspired-from-permaculture.html) right now.

I'm not sure how relevant to FoC it is, as it's a tiny bit more like.. the past of coding, but I'm pretty excited for it, the slides are encoded in a little slideshow scripting language I made up, for a program(Adelie) written in my favourite language in the world, running on a system built from garbage held together with strings and duct tape! Should be fun : )

>Strange Loop (Sep 21-Sep 22, 2023 - St. Louis) is a conference for software developers covering programming langs, databases, distributed systems, security, machine learning, creativity, and more!

![ss.jpg](http://history.futureofcoding.org/history/msg_files/F05/F05SXKVHYEL.jpg)

