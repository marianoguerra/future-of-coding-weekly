<!--
.. title: Future of Coding Weekly 2023/09 Week 1
.. slug: future-of-coding-weekly-202309-week-1
.. date: 2023-09-03 23:30:28 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🐬 AI NPCs as dolphins 🎥 Introducing Mathematica (1989) 💡 Apps as Functions

# Devlog Together

📝 [Introduction to the Zettelkasten Method](https://zettelkasten.de/introduction/#the-fixed-address-of-each-note) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/devlog-together.html#2023-08-29T20:53:08.046Z)

I just came up with a name for the versioning scheme I've been using recently:



Zettelkasten versioning



1, 2, 3, ... 14, 14a, 14b, ... 14z, 14aa, ... 14ak1, 14ak2, ...




My versions are to communicate identity. That's it. Not ordering, not value, not recency, not stability, not compatibility, not quantity of change, not support duration, just identity. Am I using the same version as you?



(The easiest way to come up with versions also ends up communicating heredity. But that's an unimportant side effect.)


>Learn how the Zettelkasten works as a system, what a Zettel is made of, and how to grow an organic web of knowledge.

# Our Work

🐬🐦 [Matt Webb on X](https://twitter.com/genmon/status/1697261981814985139) via **Matt Webb**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/share-your-work.html#2023-08-31T15:16:27.233Z)

I’ve been digging into how we might interact with AI, beyond chatbots, and whether we could have NPCs as colleagues...



In particular I’ve been writing actual code (ulp) around actual multiplayer apps (ulp) to see what the interactions and issues might be



It is slightly ridiculous to imagine AI NPCs as dolphins... but why not, right? We’ve got a lot of language around “companion species” as a metaphor for AI, so let’s jump and see if that works.



So here’s a Twitter/X thread of my first sketches: multiplayer cursors that look like other users, but are actually NPCs



Big lessons: escaping the chatbot format might let us answer the AI affordance issue (ie how do we know what the AI can do). Here the NPC can proactively tell you. But also apps will need significant re-engineering to present a machine API and NPC runtime



Gonna dig in this direction for a couple weeks, so up for chatting with anyone about the intersection of AI/multiplayer/collaboration/etc

> 📝 [Matt Webb :cherry_blossom::blossom::cherry_blossom: on X](https://twitter.com/genmon/status/1697261981814985139)
>
>How do we collaborate with AIs? What if they were just like our human colleagues, cursors and all? Well not exactly human

I’ve been sketching NPCs-as-dolphins — you build a little pool, summon them, and that’s where they hang out

(NPCs = non-player characters)

AND THEN...



# Thinking Together

💬 **Marcelle Rusu (they/them)**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/thinking-together.html#2023-08-28T14:04:13.379Z)

For some time I've thought that type systems are essentially ad-hoc logic languages. So.. why not use a full on logic language (prolog or something) to statically analyze your codebase instead of keep patching onto a type system, it appears to me that logic languages are simpler & more expressive than most type systems. I'm starting to work on this for my language, and creating a logic language in efforts to also understand logic programming better.



Another advantage I can think of is that if a the logic language is expressive enough to type even the most advanced languages as well as the weakest, it could be used as a shared interface between languages to understand at least parts of each others type systems, as well as be a tool for user extension for additional static analysis specific to their project.



I'm basically thinking something like this.




```
# here's a sample program in my (object oriented) language

fn add(a, b) = a + b

add(1, 2)
```



generated logic program in pseudo syntax ( `#A`  is a pattern to check value is type of  `A` ,  `?a`  is like prolog's  `A` ,  `{...}`   is map literal.)




```
-- preloaded facts

lookup(#Number, :+, {args: [#Number, #Number], ret: #Number}).



-- program

add(?a, ?b, ?ret) :- lookup(?a, :+, {args: [?a, ?b], ret: ?ret}).

?- add(1, 2, ?_).
```





The specifics of my logic language is likely flawed, but I'm curious about the general idea of using a fully-fledged logic language to generate a program in & run instead of generated a typed AST and running ad-hoc type systems.



My question is, what are people's thoughts on this? Any previous work in this area? Any obvious flaws?

📝 [github.com/rust-lang/chalk](https://github.com/rust-lang/chalk) via **Martin Sandin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/thinking-together.html#2023-08-28T14:48:07.357Z)

I might be missing context here but the fact that type systems are logic languages should be uncontroversial given that that's what the Curry Howard Correspondence is about. Though I'm not very well read I think that using "complete" generic logic languages/solver (as a component) in solving type equations ought to be well trodden ground, my first thought went to [github.com/rust-lang/chalk](https://github.com/rust-lang/chalk) as one example. I'd be looking at what one might give up doing so as the reason why it doesn't happen more: speed? guaranteed termination? good error messages?

💬 [Jim Meyer](https://twitter.com/jimmeyer)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/thinking-together.html#2023-08-28T16:45:19.883Z)

A one minute interaction with a digital product at 60FP on an HD RGB screen flows through a creative/generative space of 125,241,246,351,360,000 pixel variations.



We need spaceships to explore this space, but we got rectangles with drag handles instead.

💬 **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/thinking-together.html#2023-08-28T16:57:24.727Z)

A question for ya’ll doing thinking on future of coding things:



When/if you think about the accessibility (read here as “a11y”) of the future of coding do you consider accessibility as an attribute of the folks using your thing (e.g. a need) or an attribute of your design (e.g. a feature)?

🐦 [sophia  on X](https://twitter.com/cis_female/status/1697763571751674297?s=20) via [Steve Dekorte](https://dekorte.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/thinking-together.html#2023-09-03T00:11:32.398Z)

Thoughts? 

> 🐦 [sophia :chart: (8723/30000 days alive) on X](https://twitter.com/cis_female/status/1697763571751674297?s=20)
>
>I feel like it’s not obvious to consumers how monumental and expensive regular software is. iOS cost about as much as the Manhattan project (~$20b). Google search cost about as much as the ISS (~$100b).


# Content

🎥 [Introducing Mathematica, Stephen Wolfram](https://youtu.be/MeuCAT5HDh0?si=mZHZtW1YmDmH4aRT) via **Chris**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/linking-together.html#2023-08-29T21:31:48.535Z)

![Youtube Thumbnail](https://img.youtube.com/vi/MeuCAT5HDh0/hqdefault.jpg)

Fascinating video that popped up on my radar today of Stephen Wolfram demoing Mathematica in 1989 


I was quite blown away by how powerful and ahead of its time it was, even back then, with features like interactive programming in a very high level, multi-paradigm language for symbolic computation with rich, introspectable outputs and various thoughtful design decisions around interoperability, extensibility and API (as validated by how none of the API functions demo'd have changed AFAIK in 30+ years!)

💡 [github.com/Ruddle/Fomos: Experimental OS, built with rust](https://github.com/Ruddle/Fomos) via [Andreas S](https://twitter.com/curious_reader)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/linking-together.html#2023-08-30T16:17:56.776Z)

„So what if an app was a function ? „

# 🤖

🧑‍🏫 [Teaching with AI](https://openai.com/blog/teaching-with-ai) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/of-ai.html#2023-08-31T21:34:28.340Z)

Hard to pin down what's most dystopian about this

>We’re releasing a guide for teachers using ChatGPT in their classroom—including suggested prompts, an explanation of how ChatGPT works and its limitations, the efficacy of AI detectors, and bias.

💬 [Denny Vrandečić](https://twitter.com/vrandezo)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/of-ai.html#2023-08-31T21:45:30.164Z)

Doug Lenat, inventor of Cyc, has passed away


# present-company

📝 [Assaf Magen, PhD - Entrepreneur and Consultant Profile](https://assafmagen.com/) via **Assaf**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/present-company.html#2023-08-29T22:27:27.823Z)

For those interested in gaining experience in bioinformatics/ML:

I've recently founded Mendel AI, a first of its kind AI-assisted data analysis and visualization tool designed to empower biotech & pharma R&D scientists to interact with genomics data using natural language. We're working on a prototype and would benefit from additional help. Reach out If getting exposure to this rapidly developing field sounds exciting to you.

👔 [Chroma](http://trychroma.com) via [Nick Arner](https://twitter.com/nickarner)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/09/W1/present-company.html#2023-08-31T15:22:15.553Z)

A company I put an angel check into, [Chroma](http://trychroma.com), is hiring a [product engineer](https://trychroma.notion.site/careers-chroma-9d017c3007c7478ebd85bad854101497#d618e6e26a324cc7831e2c5c9e48e8f5). Very keen to talk with folks from communities like this / tools for thought. If you’re interested; send a note to [careers@trychroma.com](mailto:careers@trychroma.com)

