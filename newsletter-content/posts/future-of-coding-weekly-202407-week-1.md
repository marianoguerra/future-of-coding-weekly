<!--
.. title: Future of Coding Weekly 2024/07 Week 1
.. slug: future-of-coding-weekly-202407-week-1
.. date: 2024-06-30 22:19:42 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🔌 Is an AI copilot for LabVIEW possible? 💾 Local, first, forever 🎥 Future of Coding virtual meetup #2

# Two Minute Week

🎥 [Working on live notation systems with spatial computing for our lil robots…](https://www.instagram.com/p/C8xbV09ufpr/) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/two-minute-week.html#2024-06-30T10:14:20.340Z)

A bit more progress with hand-drawn code. Towards the end you can see there's a bit of abstraction going on 

# Our Work

📝 [Macros and optimizations: it's just a phase](https://marianoguerra.org/posts/macros-and-optimizations-its-just-a-phase/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/share-your-work.html#2024-06-24T09:34:59.313Z)

[Macros and optimizations: it's just a phase](https://marianoguerra.org/posts/macros-and-optimizations-its-just-a-phase/): The one where I implement macros and optimizations as a sequence of evaluations with different semantics



💁 is this 🦋 homoiconic?

💬 [Hamish Todd](https://twitter.com/hamish_todd)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/share-your-work.html#2024-06-24T20:34:49.824Z)

I posted a longer version of this above, but I don't think I introduced it very well! It's a stab at Stop Drawing Dead Fish in VR with spreadsheets and something called Geometric Algebra (GA) also known as Clifford Algebra.



Those who have scrutinized Stop Drawing Dead Fish(SDDF) closely might have noticed two references to GA. Bret also used to have a "Geometric Algebra" sticker on his laptop! But while GA is a very Bret thing, he actually did not  _use_  it to make SDDF, so my thing is trying to make good on that.



GA is a mathematical system where you get a bunch of geometric objects and transformations, and they all get related to one another by math that is quite a lot simpler than usual. For example, in the conventional/non-GA approach, if you wanted a line in 3D space you'd take two "vectors" v1 and v2 and say the line is the set of vectors v1+t*v2 for all scalars t. This can be kinda useful, but gets complicated if you ask for a simple thing like a rotation around that line. In the GA way of doing things, instead of being "a set of vectors", a line is its own sort of object - lines can be added together; multiplied by planes and rotations; etc. Lots of useful operations turn out to be examples of this, I've attached a pdf of examples.



"doing math/programming by working directly with (tangible/visualizable) geometric objects instead of with linear equations" should strike you as a centrally Bret thing. But why didn't he use it? I'll say in a comment under this message.

🎥 [Video](http://history.futureofcoding.org/history/msg_files/F07/F07A7GECRA4.mp4)


🎥 [Exploring Technique and Notations for Augmenting DX](https://youtu.be/zXmC3BVIVuQ) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/share-your-work.html#2024-06-26T21:46:45.632Z)

![Youtube Thumbnail](https://img.youtube.com/vi/zXmC3BVIVuQ/hqdefault.jpg)

FTR: Here is the demo video I presented earlier today. I've added links, in the form of a Kinopio page, to the other technologies that I didn't demo.



Exploring Techniques and Notations for Augmenting DX

💬 [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/share-your-work.html#2024-06-28T20:29:33.026Z)

In my demo, I made the statement "... t2t doesn't need the full power of OhmJS ...", but, I didn't clarify.



For t2t - text to text transpilation - primarily, you need to pattern-match incoming text, then emit text based on the input.



OhmJS parses incoming text, then gives you the full power of JavaScript to do anything you want with the parse tree.



For t2t, you don't need to resort to class hierarchies, functions, closures, etc., etc. You primarily need to pattern match, then, create and modify text. In addition to OhmJS' ability to pattern-match, Javascript's "template strings" are about all you need - the ability to create text and to interpolate text from the tree walk of the parsed input.



This  _seems_  to be unnecessarily restrictive, but, turns out to be quite powerful and mind-freeing. Fewer options -> less clutter -> increased ability to think about interesting issues. After all, "simplicity" == "lack of nuance", and, my goal is to simplify DX.



[Infrequently, one needs to do a tiny bit more (like gensym() a new symbol and leave it on a scoped stack for use during the tree-walk), so I provide a way to break out and call a Javascript function, but, this kind of power is not needed in most cases. I guess that, in the future, I will restrict this some more, but, I'm still experimenting].


🔌 [Is an AI copilot for LabVIEW possible?](https://www.linkedin.com/posts/jimkring_labview-sparkles-is-an-ai-copilot-for-activity-7212597622111449088-VQKe) via **Jim Kring**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/share-your-work.html#2024-06-29T00:10:07.724Z)

I’m close to publicly releasing an AI powered coding assistant for LabVIEW, a visual programming language. [Here is a teaser](https://www.linkedin.com/posts/jimkring_labview-sparkles-is-an-ai-copilot-for-activity-7212597622111449088-VQKe)

🎥 [Video](http://history.futureofcoding.org/history/msg_files/F07/F07A8DL0JN9.mp4)


🐸🎥 [Reaction Reaction](https://youtube.com/live/hlsDbXSZ2ko) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/share-your-work.html#2024-06-29T22:13:49.379Z)

I did a four hour livestream performance art piece where I explore the nature of recursion and infinity and time. And it starts with me doing some crappy live coding

![Reaction Reaction](https://i.ytimg.com/vi/hlsDbXSZ2ko/maxresdefault.jpg)

# Devlog Together

🎥 [Embedding codeflowcanvas and exporting to different formats](https://youtu.be/LayMwCIQAnM) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/devlog-together.html#2024-06-30T10:55:48.622Z)

![Youtube Thumbnail](https://img.youtube.com/vi/LayMwCIQAnM/hqdefault.jpg)

[In this video](https://youtu.be/LayMwCIQAnM) you can see the progress I made on opening up codeflowcanvas so that it is embeddable in other frameworks/libraries like Astro/Angular and React. I've restructured some of the packages that the project uses and published these to NPM. You can see the embedding of codeflowcanvas on its own website using a custom StorageProvider for loading json files from a javascript bundle: [codeflowcanvas.io/devlog/embedded-codeflowcanvas](https://www.codeflowcanvas.io/devlog/embedded-codeflowcanvas/) .



This goal of this restructuring is to get codeflowcanvas out of its own silo on various way (for example in the future I want to be able to design flows in a vscode editor and use these together with other framework/libraries without embedding the editor and just run the flows).



A feature that is also made possible by the above is being able to export to external formats like tldraw and the OpenCanvas work-in-progress spec (see [canvasprotocol.org](https://www.canvasprotocol.org/)). Different strategies can be implemented to provide different formats.

# Thinking Together

💬 [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/thinking-together.html#2024-06-24T00:44:20.647Z)

I'm becoming interested in the idea of "programming tools as art", and as a consequence I'm interested in programming tools criticism.



I'd like to read/watch/hear critical reviews of programming tools that approach them not as bundles of features and capabilities, but as authored works that reflect a creative intent and as cultural touchstones and as environments or artifacts within which one can have deeply personal experiences.



A. Do you share my interest?

B. Do you know any such critics?

💬 **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/thinking-together.html#2024-06-29T08:24:53.795Z)

Who'd be interested in an event with talks and some performances around making notations and programming languages for pattern-making (textile, musical, choreographic etc)? Half focussed online, half focussed in-person, all streamed. Mix of open call and invited talks. All free/open access. Probably in January. Maybe called "Programming Of The Art Computer".

💬 **GuzhIRegem**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/thinking-together.html#2024-06-30T19:19:11.815Z)

Hey, someone knows about any research into RAG-Based training of models?

# Content

🎥 [Is it really "Complex"? Or did we just make it "Complicated"?](https://www.youtube.com/watch?v=ubaX1Smg6pY) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/linking-together.html#2024-06-24T20:12:20.288Z)

![Youtube Thumbnail](https://img.youtube.com/vi/ubaX1Smg6pY/hqdefault.jpg)

Alan Kay talk ‘Is it really "Complex"? Or did we just make it "Complicated”?’. The talk was given some 9 years ago, but, this is the first time that I’ve seen it

My highlights:



51:21 suppressing the present to see different ways to address the future

51:35 “semaphore” is a “bad idea”, pseudo-time is superior, but never got used over last 30 years

54:10 Nile Graphics Language by Dan Amelang is a dataflow language and is very small. Expresses how to define shapes using pixels in only 45 lines of code.

54:51 - Bret Victor at VPRI

57:59 all compositing rules, including alpha-blending, is expressed in 95 LOC

59:16 whole graphics system, equivalent to what is needed on a PC, is expressed in 435 LOC

1:01:00 - Code has to be transformed into CPU-speak

1:01:38 - we need a “language transforming language” [[pt] At present, I use the term “t2t” (text to text)]

1:01:58 - OMeta2 [[pt] OhmJS is an ancestor of OMeta2]

1:02:58 Using OMeta to make Nile, parser 130 LOC, LLL 730 LOC

1:06:00 TCP/IP expressed in 160 LOC

1:20:24 POLs == Problem Oriented Languages [[pt] I use the term SCN - Solution Centric Notation]

1:37:37 hardware is just software that is crystallized early [[pt] I say it another way: software is just soft hardware]

💾 [Local, first, forever](https://tonsky.me/blog/crdt-filesync/) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/linking-together.html#2024-06-25T10:11:50.811Z)

On Interoperability of sync services for software designed to be Local-First

📝 [Programming in “Abstract G”](https://create.vi/programming-in-abstract-g-7e970f123f3c?source=friends_link&sk=a53e37d328f1fbc2a8020c94c1f4c0b0) via **Jim Kring**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/linking-together.html#2024-06-26T06:28:11.970Z)

Here’s an article I wrote on a visual dataflow language modality where the execution of the graphical dataflow dynamically constructs the dataflow graph that is itself executing. (It’s similar to how Elixer functions can output AST for the function instead of the result and one can alternate between AST via quote/unquote)

# Music

🎥 [Detailed walk-through and explainer](https://youtu.be/iYJcVXjRi-I) via **avon**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/of-music.html#2024-06-24T17:57:51.540Z)

![Youtube Thumbnail](https://img.youtube.com/vi/iYJcVXjRi-I/hqdefault.jpg)

ran into this strange and wonderful physical modeling synthesizer called Anukari which has a lot of lovely 3D VPL concepts in its interface design



The dev also did an ADC talk and there’s a lot of interesting computing going on under the hood, like using the GPU to do all of the physical modeling math: [Fast Audio Thread Synchronization for GPU Data - Evan Mezeske - ADC23](https://youtu.be/lb8b1SYy73Q)

# Logic Programming

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/of-logic-programming.html#2024-06-27T22:49:59.308Z)

What would the syntax be for searching any statement that includes the atom  `socrates` ?

# Present Company

🎥 [Virtual Meetup 2 • June 26, 2024](https://www.youtube.com/watch?v=4lG2vFffAO4) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W1/present-company.html#2024-06-30T16:42:23.997Z)

![Youtube Thumbnail](https://img.youtube.com/vi/4lG2vFffAO4/hqdefault.jpg)

Recording of last week's [Future of Coding virtual meetup #2](https://www.youtube.com/watch?v=4lG2vFffAO4)


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
