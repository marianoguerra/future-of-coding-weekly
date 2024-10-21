<!--
.. title: Future of Coding Weekly 2024/10 Week 3
.. slug: future-of-coding-weekly-202410-week-3
.. date: 2024-10-21 09:49:07 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🥳 Happy Spreadsheet Day! 💡 Consider holding a workshop @ Programming 2025 📊 Towards Reusable & Reactive Widgets

# Our Work

## 📝 [Testing](https://open.substack.com/pub/programmingsimplicity/p/testing?r=1egdky&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/share-your-work.html#2024-10-16T00:51:22.417Z)

This is in response to [💬 #share-your-work@2024-09-20](https://history.futureofcoding.org/?fromDate=2024-09-17&toDate=2024-09-23&channel=share-your-work&filter=#2024-09-20T16:50:58.609Z). I share it here in case it is of interest to anyone else [Testing](https://open.substack.com/pub/programmingsimplicity/p/testing?r=1egdky&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true)
> [September 20th, 2024 9:50 AM] khur.saba: Hi everyone! :wave: I'm doing some user research on building reliable products at scale. If you work in development, testing, or product and have experiences with QA (or :bug: where there shouldn't be), I'd love to hear your story!
> 
> Even a short 15-min call would be super helpful. Let me know if you're open to a convo and we'll set up a time. Thanks so much in advance :blush:

