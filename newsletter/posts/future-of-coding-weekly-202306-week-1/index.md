<!--
.. title: Future of Coding Weekly 2023/06 Week 1
.. slug: future-of-coding-weekly-202306-week-1
.. date: 2023-06-05 22:58:16 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎙 FoC Podcast: INTERCAL 💡 Adjacent Possible Interfaces  🧬 Communal computing for 21st century science

# Two Minute Week

⚖️ [GitHub.com/Lexpedite/lawmirror](https://GitHub.com/Lexpedite/lawmirror) via [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W1/two-minute-week.html#2023-06-01T17:54:18.280Z)

This is what has been preoccupying my mind this week. Using ProseMirror to build a WYSIWYG web editor prototype that is compliant with a subset of the LegalDocML OASIS standard. Wanted to get a better idea of the complexity. GPT4 was more useful than the docs, it turns out.

🎥 [Law Mirror Demo](http://history.futureofcoding.org/history/msg_files/F05/F05ACLTMEH4.mp4)

🎥 [Nette: Worm Selection 🐛](https://www.youtube.com/watch?v=XDdvMe1d2Ko) via **Pawel Ceranka**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W1/two-minute-week.html#2023-06-04T10:37:08.746Z)

![Youtube Thumbnail](https://img.youtube.com/vi/XDdvMe1d2Ko/hqdefault.jpg)

Since it’s the weekend I think it’s fitting to post something a bit ridiculous 🙂

It’s a combination of a universal text highlighter & blocks highlighter in our ‘infinite’ canvas app

# Our Work

🎙 [Future of Coding • Episode 64 - Donald Woods & James Lyon • INTERCAL](https://futureofcoding.org/episodes/064) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W1/share-your-work.html#2023-06-01T03:37:04.584Z)


A normal episode about a normal [paper](https://archive.org/details/intercal-ref) about a normal [language](https://en.wikipedia.org/wiki/INTERCAL).



[Really, what else is there to say?]

💡 [Adjacent Possible: A space where we explore novel possibilities for digital interfaces](https://prabros.com/adjacent-possible/) via [Prathyush](https://twitter.com/prabros)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W1/share-your-work.html#2023-06-01T17:16:38.778Z)

Hey there, we started a project where we explore novel UI designs. We call it “Adjacent Possible” in reference to Kauffman’s idea. Do check it out if you get a chance and would love to know your feedback! 

🎥 [Adjacent Possible Demo](http://history.futureofcoding.org/history/msg_files/F05/F05A4JBA0NB.mp4)

🧲 [Expert AI coding assistant - Magnet](https://www.magnet.run/) via **Nicolae Rusan**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W1/share-your-work.html#2023-06-01T19:30:40.016Z)

Hey FoC community! I wanted to share a project we’ve been working on that we’re starting to ship more publicly called Magnet. Magnet is an AI Coding Assistant that makes it easy to use GPT-4 & ChatGPT in the context of your own codebase. It’s a desktop application that runs for MacOS (Windows coming soon)



🧲 [Download Magnet here](https://www.magnet.run)

🎥 [Here’s a little video walkthrough of how the tool works today](https://www.loom.com/share/a852a9ee3c224c879c490697f5bcd22f)



With the new coding capabilities of LLMs we wanted to start exploring what new AI tooling for building software might look like. We’re excited for some of what is coming up as well that tries to reimagine what some of the software dev workflows might look like when there’s an AI assistant along for the ride.



This first version is pretty simple but we’ve already been finding it pretty useful. It’s free to use if you put in your own OpenAI API Key so feel free to give it a spin (the hosted version uses our GPT-4 API key in case you want to try out GPT-4 and don’t have access yet).

# Devlog Together

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W1/devlog-together.html#2023-06-01T07:50:01.427Z)

Ugh. I have discovered that a library exists for building a UI I have wanted for ~6 years, and I have fallen into a prototyping rabbit hole, fighting a language and a framework I'm unfamiliar with, plus good code with bad documentation. I've never seen anyone spill this many pixels on documentation and fail to mention how it is installed, fail to give a step-by-step hello world, and create dozens of examples none of which can actually be followed successfully without spending hours researching and deducing what it would have taken mere minutes to type out. It's a master class in the curse of expertise.

🎥 [Visual programming start over](https://youtu.be/pkL3cFjx8XA) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W1/devlog-together.html#2023-06-04T11:57:46.029Z)

![Youtube Thumbnail](https://img.youtube.com/vi/pkL3cFjx8XA/hqdefault.jpg)

Since the beginning of this year I've started working on a new visual programming system. The project which I was working on before had too much dependencies and limited me too much. [This is the first progress that I can share](https://youtu.be/pkL3cFjx8XA). It's just a little demo showing a very small flow where you can see moving data points over the wires and changing the speed, there's no timeline yet (yes, I was inspired by Hest.. although [Ivan Reese](http://ivanish.ca/) 's gifs still look way better offcourse 😊). I am building this without runtime dependencies (react or other framework is not used, pure vanilla javascript with my custom jsx transformer).


📝 [Bolting Little Languages Together](https://publish.obsidian.md/programmingsimplicity/2023-05-31-Bolting+Little+Languages+Together) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W1/thinking-together.html#2023-05-31T22:59:29.099Z)

I think we need many different little languages and a substrate “language” (kernel) to bolt them all together.



Note that, in electronics, there is/was something called “design rules” which is something more-than-type. In web-site design, one uses “input validation” which is like type-checking but on a very per-project basis. It would be nice to be able to bolt design-rule checkers together using a palette of existing components. Again, it seems that one should want a palette of components to help build up design rule checkers and completely different palette of components to build up actions. I would expect to use different “syntaxes” for each concern and would expect to use IDE layers to deal with each kind of issue separately then let the IDE automagically stitch them together. This is just another way of saying “I would like to use a different language (SCN in my words) to deal with each kind of issue”. Would I use text-based SCNs exclusively? No. But, for text-based SCNs, I would use Ohm-JS and for diagrammatic SCNs I would start by using [draw.io](http://draw.io). Both kinds of syntaxes are “easy” now, so there is no reason not to build project-specific SCNs. We have been indoctrinated to believe that “one language to rule them all” GPLs is the way to go. I don’t agree.

# Content

📝 [The Tao of Physics: An Exploration of the Parallels bet…](https://www.goodreads.com/en/book/show/10238) via **Walker Griggs**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W1/linking-together.html#2023-06-01T23:46:54.419Z)

Has anyone read the [Tao of Physics](https://www.goodreads.com/en/book/show/10238)? How did you find it? I'm picked it up last week before a long train ride -- really not sure what to make of it yet

🛸 [github.com/benrayfield/wikibinator203](https://github.com/benrayfield/wikibinator203) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W1/linking-together.html#2023-06-03T03:52:18.044Z)

Found some cool FoC-as-outsider-art — [github.com/benrayfield/wikibinator203](https://github.com/benrayfield/wikibinator203)



The README goes hard and doesn't quit. Pullquote:






> LICENSE SUMMARY: Its basically, do whatever you want but nobody owns the lambdas, and that in the evilbit=true namespace all possible bits are allowed, including evil bits (even if its virus, ransomware, etc), as its an antivirus quarantine, and in the evilbit=false namespace it works like the normal internet



And don't miss the [website](https://humanai.net/wikibinator/), but also CW there's lots of intense moving colors.

![image.png](http://history.futureofcoding.org/history/msg_files/F05/F05AR01V4R3.png)

![image.png](http://history.futureofcoding.org/history/msg_files/F05/F05ATQ0AKDZ.png)

![image.png](http://history.futureofcoding.org/history/msg_files/F05/F05B6H29RU1.png)


🫂 [Philosophy in a time of Software](https://groups.google.com/g/philosophy-in-a-time-of-software) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W1/linking-together.html#2023-06-03T23:59:54.743Z)

Also, digging through some internet backwaters for references, I found this old mailing list — [Philosophy in a time of Software](https://groups.google.com/g/philosophy-in-a-time-of-software)



Made me wonder if anyone who used to hang out there is now here.

🧬🎥 [Communal computing for 21st century science, Apr 2023](https://m.youtube.com/watch?v=-80VsIdAHZw&amp;feature=youtu.be) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/06/W1/linking-together.html#2023-06-04T16:17:04.155Z)

![Youtube Thumbnail](https://img.youtube.com/vi/-80VsIdAHZw/hqdefault.jpg)


