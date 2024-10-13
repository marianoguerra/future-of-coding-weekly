<!--
.. title: Future of Coding Weekly 2024/10 Week 2
.. slug: future-of-coding-weekly-202410-week-2
.. date: 2024-10-13 22:53:11 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎥 Future of Programming with AI 📝 Definitions and Dimensions of Liveness 🎥 Run, Build and Grow Small Systems Without Leaving Your Text Editor

# Our Work

## 🎥 [Death of the tadi web](https://www.youtube.com/watch?v=ft6xOAijwFo) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/share-your-work.html#2024-10-09T15:52:01.531Z)

![Youtube Thumbnail](https://img.youtube.com/vi/ft6xOAijwFo/hqdefault.jpg)

i gave a talk about the "tadi web". it's my idea for how to make computing better!! please enjoy.

## 🎥 ["What it means to be open" by Lu Wilson at Heart of Clojure 2024](https://youtu.be/MJzV0CX0q8o?si=NDQRhF8Gf9HvM5QQ) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/share-your-work.html#2024-10-10T10:33:56.413Z)

![Youtube Thumbnail](https://img.youtube.com/vi/MJzV0CX0q8o/hqdefault.jpg)

i gave a talk about what it means to be "open". it's very important to me!! please enjoy.


## 📝 [ara.foundation](https://ara.foundation/) via **Medet Ahmetson**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/share-your-work.html#2024-10-13T13:56:19.282Z)

Hey. I am working on the Ara project, a social network platform to build projects together. For a general information here is the landing page: [ara.foundation](https://ara.foundation/)



I did the research ([Here is the link](https://miro.com/app/board/uXjVN1CP7ck=/?share_link_id=508424426161)) and I am quite excited to meet some of the folks that I encountered there. Actually FoC helped me a lot during the research.



As for the sharing, I want to publish the whitepaper, but I need your feedback. Especially critical points if i have the flaws on my thesis.



Much appreciation [your feedback](https://docs.google.com/document/d/1LJ5JbHMg0y_GjJTWoISxVAqR9issBYlpyzuE1FqFHYw/edit?usp=sharing)

# Devlog Together

## 📝 A text editor that supports doodling by [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/devlog-together.html#2024-10-08T00:33:39.903Z)

A text editor that supports doodling.



Some previous ways to have text coexist with a canvas:




* [A fixed background that is disconnected from text.](https://smallandnearlysilent.com/inknswitch/)
* [Fixed page boundaries.](https://merveilles.town/@neauoire/112536829727198624)



Here I'm instead attaching doodles to a  _pivot_  character that they move with in the presence of edits. When you start drawing you're presented with a set of pivot options, one grey square per character on screen. After you pick one, it turns pink and the other options disappear. Now you can start drawing.



Displacements to the pivot are preserved in font-derived units, so it looks "reasonable" as you resize the font.



Deleting a character deletes all drawings pivoted on it. (But there's undo.)



This took 200 lines, so not too much though it was more than I'd initially expected.



Inspired by [this thread](https://mastodon.social/@spiralganglion/113261836923161125).

🎥 [doodle](http://history.futureofcoding.org/history/msg_files/F07/F07RGJT03CY.webm)

🎥 [doodle 2](http://history.futureofcoding.org/history/msg_files/F07/F07QD8UVDGX.webm)



## 💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/devlog-together.html#2024-10-10T16:02:05.990Z)

(Where's everyone else? I'm feeling lonely in this channel.)



I hadn't tried this until today, but it turns out to work: I can create equations forwards and back, and trigger either selectively based on what blanks I fill in.



The fine print: to switch directions I have to fill in the right blank, clear the old blank, and then type in something outside the old blank (to indicate I'm not going to type further into the old blank).



Works better if I clear the old query first, but who can remember that?



Perhaps I should just recompute on every mouse click. Then the third step could be clicking outside any blanks. More wasteful, because most of the time a mouse click won't require recomputation. It's Tadi, but is it permacomputing? 🦋

🎥 [notebook units](http://history.futureofcoding.org/history/msg_files/F07/F07R4UMK72S.webm)

## 🤖 [Generative AI inside Github Actions](https://github.com/sublayerapp/sublayer_actions) via **Scott**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/devlog-together.html#2024-10-10T16:38:04.758Z)

(I'll join in on the fun!)



I've been experimenting with using generative AI inside Github Actions lately and have been really intrigued by this async/event driven interaction model with code generation.



In [this repo](https://github.com/sublayerapp/sublayer_actions) we have a Github Action that runs every morning and has Gemini, Claude, and GPT-4 generate a PR adding additional functionality. Then on PR merge a release message is sent to our discord with example use cases and each of them riff on what was merged and try to come up with additional related functionality.



I've already merged a few PRs and some of the ideas they've come up with are pretty interesting, especially the riffs - I merged a PR about querying a notion database, and Gemini came up with taking a row in a Notion database and creating an Asana task.



Some of the things they've come up with so far:

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07R8UH0G85.png)



## 💬 **Scott**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/devlog-together.html#2024-10-11T20:27:11.526Z)

Merged a couple more exploring this async AI pattern in some new directions and starting to feel a bit like the sorcerer's apprentice with every PR I merge resulting in 3 new PRs 😆

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07RK1W70D8.png)



# Reading Together

## 🎥 [Introducing Ara: New Online Collaboration of People using tokens and AI workers](https://www.youtube.com/watch?v=suOaUQmMSGo&amp;t=144s) via **Medet Ahmetson**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/reading-together.html#2024-10-12T23:07:31.803Z)

![Youtube Thumbnail](https://img.youtube.com/vi/suOaUQmMSGo/hqdefault.jpg)

Is there any research about 3d user interface? Right now we use the windows from Xerox popularized by Macbooks. But I am considering to make it as a game scene, where everything is represented as a 3d objects. I couldn't find anything related to this, or attempts before. The only close thing for this is the holograms from the sci-fi.

As a reference, I am making a social network, but I want it to be a 3d. As a reference here is the prototype:



[youtube.com/watch?v=suOaUQmMSGo&t=144s](https://www.youtube.com/watch?v=suOaUQmMSGo&t=144s)



I also recorded the new form of interface for the crypto wallets. How the transferring tokens from your address to another is done. If there are any systematic explanation of 3d objects, I would appreciate it. :)

🎥 [Screenshare](http://history.futureofcoding.org/history/msg_files/F07/F07RMBV9DK4.webm)


# Thinking Together

## 💡 [It takes two to think](https://podcasts.apple.com/us/podcast/50-it-takes-two-to-think/id1563415749?i=1000641732153) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/thinking-together.html#2024-10-07T08:55:45.297Z)

[It takes two to think](https://podcasts.apple.com/us/podcast/50-it-takes-two-to-think/id1563415749?i=1000641732153)






> Despite the variety of creative approaches practiced by different scientists, one tried-and-true though often overlooked — trick for generating new ideas stands out. It may sound trivial, yet it is as reliable as it is simple: talk to someone. By talking with other people, we not only pool the information or ideas that each of us individually lacks, but we are also able to improvise new thoughts that are not accessible to us alone. In this episode, Itai Yanai and Martin Lercher talk through the ideas in two of their editorials (available at [nature.com/articles/s41587-023-02074-2](https://www.nature.com/articles/s41587-023-02074-2) and  [genomebiology.biomedcentral.com/articles/10.1186/s13059-021-02575-w](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-021-02575-w)).

![GZLj117WUAAHafh.jpeg](http://history.futureofcoding.org/history/msg_files/F07/F07QREM00FN.jpg)



## 💬 [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/thinking-together.html#2024-10-07T18:13:42.203Z)

do you know of a good formal specification of the semantics of spreadsheet evaluation?




## 💬 **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/thinking-together.html#2024-10-09T16:14:18.900Z)

I've realised what dynamic media and algorave have in common - they're both 80% community development and 15% projector placement

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07RHJRSGQZ.png)



## 💬 [Brian Hempel](http://people.cs.uchicago.edu/~brianhempel/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/thinking-together.html#2024-10-10T00:27:01.525Z)

Is there a citation/reference or name for the idea of the gap between the power of spreadsheets and the power of general purpose programming?

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07RW3Z0BEU.png)



# Content

## 📝 [Adobe Source Libraries (ASL)](https://stlab.adobe.com/group__asl__overview.html) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/linking-together.html#2024-10-07T09:06:21.521Z)

This document serves as an overview to the[ Adobe Source Libraries (ASL)](https://stlab.adobe.com/group__asl__overview.html). The goal of ASL is to develop the technology necessary to construct commercial applications by assembling generic algorithms through declarative descriptions.



The first two significant libraries in ASL are known as the property model library (Adam) and layout library (Eve). They are components for modeling the human interface appearance and behavior in a software application. The property model library and layout library are described along with related libraries.

## 📝 [SenseMap](https://vis4sense.github.io/sensemap/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/linking-together.html#2024-10-07T09:08:15.568Z)

[SenseMap](https://vis4sense.github.io/sensemap/) for Online Sensemaking



What are the challenges in online sensemaking?



Very often, users get lost when solving a task online, such as buying a camera or planning a holiday.



-   Where is that information I saw before?
-   How do I compare different options?
-   Where did I left off two days ago?



SenseMap captures sensemaking actions and visualise their relationships, making it easier to:



-   Find previous information,
-   Re-trace the thinking process,
-   Make sense of the topic,
-   And many other things ...


## 🎥 [Cursor Team: Future of Programming with AI | Lex Fridman Podcast #447](https://www.youtube.com/watch?v=oFfVt3S51T4) via **Jarno Montonen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/linking-together.html#2024-10-07T16:05:56.170Z)

![Youtube Thumbnail](https://img.youtube.com/vi/oFfVt3S51T4/hqdefault.jpg)

Lex Fridman interviewed the founders of maybe the #1 AI-programming tool atm. With a title like this, should be relevant to this community 🙂. Haven't had a chance to listen yet, but interested to hear thoughts in case any of you find couple hours for this

## 🎥 [Run, Build and Grow Small Systems Without Leaving Your Text Editor | LIVE 2024](https://www.youtube.com/watch?v=ehR-KIgw7T8) via [Jack Rusher](https://twitter.com/jackrusher)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/linking-together.html#2024-10-08T13:56:35.446Z)

![Youtube Thumbnail](https://img.youtube.com/vi/ehR-KIgw7T8/hqdefault.jpg)

So many nice ideas in this demo 🙂

## 📖 [Moral Codes](https://moralcodes.pubpub.org/) via [Jonathan Edwards](https://twitter.com/jonathoda/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/linking-together.html#2024-10-08T14:50:11.374Z)

“My simple answer is that we need better programming languages and less AI.” - Alan Blackwell


## 📝 [Naturalizing relevance realization: why agency and cognition are fundamentally not computational](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1362658/full) via [Stefan Lesser](https://twitter.com/stefanlesser)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/linking-together.html#2024-10-08T22:01:48.187Z)

[Naturalizing relevance realization: why agency and cognition are fundamentally not computational](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1362658/full)

This is a psychology paper, so perhaps not what you usually consume, but I want to encourage you to give this a go. I think it’s super useful to leave our bubble from time to time and learn about what other disciplines’ perspectives on computation are. I’ll quote the summary at the end, but there is so much more building up to that that you don’t want to miss, certainly not before commenting on it. :)






> The view that intelligence equals some kind of computational optimization is no longer tenable. It does not help us make sense of a large world. Therefore, claims that the study of intelligence is converging onto computational rationality as its ultimate foundation are not only premature, but outright misguided. Quite the opposite: we have shown here that the basic foundation of natural agency and cognition, and therefore of anything we could reasonably call “intelligence,” cannot be computational at all because it cannot be completely formalized. The dream of generating purely algorithmic systems able to think and act like human beings is and remains a pipe dream, because purely symbolic machines exist in small worlds, in which there is no problem of relevance to be solved.



## 📝 [Definitions and Dimensions of Liveness](https://joshuahhh.com/liveness-paper-live-2024/) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/linking-together.html#2024-10-09T11:52:25.674Z)

## 🎥 [Why Computing Education is Critical for Democracy](https://m.youtube.com/watch?v=mj9PZHrIcgU) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/linking-together.html#2024-10-11T00:26:07.158Z)

![Youtube Thumbnail](https://img.youtube.com/vi/mj9PZHrIcgU/hqdefault.jpg)

“Why Computing Education is Critical for Democracy” by Mark Guzdial

## 🎥 [How I animate 3Blue1Brown | A Manim demo with Ben Sparks](https://www.youtube.com/watch?v=rbu7Zu5X1zI) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/linking-together.html#2024-10-12T14:19:27.001Z)

![Youtube Thumbnail](https://img.youtube.com/vi/rbu7Zu5X1zI/hqdefault.jpg)

Nice behind the scenes of the [custom tool and workflow to create 3Blue1Brown videos](https://www.youtube.com/watch?v=rbu7Zu5X1zI)



I think it reinforces the idea that [Effective system design requires insights drawn from serious contexts of use](https://notes.andymatuschak.org/Effective_system_design_requires_insights_drawn_from_serious_contexts_of_use)

## 🤖 [OpenAI Realtime API](https://observablehq.com/@tomlarkworthy/openai-realtime-api) via [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W2/of-ai.html#2024-10-09T06:31:01.406Z)

Just got the Realtime API working [observablehq.com/@tomlarkworthy/openai-realtime-api](https://observablehq.com/@tomlarkworthy/openai-realtime-api) in a pure browser (and forkable) browser implementation. Was quite complicated getting the audio working in a browser, there is a vid inside. I was building this for my daughter so she could have a decent cyber pet/tutor, but the running costs are actually insane, I spend $90 in 2 days building this 😕 So I think I will actually switch to push-to-talk interaction for the actual thing.



----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