> 📝 [Testing](https://open.substack.com/pub/programmingsimplicity/p/testing?r=1egdky&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true)
>
>Experiences With Testing Software


## 🎥 [PLAN Virtual Machine demo](https://youtu.be/T92x3QPZEkc) via [Jared Forsyth](https://jaredforsyth.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/share-your-work.html#2024-10-17T04:21:47.009Z)

![Youtube Thumbnail](https://img.youtube.com/vi/T92x3QPZEkc/hqdefault.jpg)

I'm generally quite bad at sharing my work, but tonight I buckled down and recorded a little demo of the virtual machine I'm working on [PLAN Virtual Machine demo](https://youtu.be/T92x3QPZEkc) please forgive the "um"s

## 📝 [Designing the Future of Coding at JetBrains](https://www.linkedin.com/pulse/designing-future-coding-jetbrains-pavel-mikhailovskii-4b2ke) via **Pavel Mikhailovskii**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/share-your-work.html#2024-10-18T10:15:17.366Z)

My new LinkedIn article about Project Ludwig

>Our research team at JetBrains aims to design the blueprint for the future of AI-driven software development. We believe that it will enable us to create an entirely new class of developer tools.



## 📝 [On relative references and formula replication](https://bean.nilenso.com/blog/posts/relative-references/) via **Prabhanshu Gupta**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/share-your-work.html#2024-10-20T08:28:29.407Z)

I wrote a bit about the evolution of cell references in the spreadsheet formula language

> 📝 [On relative references and formula replication](https://bean.nilenso.com/blog/posts/relative-references/)
>
>A lot of spreadsheet usage is centered around copying and pasting formulas. Specifically, replicating formulas across a range of data. Here&amp;rsquo;s an example: I have a …


# Devlog Together

## 💬 [Jimmy Miller](https://jimmyhmiller.github.io/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/devlog-together.html#2024-10-14T16:11:32.671Z)

I've not posted her in a bit partially because it feels like the work I'm doing is a bit "present-company". I put my editor on pause because I hate all languages I could write it in. I want a good dynamic language where I can develop the editor in itself without ever restarting it. I want something multi-threaded. I want something with a lightweight runtime. But ultimately, I really just want to boil the ocean and this feels like a fun way.



So I've been making my own language. It is a dynamically typed functional language that compiles straight to machine code (no vm at all). Today, I finally got my persistent vectors properly working (After finally figuring out that my bug was in the gc (still not fixed) not my implementation.) I decided as an experiment to implement clojures HAMT based persistent vectors into the language itself (not at the compiler/runtime level). In fact, even my mutable arrays are implemented in the language with a primitive allocation function and some fetching "fields" primitives.



Sadly my implementation is about 6x slower than clojures on my artificial benchmark. But honestly that's pretty darn good! I have done 0 optimizations, Clojure's data structures are all implemented in java. That means I'm about 6x slower than java on this benchmark. Not bad. Trying to figure out next if I want to do some performance work, or continue building out features.



## 💬 [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/devlog-together.html#2024-10-17T04:45:14.171Z)

Been woking on my malleable Observable project. I can now select and edit cells from userspace. A fair amount of work went into decompiling a runtime variable back to its (near) original source code representation.

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07SXK46A48.png)



## 📝 [Potluck](https://www.inkandswitch.com/potluck/) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/devlog-together.html#2024-10-18T17:18:53.675Z)

I've been thinking about [Potluck](https://www.inkandswitch.com/potluck/) and [💬 #linking-together@2024-10-16](https://history.futureofcoding.org/?fromDate=2024-10-13&toDate=2024-10-19&channel=linking-together&filter=#2024-10-16T16:54:11.337Z). Potluck describes 3 mechanisms:




* extracting data using (regex) patterns
* performing computations on that data
* showing results of computation as annotations



[My notebook app](https://futureofcoding.slack.com/archives/C03RR0W5DGC/p1728576125990129) does simple variants of 2 and 3, and replaces 1 with explicit in-document markup.



Now I'm playing with another approach to 1. I already have the idea of pivots from [💬 #devlog-together@2024-10-08](https://history.futureofcoding.org/?fromDate=2024-10-05&toDate=2024-10-11&channel=devlog-together&filter=#2024-10-08T00:33:39.903Z). Putting two of those pivots together should yield a range that adjusts in intuitive ways in the presence of edits. Think of a range as something like a hyperlink you add to a comment in a UI like this Slack app we're in right now:




* Inserting/deleting text before a range moves it.
* Inserting/deleting text after a range leaves it unchanged.
* Inserting/deleting text within a range grows/shrinks it.
* Deleting text at a boundary shrinks the range, and only deletes the attached attributes if the range becomes empty. This makes ranges more robust to deletion than my doodles attached to a single pivot.
* Inserting text at boundaries can't always do what you want. I imagine it'd be nice to have handles that you can drag to adjust a range.



## 💬 [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/devlog-together.html#2024-10-20T19:57:06.172Z)

Full round trip decompilation <--> compilation between Observable runtime and my in-notebook editor is working. I've put a CodeMirror UI on it and smooshed it into a single cell for easy import. works on mobile. A few areas are broken: imports, anonymous cell editing and adding variables. Note I am sticking to Observablehq flavoured JS, but it could support any language if you have a compile to JS for it.

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F07SM41199T.png)


# Reading Together

## 📝 [Design Things and Design Thinking: Contemporary Participatory Design Challenges](http://www.gobigcreativelab.com/wp-content/uploads/2019/01/Contemporary-Design-Thinking-Challenges.pdf) via **Jasmine Otto**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/reading-together.html#2024-10-15T21:36:43.771Z)

getting some lovely blue-sky Realtalk energy from this piece on 'infrastructuring'

 *Design Things and Design Thinking: Contemporary Participatory Design Challenges* 

Erling Bjögvinsson, Pelle Ehn, Per-Anders Hillgren 2012

[gobigcreativelab.com/wp-content/uploads/2019/01/Contemporary-Design-Thinking-Challenges.pdf](http://www.gobigcreativelab.com/wp-content/uploads/2019/01/Contemporary-Design-Thinking-Challenges.pdf)




> An infrastructure (e.g., railroad tracks, cables, or the Internet) reaches beyond the single event (temporal) and the site event (spatial); it does not need to be reinvented every time; and it is embedded into other socio-material structures. However, the infrastructure also is accessible only by participation in specific practices. [...] it is relational and becomes infrastructure in the relationships between design Things at project time and (multiple, potentially controversial) design Things in use.



# Thinking Together

## 📝 [Towards a Better REGEX](https://programmingsimplicity.substack.com/p/towards-a-better-regex?r=1egdky) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/thinking-together.html#2024-10-15T14:32:07.805Z)

# Content

## 📝 [An engine for an editor](https://matklad.github.io/2023/03/08/an-engine-for-an-editor.html) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/linking-together.html#2024-10-16T16:54:11.337Z)

Text as a foundation for GUIs






> The foundation is a text with attributes — a pair of a string and a map from string’s subranges to key-value dictionaries. Attributes express presentation (color, font, text decoration), but also semantics. A range of text can be designated as clickable. Or it can specify a custom keymap, which is only active when the cursor is on this range.

-- [An engine for an editor](https://matklad.github.io/2023/03/08/an-engine-for-an-editor.html)






> Unlike full HTML, the text is not nested, and logically is a 2 dimensional grid of characters. This makes 
>  _text_ 
>  navigation universally applicable.



Unlike terminals there are multiple text buffers. You can have several apps running at the same time and displaying a text buffer each, or you could have a single app that owns multiple buffers.



Buffers are arranged in splits and tabs. Applications have limited control over the spatial arrangement of the buffers. It is the user who chooses which buffers are displayed in the foreground.

-- [A new API](https://github.com/matklad/abont)

## 📝 [‹Programming› 2025 - Workshops - ‹Programming› 2025](https://2025.programming-conference.org/track/prog25-workshops) via [Jonathan Edwards](https://twitter.com/jonathoda/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/linking-together.html#2024-10-16T19:58:37.114Z)

Please consider holding a workshop at <Programming> 2025. Those of us doing independent research on software sometimes feel like we are rejected by academic computer science because our work doesn’t have the proper shape. In turn we tend to dismiss academia as a dysfunctional status game. Workshops are a way to bridge this divide between independents and academics. Since workshops offer little credit towards academic career advancement they are less subject to gatekeeping. The <Programming> conference is particularly open-minded about the form and content of its associated workshops, with a pronounced fondness for the softer and more human aspects of programming. <Programming> attracts researchers from diverse fields with open minds. Please consider this opportunity to enrich your community by engaging with both independents and academics at a <Programming> workshop.



The conference will be in Prague, with the workshops held June 2-3, 2025. Further details are in the [Call for Proposals](https://2025.programming-conference.org/track/prog25-workshops). I’m happy to answer any questions.

## 🎥 [Sketchpad](https://m.youtube.com/watch?v=fC4nW2o-Rwk) via [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/linking-together.html#2024-10-17T00:32:44.009Z)

![Youtube Thumbnail](https://img.youtube.com/vi/fC4nW2o-Rwk/hqdefault.jpg)


## 📊 [Towards Reusable and Reactive Widgets for Information Visualization Research and Dissemination](https://johnguerra.co/reactiveWidgets/) via **Jasmine Otto**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/linking-together.html#2024-10-17T17:05:03.285Z)

👀



> A Reactive Visualization widget displays data and allows users to directly interact with it (e.g., select a bar in a bar chart 📊). It then emits events based on these interactions (e.g., signaling which bars are selected).

The paper presents several usage examples of the pattern, templates for implementation, and even a wrapper for facilitating the conversion of any

> [Vega](https://vega.github.io/)
>  specification into a reactive widget.

## 🥳🐦 [Brian Hempel (@brianhempel) on X](https://x.com/brianhempel/status/1846963395536605437) via [Brian Hempel](http://people.cs.uchicago.edu/~brianhempel/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/10/W3/linking-together.html#2024-10-17T17:23:27.030Z)

Today is [Spreadsheet Day](https://spreadsheet-day.com/blog/about/), the anniversary of VisiCalc’s release in 1979, the first spreadsheet app!

> 🐦 [Brian Hempel (@brianhempel) on X](https://x.com/brianhempel/status/1846963395536605437): Today is Spreadsheet Day, the anniversary of VisiCalc's release in 1979, the first spreadsheet app. To cell-ebrate, post a pic or describe your favorite spreadsheet!
> 
> 👇



----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
