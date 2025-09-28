<!--
.. title: Future of Coding Weekly 2025/09 Week 5
.. slug: future-of-coding-weekly-202509-week-5
.. date: 2025-09-28 22:31:26 UTC+02:00
.. tags:
.. category:
.. link:
.. description:
.. type: text
-->

🎙️ FoC 78: Let's Take Esoteric Programming Languages Seriously 📕 Forty-Four Esolangs: The Art of Esoteric Code 🎥 Foc Virtual Meetup: September 2025

# Share Your Work

## 🗨️ **Ivan Reese**: [🎙️ Feeling of Computing • Episode 78 • Let's Take Esoteric Programming Languages Seriously](https://feelingof.com/episodes/078/)

[🧵 conversation @ 2025-09-27](https://history.futureofcoding.org/history/weekly/2025/09/W4/share-your-work.html#2025-09-27T04:51:19.318Z)

One of the biggest goals of this show — our raisin detour, if you will — is to encourage people to look at computer programming differently. It’s not just a job, or a way to make the computer do what you want. Code isn’t just the material you sculpt into apps and games and websites. The very act of programming itself, and the languages we make and use to do that programming, reflect who we are as people. Programming languages say something.

Esolangs — esoteric programming languages — are programming languages created for these more self-reflective purposes. To some, they’re defined by what they’re not: not for serious use, not for education, not for efficiency. To others, they’re a bunch of funny jokes that people can commiserate through after suffering the steep learning curve of becoming a programmer. A few find in them an opportunity to explore strange computational models, or baffling syntax designs. But is there more to them? Could there be?

In this episode, we’re discussing a preprint of the paper Let’s Take Esoteric Programming Languages Seriously by Jeremy Singer and Steve Draper, and struggling with what it even means to give esoteric languages their due.

## 🗨️ **Rory Byrne**:

[🧵 conversation @ 2025-09-28](https://history.futureofcoding.org/history/weekly/2025/09/W4/share-your-work.html#2025-09-28T15:35:02.533Z)

I want to revive this old prototype I built - [Codeline](https://github.com/rorybyrne/codeline). It's a tool that lets you run commands from your source code comments. Anyone interested in helping?

Some ideas:

1. Build a LSP server that can detect appropriate comments and run the commands/add CodeLens context/other stuff
2. Finish off the SDK so people can build new commands
3. Modernise the tooling (poetry -> uv , make -> just etc)
4. Build a few commands
5. Design a way to decouple commands from the codebase, so they can be installed independently.
6. Use treesitter to find relevant comments
7. Permission system for risky actions (e.g. rm)
8. ...

# DevLog Together

## 🗨️ **Jasmine Otto**:

[🧵 conversation @ 2025-09-25](https://history.futureofcoding.org/history/weekly/2025/09/W4/devlog-together.html#2025-09-25T22:35:11.715Z)

(to a non-MVC codebase, threateningly) which one of you model-update rules clobbers the view as a side-effect?

# Reading Together

## 🗨️ **brett g porter**:

[🧵 conversation @ 2025-09-27](https://history.futureofcoding.org/history/weekly/2025/09/W4/reading-together.html#2025-09-27T00:45:21.858Z)

Just saw that MIT Press published an Esolang book by Daniel Temkin this week: <https://mitpress.mit.edu/9780262553087/forty-four-esolangs/>

# Thinking Together

## 🗨️ **guitarvydas**: [📝 Recursive, Asynchronous Layering: What Shell Scripts Teach Us About Program Architecture](https://programmingsimplicity.substack.com/p/recursive-asynchronous-layering-what?r=1egdky)

[🧵 conversation @ 2025-09-22](https://history.futureofcoding.org/history/weekly/2025/09/W4/thinking-together.html#2025-09-22T03:27:17.723Z)

# Linking Together

## 🗨️ **misha**:

[🧵 conversation @ 2025-09-23](https://history.futureofcoding.org/history/weekly/2025/09/W4/linking-together.html#2025-09-23T05:32:55.031Z)

please, share your favorite resources about programming languages and DSL design

# Present Company

## 🗨️ **Ivan Reese**: [🎥 September 2025](https://www.youtube.com/watch?v=3-rg-FPZJtk)

[🧵 conversation @ 2025-09-24](https://history.futureofcoding.org/history/weekly/2025/09/W4/present-company.html#2025-09-24T22:07:39.998Z)

Here's the recording of our [September virtual meetup](https://www.youtube.com/watch?v=3-rg-FPZJtk). Three great demos today — I was remarking in the post-meetup hangout that I'm surprised and delighted that this community continues to attract people working on such interesting and varied prototypes. These meetups have been a blessing of inspiration for me personally, and hopefully for many of you as well.

Next month we're going to do something a little different — more on that soon! See you in late October 🎃

[🎥 September 2025](https://www.youtube.com/watch?v=3-rg-FPZJtk)

![September 2025](https://i.ytimg.com/vi/3-rg-FPZJtk/hqdefault.jpg)

## 🗨️ **Jouke Waleson**: [🎥 Comper update July 2025](https://www.youtube.com/watch?v=j5dqxRUmf6U)

[🧵 conversation @ 2025-09-27](https://history.futureofcoding.org/history/weekly/2025/09/W4/present-company.html#2025-09-27T16:28:22.853Z)

During my demo in the meetup ^^ (first 15 minutes or so) I was encouraged to post an update about Comper here, so here goes:

Backstory  
Three years ago I was CTO and was often playing GeoGuessr in the office with my team after office hours. It was a lot of fun, and then a very creative guy from marketing said "Why don't you build that for code?" I thought that was extremely cool. In GeoGuessr, you're dropped in Google Streetview and have to guess where you are by clicking on the map. The closer you are, the more points you get. For software you could see a code snippet and also guess where you are. I realized the problem in building this for software was that we don't have a map, so I had to create a different user interface for the game. After a couple of attempts I gave up and decided to build a map for the software landscape instead. When I had a PoC I realized that having a map could be very useful for all kinds of things! Then I quit my job, spent some time freelancing (I needed a break after that company) and saving up. In December last year I really started building, so now I'm starting to show Comper - <https://comper.io> to the world .

What is it  
Comper is going to be the Google Maps for software organizations. With it, you visualize your landscape, zoom in and out, and use overlays to see different aspects (quality, security, complexity, productivity, .....). You can zoom in all the way to code using dynamic treemaps.

Here's a video showcasing most of the features from two months ago: <https://www.youtube.com/watch?v=j5dqxRUmf6U> . I mostly did a lot of polishing and refactoring since then so functionality-wise it's mostly the same.

I'm currently working on better diagramming and letting AI agents figure out the structure of each project so that it can create diagrams automatically. I want Comper to be the living map of your software team that is always up to date with reality, and can truly be used to explore and discover the software landscape, by giving everyone the "lenses" that are relevant to them.

Next steps / beta program  
For now I'm building it alone in Utrecht, The Netherlands, the company is getting incorporated within the next two weeks or so. Still need to figure out the business model, but I have no doubts: this will be extremely useful to software teams. You can't download it yet, but I'm opening a private beta program. If you have a use case and are willing to pay for me to give advice / insights using the product, let me know. Might be useful for a tech due-diligence, restructuring teams or something like that.

PS. it's built on Rust and the frontend mostly PixiJS and a bit of VueJS. Rust because I need to analyze all the history of hundreds of repos quickly.  
PPS. I showed a very early prototype to [Jack Rusher](#user?key=U013ZLJARC7) a couple years aback and he encouraged me to join the FoC Slack, which I've mostly enjoyed from the sidelines so far :)

If it's appreciated I'll post some updates somewhere here on Slack every now and then. Let me know if you have any questions or comments!

[🎥 Comper update July 2025](https://www.youtube.com/watch?v=j5dqxRUmf6U)

![Comper update July 2025](https://i.ytimg.com/vi/j5dqxRUmf6U/hqdefault.jpg)

---

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
