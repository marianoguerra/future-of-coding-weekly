<!--
.. title: Future of Coding Weekly 2024/03 Week 4
.. slug: future-of-coding-weekly-202403-week-4
.. date: 2024-03-26 04:35:46 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎼 Strudel REPL 🎙️ a podcast about Hest 🕹️ Playing with Code: Programming-Adjacent Games

# Our Work

🕹️ [Playing with Code: Programming-Adjacent Games](https://marianoguerra.org/posts/playing-with-code-programming-adjacent-games/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/share-your-work.html#2024-03-19T16:27:58.512Z)

I collected and summarized the answers to my question about programming-adjacent games


📄 [Formula for generating distinct colors](http://history.futureofcoding.org/history/msg_files/F06/F06QPL5TLRF.pdf) via **Fredrik**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/share-your-work.html#2024-03-19T17:55:44.759Z)

For those situations where there's a need to automatically generate a unique color for each item in a set, I've figured out a formula that yields a good distribution based on the oklch color space. The attached document has some pretty infographics.



You can also see the [source code of the document](https://typst.app/project/roIpfK0qpTfEMeHW-rIfpK) in Typst. Typst is already the future of programming.

📄 [Formula for generating distinct colors](http://history.futureofcoding.org/history/msg_files/F06/F06QPL5TLRF.pdf)

💬 **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/share-your-work.html#2024-03-22T15:22:09.764Z)

A tangible programming interface inspired by Andean khipu that we've been working on..

![image.png](http://history.futureofcoding.org/history/msg_files/F06/F06QQA6NB2A.png)

💻 [Slate - A Playground for Ideas](https://try-slate.com/) via **Mohit Karekar**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/share-your-work.html#2024-03-24T13:19:46.072Z)

I recently thought about combining natural language prompts in code notebooks interface because it seemed like a great use case to me. While working with data, a mixture of low-level capability of writing code and a high-level capability to write transformations or visualization instructions in natural language can be a great advantage. You can code when you want to, and completely skip and offload to an LLM by writing natural language instructions! The notebook executes code and prompts in a single context. Here's something you can try that implements this idea: [try-slate.com](https://try-slate.com/)

Also wrote some thoughts in a [post here](https://mohitkarekar.com/posts/2024/slate/) and a short [video demo here](https://www.loom.com/share/bcde36f3fa424b2f80c860def0b3f164?sid=2bf8cdea-ef9e-4421-9388-570a097e02f9).

>Similar to traditional code notebooks like Jupyter Notebooks, but with a seamless integration with large-language models. Code when you want, skip when you don't. Export to code for portability.


# Devlog Together

💬 [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/devlog-together.html#2024-03-21T21:58:14.163Z)

Playing with UI filter predicates and optional values

![gd-preds.gif](http://history.futureofcoding.org/history/msg_files/F06/F06QPM31S77.gif)

🫰 [snap.love: a graph drawing tool](https://git.sr.ht/~akkartik/snap.love) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/devlog-together.html#2024-03-23T17:42:40.540Z)

Of all the apps I've built, perhaps my favorite is [git.sr.ht/~akkartik/snap.love](https://git.sr.ht/~akkartik/snap.love), my box and line drawing tool. I use it  _constantly_  -- including for work. I have a terrible short term memory, and now I make quick mindmaps for every little situation where a full-screen IDE on a huge monitor is too tiny to show all the parts of the codebase I care about right now.



I seldom mess with it, but today I modified it to show gridlines any time I drag things around. Should lead to neater maps!

🎥 [snap gridlines](http://history.futureofcoding.org/history/msg_files/F06/F06RDHYHEU9.webm)

🎙️ [a podcast about Hest recently](https://www.patreon.com/posts/terminology-take-100835945) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/devlog-together.html#2024-03-24T02:20:06.804Z)

I listened to [a podcast about Hest recently](https://www.patreon.com/posts/terminology-take-100835945) (that I wasn't even on!), and have been thinking about taking another crack at it. I'm in a really different situation now, work/life wise, and am less inhibited by idealistic ambitions (like a bunch of NIH making me write my own 3D engine, or an obsession with conceptual purity forcing me to make everything bootstrapped). Now the biggest blocker is that I only have scraps of free time, and I've been using all of it to make music. Oh, how I miss being 20 and free from obligation!


🎥 [Simple gradient using new form field control for arrays of objects](https://youtu.be/mKxsgr3TKtM) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/devlog-together.html#2024-03-24T14:44:02.201Z)

![Youtube Thumbnail](https://img.youtube.com/vi/mKxsgr3TKtM/hqdefault.jpg)

I've made a new form field control for arrays of objects. The properties that go into the object can be specified and in this example I've used it to implement a simple gradient color node. This example can be viewed at [demo.codeflowcanvas.io/gl](https://demo.codeflowcanvas.io/gl) and then select "Moving circle" from the examples drop-down (I just noticed a weird bug on iOS.. so please just try on desktop).

Or [it can be seen in action here](https://youtu.be/mKxsgr3TKtM) .. nothing fancy at the moment, but I hope this allows for more fancy stuff in the near future. 

# Thinking Together

📝 [horrors of manually bikeshedded plain-text languages](https://gitlab.com/procps-ng/procps/-/blob/master/src/top/top.c) via **Fredrik**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/thinking-together.html#2024-03-18T20:16:09.247Z)

Is there any wisdom on  *how to best lay out code in a visual code browser* ?



In my experience, code can be layed out either more horizontally on long lines or more vertically on short lines. This is controlled by setting a criterion for how many levels of nesting there can be before a node switches to a multiline layout. Long lines use space efficiently but tend to get hard to read. Short lines are easier to read, as tokens of similar significance line up in columns, but tend to take up much vertical space while leaving most of the horizontal space unused, as the average line is just one key and one value.



Shall I accept that code gets very vertical, and use the free horizontal space to add multilevel navigation panels, or is there a third option that is more horizontal while still easy to read? I can go really fancy and add tables and multiple columns, since I have full control over the layout function, but not all code is regular enough to fit a tabular format, and I cannot require the person editing the code to manually bikeshed it by editing whitespace or dragging around visual nodes. I've seen the [horrors of manually bikeshedded plain-text languages](https://gitlab.com/procps-ng/procps/-/blob/master/src/top/top.c) and the horrors of node-based languages where the programmer makes a simple one node change and then has to drag all the nodes around so they line up. Are there any examples of interesting solutions to look at?



Here's how I mean a more horizontal layout:

>  [redacted]

Here's how I mean a more vertical layout:

>  [redacted]

In the more horizontal layout, I can barely parse the surprise structure at a glance, and I can barely see if I've made a mistake in editing. It takes a lot less screen space though.

💬 **Jacob Zimmerman**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/thinking-together.html#2024-03-20T17:26:11.143Z)

I want to build the backend of an as-bidirectional-as-possible spreadsheet/dataflow, does anyone have any favorite techniques?



I’d like to prefer a dataflow style solution over a constraint solver. I’ve been reading up on why this problem feels hard and its similarity to the “view update problem” in databases, I’m curious if there’s a widely accepted solution that I’m missing.

📑 [Future of Coding or Programming: Project Comparison](https://docs.google.com/spreadsheets/d/12sTu7RT-s_QlAupY1v-3DfI1Mm9NEX5YMWWTDAKHLfc/edit?pli=1#gid=0) via [Duncan Cragg](https://twitter.com/Duncan__Cragg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/thinking-together.html#2024-03-24T10:36:57.466Z)

Hi folks, I've been fiddling around with the projects spreadsheet here: [Future of Coding or Programming: Project Comparison](https://docs.google.com/spreadsheets/d/12sTu7RT-s_QlAupY1v-3DfI1Mm9NEX5YMWWTDAKHLfc/edit?pli=1#gid=0)



and I thought I'd take this opportunity to ask you all to ensure your entries are complete and up-to-date.



New users welcome: just add your project! Note: your project should ideally be at least primarily open source.

📝 [scattered-thoughts.net/writing/miscellaneous-ideas](https://www.scattered-thoughts.net/writing/miscellaneous-ideas) via [Jamie Brandon](https://scattered-thoughts.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/thinking-together.html#2024-03-24T21:30:30.521Z)

Pondering some FoC-adjacent ideas, with the goal of finding a financially sustainable project that can fund more tentative adjacent work - [scattered-thoughts.net/writing/miscellaneous-ideas](https://www.scattered-thoughts.net/writing/miscellaneous-ideas) / [scattered-thoughts.net/writing/how-to-trade-software-for-small-money](https://www.scattered-thoughts.net/writing/how-to-trade-software-for-small-money/).



Less FoC-related, I mentioned in the bottom of that post that I'd love to help someone pick up the streaming system testing work that I started in [scattered-thoughts.net/writing/internal-consistency-in-streaming-systems](https://www.scattered-thoughts.net/writing/internal-consistency-in-streaming-systems/). It will be a real slog getting momentum, but there's potential to really raise the (incredibly low) bar for reliability and understand-ability in that niche.

# Content

📝 [Who will build new search engines for new personal AI agents?](https://interconnected.org/home/2024/03/20/agents) via [Stefan Lesser](https://twitter.com/stefanlesser)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/linking-together.html#2024-03-22T11:59:43.712Z)

Some speculation by **@Matt Webb** about [the not so far out future of AI agents](https://interconnected.org/home/2024/03/20/agents) and how we can/need to prepare for it. 

In the other corner, some judgy comments about [AI’s Looming Reputation Crisis](https://www.garbageday.email/p/clout-world) (scroll down to the middle to find that bit).



I read both this morning and I know these are different use cases, however they beautifully cover the whole optimism/pessimism spectrum on AI.



Where do people here fall on that spectrum? Are there use cases that are obviously good/bad, or does that depend on… well… what? And are we going to outsource most of our lives soon to AI assistants while simultaneously drowning in mediocre generated bullsh*t trying to scam us?



Gosh, I miss the time of the early internet when I was excited about everything tech. Somehow I can’t find back into that mindset these days. Can someone convince me that the future is going to be universally great, like it used to be 20 years ago?

📝 [Informal Organizations: Iterating on Cooperative Ownership](https://informal.systems/2020/09/21/informal-owners/) via [Andreas S](https://twitter.com/curious_reader)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/linking-together.html#2024-03-23T07:52:48.555Z)

In the spirit of our **#thinking-together** capitalism thread. I found [informal.systems/2020/09/21/informal-owners](https://informal.systems/2020/09/21/informal-owners/) i think this is an interesting example of how to change the bigger structure- capitalism (this time I spelled it out [Stefan Lesser](https://twitter.com/stefanlesser) 😅  ) by changing smaller structures I.e. companies to cooperatives.
> 📝 [Informal Organizations: Iterating on Cooperative Ownership](https://informal.systems/2020/09/21/informal-owners/)
>
>Our mission at Informal Systems is not just about distributed systems, it&amp;#39;s also about the organizations that grow along with them. Our vision is an open-source ecosystem of cooperatively owned and governed distributed organizations running on reliable distributed systems. To achieve this vision, we begin with ourselves, adopting a democratic structure that aims to rebalance the power dynamics between capital and labour towards something more sustainable and non-extractive; something that nurtures long term employment and real wealth creation through R&amp;D, entrepreneurship, and innovation; something more like a Zebra than a Unicorn.



# Music

🎼 [Strudel REPL](https://strudel.cc/?dbk9t_AYAIc8) via **Alex McLean**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/03/W4/of-music.html#2024-03-18T12:40:03.787Z)

Strudel now has inline visualisation [strudel.cc/?dbk9t_AYAIc8](https://strudel.cc/?dbk9t_AYAIc8)
> 📝 [Strudel REPL](https://strudel.cc/?dbk9t_AYAIc8)
>
>Strudel is a music live coding environment for the browser, porting the TidalCycles pattern language to JavaScript.


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
