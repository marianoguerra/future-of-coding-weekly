<!--
.. title: Future of Coding Weekly 2025/04 Week 1
.. slug: future-of-coding-weekly-202504-week-1
.. date: 2025-04-06 23:22:18 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

📑 Survey of compilation, recompilation & compile-time evaluation 🪟 Interactive Layout Design with Integer Programming

# Our Work

## 🎨 [Helper to select an accessible color relative to a base (background) color](https://paste.sr.ht/~akkartik/68cb0412002d7e5e9c035eac117839ff693b523a) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W1/share-your-work.html#2025-04-05T06:28:02.122Z)

I spent some time rethinking how color is represented in my browser. I want to prioritize accessibility over expression, so I switched to ~500 colors over a perceptually uniform color space. The idea is that you specify background colors completely, but if you leave wiggle room in the foreground colors the browser will search the wiggle room and try to maintain some minimum contrast level. Here's a test run where I randomize the background on every "page load", but the foreground colors are specified the same way: text is on a greyscale, and links are blue.



I used to think the CSS hotness of the Oklab space is rocket science. I still don't understand the _why_ of it, but [it turns out to only take 200 lines of code to implement](https://paste.sr.ht/~akkartik/68cb0412002d7e5e9c035eac117839ff693b523a).

🎥 [luaML2-contrast](http://history.futureofcoding.org/history/msg_files/F08/F08LGGUPLG7.webm)

# Devlog Together

## 💬 [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W1/devlog-together.html#2025-04-05T14:27:18.531Z)

I padded my work trip to Portugal with some extra days off so I could concentrate for 2 days and do a V2 of the editor component. A great success! I switched to floaty window style near the cell, attached it to the correct DOM so it follows the scrolling properly. Got add/remove cells properly working again since the multi-module refactor broke them. Managed to remove several reactivity bugs. Removed some hacks that were working around said bugs. Fixed some low level bugs in the visualizer, causing a few other unexpected bugs to fix themselves coz of that problem.

🎥 [add delete cells](http://history.futureofcoding.org/history/msg_files/F08/F08LH4P8H3R.mp4)


# Thinking Together

## 💬 [Felix Kohlgrüber](https://twitter.com/FKohlgrueber)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W1/thinking-together.html#2025-04-02T12:59:52.333Z)

Hi!



it's been a long time since I posted in this group (almost 5 years, wow!). Life changed on my side (working full-time jobs, having kids, ...) but I still tried to follow what's going on occasionally. Thanks a lot to [Mariano Guerra](https://twitter.com/warianoguerra) for the newsletter, it's the perfect digest for me to read whenever I have some spare time.



I've recently started using [Obsidian](https://obsidian.md/) and it's working great for me to collect and organize all kinds of thoughts. I've used quite a few tools for this over the years, but Obsidian is my new favorite. I'm sure it's been discussed here already, but here's what I love about it:




* based on markdown files instead of some proprietary formats
* great apps for desktop and mobile
* effortless e2e-encrypted sync between devices
* linking between files / pages and following those links is easy. I'm using a variation of a [Zettelkasten](https://zettelkasten.de/introduction/) ([this link](https://obsidian.rocks/getting-started-with-zettelkasten-in-obsidian/#My-Process-for-Zettelkasten-in-Obsidian) can be useful as a starting point; I can write about my approach if there's interest in it)



I'm currently trying to collect my FoC ideas, projects and thoughts into my Obsidian and therefore wanted to see my contributions to this community. I used the [Archive](http://akkartik.name/archives/foc/) tool by [Kartik Agaram](http://akkartik.name/about) and it's been working great. A simple long webpage and Ctrl-F worked beautifully, probably better than what Slack Pro could have given me. Thanks a lot for creating the archive, Kartik!



Going back in time was very interesting. One thing I noticed though was that quite a few links that we discussed at the time sadly don't work anymore. With the help of the [wayback machine](https://web.archive.org/), I was able to still access all the info though. This made me once again appreciate the wayback machine and its importance for the internet. Feels like a donation to the project is overdue.



That's all I wanted to share. Have a great day folks :)

## 💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W1/thinking-together.html#2025-04-02T14:53:46.039Z)

I've been thinking about color, and I don't know anything about it.



I'd really like my hypertext browser to allow people to adjust color, but without ever compromising contrast. Is there some color space/model like rgb/hsl/CIELAB/Lch that allows you to adjust an  _author foreground_  color relative to an  _author background_  color, yielding new reader foreground and background colors that maintain the original level of contrast? Ideally I want a single spectrum/dimension/knob that I can adjust to change the hues of one element (say the background color), automatically adjusting the colors of other elements around it.



For example, say the background color is white. I reflect it to get a text color of black. Then I get 3 other foreground colors that are rotated by 120 degrees along the color wheel. Now I could adjust the hue to rotate around the color wheel. Or I could reflect to get dark mode. But is there a way that supports both without going all the way to a 2D color space? For example, if you set the background color to medium grey now no foreground color can give you the desired level of contrast. So I'd like to not even represent such a background color as an option.



## 💬 **Karl Toby Rosenberg**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W1/thinking-together.html#2025-04-02T23:20:13.171Z)

I’ve been thinking about how languages taught at the intro level are usually taught with lots of white lies about how they work, out of necessity. For example, Python’s actual underlying memory model (how everything’s a reference and isn’t copied around) is confusing (arguably), so we avoid teaching that part and oftentimes make all these distinctions between references and primitives (even though everything’s an object). Teaching something more accurate (everything’s an object with references, and oh sometimes values are even referenced via referenced counting) would actually lead to confusion when trying to translate some of this in other languages like C, where everything’s actually a value (pointers are just ints purposed for addressing things).



Java is also confusing with all the GC stuff and opinions it has about memory and memory behavior.



I would like a first-learner’s language that has the arguably-more-consistent semantics of something like C (“everything’s a value”), but is closer to Python. So I can feel like I’m not “lying” so much. I think the closest thing is C itself, unfortunately, or C++ with a custom allocator thing.



Or maybe a hot-take: objective C / ARC are the closest.



But really I’d just like a Python with less obfuscation and inconsistency, so it looks more like C with safety on-top and better file imports.



Essentially, Python with proper value types for everything, even if a little more challenging. The most explainable language closest to hardware, but easier to use.



Just thinking out-loud. I think a Python 3 subset preprocessor that outputs raw C would look close to the language I have in-mind. (I’d like  `end`  for blocks too).



## 📑 [A rough survey of compilation, recompilation, and compile-time evaluation](https://www.scattered-thoughts.net/writing/a-rough-survey-of-compilation-recompilation-and-compile-time-evaluation) via [Jamie Brandon](https://scattered-thoughts.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W1/thinking-together.html#2025-04-04T21:36:40.663Z)



I'm curious if anyone knows of languages that have different approaches to the ones I covered here.



# Content

## 🪟 [GRIDS: Interactive Layout Design with Integer Programming](https://userinterfaces.aalto.fi/grids/) via [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W1/linking-together.html#2025-03-31T06:20:33.743Z)

Integer programming based layout engine for graphs

Since [Maikel van de Lisdonk](https://www.devhelpr.com/)/ OCWG : Open Canvas Interchange Format I been thinking it might be possible to write a generic graph layout engine. I also been thinking that historically graph layout engines concentrate on the spatial constraints (including grids), but now we have LLM/embedding vectors it might be fruitful to integrate semantic similarity into the objective function so nodes representing similar things are near to each other as well.

# Present Company

## 📢 [Future of Coding meetup · Luma](https://lu.ma/6531cavq) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/04/W1/present-company.html#2025-04-02T16:38:23.061Z)

Our next meetup will be april the 30th at 18:00 UTC .. so, we're looking for 2 volunteers to do a demo/presentation (we already got 1 volunteer)! So who wants to share anything about their project?


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)

