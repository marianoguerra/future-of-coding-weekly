<!--
.. title: Future of Coding Weekly 2023/10 Week 2
.. slug: future-of-coding-weekly-202310-week-2
.. date: 2023-10-08 23:38:13 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

💼 Economics of Programming Languages 🏗️ Building a Better Web Browser 💻 All things live coding

# Two Minute Week

🎥 [Recognition of hand-drawn symbols in embedded structures](https://photos.app.goo.gl/Pxpyok4TDNsuWs1d6) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/two-minute-week.html#2023-10-06T10:29:27.703Z)

Lately I've been [experimenting with recognition of hand-drawn symbols in embedded structures](https://photos.app.goo.gl/Pxpyok4TDNsuWs1d6), working with Luke Iannini in Realtalk



Thinking about how perceptually salient properties (such as spikiness/roundness, wonkiness) could be taken into account in a kind of analogue interpretation of the shapes alongside discrete symbol recognition as 'signposts' in feature space.



and what happens to those features when some symbols are marked out as higher order functions.



Thinking about syntax based on proximity and containment rather than adjacency.



also what happens when the parser itself is part of the scene.. e.g. how does its orientation change the parsing of the symbols?



Would love to hear about other projects that have explored this kind of area!



🎥 [Generate: A One Click Research Dashboard](https://youtu.be/dqwUkz7GTRE?si=JdiN0ULxxEs4VR6L) via **Pawel Ceranka**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/two-minute-week.html#2023-10-06T15:33:49.786Z)

![Youtube Thumbnail](https://img.youtube.com/vi/dqwUkz7GTRE/hqdefault.jpg)

We’re trying to put together a bunch of  *research tools in one place* —web search, images search, all sorts of AI thingies.

It’s now possible to try some of this [straight from the homepage](https://nette.io/#try-generate) *—no login, no nothing.* 

Please check it out if it sounds interesting at all and as always comments appreciated 🙏



Here’s a little video for your viewing pleasure 📽 — have a great Friday and wonderful weekend!

# Our Work

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/share-your-work.html#2023-10-02T21:23:08.155Z)


Early rough prototype of the Prolog debugging interface I'm designing. Feedback welcome. [Logic Debug Prototype](https://www.figma.com/file/DKmfQz3MaRMZx1yyKqtbsU/Logic-Debug-Prototype?type=design&amp;node-id=0%3A1&amp;mode=design&amp;t=GST1pxMYKJ1DWRPT-1)

🔍 [Visualization of hindley-milner's algorithm-j](https://type-inference-j.surge.sh/) via [Jared Forsyth](https://jaredforsyth.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/share-your-work.html#2023-10-07T04:09:45.106Z)

I've been doing a bunch of diving into type inference algorithms trying to understand them better so I can write a good one for the language I'm creating, and my latest project is visualizing how the algorithms work, to get a better intuition for them.

Here's a visualization of basic hindley-milner's algorithm-j. You can play with it here [type-inference-j.surge.sh](https://type-inference-j.surge.sh/)

🎥 [Type Inference Visualization](http://history.futureofcoding.org/history/msg_files/F06/F0608CJLCCC.mp4)

# Devlog Together

💬 [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/devlog-together.html#2023-10-08T09:59:39.645Z)

This week no short video, just a report of my progress on building a visual programming system :






* I've started experimenting with having multiple layers in a visual flow.. as inspiration I think of pcb's which are used in electronic devices where components and connections can live on different layers. Hopefully this can help in keeping the flows becoming a big pile of spaghetti and better scalable. 






* Another new experiment is an import function that can import a textual program and convert it to a visual flow. In my engine I already use a small custom language which is parsed to an AST and transpile that to javascript within some node-types.. so, with this import function a script in this language can be converted to a visual flow.. it's still in its infancies , but I even want to try and convert a javascript/typescript file to a visual flow. 






* Made some new node-types to support functions within a visual-flow. Since I don't use a port-based/pull mechanism for the flow-runner that runs the visual program, the function parameters are send as a payload (which is a dictionary of keys and values).. and in the function node you can define the expected parameters.. currently these are not typed.



Hopefully I can find some time to make a video later this week.

Greetings,

Maikel


# Reading Together

💬 [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/reading-together.html#2023-10-05T17:13:19.448Z)

The Little Typer online reading group starts tonight around 7 PM Toronto time contact me for details

# Thinking Together

💬 **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/thinking-together.html#2023-10-02T09:17:41.245Z)

Reflecting more on Amy Ko's recent work on Wordplay, I think part of what makes it successful is that it's an art project - playing with typography is just a really nice domain to make alternative programming languages in - playing with symbols, with symbols. It's a shame that the arts are often pushed out of 'future of coding' type circles. E.g. compare the first LIVE workshop on Live Programming which had loads of music-focussed contributions, with recent editions where the focus seems much more on abstract ideas for which 'real world' applications have not yet been found.

My understanding is that part of the reason for this is that for CS academics, associating their work with creative applications is generally seen very much as a career-limiting move

💬 [Duncan Cragg](https://twitter.com/duncancragg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/thinking-together.html#2023-10-03T22:30:53.199Z)

I went away from FoC for a few weeks and dropped by today and I have to say I'm blown away by the diversity of creative and innovative work being brought to light here. And, bizarrely, how little discussion is being initiated by the posts! Is everyone so focused on their own stuff that they're not available for engaging in a broader perspective? I'm worried that a lot of great stuff could be going the wrong way or could fizzle simply through lack of community coherence. Dunno. Whaddyall think?



💬 by **Qqwy / Marten**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/thinking-together.html#2023-10-04T09:01:53.191Z)

Some thoughts re: ‘67 Considered Harmful’:

 *Superparentheses* :

Love the discussion about this topic 😛. Haskell has  `$`  which means ‘opening parenthesis that is closed by the end of the line’ which gets a bit close to the idea of a ‘super opening parenthesis’.



 *C and GOTO:* 

C came out after this paper, and its  `goto`  statement was neutered: It only allows  _local_  jumps (remaining in the same function) and only to hard-coded labels (though [a common GCC compiler extension](https://gcc.gnu.org/onlinedocs/gcc-4.8.0/gcc/Labels-as-Values.html#Labels-as-Values) extends this to allow dynamic labels).

The closest C gets to unrestricted GOTO is  `setjmp` / `longjmp` ; but here the  _callee decides_ where you jump to (just like with exceptions) so you can really only jump up on the stack, making them slightly less painful to reason about.

Neither gets used a lot: I mainly know the  `goto sosueme` idiom from a few of the talks of Alexei Alexandrescu in which he uses it in a hot code path because the resulting machine code is better optimized. And  `setjmp` / `longjmp`  is used in some places to emulate exceptions or coroutines in plain C, but whenever the OS provides higher-level abstractions to use here they are preferred (just like how OS support for threading is better than rolling your own spin-locks).

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/thinking-together.html#2023-10-04T09:18:26.324Z)

And making a separate topic for the second half of the episode about the list of other ‘things considered harmful’ because it is mostly separate from the previous discussion ^_^’:




* Most of your takes are actually luke-warm, in my opinion. 🙂 
* Agile (with capital A) considered harmful: 100% agree with your discussion here.
* Dependency Injection considered harmful: I disagree. You can definitely use it too much and it would be better if people would approach it from the dependency inversion principle side, but it definitely is better than tightly coupling your code on implementation details. And related to that, I’d like to add:
* Inheritance considered harmful: Why do we still teach new programmers how to do inheritance? Besides ‘prefer composition over inheritance’, have we not learned in the last 20-ish years that doing polymorphism based on interfaces/traits creates much more maintainable code?

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/thinking-together.html#2023-10-06T21:46:31.117Z)

 *The next paradigm beyond capitalism* 



These are some rough thoughts I wasn't expecting to share publicly for a long time, if at all, but it seems to be inevitable for me to hit a point of, wth, throw it out there. In this case the impetus was **@Alex McLean**'s comments on [💬 #linking-together](./?fromDate=2023-10-03&toDate=2023-10-09&channel=linking-together&filter=#2023-10-06T04:45:36.918Z)



The way I see it, capitalism currently performs many load-bearing functions in the world, but the world today suffers from capitalism being the predominant engine of meaning/motivation. Why do we get out of bed and do anything? The places we tend to pay attention to are governed by social proof, a sense that others are paying attention. Social proof is in turn governed by status seeking; we all want to be "successful", and in our efforts to be successful we chase the prospects of success around us. We're more likely to attend to something if it promises to be successful. And finally, closing the loop, the metrics for "success" are basically money at root. Everything else seems to get grounded at some level of indirection in money.



All this hit home particularly hard when listening to the first hour of [episode 65](https://futureofcoding.org/episodes/065) (totally awesome, and having nothing to do with the title), where [Ivan Reese](http://ivanish.ca/) at one point says, to be taken seriously you have to signal effort. And at a second point: one way to signal effort is to spend a lot of money. All totally right and obvious for the world we live in. And yet.. I'm kinda feeling done with seeing large projects spending lots of money as more intrinsically meaningful? We've seen many many examples of the same depressing way large projects with lots of money fail. Money invariably has strings attached.



So, I'd like to live in a world where money exists, but more people consider it a satisficing rather than optimizing criterion. Something that inhabits the lower levels of Maslow's Hierarchy and gets banished from the upper level that it has somehow infected while we weren't looking.



What might replace money as a source of meaning and motivation for programmers? One answer I've been rolling around in my mouth and feeling increasingly ok with is: durability. Durability has a long track record (i.e. monuments) as something that can motivate people. Software is currently really bad at building durable artifacts, and not I think for any intrinsic reason. We just haven't prioritized it. I think a world where software artifacts can be easily run a decade later -- without any modification -- would be a significantly better world than the one we live in. In such a world, software would be part of the solution rather than the problem.



So, with that lengthy preamble, here's the draft I've been noodling on.



 *Draft: A programmer's pledge* 



Given that:




* We are on this planet for a brief time and will take nothing with us when we leave; and that
* The effects of our actions compound for good and for ill, long after we are gone, in ways we cannot always anticipate; and that
* I want to be helpful to others, and for the good in my actions to outweigh the bad; and that
* I want to persuade you that I truly believe the above, that I want to be helpful more than I care about my own gain and aggrandizement;



Therefore, I pledge to:




* Tell you, when I build anything, what I hope to gain from it. If it's money I'll tell you how much in inflation-adjusted currency, and I'll commit to giving away anything beyond that while unencumbering any secrets it took to create it. If I create organizations or foundations around what I build, I'll enshrine these limits on value capture into their bylaws.
* Tell you, up front, when it will be done. I'll provide a clear test for features I will add, and when I will stop adding features.
* Show my thought process in my efforts to make it durable. Even after it's done, it might need changes to be runnable on people's computers. What have I done to minimize the likelihood of such changes? What have I learned from past projects that makes this one more durable than them?

💬 [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/present-company.html#2023-10-06T21:45:35.325Z)

Is there a schematic table editor? ([Jonathan Edwards](https://twitter.com/jonathoda/)?) I’ve been writing complicated nested conditionals in non-Subtext languages and frequently transcribing them as schematic tables in spreadsheets to understand and refactor them—but man, is it tedious!



# Content

💡 [What to know before debating type systems](https://blogs.perl.org/users/ovid/2010/08/what-to-know-before-debating-type-systems.html) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/linking-together.html#2023-10-02T05:16:31.464Z)

From 2010 but still holds up quite well 🙂

📝 [Language and the Rise of the Algorithm by Jeffey Binder](https://press.uchicago.edu/ucp/books/book/chicago/L/bo181533760.html) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/linking-together.html#2023-10-02T10:10:38.273Z)

I'm enjoying the introduction to the book [Language and the Rise of the Algorithm by Jeffey Binder](https://press.uchicago.edu/ucp/books/book/chicago/L/bo181533760.html), especially in the context of watching Amy Ko's "Searching for Justice in Programming Language Design" linked above. Her approach seems to have a lot more in common with Leibniz et al than I was expecting, in terms of addressing the political and social contexts of symbols.

It isn't open access, but you can [download it from a shadow library if you want](https://libgen.li/ads.php?md5=6bd7f34ae6c9a5abf7588721ae321e7e).

🎥 [Moveable Projected Displays using Projector Based Tracking](https://www.youtube.com/watch?v=liMcMmaewig) via **Arcade Wise**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/linking-together.html#2023-10-02T16:52:03.536Z)

![Youtube Thumbnail](https://img.youtube.com/vi/liMcMmaewig/hqdefault.jpg)

This is part of my ongoing obsession with cool projection stuff, here's a paper from before I was born on some fascinating tracking and interaction methods!

📝 [Quantitative Program Reasoning with Graded Modal Types](https://www.cs.kent.ac.uk/people/staff/dao7/publ/granule-icfp19.pdf) via [Shubhadeep Roychowdhury](https://github.com/rcshubhadeep)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/linking-together.html#2023-10-03T14:39:51.546Z)

Quantitative Program Reasoning with Graded Modal Types: Most programming languages treat data as infinitely copiable, arbitrarily discardable, and universally unconstrained. However, this overly abstract view is naïve and can lead to software errors. For example, some data encapsulates resources subject to protocols (e.g., file and device handles, channels); some data has confidentiality requirements and thus should not be copied or communicated

arbitrarily. Dually, some programs have non-functional properties (e.g., execution time) dependenton data (e.g., on its size). Thus, the reality is that some data acts as a resource, subject to constraints. In this paper we present Granule, a typed functional language that embeds a notion of data as a resource into the type system in a way that can be specialised to different resource and dataflow properties. Granule’s type system combines linear types, indexed types (lightweight dependent types), and graded modal types to enable novel quantitative reasoning.

🏗️🎥 [Building a Better Web Browser - James Mickens - Harvard CS Colloquium 2015](https://youtu.be/1uflg7LDmzI?si=erkBgbXweU2z4hwY) via **Marcelle Rusu (they/them)**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/linking-together.html#2023-10-03T19:45:30.511Z)

![Youtube Thumbnail](https://img.youtube.com/vi/1uflg7LDmzI/hqdefault.jpg)





James Mickens is describing the [Atlantis Browser](https://www.microsoft.com/en-us/research/publication/atlantis-robust-extensible-execution-environments-for-web-applications/) which is a very minimal high security & performant browser which forces each application to ship its own runtime (including languages, renderer, etc) with ideas on backwards compatibility with existing (js,html,css) web applications.



Im reminded by alan kay talking about the early browsers (unknown reference) basically what if applications shipped their runtimes. I kind of thought of a more general & inspectable html at the time but i think this is very interesting too

🕹️ [An Interactive Intro to CRDTs](https://jakelazaroff.com/words/an-interactive-intro-to-crdts/) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/linking-together.html#2023-10-04T22:59:19.204Z)

💻 [all things live coding](https://github.com/toplap/awesome-livecoding) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/linking-together.html#2023-10-05T14:41:08.444Z)

Long list of '[all things live coding](https://github.com/toplap/awesome-livecoding)'


💼🎥 ["The Economics of Programming Languages" by Evan Czaplicki (Strange Loop 2023)](https://youtube.com/watch?v=XZ3w_jec1v8) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/linking-together.html#2023-10-06T04:45:36.918Z)

![Youtube Thumbnail](https://img.youtube.com/vi/XZ3w_jec1v8/hqdefault.jpg)

Thinking about designing a new programming language or related tool? Yes? You've come to the right Slack!



Would you like to get paid for that work? Well, [Evan has 10 years of wisdom for you](https://youtube.com/watch?v=XZ3w_jec1v8).

📝 [Undone Computer Science - A conference to reflect on epistemological and ethical dimensions of computer science](https://undonecs.sciencesconf.org/resource/page/id/3) via **Alex McLean**


🔥 [Dusk OS](https://duskos.org/) via **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/linking-together.html#2023-10-06T14:13:56.186Z)

Has anyone else been watching [Dusk OS](https://duskos.org/) dev take place? I subscribe to the git commits in my RSS reader and watching the progress made on this project in real time is a pretty wild experience.



I think some folks around here may find the “[almost C](https://git.sr.ht/~vdupras/duskos/tree/master/fs/doc/cc/index.txt)” compiler implemented in forth interesting.

📝 [musicriyaaz account focusing on on a unique music representation for voice](https://www.instagram.com/reel/Cs85ZUoB2xs/?igshid=MzRlODBiNWFlZA==) via **Arvind Thyagarajan**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/linking-together.html#2023-10-08T14:52:40.733Z)

**@Alex McLean** for a small side road into music representation -- here's a wonderful insta account to follow; linking one recent example here: [musicriyaaz account focusing on on a unique music representation for voice](https://www.instagram.com/reel/Cs85ZUoB2xs/?igshid=MzRlODBiNWFlZA==)
> [October 8th, 2023 10:47 AM] alex952: <@UCUSW7WVD> it's been a while.. but working on payment processing was mostly writing c code to pre-written specs but there was some room for finding creative solutions to problems.. A big part of making music for me is making new representations for music, which is really hard and is definitely some of the most interesting and technically challenging work I've done in my career. Actually making live music by live coding does feel very different though in a number of ways.. Being fully absorbed in the sonic output of your code while changing it, with a room full of people are dancing to it, is just a lovely time. It does seem like a very different activity to systems programming, but someone has to program the live coding system in the first place, and building and using systems happens in the same community, with everyone coding in some way.. like with dynamicland, things can get interesting when you break down the barriers between systems programming and live interaction.

# 🤖

💬 [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/of-ai.html#2023-10-07T21:16:32.103Z)

I don’t know how I missed it in the announcement, but  ~_*when you use an LLM chat cell in Mathematica, it sends*_~  ~_*all*_~  ~_*the cells above it as context.*_~ 



I realized that was happening when the LLM happened to refer to code I’d written in one of its answers. Now I just straight up ask it “Why?” when something surprising happens.



I haven’t made a single non-chat notebook since I figured this out. 🌈 

![Image from iOS](http://history.futureofcoding.org/history/msg_files/F05/F05V6GLJQ31.jpg)

# of-music

🎥 [A video about Blockhead (experimental digital audio workstation)](https://www.youtube.com/watch?v=P5fWPBOdrY8) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W2/of-music.html#2023-10-02T09:03:40.934Z)

![Youtube Thumbnail](https://img.youtube.com/vi/P5fWPBOdrY8/hqdefault.jpg)

