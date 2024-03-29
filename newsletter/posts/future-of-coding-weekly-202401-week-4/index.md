<!--
.. title: Future of Coding Weekly 2024/01 Week 4
.. slug: future-of-coding-weekly-202401-week-4
.. date: 2024-01-21 23:07:29 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🤖 Intersection of programming & AI ⌨️ Keys, Boxes & Arrows 📚 Probabilistic Models of Cognition

# Our Work

🎼 [Polygon](https://polygon.iimaginary.com/) via **Clam R**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W4/share-your-work.html#2024-01-15T22:16:24.547Z)

[Polygon](https://polygon.iimaginary.com/): A spatial approach to sequencing musical rhythms



Inspired by Bret Victor's lectures and some of the cool stuff i've seen on here, I made a drum sequencer where the relative positions of nodes determines the spaces between notes in a pattern.

>Generate drum patterns through spatial computing.

🤖🎥 [Gloodata: Your Personal Productivity Assistant](https://www.youtube.com/watch?v=nS1wsif3y94) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W4/share-your-work.html#2024-01-17T16:35:01.391Z)

![Youtube Thumbnail](https://img.youtube.com/vi/nS1wsif3y94/hqdefault.jpg)

I recorded a short demo showing the latest plugins and improvements I've been working on in gloodata.



[Gloodata: Your Personal Productivity Assistant](https://www.youtube.com/watch?v=nS1wsif3y94)



The demo shows timezone information, weather forecast, maps, routes, content extraction and summarisation plugins.

📝 [public.me](http://public.me/) via **Anton Podviaznikov**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W4/share-your-work.html#2024-01-20T12:27:56.856Z)

made a simple tool to publish Apple Reminders online [public.me](http://public.me/).



Sounds not impressive, but Apple Reminders gave me an interesting data structure: list of items with predefined format(name, description, date, url, isCompleted, images etc).



So I was able to build habits tracker directly in reminders and have nice visualizations of streaks like this [public.me/anton/daily](https://public.me/anton/daily)

🤖🐦 [Tweet from @io_sammt](https://twitter.com/io_sammt/status/1748683055605195087?s=46&t=kvyalr_gJlbdW-jQJstTcg) via **Samuel Timbó**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W4/share-your-work.html#2024-01-20T13:57:51.928Z)

I see lots of folks here are interested in the intersection of programming and AI (to say little); I finally posted an example combining Unit and LLMs on X. It is a reactive graph for text reasoning and image generation. I start from a statement, then apply commands to transform it, ultimately rendering generated images. [Take a look ](https://twitter.com/io_sammt/status/1748683055605195087?s=46&t=kvyalr_gJlbdW-jQJstTcg). Full preview:

![Screenshot 2024-01-20 at 10.56.26.png](http://history.futureofcoding.org/history/msg_files/F06/F06ER1MVBGD.png)

# Devlog Together

🎠 [A little game integrated with its tools](https://akkartik.itch.io/carousel/devlog/668072/a-little-game-integrated-with-its-tools) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W4/devlog-together.html#2024-01-19T17:15:06.713Z)

Integrating a little game with a sprite editor and a maze editor, all on a touch-screen.




🎥 [sprite game](http://history.futureofcoding.org/history/msg_files/F06/F06EJAAQ66S.webm)


💬 [Jimmy Miller](https://jimmyhmiller.github.io/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W4/devlog-together.html#2024-01-19T18:44:27.572Z)

When working on my language I've been frustrated by the lack of symbols and extra information for my JIT compiled code. There is a way to get this kind of information, but it involves building an elf binary in memory. Way too much overhead for this point in my development.



So I started building my own debugger frontend to lldb. Not much to show right now. But the idea is to specifically tailor it to my language. So you'll get a compiler explorer like experience, but also be able to view the stack and heap and all of that live. See the language level values stored in there.



The fun part to for me was how to convey the information I need to the debugger. The answer came from the standard JIT interface. How do you tell your debugger things? You make a function that the debugger has a breakpoint in. The function does nothing in the body. You just pass some args that tells the debugger where in memory to get the information it needs. Super clever. So now I'm working on passing all my compiler metadata to the debugger frontend so it can know how to render things intelligently.

⌨️🎥 [Using just the keyboard for visual programming](https://youtu.be/ApOfXliyGqc) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W4/devlog-together.html#2024-01-21T17:08:18.144Z)

![Youtube Thumbnail](https://img.youtube.com/vi/ApOfXliyGqc/hqdefault.jpg)

This week I spend a lot of time adding basic keyboaed support in the visual programming system that I am developing. For productivity I think that just using a mouse for creating a visual flow is not enough. One of the reasons why we are so productive when using a text editor for programming is the usage of the keyboard I think. Off course it's not the only reason but I do think it's of major influence. 

So being able to use the keyboard for visual programming seems like a very good idea. In [this video](https://youtu.be/ApOfXliyGqc) I show exactly that.



Currently after every update to the flow, the tabindex is set on all the nodes and input elements. In normal webapps this is not a good idea, but here it is the only way to give the browser the proper and logical tab order. When tabbing through the flow, the camera is focused on the selected node overriding default browser scroll-behavior when a focused element is out of the current view. Using ctrl+a you can add a new node and also select the thumbs for the connection.  



Furthermore I've added some other features like being able to run a flow using the keyboard (ctrl + Enter) and opening the properties popup. A missing feature is being able to add a new node before the currently selected node.

 

Lots of small tweaks were needed to make this work, but I am glad I spend the time because this also increases the accessibility.


💬 [Oleksandr Kryvonos](https://twitter.com/o_kryvonos)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W4/devlog-together.html#2024-01-21T18:46:36.980Z)

I created a simple Linked-Data / RDF console app (I call it MondAI),

it allows creation of triples Entity->Connection->Another-Entity

and allows query data

🎥 [Demo](http://history.futureofcoding.org/history/msg_files/F06/F06EVNW2U6P.mov)

# Reading Together

💬 [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W4/reading-together.html#2024-01-20T16:06:59.383Z)

[Ivan Reese](http://ivanish.ca/), in episode 9 of a podcast I can’t tell if I’m supposed to know about or not, you asked, “Where is [data] going when you’re throwing it away, and when you rewind, how does it come back?” And I don’t think it has answers that you’d want to apply directly to your situation, but  ~_*Feynman’s Lectures on Computing*_~  comes back to the idea of reversible computing again and again with various playful metaphorical lenses. I think that at the very least it might be a nice way to take a break and think about the problem from a physicist’s perspective now and then, if this is still a problem you’re working on.


# Content

🐇 [rabbit.tech/keynote](https://www.rabbit.tech/keynote) via **Pietu**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W4/linking-together.html#2024-01-16T15:22:35.112Z)

[rabbit.tech/keynote](https://www.rabbit.tech/keynote) (demo starts at 7:33) shows an un-released portable personal-assistant device. There's a lot going on in the keynote, both in UI-wise, and how they demo and describe this "new kind" of device.


📄 [Modern Plain Text Computing](https://mptc.io) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W4/linking-together.html#2024-01-21T04:05:28.006Z)

This [Modern Plain Text Computing](https://mptc.io) course at Duke has a refreshingly frank description written by Kieran Healy. I can't tell if I should feel positively, negatively _,_ or  _overwhelmingly negatively_  — double adverb _!!_  — about the existence of this course, though.

📚 [Probabilistic Models of Cognition](https://micro.alltom.com/2024/01/11/the-cognition-in.html) via [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W4/present-company.html#2024-01-20T16:32:29.209Z)

I’ve been really into probabilistic programming languages (PPLs) lately. I had a few “aha” moments and I’m decidedly in the “hit everything with this hammer to figure out where the nails are” phase.



Anyway, is anybody here in a similar headspace? Or already experienced with PPLs?



Is anybody curious to enter this headspace with me? I reviewed the (online, free, programmable) book that brought me here: [micro.alltom.com/2024/01/11/the-cognition-in.html](https://micro.alltom.com/2024/01/11/the-cognition-in.html)

>The “Cognition” in Probabilistic Models of Cognition 📚 is the hardest part to get across when I recommend this book. Because the book isn’t “Bayes works, yawn.” It’s so much more interesting if you, like me, exist primarily in ML circles that focus on curve-fitting:
 What could be going on in our heads when we can’t tell that the two grid squares in that optical illusion are the same color?


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://tinyletter.com/marianoguerra/) / [Archive](https://newsletter.futureofcoding.org/) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
