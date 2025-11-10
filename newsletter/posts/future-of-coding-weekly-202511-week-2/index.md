<!--
.. title: Future of Coding Weekly 2025/11 Week 2
.. slug: future-of-coding-weekly-202511-week-2
.. date: 2025-11-10 11:53:00 UTC+01:00
.. tags:
.. category:
.. link:
.. description:
.. type: text
-->

🧠 micrograd 🎥 I am not dead yet 📝 The Hidden Gem in S/SL: Why Dataless Languages Matter

# Share Your Work

## 🗨️ **Konrad Hinsen**: [🧠 micrograd](https://codeberg.org/khinsen/micrograd)

[🧵 conversation @ 2025-11-03](https://history.futureofcoding.org/history/weekly/2025/11/W2/share-your-work.html#2025-11-03T13:22:46.462Z)

Micrograd: a pedagogical implementation of neural networks using a reverse-mode automatic differentiation engine.  
<https://hyperdoc.khinsen.net/94FE4-micrograd>

I have written this as a real-life example of explorable explanations in HyperDoc, my framework for explainable software systems which I demoed at a meetup earlier this year. The main new features in the platform that are showcased are interactive tools and much-improved playgrounds for free exploration.

Feedback welcome at <https://codeberg.org/khinsen/micrograd> (the source code repository), or right here of course.

[📝 micrograd](https://codeberg.org/khinsen/micrograd)

> A tiny scalar-valued autograd engine and a neural net library on top of it

![micrograd](https://codeberg.org/khinsen/micrograd/-/summary-card)

## 🗨️ **Ivan Reese**: 📝 The Hidden Gem in S/SL: Why Dataless Languages Matter

[🧵 conversation @ 2025-11-08](https://history.futureofcoding.org/history/weekly/2025/11/W2/share-your-work.html#2025-11-08T16:32:16.668Z)

New blog post: [📝 The Hidden Gem in S/SL: Why Dataless Languages Matter](https://programmingsimplicity.substack.com/p/the-hidden-gem-in-ssl-why-dataless?r=1egdky)

Excerpt:

> In this article, I want to discuss my main inspiration from S/SL—a 1970s compiler construction language that most programmers have never heard of, but which demonstrates something fundamental about separating architectural thinking from implementation details.  
> What is S/SL?  
> S/SL stands for Syntax/Semantic Language. It was designed for writing compilers—specifically the parts that parse input, analyze semantics, and generate code.  
> Here’s what makes it unusual: S/SL has no data definitions. You can’t declare integers, strings, arrays, or records.

## 🗨️ **Tom Larkworthy**:

[🧵 conversation @ 2025-11-08](https://history.futureofcoding.org/history/weekly/2025/11/W2/share-your-work.html#2025-11-08T17:17:51.046Z)

Kartik asked at some point whether Lopecode could do offline note taking. Sort-of but you would have to remember to export every change or lose you notes and the frequent exports would generate a new file every time cluttering the HDD up.

So I have made a note-taking app that uses IndexDB via dexie.js to remember the work in progress. If you have two tabs open the notes are synced in realtime. The Notes in indexdb are carried forward on export as an inline file attachment to the single HTML file application.

Export now support themes so this is the first dark mode version 👻. Its looks amazing now (CSS taken from ISC licensed NotebookKit and credited).

Obviously if you use it from the web link it will use network so if you wanted to use it you would click download and use it from your computer for true offline. Tested in Chrome/Firefox/Safari and works, but Safari might delete the indexdb data after 7 days (maybe not though if its a file:// ?) There is a technical overview inside the notebook as its meant for demonstration over actual utility  
<https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_notes.html>

sidenote: I wrote this slack message earlier in the day, decided not to send it coz there was a bug, recorded the draft message in notes, fixed the bug and pushed, and now the [Github.io](http://Github.io) one now has this very slack message. I kind of like it coz its like an intro anyway, but a bit of a risk for me who publishes notebooks that I might accidentally transmit sensitive information.

## 🗨️ **TodePond**: [🎥 I am not dead yet](https://www.youtube.com/watch?v=60SywbNuZA8)

[🧵 conversation @ 2025-11-09](https://history.futureofcoding.org/history/weekly/2025/11/W2/share-your-work.html#2025-11-09T22:58:24.204Z)

hello everyone i gave a talk about live programming, and what "liveness" means

[🎥 I am not dead yet](https://www.youtube.com/watch?v=60SywbNuZA8)

![I am not dead yet](https://i.ytimg.com/vi/60SywbNuZA8/hqdefault.jpg)

# Thinking Together

## 🗨️ **Ivan Reese**:

[🧵 conversation @ 2025-11-06](https://history.futureofcoding.org/history/weekly/2025/11/W2/thinking-together.html#2025-11-06T16:09:26.685Z)

What are the all-time great projectional / structure editors? I'm particularly interested in:

- tight focus on a specific language
- really good autocomplete / hinting (ie: type-aware, don't show me unhelpful stuff at all)
- pulling far away from the feel/experience of raw text typing, pushing toward "press a button, out comes exactly the program you wanted"

## 🗨️ **josharian**:

[🧵 conversation @ 2025-11-06](https://history.futureofcoding.org/history/weekly/2025/11/W2/thinking-together.html#2025-11-06T16:17:50.784Z)

An esolang idea that might (?) be fun to kick around.

The idea is to take advantage of the fact that LLMs are somewhat resilient in their inputs (can ignore typos, infer intent, etc.) to have a multi-level language.

Here’s a sketch, but I’m not wedded to any of it:

Programs are UTF-8. Each input code point is interpreted as an opcode. (Many opcodes are no-ops, probably most non-ASCII code points.) Some opcode(s) cause LLM execution of the program text.

The fun is writing a program whose opcodes do something useful, while still being natural-language-interpretable enough to use the second-level interpretation of the language as well.

(For the no-LLMs crowd, a similar idea is to have a pixel-based programming language…but the input is always pixels from rendering a textual program. Then you can execute either the pixels, or the text from which the pixels result, and bounce between the two.)

## 🗨️ **Ivan Reese**:

[🧵 conversation @ 2025-11-08](https://history.futureofcoding.org/history/weekly/2025/11/W2/thinking-together.html#2025-11-08T16:28:57.260Z)

On Mastodon, [maf](#user?key=U06SS0DHZD1) [shared the following](https://101010.pl/@maf/115513393355701912) discussion prompt:

[at [32m in the talk](https://www.youtube.com/watch?v=ViP31ILeRuo&t=1915s) [Hackover 2025 - Patterns in Chaos: How Data Visualisation Helps To See the Invisible](https://www.youtube.com/watch?v=ViP31ILeRuo&t=1915s), the speaker yote]…

> brings up an interesting thought re readable visual design - that visualizations should encode the important variables using features that we've evolved to recognize instantly - on the most primitive level. The example given is rather simple: large vs small... But if we pull this a little further, it might lead us to some interesting, totally not explored visualizations:
>
> - using familiar vs unfamiliar faces as data points
> - using movement (especially movement of complex foreground against complex background) to highlight key area
> - proximity (stereoscopic images) - this could be combined with movement, so that important points move back & forth
> - we're really good at predicting trajectories of thrown objects - can this be utilized somehow?

# Linking Together

## 🗨️ **maf**:

[🧵 conversation @ 2025-11-04](https://history.futureofcoding.org/history/weekly/2025/11/W2/linking-together.html#2025-11-04T16:36:09.564Z)

I didn't expect that. At first sight it seemed to be AI generated but under further inspection turned out to be totally legit. Nice find.

The linked page lists a couple innovations that are introduced. Domains & overlaps is an interesting technique that blends static & dynamic typing. "Memlets" provide a primitive for maintaining state. A simple, universal & also flexible mechanism for merging multiple concurrent processes back into a single thread of execution... Something tells me that the author has some experience working with dataflow languages and is addressing the main pain points.

There is also a PDF with a spec of the language that can be downloaded for free from a couple online stores. I've scanned through it quickly.

It's a fairly technical academic approach that starts with a definition of a language.

It's also pretty comprehensive - covers semantics, execution model, graphical display, programming interfaces. IMO such a priori design doesn't work well in visual space. It's hard to predict what elements will turn out to be annoying and which will create unexpected synergies. But if this language gets actually implemented and undergoes a couple iterations... Who knows... I'll be watching it's development with great interest!

## 🗨️ **Christopher Shank**:

[🧵 conversation @ 2025-11-04](https://history.futureofcoding.org/history/weekly/2025/11/W2/linking-together.html#2025-11-04T22:41:22.763Z)

"[Disability Driven Development](https://damaged.bleu255.com/Disability_Driven_Development)" from the [Damaged Earth Catalog](https://damaged.bleu255.com/)

> Disability Driven Development (DDD) is a practice that reimagines computing from a disabled perspective, challenging its seemingly seamless and stable hegemonic operations. It asks who is left out of creating (and joyfully using) digital technology, and how this can be changed. It is a practice by and for those who did not get to shape computing to meet their needs.

> Currently computing is stuck in a catch-22: while nobody is better qualified to create access solutions than disabled people themselves, systemic oppression and exclusion result in a situation where those with access needs rarely have the resources to envision or implement those solutions. The history of disability justice demonstrates an abundance of curb-cut effects—situations where focusing on access for one group, yields ideas, changes and solutions that are beneficial to many more people than those in the group the changes were originally meant for.

> DDD addresses barriers of access to programming, which relies heavily on text, specifically the English language and the Latin alphabet, with specialized 'languages' that are structured in very specific ways. If that weren't enough of a barrier, the programming world deals with a deeply entrenched bigotry. The resulting lack of access to programming reduces the quality of software, since the creativity involved in thinking about computing through a disabled and trans\*computational lens is excluded, denying disabled and other people the quality of life that software could help them achieve.

## 🗨️ **Mattia Fregola**: [👾 Dithering - Part 1](https://visualrambling.space/dithering-part-1/)

[🧵 conversation @ 2025-11-09](https://history.futureofcoding.org/history/weekly/2025/11/W2/linking-together.html#2025-11-09T12:10:10.433Z)

[Great virtual story on dithering](https://visualrambling.space/dithering-part-1/)

> Understanding how dithering works, visually.

![Dithering - Part 1](https://visualrambling.space/dithering-part-1/173b60e7df7a986124e6.png)

# Present Company

## 🗨️ **Daniel Harris**:

[🧵 conversation @ 2025-11-06](https://history.futureofcoding.org/history/weekly/2025/11/W2/present-company.html#2025-11-06T13:48:09.895Z)

MozFest Barcelona 2025 November 7-9! Anyone from Festival Of Confusion (that's here/us/we!) attending MozFest? Let's meet up! And if not MozFest what events are you attending over the next 6 months? That's 2 questions in one thread: hence the Confusion! 😉

---

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
