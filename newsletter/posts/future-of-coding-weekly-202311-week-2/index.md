<!--
.. title: Future of Coding Weekly 2023/11 Week 2
.. slug: future-of-coding-weekly-202311-week-2
.. date: 2023-11-12 23:33:55 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

📢 Algorithmic Pattern Salon 2023 🎼 Notation Must Die 🌲 The Expanding Dark Forest & Generative AI

# Two Minute Week



# Our Work

📢 [Algorithmic Pattern Salon 2023](https://salon.algorithmicpattern.org/) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/share-your-work.html#2023-11-08T09:58:45.620Z)

An online event I'm co-running - Algorithmic Pattern Salon 2023

Talk sessions over five days, exploring contemporary and heritage algorithms in weaving, braiding, music, typography, live coding, juggling, etc etc

💻 [Levlo](https://levlo.com/) via **Jarno Montonen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/share-your-work.html#2023-11-09T07:04:06.034Z)

It's still early, but what do you all think about [levlo.com](https://levlo.com)? Any feedback is welcome, but I'd especially love to hear how do you understand the product based on the messaging on the site. What would you build with it?

>Levlo is a textual no-code platform that allows you to create, share, and monetize expert applications without coding. Start building your app today!

📝 [Personification of computer processes](https://www.latentcenters.com/personification-of-computer-processes) via **Tomaz Zlender**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/share-your-work.html#2023-11-09T09:25:32.966Z)

I've published an essay [Personification of computer processes](https://www.latentcenters.com/personification-of-computer-processes) where I introduce a metaphor that will allow us to program computers in a game-like (and also in "[Dynamic Land](https://dynamicland.org)"-like) environments. The website Latent Centers is a digital garden I started recently where I will continue to publish related work. The aim is to invent [computing that makes us feel more alive](https://www.latentcenters.com).



I'm looking forward to hearing your thoughts!

📝 [Turning the Blob inside out](https://open.substack.com/pub/duncancragg/p/turning-the-blob-inside-out?r=1sq2dz&utm_campaign=post&utm_medium=email) via [Duncan Cragg](https://twitter.com/duncancragg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/share-your-work.html#2023-11-10T14:29:09.753Z)

Hi everyone, my latest article on The Object Network and OnexOS is out:



> 📝 [Turning the Blob inside out](https://open.substack.com/pub/duncancragg/p/turning-the-blob-inside-out?r=1sq2dz&utm_campaign=post&utm_medium=email)
>
>Idiosyncratic apps come between you and your data...




It discusses "The Blob" - apps - and how we can free our data by "simply" not having those nasty apps coming between us and our precious digital stuff...

▶️ [Introducing Macros: Automate Apps with Record and Replay](https://www.plato.io/blog/introducing-macros) via **Michael Gummelt**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/share-your-work.html#2023-11-10T19:37:20.076Z)

We're experimenting with a novel form of "Programming by Example", similar to Excel macros: [plato.io/blog/introducing-macros](https://www.plato.io/blog/introducing-macros)



I think it can scale quite well to a complete programming system with branching, looping, etc.. Thoughts?

🎥 [Macro Demo](http://history.futureofcoding.org/history/msg_files/F06/F065YBMC596.mp4)

📱 [Shady Phoney](https://dflate.io/shady-phoney) via **Gregor**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/share-your-work.html#2023-11-11T12:01:11.973Z)

I have started experimenting with a mobile shader editor and wrote about it over on my blurgh: [dflate.io/shady-phoney](https://dflate.io/shady-phoney)

You can play with it here: [shd.is](https://shd.is)

And if you wanna signal boost me: [mastodon](https://c.im/@gregor/111391784315627784), [bsky](https://bsky.app/profile/dflate.io/post/3kdvwnhzzts2v) & [twtr](https://twitter.com/watware/status/1723309016745398771)



But most of all I'd be curious to read your thoughts, associations, etc. 🙂

💭 by [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/devlog-together.html#2023-11-09T05:24:16.115Z)

Now that I've started inserting coroutines into my apps ([💬 #two-minute-week](./?fromDate=2023-10-29&toDate=2023-11-04&channel=two-minute-week&filter=#2023-11-01T06:07:08.191Z)) to make them more debuggable, I'm starting to find and plug gaps in error recovery:




* I have to be careful to check the results of coroutine operations, because the underlying coroutine might have thrown an error.
* Errors in Lua include a call stack, but errors within coroutines don't return the stack by default.
* If I create a higher-order helper to abstract away the coroutine munging just to smear a computation across frames, does that impact the quality of debug information in the call stack? (Answer: no it doesn't in Lua, but it wasn't obvious.)
* Call stacks returned by LÖVE aren't  _quite_  as clean as plain Lua.

💭 by [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/devlog-together.html#2023-11-11T19:13:54.975Z)

I've cleaned up the code for my debug infrastructure of [💬 #two-minute-week](./?fromDate=2023-10-29&toDate=2023-11-04&channel=two-minute-week&filter=#2023-11-01T06:07:08.191Z) and improved the error flow; now you get decent call stacks even if there's a coroutine in the middle somewhere.



The debug infrastructure lives on the surface. I frequently tinker with it while debugging.

![driver-map.png](http://history.futureofcoding.org/history/msg_files/F06/F0654TJTCPQ.png)

# Thinking Together

💬 **Arcade Wise**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/thinking-together.html#2023-11-09T01:31:59.455Z)

Does anyone know of any systems that let you take the output value on a repl, edit it, and then edit the code so that your edit is true?


💬 **Dane Filipczak**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/thinking-together.html#2023-11-10T23:54:06.577Z)

What are some examples of successful UIs over constraint solving systems?

I'm about to do a bit of research on this topic but thought I'd start here.

Off the dome I can think of excel (numerical constraints) and rhino grasshopper (architectural / physical constraints).

I realize this is vague, but what I have in mind is a UI that allows for constraints to be defined which are then composed together and solved behind the scenes.

In particular, I'm wondering how to represent the case where there are multiple valid solutions and offer cycling through them to the user.

💬 **Xavier Lambein**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/thinking-together.html#2023-11-11T10:20:07.782Z)

I'm thinking about ways to represent/interact with a (computational) graph. I could come up with three different interfaces off the top of my head: 1) names/identifiers and application, 2) combinators/stack operations, and 3) boxes and wires. I'm curious to know if y'all can think of any other?

# Content

📟 [django-tui](https://github.com/anze3db/django-tui#demo) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/linking-together.html#2023-11-06T21:07:04.205Z)

Really interesting looking tool – though admittedly for a very niche use-case.


🎥 [Notation Must Die: The Battle For How We Read Music](https://www.youtube.com/watch?v=Eq3bUFgEcb4) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/linking-together.html#2023-11-07T15:09:21.849Z)

![Youtube Thumbnail](https://img.youtube.com/vi/Eq3bUFgEcb4/hqdefault.jpg)



🐦 [Grasshopper 2.0 (@CapsuleWire) / X](https://twitter.com/CapsuleWire/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/linking-together.html#2023-11-07T16:06:00.046Z)

Go check [twitter.com/CapsuleWire](https://twitter.com/CapsuleWire/) (Version 2 of the Grasshopper Algorithmic Modelling plugin for Rhinoceros 3D). for some real world node-and-wire-core inspiration.

> > 🐦 [Grasshopper 2.0 (@CapsuleWire) / X](https://twitter.com/CapsuleWire/): Version 2 of the Grasshopper Algorithmic Modelling plugin for Rhinoceros 3D.

![go1.jpg](http://history.futureofcoding.org/history/msg_files/F06/F065B9Z5PQQ.jpg)

![go2.jpg](http://history.futureofcoding.org/history/msg_files/F06/F064FLTAEK0.jpg)

![go3.jpg](http://history.futureofcoding.org/history/msg_files/F06/F064FLTJHT8.jpg)


🎥 [THROAT NOTES](https://www.youtube.com/watch?v=qhVehcHwOB8) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/linking-together.html#2023-11-09T03:07:33.176Z)

![Youtube Thumbnail](https://img.youtube.com/vi/qhVehcHwOB8/hqdefault.jpg)

I've been looking for an excuse to share this somewhere, so it might as well go here.



It's a beautifully animated film by Felix Colgrave titled [Throat Notes](https://www.youtube.com/watch?v=qhVehcHwOB8). While all of his recent animations are breathtaking and delightful and worth your attention (since, like Jacob Collier, Felix is just frustratingly talented), this video in particular will be of interest to the FoC community for its contributions to classic GUI design.

🤖 [GitHub Next | Copilot Workspace](https://githubnext.com/projects/copilot-workspace) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/linking-together.html#2023-11-09T05:43:03.796Z)




Repo-wide code writing by AI

>GitHub Next Project: How can developers overcome the high effort of getting started on complex tasks and truly collaborate with AI to make progress quickly?


🎥 [The Essence & Origins of Functional Reactive Programming • Conal Elliott • YOW! 2015](https://www.youtube.com/watch?v=rfmkzp76M4M) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/linking-together.html#2023-11-09T11:45:20.946Z)

![Youtube Thumbnail](https://img.youtube.com/vi/rfmkzp76M4M/hqdefault.jpg)

I enjoyed this talk by Conal Elliott on Functional Reactive Programming (FRP)

and also enjoying some previous discussion about Conal's version of FRP here




* [Does anyone know the current state of the art in functional reactive animation?](https://linen.futureofcoding.org/t/49387/does-anyone-know-the-current-state-of-the-art-in-functional-)

# 🤖

🌲 [Talk: The Expanding Dark Forest and Generative AI](https://maggieappleton.com/forest-talk) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W2/of-ai.html#2023-11-10T12:20:34.267Z)

I keep directing people to this talk: [maggieappleton.com/forest-talk](https://maggieappleton.com/forest-talk)



**@Maggie Appleton** explores it better than anyone else

>An exploration of the problems and possible futures of flooding the web with generative AI content



