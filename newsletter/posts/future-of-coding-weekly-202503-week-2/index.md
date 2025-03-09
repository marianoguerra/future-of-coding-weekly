<!--
.. title: Future of Coding Weekly 2025/03 Week 2
.. slug: future-of-coding-weekly-202503-week-2
.. date: 2025-03-10 00:03:19 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎙️ A Half-Century of Silicon Valley 📑 Ink, Draw & Print Code 🎥 Demos!

# Two Minute Week

## 🎥 [Assembly Retrospective 🎮💻 AUTOMAT DEVLOG 8](https://youtu.be/tjFsMnga890) via **Marek Rogalski**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/two-minute-week.html#2025-03-03T19:21:19.794Z)

![Youtube Thumbnail](https://img.youtube.com/vi/tjFsMnga890/hqdefault.jpg)

An update from Automat! It's now possible to use "inline assembly" to do stuff. Not very polished yet and can't do much but is pretty fast at doing that.

## 🎥 [Type safe eval effect](https://vimeo.com/1062143358) via [Peter Saxton](https://twitter.com/CrowdHailer)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/two-minute-week.html#2025-03-03T19:59:39.455Z)

![Vimeo Thumbnail](https://i.vimeocdn.com/video/1989010979-0d6a1dbbff54ed561b2aafad478236f4a7f9e96426a911bf27f4548b8dbd5c40-d_295x166)

I've implemented an  `eval`  for EYG that type checks that the evaluated program is consistent with how the evaluated result will be used in the rest of the program. To my thinking it's similar to a Type provider but implemented the same as any other effect. This allows you do hot code reloading or deserializers without an separate codegen step 

# Our Work

## 🎥 [Literate Programming meets Animation (Loom Demo)](https://youtu.be/x7S8izz_sdo) via [xyzzy](http://blog.xyzzyapps.link)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/share-your-work.html#2025-03-05T21:34:15.193Z)

![Youtube Thumbnail](https://img.youtube.com/vi/x7S8izz_sdo/hqdefault.jpg)

Demo of an old prototype - Loom



Still needs work but I think Literate Programming can also do with some animation.

Literate Programming is better done as a preprocessor



[github.com/xyzzyapps/loom](https://github.com/xyzzyapps/loom)

## 📝 [Describing my programs using line drawings.](https://akkartik.name/post/2025-03-08-devlog) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/share-your-work.html#2025-03-09T08:14:05.908Z)

[Describing my programs using line drawings.](https://akkartik.name/post/2025-03-08-devlog) It's like html's image maps if they were anchored to scale-independent vector features rather than absolute pixel regions.

## 🧮 [Spreadsheet #1 – ezhik.jp](https://ezhik.jp/spreadsheet-1/) via **Ezhik**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/share-your-work.html#2025-03-09T17:23:09.480Z)

I finally got a new website going (I've got ✨RSS✨ now!) and figured out a relatively painless way to actually put little apps on it and stuff.



So I went and tried to see if I could make a little  ~spreadsheet~  functional visual programming environment without consulting any info on the topic and managed to make a working one.



I actually don't know what's the more interesting project to me to share, that I finally have a sandbox for little prototypes, or the little prototypes themselves.



# Devlog Together

## 📝 [On Programming Using Non-Gutenberg Syntax](https://open.substack.com/pub/programmingsimplicity/p/on-programming-using-non-gutenberg) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/devlog-together.html#2025-03-03T22:14:34.598Z)

[Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html) re [open.substack.com/pub/programmingsimplicity/p/on-programming-using-non-gutenberg](https://open.substack.com/pub/programmingsimplicity/p/on-programming-using-non-gutenberg), you might like this attempt of mine at introducing a graphical overview to a program:



[akkartik.name/2025-03-02-chessboard](https://akkartik.name/2025-03-02-chessboard)



The drawback: I'm not trying to turn the diagrams into executable code. They're just documentation, but at a level that's not onerous to keep updated, then falling back on raw/eldritch textual code for the heavy lifting.


## 💬 [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/devlog-together.html#2025-03-05T10:21:14.115Z)

Added the ability to store the last URL hash fragment in the exported notebook. This is useful as a lightweight, user editable persistence mechanism. Internally the state is saved as a fileattachment to survive export, so no changes to the file format were required. I needed this to provide a "default" viewof the notebook graph. hash URL is limited in size, but you can use the mutable fileattachments for big binary data. I just think the hash URL is somewhat web idiomatic for certain things and its also user editable so its nice to surface  (and then persist) for certain types of things.

🎥 [hash url](http://history.futureofcoding.org/history/msg_files/F08/F08GBC97TCL.mov)


## 📝 [my attempts at describing the internals of a program](https://futureofcoding.slack.com/archives/CCL5VVBAN/p1741508045908849) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/devlog-together.html#2025-03-09T17:59:55.014Z)

Follow-up to [💬 #share-your-work@2025-03-09](https://history.futureofcoding.org/?fromDate=2025-03-06&toDate=2025-03-12&channel=share-your-work&filter=#2025-03-09T08:14:05.908Z): a typographical scale of font sizes and some color for hyperlinks.



Changing experience (CX) is part of the using experience (UX) ✊

![big-picture.png](http://history.futureofcoding.org/history/msg_files/F08/F08GTSJK9QV.png)

![chessboard.png](http://history.futureofcoding.org/history/msg_files/F08/F08GPS19E3Y.png)


# Content

## 🎙️ [A Half-Century of Silicon Valley with Randy Shoup](https://oxide-and-friends.transistor.fm/episodes/a-half-century-of-silicon-valley-with-randy-shoup) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/linking-together.html#2025-03-03T14:31:47.248Z)

[A Half-Century of Silicon Valley with Randy Shoup](https://oxide-and-friends.transistor.fm/episodes/a-half-century-of-silicon-valley-with-randy-shoup)






> Randy Shoup joined Bryan, Adam, and the Oxide Friends to look at the history of Silicon Valley through the lens of Randy's 50 years--as the child of graphics legend, Dick Shoup; an intern at Intel; aspiring diplomat; engineering leader; and father to the next generation of Shoup engineers.

## 🖨️ [Web component to display PostScript graphics inside HTML ](https://github.com/bellenuit/tiny-ps) via [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/linking-together.html#2025-03-03T14:48:03.943Z)

Want a neat programming language embedded in a Web page? How about PostScript?

[github.com/bellenuit/tiny-ps](https://github.com/bellenuit/tiny-ps)



Maybe this is just nostalgia. In 1990, I wrote math code in PostScript because my printer had more computing power than my computer.

## 🖊️ [Ink](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/linking-together.html#2025-03-03T15:54:05.542Z)

I enjoyed reading the docs for this scripting language called [Ink](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md) from the folks at [Inkle](https://en.wikipedia.org/wiki/Inkle_(company)) (makers of 80 Days, Overboard, A Highland Song, and many more)


## ✏️ [Code Notes](https://sim.coffee/code-notes/) via **Nick Main**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/linking-together.html#2025-03-08T19:55:43.704Z)

[sim.coffee/code-notes](https://sim.coffee/code-notes/)
> 📝 [Code Notes](https://sim.coffee/code-notes/)
>
>We are excited to release Code Notes. A new feature in Codea that lets you draw on your code

Code Notes is the most natural way to get ideas out of your head and into your code. When I write code, I often switch to a drawing app to do my thinking, because having visuals helps me. Right now, f

# Present Company

## 💬 [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/03/W2/present-company.html#2025-03-06T01:45:11.217Z)

Anyone know how to math this correctly?



I'm looking to take a point (e.g. mouse pointer in screen space) and project it into a 3d transformed plane (which is represented as a 3d matrix)?

![image.png](http://history.futureofcoding.org/history/msg_files/F08/F08GE2AV6G3.png)




----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)

