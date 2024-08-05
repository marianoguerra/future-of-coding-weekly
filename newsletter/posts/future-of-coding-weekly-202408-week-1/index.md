<!--
.. title: Future of Coding Weekly 2024/08 Week 1
.. slug: future-of-coding-weekly-202408-week-1
.. date: 2024-08-05 10:21:14 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎥 The future of programming is data-parallel? 💡 A modern and executable specification language 🎥 Spatial Canvases: Towards an Integration Domain for HCI

# Two Minute Week

💬 **Marek Rogalski**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/two-minute-week.html#2024-08-02T14:37:21.797Z)

Another major feature implemented - the  _toolbar_ . I really love the toolbar system used by Vlojure. I never used it personally but I like the idea of many customizable bars. Eventually I'd like to make this one more flexible as well... The animations behave slightly differently than most docks I know (Cairo, Mac OS) - instead of zooming all nearby elements (in a gaussian-distribution like pattern), only the one under the cursor is enlarged. I think this contrast makes it clearer to which action will be selected by clicking. The radar animation also got some love - it now shows the paths to nearby objects, connection name and animates slightly more smoothly.

🎥 [Video](http://history.futureofcoding.org/history/msg_files/F07/F07FY8R4F3J.mp4)

# Our Work

📝 [Improving LLM Accuracy with Levlo Languages](https://www.linkedin.com/posts/jarnomontonen_improving-llm-accuracy-with-levlo-languages-activity-7223648019051626497-Ow0i) via **Jarno Montonen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/share-your-work.html#2024-07-29T11:42:13.203Z)

Did an experiment on improving LLM accuracy with Structured Generation using my stuff: [Improving LLM Accuracy with Levlo Languages](https://www.linkedin.com/posts/jarnomontonen_improving-llm-accuracy-with-levlo-languages-activity-7223648019051626497-Ow0i)

🧮 [Cashflow Profiles and Reserves: Actuarial Terminology I](https://calcwithdec.dev/posts/actuarial-terms-i/) via **Declan**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/share-your-work.html#2024-07-31T17:46:33.795Z)

I'm getting ready to release some actuarial models and outputs that use calculang.

So I made [an interactive post to introduce some terms actuaries use](https://calcwithdec.dev/posts/actuarial-terms-i/)

💬 **John Christensen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/share-your-work.html#2024-07-31T21:39:29.553Z)

Here's my work in progress node-and-wire system. It's specifically targeting signal processing related work.

Here, data is all passed between nodes as 1D arrays, so the plots just have the x-axis hardcoded for now. I'm not sure if a pair of x/y array's should be passed together on a single wire, or if they should be passed separately for the most flexibility.

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07EJM9KU6B.png)

💬 **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/share-your-work.html#2024-08-01T13:17:32.699Z)

I will try to reproduce these two papers that suggest program synthesis (eg: inducing new tactics) for AI to solve math problems or the ARC-AGI puzzles:




* [Peano: learning formal mathematical reasoning](https://royalsocietypublishing.org/doi/epdf/10.1098/rsta.2022.0044)
* [Learning Formal Mathematics From Intrinsic Motivation](https://arxiv.org/abs/2407.00695)



There's a quite a bit of new math/ML/programming for me to learn here.

# Devlog Together

📝 [Diagram Compiler Status](https://programmingsimplicity.substack.com/p/2024-07-30-diagram-compiler-status?r=1egdky) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/devlog-together.html#2024-07-31T02:49:17.118Z)

I’m in the process of writing a transpiler that spits out Drawware 0D kernel code in various languages (like Python, Lisp, JS, WASM, etc.) from a higher-than-HLL. I’m using a very simple “circuit” to regression test (Larson Scanner, as seen on T.V. Knight Rider). Current status and “working paper”: [2024-07-30-Diagram Compiler Status](https://programmingsimplicity.substack.com/p/2024-07-30-diagram-compiler-status?r=1egdky)

💬 [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/devlog-together.html#2024-07-31T16:20:52.630Z)

My basement flooded this week. So that's going to set me back a bit. But, hey, here's a quick update on the two FoC-relevant things I'm floating.






* DANK WIKI • At the last FoC virtual meetup, we talked about setting up a super lo-fi, friendly-to-nontechnical-folks, hackable community wiki. I've got a repo all set up for that locally, and just have a tiny bit more experimentation to do before it's ready to share. All the pages are just simple HTML or MD. There is a build step — wait, stop, don't run away — it's a build step, but it's cool and different!! There's a really simple spec and a short reference implementation. Zero dependencies, less than 100 loc. Everyone is encouraged to port the script into their language of choice and commit that. That way, other people can check out the repo, add some pages, and build it locally without having to conform to whatever ecosystem the build script requires. I'd ideally like to have impls in each of the most common ecosystems right away (JS, Python, Ruby, maybe bash, etc). Finally, the wiki is (for now) going to be hosted on Github, with an action that runs the reference build script on commit, so if people want to edit it via the Github web interface they can. (I'll be liberal with handing out the commit bit). This is going to be a social experiment as much as a technical one. Excited to see how it goes. Hoping to have the initial version of this go live this weekend.






* LIFE RAFT • I'm itching to get cracking on a Slack successor. I'm thinking I'll spin up a dedicated channel, and solicit people to drop in whatever random wishes / ideas / requests / suggestions / advice they feel like offering, so that these can filter in to the design process. I'm also hoping to put together goals for an MVP. This will need to include several things, including but not limited to: visual mockups for the GUI on desktop and mobile, technical architecture, priority features, estimated timeline. I intend to be quite restrained here — I want to make the smallest possible  _good enough_  thing.


🎥 [work in progress: building a neural network using code-flow-canvas](https://youtu.be/TG9TGqM9HCs) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/devlog-together.html#2024-08-04T20:03:05.237Z)

![Youtube Thumbnail](https://img.youtube.com/vi/TG9TGqM9HCs/hqdefault.jpg)

Hi, Because I want to understand better how neural networks work and can be trained, the best way to do is, is by building a small one from scratch myself and training it.

In this video [I show creating and connecting a few neural-nodes together and a show a very small prebuilt neural network](https://youtu.be/TG9TGqM9HCs).



To be able to do this, I've created 4 new node-types in my visual programming system: neural-input-node, neural-bias-node, neural-node and neural-output-node.. the first 3 output weighted connections. This means that a weight property is attached to the connection and can be changed.. the neural-node and neural-output-node use these weights in there respective calculations.



The neural-node currently uses sigmoid as its activation function.

The neural-bias-node only outputs a value of 1 and the output value of a neural-input-node can be changed. When any of these values are changed, they propagate forward through the network.

In the current example flow, an error is also calculated using an expression node-type depending on the output and expected value.

The white object-node is also a new node-type and can be used to obtain multiple values and output them in a single object.



In the near future I hope to implement a neural network that can be trained with the mnist digit dataset, but I have to do a lot more work before I am at that stage I think.

# Reading Together

🎥 [[PLDI24] The Future of Fast Code: Giving Hardware What It Wants](https://www.youtube.com/watch?v=vU3ryvZYlkk) via [Jamie Brandon](https://scattered-thoughts.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/reading-together.html#2024-07-31T19:09:12.090Z)

![Youtube Thumbnail](https://img.youtube.com/vi/vU3ryvZYlkk/hqdefault.jpg)

The future of programming is data-parallel?

# Thinking Together

🎥 [Spatial Canvases: Towards an Integration Domain for HCI, with Orion Reed](https://www.youtube.com/watch?v=csGNVaB83Rk) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/thinking-together.html#2024-07-31T21:30:12.219Z)

![Youtube Thumbnail](https://img.youtube.com/vi/csGNVaB83Rk/hqdefault.jpg)

[Konrad Hinsen](https://khinsen.net/), I just watched Orion Reed’s talk [youtube.com/watch?v=csGNVaB83Rk](https://www.youtube.com/watch?v=csGNVaB83Rk), pointed out by [Christopher Shank](https://mobile.twitter.com/chrisshank23). The talk continuously fired the same neurons in my head as does the phrase “malleable computing”. I’m not in that head-space, but, I continue to wonder if there’s a connection … (YMMV)

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/thinking-together.html#2024-08-01T21:27:07.788Z)

Prompt for everyone here: to the extent that you think about the Future of Coding or have projects to try to improve things,  _what problem are you trying to attack?_  Can you state it in a couple of sentences? Without reference to a solution? Try to be precise about the audience. For example, some problems affect everyone, while others affect only professional programmers, or only researchers who use computers in their work.



My hypothesis is that focusing on problems will help us all find our most promising collaborators in this group. (The next step will be to combat our tendency to be defined by our tools, to let our tools erect barriers that divide and balkanize us. But that's further down the road. For now, let's just "find our homies," the people we share specific dissatisfactions with.)



There are ideas for problem statements in a couple of earlier threads:




* [💬 #thinking-together@2024-06-15](https://history.futureofcoding.org/?fromDate=2024-06-12&toDate=2024-06-18&channel=thinking-together&filter=#2024-06-15T10:49:53.662Z)
* [what are the goals we are trying to achieve? What are the problems we are trying to solve?](https://futureofcoding.slack.com/archives/C5T9GPWFL/p1717926129937119)
* [💬 #present-company@2024-07-25](https://history.futureofcoding.org/?fromDate=2024-07-22&toDate=2024-07-28&channel=present-company&filter=#2024-07-25T01:25:03.344Z)



But this thread is not for critiquing or analyzing any of those statements. Just add your own, and nothing else.



(It's totally fine to copy statements from these threads. Many of them were arrived at after tons of consideration so it would be surprising if others didn't care about them. Also feel free to synthesize from multiple statements. Just try to get to something crisp and opinionated.)

💬 [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/thinking-together.html#2024-08-02T22:06:39.108Z)

Falsifiable theory…

Theory: Function-based thinking greatly restricts thinking about FoC.

Test: if this theory is true, then examination of the source code for The Mother Of All Demos will reveal that not all parts of the demo system were tightly inter-connected into a single synchronous, functional blob of design.

How?: Where can we find the source code for TMOAD? If we obtain the source, how can we reverse-engineer the design out from the implementation details? If we can get at the design, we should look for how the sub-units of software are interconnected. We need to examine if the code is designed as many islands of synchrony vs. being designed as just one big blob of synchrony.

Corollary: if TMOAD was designed as many islands of software and hardware, then it is unlikely that anything as interesting as TMOAD can come of building software on computers using only synchronous languages, like Python, Haskell, using concepts such as thread libraries, theorem-provers,  etc. [Thread libraries are but assembler-level work-arounds that enable the use of the function-based programming paradigm with languages like Python, Haskell, etc. Theorem provers need single islands of synchronous code, to work]

📝 [yesterday's prompt on problem statements](https://futureofcoding.slack.com/archives/C5T9GPWFL/p1722547627788149) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/thinking-together.html#2024-08-03T04:42:03.009Z)

Follow-up to [💬 #thinking-together@2024-08-01](https://history.futureofcoding.org/?fromDate=2024-07-29&toDate=2024-08-04&channel=thinking-together&filter=#2024-08-01T21:27:07.788Z): post a single comment with a number from 1 to 6 for every comment but yours in yesterday's thread, indicating how close you perceive everyone else's problem statement to be relative to yours. (And don't read other people's comments before you post yours; that's part of the fun here.)



Here's what the numeric scale means:




* 1: This is a rewording of my problem statement.
* 2: This overlaps almost entirely with my problem statement.
* 3: I care about this problem.
* 4: This doesn't seem like a big problem.
* 5: This is fine, I don't think it is a problem.
* 6: This statement is alien to me, I don't understand it as a problem statement.



Hopefully that makes sense and I haven't missed some major option..



In a day or two I'll collate the results in the attached table. (You're welcome to do so as well; just download the html file and open it in a browser tab, fill in and hit the 'save' button to save a local copy with your edits. Upload it here if you like, that can be an alternative way to give your votes.)

🗒️ [problems.html](http://history.futureofcoding.org/history/msg_files/F07/F07F5MDAQ5U.html)


💬 **Jari**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/thinking-together.html#2024-08-03T15:32:48.955Z)

Hello, I am currently building a lowcode platform for easy and fast backend development. Basically, you write logic using functions which look like excel functions or UDFs. Do you have any opinions on programming using Excel? I have written prototypes many times using it, but main problems have been 1) not being able to use it as a backend 2) more complex sheets are hard to understand and test

📝 [the problem statement thread](https://futureofcoding.slack.com/archives/C5T9GPWFL/p1722547627788149) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/thinking-together.html#2024-08-04T18:23:55.688Z)

Here's the current state of people's reactions to each other's problem statements. If you haven't added your reactions yet, please consider doing so! If you haven't written a problem statement yet, please do so before reacting to those of others. I know it's a non-trivial bit of work. I tend to open Slack on two windows somehow to jump between [💬 #thinking-together@2024-08-01](https://history.futureofcoding.org/?fromDate=2024-07-29&toDate=2024-08-04&channel=thinking-together&filter=#2024-08-01T21:27:07.788Z) and [the problem reaction thread](https://futureofcoding.slack.com/archives/C5T9GPWFL/p1722660123009799) 🤦 But it does seem like something promising to think about.



I've also included a very rough, very preliminary, very incomplete stab at visualizing clusters of people's problem statements. There's no reason to think this "space" is Euclidean or 2D, so take it with a huge bucket of salt.



The visualization is in no way mapping status relationships. The intent is not to exclude anyone, but a very narrow instrumental purpose of finding opportunities to collaborate. If you need an analogy, a better one might be a star chart. It seems safe to assume we're all light years apart given our track record of collaborating 😄 This picture is an initial attempt at making a map based on imprecise measurements from a single point. If you spend any time thinking about the map, try to build your own from the raw data to avoid my inevitable biases.



I started out with  `Kartik`  at the origin (no objectivity here!) and positioned first my 1s, then my 2s, then 3s and so on all the way to 6s. Then I tried to go through others similarly and resolve tensions in a very rough, very manual way. I might do this a few times to try to get better at it.



Even though this "data set" is almost certainly high-dimensional, a few 1-D relationships popped out at me:




*  `Kartik -> Tom`  +  `Tom -> Paul`  =  `Kartik -> Paul` 
*  `Kartik -> Tom`  +  `Tom -> Nilesh`  =  `Kartik -> Nilesh` 

I responded by putting the 4 of us on a straight line. There may be a spectrum here that bridges the incomprehension between the ends.



This sort of bridging of incomprehension is a common pattern. I initially had  `Ivan`  as far away from  `Kartik`  as  `Paul` . But several connections drew the  `Ivan` / `Eli`  cluster closer.  `Dany`  too might be as far from me as  `Paul` , but is just 1 away from  `Jimmy` .  `Guyren`  too, but is close to  `Tom`  and  `Dany` . So some of these edges have more "tension" than others, and I haven't come up with a way yet to show that.



(I'm currently showing edges labeled 1-3. If we get more data I might need to prune that further. The edges are directional but unfortunately [my tool](https://git.sr.ht/~akkartik/snap.love) doesn't have arrows.)



Anyways. Add your problem statements and reactions!

🗒️ [problems.html](http://history.futureofcoding.org/history/msg_files/F07/F07F89D2H8W.html)

![problems.png](http://history.futureofcoding.org/history/msg_files/F07/F07FEQSQ4RZ.png)

🗒️ [problem-clusters](http://history.futureofcoding.org/history/msg_files/F07/F07FTJ850RX.text)

![problem-clusters.png](http://history.futureofcoding.org/history/msg_files/F07/F07FHD8RWPN.png)



# Content

📝 [Calculating Empires: A Genealogy of Technology and Power since 1500](https://calculatingempires.net) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/linking-together.html#2024-07-29T03:42:55.586Z)

Via [Jack Rusher](https://twitter.com/jackrusher) on Mastodon…



[Calculating Empires: A Genealogy of Technology and Power since 1500](https://calculatingempires.net)



It's an enormous map of illustrations of various advancements toward, within, and around computers. Note that it's wildly horizontal. I tried exploring it a bit on my phone but found that unsatisfying. I recommend using the largest monitor you've got.

💡 [Quint: A modern and executable specification language](https://quint-lang.org/docs/lang) via [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/linking-together.html#2024-07-31T14:53:39.442Z)

Just saw Hillel Wayne link to Quint on LinkedIn, and I finally want to try writing TLA+ as a result...

🎥 [Midinous - Non-linear MIDI Sequencer - Official Trailer](https://www.youtube.com/watch?v=F2_C5lpb2Bg) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/linking-together.html#2024-08-02T09:29:42.661Z)

![Youtube Thumbnail](https://img.youtube.com/vi/F2_C5lpb2Bg/hqdefault.jpg)

[Midinous - Non-linear MIDI Sequencer](https://www.youtube.com/watch?v=F2_C5lpb2Bg)



🐇 [Hundred Rabbits is a small collective exploring the failability of modern tech](https://news.ycombinator.com/item?id=41131181) via [Andreas S](https://twitter.com/curious_reader)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/linking-together.html#2024-08-03T10:13:25.247Z)



Hello 👋 Future of coding,



I hope you are doing well :)

So I found one of those interesting HN posts:

[news.ycombinator.com/item?id=41131181](https://news.ycombinator.com/item?id=41131181)

I hadn’t heard of 100 rabbits before :

[100r.co/site/about_us.html](https://100r.co/site/about_us.html)



The comments in the HN are also very interesting. For me they feel very  ~_*much*_~  related to the future of coding. 



Like this one:

[news.ycombinator.com/item?id=41136056](https://news.ycombinator.com/item?id=41136056)



In this respect, their page for hacking baguettes by sun&sea is my personal favourite

[100r.co/site/solar_cooking_experiment.html](https://100r.co/site/solar_cooking_experiment.html)

100Rabbits is like the coming true of Grothendieck's 1972 permatech lecture given at CERN*

[github.com/Lapin0t/grothendieck-cern](https://github.com/Lapin0t/grothendieck-cern)

>"I think that agriculture, stockbreeding, decentralized energy production, medicine of a certain kind, very different from the medicine that prevails today, will come to the fore. It's impossible to say which part purely creative joy will play in these new developments. My hope is, it will be a creative development in which there will be no essential difference between conceptual activities and manual physical activities. When people become masters of their own needs to the point where an appreciable part of their creativity remains free---and this will take a time we can't predict, it may be a generation, it may be ten, no one knows---at that point, anyone, not just a certain scientific elite, will be able to devote a significant part of their time to purely creative, purely speculative, purely playful research"


📝 [this slimy interview](https://dark.properties/from-silicon-to-slime/) via **Arvind Thyagarajan**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/linking-together.html#2024-08-04T16:55:41.117Z)

apropos of verbalising favourite problem statements, I found a wonderful one in [this slimy interview](https://dark.properties/from-silicon-to-slime/)




>  _How can we align our interests with what living organisms and systems naturally do? How can we yoke ourselves to what they’re doing so that our relationship is no longer exploitative, but rather one where we’re putting existing capabilities to productive ends?_ 

# 🤖

📝 [Argentina to use AI to stop crime before it happens - UPI.com](https://www.upi.com/Top_News/World-News/2024/08/02/ar-using-ai-to-stop-crime-early/3981722571581/) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/of-ai.html#2024-08-02T11:30:59.332Z)

Argentina to use AI to stop crime before it happens

>Argentina has announced plans to use artificial intelligence to predict crimes before they're committed, the country recently announced.

# Present Company

📡 [webrtcforthecurious.com](http://webrtcforthecurious.com) via **Guyren Howe**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W1/present-company.html#2024-08-01T03:20:00.548Z)

Currently trying to use WebRTC from Flutter. I just want a way to find my external IP address and port, and to share data through it. Seems like a simple requirement.



I am  *utterly*  astounded at the complexity of WebRTC. I’ve just never see anything quite like it. The Flutter plugin just flat doesn’t work for me, and there is no debugging information available to let me know why. The plugin uses an opaque C library, and I’m no C hacker.



I’m down to using a headless browser, which I’m pretty sure I will get working. But holy moley. This: [webrtcforthecurious.com](http://webrtcforthecurious.com) is about the friendliest introduction I can find.



Tragic, because ad hoc peer-to-peer connections should be a large part of the Future of Computing.



File under: hopefully  *not*  the future of computing.



----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
