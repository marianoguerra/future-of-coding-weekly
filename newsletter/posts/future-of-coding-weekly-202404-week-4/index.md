<!--
.. title: Future of Coding Weekly 2024/04 Week 4
.. slug: future-of-coding-weekly-202404-week-4
.. date: 2024-04-23 12:01:57 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎙️ FoC 71 • Elephant in the Room 🧶 Stitching worlds 🎥 bi-directional data flow using visual programming

# Our Work

📝 [Zest: syntax](https://www.scattered-thoughts.net/writing/zest-syntax/) via [Jamie Brandon](https://scattered-thoughts.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W4/share-your-work.html#2024-04-17T01:57:17.603Z)

If syntax isn't important why does this feel so good...

🎙️ [Future of Coding 71 • Elephant in the Room](https://futureofcoding.org/episodes/071) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W4/share-your-work.html#2024-04-21T04:11:02.908Z)

* [Inventing on Principle](https://vimeo.com/906418692)
* [Stop Drawing Dead Fish](https://vimeo.com/64895205)
* [The Future of Programming](https://vimeo.com/71278954)



Yes, all three of them in one episode. Phew!

# Devlog Together

💬 [Tak Tran](https://twitter.com/zlog)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W4/devlog-together.html#2024-04-15T22:36:44.752Z)

I’m playing with electronics and crocheting atm. Imagining what other ways there are to interact with a computer, other than keyboard and mouse. This is a custom made bend/pressure sensor using copper sheets, velostat as a semi-conductive layer in between, with a crochet leaf on top and felt on the bottom, for a soft, non metallic feel 🐑

🎥 [Video](http://history.futureofcoding.org/history/msg_files/F06/F06UH8UNSA0.mp4)

🔙 [How can you even reverse a function?](https://mastodon.social/@spiralganglion/112282956696254310) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W4/devlog-together.html#2024-04-17T01:43:28.682Z)

I [shared](https://mastodon.social/@spiralganglion/112282956696254310) some [thoughts](https://mastodon.social/@spiralganglion/112284014138207711) about  _my personal definition of_  reversible computing over on Mastodon today. (Yeah, I slightly mangled the example of a surjective function — should have said  _nonnegative_  integers.)

🎥 [bi-directional data flow using visual programming](https://youtu.be/3vINEOECt9w) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W4/devlog-together.html#2024-04-20T07:28:58.971Z)

![Youtube Thumbnail](https://img.youtube.com/vi/3vINEOECt9w/hqdefault.jpg)

[In this video](https://youtu.be/3vINEOECt9w) I show a small celsius to fahrenheit converter (this is one of the tasks from 7Gui) that I build using my visual programming system and extended it where needed.

The solution uses an observe-variable node-type which triggers a flow when a variable gets set. I've also build a new user-input node with decimal formatting option (in the near future I will extend this to be configurable forms for collecting user-input).



You can see what happens as you type in the celsius or fahrenheit temperature in the input fields (you see the data flowing though the flow). To prevent an infinite loop, the flow-engine uses a call-stack which stops running when a node gets run twice.



I am still thinking of different solutions but for now this works (some nodes gets run unneeded, I think this can be optimized). Per node-call the node-id, scope-id and input port-name is stored on the call-stack, this is needed to keep other things working like the recursive functions in the quicksort example.



The celsius-to-fahrenheit converter can be tried out here : [demo.codeflowcanvas.io](https://demo.codeflowcanvas.io) via the examples dropdown.

# Content

🧶 [Stitching worlds](https://www.stitchingworlds.net/) via [Tak Tran](https://twitter.com/zlog)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W4/linking-together.html#2024-04-15T22:28:51.596Z)

Stitching worlds - a magazine imagining “What if electronics emerged from textile techniques such as knitting, weaving, crochet, and embroidery?” - [Stitching worlds](https://fedora.phaidra.bibliothek.uni-ak.ac.at/fedora/get/o:34528/bdef:Content/get) ([stitchingworlds.net](https://www.stitchingworlds.net/))



An embroidered computer using gold embroidery and magnetic beads (in the magazine): [ireneposch.net/the-embroidered-computer](http://ireneposch.net/the-embroidered-computer/)
> 📝 [stitchingworlds](https://www.stitchingworlds.net/)
>
>Stitching Worlds is an artistic research project funded by the Program for Arts-Based Research (PEEK) of the Austrian Science Fund (FWF). The project is hosted by the University of Applied Arts Vienna, Institute of Design, Department of Industrial Design 2.

> 📝 [The Embroidered Computer | Irene Posch](http://ireneposch.net/the-embroidered-computer/)
>
>The Embroidered Computer uses historic gold embroidery materials to craft a programmable 8 bit computer.

📝 [sesnors](https://www.kobakant.at/DIY/?cat=26) via [Tak Tran](https://twitter.com/zlog)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W4/linking-together.html#2024-04-16T07:10:29.256Z)

Also, a treasure trove of ideas for ways of making DIY [sesnors](https://www.kobakant.at/DIY/?cat=26)/[connections](https://www.kobakant.at/DIY/?p=7966)/[actuators](https://www.kobakant.at/DIY/?cat=28) and random other things - [How to get what you want](https://www.kobakant.at/DIY/) (DIY wearable technology documentation)



Great name too 😄



📝 [Understanding and Effectively Mitigating Code Review Anxiety](https://osf.io/preprints/psyarxiv/8k5a4) via **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W4/linking-together.html#2024-04-16T14:28:30.709Z)

Not a 1:1 future of coding article, [but this paper recently published by the dev. success lab is pretty neat](https://osf.io/preprints/psyarxiv/8k5a4), especially if you are interested in helping to foster learning culture.

# 🤖

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W4/of-ai.html#2024-04-19T17:51:50.312Z)

Has anyone done any work with the memory design from the human simulacrum paper by Joon Sung Park? Saw a presentation last week at Stanford, the boss is having me experiment with his code base. Would like to exchange notes.

# Present Company

💬 [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/04/W4/present-company.html#2024-04-19T23:41:22.930Z)

My favorite loosely-syntaxed calculator finally has another mobile release!
 ![image.png](http://history.futureofcoding.org/history/msg_files/F06/F06V85G8BGB.png)




----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
