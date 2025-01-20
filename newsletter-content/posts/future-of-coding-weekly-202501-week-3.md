<!--
.. title: Future of Coding Weekly 2025/01 Week 3
.. slug: future-of-coding-weekly-202501-week-3
.. date: 2025-01-20 11:30:38 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🤔 Where Should Visual Programming Go? 🧑🏽‍💻 Reactive coding substrate that looks like a webpage 🐦 Influence a future Alan Kay talk

# Two Minute Week



# Our Work

## 🤔 [Where Should Visual Programming Go?](https://tonsky.me/blog/diagrams/) via [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/01/W3/share-your-work.html#2025-01-14T20:39:00.630Z)

Making direct manipulation diagrams fast to develop.



So this work was motivated by "[Where Should Visual Programming Go?](https://tonsky.me/blog/diagrams/)". I kinda thought dataviz driven development was a step in the right direction but some people here though unidirectional was too limiting. So it made me think about what a bidirection diagram was.



Grammar of graphics provides a nice abstraction of what a scale actually  *is.*  It's a mapping from dataspace to pixel space. A bidireciton diagram might go in the other direction, mouse movements (actions) are mapped back to changes in data space. Once you consider libraries like Plot are very liberal on what scales they support: non-linear, categorical etc. then the ability to manipulate data points through a diagram is pretty compelling. You stop thinking about data as external data but as control surfaces that live in a weird high dimensional configuration space of your choosing.



Inverting scales is reasonably easy, once that general primitive is in place  then you get a shit ton of possible gizmos that take very little time to make look good and work because all the heavy lifting is done in the other direction using an off-the-shelf dataviz library.



