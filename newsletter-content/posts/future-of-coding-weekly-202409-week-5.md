<!--
.. title: Future of Coding Weekly 2024/09 Week 5
.. slug: future-of-coding-weekly-202409-week-5
.. date: 2024-09-29 22:50:11 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

✍ Bloom: Optimization-Driven Interactive Diagramming 🔮 The Future of Programming Systems 💬 FoC Bangalore Demos

# Our Work

## ✍ [Bloom: Optimization-Driven Interactive Diagramming](https://penrose.cs.cmu.edu/blog/bloom) via **Josh Sunshine**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/share-your-work.html#2024-09-24T18:46:55.988Z)

We just released Bloom, new way to create interactive diagrams and visual explanations. Creating interactive diagrams usually requires a programmer to write tedious event handling, collision detection, and tree update code. In Bloom, you simply tell the library what properties you want to maintain and the system does the hard work for you. Read [this blog post](https://penrose.cs.cmu.edu/blog/bloom) to see cool example diagrams and learn more about Bloom.

## 💬 [Some demos shown at the FOC meetup in Bangalore](https://history.futureofcoding.org/history/weekly/2024/09/W5/share-your-work.html#2024-09-26T07:21:12.619Z) by **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/share-your-work.html#2024-09-26T07:21:12.619Z)

In this thread: Some demos shown at the FOC meetup in Bangalore yesterday (not everyone has joined this Slack yet):

# Devlog Together

## 💬 [my parser](https://futureofcoding.slack.com/archives/C03RR0W5DGC/p1727029942017819) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/devlog-together.html#2024-09-24T21:14:09.714Z)

It took a couple of days but I've now completely rewritten [my parser](https://futureofcoding.slack.com/archives/C03RR0W5DGC/p1727029942017819) so it can serve both for display and computation duties. Displaying requires keeping track of spaces. Computation requires detecting invalid statements.



Now [💬 #devlog-together@2024-09-18](https://history.futureofcoding.org/?fromDate=2024-09-15&toDate=2024-09-21&channel=devlog-together&filter=#2024-09-18T03:35:09.724Z) can perform computations in (indented) code lines.



Still missing: synchronization between code lines and prose lines. The screenshot for example shows me redundantly defining  `ice_kg = 2`  to provide it to code lines. Also,  `heat_flux`  is computed in code, but not yet filled in the blank space in prose.



I'm continuing to accumulate design principles:




* (generalizing from [before](https://futureofcoding.slack.com/archives/C03RR0W5DGC/p1726811395937989)) Everything is visible and easy to discover, whether it's the formula for a blank or the syntax to define a new blank or how to change colors. Any pattern you see on screen is easy to copy with the keyboard. (The one exception right now is the use of  `|`  characters in blanks and  `/`  in code. Both turn into horizontal lines.)
* What you typed in is saved in the document -- except what you put into blanks in prose. Blanks are not saved, but can override default values defined in code.

![notebook-eval2.png](http://history.futureofcoding.org/history/msg_files/F07/F07NYFM2PC4.png)

## 🔌 [demo.codeflowcanvas.io](https://demo.codeflowcanvas.io/) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/devlog-together.html#2024-09-29T17:21:20.018Z)

Hi, this weekend I spend a lot of time tweaking and improving some stuff under the hood of Code Flow Canvas.. and I finally started building some unit/integration tests for the runtime flow engine as I want to reliably know when a flow is finished. I found some situations with certain node-types (the map and foreach node-types) that had some bugs in it that I didn't notice before. Also when the flow-engine was used in a none DOM environment there was a nasty bug somewhere deep in the system which caused nodes not to be reached... building tests for this really helped and save me some time debugging. All of this is important anyway but especially for the demo that I will give remotely at Live this year, because I don't want to surprise myself and anyone else 😊...



In the attached screenshot you can see a new flow example that I made and hopefully make a video of next week: the K-Means clustering algorithm including visualisation of the clusters and centroids. You can already try it on [demo.codeflowcanvas.io](https://demo.codeflowcanvas.io/) (it's in the examples).

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07PXT3KGDP.png)

# Thinking Together

## 💬 **Declan**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/thinking-together.html#2024-09-23T00:03:32.369Z)

I have lots of functions that map sets of inputs to values - depending on some rules (if branches). Now I want to enumerate all the rules/code paths; it will help me to analyse, optimise, explain, understand.

This can't be new, I guess it should be a thing that's feasible in any functional programming language. Maybe there is a name for this? Or a tool that does this?

I'm thinking about writing something, but it seems like a typechecker like tsc would have a lot of related logic, and if I can I'll experiment using some other friendly tool first. Any tips/references please shout, thanks!


## 💬 **Dany**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/thinking-together.html#2024-09-23T06:31:35.141Z)

Should code completion preselect in the dropdown?

For example, if I write "object.l", this opens a dropdown with "length". Should the length be selected, so pressing "enter", inserts it directly or should I first need to press "down arrow"?

In visual studio, it is not preselect if I write a function, but does preselect for members. Is there some common approach?

## 🔮 [The Future of Programming Systems - four thoughts](https://blog.waleson.com/2024/09/the-future-of-programming-systems-four.html) via **Jouke Waleson**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/thinking-together.html#2024-09-23T07:41:26.414Z)

Not sure if this is the right place to post this and whether this is interesting to this group, but I gave a short presentation last week about the  *future of programming systems*  and curious what you think about it. I wrote it down in a blog post here: [blog.waleson.com/2024/09/the-future-of-programming-systems-four.html](https://blog.waleson.com/2024/09/the-future-of-programming-systems-four.html)



There are four thoughts that I think will shape the future:




* Software development systems have a lot of vestigial parts (left-overs from the way it evolved)
* Understanding is crucial to development, and with the right mediums we can understand the subject much faster
* Most software platforms developed bottom-up, from the silicon, instead of focusing on the needs of the people
* Software is truly different from other technologies in the freedom it gives us, so we can and should invent new abstractions that make things simpler than they are now



This isn't in the post, but I think that in the future we'll see:




* Great integration between design tools, version control, IDEs, databases, monitoring & logging systems.
* High-level concepts as first class systems in the programming systems. Simple examples are an email or phone number type as a database primitive, instead of strings.
* Better reasoning / business logic rules so that IDEs can give feedback on "you are not allowed to store PII in this database".



This way all stakeholders can collaborate and the system can check correctness much better, and we require less discipline/in-depth knowledge from the team members.



I suspect most of these ideas have come by in this community already, but still curious what you think!



## 📝 [Functional Programming Is Letting Us Down](https://open.substack.com/pub/programmingsimplicity/p/functional-programming-is-letting?r=1egdky&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/thinking-together.html#2024-09-24T01:17:32.150Z)

## 💬 **Tomas Petricek**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/thinking-together.html#2024-09-25T21:45:07.881Z)

I've been looking at programming by demonstration recently (somewhat inspired by Pygmalion). There are some nice recent examples of using PbD for things like data wrangling (clean up data, extraction, etc.) and I know some examples for visual things (bar chart) - but I was hoping to use PbD to create something like TODO list app - do people in this group know if there are any systems (recent or ancient) that do something like this?



I actually have a prototype where I can construct adding of new items to the list using PbD (you do a sequence of actions to create and add an item and then you can replay that), but other things are trickier - e.g. to count checked items or to remove items that are completed, there needs to be some way of parameterizing the actions (so that they can be applied to all items) and specifying pre-conditions (so that they only apply to certain items) - I'm really not quite sure how to best do those...


## 💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/thinking-together.html#2024-09-28T17:47:43.136Z)

Today in non-convivial computing experiences: I found out a modern car can get into a state where it won't turn off. And can't be put into neutral (so it can't be towed).


# Content

## 📝 [Conway’s Game of Life implemented in PURE (no scummy Apps Script) Google Sheets](https://docs.google.com/spreadsheets/d/1KAauJp9MiblyAInIbgS2ndc2ArAmnhd1FIODYZEVFHc/edit?gid=1263411346#gid=1263411346) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/linking-together.html#2024-09-24T00:08:19.439Z)


(also related my – admittedly less dynamic – [Cellular Automata Google Sheet](https://docs.google.com/spreadsheets/d/1629UXZ07lVK1-LVR0T7u1RDVKeW4f55K688CAtS5maw/edit?gid=0#gid=0))


## 💬 **Robin Allison**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/linking-together.html#2024-09-25T06:54:58.811Z)

Hey future of coding folks,



I want to advertise the idea of non-abelian spreadsheets. The idea has slowly drifted into the center of my thinking this last year. I'm not sure if its a good idea or not. It kinda depends on how you build on it. So for now I just want to convey the general idea.



Picture in your mind a normal spreadsheet. In some sense it is 'abelian' (commutative) because from any cell going down and then right is the same as going right and then going down. If we make it non-abelian, so the order we go right and down matters, we get something like the picture attached below.



If you tilt your head slightly you may recognize it as the infinite binary tree. So an infinite binary tree is just the non-abelian version of the usual grid-based spreadsheet. The nodes of the tree are the cells. We can also think of finite binary trees as the analogue of tables.



A key feature of regular spreadsheets is the ability to write formulas with relative references. For instance in a regular spreadsheet you can use relative references so a formula always refers to the cell to the right of the given one, and in a tree you can write a formula that always refers to the cell you get by going down and to the right from the given cell.



Another key feature of spreadsheets is that you put stuff in cells! And we do that with trees all the time. For example if we write down the syntax tree for (a+b)*c what we are doing is putting each of the symbols into a cell of the tree.



We can push this analogy to account for all trees (in particular all syntax trees). This tree can't really be visualized because it branches infinitely at each node. It is much easier to describe algebraically. I'll use the term 'free monoid on a set X', which if you aren't in the know just means the set of strings made out of the elements of X regarded as distinct characters. The infinite binary tree, or more precisely the set of nodes of the infinite binary tree, can be described as the free monoid on a two element set {L, R}. e.g. RLL describes the node you get by going right, then left, and then left again. Now let X_n denote a set with n elements and X the disjoint union of the X_n for all n. It suffices to take the free monoid on X.



A reasonable question at this point is what is the interface for an infinitely branching tree? You would think it is even worse than an infinite dimensional grid, which is the abelian version. But if we are restricting ourselves to trees coming from symbolic expressions then for the most part we already have the interface. It is just the symbolic expressions we would have written down in the first place.



I'll leave it at that.

![unnamed.png](http://history.futureofcoding.org/history/msg_files/F07/F07NH9CRN31.png)



## 🍄 [Propagators](https://wiki.futureofcoding.org/Propagators/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/linking-together.html#2024-09-25T20:01:00.365Z)

I created a wiki page about [Propagators](https://wiki.futureofcoding.org/Propagators/) any resource you would add? Do you know of related ideas?


## 🧑‍🎨 [Turnstyle](https://jaspervdj.be/turnstyle/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/linking-together.html#2024-09-26T14:19:41.583Z)

[Turnstyle](https://jaspervdj.be/turnstyle/) is a graphical [esoteric programming language](https://en.wikipedia.org/wiki/Esoteric_programming_language) loosely inspired by [Piet](https://www.dangermouse.net/esoteric/piet.html). Both encode programs as images, however, the similarities end at the syntax level.

Where Piet is really a stack machine in disguise, Turnstyle is an encoding of the (untyped) [Lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus). This allows for building more reusable images at a higher level of abstraction, while still keeping the specification small, making it relatively easy to develop new interpreters.
> 📝 [Turnstyle](https://jaspervdj.be/turnstyle/)
>
>Turnstyle is an graphical esoteric programming language based on lambda calculus.




# Present Company

## 💬 [Jimmy Miller](https://jimmyhmiller.github.io/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W5/present-company.html#2024-09-28T03:43:37.653Z)

Anyone else here going to splash? I know [Ivan Reese](http://ivanish.ca/) and [Lu Wilson](https://twitter.com/TodePond) are presenting. I’ll be attending. Just wanted to see if anyone else is going to 


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
