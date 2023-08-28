<!--
.. title: Future of Coding Weekly 2023/08 Week 4
.. slug: future-of-coding-weekly-202308-week-4
.. date: 2023-08-28 15:42:58 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎙 FoC #66 Bonnie Nardi • A Small Matter of Programming 🫰 LÖVE your apps 🤔 No one actually wants simplicity

# Our Work

🫰 [Adding malleability to any LÖVE app](https://forum.malleable.systems/t/adding-malleability-to-any-love-app/90) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/share-your-work.html#2023-08-22T17:23:52.162Z)

You can now make any app end-user-programmable -- as long as it's built in LÖVE


![repl1.png](http://history.futureofcoding.org/history/msg_files/F05/F05PC9BKSBB.png)

![repl2.png](http://history.futureofcoding.org/history/msg_files/F05/F05NT15CW06.png)

![repl3.png](http://history.futureofcoding.org/history/msg_files/F05/F05P23T7FGC.png)



🎙 [FoC #66 Bonnie Nardi • A Small Matter of Programming](https://futureofcoding.org/episodes/066) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/share-your-work.html#2023-08-23T02:54:38.355Z)

This community is a big tent. We welcome folks from all backgrounds, and all levels of experience with computers. Heck, on our last episode, we celebrated an article written by someone who is, rounding down, a lawyer! A constant question I ponder is: what's the best way to introduce someone to the world of FoC? If someone is a workaday programmer, or a non-programmer, what can we share with them to help them understand our area of interest?



A personal favourite is the [New Media Reader](https://mitpress.mit.edu/9780262232272/), but it's long and dense. An obvious crowd-pleaser is [Inventing on Principle](https://www.youtube.com/watch?v=PUv66718DII).



[Bonnie Nardi](https://en.wikipedia.org/wiki/Bonnie_Nardi)'s [A Small Matter of Programming](https://mitpress.mit.edu/9780262292368/a-small-matter-of-programming/) deserves a place on the list, especially if the reader is already an avid programmer who doesn't yet understand the point of  _end-user programming_ . They might ask, "Why should typical computer users bother learning to program?" Well, that's the wrong question! Instead, we should start broader. Why do we use computers? What do we use them to do? What happens when they don't do what we want? Who controls what they do? Will this ever change? What change do we want? Nardi challenges us to explore these questions, and gives the reader a gentle but definitive push in a positive direction.



Also of note — we've launched a [Patreon](http://patreon.com/futureofcoding)! If you enjoy the show, please consider supporting it with a small (or not-so-small) monthly contribution. You'll get bonus episodes and a warm feeling in your heart (disclaimer: warm feeling is a metaphor; if you actually feel an increase of body heat please do not discontinue support but do talk to a doctor)



🎥 [It's now easier to build and run little LÖVE apps for yourself on Android](https://www.youtube.com/watch?v=6R0k0UBw_O4) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/share-your-work.html#2023-08-26T15:05:27.777Z)

![Youtube Thumbnail](https://img.youtube.com/vi/6R0k0UBw_O4/hqdefault.jpg)

1. Install LÖVE from the app store (see [love2d.org](https://love2d.org))

2. Download MiniIDE.love from [love2d.org/forums/viewtopic.php?t=94852](https://love2d.org/forums/viewtopic.php?t=94852). I've been contributing to this app and vouch for it.

cc [Konrad Hinsen](https://khinsen.net/) who's been waiting for this 🙂



(MiniIDE has also been tested on iOS without limitations. But I gather LÖVE is quite tortuous to install on iOS, so you're on your own there..)

# Devlog Together

🐸 [TODEPOND PONDCAST](https://todepond.substack.com/p/todepond-pondcast-todepond-times) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/devlog-together.html#2023-08-24T19:50:36.467Z)

I've been trying a new format for my weekly devlog updates. I started by recording myself 'reading them out loud' a few months ago. And it's stuck, and I have no plans of stopping, and they're including more-and-more ad-libbing, so I've decided to make it official. So... now I'm doing the weekly 'TODEPOND PONDCAST'. Mostly as a bonus for supporters, but the occasional public one, [like this one](https://todepond.substack.com/p/todepond-pondcast-todepond-times).



I'd highly recommend recording yourself speaking your blog/posts/devlogs! It's been a nice way of connecting on a more personal level with readers.

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/devlog-together.html#2023-08-25T06:06:11.471Z)

I think I figured out how I want to visualize a logic program executing in a debugger. A tree of trees. Chess-style variation tree navigator, where each node represents a search step and shows the search tree and bindings at that time, plus where the new unification clause was found in the source code. Anyone ever seen a logic debugger like that?

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/devlog-together.html#2023-08-25T06:07:32.470Z)

(or know of any open source web-based chess variation builders I could crib from)?


# Thinking Together

💭 The reality of abstractions by **Daniel Buckmaster**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/thinking-together.html#2023-08-25T00:57:27.641Z)

In Episode 66 there was a long discussion about an idea I've come to know as  _the reality of abstractions_ . I got that phrasing from David Deutsch in The Beginning Of Infinity.



I've long wanted to write about this in connection to programming, where we talk a lot about "abstractions", but in a very different sense* to the way Deutsch does. In lieu of doing that (which sounds like a lot of work) I will just post some of my favourite Deutsch quotes about it.






> Reductionism and holism are both mistakes. In reality, explanations do not form a hierarchy with the lowest level being the most fundamental. Rather, explanations at any level of emergence can be fundamental. Abstract entities are real, and can play a role in causing physical phenomena. Causation is itself such an abstraction.






> When we use theories about emergent physical quantities to explain the behaviour of water in a kettle, we are using an abstraction - an ‘idealized’ model of the kettle that ignores most of its details - as an approximation to a real physical system. But when we use a computer to investigate prime numbers, we are doing the reverse: we are using the physical computer as an approximation to an abstract one which perfectly models prime numbers. Unlike any real computer, the latter never goes wrong, requires no maintenance, and has unlimited memory and unlimited time to run its program.






> Abstractions are essential to a fuller explanation. You know that if your computer beats you at chess, it is really the program that has beaten you, not the silicon atoms or the computer as such. 
>  _[Nor, I would add, the arrangements of pixels on the screen which symbolize knights, pawns, etc.]_ 
>  The abstract program is instantiated physically as a high-level behaviour of vast numbers of atoms, but the explanation of why it has beaten you cannot be expressed without also referring to the program in its own right. That program has also been instantiated, unchanged, in a long chain of different physical substrates, including neurons in the brains of the programmers and radio waves when you downloaded the program via wireless networking, and finally as states of long- and short-term memory banks in your computer. The specifics of that chain of instantiations may be relevant to explaining how the program reached you, but it is irrelevant to why it beat you: there, the content of the knowledge (in it, and in you) is the whole story. That story is an explanation that refers ineluctably to abstractions; and therefore those abstractions exist, and really do affect physical objects in the way required by the explanation.



To connect this to the content of the episode - I think all the different representations of a cube on a screen are "real". The parts that you might dismiss as not having an "effect on the world", like the data structures in RAM, or the textual representation stored on disk, are as unavoidably real at their own levels of abstraction.



*Colloquially, I think working programmers use "abstraction" to mean things ranging from "I can ignore the details 'below' this point" to "I can [compress](https://caseymuratori.com/blog_0015) this implementation into fewer syntax tokens". A [contrary view](https://www.pathsensitive.com/2022/03/abstraction-not-what-you-think-it-is.html) from Dijkstra, which I think is closer to Deutsch's view, is abstraction as "a new semantic layer in which one can be absolutely precise".


# Content

🤔 [No one actually wants simplicity](https://lukeplant.me.uk/blog/posts/no-one-actually-wants-simplicity/) via **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/linking-together.html#2023-08-23T14:15:56.581Z)

[No one actually wants simplicity](https://lukeplant.me.uk/blog/posts/no-one-actually-wants-simplicity/)






> The reason that modern web development is 
> swamped with complexity
>  is that no one really wants things to be simple. We just think we do, while our choices prove otherwise.



later, continuing…






> The same is often true of complexity. The real test is the question “what are you willing to sacrifice to achieve simplicity?” If the answer is “nothing”, then you don’t actually love simplicity at all, it’s your lowest priority.

When I say “sacrifice”, I don’t mean that choosing simplicity will mean you are worse off overall – simplicity brings massive benefits. But it does mean that there will be some things that tempt you to believe you are missing out.



Looking beyond the inflammatory fun title, how do ya’ll think this relates to the future of coding? Is a reason that visual programming is often just around the corner because folks aren’t willing to shed some of the complexity (read also as “power” or “flexibility”) of existing programming systems?

📝 [Leaving Haskell behind — Infinite Negative Utility](https://journal.infinitenegativeutility.com/leaving-haskell-behind) via [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/linking-together.html#2023-08-25T07:10:56.279Z)

A nice essay on programming languages, but with a message that is much more general: [journal.infinitenegativeutility.com/leaving-haskell-behind](https://journal.infinitenegativeutility.com/leaving-haskell-behind)



It's about the tension between "make better technology", "use start-of-the-art technology", and "use boring (but stable and well understood) technology". Different goals, different tools.



Another example I have experienced a lot: mathematics and physics. Mathematicians work on new mathematics, mathematical physicists introduce state-of-the-art mathematics into physics, and all other physicists use 100-year-old mathematics from textbooks. And each group complains about the attitude of the two others.

🛸 [kamilalisp](https://github.com/kspalaiologos/kamilalisp) via **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/linking-together.html#2023-08-25T12:15:30.536Z)

Has anyone spent time with [kamilalisp](https://github.com/kspalaiologos/kamilalisp)?



I've spent the last week or so exploring it, and it keeps blowing my mind.

📝 [Andy Gocke on X](https://twitter.com/andygocke/status/1017509689695715328) via **Gregor**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/linking-together.html#2023-08-26T11:15:02.728Z)

:((

> 📝 [Andy Gocke on X](https://twitter.com/andygocke/status/1017509689695715328)
>
>Developer tools seemed like a good industry to be in, "sell shovels in the gold rush" and all, but it turns out developers prefer to dig for gold with their teeth.



🎥 [Modern C development with Visual studio in 2023.](https://youtu.be/CxKujAuz2Vw?si=dtffNBWq6-7rGsQ2) via **Nils Berg**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/linking-together.html#2023-08-26T20:58:46.499Z)

![Youtube Thumbnail](https://img.youtube.com/vi/CxKujAuz2Vw/hqdefault.jpg)

wee, new stuff from Eskil Steenberg:



(not that new, he’s been working on things like this, and advocating for live debugger use for many years at this point. and yet, his stuff always seems fresh, and just…different)

# 🤖

📝 [What can stop the AI apocalypse? — Grammar. Yes, only grammar. - Metamoderna](https://metamoderna.org/what-can-stop-the-ai-apocalypse-grammar-yes-only-grammar/) via [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/of-ai.html#2023-08-25T08:09:51.045Z)

An interesting take on AI risk: [metamoderna.org/what-can-stop-the-ai-apocalypse-grammar-yes-only-grammar](https://metamoderna.org/what-can-stop-the-ai-apocalypse-grammar-yes-only-grammar/)



The vision exposed in this article is that humans with their institutional superstructures (bureaucracies, markets, corporations, ...) and AIs (plural) will/should form an ecosystem in which all players coevolve, competing and collaborating at the same time. I don't think that any of the players are ready for this, but in the long run, this is where we could be heading.


>The sociological/psychological fallout of AI is not decades away: right here, right now, we are watching in slow-motion the major meltdown of our shared sense of reality. The only thing that can save civilization from utter destruction? Basic English grammar. Hear me out, guys. Part One: Introducing the idea: “If the disease stems from a […]

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/08/W4/present-company.html#2023-08-23T18:35:54.702Z)

So it looks like my current term contract doing Rules as Code for the gov't of Canada will expire in a couple of months. If you have generic advice about how to do a job search when your expertise is so niche as to be almost singleton, let me know. 🙂

