<!--
.. title: Future of Coding Weekly 2023/11 Week 3
.. slug: future-of-coding-weekly-202311-week-3
.. date: 2023-11-20 00:59:21 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🎙️ FoC 68 Philip Wadler: Propositions as Types 🧠 Neurosymbolic Programming 🐟 The Object Network for goldfish

# Our Work

🎥 [New Jersey Cards](https://www.youtube.com/watch?v=ZoVvYf0knK0) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/share-your-work.html#2023-11-14T13:24:54.607Z)

![Youtube Thumbnail](https://img.youtube.com/vi/ZoVvYf0knK0/hqdefault.jpg)

🗂 New Jersey Cards: Worse Cards are Better



> Simple textual format to keep practice notes.



📝 Capture & practice content in Markdown-ish

  - Question -> Answer & Optional Notes

🎼 Extensions to display guitar chords and music scores with ASCII-art

📟 Runs on anything that can serve static files



💻 [github.com/marianoguerra/nj-cards](https://github.com/marianoguerra/nj-cards)


📝 [The Object Network for goldfish](https://open.substack.com/pub/duncancragg/p/the-object-network-for-goldfish?r=1sq2dz&utm_campaign=post&utm_medium=web) via [Duncan Cragg](https://twitter.com/duncancragg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/share-your-work.html#2023-11-15T19:03:43.858Z)

Hiya - my latest article - "The Object Network for goldfish" - is out!




I tried to simplify the message down to the bare minimum. Let me know if that works for you! You may have to be a goldfish to understand it, mind.

>An OS with no apps frees our data from the "app trap"

🎙️ [FoC 68 Philip Wadler: Propositions as Types](https://futureofcoding.org/episodes/068) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/share-your-work.html#2023-11-19T06:02:25.504Z)



The subject of this episode’s paper — [Propositions as Types](https://homepages.inf.ed.ac.uk/wadler/papers/propositions-as-types/propositions-as-types.pdf) by [Philip Wadler](https://en.wikipedia.org/wiki/Philip_Wadler) — is one of those grand ideas that makes you want to go stargazing. To stare out into space and just disassociate from your body and become one with the heavens.  _Everything — life, space, time, existence — all of it is a joke!_  A cosmic ribbing delivered by the laws of the universe or some higher power or, perhaps, higher order. Humanity waited two thousand years, from the time of the ancient Greeks through until the 1930s, for a means to answer questions of calculability, when three suddenly arrived all at once:




* General recursive functions by Gödel in 1934, with functions of sets of natural numbers.
* Lambda calculus by Alonzo Church in 1936, with anonymous single-variable functions.
* Turing machines by Alan Turing in 1937, with a process for evaluating symbols on a tape.

Then it was discovered that these three models of computation were, in fact, perfectly equivalent. That any statement made in one could be made in the others. A striking coincidence, sure, but not [without precedent](https://en.wikipedia.org/wiki/Multiple_discovery). But  _then_  it was quietly determined (in 1934, again in 1969, and finally published in 1980) that computation itself is in a direct correspondence with logic. That every proposition in a given logic corresponds with a type in a given programming language, every proof corresponds with a program, and the simplification of the proof corresponds with the evaluation of the program.

The implications boggle the mind.  _How could this be so?_  Well, how could it be any other way? Why did it take so long to discover? What other discoveries like this are perched on the precipice of revelation?

Philip Wadler is here to walk us through this bit of history, suggest answers to some of these questions, and point us in a direction to search for more.

And  _we_  are here, dear listener, to level with you that a lot of this stuff is miserably hard to approach, presented with the symbols and language of formal logic that is so often inscrutable to outsiders. By walking you through Wadler’s paper (and the much more approachable [Strange Loop talk](https://www.youtube.com/watch?v=IOiZatlZtGU)), and tying it in with the cultural context of modern functional programming, we hope you’ll gain an appreciation for this remarkable, divine  _pun_  that sits beneath all of computation.

# Devlog Together

💻 [MiniIDE: live code inside a LOVE app](https://love2d.org/forums/viewtopic.php?t=94852&sid=17d299656ea4089c33971e89a9d54f6a) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/devlog-together.html#2023-11-15T16:40:55.619Z)

I seem to have renewed my collaboration for a tablet-friendly programming environment. For the [current version](https://love2d.org/forums/viewtopic.php?t=94852), my partner led and pushed for preserving LÖVE primitives. For example, the LÖVE event loop calls functions you define called  `love.draw` ,  `love.keypressed` , etc., and it seems desirable to continue to support those for familiarity's sake. This can seem impossible if the environment is also built in LÖVE and uses those same functions for providing its infrastructure, but since Lua is a dynamic environment there are tricks to make it work reasonably nicely.



Lately I've been taking the lead on a riff of that project, and I find I'm advocating strongly to  _not_  do this. I want to define new handlers like  `shell.draw`  and  `shell.keypressed`  that programs within my environment will have to call. And I finally figured out why I feel so strongly about this:




* LÖVE has a function to return the bounds of the device/window. You typically can draw between x coordinates 0 and some width. And this information is often used to draw UI elements near the edges and corners. So should we now override functions like  `line`  to adjust coordinates and keep them in the client area? There's a lot of surface area to cover here. Bugs will inevitably happen, and when they do our attempts to create a seamless abstraction will cause more confusion.
* Ranting more broadly, the desire for a "seamless experience" is a disease. The provider wants to "own the customer relationship," so that the user can forget there's anything in the universe but themselves and the app. Just like a casino. I'd rather not pretend we can wish the universe away with its possibility of errors. Let's me and the user treat each other as grown-ups, and not hide irreducible complexity in our supply chains. Here are the functions I provide, here are the functions LÖVE provides. I recommend you use my stuff where possible, but you don't have to. Yes, it's confusing. Welcome.

![carousel-shell-mockup.png](http://history.futureofcoding.org/history/msg_files/F06/F065TCK9XS9.png)


💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/devlog-together.html#2023-11-16T18:10:16.496Z)

Last night I built a little program to help first-graders drill on addition -- and promptly found a bug while recording this 😂 (You can see me show the generated solution at the end. It's wrong!)



(Fear not, this will go through usability/correctness testing with the teacher/mother before the kids are subject to it.)

🎥 [Sum Grid Demo](http://history.futureofcoding.org/history/msg_files/F06/F065P7NBVBR.webm)


🎥 [Creating a basic glsl shader using a pull-based flow](https://youtu.be/_VvoZbsmces) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/devlog-together.html#2023-11-18T17:55:43.951Z)

![Youtube Thumbnail](https://img.youtube.com/vi/_VvoZbsmces/hqdefault.jpg)

Hi, since I've started building visual programming systems, I have always used a push-based approach where a node triggers another node that follows it. This is much inspired by flow based programming. But since I want to build a generic visual programming system, I think that it is also important to support different ways.. basic statecharts I already support, but a pull-based system is not yet something that I had build with my system. Until now! .. so in this video you can see how I construct a flow that is used to construct a glsl fragment shader. Here the output node pulls in the data from the node's cominh before it in the flow, so working backwards through a flow. 



Although it's not my goal to build a full product around this alone.. a lot better and much more extensive applications already exist for building shaders this way. But still helpful to look at my project from a different perspective, which leads to some refactoring, bug fixing, insights and inspiration.



Yesterday I was really in doubt if this was the right route for this week's time spent on my project because of the awesome demo that tldraw made with gpt4-vision api, very cool! So,I also had to play with it together with my own application and was also amazed with the possibilities! Probably my next video will have this as a topic. Anyway, for now, enjoy my short video where I construct a very simple shader which runs on the GPU via webgl.

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/devlog-together.html#2023-11-19T00:35:20.193Z)

I'm finally starting to think about scrollbars.

![scrollbars](http://history.futureofcoding.org/history/msg_files/F06/F066FUMPVRA.png)

🎥 [Scrollbar Demo](http://history.futureofcoding.org/history/msg_files/F06/F066FUMSN2G.webm)

# Thinking Together

💬 **Gregor**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/thinking-together.html#2023-11-13T17:28:16.554Z)

Is there a good catalogue of programming languages? Preferably with the option of searching by feature or comparing languages on some dimensions?

📝 [Life-critical side projects](https://notes.billmill.org/link_blog/2023/11/Life-critical_side_projects.html) via [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/thinking-together.html#2023-11-18T16:30:49.419Z)

[Kartik Agaram](http://akkartik.name/about) It wasn’t on-topic in the thread you started a while back, my but first thought when considering building software like that is “Writing a social media app is frightening” (or more generally, “Storing user data is frightening”), as this post just reminded me: [Life-critical side projects](https://notes.billmill.org/link_blog/2023/11/Life-critical_side_projects.html)

💬 [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/thinking-together.html#2023-11-19T14:58:02.617Z)

I built a Magic Inky interface at work a while back. A metadata editor that presented as a nested bulleted list of English sentences with clickable words, like:



“From [time T1] to [time T2], an [event type] happens with [property P], and it’s very [adjective].”



The event descriptions are highly multi-dimensional and resonate well with this information design, though the timestamps suffer a bit. They want to be on a timeline, but I didn’t have the budget. Despite this, the UI has saved us loads of time and people  ~_*love*_~  the sentence-based configuration compared to the forty-column table of dropdowns they envisioned when I started the project.



The biggest failure was that enforcing a few global constraints was  ~_*also*_~  outside my budget. Lacking those has led to data loss—never more than a few minute’s worth, but still. I felt bad. Thankfully, someone else recently picked up the project and will be correcting those omissions.



But we disagreed immediately on how to do it! I thought we should  ~_*present*_~  the errors: “These events overlap!” The other person thought we should make the errors impossible: when you edit a timestamp, you implicitly edit all the others that are involved in the constraint.



I generally agree with their approach. I mean, it’s baked into the rest of the UI. When you change an event type, it changes the rest of the sentence. But if you change the type back, the sentence structure is restored and your previous values all come back. Cascading edits are more destructive than that. They force you to be careful about what you change and to be observant of unintended side-effects.



The block editor problem of representing invalid states is another way to look at it. Sometimes the most efficient path between two valid states passes through an invalid one. If you want to reorder two events, for example, a first step might be to copy the start and end times from one to the other, as part of an “a = b; b = oldA” sequence. They overlap until you’re done. To do the same without ever breaking global constraints requires user ingenuity or a more featureful editor with a “swap events” button. Requiring user ingenuity wastes a lot of time and energy and happiness over the lifetime of the UI, but observing users and adding features to address every desired editing operation takes a lot of dev time too, and it has to happen  ~_*now*_~ , or else people editing this data will be blocked whenever they find an impossible edit.



Anyway, not too many answers here, but I thought it was an interesting case study, with thought-provoking  ~_*questions*_~  at least!

🐦 [Tweet from @mrmkrs](https://twitter.com/mrmkrs/status/1725959207365583196) via **Scott**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/thinking-together.html#2023-11-19T18:28:26.013Z)

An idea is starting to form for me around prototype-based modeling being a good metaphor for programming effectively with LLMs. Essentially you can provide an example of a patttern/component/class/etc and have it return a version of it modified in specific ways, which can then be used as a prototype for future generations/instantiations.



A version of this idea can be seen [here with tldraw](https://twitter.com/mrmkrs/status/1725959207365583196) where he generates the next more specific interface step off the previous one.



Another I'm kind of using this in my agent framework: [generate_sublayer_agent_agent.rb](https://github.com/sublayerapp/sublayer/blob/main/lib/sublayer/agents/generate_sublayer_agent_agent.rb) where we generate new agents based off a simple agent template (and works surprisingly well).



I know Hofstatder digs into this concept in GEB and Steve Yegge calls it the [Universal Design Pattern](https://steve-yegge.blogspot.com/2008/10/universal-design-pattern.html)



Does this resonate with anyone here? Is anyone familiar with any other writing about prototype-based modeling/prototypal inheritance/etc for me to take this further?

# Content

📝 [I’m excited to see where this 3rd party screen-reader for macOS goes.](https://www.applevis.com/forum/app-development-programming/work-progress-vosh-third-party-screen-reader-macintosh) via **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/linking-together.html#2023-11-13T14:56:22.712Z)

[I’m excited to see where this 3rd party screen-reader for macOS goes.](https://www.applevis.com/forum/app-development-programming/work-progress-vosh-third-party-screen-reader-macintosh) On windows there are 2 first-in-class options available outside of the OS, JAWS and NVDA. On macOS there is only the system provided VoiceOver.



I think VoiceOver is a pretty solid competitor to NVDA, but, it is very very very opinionated, and makes some unusual choices. I think this has a knock on effect where, since VoiceOver is the easiest screen-reader for most web devs to reach for, a lot of implementations end up being hyper-focused on supporting VoiceOver’s specific flavor of handling the accessibility tree. Having more diversity in the space, I think could hopefully mitigate this. While this isn’t directly related to the future of coding as we normally talk about it here, I think projects like this are just the sort of thing that can help to shape things for years to come.



🎥 [Editing Motion Graphics Video via Motion Vectorization and Transformation](https://www.youtube.com/watch?v=5uZnTskMOTc) via [Jack Rusher](https://twitter.com/jackrusher)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/linking-together.html#2023-11-13T16:34:26.976Z)

![Youtube Thumbnail](https://img.youtube.com/vi/5uZnTskMOTc/hqdefault.jpg)

Inferring SVG animations from motion graphics videos, then providing various tools to edit the inferred material

🎥 [Neurosymbolic Programming - Yisong Yue](https://www.youtube.com/watch?v=16X0RB_YrvE&amp;t=1330s&amp;ab_channel=caltech) via **Dany**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/linking-together.html#2023-11-14T05:25:05.650Z)

![Youtube Thumbnail](https://img.youtube.com/vi/16X0RB_YrvE/hqdefault.jpg)

This may interest you. It talks about combining programming by example (ML) and traditional means.

📝 [Designing a Programming Language to Speedrun Advent of Code](https://blog.vero.site/post/noulith) via **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/linking-together.html#2023-11-14T19:47:54.481Z)


>“shouldn’t this have been published a few months ago?” yeah, probably. I even considered submitting it to the AoC contest. time is a real beast.
The title is clickbait. I did not design and implement a programming language for the sole or even primary purpose of leaderboarding on Advent of Code. It just turned out that the programming language I was working on fit the task remarkably well.
I can’t name just a single reason I started work on my language, Noulith, back in July 2022, but I think the biggest one was even more absurdly niche: I solve and write a lot of puzzlehunts, and I wanted a better programming language to use to search word lists for words satisfying unusual constraints, such as, “Find all ten-letter words that contain each of the letters A, B, and C exactly once and that have the ninth letter K.”1 I have a folder of ten-line scripts of this kind, mostly Python, and I thought there was surely a better way to do this. Not necessarily faster — there is obviously no way I could save time on net by optimizing this process. But, for example, I wanted to be able to easily share these programs such that others could run them. I had a positive experience in this with my slightly older golflang Paradoc, which I had compiled into a WASM blob and put online and, just once, experienced the convenience of sharing a short text processing program through a link. (Puzzle: what does this program do?) I also wanted to write and run these programs while booted into a different operating system, using a different computer, or just on my phone.
...

🎥 [CrystalConf 2023](https://www.youtube.com/playlist?list=PLt-CsM4G1WoadONHl3zPN_Ts5PqH8TgMZ) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/linking-together.html#2023-11-17T14:23:43.880Z)

practical Diagrams as Syntax for program development at [Kagi.com](http://Kagi.com)

# 🤖

💬 **Marcelle Rusu (they/them)**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/of-ai.html#2023-11-15T13:46:52.366Z)

I don't know much about LLMs, so I'm purely asking out of ignorance.



AFAIK Open AI has a powerful LLM system in large part due to large compute power.



Is there a future where small business / people can compete with mega-corps in the LLM space, or will we be renting GPT (or similar) until end the of time?

📝 [OpenAI announces leadership transition](https://openai.com/blog/openai-announces-leadership-transition) via [Josh Cho](https://twitter.com/JoshCho321)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/of-ai.html#2023-11-18T01:58:07.524Z)

📝 [Humane officially launches the AI Pin, its OpenAI-powered wearable](https://www.theverge.com/2023/11/9/23953901/humane-ai-pin-launch-date-price-openai) via [Daniel Garcia](https://pel-daniel.github.io/cv/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W3/of-ai.html#2023-11-18T19:40:27.242Z)