Full explanation and code in [a notebook](https://observablehq.com/@tomlarkworthy/manipulate) although the one-weird invert trick is quite general.

🎥 [direct manipulation](http://history.futureofcoding.org/history/msg_files/F08/F0887K0E431.mov)

## 📝 [Speech AI has 10x’d: purpose, evaluation, and products](https://www.papercup.com/blog/speech-ai) via **Kilian Butler**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/01/W3/share-your-work.html#2025-01-15T13:50:21.418Z)

I wrote a blog post for anyone building AI models, rethinking human-computer interaction, or just looking to build truly great speech products:

• Why TTS is finished as a model paradigm—and what’s next with multimodal speech synthesis.

• How model evaluations must evolve to focus on communication, not just naturalness.

• Why product success hinges on understanding speech’s purpose: meaningful user intent.



## 📝 [Composition to the Rescue](https://frest.substack.com/p/composition-to-the-rescue) via **Guyren Howe**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/01/W3/share-your-work.html#2025-01-16T19:49:15.154Z)

# Devlog Together

## 💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/01/W3/devlog-together.html#2025-01-16T19:22:06.025Z)

I've been trying some new stuff lately:




* [Decker.](https://beyondloom.com/decker/) I'd for some reason assumed it was some npm and/or wasm monstrosity (perhaps because it's so dang inefficient), but it turns out it's nice zero-dependency Javascript in a single html file! And that's in addition to the native version that uses SDL just like LÖVE. So in some ways it has a better cross-platform story than LÖVE, which is non-trivial to run on iOS.
* Rust. I spent some time playing around with a LÖVE-inspired game engine called [ggez](https://crates.io/crates/ggez), and the much more basic [wgpu](https://crates.io/crates/wgpu) crate. The promise here: Rust seems to be evolving some pretty nice cross-platform tooling, so in time we may end up with a world where it's easy to cross-compile to any platform. Of course, the compile step is not ideal, but it promises to yield much more efficient binaries that might run on lower-end devices like old phones. The eco-system is not quite there, and the npm-like dependency explosions are rough. But I want to try to look outside my comfort zone. It's possible the way forward isn't unique-snowflake minority platforms like LÖVE or Decker, but just to use a majority platform with better taste, taking the time to understand and curate the landscape of dependencies.

🎥 [decker](http://history.futureofcoding.org/history/msg_files/F08/F0890N87FHQ.webm)


## 🧑🏽‍💻 [Lopefile: a reactive coding substrate that is configured to look like a webpage](https://tomlarkworthy.moldable.app/index.html) via [Tom Larkworthy](https://webcode.run)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/01/W3/devlog-together.html#2025-01-19T21:18:18.431Z)

I added Plot and therefore d3 to the hermatic notebook self hosting html bundle thing, also uploaded it to a domain.

UI is a bit rough for adding cells, bit its quite ok at editing existing content.


# Thinking Together

## 📝 [Practical Parallelism](https://open.substack.com/pub/programmingsimplicity/p/practical-parallelism?r=1egdky&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/01/W3/thinking-together.html#2025-01-16T14:34:03.781Z)

As I understand it, to achieve true concurrency on a single computer, you need to ensure that app code sits in one of the core-private caches (L1, L2, but not L3). [Thoughts](https://open.substack.com/pub/programmingsimplicity/p/practical-parallelism?r=1egdky&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true)



## 🦋 [I just asked over on bsky:](https://bsky.app/profile/watwa.re/post/3lfxdhu7kss2m) via **Gregor**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/01/W3/thinking-together.html#2025-01-17T18:00:52.046Z)

[I just asked over on bsky:](https://bsky.app/profile/watwa.re/post/3lfxdhu7kss2m)




> I'm morbidly fascinated by Business Process Modeling. On some level it's exactly what I want: end user programming.

But then the only people I heard speak positively about it are vendors, which is very much not what I want



It's also a non-topic in the alt programming circles I frequent. Any takes?

I guess I could've just put it here. Curious if anyone has thoughts on it

## 🐦 [Unique chance to influence a future Alan Kay talk!](https://x.com/anselm_io/status/1878869135117206013?s=46&t=0Sw9Xbi6T01RndBXLEINcA) via **Anselm Eickhoff**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/01/W3/thinking-together.html#2025-01-18T13:45:32.728Z)

Hey folks!

Unique chance to influence a future Alan Kay talk!






* If you could ask Alan Kay anything, what would you ask?

[Twitter thread](https://x.com/anselm_io/status/1878869135117206013?s=46&t=0Sw9Xbi6T01RndBXLEINcA) / [Bluesky ](https://bsky.app/profile/anselm.io/post/3lfndvyqj4s2y)[t](https://bsky.app/profile/anselm.io/post/3lfndvyqj4s2y)[hread](https://bsky.app/profile/anselm.io/post/3lfndvyqj4s2y)



2. Now he has some questions for you!

[Twitter thread](https://x.com/anselm_io/status/1880608393934647490?s=46&t=0Sw9Xbi6T01RndBXLEINcA) / [Bluesky thread](https://bsky.app/profile/anselm.io/post/3lfzg5gqjxc2j)



Feel free to reply here as well

# Present Company

## 📝 [Cat Hicks (@grimalkina@mastodon.social)](https://mastodon.social/@grimalkina/113833867696134627) via **Jasmine Otto**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2025/01/W3/present-company.html#2025-01-16T18:19:54.678Z)

> 📝 [Cat Hicks (@grimalkina@mastodon.social)](https://mastodon.social/@grimalkina/113833867696134627)
>
>We are designing a new research project in the Developer Success Lab, and we're seeking to understand software engineers' experiences with *incidents* ! Good, bad, ugly, all of it!

Have a big story or strong POV on this? We're bringing together a small community group for a one time zoom session, to share stories and help us learn. You'll directly influence what the lab studies on this.

You can let us know if you're interested here (more details below):

[Incidents community-group](https://docs.google.com/forms/d/e/1FAIpQLSeuQiE0Ww1oElsWNk6a9KyEmIgqfwHdpnV5_dN9CP4qornJhg/viewform?usp=sharing)


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)

