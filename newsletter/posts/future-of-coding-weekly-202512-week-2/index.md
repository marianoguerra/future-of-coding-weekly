<!--
.. title: Future of Coding Weekly 2025/12 Week 2
.. slug: future-of-coding-weekly-202512-week-2
.. date: 2025-12-08 00:24:00 UTC+01:00
.. tags:
.. category:
.. link:
.. description:
.. type: text
-->

💡 Dynamic Dataflow Templating 🎥 Artifact by Dennis Hansen 🔗 Foreign Wiki Interface

# Share Your Work

## 🗨️ **Márton Gunyhó**: [🧑‍💻 taka](https://codeberg.org/marton/taka)

[🧵 conversation @ 2025-12-06](https://history.futureofcoding.org/history/weekly/2025/12/W2/share-your-work.html#2025-12-06T06:44:56.912Z)

Hi all! I created a little stack-based programming language which I'm using to solve Advent of Code this year. It's not as revolutionary as most of the projects here, the most interesting feature is the syntax, which uses forward Polish notation. In the future, I want to explore if this could work well for REPL-driven development.

> The Taka programming language

![taka](https://codeberg.org/marton/taka/-/summary-card)

## 🗨️ **Tom Larkworthy**: [💡 Dynamic Dataflow Templating](https://observablehq.com/@tomlarkworthy/dataflow-templating)

[🧵 conversation @ 2025-12-07](https://history.futureofcoding.org/history/weekly/2025/12/W2/share-your-work.html#2025-12-07T20:31:41.587Z)

There is a missing semantic in Dataflow programming, something like function calling but not exactly that. After many attempts, I think I finally nailed it: Dataflow Templating. While I have got it working for Observable Dataflow, I think this equally applies to its forefathers like [FrTime](https://docs.racket-lang.org/frtime/). I could reexplain it here but its in the article. I saw [Dennis Hansen](#user?key=U06BUK2M2RH) grappling with the same thing for [Artifact](https://feelingofcomputing.slack.com/archives/C5T9GPWFL/p1764186658018769). I don't use diagrammatic representations of dataflow, but if I did, I would be trying to figure out what the graphical representation of this is.

[📝 Dynamic Dataflow Templating](https://observablehq.com/@tomlarkworthy/dataflow-templating)

> The missing function-like semantic for dataflow programming. Why? There is a reusability gap with notebooks (and spreadsheets for that matter). When you express a complex chain of computation, they build upon a set of initial inputs, unrolled across a series of cells. But then you realize, there is no way you can reuse the same logic with different inputs. But I love dataflow, notebooks, inspectable cells and the accompanying documentation! The inspectability of intermediate steps with dataflow programming

![Dynamic Dataflow Templating](https://static.observableusercontent.com/thumbnail/d9b7d8bad3de85323497f886abd9b81a7198fe792128ccc4943748d2787fa662.jpg)

# DevLog Together

## 🗨️ **Konrad Hinsen**

[🧵 conversation @ 2025-12-02](https://history.futureofcoding.org/history/weekly/2025/12/W2/devlog-together.html#2025-12-02T08:28:35.405Z)

HyperDoc got views for links and backlinks. That's also a preparation for a "foreign wiki interface" I am working on. You can already link to Wikipedia pages as if they were HyperDoc pages, but so far without backlink detection. Once I have that, you can go to a Wikipedia page and see all HyperDoc pages that link to it, i.e. pages that talk about a related subject.

![📷 hyperdoc.png](https://history.futureofcoding.org/history/msg_files/F0A/F0A0X9RQWHL.png)

## 🗨️ **Ivan Reese**

[🧵 conversation @ 2025-12-07](https://history.futureofcoding.org/history/weekly/2025/12/W2/devlog-together.html#2025-12-07T03:09:29.079Z)

I've been doing a [December Adventure](https://eli.li/december-adventure), which is a lovely little thing initiated by [Eli](#user?key=UMQ6LR9NZ). I should have mentioned this a week ago, but like… it's never too late to hop on board! The gist of it is… well, actually, here's how I personally interpret it, even though this is at odds with the "official" post::::

You should do a weird little extra thing every day. Something you don't normally do. Maybe it's creative. Maybe it's coding. Doesn't matter. But try to find a space moment in your day to do a weird little extra thing.

Try not to feel any pangs if you miss a day. Don't dread it. Just look for an opportunity to try something out.

And, if the spirit moves you, post about it somewhere. Maybe on your personal website — I've been posting my [december adventures](https://ivanish.ca/december-adventure/) on my personal website, natch. But a lot of folks (and there are, in fact, quite a few folks doing this now, which is truly humbling) post on Mastodon about it. Or you could just post here in [devlog-together](#channel?key=C03RR0W5DGC). That'd be great.

If you're doing a December Adventure, let me know!

## 🗨️ **Tom Larkworthy**

[🧵 conversation @ 2025-12-07](https://history.futureofcoding.org/history/weekly/2025/12/W2/devlog-together.html#2025-12-07T08:13:25.656Z)

I wrote a dataviz/computational blog post in Lopecode about de-aggregating Cloud Watch metrics to recover the original dataset. Computational blogging is something I want to be possible and I had to fix a few things to make it look more like a blog. Its running the de-agregation code in the browser.

<https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_unaggregating-cloudwatch-metrics.html>

# Linking Together

## 🗨️ **Jasmine Otto**

[🧵 conversation @ 2025-12-01](https://history.futureofcoding.org/history/weekly/2025/12/W2/linking-together.html#2025-12-01T17:55:42.382Z)

new adversarial extension example from gamedev: camera sync between 3d viewports in two editors via single JS module [🦋 passivestar.bsky.social](https://bsky.app/profile/passivestar.bsky.social/post/3m6vjce5tvk2e):

> made a fun little godot-blender viewport camera sync miniapp
>
> no addons on either side, no build steps, just a single js module file that's loaded in tauri that has code in all 6 languages (html, css, js, python, gdscript, bash)

# Present Company

## 🗨️ **Ivan Reese**: [🎥 Artifact by Dennis Hansen](https://www.youtube.com/watch?v=1iavuJ-y7BY)

[🧵 conversation @ 2025-12-01](https://history.futureofcoding.org/history/weekly/2025/12/W2/present-company.html#2025-12-01T21:49:42.819Z)

The recording of [Dennis Hansen](#user?key=U06BUK2M2RH)’s Artifact workshop is now [live on youtube](https://www.youtube.com/watch?v=1iavuJ-y7BY). Thanks everyone who came out!

![Artifact by Dennis Hansen](https://i.ytimg.com/vi/1iavuJ-y7BY/hqdefault.jpg)

## 🗨️ **Ivan Reese**

[🧵 conversation @ 2025-12-04](https://history.futureofcoding.org/history/weekly/2025/12/W2/present-company.html#2025-12-04T05:15:04.446Z)

Let's get the ball rolling on the next Virtual Meetup — our first since September!! The date will be December 31st at the usual time ([18:00 UTC](https://everytimezone.com/s/568737c9)).

For what I believe is the first time since we started doing these, I have something I made that I'd like to share! Who else?

---

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
