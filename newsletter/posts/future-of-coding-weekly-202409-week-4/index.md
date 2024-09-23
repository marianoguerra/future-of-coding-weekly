<!--
.. title: Future of Coding Weekly 2024/09 Week 4
.. slug: future-of-coding-weekly-202409-week-4
.. date: 2024-09-23 19:02:16 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🤖 Bret Victor on AI 📝 Functional reactive programming 📢 Unconference by Ink & Switch

# Two Minute Week

🎥 [codeflowcanvas swagger endpoint generation](https://youtu.be/sSrvrYvAbss) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/two-minute-week.html#2024-09-22T12:14:58.017Z)

![Youtube Thumbnail](https://img.youtube.com/vi/sSrvrYvAbss/hqdefault.jpg)

In this [video](https://youtu.be/sSrvrYvAbss) I show a new feature that I am working on in my codeflowcanvas project (which is a visual programming system and language): exporting a flow to typescript so that it can be used in other code-bases. In this example it's a nodejs-hono project for creating an api with a swagger/openapi documentation page

# Our Work

🎥 [Visualizing Vector Embeddings in 3D with transformers.js and t-SNE/UMAP](https://www.youtube.com/watch?v=R7x5zefEUnc) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/share-your-work.html#2024-09-17T10:13:19.236Z)

![Youtube Thumbnail](https://img.youtube.com/vi/R7x5zefEUnc/hqdefault.jpg)

I made a small tool: [Visualizing Vector Embeddings in 3D with transformers.js, t-SNE/UMAP and echarts-gl](https://www.youtube.com/watch?v=R7x5zefEUnc)



Get it here: [github.com/marianoguerra/webvectors](https://github.com/marianoguerra/webvectors)

💻 [Motif Designer](https://motifdesigner.netlify.app/) via **Natalie Freed**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/share-your-work.html#2024-09-18T20:08:32.752Z)

Hello! I just listened to the AgentSheets episode and wanted to share that I’m working on a PBE + block programming educational tool. It’s a work in progress but the vision is of something like “a macro recorder for Kid Pix” that lets you switch between drawing and code editing. [motifdesigner.netlify.app](https://motifdesigner.netlify.app/) Target audience is elementary school age kids, though it’s also meant to be fun for adults to tinker with.



I’m excited that there seems to be a bit more traction (or at least interest?) around PBE again. I thought it was an interesting point in the paper/episode that it hasn’t necessarily gone out of fashion because it wasn’t a good idea, but because other solutions emerged to some of the problems it was trying to solve.

# Devlog Together

📝 [Experiments With Text to Text Transpilation](https://open.substack.com/pub/programmingsimplicity/p/experiments-with-text-to-text-transpilation?r=1egdky&utm_campaign=post&utm_medium=web) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/devlog-together.html#2024-09-16T03:25:14.498Z)

... Chipping away at articles regarding a bunch of experiments towards creating higher level syntax for programming languages. Thus far, I've managed to consolidate t2t (text-to-text transpilation) into a single .mjs file and to redocument it. Wrote an adjunct article about experimenting with "t2t" using a toy meta-programming language to generate code in existing languages. "T2T creates DSLs. T2T reduces the amount of work required to build a DSL. You should be able to create a new DSL in an afternoon. ..."


💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/devlog-together.html#2024-09-18T03:35:09.724Z)

Very initial draft of a notebook UI.



There are 2 kinds of lines here:




* Regular lines are prose, but you can also insert named blanks into them using the syntax  `[value|name]` , which renders vertically across 2 lines. You can't nest blanks within blanks. These lines can wrap, but a single blank can't wrap across multiple lines on screen.
* Indented lines (though the indentation is currently subtle) are code. They can render fractions using the syntax  `(a/b)`  as I showed before. (Not sure I'll keep this in the long term.) You can nest fractions within fractions. These lines don't support wrapping.



Planned:




* synchronizing blanks with the same name
* using code in indented lines to compute derived names without values inline.



Inspirations:




* Kragen Sitaker's [bicicleta](https://www.mail-archive.com/kragen-tol@canonical.org/msg00058.html)
* [Jonathan Edwards](https://twitter.com/jonathoda/)'s [Subtext 1](https://vimeo.com/451278506) ([💬 #linking-together@2024-08-29](https://history.futureofcoding.org/?fromDate=2024-08-26&toDate=2024-09-01&channel=linking-together&filter=#2024-08-29T22:36:31.598Z))

![20240917-notebook.png](http://history.futureofcoding.org/history/msg_files/F07/F07MTARRBPX.png)



💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/devlog-together.html#2024-09-20T05:49:55.937Z)

Today I've added some rudimentary styling syntax to my notebook.



It looks like I care about always making the styling very transparent, so it's possible in principle to guess what characters one needs to type to copy the look of something one sees on screen. So the style directives will never be hidden.

🎥 [Style](http://history.futureofcoding.org/history/msg_files/F07/F07N9ELF5NE.webm)


💬 [Cross-link to a different thread.](https://futureofcoding.slack.com/archives/C050QK4917D/p1726968241664499?thread_ts=1726886907.818599&cid=C050QK4917D) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/devlog-together.html#2024-09-22T18:32:22.017Z)

There's a bug in my parser. Here's a debug UI showing it at a glance. The parse tree in the background is for the line the mouse pointer is hovering on.



One fun thing is the couple of lines in the middle there. I reached for a notebook to scribble some equations for myself, but then realized all I wanted was to be able to draw the fraction line horizontally -- and I'm sitting in a tool that can do that. Using the tool to debug the tool 💥 (At least until I have no tools because I broke my tools using my tools. [💬 #of-ai@2024-09-22](https://history.futureofcoding.org/?fromDate=2024-09-19&toDate=2024-09-25&channel=of-ai&filter=#2024-09-22T01:24:01.664Z))

![notebook-debug.png](http://history.futureofcoding.org/history/msg_files/F07/F07NEKXSFNH.png)



# Thinking Together

📝 [The Myopia of Professionalism](https://designengineers.substack.com/p/the-myopia-of-professionalism) via **Jasmine Otto**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/thinking-together.html#2024-09-16T23:02:56.289Z)

I am now blogging about design engineering in organizations that deal with lots of domain knowledge(s). This post covers metrics that don't do what your manager thinks they do, and why interdisciplinary work has trouble finding a good home.

💬 **Misha A**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/thinking-together.html#2024-09-17T10:36:32.396Z)

What is "program"? essentially, conceptually.



🐦 [leslie (@lesliexin) on X](https://x.com/lesliexin/status/1836643348490187183) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/thinking-together.html#2024-09-19T19:13:22.938Z)

I like this metaphor of translucent software both as a callback to the translucent hardware aesthetic of the 2000s, but also to progressively display the underlying mechanisms of software  ~_*if*_~  you want to see it.

> 🐦 [leslie (@lesliexin) on X](https://x.com/lesliexin/status/1836643348490187183): Finally got around to building this :) 
> 
> Try it at https://translucentweb.site/
> 
> ![Tweet Thumbnail](https://pbs.twimg.com/ext_tw_video_thumb/1836643326537129984/pu/img/WHwkOV9cVDHOiUQZ.jpg:large)

# Content

📢 [Unconference hosted by Ink & Switch](https://lu.ma/2024-unconf-losangeles) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/linking-together.html#2024-09-16T17:02:48.803Z)

 *Tight zoom-in — mid-September 2024 — virtual roomful of online humanoid computer brains who maintain material co-presence in LA, or are translocating to SPLASH in October* 



There's going to be an [unconference hosted by Ink & Switch](https://lu.ma/2024-unconf-losangeles) on the 26th of October.



This has not been broadly announced yet. We're in the "invite the people who you really want to be there" phase. That means all of you!



Take a look at the list of attendees. Brilliant weirdos, the lot. You should come, you should come, you should come.




📝 [Functional reactive programming](https://dthompson.us/posts/functional-reactive-user-interfaces-with-propagators.html) via **Jasmine Otto**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/linking-together.html#2024-09-17T15:45:33.655Z)

A full-blown tutorial on DIY [functional reactive programming](https://dthompson.us/posts/functional-reactive-user-interfaces-with-propagators.html), from one of the Spritely folks. Also collects relevant PL dissertations on dataflow, e.g. FrTime and propagators, as well as explorables like [Holograph](https://github.com/dennishansen/holograph).

📝 [SwissGL tutorial: Reaction-Diffusion donut](https://google.github.io/swissgl/tutorials/reaction_torus.html) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/linking-together.html#2024-09-18T04:25:28.062Z)


🕸️ [1992 mailing list post from Tim Berners-Lee](http://1997.webhistory.org/www.lists/www-talk.1992/0065.html) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/linking-together.html#2024-09-18T15:32:04.756Z)

A fascinating [1992 mailing list post from Tim Berners-Lee](http://1997.webhistory.org/www.lists/www-talk.1992/0065.html) where he briefly outlines his desires for a programming language for the web — basically, what JavaScript could have been.



The principles of hypertext are on full display:






> You need something really powerful, but at the same time ubiquitous. Remember a facet of the web is universal readership.



Then there's the PL nerdery:






> Ideally, the language should include object-oriented inheritance, a basically functional nature, and a clean syntax. It should be interpretable and compilable. At least one public domain. A pre-compiled standard binary form would be cool too.



My favourite bit, though, is the desire for the client/server to negotiate over the language of the executable document, just like they negotiate other details. There are some wild  _isomorphism_  implications here.






> In reality, what we would be able to offer you real soon now with document format negotiation is the ability to return a document in some language for execution, with the option of being able to provide it in several languages, the language being a "data format" which can be negotiated between client and server at run-time. For, for example, one could provide it in viola script and/or in /bin/sh which would cover most ofthe unix world.



# 🤖

📝 [Stephen Fry on technology and AI](https://stephenfry.substack.com/p/ai-a-means-to-an-end-or-a-means-to) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/of-ai.html#2024-09-16T17:32:59.411Z)

[Stephen Fry on technology and AI](https://stephenfry.substack.com/p/ai-a-means-to-an-end-or-a-means-to):






> Machines are capable of bias, hallucination, drift and overfitting on their own, but a greater and more urgent problem in my view is their use, abuse and misuse by the three Cs . They are 
>  *Countries* 
>  with their specific ambitions, paranoias, enmities and pride; 
>  *Corporations* 
>  with their unaccountable rapacity and of course 
>  *Criminals* 
> . All of them united by one deadly sin: greed. Greed for power, for status, for money, for control.



🎥 [ChatGPT o1 preview + mini Wrote My PhD Code in 1 Hour*—What Took Me ~1 Year](https://www.youtube.com/watch?v=M9YOO7N5jF8&amp;ab_channel=KyleKabasares) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/of-ai.html#2024-09-17T00:09:22.355Z)

![Youtube Thumbnail](https://img.youtube.com/vi/M9YOO7N5jF8/hqdefault.jpg)

💻 [Test Driven Development with AI: Writing a Decompiler](https://observablehq.com/@tomlarkworthy/ai-written-decompiler) via [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/of-ai.html#2024-09-17T07:34:31.043Z)

I got test-driven-development working with AI ( `o1-preview` ) and it is totally nuts. It can do complex stuff, I am making serious progress with a decompiler with it

[Test Driven Development with AI: Writing a Decompiler](https://observablehq.com/@tomlarkworthy/ai-written-decompiler). The key was feeding the test suite results back into context (plus o1-preview's ability to improve code without forgetting half the stuff in the middle)


📝 [Very AI-skeptical article](https://www.wheresyoured.at/subprimeai/) via [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/of-ai.html#2024-09-17T12:34:17.084Z)

I just read this [very AI-skeptical article](https://www.wheresyoured.at/subprimeai/), that basically says that today's generative AI has no credible business model and is unlikely to improve significantly enough to get one. While I am aware of counter-arguments to the technical aspects, I wonder if there are more positive takes on the financial/business aspects, coming from anyone else than AI vendors.

🤖 [Bret Victor on AI](https://dynamicland.org/archive/2017/Is_this_the_civilization_we_really_want%3F) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/of-ai.html#2024-09-21T02:48:27.818Z)

# Present Company

🎙️ [A new bonus episode of the FoC podcast](https://www.patreon.com/posts/112141797) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/09/W4/present-company.html#2024-09-16T03:30:31.755Z)

For our Patreon supporters, there's [a new bonus episode of the FoC podcast](https://www.patreon.com/posts/112141797) where we try… really, we do try… to talk about the new [Dynamicland archive website](https://dynamicland.org), and the cool stuff on it. But, it's just damned hard to take all of this new material without considering a bunch of bigger picture questions about society, and visions of the future, and what it means to be "open" about your work. So hard.



----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
