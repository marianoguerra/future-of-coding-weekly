<!--
.. title: Future of Coding Weekly 2024/07 Week 2
.. slug: future-of-coding-weekly-202407-week-2
.. date: 2024-07-07 23:22:57 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

📑 Programming languages resources 🔨 Breaking Silos 💡 The Interfaces With Which We Think 

# Two Minute Week

💬 **Marek Rogalski**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/two-minute-week.html#2024-07-05T14:52:40.777Z)

This week in Automat was mostly refactoring and bug squashing so not much to show. Except today I've sat down and designed the object that will act as a flip-flop switch. The first three images are the candidates for the final object. I'm actually still not decided which one to go for... The others images are just interesting results  obtained from prompting stable diffusion

![design-generated-20240705-164409-0-detailed realistic masterpiece best q.png](http://history.futureofcoding.org/history/msg_files/F07/F07B0RYJR9C.png)

[🧵 more images in the conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/two-minute-week.html#2024-07-05T14:52:40.777Z)


# Our Work

📝 [The proof is in the meta-tracing JIT interpreter](https://marianoguerra.org/posts/the-proof-is-in-the-meta-tracing-jit-interpreter/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/share-your-work.html#2024-07-01T09:47:18.988Z)

The one where I implement a native JIT interpreter for my minimal oop language using pypy's meta-tracing compiler toolchain

>In the previous posts: Make Your Self and Macros and optimizations: it's just a phase I described the design and implementation of a minimal object oriented language with the implementation done in...

🥞 [toy postfix stack-based language to inflict upon my kids](https://github.com/cben/animation-stack-language) via **Beni Cherniavsky-Paskin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/share-your-work.html#2024-07-01T17:49:31.606Z)

Been a while since I touched it but I've been [building](https://github.com/cben/animation-stack-language) a toy postfix stack-based language to inflict upon my kids.  My theory is:




* postfix may have benefits for early teaching (linear evaluation order, lack of "syntax", trivial notional machine)
* the obvious drawbacks can be somewhat mitigated if instead of destructively changing the stack, you can navigate all previous stack states.  (I'm not the first to try the latter; in particular Kartik did it in Mu, including descending into function calls. I don't even have user-defined functions yet.)
* I wanted to explore "replacing" some uses of control structures with composition of a bigger data type, like a whole picture or animation.  



I'm resigned to the thing not being turing-complete.



Initial implementation's data type was [1D "animation" of color change (I wanted them to program an RGB lamp)](https://asciinema.org/a/zObMq9ZLJQNA99X3EhdEDllhA)

=> My kids liked typing and mixing colors, but the idea of a single value representing change over time went entirely over their heads 😞

Anyway terminal REPL was a dead end, because you can't go back and edit past code.  => I got a prototype web editor — you can move cursor, edit freely, and see stack state before each word: [animation-stack-language.netlify.app](https://animation-stack-language.netlify.app/)

TODO: rendering still uses styled block characters 🧑‍💻, I need to learn canvas...



TODO: Next big step will be to replace the data type from 1D "time" to 2D "picture", taking inspiration from [forthsalon.appspot.com](http://forthsalon.appspot.com) and [code.world ](https://code.world/).

I'm thinking to make do with some 2D rather than RGB colorspace, so that every pixel can also be interpreted as a vector.  That way any picture doubles as a limited representation of function-as-data (not turing-complete! but very visual 🤔).

🎥 [hash references to functions, effects and transpilation in EYG](https://vimeo.com/973314611?share=copy) via [Peter Saxton](https://twitter.com/CrowdHailer)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/share-your-work.html#2024-07-01T19:08:20.286Z)

![Vimeo Thumbnail](https://i.vimeocdn.com/video/1887438430-1ad5b565b17f24df0112fa86e8d2590d6dd98c2a109df670fcf8d6bc2c9bceb4-d_295x166)

Hash reference to every function and limiting effects at the top level to allow code to execute even after a failure. This is a bit longer as I try to explain in more detail what these features are in EYG

🧮 [Visualizing Risk – Calc with Dec 🧮 🤓](https://calcwithdec.dev/posts/viz-risk/) via **Declan**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/share-your-work.html#2024-07-01T21:12:40.256Z)

I made a blog post about [visualizing risk](https://calcwithdec.dev/posts/viz-risk/)

It's a scrollable explanation that develops up a visualization - a bit going on in it, a problem I have with a lot of things, so was really glad to spend time learning a few things about making this kind of scrollable interaction to more carefully introduce things.



Behind the scenes, the numbers are from a calculang model doing monte carlo simulations on a pension calculator calculang model. This composability (or what I call flexibility) is something I decided not to make  _this_  post about, but it's an important part of why calculang exists.

I plan to do a few similar separate exercises, and then spin back to this on it's own. (e.g. next: benchmarking actual results to their older estimates)



So, this blog post isn't really technical, but I hope it's interesting or at least easy to follow, and it fits into a longer piece about calculang. Happy if you have any feedback about the post or questions about this longer piece!


>Visualizing Risk: feat. a pension savings calculation, Monte Carlo simulation, and ‘scrollytelling’

🤖 [A Voice Controlled G AI Assistant for LabVIEW](https://www.linkedin.com/feed/update/urn:li:activity:7214151556164640769/) via **Jim Kring**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/share-your-work.html#2024-07-03T06:27:03.569Z)

Making more progress on AI assisted visual programming (with voice control).

🎥 [GAIA Voice Demo](http://history.futureofcoding.org/history/msg_files/F07/F07AUATTESE.mp4)

📲 [DIPLOMATIC: Data sync framework](https://diplomatic-docs.replit.app/) via **Mason**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/share-your-work.html#2024-07-03T20:48:09.044Z)

I've been building a sync framework that app developers can integrate, to securely sync state changes between clients. I call it DIPLOMATIC, after the concept of a diplomatic bag which travels through foreign territories, but protected against inspection. So far I've got a couple host implementations targeting Deno and Cloudflare (Workers + Durable Objects + D1), as well as client libraries to build web clients in React and CLI tools in Deno.



The attached video shows off a demo app that displays and updates a consistent status message across clients. It generates and stores a cryptographic seed (synced via the browser's password manager), queues status changes when offline or not connected to a host, then pushes queued changes when connected, and receives real-time updates using WebSockets.



I've got some rough docs up at [diplomatic-docs.replit.app](https://diplomatic-docs.replit.app), and a walkthrough of the demo app from the video at [diplomatic-docs.replit.app/docs/demos/status.html](https://diplomatic-docs.replit.app/docs/demos/status.html).



The backstory is that, for a while I've wanted to build a grand life-planning app, like a TODO list that can operate at the decade-level rather than the daily-level. But I kept running into these blocks:

a) I'll want to access it from phone and desktop, so it needs a sync solution,

b) maintaining servers is a pain, and

c) a life-planning tool will necessarily have personal info, so it shouldn't hang out in plaintext on someone else's computers.



These sorts of issues aren't unique to this tool. In fact, I think they're common enough to merit a general solution. The Web 2.0 client/server model gave us easy software updates and access from multiple devices with consistent data. But we backslid by making all app data visible to the software provider and relying on them to maintain their servers. Mobile apps gave us the additional expectation that we could access our data while offline.



I think there's a simple solution to get the best of all worlds, by encoding app state changes as objects (the Event Sourcing pattern), then encrypting those deltas and shipping them off to a server which relays to other clients, which then decrypt and apply the changes locally. With this architecture, the relay servers all have a standard interface (not application-specific), and they're blind to delta contents, so hosting becomes a commodity. This means companies could specialize in just running these hosts, giving application developers a secure backend without the maintenance burden. It also creates a standardized import/export format for app state—the delta log, so you get a backup format for free.



I'm only designing around single-user apps at the moment. Having a "last-wins" policy for conflicts makes things nice and simple..



If anyone knows of related work I should check out, has suggestions, wants to collaborate, ... let me know. The code is still a bit messy, but I'm planning to tidy that up and open the repo soon.


🎥 [diplomatic-status-demo](http://history.futureofcoding.org/history/msg_files/F07/F07AYQVR8HG.mov)


🐸 [Todepond dot com: I went to an algorave](https://www.todepond.com/wikiblogarden/scrappy-fiddles/sharing/normalising/live/) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/share-your-work.html#2024-07-05T05:58:43.421Z)

i wrote up my experience of slowly discovering the live coding world, and how my Arroost tool fits into it, and the motivations for my work

🖥️ [A set of tools to play around with a Hack compute](https://github.com/Warkanlock/hack-tooling) via **Ignacio Brasca**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/share-your-work.html#2024-07-05T08:09:06.760Z)

Hello everyone! I have just finished a set of tools I built while learning about the [Hack computer](https://github.com/Warkanlock/hack-tooling) architecture. Today I felt confident that I could share all the code I wrote for this







To me, this architecture was a great starting point if you want to get a hang of how computers, compilers, and virtual machines actually work

# Devlog Together

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/devlog-together.html#2024-07-01T23:21:01.824Z)

Shower thought on yesterday's thread above: the painter's algorithm is a way to make an interface less stateful. It lets you specify shapes to draw in any order. However:






* It does this by adding  _more_  state to the implementation. You can't just draw each shape as you encounter it in the code. You have to shove them all into an array, sort by z value, and then draw them all.
* It does this by adding more state to the communication channel. The human has to provide a z value now for each shape. Sometimes this is naturally obtained, sometimes it is not and the human now has to think in their heads about what z value to give their shapes to make the drawing come out as they want.



Thinking about this, it feels like state is to some extent inevitable. There's some conservation of state going on. You can't really eliminate it. You squeeze it down in one area and like a balloon it pops up somewhere else.




🧑‍💻 [a visual notation for something we typically use keyword args for.](https://futureofcoding.slack.com/archives/C03RR0W5DGC/p1719791347513999) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/devlog-together.html#2024-07-03T14:10:36.688Z)

This morning I'm thinking about turning [💬 #devlog-together@2024-06-30](https://history.futureofcoding.org/?fromDate=2024-06-27&toDate=2024-07-03&channel=devlog-together&filter=#2024-06-30T23:49:07.513Z) into a visual notation for something we typically use keyword args for. For example, the following glyph might represent a function for initializing a text editor widget with the following signature:




```
edit.initialize(top, left, right, bottom, font_size)
```



And the numbers indicate a specific call to this function:




```
edit.initialize(15, 15, 115, 215, 20)
```



![visual-keyword-args.png](http://history.futureofcoding.org/history/msg_files/F07/F07B9BAHYF3.png)


🤔 [moving away from slack](https://futureofcoding.slack.com/archives/CEXED56UR/p1719244290391599) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/devlog-together.html#2024-07-04T03:51:26.549Z)

This week, I'm learning more WebGPU, since I'm hoping to use it for a handful of visual programming projects down the road. I'm also still looking at options for [💬 #administrivia@2024-06-24](https://history.futureofcoding.org/?fromDate=2024-06-21&toDate=2024-06-27&channel=administrivia&filter=#2024-06-24T15:51:30.391Z). Would love to find something that feels more like a forum than a chat, but not toooo much like a phpbb, and doesn't have a per-user cost, and doesn't impose a maintenance burden, and is accessible to search engines (and accessible to all people, natch), and isn't likely to "incredible journey" or "we AI'd every text field for you" etc. So we're currently whatever the opposite of "spoiled for choice" is :)

# Reading Together

📝 [Weird Machines, Exploitability, and Provable Unexploitability](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8226852) via **Polly**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/reading-together.html#2024-07-05T18:10:29.699Z)

I've been kinda obsessed with this paper, "Weird Machines, Exploitability, and Provable Unexploitability" since October last year.

🎥 [RuhrSec 2018: "Keynote: Weird machines, exploitability and unexploitability", Thomas Dullien](https://www.youtube.com/watch?v=1ynkWcfiwOk)

(I think starting with the talk is a good idea)



After hearing about robust first computing I've been pondering the connection for a bit. I'm not really sure what to make of it, but there has to be some connection. In [this talk](https://www.youtube.com/watch?v=Dmlm6mtnSZs) by Dave Ackley he specifically mentions that "flipping one bit" (paraphrasing) can be enough to destroy a lot of software, which is the exact attack model that Dullien uses. It would be nice if software could maintain security invariants despite memory corruption (which Dullien proves for a small piece of software that he writes) so in that sense the two concepts allign. But I find that "continuing despite an error" or "return a best-effort answer" is the source of many security vulnerabilities, (mid example: database lookup fails, code is written in a way that forgot to handle that case, code continues anyway and returns admin data that shouldn't be shown). I wonder if any of y'all have read this or have thoughts about it. :))

# Thinking Together

💬 **Declan**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/thinking-together.html#2024-07-03T20:59:53.766Z)

I recall coming across some opinions Against interactivity. I think in support of showing the thing, rather than making the user interact to see the thing.

Is there a soundbite for this? Are there any good links? I don't know where I encountered this opinion I  *think*  a few times, but I found something in one passage searching Bret Victors Explorable Explanations.

I wonder is this the most concrete link or reference I'll get, or does it ring a bell for someone else?

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07AYQX6HM1.png)


💬 **Shen Li**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/thinking-together.html#2024-07-04T15:22:10.904Z)

I find a lot of statements these days describes a fact about something and then call it the “best”.



It’s like someone saying “look number 2 is so great, it’s the only even prime number, it’s so cool that it’s used as the base of digital systems, so we should use 2"



And someone else says: “well, number 3 is cool because it’s the first Mersenne prime, and it has a super cool divisibility rule, so we should use 3”.



At the end of the day, if the question is 1+1, then 2 is infinitly better than 3, and the other way around if the question is 4-1. And if you just need some positive integer as a placehold or something, then well, they are the same.



People seems to like and re-post these information a lot. I think these facts do provide some values, like the whole entertainment industry, it fulfills the curiosity of our minds and keeps us, well, entertained.



But drawing the conclusion that something is better, or something should be used instead of another thing based on these facts just feels off to me. It’s especially bad IMO, when people use these statements in PR reviews.



💬 **Eric Normand**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/thinking-together.html#2024-07-04T19:50:55.200Z)

I have a question I hope someone here can answer. I am at something of a crossroads in my career and privileged enough to be able to pursue almost anything. When I tell people the big problems I'd like to make an impact on, it's education, specifically science education. I want more people to understand how the scientific method works and how we use it to gain more understanding.



I have passively read about education (Montessori, Bruner, Piaget, Pappert), followed Alan Kay and the smalltalk story, and I was a math teacher for a couple of years. I also teach currently online.



I can't help but think that there is more to using computers than reproducing old media, and that the code-debug cycle is a good way to refine our understanding. And so maybe there is something there, using programming and interactivity as a medium for exploration of ideas.



However, I don't have much more of a vision than that. I was talking to my wife about it yesterday and came up with an interesting phrasing: I want to do what Montessori did with her learning materials but with computers as a medium. 



I would appreciate any and all links to people, conferences, reading material, etc., that are related to this idea.



Just to be clear, I don't mean teaching kids to code. And I don't mean using software to support the current educational paradigm (e.g., Chromebooks in schools, etc.). People seem to automatically roll back to those two pits.

I'm in pursuit of the next part of my career. I don't know what it will look like, but I want it to be productive.



💬 [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/thinking-together.html#2024-07-05T14:34:31.771Z)

pond’ring aloud:



The value of Gutenberg’s printing press is that it taught kids to read, not to build printing presses.



The value of computers is that they teach kids to ???, not to write code.

💬 [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/thinking-together.html#2024-07-05T14:36:09.723Z)

pond’ring aloud:



I wonder if the problem with VPLs is the word “language”.



It appears to me that the word “programming” has been generally accepted to mean “sequential language” or writing sequential codes (aka “coding”). I view this view as being too restrictive. Programming is more than just commanding a machine with sequentialistic instructions. Programming a  *CPU* , though, is - by definition - sequentialistic. But,,, programming a  *machine(s)*  need not be sequentialistic. Especially in the age of nothing-is-central. In fact, LLMs are an example of non-sequentialism. The machines that run LLMs were programmed, arduously, in sequential notation, but, the inner success of LLMs is not sequential, but something else (massively parallel plinko?).



VPLs and DPLs are, to me, not sequentialistic things. Maybe they should be called “notations” instead of “languages”? VNP and DNP? Visual Notation for Programming, Diagrammatic Notation for Programming? [In which case, “programming languages” as we know them, are TNPs - Textual Notations for Programming].



In fact, programming is not the difficult part. Re-programming is the novel aspect of Design that computers bring to the world. We have been programming machines to do  *single*  things for centuries (using metal lathes, etc.). This time through, though, we have built machines capable of doing  *many*  things.

💬 **Shen Li**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/thinking-together.html#2024-07-05T14:45:48.763Z)

Related to my last post, where I believe we shouldn’t make decisions outside the context of a problem or goal.



I’ve observed the same issue with secondary goals, where they are discussed outside the context of primary goals.



I don’t know if this bothers other people, but it bothers me a lot. Maybe I’m not smart enough to see the implied connections.



One example I can give is that many times I’ve been given the goal of “consistency,” whether in the UI or the code style. I’m not saying “consistency” is a bad thing, but without connecting it to the primary pre-shared goal, the value of this secondary goal becomes trivial and nullified. Logically, it doesn’t make sense either, especially for a start-up, because a start-up is doing something new, and you can’t do new things by pursuing consistency. If we did things consistently, we’d still be using XML instead of JSON.



Again, to be clear, I’m not saying doing things consistently is bad. I’m just saying that, for me, when given the goal of “consistency” without the context of why it’s important for our primary goal, I’d be much more motivated.



Another example is “patterns.” I think initially “patterns” are just solutions to some pre-existing problems, but we put too much emphasis on them to the point where we forget about the goals of these patterns, and the patterns themselves become the goal. To be clear, I’m not saying patterns are bad or that we shouldn’t use them. We should know them, in the same way we should know other just-in-case knowledge, to perform better. Some patterns are just cool, and we derive joy from them, the same way we get joy from movies and music. I’m just saying we probably shouldn’t treat them as primary goals (unless in school, I guess, where you get points for implementing a pattern).



Now that I think about it, this may just be a communication issue within an organization, where secondary goals are communicated without the connection to primary goals. I’ve never worked in a big organization, and I wonder how they do it. Also, am I alone in this? Do other people feel demoralized too when given just a secondary goal?



# Content

📑 [Programming languages resources](https://bernsteinbear.com/pl-resources/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/linking-together.html#2024-07-01T09:50:53.032Z)


>  This page is a collection of my favorite resources for people getting started writing programming languages.



🔨 [Breaking Silos](https://blog.bracha.org/primordialsoup.html?snapshot=AmpleforthViewer.vfuel&docName=BreakingSilos) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/linking-together.html#2024-07-02T08:50:06.179Z)

[Breaking Silos](https://blog.bracha.org/primordialsoup.html?snapshot=AmpleforthViewer.vfuel&docName=BreakingSilos) by Gilad Bracha



Experiment: AI assisted summary edited by me to pique your interest (let me know what you think):






* Modern applications are siloed and have difficulty cooperating with each other.
* This was not always the case, exemplified by the Apple Newton, a mobile device released nearly 30 years ago.
* Apps on the Newton were written in NewtonScript, a prototype-based language.
* Newton applications had a flexible top-level view, enabling app compositionality where entire apps could be nested within others.
* Objects in NewtonScript (called frames) inherited properties from both their prototype and their parent, facilitating UI use.
* This inheritance allowed an app to function as a widget inside another app, enabling dynamic interaction between nested and enclosing apps.
* Apps on the Newton persisted their data in object stores called soups, which were accessible by multiple apps.
* The concept of co-designing language and UI existed earlier, exemplified by the Boxer system from the 1980s.
* Another example of compositionality is Morphic, a graphics system developed in Self and later adapted for Squeak and Lively Kernel, focusing on graphical structure rather than application logic.
* Inspired by Morphic, the idea of an app store with composable apps was proposed about twenty years ago.
* These apps would live-update, synchronize automatically, and be local-first, a concept predating Apple's app store.
* Newspeak language derived partly from this effort.
* A practical example of app composition is in travel, where a button for weather lookup could be embedded into an itinerary and dynamically interact with surrounding widgets to display relevant weather information.



💡 [The Interfaces With Which We Think](https://alexanderobenauer.com/think/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/linking-together.html#2024-07-02T09:33:02.250Z)

> The concepts in modern operating systems — apps, windows, desktops, notifications, and so on — have so permeated our understanding of personal computing that it’s hard to imagine anything else, let alone believe there could be anything better.It’s easy to assume that this is, somehow, simply, 
>  _how computers work_ 
> .

But this can’t be further from the truth.

🎥 [progrium technology thesis 2022](https://www.youtube.com/watch?v=yKZ15O7zeHY) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/linking-together.html#2024-07-05T14:58:26.269Z)

![Youtube Thumbnail](https://img.youtube.com/vi/yKZ15O7zeHY/hqdefault.jpg)

Revisited Jeff Lindsay's [2022 thesis video](https://www.youtube.com/watch?v=yKZ15O7zeHY) and, yep, it still kicks ass.

🧫 [cell thingy](http://blug.crispypin.cc/cellthing) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/linking-together.html#2024-07-05T23:32:17.192Z)

Incredible project: "cell thingy" inspired by CellPond and MarkovJunior

🐦 [Tweet from @x](https://x.com/_rygo6/status/1809346180650004992) via [Duncan Cragg](https://twitter.com/Duncan__Cragg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/linking-together.html#2024-07-06T00:09:15.257Z)

[x.com/_rygo6/status/1809346180650004992](https://x.com/_rygo6/status/1809346180650004992)



I replied to this point mentioning my unshakeable belief in what I am doing, and it occurred to me that there aren't actually many on this FoC Slack who can equally say that they know  _exactly_  what they are certain is right for the Future of (Programming)! We get a lot of speculative and experimental thoughts here which is the reason we all engage, but who amongst you can say you are 110% certain you've found what you believe to be the Future, with the uncertainty  _only_  being in "whenever that comes about"? Which  of course, as the Twitter thread mentions, is about the seemingly trivial but of course 110% important factor of "memeing" to the Internet. Personally, I'm crap at that bit.

📑 [Ashley Blewer's Halt and Catch Fire Syllabus](https://bits.ashleyblewer.com/halt-and-catch-fire-syllabus/) via **Walker Griggs**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/07/W2/linking-together.html#2024-07-07T19:39:39.203Z)

A CFL (call for links). Does anyone have any other examples of non-academic syllabi like [Ashley Blewer's Halt and Catch Fire Syllabus](https://bits.ashleyblewer.com/halt-and-catch-fire-syllabus/)? Specifically a curated, self guided exploration of a topic that references foundational academic works but is itself not created as a formal course. That vast majority of syllabi online are (under)grad syllabi reposted by the department or professor 



----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
