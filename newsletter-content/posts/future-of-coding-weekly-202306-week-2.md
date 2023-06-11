<!--
.. title: Future of Coding Weekly 2023/06 Week 2
.. slug: future-of-coding-weekly-202306-week-2
.. date: 2023-06-11 19:14:50 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

👩‍🔬 Communal computing for 21st-century science 👓 Apple Vision 💡 Interface Futures

# Two Minute Week

🎥 [Nette X-Ray: Auto-Highlight Key People, Places &amp; Phrases](https://youtu.be/PVGqkN7n7wQ) via **Pawel Ceranka**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/two-minute-week.html#2023-06-09T11:14:02.872Z)

![Youtube Thumbnail](https://img.youtube.com/vi/PVGqkN7n7wQ/hqdefault.jpg)

This is a relatively simple concept but I think it’s quite powerful.



In Nette  *we try to allow users to grab anything that looks like interesting information*  and then drop it on canvas (we will turn it into the right type of blocks).



Here we have “X-Ray” 😎

Essentially Named Entity Recognition, which  *adds affordances to recognised phrases* —you can then drop any of them onto the canvas and we’ll try to make a  _Definition_  block out of it.



This is what it looks like 🙂

# Our Work

🐦 [Natalya Tatarchuk 🇺🇦 on Twitter](https://twitter.com/mirror2mask/status/1667757561960103936) via **Wouter van Oortmerssen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/share-your-work.html#2023-06-11T17:58:23.145Z)

Slides from a recent talk of mine (at a game engine/rendering conference, but is actually very much about programming language design/impl as it relates to game engines), video still forthcoming: 

> 🐦 [Natalya Tatarchuk 🇺🇦 on Twitter](https://twitter.com/mirror2mask/status/1667757561960103936): #REAC2023 - the slides from Wouter van Oortmerssen's "[Scripting Language? Engine Language? Why Not Both?](https://enginearchitecture.realtimerendering.com/downloads/reac2023_scripting_language.pdf)" posted - Enjoy!
>
>  ![Tweet Thumbnail](https://pbs.twimg.com/media/FyUQpYcacAEe7QI.jpg:large)

# Devlog Together

💬 [Yair Chuchem](https://twitter.com/yairchu)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/devlog-together.html#2023-06-05T09:03:05.485Z)

Lamdu now elaborates on non-trivial type errors!

In the screenshot several type errors are demonstrated:




* A simple one: Text isn’t Num
* “Occurs check”:  `func func`  means that the type of  `func`  is infinitely  `(((a -> a) -> a) -> a) -> …`  (note it can be done if wrapping in a nominal type to break the loop
* Expand-record when inside record has the same fields. The message here isn’t yet very informative to which field is duplicated. Just says “constraints” for now
* Scoped type variable escape (i.e “skolem”) error. This is equivalent to leaking Haskell’s  `ST`  monad’s  `s`  variable

![Screenshot 2023-06-05 at 11.54.42-fs8.png](http://history.futureofcoding.org/history/msg_files/F05/F05ARKA1C94.png)


💬 [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/devlog-together.html#2023-06-10T12:19:24.980Z)

Just a small clip to show a stress test I've worked on for my new visual programming system.. maybe not super impressive, but at least it is performing better then my old system. It uses purely DOM, svg and css (transforms).

Creating all the nodes from javascript takes still quite long, they do all have different shapes though (using css clip-path).

🎥 [Demo](http://history.futureofcoding.org/history/msg_files/F05/F05BZR59WA0.mp4)

💬 [Oleksandr Kryvonos](https://twitter.com/o_kryvonos)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/devlog-together.html#2023-06-10T21:40:43.257Z)

created basic transpiler from json-AST-C# to C#, I intend to write in this json format and to have code in other languages generated from it, this is in a spirit of Haxe

![Знімок екрана 2023-06-10 о 23.03.08.png](http://history.futureofcoding.org/history/msg_files/F05/F05CALPH1J5.png)

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/devlog-together.html#2023-06-11T20:18:59.177Z)

So the answer to "can you use ProseMirror to generate a WYSIWYG-style editor that adheres to a standard XML schema for statutes" seems to be "yes, but there is a LOT of work involved in making the editing experience remotely acceptable." Normal and debug mode pictured.

![a6fe8c3fdb0227c6.png](http://history.futureofcoding.org/history/msg_files/F05/F05BZCFVBB4.png)

![e76144ba1c76ef9b.png](http://history.futureofcoding.org/history/msg_files/F05/F05C1R50LUC.png)

# Thinking Together

💬 **Sophia Deng**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/thinking-together.html#2023-06-06T21:31:56.751Z)

I'm currently thinking about whether Product Managers (or other non-coder end users) can be able to make direct changes to native product without Engineers.  In the companies I've been at, there's been paper cuts and requests that engineers make to the product, which are time-consuming, tedious and take away from actual product/infra development.



If there are guardrails that Engineers define on certain parts of the product, are there any problems to this idea?  Curious what others think and/or have seen

💬 **Walker Griggs**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/thinking-together.html#2023-06-06T21:55:15.370Z)

I've been working on a specification for better, networked bookmarks.



 *A problem I'm currently facing:*  I share a lot of links. I have a channel on my Slack workspace called #walkers-claptrap where I share anything / everything that I find noteworthy. It's a bit like **#linking-together**. That said, not everyone I share bookmarks with (and short remarks about them) are at work, so I'm frequently duplicating and sharing over multiple lines of communication (texting, social media, slack, etc). Even then, those channels aren't easily traversed and are organized linearly. I don't love sorting things by date when their value isn't directly scoped to time. I'd also prefer to publish some place that I own and syndicate elsewhere, so that rules out Twitter.



 *semi-solution:* The claptrap specification. A graph of links / small notes. The edges are based on relationships or membership with some group. A claptrap MUST be hosted plaintext and MAY be accessed with curl or similar tool (sort of like Carmack's .plan files). A claptrap MAY expose an RSS of updates to syndicate to channels etc. A claptrap MAY reference external claptrap nodes to network / branch beyond the local graph.



Still very much a work in progress. Does anyone have a similar problem; do you have a solution you like? I want to bridge the gap between "personal knowledge base" and "sharing links into the ether"



📝 [Rosie Pattern Engine (Rosie Pattern Language) ](https://rosie-lang.org/doc/rosie.1.html?hidden=true) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/thinking-together.html#2023-06-07T16:10:47.250Z)

I wonder if anyone has tried to use Rosie as a replacement for grep?



IMO, the problem with grep is that it based on regular expressions, whereas PEG is more powerful.  My favourite PEG is Ohm-JS but I am curious about Rosie...



💬 **John Austin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/thinking-together.html#2023-06-07T19:07:38.059Z)

Hey all! I need a tool / stack suggestion. We'd like to track internal metrics for development like build performance stats, build size, source control size, etc. I'd like to be able to see these trends in a graph by date/commit.




* CI tools can do some of this, but they only surface a small, inconfigurable set of metrics. Usually just test failures and build times.
* There are monitoring solutions like Grafana Cloud, Datadog, but these all seem geared towards monitoring servers and cloud systems. They also assume you're ingesting massive amounts of data.



What I really just want is a POST-able URL that I can spit metrics to, and a dashboard with some basic alerting. Is there something like this that exists?

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/thinking-together.html#2023-06-07T20:26:19.523Z)

Attending a conference today and yesterday about Blockly, the visual code editing environment. Big push toward bi-drectionality between code and blocks. For integration with existing code-bases, AI generation, collaboration with people not using visual editors, etc. At least two different approaches being investigated or used, and I would be inclined to use a completely different one. They don't realize it, but some of their problems are solved by some of the tools people here are working on. Like how do you make it so that you can generate blocks when the text is in an invalid state? Much easier to just avoid invalid states, like Blockly does! How can you avoid invalid states if the person isn't finished typing, and there are mandatory subnodes in the AST? Much easier to fill holes by default, like Blockly does. Essentially, they can't get to bidirectionality, because the text editing experience is structurally unaware. It's not possible with VSCode, but it is possible with Tylr, or anything that imposes a structure. Even ProseMirror would work better. But there is no need to stop at two concrete syntaxes, if you can sacrifice interface specific details (e.g. whitespace in text, grid position in Blockly), or keep them where they live (linter settings, a database of block locations outside the AST), you can operate directly on the AST in whatever tool you want. Has anyone played with a "headless" AST that could be used that way? It feels like all structural editors need one, particularly if they hope to facilitate collaborative editing. Has anyone tried putting two different coding interfaces over the same shared AST?


💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/thinking-together.html#2023-06-08T06:23:45.866Z)

Has anyone seen controlled natural languages implemented in a structure-aware WYSIWYG XML editor? Is there some reason that wouldn't work?

# Content

📝 [Communal computing for 21st-century science](https://dynamicland.org/docs/2023-04-27-Communal-computing-for-21st-century-science.pdf) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/linking-together.html#2023-06-05T04:26:48.929Z)

Addendum to the above, [this PDF](https://dynamicland.org/docs/2023-04-27-Communal-computing-for-21st-century-science.pdf) on the Dynamicland site. Starts with a bang.






> Nobody asked for the invention of the graphical user interface. It wasn’t on any national research agenda. There was no demand from users — they were a small cadre of professionals using computing for specialized technical tasks, and accepted command-driven textual interfaces as simply what it meant to use a computer. There was no demand from the public — most people never expected to touch a computer in their lives.

The concepts around directly manipulating information arranged spatially on a screen were invented unbidden by a small group of visionaries, particularly in the research groups of Doug Engelbart and Alan Kay in the 1960s and 1970s. They believed that computing could be more than just number crunching, that it could serve as a medium for all people to see and discuss ideas, if only those ideas could be represented in visible, manipulable forms.



I haven't read the rest of the PDF yet, but it looks to go into a fair bit more detail about their vision for the "21st Century Science Lab" than what was hinted at in the video.

👓 [Apple Vision Pro](https://www.apple.com/apple-vision-pro/) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/linking-together.html#2023-06-05T19:18:34.858Z)

Alright, so we have the above  _visionary_  approach to spatial computing where you can actually touch and feel the computable things, your body is fully present in the computable space — assuming the dream comes true and it ever takes off — versus the now all-too-inevitable [Vision](https://www.apple.com/apple-vision-pro/) where you don't even get to [touch glass](http://worrydream.com/ABriefRantOnTheFutureOfInteractionDesign/), your body is so absent that they have to make a [meta human](https://www.unrealengine.com/en-US/metahuman) out of you. Here's hoping the latter doesn't take the wind out of the sails of the former.



I'm curious to see what sorts of programming tools Apple has come up with for Vision. I'm assuming it'll be the same old Swift, SwiftUI, and Xcode (now in a spatial window), but maybe there'll be some hint of novelty in Reality Composer Pro or some other accessory tooling. But I'm far, far more interested in seeing what we all can come up with.

💡 [Interface Futures: Exploring Potential Futures Through User Interface Design Concepts](https://www.interfacefutures.com) via [Prathyush](https://twitter.com/prabros)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/linking-together.html#2023-06-08T21:34:07.952Z)

Pretty nice website cataloguing futuristic UIs here: [interfacefutures.com](https://www.interfacefutures.com)

Any idea who is behind it?

🛸 [tiles421.lisp - Macintosh Repository](https://www.macintoshrepository.org/54176-tiles421-lisp) via [Jack Rusher](https://twitter.com/jackrusher)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/linking-together.html#2023-06-11T09:38:16.729Z)

“The first version of what would evolve into the world-renowned block-based Scratch programming language.” Mid-90s code base created at MIT using Macintosh Common Lisp 2.0.


💬 [Cole Lawrence](https://github.com/colelawrence)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/present-company.html#2023-06-06T17:00:03.062Z)

Does anyone have suggestions for a snapshot history UX for multi-dimensional data (like Excel, but with more dimensions)? It seems that most implementations for Figma, Google Workspace, and Microsoft Office 365 are pretty basic, but maybe that’s all people expect, so it’s not worth the effort to try to be clever. What do others think? I’d be pretty curious for people to suggest products which were able to “double count” the typical “snapshot” UX by thoughtfully pairing it with another need like audit-ability. For example: Procreate has a way to see the timelapse of changes to a piece of art over time. Or, you could use snapshots as a way to tell a story with data, by selecting interesting snapshots to be used as “key frames” in a presentation.

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/present-company.html#2023-06-09T18:35:27.605Z)

I finally had occasion to try out Obsidian today. Some notes after 5 minutes of use.






* The initial experience is a blank screen without bullets. I thought the outliner view was the #1 selling point of such tools? Do people use Obsidian to write free-form text?
* I can copy a set of nested bullets from Obsidian to LogSeq and it works great. In the other direction, though, Obsidian loses all the nested structure I copied from LogSeq.



Overall the experience has been surprising. The open source clone felt like a more polished onboarding experience than the relatively proprietary and centrally coordinated product. I'm curious if that matches other people's experience.

🕹 [GDC Showcase](https://gdconf.com/showcase) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/present-company.html#2023-06-09T21:44:38.525Z)

GDC (Game Developers Conf) is running a [Showcase](https://gdconf.com/showcase) event at the end of June. They've sent me some codes for free passes — DM me if you want one.

# 🤖

💬 [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W2/of-ai.html#2023-06-05T14:05:58.518Z)


* humans have cognitive limits, 
* e.g. the Magical Number Seven, Plus or Minus Two
* [en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two](https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two)
* does GPT have similar cognitive limits?
* is this a Golden Number? a universal truth? a universal constant?
* is it necessary to arrange information in a hierarchy?
* or, does GPT’s perfect memory change this pattern?

