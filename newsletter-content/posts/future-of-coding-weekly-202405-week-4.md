<!--
.. title: Future of Coding Weekly 2024/05 Week 4
.. slug: future-of-coding-weekly-202405-week-4
.. date: 2024-05-26 23:13:50 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

📡 Propagator Networks 🌯 Visual Language for Polymorphic Types 🤨 NoCode Will Not Bring Computing to the Masses 

# Two Minute Week

🐚 [Automat](https://automat.org/) via **Marek Rogalski**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/two-minute-week.html#2024-05-22T16:13:58.208Z)

Context: Automat aims to be a general purpose visual shell - it's meant to control other apps & pass their data around. It has a website at [automat.org](https://automat.org). The MVP version is going to record & replay desktop macros. Last week I've pretty much finished the work on connections and now I'm working on the new  _timeline_  object! 

>Automat is a FOSS software that allows anyone to control their computers by combining interactive blocks.


> 🐦 [Marek Rogalski (@mafikpl) on X](https://twitter.com/mafikpl/status/1793307785112805456): Working on the most complex Automat object so far - the Timeline. It should be able to control other objects according to its embedded tracks.
> 
> ![Tweet Thumbnail](https://pbs.twimg.com/ext_tw_video_thumb/1793306906657775617/pu/img/NmBrSltxp6cVXfuf.jpg:large)


🎥 [PID controller build with codeflowcanvas](https://youtu.be/Cxqlv8IoaH8) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/two-minute-week.html#2024-05-24T14:21:07.906Z)

![Youtube Thumbnail](https://img.youtube.com/vi/Cxqlv8IoaH8/hqdefault.jpg)

[In this video](https://youtu.be/Cxqlv8IoaH8) I show a [PID-controller](https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller)  build with my visual programming system [codeflowcanvas.io](http://codeflowcanvas.io) ... the PID-controller example can be found on [demo.codeflowcanvas.io](http://demo.codeflowcanvas.io).



It uses expression nodes, global variables and flow-variables to handle the calculations and state. In a bar-chart the output of the mechanism can be seen. In this example the target value is 100 , and when moving the input value slider, that value is used as a measurement and the algorithm brings the measurement to the wanted value (100). This process is visualised in the bar-chart.



When the speed of the flow is set to maximum (in the top left corner), the "program-counter"-animation is not shown and it runs as fast as it can in realtime. That helps for these kind of algorithms.

# Our Work

📡 [Propagator Networks](https://holograph-1.vercel.app/) via **Dennis Hansen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/share-your-work.html#2024-05-22T21:33:18.853Z)

Hello! So after much obsession with Propagator Networks as discussed on this slack [💬 #thinking-together@2024-03-21](https://history.futureofcoding.org/?fromDate=2024-03-18&toDate=2024-03-24&channel=thinking-together&filter=#2024-03-21T19:26:33.915Z), i decided to make a little propagator network simulator on top of tldraw.



In short: Propagator networks enabling bi-directional computation via independently operating nodes- in the gif you can see one for converting temperatures. Propagators (squares) listen to changing inputs, run code, and update connected outputs.



You can make your own [here](https://t.co/nxVo5UAShy).

- Put your variables in circles

- Put your JS in squares (you can write a return or not)

- Draw arrows from circles to squares with text that matches the variables

- Draw arrows from squares to the circles to be updated.



There's lot of awesome stuff than can be made with these (maybe everything?). If you want to have fun with it, try to make a conditional or a switch. Its fun 🙂



Cheers!

![ezgif-2-f1371da04b.gif](http://history.futureofcoding.org/history/msg_files/F07/F075CT1UMKJ.gif)


💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/share-your-work.html#2024-05-23T16:45:02.374Z)

🧵 for [Cole Lawrence](https://github.com/colelawrence)'s demo today.

💬 [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/share-your-work.html#2024-05-23T17:16:41.059Z)

🧵 for [Maikel van de Lisdonk](https://www.devhelpr.com/)'s demo today.

💬 [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/share-your-work.html#2024-05-23T18:16:22.433Z)

forgot to share this in the demo

![gloodata-inception.gif](http://history.futureofcoding.org/history/msg_files/F07/F074VKZFB8B.gif)

# Devlog Together

🤖 [github.com/nileshtrivedi/autogen](https://github.com/nileshtrivedi/autogen) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/devlog-together.html#2024-05-23T18:19:56.164Z)

I have started porting Microsoft's multi-agent framework "autogen" to Elixir: [github.com/nileshtrivedi/autogen](https://github.com/nileshtrivedi/autogen)

Got basic multi-agent collaboration and code execution working. Now need to make Elixir functions available to agents as tools.

I feel Elixir will become more and more important for AI because of its excellent support for real-time communication (audio/video etc), and single-language stack (LiveView etc.)

# Reading Together

🌯 [GeckoGraph: A Visual Language for Polymorphic Types](https://arxiv.org/pdf/2405.12699) via **Don Abrams**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/reading-together.html#2024-05-22T14:34:08.401Z)

Beautiful study on a visual representation of abstract types (Haskell in this case but generalizable). Conclusion: intuitive and helpful for beginners, but distracting [GeckoGraph: A Visual Language for Polymorphic Types](https://arxiv.org/pdf/2405.12699)

# Thinking Together

💬 [Stefan Lesser](https://twitter.com/stefanlesser)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/thinking-together.html#2024-05-20T16:05:49.765Z)

This is one of those questions where I don’t really know yet how to ask it, so let me fumble and handwave a little bit and see where this goes:



In computing history we went from printers to screens, and on those screens from a brief stint with vector graphics to bitmap displays, and on those bitmap displays from text mode to frame buffer, and in those frame buffers from sprites and blitting to rasterization and compositing. In the early days, when there wasn’t enough RAM for a full-screen bitmap frame buffer, character glyphs and sprites were brought in from ROM. Now we have so much memory that we have double-/triple-buffering and realtime compositing of separately stored textures that often exceed the number of screen pixels available by an order of magnitude or more.



I’m particularly interested in the early transition to raster graphics. At some point (and I assume that was probably with PostScript?) it became feasible to compute graphics on the fly instead of having them prepared as bitmaps in ROM or on disk. If I remember this correctly, PostScript was invented because due to the different font sizes it was more economical to ship instructions to generate glyphs on the fly on the printer than to ship all possible glyphs as bitmaps in all the different font sizes.



In a way we went from a “final” representation of a map of bits restricted to a certain grid size to an “intermediate” representation of instructions that have to be executed to generate the final map of bits in the desired size. Alternatively, we could see that as swapping space (memory) for time (compute).



Are you aware of any papers or other material that compares both sides of this transition?

For instance in terms of performance in space and time, ie. how much compute is needed for how much memory saved. Or in the broader sense of how we settled on certain graphics primitives, because they were cheap enough to implement in terms of compute, and how we settled on certain data formats, because they were small enough in terms of memory usage, so that this trade-off made sense.

🎥 [Grail Demo from CHM tape](https://www.youtube.com/watch?v=2Cq8S3jzJiQ) via [Oleksandr Kryvonos](https://twitter.com/o_kryvonos)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/thinking-together.html#2024-05-24T12:23:03.680Z)

![Youtube Thumbnail](https://img.youtube.com/vi/2Cq8S3jzJiQ/hqdefault.jpg)

Does anyone know if there is somewhere a new implementation of something similar to GRAIL system from Rand corporation ? 

# Content

🕸️ [Dify's new workflows feature](https://dify.ai/blog/dify-ai-workflow) via **John Choi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/linking-together.html#2024-05-22T04:32:07.916Z)

Has anyone tried using Dify's new [workflows feature](https://dify.ai/blog/dify-ai-workflow)?

It seems to be a Node-RED-like visual programming tool that supports Python/Node scripting in addition to HTTP requests and LLM invocations for nodes.

(The parent app (Dify) is clearly positioned in the AI domain, but the workflows feature seems pretty general.)



I'm looking into it but also interested in hearing others' initial impressions/assessments of limitations 👀

🤨 [NoCode Will Not Bring Computing to the Masses](https://buttondown.email/hillelwayne/archive/nocode-will-not-bring-computing-to-the-masses/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/linking-together.html#2024-05-22T09:54:38.461Z)

> It's not enough for a tool to solve your problem for you to use that tool. You have to also A) recognize the problem you have is solvable, B) recognize the tool can solve it, and C) be reasonably confident that you 
>  _personally_ can solve the problem with the tool. You need knowledge, skill, and the right mentality. Even programmers, who  _already have that mentality_, don't automatically generalize it to all applicable domains. Otherwise we'd be doing a lot more with our phones.

> It's unreasonable to expect the average person will use any NoCode to solve their problems, regardless of how easy the tools are. This leaves the people for whom it provides economic value, which is why all modern NoCode tools are oriented towards business.


📝 [FORTRAN Report 1954](http://www.softwarepreservation.org/projects/FORTRAN/BackusEtAl-Preliminary%20Report-1954.pdf) via **Marcel Weiher**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W4/linking-together.html#2024-05-22T10:02:21.044Z)

And of course “no code” and “lo code” are just new versions of “code”.  Well, the ones that work at least.



My favorite quote on this topic encapsulates it nicely:  “Since FORTRAN should virtually eliminate coding and debugging…”   — FORTRAN Report 1954


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
