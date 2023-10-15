<!--
.. title: Future of Coding Weekly 2023/10 Week 3
.. slug: future-of-coding-weekly-202310-week-3
.. date: 2023-10-15 23:56:37 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

     
📐 Geometry to Algebra and Back Again 🧮 Computational Physics 💡 Forth, Prolog, Petri Nets and LLMs

# Our Work

🐘 [Deconstructing the Mastodon client](http://blog.khinsen.net/posts/2023/10/09/deconstructing-the-mastodon-client/) via [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/share-your-work.html#2023-10-09T10:19:39.019Z)

A blog post about my recent adventure into improving my Mastodon experience, do-it-yourself style:


Not quite end-user programming, definitely not professional software development, but something in between.


>Ever since I joined Twitter in 2011, and then moved to Mastodon in 2022, I have been unhappy with the timeline view proposed by both of these communication platforms as their main interface. Now I have finally done something about it: I wrote my own Masto...


📝 [Feminism — Matt Wynne](https://mattwynne.net/feminism) via **Matt Wynne**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/share-your-work.html#2023-10-09T21:10:49.259Z)

I wrote a piece about feminism, and what patriarchy means for "agile transformations": [mattwynne.net/feminism](https://mattwynne.net/feminism)


>In this post I want to talk about feminism: why I have personally embraced it, why I encourage you to, and — since you’re probably readin...

💻 [github.com/geoffw8/hyperlayer](https://github.com/geoffw8/hyperlayer) via **Geoff**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/share-your-work.html#2023-10-10T07:23:52.060Z)

Hello all,



Very proud to introduce ⚡️Hyperlayer - Debug Rails apps 10x faster:


☝ Code and demo video in the repo.



It works by creating a visualisation layer which combines application flow, state and the code itself. It utilises Tracepoint and AST under the hood to build the visualisation. This visualisation means you can cut out a significant portion of the steps we have to go through to "manually" debug an issue, leading to the timesave.



I would absolutely welcome any feedback. I think it could be a big deal!



I'm really excited about being able to share this with the world.


💬 **Marcelle Rusu (they/them)**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/share-your-work.html#2023-10-10T14:00:48.505Z)

Started working on a prolog backend for coil.



Here's an example of compiling a coil program to prolog & exploring the codebase via prolog repl.



This is early but the hope is to have an easily explorable codebase, to really treat the codebase as a database.



Ambition for this is




* Allow users of coil to write their own rules in prolog to ensure things about the program
* Make writing a type checker easier for me
* Make writing tooling for coil easier

🎥 [Screen Recording](http://history.futureofcoding.org/history/msg_files/F06/F061613D62C.mov)

🎥 [Conversational User Interfaces Prototype](https://www.youtube.com/watch?v=nzGesIIToU4) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/share-your-work.html#2023-10-11T15:41:20.560Z)

![Youtube Thumbnail](https://img.youtube.com/vi/nzGesIIToU4/hqdefault.jpg)

Conversational User Interface Prototype



- Select & pre-configure interactive UI components by asking an LLM in natural language

- Group them in sessions

- Reuse workflows by storing sessions as templates

📝 [m-ld](https://m-ld.org/) via **George Svarovsky**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/share-your-work.html#2023-10-12T09:08:38.309Z)

[m-ld](https://m-ld.org/) is a component for sharing live information peer-to-peer. (Lots of materials at the link, and click the big green button to [find code playgrounds](https://js.m-ld.org/).)



It's intended to allow programs to be written "local-first", having a reactive local model that is concurrently editable from multiple remote locations, with a guarantee of eventual consistency. So, you more-or-less write your code as if the data is 100% local, embedding m-ld as a library, and magically find that other remote participants can read and write the data too (subject to security!).



There are two main use-cases we're targeting – client apps, like office tools, supporting collaborative editing (GDocs-style); and microservices sharing information like configuration or master data. In both cases, you don't need a (extra) server for the data (though you do need a way to pass messages, for example a pubsub).



I've been working on this for a while so there's a million things I could ramble on about, but I'm curious to know if the above pricks up anyone's ears. Do those use-cases sound, well, useful? Does my description make you want to know more, or, ho-hum? Any feedback is welcome; will return with recent focus later! Many thanks

📐 [Geometry to Algebra and Back Again](https://jackrusher.com/pwl-2023/) via [Jack Rusher](https://twitter.com/jackrusher)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/share-your-work.html#2023-10-13T08:17:00.542Z)

My talk on geometric algebra from this year’s Strange Loop/Papers We Love Conference, embedded in a mini-site with the video, a transcript, and links to all the papers I mention.

>4000 Years of Papers

🎥 ["Computational Physics, Beyond the Glass" by Sam Ritchie (Strange Loop 2023)](https://www.youtube.com/watch?v=Jv2JgzAl5yU) via [Jack Rusher](https://twitter.com/jackrusher)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/share-your-work.html#2023-10-13T08:18:41.778Z)

![Youtube Thumbnail](https://img.youtube.com/vi/Jv2JgzAl5yU/hqdefault.jpg)

A look at what Sam Ritchie has been working on with Emmy, a Clojure computer algebra system ported from Sussman’s scmutils, that also features quite a bit of Clerk







… some of you might see where all of this is going — an open source, Clojure-based Mathematica-like system.

💬 **Arcade Wise**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/share-your-work.html#2023-10-13T13:32:47.441Z)


```
: fizzBuzz? ( n -- ) "" swap ( str n -- )

   ( str n n ) dup 3 % 0 = ( str n ) if swap ( n str ) "Fizz" concat ( n strFizz ) swap then

   ( str n n ) dup 5 % 0 = ( str n ) if swap ( n str ) "Buzz" concat ( n strFizz ) swap then

   concat .

;



1 100 do i fizzBuzz? loop
```



I have been working on a forth implementation, and this fully works now! I'm super excited to show the cooler stuff that goes along with it too :>

💬 **Arcade Wise**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/share-your-work.html#2023-10-13T14:22:43.447Z)

🎥 [Fully I CAN'T BELIEVE ITS NOT FORTH user interface!](http://history.futureofcoding.org/history/msg_files/F06/F060VDRF762.mov)

# Devlog Together


📝 [Software Simplification Compendium – Kinopio](https://kinopio.club/software-simplification-compendium-ivD_Z4-xQN4ZlluzLbo_R) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/devlog-together.html#2023-10-15T19:19:54.602Z)

Compendium and demonstration of simplification techniques for composing software programs.





Began new digital garden, including 3 working examples of drawware/0D (Scheme to JavaScript transpiler , markdown as a programming language, partial language for game programming), a 4th example of simple use of OhmJS (simplistic ABC language), headings for major sections, ongoing fleshing out of points under each heading.

# Reading Together

📕 [Languages for Developing User Interfaces](https://www.cs.cmu.edu/afs/cs/user/bam/www/langbook.html) via **Beni Cherniavsky-Paskin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/reading-together.html#2023-10-12T10:54:47.039Z)

1991 workshop proceedings looks interesting but not sure it's worth buying 🤔   But amazon free sample is generous, reading that first...

🧫 [guarded petri nets](https://arxiv.org/abs/2002.02762) via **Don Abrams**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/reading-together.html#2023-10-12T18:31:39.711Z)

I'm looking at defining a collaboration-centered language that has sound semantics (ie semantics under composition are intentional and generally useful)

My understanding is that you can only verify semantics for a specific model, so trying to define a "good enough" model

Do y'all know of any papers on the tradeoffs of various "computer" models for distributed machines? Bonus points if it has time costs and resource limits built in and supports heterogeneous machines.

My best guesses so far are [guarded petri nets](https://arxiv.org/abs/2002.02762) or [Poly](https://arxiv.org/abs/2005.01894)

# Thinking Together

💬 **Janne Aukia**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/thinking-together.html#2023-10-09T09:55:41.002Z)

Has anyone thought about or written about malleable software + LLM:s? I feel that it is an area that could be quite interesting, but I haven't got yet a clear understanding on what this will lead to.



I think that pretty soon most of end-user code will be generated with the help of LLM:s. Some thoughts/questions I've been thinking about:




* How to generate programming languages, libraries and abstractions that LLM:s can use well? Is that different from generating libraries etc for humans?


* LLM:s are faster than humans in processing data, so API:s can be really wide and probably more complex than what would be practical for devs. 
* LLM:s can probably handle more condensed/optimized representation better, too. 
* And be able to infer system affordances directly from code.


* How to support creating good and maintainable code from LLM:s? And will that matter? Or will actual code become irrelevant?
* How to modularize apps so that they can be easily composed by LLM:s?


* My hunch: making apps modular and composable would work really well with LLM:s already now and even better in the future. Doesn't matter if functional or OOP, as long as the LLM can understand the logic.


* What kinds of new apps and malleable software will LLM:s enable?
* Also: LLM:s could finally enable removing some boundaries between different programming tools, library ecosystems, etc, by enabling translations/bridges automatically.



Any thoughts?


📝 [Ursula Franklin’s tech project checklist](https://slab.org/2022/02/11/ursula-franklins-tech-project-checklist/) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/thinking-together.html#2023-10-09T20:19:29.295Z)

[Kartik Agaram](http://akkartik.name/about)'s draft programmer's pledge reminded me of Ursula Franklin's checklist for technology projects, which is a bit hidden in one of her really excellent 1986 lectures on the "real world of technology"




> “… whether it:

 (1) promotes justice;

 (2) restores reciprocity;

 (3) confers divisible or indivisible benefits;

 (4) favours people over machines;

 (5) whether its strategy maximizes gain or minimizes disaster;

 (6) whether conservation is favoured over waste; and

 (7), whether the reversible is favoured over the irreversible?”



I tried to [summarise these points in a blog post here](https://slab.org/2022/02/11/ursula-franklins-tech-project-checklist/) or you can [listen to the lectures](https://archive.org/details/the-real-world-of-technology) directly, or [read it in book form](https://archive.org/details/realworldoftechn0000fran_u9w8/page/n9/mode/2up).



I'll pull out a couple of quotes, first on 3) divisible/indivisible benefits:




> “If you have a garden and your friends help you to grow a tremendous tomato crop, you can share it out among those who helped. What you have obtained is a divisible benefit and the right to distribute it. Whoever didn’t help you, may not get anything. On the other hand, if you work hard to fight pollution and you and your friends succeed in changing the practices of the battery-recycling plant down the street, those who helped you get the benefits, but those who didn’t get them too. What you and your friends have obtained are indivisible benefits.”



and on 7) reversible vs irreversible:




> “The last item is obviously important. Considering that most projects do not work out as planned, it would be helpful if they proceeded in a way that allowed revision and learning, that is, in small reversible steps.”



5) on maximising gain vs minimising disaster is also a really interesting point, where she argues against planning, and for finding the right conditions for something to grow, at its own rate.

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/thinking-together.html#2023-10-12T16:12:48.844Z)

I just (finally) figured out how to represent my coding language as a directed multi-graph with labeled edges. Now I'm wondering if the interpretation steps could be represented as graph translations, so you could literally "watch" it execute. Anyone have any ideas for libraries that I could use to explore that idea, or examples I could look to? My current best guess is NetworkX and visdcc+dash.

💬 **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/thinking-together.html#2023-10-13T14:31:25.075Z)

What does it mean to you when someone says something like “code as literature?”



Often the implication seems to be that code should be  _readable_  — which I take to mean “understandable,” which I further take to me “as a person looking at this code I can map what it’s output will be.”



Where my specific hangup enters is that a lot of literature isn’t directly “understandable” in this sense. There are many layers at which to understand literature. How about code? Code as more than it’s outcomes.

💬 [Josh Cho](https://twitter.com/JoshCho321)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/thinking-together.html#2023-10-15T03:07:01.500Z)

better DSLs for prompt engineering? i am being inspired by forth

💬 [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/thinking-together.html#2023-10-15T10:49:58.529Z)

observation: similarities - Forth, de Bruijn Indexing, Lambda Calculus, Currying ...

📝 [David mcclain on forth](https://guitarvydas.github.io/2023/10/06/David-McClain-on-FORTH.html) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/thinking-together.html#2023-10-15T10:50:49.684Z)

FYI - David B. McClain wrote Forth for a living (Kitt Peak) and is now using Lisp.  I posted some of his comments here, including a reference to his Forth in Lisp: [David mcclain on forth](https://guitarvydas.github.io/2023/10/06/David-McClain-on-FORTH.html)

# Content

🎥 ["Supporting Data Journalism through Compilers for Visual Inputs" by Parker Ziegler](https://m.youtube.com/watch?v=MQnVmEw6ISQ) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/linking-together.html#2023-10-15T05:31:07.285Z)

![Youtube Thumbnail](https://img.youtube.com/vi/MQnVmEw6ISQ/hqdefault.jpg)


# 🤖

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/of-ai.html#2023-10-11T21:35:39.693Z)

Did a technical assignment for an interview this week, and made extensive use of ChatGPT4 to great success. It's to the point now that if I get an error message I don't understand, or get to a step where I'm unclear what to do next, I'll try ChatGPT4 before I will try Google, because with ChatGPT4 it already has the context for the problem, and gives me an answer specific to my context. Very different programming experience.

# Present Company

💬 **David Alan Hjelle**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/present-company.html#2023-10-10T15:34:22.537Z)

I was curious this morning: my naïve view of compiler history is that they used to be very small (due to performance constraints) and have gotten very complicated over the years in order to support multiple platforms and in order to employ more and more optimizations. Is that generally a fair take? What are the big changes to compiler architectures from the early days? Does something like LLVM produce enough better code to justify its complexity? Are there any blog post- or paper-length history of compilers articles out there? (I'm not quite so curious as to be ready to read a whole book, but if you've got a good recommendation…)

💬 [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W3/present-company.html#2023-10-11T14:49:16.918Z)

A question that came up in a discussion this morning:



Suppose you want to publish a command-line utility program, meant to be easy to use. Doing Web retrieval and some post-processing. Around 500 lines in a typical scripting language, but with dependencies (in that language plus C libraries).



It looks like packaging such a tool for all popular platforms (i.e. package managers) will be a lot more work than actually writing the code.



True? Any way to avoid this?



Ideas so far: don't use a scripting language, but something with a compiler that can produce portable executables for every major platform. Recommendations in that category so far: Go, Rust, Racket, Common Lisp. I have doubts that all of these can handle "plus C libraries", but it's a start.



Does anyone here have actual experience with this kind of project?


