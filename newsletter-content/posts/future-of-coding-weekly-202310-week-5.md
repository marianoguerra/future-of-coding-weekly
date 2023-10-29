<!--
.. title: Future of Coding Weekly 2023/10 Week 5
.. slug: future-of-coding-weekly-202310-week-5
.. date: 2023-10-30 00:51:42 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🖼️ Drawing Images Explains Programs 🐰 Data Exploration, Visualization & Learning 💡 Is generic code just hopeless in practice?

# Two Minute Week



# Our Work

💬 [Daniel Garcia](https://pel-daniel.github.io/cv/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/share-your-work.html#2023-10-29T06:03:43.331Z)

I’ve been working on a tool to get a high level view of an entire typescript codebase to help me understand/navigate it.

It shows all the functions and interfaces. Every  `interface`  is represented by a color, and the signature of a function is shown with these colors.



I need some help with a better algorithm to transform the name of the  `type`  into to a color. e.g. the type  `string`  -> blue,  `int`  -> green, etc.

The problem is that I’m not sure what I want the output to be, how should the color space be distributed? how should colors be clustered?



I think I can copy what code editors use for  `semantic highlighting` , but I haven’t been able to find an implementation of it.

Does anyone have ideas on what I should search for?

Happy to explain more, if it’s not clear.



PS. Here is how a codebase currently looks. White rectangles are files, interfaces are shown on the top, and functions on the bottom

![Screenshot 2023-10-28 at 10.08.57 PM.png](http://history.futureofcoding.org/history/msg_files/F06/F063BQWJFDJ.png)

# Devlog Together

📝 [ALDs compatibility with code projection focused of concatenative code](https://history.futureofcoding.org/history/?fromDate=2023-10-22&toDate=2023-10-28&channel=thinking-together&filter=#2023-10-25T09:06:24.573Z) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/devlog-together.html#2023-10-26T19:10:50.567Z)

Some nice original research by [Lukas Süss](https://twitter.com/mechadense): [💬 #thinking-together@2023-10-24T22:28:03.239Z](./?fromDate=2023-10-21&toDate=2023-10-27&channel=thinking-together&filter=#2023-10-24T22:28:03.239Z)
> [October 24th, 2023 3:28 PM] lukas.suess: <@U01ULCCJB7X>
> I spontaneously decided to project your example to an ALD mockup to get a bit of a feeling for inhowfar ALDs are compatible with your code projection focused of concatenative code.
> Seems pretty good.
> 
> ★ One nice thing with ALDs is that library functions are threated exactly the same as argument values. They come in as semi-implicit arguments via the grey collection abstraction-line.
> ★ One annoying (but I think good) restriction of ALD is that functions (and definitions in let sections) can only ever have just one single value-line as their final output (except one cheats a bit as I've done here with memocurry :smiling_imp:).


💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/devlog-together.html#2023-10-28T20:19:31.035Z)

Ok, I think I've tapped into a rich new vein of pointless demos.

🔗 [unit.land](https://unit.land/) via **Samuel Timbó**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/devlog-together.html#2023-10-28T23:01:17.733Z)

The time has come for “the bot” to leave main [unit.land](https://unit.land) 🥲 


> 📝 [unit.land](https://unit.land/)
>
>Local First Open Source Distribuition of the Unit Programming Environment.

> 📝 [Samuel Timbó on X](https://twitter.com/io_sammt/status/1718332004419170414?s=46&t=kvyalr_gJlbdW-jQJstTcg)
>
>Doesn't [unit.land](https://unit.land) feel lonely without the bot?

# Thinking Together

📝 [Using computers more freely and safely](https://akkartik.name/freewheeling/) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/thinking-together.html#2023-10-24T04:29:33.522Z)

 *Replacing authentication with visual identity* 



Background: I'm starting to think about building a new forum. Given [my past](https://akkartik.name/freewheeling/), it won't surprise anyone that I mean to do this outside the morass of non-convivial software that is the modern web browser. My broad plan is:






* LÖVE v12 will support https, and [release candidates](https://github.com/love2d/love/actions) are already quite stable. Good enough to start building on.
* I'll build my forum out of a server-side API in Lua and a client in LÖVE v12. (Should be easy to support Windows, Linux, BSD and Android. Mac and iOS will require some annual contortions to build LÖVE for oneself.)
* The server side will of course be open source just like the client. In addition, all post/comment data will be published to a git repo on something like a daily basis.



The one major open question concerns authentication. How can we have stable identity? The above architecture is intended to allow anyone to host the forum (without trying to build galaxy-brain merkle trees, federated protocols or CRDTs), and I would prefer to not take a position of power as the source of everyone's hashed passwords (an intrinsically centralizing architecture).



A few months ago someone showed me this ancient essay called ["attacked from within"](https://web.archive.org/web/20091126092028/http://www.kuro5hin.org/story/2009/3/12/33338/3000), and I find myself thinking about it often. The whole thing is worth reading, but for this thread the crucial list of bullets halfway down is:




* Registration keeps out good posters.
* Registration lets in bad posters.
* Registration attracts trolls.
* Anonymity counters vanity.



A provocative worldview that seems at least worth exploring. Keeping this in mind, I have a hazy idea that looks like this:




* When you run the client you get to choose your handle, but it's not unique (cf. [Zooko's Triangle](https://en.wikipedia.org/wiki/Zooko%27s_triangle))
* When you run the client for the first time, it creates an RSA keypair for you.
* When composing messages, the client signs the message with your private key ([description on Wikipedia](https://en.wikipedia.org/wiki/RSA_(cryptosystem)#Signing_messages))
* When rendering messages, the client validates the signature against your public key and shows something like an [identicon](https://en.wikipedia.org/wiki/Identicon) of the public key.



Implications of this setup:




* No registration
* Your "password" (private key) never leaves your device(s).
* When reading a thread you see a handle like  `spiralganglion` . However, the handle is not authoritative. Next to it is an identicon that is authoritative.
* It's easy in a thread to see if there are ever two people with the same handle but different identicons.
* Since the client platform is starting from scratch, accessibility and internationalization will be a challenge for a long time 😕



No guarantees this is all doable. It's quite possible the cryptographic operations will be untenably slow when implemented in Lua, and a native library for them would complicate the simple install story that is LÖVE's greatest strength.



But I'm curious to get people's thoughts on this idea in principle.

💬 [Matthew Linkous](https://twitter.com/aspen_cloud)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/thinking-together.html#2023-10-24T19:11:28.510Z)

Maybe more of a general coding question but how do you y’all feel about database/stores that add fields to your documents that insert?

E.g. you insert  `{ name: 'Titanic', director: 'James Cameron' }`  into  `movies`  and when you fetch it you get back  `{_id: 1234, _col: 'movies', name: 'Titanic', director: 'James Cameron' }` 

Does that bug you? Don’t care?



Are there any ways to get around this so there aren’t won’t ever have collections between user defined fields and internal metadata?

💬 **FreeMasen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/thinking-together.html#2023-10-25T00:48:09.284Z)

One of the things I am curious about is how a11y relates to the future of coding. So far it doesn't seem to come up in the discussions on the podcast but I think there is something to be said about the advancement in a11y in computing over the last 25 years and a large part of this is due to a movement away from some of the more creative interface designs (ala Magic Ink). Is there a future of code that is more accessible to people with different abilities?

🧮 [Lambda Diagrams](https://tromp.github.io/cl/diagrams.html) via [Lukas Süss](https://twitter.com/mechadense)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/thinking-together.html#2023-10-25T09:06:24.573Z)

Here's the big omega combinator as annotated lambda diagram.

Plus showing how the (here non-terminating) evaluation could be fluently animated. 🤤

( John Tromps unannoteed version here: [tromp.github.io/cl/diagrams.html](https://tromp.github.io/cl/diagrams.html) )

![Screenshot_20231025_105239.png](http://history.futureofcoding.org/history/msg_files/F06/F062H8XPRK8.png)

💡💬 **Marcelle Rusu (they/them)**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/thinking-together.html#2023-10-25T15:02:42.762Z)

In the past year or 2, I got interested in OO and I find even its basic form within a mainstream language very powerful.



Yet, when I try to advocate for using polymorphism in almost any context, I get "this is too unfamiliar"/"that's not how we do things in framework X" instead advocating for switch statements or similar.



And it really gets me thinking, if we don't even understand OO after 30 years of mainstream adoption (in some form or another) and are still doing "structured programming" with lambdas & objects, is generic code just hopeless in practice? Is there an education problem? Is it just indicative of how poor standards are that few people have the privilege to do any amount of design for their systems before developing?



If so, how does "future of coding" even matter if any form of real adoption feels impossible.


💡💬 [Jimmy Miller](https://jimmyhmiller.github.io/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/thinking-together.html#2023-10-26T19:47:15.445Z)

Forking **@Marcelle Rusu (they/them)**’s thread onto this bit




> If so, how does "future of coding" even matter if any form of real adoption feels impossible.



(Making a new thread about this because the other one has become about OO instead of this bit)



I feel this deeply. It can often feel as if things don't get adopted. That programming doesn't change for the better. I have so many thoughts on this, it is hard to summarize.



First, I do think we can get others to adopt the things we value. It is almost never an education issue, imo and instead a value question. (I am intentionally leaving aside the OO frame here). Think about the impact that Rich Hickey has had on how many people code, not just clojure people, but in the industry broadly. How did he do it? Through Simple Made Easy, a talk largely about values, not techniques. The same is true of Bret Victor's influence on the future of coding community. He communicated values that others adopted.



I've found this to be true in practice as well. Trying to convince people to change their coding style requires diligence, communicating values, and showing how code improves because of these values. Conflict often happens when people implicitly hold very different values. I'm going to bet that is the case in the original example given.



But I also want to step back and ask, what kind of adoption, by who, by how many people? I'm willing to bet a lot of people in this slack listen to some genre of music that isn't completely mainstream. Have those genres failed because of the lack of becoming mainstream? Would they be better if they became mainstream?

💬 **Arcade Wise**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/thinking-together.html#2023-10-26T20:52:18.869Z)

Have y’all heard about the PLATO computer system? 

💬 **Gregor**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/thinking-together.html#2023-10-28T14:57:08.473Z)

I’m looking to learn more about a space, that I’m not sure exists. Does this word comob trigger associations to existing projects: spreadsheet, schema, hierarchy?

🐰🎥 ["No Code" Intro to Data Rabbit for Visualization & Dashboarding (for non-Clojure peeps)](https://www.youtube.com/watch?v=wE-vOSY-ULc) via **Qqwy / Marten**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/thinking-together.html#2023-10-28T16:29:34.734Z)

![Youtube Thumbnail](https://img.youtube.com/vi/wE-vOSY-ULc/hqdefault.jpg)

What do people here think about the REBL (read-eval-browse-loop) and the ‘Data Rabbit’ project which evolved from it?



Both are tools originating in Clojure, but where the REBL is about mixing writing/running Clojure with having a graphical interface to drill down into the output data (e.g. a natural ‘visual programming’ evolution of a REPL),

I’d describe Data Rabbit as the opposite: A data inspection/‘dashboard creation’ tool where you can do most tasks visually, only dropping down to Clojure if you want to do really custom things (or create new types of ‘blocks’/interactions).

💬 **Qqwy / Marten**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/thinking-together.html#2023-10-28T16:39:19.200Z)

And in not totally unrelated fashion, there’s PureData (FOSS) / Cycling76' Max (paid), which are reasonably successful graph-based programming languages for digital music synthesizers.



I expect that in that particular case graph-based programming is so successful because it is a direct translation of how (analog) modular synthesizers used to be patched together, flattening the learning curve for musicians.

# Content

🐍 [pythontutor.com](https://pythontutor.com/) via **Marcelle Rusu (they/them)**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/linking-together.html#2023-10-23T21:15:02.428Z)

[pythontutor.com](https://pythontutor.com/)



Anyone play around with this? I was given this back in first-year comsci, and I think honestly there's few tools which top it.


🖼️🎥 [Kaleido Demo](https://vimeo.com/11064303) via [Joshua Horowitz](https://twitter.com/qualmist)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/linking-together.html#2023-10-27T08:54:29.769Z)

![Vimeo Thumbnail](https://i.vimeocdn.com/video/59768675-9325a1808dd0b7c76de039fd1b3be003cdda7be1fd1b68b17043a3a9cd3d805d-d_295x166)

Kaleido lets a Processing programmer draw a picture to map out different parts of their program

This idea is so simple and “unsophisticated” and it looks utterly transformative. (I’ve never seen anything like it!)

# 🤖

☠️ [Meet Nightshade, the new tool allowing artists to ‘poison’ AI models with corrupted training data](https://venturebeat.com/ai/meet-nightshade-the-new-tool-allowing-artists-to-poison-ai-models-with-corrupted-training-data/) via [Chris Maughan](http://www.chrismaughan.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/of-ai.html#2023-10-26T09:43:19.381Z)

📝 [Peo generative ail](https://guitarvydas.github.io/2023/10/27/PEO-Generative-AI.html) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W5/of-ai.html#2023-10-27T15:32:44.491Z)

A.I. is simply pattern matching - a summary of a talk I attended … 


