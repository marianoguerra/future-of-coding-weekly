<!--
.. title: Future of Coding Weekly 2024/08 Week 4
.. slug: future-of-coding-weekly-202408-week-4
.. date: 2024-08-25 23:01:56 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🧮 Scrapsheets demo 🎥 Why Star Trek's Graphic Design Makes Sense 🔌 Visual Neural Networks

# Two Minute Week

🔌🎥 [Neural network training using mnist dataset in code-flow-canvas](https://youtu.be/xOKzC77NgRU) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W4/two-minute-week.html#2024-08-20T12:36:32.101Z)

![Youtube Thumbnail](https://img.youtube.com/vi/xOKzC77NgRU/hqdefault.jpg)

After lots of reading (books and other people's code), watching video's, thinking, asking chatgpt for help (it needed help itself), experimenting and frustration, I finally managed to get a neural network working including the training using backward propagation, in my visual programming system!! You can see a [small video where I demo it here](https://youtu.be/xOKzC77NgRU)



The results are far from perfect and neither is the visual flow itself. Currently I only used a subset of mnist to train (9000 images) and on every training iteration the weights are updated per training image. Also the network can for sure be improvement by using a different layer setup and configuration parameters (different learning rate and activation / cost functions). From a visual programming perspective there are also lots of things to improve: currently a lot of the needed functionality is inside the nodes instead of being visible in the flow. So the neural and training nodes are black boxes as well as the node that loads the mnist dataset and handles some of the logic in the training proces. I want to change this in the near future though. You currently can't even see the resulting weights and biases.



Hopefully it is clear from the neural node types how the neural network is structured: it shows the number of nodes in the layer and an icon illustrating whether a node represents an input, hidden or output layer.



In the video I show a slow and fast run of the training proces: by putting the speed slider to the right you can run the flow without animations otherwise it takes too long.



There's also a custom node type that can be used to draw a digit manually and provide the digit which the drawing represents for purpose of calculating the error cost/loss.



Anyway, for now I am happy with the result. More to follow in the future :-)


💬 **Marek Rogalski**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W4/two-minute-week.html#2024-08-21T14:18:34.103Z)

They may be totally invisible in the video but objects in Automat now drop shadows! They're drawn using fairly sophisticated procedures that were developed a copule of years ago for Google's Material Design system. Each object actually drops two different shadows - one coming from environmental light (a.k.a. ambient occlusion) and one from directional light (which is modelled as a disk with the same width as window and is positioned in 3d space roughly in front of the title bar). The cool thing about those shadows is that they're not using either shadow maps nor gaussian blurs (except concave shapes). The library takes some shape (vector contour of the object dropping shadow) + parameters of the light and computes a physically based analytical shadow mesh that is then drawn in the background. This manages to render fairly realistic shadows even while elevation of objects is being dynamically changed.

🎥 [Demo](http://history.futureofcoding.org/history/msg_files/F07/F07HPHT904E.mp4)

# Our Work

📝 [Call Return Spaghetti](https://guitarvydas.github.io/2020/12/09/CALL-RETURN-Spaghetti.html) by [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W4/share-your-work.html#2024-08-19T01:15:04.795Z)

In the essay referenced below, I examine why a diagram of a Call/Return system makes less sense than a diagram of a concurrent system.



Call/Return operates in a LIFO - last-in first-out, stack-like - manner.



Adopting an alternate perspective - FIFO, first-in first-out, queue-like manner - allows us to represent diagrams more easily.



CPU chips implement CALL and RETURN instructions as single opcodes, but, they do not implement queue behaviour as single opcodes.



Most popular languages are generally function-based, e.g. C, Haskell, Python, Javascript, Smalltalk, etc. Such function-based languages tend to adopt a LIFO (callstack) perspective and tend to use CALL and RETURN opcodes to fake out the function-based paradigm.



Such languages allow programmers to implement FIFO queues, but, such languages encourage the use of LIFO stacks. This seemingly small difference subtly affects designs with function-based - stack-based - thinking. This difference ultimately encourages single-threaded design while making multi-threaded design more difficult to imagine and to implement, as witnessed by the fact that most languages relegate multi-threading to hefty code libraries, while treating functions as basic building blocks.



This subtle encouragement towards function-based thinking has led to the general impression that Visual Programming Languages (VPLs), node-and-wire Diagrammatic Programming Languages (DPLs), Actors, etc., are ineffective programming tools.



I argue that VPLs, DPLs, Actors, etc. are effective programming tools, but that their use is are ultimately discouraged by the over-use of the function-based paradigm.



Further

💻 [Tensort](https://github.com/kaBeech/tensort?tab=readme-ov-file#tensort-) via **Kyle Beechly**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W4/share-your-work.html#2024-08-23T20:27:01.212Z)

I just published [Tensort](https://github.com/kaBeech/tensort?tab=readme-ov-file#tensort-), a family of sorting algorithms (slash research paper?) inspired by Ivan's remark near the end of [Beyond Efficiency by Dave Ackley](https://futureofcoding.org/episodes/070) about Robustsort not existing yet. I'd love to hear what y'all think! 💙

📼 [Bootstrapping OOP Part 3: Who Parses the Parser?](https://marianoguerra.org/posts/bootstrapping-oop-part-3-who-parses-the-parser/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W4/share-your-work.html#2024-08-24T09:54:44.880Z)

How do we feed the prelude if there's no parser (yet)?



💡 If code is data then a data serialization format is a binary representation of a program

# Devlog Together

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W4/devlog-together.html#2024-08-23T06:32:59.027Z)

Getting ready for Slack apocalypse.

![motd.png](http://history.futureofcoding.org/history/msg_files/F07/F07JKHB6RAM.png)


🔌🎥 [Improved neural network layer node visualization in code flow canvas.](https://youtu.be/dvZrWEz1W4k) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W4/devlog-together.html#2024-08-25T11:22:57.594Z)

![Youtube Thumbnail](https://img.youtube.com/vi/dvZrWEz1W4k/hqdefault.jpg)

I've made some visualization improvements for the neural network layer nodes in my visual programming system "code flow canvas". Nodes can now have meta information to show internal data which is stored on the node level that is not shown on the node itself. For the neural network nodes this are the weights and biases.



Also the structure of the neural network itself can be viewed in a scalable way instead of just the nodes on the canvas itself. And with scalable I mean not showing all the nodes, but only a max of 10 per layer and add smaller dots in between to illustrate that there are more nodes then just the max 10 that are shown per layer. The number of dots are different depending on the total node count to make it clear that layers differ in total node count.



[You can see it here](https://youtu.be/dvZrWEz1W4k) or try it yourself at [demo.codeflowcanvas.io](http://demo.codeflowcanvas.io) and select the neural network mnist training & testing example.

# Thinking Together

💬 **Yuriy Zymlex**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W4/thinking-together.html#2024-08-25T13:35:04.941Z)

I have a few questions/topics about which I would like to get your opinion. Since I'm interested in the underlying logic of this things, this may look banal.



If the essence of every programming language is the  _construction of logic_ , have there ever been any attempts to bring that process __ into minimal separate entity for purpose of wider use than just programming?



By purposes, I mean the creation of:




* Text instructions - as you can see them in Jira, Org-Mode, Markdown (or detailed program's log)
* Graphical - MindMap or here it is good to remember "data flow diagrams" from informatics, but it can be expanded to any other kind
* Actually programming itself, but as building any "pseudo" code (including graphical) for convenient use with a theoretical possibility of converting "pseudo" code back to logic
* ... (other variants)

# Content

🧮🎥 [scrapsheets splash demo](https://www.youtube.com/watch?v=1ihGUs8eJ9k) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W4/linking-together.html#2024-08-19T06:09:46.117Z)

![Youtube Thumbnail](https://img.youtube.com/vi/1ihGUs8eJ9k/hqdefault.jpg)

[Demo of a spreadsheet-like tool.](https://www.youtube.com/watch?v=1ihGUs8eJ9k) To be presented at SPLASH? By **@Taylor Troesh**.

🎥 [Why Star Trek's Graphic Design Makes Sense](https://youtu.be/D24tYFIVyv0?si=YAFonX8yrFR33Ajv) via [Stefan Lesser](https://twitter.com/stefanlesser)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W4/linking-together.html#2024-08-20T14:21:25.904Z)

![Youtube Thumbnail](https://img.youtube.com/vi/D24tYFIVyv0/hqdefault.jpg)

YouTube served [this older video](https://youtu.be/D24tYFIVyv0?si=YAFonX8yrFR33Ajv) to me, but I couldn’t help noticing a few things in relation to (the future of) coding:




* All the models and (fake screens) etc. are now considered art, but they weren’t created as art. They were functional props on a movie/TV show set put together under tight timelines. How often do we put together functional code under tight deadlines? And how often is what we do regarded as art later? Almost never, I reckon.
* His expertise: When he talks about smoked acrylic and how almost everybody doesn’t listen to him because “You’re losing light", even though he clearly knows exactly what he’s talking about, that reminds me of about a million conversations about how some clearly less experienced engineer tells an experienced veteran why their code isn’t good.
* Oh, the pragmatism! The ship models? Hacked together from repurposing strange parts they had lying around. The details? Just enough to make it look great. The blinking buttons interface? Just a few lightbulbs behind the buttons that were supposed to blink. If that doesn’t remind you of software development, you’re not doing it right. Or you are, and that’s part of the problem. 😉
* I know, there’s some physicality to all the examples in the video, but the LCARS interface points to the possibility of designing something in software only that can transcend its functional framing and become more than just a prop. We have a few examples of that in software (“You had me at scrolling”), but not nearly as much as we should have, I think.



Where are the videos like this that celebrate achievements in software design?

📝 [The Competing Predictions of Edsger Dijkstra and Douglas Engelbart](https://lithub.com/the-20th-century-computer-science-debate-that-foretold-our-21st-century-technological-fears) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/08/W4/linking-together.html#2024-08-25T08:38:03.104Z)


> He who would do good to another must do it in minute particulars
> General Good is the plea of the scoundrel, hypocrite and flatterer
> For Art and Science cannot exist but in minutely organised particulars
> -- William Blake


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
