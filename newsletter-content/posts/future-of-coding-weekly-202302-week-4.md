<!--
.. title: Future of Coding Weekly 2023/02 Week 4
.. slug: future-of-coding-weekly-202302-week-4
.. date: 2023-02-26 22:42:56 UTC+01:00
.. tags:
.. category:
.. link:
.. description:
.. type: text
-->

💡 Is Software Spatial? 🤖 UX of AI Programming Assistants 🛸 Self-conscious
Reflexive Interpreters 💻 Live Game & Functional Programming

# Devlog Together

💬 [Jimmy Miller](https://jimmyhmiller.github.io/)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/devlog-together.html#2023-02-21T18:37:14.972Z)

Been making good steady progress on my new editor. I now have my wasm extensions
automatically interrupt. So I can have a long running computation (or even an
infinite loop) happening in an extension, on the same thread and not miss any
frame times. Having that really sets the ground work for the live programming
model I want for these "extensions".

After some clean up I'm starting to do some dog fooding for another project I'm
working on, generating an arm64 assembler from the xml specification of
instructions. The plan is to write the coding utilizing my editor as the
visualization environment to get fast feedback on if I have the instructions
correct. Still a long way to go, but the fundamentals are taking shape.

# Our Work

💬 **Eli Mellen**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/share-your-work.html#2023-02-24T22:52:58.520Z)

How’d folks feel about threading the URLs to their personal sites? I’d love to
follow more folks over RSS.

# Reading Together

💡📄
[Software is an abstract artifact](http://history.futureofcoding.org/history/msg_files/F04/F04R6U17Z5K.pdf)
via [Jimmy Miller](https://jimmyhmiller.github.io/)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/reading-together.html#2023-02-25T18:21:12.155Z)

Perhaps you too are wondering if software is inherently spatial. A great paper
on this topic is “Software is an Abstract Artifact” by Nurbay Irmak. I might not
agree with everything written, but it is a very readable paper and a great
introduction to the topic.

> Software is a ubiquitous artifact, yet not much has been done to understand
> its ontological nature. There are a few accounts offered so far about the
> nature of software. I argue that none of those accounts give a plausible
> picture of the nature of software. I draw attention to the striking
> similarities between software and musical works. These similarities motivate
> to look more closely on the discussions regarding the nature of the musical
> works. With the lessons drawn from the ontology of musical works I offer a
> novel account of the nature of software. In this account, software is an
> abstract artifact. I elaborate the conditions under which software comes into
> existence; how it persists; how and on which entities its existence depends.

# Thinking Together

💬 **Ibro**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/thinking-together.html#2023-02-20T12:41:16.997Z)

I’m curious “where” people think of visual in visual programming being. For
context, I spend a lot of time in tools like Houdini, Solidworks, Cavalry, and
After Effects. Some of them have more access to computation than others, but the
biggest difference between those and Processing or threejs is a large “standard
library” of functions.

On the other hand, building a website with live feedback or scripting in a REPL
seem like a very different experience from just writing the same code in
notepad. I wonder if visual programming is all just “debug views” rather than
the specific presence of a GUI. And if so, what does that mean for generalized
visual languages or environments?

💬 [Oleksandr Kryvonos](https://twitter.com/o_kryvonos)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/thinking-together.html#2023-02-21T10:20:09.039Z)

I am not sure but this might be a _thing_ - in order to reduce scrolling through
files I try to keep each function in respective separate file (so I have over
hundred of files so far) and I wrote a simple code that copies the content of
the function into the body of the html page and adds some template text like
_&lt;script&gt; tags etc._

I try to find the most minimal set of tools in the motto of _bicycle for mind_ -
in other words - you don’t need a complex solution like an aircraft carrier but
rather a bicycle.

💬 **Eli Mellen**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/thinking-together.html#2023-02-22T14:25:44.284Z)

Does anyone have future of code flavored papers by folks who aren’t white dudes?

I’ve been pulling together a reading list for an engineering reading group at
work, and would like to make sure it’s at least a 50/50 split.

📝
[VMF-Text: Powerful Grammar-based Language Modeling Framework](https://github.com/miho/VMF-Text)
via **Jarno Montonen**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/thinking-together.html#2023-02-22T14:43:29.674Z)

I'm in need of two solutions:

- Generating a language model out of ANTLR grammar. Preferably in C#.
- Printing an AST to text according to an ANTLR grammar.

I found this [github.com/miho/VMF-Text](https://github.com/miho/VMF-Text), but
anything else?

💬 **Jarno Montonen**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/thinking-together.html#2023-02-23T12:32:40.177Z)

Another thing I'd be interested is solutions for bidirectional text
transformations (for source code). Ideally a system in which you could define
transformations once, and get both AtoB and BtoA transformers

# Content

📝
[C-rusted: The Advantages of Rust, in C, without the Disadvantages](https://arxiv.org/abs/2302.05331)
via [Shubhadeep Roychowdhury](https://github.com/rcshubhadeep)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/linking-together.html#2023-02-20T08:08:50.090Z)

🤖📝
[Papers on the UX of AI programming assistants](https://austinhenley.com/blog/uxaicoding.html)
via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/linking-together.html#2023-02-20T20:32:52.714Z)

[Papers on the UX of AI programming assistants](https://austinhenley.com/blog/uxaicoding.html)

This is a list of research papers investigating the user experience of
AI-powered programming assistants (e.g., Copilot)

📝
[VRL Studio: Innovative, intuitive and powerful Visual IDE for rapid prototyping, learning, teaching and experimentation](https://vrl-studio.mihosoft.eu/)
via **Jarno Montonen**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/linking-together.html#2023-02-22T14:27:23.939Z)

Another cool and dead project from the past I just run into

🛸📄
[A Unified Approach to Solving Seven Programming Problems (Functional Pearl)](https://dl.acm.org/doi/pdf/10.1145/3110252)
via [Kartik Agaram](https://github.com/akkartik/mu)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/linking-together.html#2023-02-23T06:15:15.394Z)

This minikanren paper is excellent: "A Unified Approach to Solving Seven
Programming Problems (Functional Pearl)"

Found via William Byrd's recent talk about ongoing work: 🛸
[FOSDEM 2023 - Self-conscious Reflexive Interpreters](https://fosdem.org/2023/schedule/event/reflexiveinterpreters)

💻🐦
[Tweet from @allan_blomquist](https://twitter.com/allan_blomquist/status/1628127169896452097?s=20)
via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/linking-together.html#2023-02-24T02:02:01.684Z)

A cool demo for live/immediate programming with a game engine and some cool
debugging explorations!

> 🐦 [Allan Blomquist](https://twitter.com/@allan_blomquist): Here's a look at
> some of our internal programming tools at Tomorrow Corporation!
>
> 🎥 [Tomorrow Corporation Tech Demo](https://youtu.be/72y2EC5fkcE)

💻📝
[Hazel, a live functional programming environment featuring typed holes.](https://hazel.org/)
via **Nilesh Trivedi**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/linking-together.html#2023-02-24T07:19:01.157Z)

🎙
[#87 Jack Rusher by defn](https://soundcloud.com/defn-771544745/87-jack-rusher)
via [Jack Rusher](https://twitter.com/jackrusher)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/linking-together.html#2023-02-24T13:35:45.667Z)

In case anyone likes this sort of thing, I just did an episode of the defn
(mostly clojure, but generally programming too) podcast

# Present Company

📝
[Designing multiplayer apps with patterns from architecture](https://interconnected.org/home/2022/01/21/social_gradient)
via **Matt Webb**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/present-company.html#2023-02-24T13:25:34.337Z)

Hi folks — any fans of A Pattern Language here? Or (like me) any wannabe fans? I
dip into it, and it has been invaluable in designing multiplayer apps with
nuanced social interaction.
[Here’s one of my blog posts.](https://interconnected.org/home/2022/01/21/social_gradient)

However! It’s long and I’ve never read the whole thing… So a few of us on Masto
decided to start a reading group. One pattern a week, we’ll finish neatly at the
end of the book’s 50th anniversary year (2027)

We’re meeting on discord at 5pm uk time on mondays (so noon east coast us, 9am
west coast). Starting this coming Monday. Join us here:
[Join the Talking Patterns Discord Server!](https://discord.gg/vCAbn4jz)

Apologies if this is out of place but I figured there was a good chance it would
be of interest to at least some people here!

📇 [People of Future of Coding](https://people.futureofcoding.org/) via
[Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/02/W4/present-company.html#2023-02-25T10:26:49.354Z)

An index of users that contributed to the newsletter and provided a link to use
when mentioned
