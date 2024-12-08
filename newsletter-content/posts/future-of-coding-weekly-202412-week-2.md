<!--
.. title: Future of Coding Weekly 2024/12 Week 2
.. slug: future-of-coding-weekly-202412-week-2
.. date: 2024-12-08 23:09:36 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

👋 Staying Observable 📝 Research as leisure activity 🧑‍💻 Malleable Systems Collective

# Two Minute Week

## 💬 [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/two-minute-week.html#2024-12-02T19:30:15.543Z)

Editing the source code of notebook  _dependancies_  reactively. This is something you can't do in Observable which is where the non-interleaved editor actually has an advantage.

🎥 [Edit Dependancies](http://history.futureofcoding.org/history/msg_files/F08/F083AN7V326.mov)

## 👋 [Editor with Exporter](https://observablehq.com/@tomlarkworthy/editable-exports) via [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/two-minute-week.html#2024-12-07T19:44:35.490Z)

OK Part II done! The userspace editor + userspace exporter playing together nicely. You can try it out [here](https://observablehq.com/@tomlarkworthy/editable-exports). In theory you should be able to edit, export and upload to S3 without even logging into Observable. (There is not way to manage the layout of a notebook though, thats part III, so its sorta too limited to be useful yet).

🎥 [Tom Larkworthy's Video - Dec 7, 2024](http://history.futureofcoding.org/history/msg_files/F08/F084H4ZJW49.mp4)

# Our Work

## 📕 [☞ Computation and Wonder, Soon in Book Form!](https://arbesman.substack.com/p/computation-and-wonder-soon-in-book) via **Sam Arbesman**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/share-your-work.html#2024-12-02T13:12:10.562Z)

Hey everyone! I've been working on a book called  _The Magic of Cod_ e and it is going to be seeing the light of day next year! It is about the wonders and weirdness of computation, and how thinking about computers and code and lead one to think about everything from philosophy and language to biology and the nature of thought. It explores many "future of coding" themes and is geared towards a general audience (though I think there are enough weird topics in it that even experts will hopefully find something of interest!). Here's a bit more about the book:

> 📝 [☞ Computation and Wonder, Soon in Book Form!](https://arbesman.substack.com/p/computation-and-wonder-soon-in-book)
>
>You can now preorder my forthcoming book "The Magic of Code"!

## 🕸️ [Smallweb - Your internet folder](https://smallweb.run/) via **Achille Lacoin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/share-your-work.html#2024-12-04T00:01:34.045Z)

Hey, I'm running an experiment: There is a public shared instance of [smallweb](https://smallweb.run) running at [smallweb.live](https://smallweb.live).

Come and leave something there (you can even break it, but I'm sure you'll be nice).

> 📝 [Smallweb - Your internet folder](https://smallweb.run/)
>
>A self-hostable personal cloud inspired by serverless platforms and cgi-bin.

# Devlog Together

## 💡 [December Adventure](https://eli.li/december-adventure) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/devlog-together.html#2024-12-02T01:12:20.461Z)

I'm doing **@Eli Mellen**’s [December Adventure](https://eli.li/december-adventure) this year. I won't post here every day, but today is my first one, and it's fun, so here you go.



… I made an RSS feed of  _just_  the CSS rules on my website: [ivanish.ca/feeds](http://ivanish.ca/feeds)


## 💻 [Markov Chain Monte Carlo](https://dippl.org/chapters/06-mcmc.html) via [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/devlog-together.html#2024-12-03T15:54:25.988Z)

😌😌😌

I finally cracked it. I replaced the uniform sampler with [MCMC](https://dippl.org/chapters/06-mcmc.html), and made a large optimization pass, and now the plots converge beautifully in only a few seconds. (Compare with my last video!)

🎥 [tug-of-war mcmc and optimizations](http://history.futureofcoding.org/history/msg_files/F08/F083FQNEGJE.mov)

## 💬 [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/devlog-together.html#2024-12-03T21:06:19.373Z)

I was a bit worried because I discovered quite late in the day that my decompiler/compiler pair was stripping comments. Urgh, of course, 'cos its AST based. Luckily, escodegen and acorn do have comment preserving features, and Observable's acorn wrapper passes on arguments in a way that means I could get comments round tripping too 😅  Close call, programming without comments would be a fairly substantial deficiency.

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/devlog-together.html#2024-12-05T07:43:39.592Z)

Oh being able to edit dependancies is actually useful. I can insert  `debugger`  statements into dependancies. Then, when I apply the source update, the hot reload reruns them and then triggers the debugger inside their context.

## 💬 [Christopher Shank](https://mobile.twitter.com/chrisshank23)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/devlog-together.html#2024-12-06T00:58:17.443Z)



🎥 [What if visual programming interfaces had weather?](http://history.futureofcoding.org/history/msg_files/F08/F083XB0FNCA.mov)

## 🦋 [ezhik.me](https://bsky.app/profile/ezhik.me/post/3lcshj5bmik2u) via **Ezhik**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/devlog-together.html#2024-12-08T15:38:54.803Z)

so i started toying with something a bit weird and i'm honestly not sure what i think so far:

> @ezhik.me: was messing around with creating #obsidian plugins and may have accidentally come up with a novel #pkm system?
> #notetaking nerds does this seem like something interesting or did smalltalk koolaid drive me insane?
> but like i have this implemented and working in obsidian today for better or worse.



like i notice people doing  *wild*  stuff with their obsidians and notions - basically creating entire personalized apps and databases and i think it's cool as hell - like it just show how much people want to code for themselves, it's 100% end-user programming.



and now i wanted to solve a small problem for myself and accidentally made a type system for obsidian and i kinda wonder what else could be done with it? like what if each note was a bit like a val.town val and could contain some code? what if this "class" system could be extended to, for example, allow providing data fields? then this could be some sort of a strange database, perhaps more like the pre-rdbms hierarchical database systems?



what if 'end-user programming' as a concept could be something that grows out of people's own digital gardens, rather than from making "simpler" versions of professional tools?



![](https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:png3xhpd6ccblcrcrxsxmfrs/bafkreicvblvvf2fg7mn3zhhwbrgwntdk6unt75t4x6qlpaivauyixfsgui@jpeg)

🎥 [Screen Recording](http://history.futureofcoding.org/history/msg_files/F08/F083R92821M.mov)


# Thinking Together

## 📝 [UTF-8 in usernames](https://lwn.net/SubscriberLink/1000485/670ef0045e5e8a3e/) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/thinking-together.html#2024-12-06T14:13:39.879Z)

Debian is currently struggling with allowing [UTF-8 in usernames](https://lwn.net/SubscriberLink/1000485/670ef0045e5e8a3e/). I wrote about various challenges involved in NAMING things (i.e. human-readable unique identifiers for concepts/topics or people etc): [github.com/learn-awesome/learndb/wiki/Naming-Things](https://github.com/learn-awesome/learndb/wiki/Naming-Things)


## 📝 [Schnieder's algorithm](https://www.realtimerendering.com/resources/GraphicsGems/gems/FitCurves.c) via **John Christensen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/thinking-together.html#2024-12-08T18:16:36.862Z)

Does anyone have recommendations/resources (blogs, papers, implementations, etc.) on rendering hand drawn curves?  Currently I'm just going from a raw list of cursor positions to a simplified list of Bezier curves using [Schnieder's algorithm](https://www.realtimerendering.com/resources/GraphicsGems/gems/FitCurves.c).



I want to try using pressure/tilt values from a cheap drawing tablet to draw more "natural" curves, but I don't currently have the vocabulary to find what work has been done in this area.



Also interested in any adjacent UX ideas for this type of interaction :)

# Content

## 📝 [Research as leisure activity](https://www.personalcanon.com/p/research-as-leisure-activity) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/linking-together.html#2024-12-04T15:24:08.191Z)

[Research as leisure activity](https://www.personalcanon.com/p/research-as-leisure-activity)






* directed by passions and instincts
* exuberantly undisciplined or antidisciplinary
* involves as much rigor as necessary


## 🧑‍💻 [Malleable Systems Collective](https://malleable.systems/) via [Duncan Cragg](https://twitter.com/Duncan__Cragg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/linking-together.html#2024-12-04T22:54:26.964Z)

[J. Ryan Stinnett](https://twitter.com/jryans) seems to have created [malleable.systems](https://malleable.systems/) with a forum [forum.malleable.systems/t/welcome-to-the-forum/7](https://forum.malleable.systems/t/welcome-to-the-forum/7) that's in a similar space to this one. I searched here but no-one seems to have mentioned it; I only just discovered it myself. I see [Konrad Hinsen](https://khinsen.net/) and [Kartik Agaram](http://akkartik.name/about) on there and even [Geoffrey Litt](https://twitter.com/geoffreylitt)!

> 📝 [Malleable Systems Collective](https://malleable.systems/)
>
> The Malleable Systems Collective catalogs and experiments with malleable software and systems that reset the balance of power in computing


> 📝 [Welcome to the forum](https://forum.malleable.systems/t/welcome-to-the-forum/7)
>
> This is a long-form discussion forum for the malleable software community. You are welcome to share your malleable ideas and projects here. Our catalog is now hosted on this forum as well, and it is much easier to edit via wiki-style posts which anyone can contribute to. Our async chat room on Matrix is not going anywhere. This forum is additional communication medium that complements the Matrix room. Some topics are likely easier to discuss here, while others may be easier in the Matrix room....


## 📑 [Roelof Knol | art portfolio](https://www.roelofknol.com/portfolio) via **Greg Bylenok**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/linking-together.html#2024-12-05T13:48:37.645Z)

It's art, but with some Dynamicland vibes. Most relevant are under "Selected Works" at the very bottom (sorry, no anchors on his website): [roelofknol.com/portfolio](https://www.roelofknol.com/portfolio)


## 🪴 [beautifully provocative](https://bsky.app/profile/marcinignac.bsky.social/post/3lcne27gx222a) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/linking-together.html#2024-12-06T17:43:22.352Z)

Some [beautifully provocative](https://bsky.app/profile/marcinignac.bsky.social/post/3lcne27gx222a) images of art + node-wire graph from [Marcin Ignac](https://twitter.com/marcinignac)

![<https://bsky.app/profile/marcinignac.bsky.social|@marcinignac.bsky.social>: Graph as root of a procedural system.](https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:m3lodjfevpbuwcvmeui6pvwr/bafkreibj3swdmffozio5zynwoombtzamehzcmcrkvdq22k36catxwkzqvy@jpeg)



# Present Company

## 📝 [FutureOfCoding starter pack for Mastodon/Fediverse](https://fedidevs.com/s/NTM/) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/12/W2/present-company.html#2024-12-05T06:07:58.273Z)

I put together [FutureOfCoding starter pack for Mastodon/Fediverse](https://fedidevs.com/s/NTM/).



I added as many as I could. Some of your profiles are not [discoverable](https://docs.joinmastodon.org/user/profile/#discoverable) and therefore, could not be added to this.

I would love to add more of you. Please reply in thread with your fediverse account.


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)

