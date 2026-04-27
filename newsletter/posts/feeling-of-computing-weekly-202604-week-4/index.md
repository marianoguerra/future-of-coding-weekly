<!--
.. title: Feeling of Computing Weekly 2026/04 Week 4
.. slug: feeling-of-computing-weekly-202604-week-4
.. date: 2026-04-27 09:07:05 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->


# devlog-together

💬 **Kartik Agaram**

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-22&to-date=2026-04-24&selected=1776918594.118399)

A visualization of the Sieve of Eratosthenes

Each number on the x axis shows its largest prime factor in the y axis. When the largest prime factor is itself, the number is prime and the bar is highlighted in blue.

You can see multiples of prime numbers if you scan at any particular height from left to right.

The usual 2D arrangement is necessary on paper or a non-interactive medium, but if you have a touch screen with pan and pinch zoom it seems nicer to spread the numbers out in a single line.

There's an overlay always visible to show you which number each bar is for. Where the bar occludes the overlay it's easy to deduce from neighboring numbers on the overlay.

Each composite mentions its largest prime factor, so you can see at a glance why it's composite. And scanning to the left also gives you a visual "proof" of compositeness; you can see the grey bars of that height stretching leftward at a regular cadence.

📑 Resources

![sieve1](https://history.futureofcoding.org/history/msg_files/F0A/F0AUMLMHR37.png)

![sieve2](https://history.futureofcoding.org/history/msg_files/F0A/F0AV40NET7T.png)

![sieve3](https://history.futureofcoding.org/history/msg_files/F0A/F0AV40NE96D.png)


# linking-together

💬 **Medet Ahmetson**: [Flipbook](https://flipbook.page/)

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-22&to-date=2026-04-24&selected=1776946173.002799)

[Flipbook](https://flipbook.page/) 

Did you see it? Anyone knows similar but for interfaces? 


---

💬 **Dennis**: [x.com liamflannery56 status](https://x.com/liamflannery56/status/2046997641825821004/video/1?s=46)

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-22&to-date=2026-04-24&selected=1776915516.253419)

I think this belongs here [x.com liamflannery56 status](https://x.com/liamflannery56/status/2046997641825821004/video/1?s=46) 




# present-company

💬 **Jasmine Otto**: [Liveness + Agency – Stochastic Labs](https://stochasticlabs.org/liveness-agency/)

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-21&to-date=2026-04-23&selected=1776884873.534789)

Sharing a CFP for Stochastic's summer residency in Berkeley, CA. The tech-art scene in the East Bay is super lively, here's a way to live it for two months. Also a great excuse to chat with **@Max Kreminski** or with Joel Simon about your proposal - they're good folks. [https://stochasticlabs.org/liveness-agency/](https://stochasticlabs.org/liveness-agency/)



# reading-together

💬 **Karl Svartholm**: [55 • Man-Computer Symbiosis by J.C.R. Licklider](https://feelingof.com/episodes/055/)

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-24&to-date=2026-04-26&selected=1777130936.932799)

Just relistened to the 4 year old FoC episode on Man-Computer Symbiosis by J.C.R. Licklider: [https://feelingof.com/episodes/055/](https://feelingof.com/episodes/055/)
Sort of uncanny now. The skepticism made sense then, but post-LLMs it feels a lot more like Lickie was describing the thing starting to arrive now...

# share-your-work

💬 **Scott**: [aland — artifact.land from your terminal](https://artifact.land/cli)

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-24&to-date=2026-04-26&selected=1777153387.723219)

Also something else that might be interesting to some of you here - I'm playing around with this UX idea of "bring your own claude code" or "bring your own agent" - instead of me setting up any inference or AI on my site, it's designed so that you can point your claude code at it and build things rather than having to pay for a subscription and buy credits and all that nonsense... I gave a talk about it yesterday to another group but also happy to share more here if anyone is interested... the start of the idea is here: [https://artifact.land/cli](https://artifact.land/cli)

---

💬 **Scott**: [Artifacts Are Alive (And Photographs are Dead)](https://worksonmymachine.ai/p/artifacts-are-alive-and-photographs)

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-24&to-date=2026-04-26&selected=1777153273.814139)

I've been pretty addicted to getting Claude to build the little standalone html/javascript artifacts lately and a few of my friends have caught the bug. I feel like there are a lot of possibilities with them - beyond just creating tons of Bret Victor-style explorable explanations (which is also a ton of fun). Wrote up a little piece about it and this idea around a social network for software that might become possible: [Artifacts Are Alive (And Photographs are Dead)](https://worksonmymachine.ai/p/artifacts-are-alive-and-photographs)

---

💬 **Ivan Reese**: [this lil interactive art project](https://inkandswitch.com/project/tenfold)

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-22&to-date=2026-04-24&selected=1776987141.372509)

I've spent the last (checks time machine) _six months_ chipping away at [this lil interactive art project](https://inkandswitch.com/project/tenfold) to celebrate the 10th birthday of Ink & Switch.

Would love for you to go play with it, then join the FoC virtual meetup next Wednesday to learn some of the cool inner workings.

---

💬 **Mariano Guerra**: [Tutuca Update: Storybook in Storybook ](https://www.youtube.com/watch?v=qIa6Uzoq00Q)

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-19&to-date=2026-04-21&selected=1776675609.210029)

[Tutuca Update: Storybook in Storybook ](https://www.youtube.com/watch?v=qIa6Uzoq00Q)🐢[️](https://www.youtube.com/watch?v=qIa6Uzoq00Q)

- Storybook component
- Drag and drop support on mobile
- Performance improvements, removed generators, iterators, indirection and allocations
- Detect and avoid infinite recursion
- Fix a bug with computed properties inside a render-it directive


# thinking-together

💬 **curious_reader**: [Folk Tech Showcase! - April 2026 - Project Show & Tell · Luma](https://luma.com/h0o701wf)

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-24&to-date=2026-04-26&selected=1777135929.110299)

Hey 👋 ,
has anyone heard of [Folk Tech Showcase! - April 2026 - Project Show & Tell](https://luma.com/h0o701wf) "Folk Tech"? Is that related to the Folk Computer?

---

💬 **Jasmine Otto**: [explainers/css-spatial/explainer.md at main · WebKit/explainers ](https://github.com/WebKit/explainers/blob/main/css-spatial/explainer.md)

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-21&to-date=2026-04-23&selected=1776885908.253879)

**@Brandel Zachernuk**'s team has launched a css-spatial proposal with an elegant page vs. portal metaphor - whether components are above or beneath the screen plane. Portals enable techniques like parallax, a powerful 2.5D effect used in sidescrolling videogames for decades. Excited to see it on the web.
[https://github.com/WebKit/explainers/blob/main/css-spatial/explainer.md](https://github.com/WebKit/explainers/blob/main/css-spatial/explainer.md)

---

💬 **Konrad Hinsen**: [Slack Thread](https://feelingofcomputing.slack.com/archives/C5T9GPWFL/p1776479270748729)

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-20&to-date=2026-04-22&selected=1776783063.484399)

Another [discussion in this thread](https://feelingofcomputing.slack.com/archives/C5T9GPWFL/p1776479270748729) reminded me of [a paper](https://hal.science/hal-01425868/document) on linguistics and programming languages that I read a while ago. The paper is in French, but in the days of automatic translation that shouldn't be a problem any more (OK, I admit I never tried to have a whole paper translated). It discusses the differences between formal languages used in CS theory (e.g. lambda calculus) and formal languages used to write actual programs, and notes that the latter have many characteristics of natural human languages that one wouldn't expect in formal systems from a purely formal point of view. Examples given are traces of historical evolution, such as traces of K&R C in ANSI C, redundancies such as multiple formally equivalent loop constructs (while / until etc.), expletives such as no-ops and comments, etc. Another argument is the existence of a "literature", e.g. the Unix source code as a literature for C.

---

💬 **Jason Morris**

[🧵conversation](https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=2026-04-19&to-date=2026-04-21&selected=1776650906.040769)

I'm trying to wrap my head around the idea of "MCP Apps", but I'm having difficulty knowing if any of the metaphors track. It's an app interface in an iFrame in your AI chat. So if it's a coding environment app, it is sort of like an inversion of "an agent in your IDE" to "an IDE in your agent". Does that matter? It feels like it might just because conversation is the dominant interface, and that is going to be more approachable for more people. But I don't know what it means about the ephemerality of the IDE inside the chat. Like, at what point is it no longer expected to maintain state with the repository? When it scrolls out of view? When there's a newer one? Does anyone have an intuition for it they can share? Interactive read-only views seem easy enough to integrate into that workflow, but having stateful apps feels really weird. Conversations are append only.


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🦋 [@marianoguerra.org](https://bsky.app/profile/marianoguerra.org)

💬 Not a member yet? Check the [Feeling of Computing Community](https://feelingof.com/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Feeling of Computing Podcast](https://feelingof.com/episodes/)

