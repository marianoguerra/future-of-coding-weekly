<!--
.. title: Future of Coding Weekly 2024/02 Week 1
.. slug: future-of-coding-weekly-202402-week-1
.. date: 2024-02-04 23:10:57 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->


# Our Work

🎥 [Inventing on Principle for Gleam](https://vimeo.com/907533908) via [Peter Saxton](https://twitter.com/CrowdHailer)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W1/share-your-work.html#2024-01-29T17:46:21.020Z)

![Vimeo Thumbnail](https://i.vimeocdn.com/video/1790057746-19562913e02543df8bc04fcf8acdffad7e5e0e1f6a9b6e5b9f11c0c43cfcc19e-d_295x166)

I've implemented an interpreter for Gleam, (in Gleam) so that I could make a bunch of tooling quickly. This is my first effort at brett victors version of Live Coding.

📝 [Software Instruments](https://escholarship.org/uc/item/98c6j416#article_main) via **Jasmine Otto**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W1/share-your-work.html#2024-01-31T20:13:05.271Z)

My PhD thesis about my ongoing attempts to marry AI and HCI is now up. (A lot of it is about academia, where those two fields  _do not like_  to talk.) Plenty of stuff about paper tools, rapid visualization prototyping, and the connection between domain-specific languages and direct-manipulation interfaces.


>Author(s): Otto, Jasmine Tan | Advisor(s): Smith, Adam M | Abstract: Software instruments are intelligent interfaces used by domain experts to manipulate complex artifacts. By contributing the concept of software instruments, this thesis connects the field of data visualization to its relations in both artificial intelligence and computer-supported collaborative work. Software instruments arise from projects carried out by teams with complex datasets in aerospace and narrative design, whom I have worked closely with, and which are developed and documented in this thesis. They are a lens for other computational media practitioners to introspect about their own design processes and artifacts. I argue that the evaluation of software instruments occurs in discussion with expert stakeholders, adopting the lens of critical technical practice to avoid disciplinary silos and narrow strategies of evaluation.

💻 [github.com/sublayerapp/blueprints](https://github.com/sublayerapp/blueprints) via **Scott**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W1/share-your-work.html#2024-02-01T21:08:22.453Z)

We just open sourced this concept we've been working on for programming with LLMs we're calling Blueprints. It is kind of an alternative to coding copilots. It allows you to capture patterns/sections/chunks/classes/etc of your code to store as a "blueprint" then use those blueprints as a base template for generating something new - in your particular style. Think about it similarly to how when you work on a new feature, a lot of the time there's similar code in your codebase that you look at and modify for this new use case you're working on.



The way it works is that when you capture a blueprint, the server generates a description with GPT4 along with vector embeddings of that description so that the next time you want to do something you just need to describe it, it finds the closest description, and uses the description+code to prompt for the new code generation.



Would love feedback or to chat if this sounds interesting to anyone!



Repo here: [github.com/sublayerapp/blueprints](https://github.com/sublayerapp/blueprints)

[Short demo of it in action](https://www.loom.com/share/727e449a764e4362b28a74460db84655)

💬 **Elliot**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W1/share-your-work.html#2024-02-02T16:35:11.247Z)

Hey y'all. I'm working towards a library for rendering and adding direct-manipulation to infinite recursive things. I want to share this picture showing where I'm at.



On the left is the rendered infinite recursive thing. On the right is the diagrammatic specification for the thing on the left. The library interprets the diagrammatic spec and produces a program that takes the initial transformation (position, rotation, scale, and skew) of a shape (data for a  `t`  in the diagram), and then runs forever, adding more shapes to the left and the right as it runs.



The arrows in the spec mean "depends on", and the lines mean "depends on" both ways. I could have drawn the lines as two-sided arrows but I found that it was harder to read. Explaining this now I realize its kind of confusing tho lol.



The self-loop on the  `t`  in the spec is what makes the resulting diagram recursive, otherwise it would be a single red, green, and blue thing.



Currently the diagrammatic spec is actually specified in text 😐

![image.png](http://history.futureofcoding.org/history/msg_files/F06/F06GVN8C23F.png)


💬 **Gabriel Grinberg**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W1/share-your-work.html#2024-02-04T21:32:21.199Z)

Hey everyone 👋 made some big progress with Flyde in the recent months, and would love to share it here!

Flyde is an open-source, visual programming language. It runs in the IDE, integrates with existing TypeScript code, both browser and Node.js.



Flyde is




* Revamped website - [flyde.dev](https://www.flyde.dev) (see old one [here](https://web.archive.org/web/20231205034447/http://www.flyde.dev/)) 
* Online playground - [play.flyde.dev](https://play.flyde.dev) 
* Dark mode (!!) in the VSCode extension
* Documentation [flyde.dev/docs](https://www.flyde.dev/docs/)



Would love to hear your thoughts and feedback 🕺

🎥 [Demo](http://history.futureofcoding.org/history/msg_files/F06/F06HT4W169E.mov)

# Devlog Together

🎠 [Pong Wars](https://akkartik.itch.io/carousel/devlog/673935/pong-wars) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W1/devlog-together.html#2024-01-30T15:24:00.348Z)

Have  y'all heard the good word yet about Pong Wars, a.k.a Yin-Yang for Pong, a.k.a Pin-Pong?



🎥 [Ping Pong](http://history.futureofcoding.org/history/msg_files/F06/F06GCN9SV36.webm)


🎲 [Intro to WebPPL, a Probabilistic Programming Language (PPL)](http://alltom.com/pages/webppl-intro/) via [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W1/devlog-together.html#2024-02-02T16:57:38.945Z)

Thanks to the power of View Source, I've embedded WebPPL on a web page of my own site! Just a simple (but perhaps more evocative than usual) intro to the language for now: [alltom.com/pages/webppl-intro](http://alltom.com/pages/webppl-intro/)

💬 [Oleksandr Kryvonos](https://twitter.com/o_kryvonos)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W1/devlog-together.html#2024-02-02T22:43:48.433Z)

so this has been developed a while ago, I just wanted to see how 🎥 [code on canvas looks like](http://history.futureofcoding.org/history/msg_files/F06/F06GL85PCQP.mov)

# Reading Together

📝 [The half-life of developer skills is shrinking rapidly - Stack Overflow](https://stackoverflow.blog/2024/01/16/Kian-Katanforoosh-standford-deep-learning-ai-skills/) via **Salmen Hichri**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W1/reading-together.html#2024-01-29T11:37:59.329Z)

A very interesting podcast talking about  *the future of software engineering*  💡




* How classic programming differs from ML/AI programming ..
* How to software engineers can adapt to emerging AI technologies ..
* And few other topics related to AI/ML and software engineering ...

# Content

📘 [The Architecture of Open Source Applications](https://aosabook.org/en/) via [Florian Schulz](https://twitter.com/getflourish)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W1/linking-together.html#2024-02-02T16:07:06.267Z)

Just learned about this: “The Architecture of Open Source Applications”

📝 [The Engineering behind Figma's Vector Networks](https://alexharri.com/blog/vector-networks) via [Shalabh Chaturvedi](https://twitter.com/chatur_shalabh)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W1/linking-together.html#2024-02-04T01:14:27.489Z)

Interesting read covering vector graphics "paths" and "vector networks" 

>A deep dive into the world of vector networks, and the engineering challenges involved in their implementation.


🧑🏽‍💻 [getspectral.io](https://www.getspectral.io/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/02/W1/linking-together.html#2024-02-04T15:14:53.278Z)

Figma meets Visual Studio Code: Collaboratively navigate, debug and edit your codebase on an infinite canvas



----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://tinyletter.com/marianoguerra/) / [Archive](https://newsletter.futureofcoding.org/) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
