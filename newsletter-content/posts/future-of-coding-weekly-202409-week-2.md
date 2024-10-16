<!--
.. title: Future of Coding Weekly 2024/09 Week 2
.. slug: future-of-coding-weekly-202409-week-2
.. date: 2024-09-09 09:59:35 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

📢 PAINT & Causal Islands Berlin 💻 Decode: an augmented coding canvas 🎥 Roboco-op: mimetic engineering

# Two Minute Week

💬 **Marek Rogalski**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/two-minute-week.html#2024-09-02T22:54:58.390Z)

Working on performance improvements now. Getting some [nice visual effects thanks to uninitialized memory.](http://history.futureofcoding.org/history/msg_files/F07/F07K5QJ25NK.mp4)

# Our Work

🧑‍🔬 Account of the research project we’re doing at JetBrains by **Pavel Mikhailovskii**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/share-your-work.html#2024-09-04T07:55:52.259Z)

Hi everyone!



I’d like to give an account of the research project we’re doing at JetBrains.

It is called Ludwig after Ludwig Wittgenstein and has an ambitious goal of re-engineering the foundations of the software development stack.

At the moment, we are still at a very early design and prototyping stage, but we believe that this project will let us create the next generation of development tools.



Here are the most important ideas we’re trying to materialize:



 *Liberation of code from the shackles of textual representation* 

Human-readable textual notations were a great innovation back in the 1950s. However, we have made great progress in the ways we store complex data structures since then, and the typical codebase sizes have also grown by a few orders of magnitude.



Code is essentially a graph with one tree-like perspective more important than others. An adequate way of storing such complex and evolving data as code would be to put it in a versioned graph / linked document database, supporting Git-like branching and merging. That would get rid of the need for continuous parsing, indexing, symbol resolution and typechecking that constitute the code editing workflow in modern IDEs.  We would resolve symbols once, at the moment of typing and store their unique identifiers (not just names!) in an indexed by construction and preserving referential integrity database.



That would also make such intentions as Rename, Move, Find Usages or Go To Definition trivial to implement. Of course, structural representation of code will come hand-in-hand  with structural (semantic) diff and merge.



This graph-like representation should allow for a fine-grained tracking of changes and dependencies and dramatically reduce feedback times in such scenarios as incremental compilation.



 *A minimalist approach towards programming language design* 

To prevent our language from becoming “fat and weak” as John Backus has put it in his famous [lecture](https://dl.acm.org/doi/pdf/10.1145/359576.359579), we want to pass our language through a series of aggressive optimization rounds or distillation passes.



This should result in something comparable with Smalltalk’s “syntax on a postcard”. Actually, we believe that we could make it even more symmetric by eliminating the distinctions between methods, named and anonymous functions, operators and statements. (As you know, Smalltalk has different syntaxes and different behavior of return statements for methods and blocks and “surprising” execution order rules for different kinds of messages).



The goal is to come up with a language that would be easy to learn and read and straightforward to reason about for all kinds of agents-be it humans, static analysis tools or AI.



In terms of notation, it will look like an indentation-based syntax for a tiny subset of Lisp, but without its macros or the zoo of “special forms”. Being freed from the limitations of plain text, we’re going to use semantic coloring to make the notation even more expressive and compact.



Obviously, our programming language, as any other, should be able to express computation logic and code structure; what is less common is that we also want it to be able to express data, configurations and knowledge, thus eliminating the need for additional DSLs. A YAML-like data notation emerges from our tiny language as naturally as JSON emerged from JavaScript. The only difference is that JSON was discovered by chance, and our language is consciously designed to be able to declaratively describe complex data structures.



 *Unification of Object-Oriented and Functional programming* 

As a part of our minimalist program, we are aiming to heal the great schism that divided programming into the object-oriented and the functional worlds.

 We believe that the class-free approach in the form [proposed](https://youtu.be/DxnYQRuLX7Q) by Douglas Crockford will let us make OOP an integral part of functional programming, thus converging the two into what could be called unified programming. This form of OOP will keep the best parts—encapsulation and polymorphism and get rid of the "considered harmful" implementation inheritance.  There will be no need for classes, constructors, prototypes, visibility modifiers, this and new - just immutable structures and anonymous functions.



 *An IDE designed for focus and context awareness* 

We want to build an immersive Smalltalk-like environment with structural navigation, a smaller editing scope and richer and more dynamic context compared to the traditional file- and text-based IDEs. This seems well-aligned with both the minimalist design of the language and the non-textual storage format. The latter should allow us to store some additional information alongside the code. That will include all kinds of metadata, normally invisible to the users, but also some unusual forms of embedded content. Think of a documentation comment containing a video explaining the algorithm or a discussion between multiple developers linked to a certain place in the code.



 *Smart typing* 

We also have some ideas on how we could implement some smart typing techniques, combining the convenience of automatic type inference with the solidness and discipline of explicit type annotations.

The key idea is that the flexibility of the non-textual representation will eliminate the need for the user to choose between the two worlds. Manual annotations can be hidden to reduce visual distraction, automatically inferred types can be displayed and persisted in the code database, etc.



 *Designed to be AI-fitting* 

Finally, we want the whole thing to be future-proof and provide better support for AI-aided development compared to the traditional languages. The simplicity of the language as well as its fine granularity and its property of always having all the symbols resolved should allow for high-quality “understanding” and retrieval-augmented generation of code compared to such languages as Python or Java.



***



As I said, at the moment we’re still at a very early stage. Many of our challenges are not technical, but about finding the way of how we could shape this set of ideas into a product vision. We are, of course, open to collaboration with like-minded people.



I will be happy to answer your questions and hear your feedback.

> 🎥 [code::dive 2017 – Douglas Crockford – The better parts](https://youtu.be/DxnYQRuLX7Q)
>
> ![code::dive 2017 – Douglas Crockford – The better parts](https://i.ytimg.com/vi/DxnYQRuLX7Q/hqdefault.jpg)




💬 **Jarno Montonen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/share-your-work.html#2024-09-06T12:13:10.441Z)

Added tabular data and document template import to my notebook demo so now it can be used to fill/generate documents from csv/spreadsheet rows. Would any of you find something like this useful? I know there are a bunch of document generators, but the ones I've seen seem kinda crappy. Happy to hear about experiences using any of the existing solutions and why they suck though 😆.

🎥 [Document Generation](http://history.futureofcoding.org/history/msg_files/F07/F07L925PQN7.mp4)

📝 [About - The Parallel Reality Computer](https://duncancragg.substack.com/about) via [Duncan Cragg](https://twitter.com/Duncan__Cragg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/share-your-work.html#2024-09-08T14:11:20.701Z)

Hiya folks, now that many of you have been digging in to Dynamicland's website for a bit and are in the right frame of mind, I was hoping that you may have had your neurons tickled in just the right ways to be open to reading about a project with some similarities: mine! 🤗



So I updated my About page, and I was hoping that it's now short and accessible enough to be just the info needed for you to "get" what my project is all about:



📝 [About - The Parallel Reality Computer](https://duncancragg.substack.com/about)


💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/devlog-together.html#2024-09-05T02:17:23.000Z)

Still lots missing, but [check this out.](http://history.futureofcoding.org/history/msg_files/F07/F07KTFXV45C.webm)

Lol, look at how it renders hyperlinks. This isn't going to be useful without some sort of delimiter or fence around math.

![fractions-bug.png](http://history.futureofcoding.org/history/msg_files/F07/F07LD4W9PQV.png)


# Thinking Together

🪼 [Physics of JellyCar: Soft Body Physics Explained](https://m.youtube.com/watch?si=VpS2zmWQgoVUkvid&v=3OmkehAJoyo&feature=youtu.be) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/thinking-together.html#2024-09-03T03:05:46.830Z)

![Youtube Thumbnail](https://img.youtube.com/vi/3OmkehAJoyo/hqdefault.jpg)

What are ways we can make computation more squishy with soft-body physics? Most visual notations are overwhelmingly rigid and structured!


# Content

💻 [Decode](https://getdecode.dev) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/linking-together.html#2024-09-03T15:59:33.701Z)

[Decode](https://getdecode.dev) — a new tldraw-based augmented coding canvas tool from **@Francois Laberge**

📝 [Situated Computations: Bridging Craft and Computation in the Trinidad and Tobago Carnival](https://www.researchgate.net/publication/342855224_Situated_Computations_Bridging_Craft_and_Computation_in_the_Trinidad_and_Tobago_Carnival) via **Jasmine Otto**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/linking-together.html#2024-09-03T21:20:30.511Z)

a paper from an architectural journal that combines an ethnography with a sculptural grammar ('situated computations').

🧦 [dynamicland.org](https://dynamicland.org/) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/linking-together.html#2024-09-04T14:35:53.288Z)

I hear [dynamicland.org](https://dynamicland.org/) will update sometime today..

💡 [Donate to dynamicland](https://dynamicland.org/donate/) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/linking-together.html#2024-09-04T21:55:15.501Z)

Somewhat buried in the new DL webpage — you can now directly [donate](https://dynamicland.org/donate/) to support their work. This is absolutely the sort of thing I'd back on Patreon, so I'm glad to see they offer those sorts of $n/month options.

📝 [The Canary](https://www.washingtonpost.com/opinions/interactive/2024/michael-lewis-chris-marks-the-canary-who-is-government/) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/linking-together.html#2024-09-05T05:09:24.078Z)

No coding here, but this is fantastic.



[The Canary](https://www.washingtonpost.com/opinions/interactive/2024/michael-lewis-chris-marks-the-canary-who-is-government/)






> And yet even now his father hovered in the background both as a rhyme and a presence. The careers of both men had been redirected by a simple question posed in a college class. Both spent their lives measuring the stress in stone. Both used scientific methods to answer questions that had seemed to everyone else beyond the reach of science. Both sought to understand what prevented roofs from collapsing. The father’s work had received a lot of public attention and the son’s had not. But that was just an accident of what people cared about. A lot of people cared about Gothic cathedrals; fewer were concerned with whatever was happening to workers deep underground.


📢 [PAINT: Programming Abstractions and Interactive Notations, Tools, and Environments](https://2024.splashcon.org/series/paint) via **Beni Cherniavsky-Paskin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/linking-together.html#2024-09-05T20:50:16.344Z)

Looking at SPLASH '24 program, I knew [LIVE](https://liveprog.org) workshop is always very relevant (this year majority of lectures involve folks here); but also found [PAINT](https://2024.splashcon.org/series/paint) which sounds great too 👀




> In the workshop on Programming Abstractions and Interactive Notations, Tools, and Environments (PAINT), we want to discuss programming environments that support users in working with and creating notations and abstractions that matter to them. We are interested in the relationship between people centric notations and general-purpose programming languages and environments. How do we reflect the various experiences, needs, and priorities of the many people involved in programming — whether they call it that or not?

Areas of interest to PAINT include but are not limited to:


* Design and implementation of program representations and their means of interaction for end-users of all ages
* Design and implementation of visual programming environments
* Block-based environments and their application
* Projectional editors and their application
* Languages and their environments with mixed notations
* Meta tools or tool creation frameworks
* Methods to support working with abstractions, such as example-based programming
* Input and output devices for interacting with programming environments
* Theories of the above

PAINT format is flipped, kinda critical review, and not recorded IIUC.  But the past papers look interesting.

📝 [A note on the PERQ computer](https://graydon2.dreamwidth.org/313862.html) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/linking-together.html#2024-09-07T14:29:44.991Z)

A fun little rollercoaster of computing history shared in [this short blog post](https://graydon2.dreamwidth.org/313862.html) by Graydon Hoare, looking at the lesser known Xerox Alto descendant, the PERQ.

📢 [Causal Islands Berlin](https://berlin.causalislands.com/) via [Orion Reed](https://twitter.com/OrionReedOne)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/linking-together.html#2024-09-07T15:38:24.618Z)

The [Causal Islands Berlin](https://berlin.causalislands.com/) conference (organised by me, Boris Mann, and Jack Rusher) is happening next month (Oct 4 & 5). Would love to see some of you there. It'll be quite small (100-ish capacity) but loaded with great talks and conversations. We'll also be doing a more full-size conference in May next year. The vibes are "future of computing" and "spiritual successor to Strange Loop" with a more socio-political bent.



Also, there is a [CfP](https://causalislands.getgrist.com/forms/4n86BCQeVyR3EsBMEDqjTK/7) up if you want to submit a presentation!


🧑‍💻 [To Write Code: The Cultural Fabrication of Programming Notation and Practice](https://ianarawjo.com/docs/To_Write_Code_Arawjo_CHI2020.pdf) via **Joel Chan**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/linking-together.html#2024-09-07T18:44:24.210Z)

greetings! am thoroughly enjoying [the latest podcast episode on agentsheets](https://futureofcoding.org/episodes/073), and the discussion of “is programming a Language(TM)” and the history of how it came to be that programming was considered language in the sense of “has a formal grammar” reminded me of this paper by Ian Arawjo on the history of programming notation and its cultural referents (e.g., typewriters, and how it moved away from more “visual” forms and converged around “programming as typing on a typewriter”: [To Write Code: The Cultural Fabrication of Programming Notation and Practice](https://ianarawjo.com/docs/To_Write_Code_Arawjo_CHI2020.pdf)



i found the resulting frame of programming as translation work of “mapping one culture to another” provocative too!

![CleanShot 2024-09-07 at 14.41.31@2x.png](http://history.futureofcoding.org/history/msg_files/F07/F07KZFYA5U7.png)

![CleanShot 2024-09-07 at 14.43.59@2x.png](http://history.futureofcoding.org/history/msg_files/F07/F07LE2V8D1Q.png)



# 🤖

💬 **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/of-ai.html#2024-09-03T04:01:21.046Z)

TIL:

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07KZPXHKT3.png)

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07KM4A5GSE.png)


🎥 [Roboco-op explainer](https://www.youtube.com/watch?v=8cNRZUZSSS8) via [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W2/of-ai.html#2024-09-06T14:26:18.361Z)

![Youtube Thumbnail](https://img.youtube.com/vi/8cNRZUZSSS8/hqdefault.jpg)

I thought I had shared roboco-op here but it seems I had not. The idea is to mix code/runtime/chat context into a single materialised human editable representation to enable "mimetic engineering". Copy and pasting "skills" between notebooks and therefore engineering the AIs context to suit the task at hand, all while having a machine checked code based conversation (I demoed this at Berlin's GenAI meetup) withou context switches.





----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
