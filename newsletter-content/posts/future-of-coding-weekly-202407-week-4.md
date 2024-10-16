<!--
.. title: Future of Coding Weekly 2024/07 Week 4
.. slug: future-of-coding-weekly-202407-week-4
.. date: 2024-07-21 23:40:07 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

💡 Where Should Visual Programming Go? 📝 We Can Do Better Than SQL 🎥 Home-cooked Software and Barefoot Programmers

# Two Minute Week

🎥 [Structured editor in a code notebook](https://vimeo.com/984437518?share=copy) via [Peter Saxton](https://twitter.com/CrowdHailer)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/two-minute-week.html#2024-07-15T19:01:06.774Z)

![Vimeo Thumbnail](https://i.vimeocdn.com/video/1899883601-b891ffea8874be26e42ef39ca370d29f5b2603487dd051a27e170cb54ddf7ae4-d_295x166)

Presenting a structured editor in a code notebook. I think I'm going to enjoy this environment

💬 [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/two-minute-week.html#2024-07-18T20:58:34.091Z)

I spent 2.5 months building a spatial compiler for lazer cutter plans to build a (massive) shelf. The shelf is built! But all the parts were mirrored, which was not an actual problem, but it was unexpected (a polarity problem somewhere).



For a few other test projects, when the edges are nearly the same length on the parts, the assembly is ambiguous, and it kinda assembles but the shape gets warped from misfitting. So recently I added labels to the edges, so I know which side should match which without ambiguous matching based on eyeballed length. After adding the labels the part visualisation had the numbers backwards, AH HA! my revelation was that this explained why my parts were mirrored.



My whole schtick at the moment is data viz driven development. Dataviz of runtime application state is the extension of text based coding/debugging that delivers value beyond our existing programming paradigms.

🎥 [labelled cube](http://history.futureofcoding.org/history/msg_files/F07/F07DGAX07FB.mov)

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07DGBBPAG1.png)

# Our Work

🎙️ [91. What scares you about AI? Vol.2](https://www.machine-ethics.net/podcast/what-scares-you-about-ai-vol.2/) via **Ben Byford**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/share-your-work.html#2024-07-15T11:15:52.752Z)

not code per say, but AI philosophy

💻 [github.com/thegreatercurve/okapi](https://github.com/thegreatercurve/okapi) via **John Flockton**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/share-your-work.html#2024-07-18T15:32:41.909Z)

Hey folks! I thought I’d share a JavaScript parser I’ve been working on: [github.com/thegreatercurve/okapi](https://github.com/thegreatercurve/okapi)



Very much a work-in-progress, but it's nearly fully compliant with the ECMAScript 2024 spec, 100% passes the Test262 parser test suite, and outputs ESTree.



My next step is to look into refactoring it to output bytecode by default, with the hopes of turning that into an actual JS engine one day.

# Devlog Together

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/devlog-together.html#2024-07-16T06:37:10.884Z)

End-to-end demonstration of code generation and chatbot creation in the Blawx prototype I've been working on. The LLM generates a block-based, visual, domain-specific constraint logic program based on the text of the law and the ontology defined by the user, then you encode a question and an interview and you have a chatbot that doesn't have the black box problem of LLMs, but has the same easy interface. Very interested in anyone's comments.

🎥 [blawx llm](http://history.futureofcoding.org/history/msg_files/F07/F07C5JW7SP9.mp4)

# Thinking Together

📝 [Protective Randomness: Why We Fear the AI Unknown and What to Do about It](https://www.linkedin.com/posts/colarusso_protective-randomness-why-we-fear-the-ai-activity-7218600315464413184-rpc2?utm_source=share&utm_medium=member_android) via [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/thinking-together.html#2024-07-15T19:54:14.172Z)

After reading a linkedin post by a friend of mine, today, in which he describes "protective randomness" as a virtue of human systems, the absence of which makes certain AI applications frightening, ([Protective Randomness: Why We Fear the AI Unknown and What to Do about It](https://www.linkedin.com/posts/colarusso_protective-randomness-why-we-fear-the-ai-activity-7218600315464413184-rpc2?utm_source=share&utm_medium=member_android)) I have come to the conclusion that this may be the best argument I have heard to object to the determinism in Rules as Code: that the systems we have for dealing with the output of the interpretation of statute not only anticipate but depend on variability of interpretation for their effective operation, and that they operate to do more than merely resolve disputes over legal interpretation, so the absence of those disputes is not an unmitigated benefit. Take for instance the conversation that happens between law makers and judges. A law is drafted, there are disputes over how to interpret it, in part fueled by examples of differing interpretations from administrative decision makers. Those differences in interpretation can help people know on what grounds they might object to a particular decision. Those objections go to judges, and judges might differ again, which has the same effect. And the differing interpretations of the judges in the context of things worth arguing about brings to legislators' attention places where the rule itself is both problematic from a fairness and/or interpretation standpoint, and where that problem causes significant issues in the real world, equipping them with information about where to focus when considering amendments. All of those benefits accrue even if no decision is ever made to resolve the dispute. If you replace variable administrative decision makers with a deterministic system based on a best shared interpretation, that review system, which not only accounts for but depends on variable outputs to function, stops working as effectively. That is not to say that what you lose is not worth what you gain. But it is a coherent argument about what is lost, and how, from consistent automated application of laws, and it is prescriptive about where and how rules as code should best be applied to avoid those losses. Which now makes me wonder whether armed with this idea, I would have a more generous read of the Laurence Driver paper.



For context, the linked post is aimed more at attempting to understand some forms of anxiety around AI applications, and particularly in the context of copyright violation, which Colarusso considers complaining about the wrong thing. But the idea metastasized in my head, and now I might have to give Driver the benefit of the doubt.

📝 [Coding is State Farming](https://frest.substack.com/p/state-farming) via **Guyren Howe**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/thinking-together.html#2024-07-15T21:17:05.245Z)

I have a blog about matters related to the topics here. Just dropped this, which discusses why more of typical business logic should be implemented in the database: [Coding is State Farming](https://frest.substack.com/p/state-farming)

📝 [Thinking About The Game Of Pong In Hardware And Software](https://open.substack.com/pub/programmingsimplicity/p/2024-07-17-thinking-about-the-game?r=1egdky&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/thinking-together.html#2024-07-17T20:08:31.989Z)

Thinking about Schematics vs. Code. [This began as a short reply to [Stefan Lesser](https://twitter.com/stefanlesser) regarding my take on electronics schematics in another thread.]

💬 **Adam Davidson**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/thinking-together.html#2024-07-19T16:35:00.550Z)

Just a random thought that has been rattling around in my head while listening through podcast episodes and Ivan’s visual programing points. I am new here so apologies If all this has been said before, or covered in podcasts I haven’t gotten to yet.



I want to propose a slightly different framing for what it means to say that a representation of a program is visual / spatial or not

[... read more](https://history.futureofcoding.org/history/weekly/2024/07/W4/thinking-together.html#2024-07-19T16:35:00.550Z)


# Content

🐘 [This masto thread](https://merveilles.town/@zens/112805206600616310) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/linking-together.html#2024-07-18T05:11:27.692Z)

[This masto thread](https://merveilles.town/@zens/112805206600616310) should resonate with folks here. Teaser:






> fediverse is the kind of place where I can ask a question of “let’s say we’re designing an operating system from scratch. Clean slate. Let’s throw away all our old habits and legacy decisions. what’s the minimal set of applications we need to make a new operating system useful”



and the top replies are vt100 emulator, virtual machine to run other operating systems, and c compiler to port vim



like y’all are missing the point of the question!


🤔 [We need visual programming. No, not like that.](https://blog.sbensu.com/posts/demand-for-visual-programming/) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/linking-together.html#2024-07-18T15:46:25.631Z)

>  *Let's observe what developers*  _*do*_ *, not what they* _*say*_*.* 
> Developers do spend the time to visualize aspects of their code but rarely the logic itself. They visualize other aspects of their software that are 
>  _important, implicit, and hard to understand_. Here are some visualizations that I encounter often in serious contexts of use:
> * Various ways to visualize the codebase overall.
> * Diagrams that show how computers are connected in a network
> * Diagrams that show how data is laid out in memory
> * Transition diagrams for state machines.
> * Swimlane diagrams for request / response protocols.
>  _This_ is the visual programming developers are asking for.


💡 [Where Should Visual Programming Go?](https://tonsky.me/blog/diagrams/) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/linking-together.html#2024-07-18T15:50:07.883Z)

As a follow-up to the above, there's this nice blog post from **@Nikita Prokopov** on  _diagrams as code:_ [Where Should Visual Programming Go?](https://tonsky.me/blog/diagrams/)






> Level 3: Diagrams are code

This is what the endgame should be IMO. Some things are better represented as text. Some are best understood visually. We should mix and match what works best on a case-by-case basis. Don’t try to visualize simple code. Don’t try to write code where a diagram is better.



Hear, hear!



🐘 [Luci for dyeing (@zens@merveilles.town)](https://merveilles.town/@zens/112793890297088472) via [Christopher Galtenberg](https://twitter.com/galtenberg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/linking-together.html#2024-07-20T19:50:21.867Z)

>a huge formative experience happened when I was 16. I was brought into my mother’s office and hired to compell a guy to use his computer who was refusing to use his computer, and exclusively used his IBM selectric. 
> First up, the guy was an unlikable jerk. However, first thing he does when I get there is refuse to even talk to me about the situation until AFTER I read The Invisible Computer by Donald Norman. 
> It’s a good book I cannot summarise in the 50 characters I have left in this post

📝 [We Can Do Better Than SQL | EdgeDB Blog](https://www.edgedb.com/blog/we-can-do-better-than-sql) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/linking-together.html#2024-07-21T19:39:49.246Z)

>The questions we often hear are “Why create a new query language?” and “What’s wrong with SQL?”. This blog post contains answers to both.

# Music

🎛️ [noodlesynth.com](https://noodlesynth.com) via **Ronald C**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/of-music.html#2024-07-21T03:27:20.906Z)

I'm working on a web based modular synthesizer: [noodlesynth.com](https://noodlesynth.com)

# End User Programming

🎥 [Home-cooked Software and Barefoot Programmers: Maggie Appleton (Local-First Conf)](https://youtu.be/qo5m92-9_QI?si=mMBPSv5UPpCuh3x1) via **Beni Cherniavsky-Paskin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/of-end-user-programming.html#2024-07-17T12:14:20.373Z)

![Youtube Thumbnail](https://img.youtube.com/vi/qo5m92-9_QI/hqdefault.jpg)

coins some neat terms, from "barefoot developers" to "the long tail of user needs".

# 🤖

💬 [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W4/of-ai.html#2024-07-18T10:12:17.896Z)

hi! I'm co-organizing a builders-first AI & UX meetup in Berlin in September, if you are interested send me a DM





----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
