<!--
.. title: Future of Coding Weekly 2024/01 Week 2
.. slug: future-of-coding-weekly-202401-week-2
.. date: 2024-01-08 00:09:21 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

💡 Communicating programming ideas 📑 On simplicity 🎥 What even is code?

# Our Work

💬 **Robin Allison**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/share-your-work.html#2024-01-04T06:22:58.649Z)

I really like TodePond's video "Screens in Screens in Screens". I've been wanting to do the same kinda thing with mathematical formulas instead of shapes, a kind of "formulas in formulas in formulas", but I'm an awful programmer so I'll describe some math you can do to that effect. Apologies in advance for the shoddy explanation though.



Here's a thing you can do with "screens". You can name screens. Start with some screens A B C. Then if C is inside A, and A and B are the same color, then there is a copy of C inside B. What do you call this copy? "The copy of B from A to C"? It will be convenient if we give it a symbolic name. Call it (A->B)C. Or if you are really hardcore you can call it just t(A,B,C) where t is a ternary operator describing the result of copying C from A to B. You may think to only consider (A->B)C when C is inside A, but the math becomes tractable if you consider all screens at once. Then we can stipulate some axioms:

1. (A->A)B = B

2. (A->B)A=B

3. (B->C)(A->B)=(A->C)

3. (A->(X->Y)A)=(X->Y)

The first axiom means if you are copying a screen from one screen to itself, you aren't changing anything. The second axiom is "obvious" except for considering (A->B)A in the first place. The third axiom means if you copy a screen from A to B and then from B to C that is the same as if you were to copy it from A to C directly. It is also shorthand for (B->C)((A->B)D) = (A->C)D for all screens D. The fourth axiom takes a bit more explaining. Basically we want this equation to be true whenever A is in X, and both sides are being used to copy something from A. But our theory at this point doesn't have a predicate for "A is contained in X" so we say it holds in all cases.



With these axioms you can show the operators (A->B) form an algebraic structure called a group: You can multiply them by performing one copy after the other (C->D)(A->B). This operation is associative (I mean, it must be), and has an identity element and inverses. The identity being (A->A) and the inverse of (A->B) being (B->A).



Another perspective is to view screens as points in an affine space (i.e. vector space without a specified origin). Then (A->B)C can be thought of as (B-A)+C, and each of the axioms above can be interpreted as vector equations. This isn't a good model though because it ends up saying some screens are the same when they should be different. You can still take the above axioms and show that screens form a generalization of affine spaces called torsors.



I'll share more if anybody is interested. It really needs a much longer write up, but I thought somebody might know if its already been done before.



📝 [Don't strip the meaning away from your runtime](https://marianoguerra.org/msite/human-server-protocol/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/share-your-work.html#2024-01-04T17:27:43.636Z)

[Don't strip the meaning away from your runtime](https://marianoguerra.org/msite/human-server-protocol/): Exploring extending programming languages to include descriptions in the domain of the problem and solution



Spoiler alert: interactive example inside 🙂



First draft, feedback welcome!

📑 [On simplicity](https://stefanlesser.substack.com/p/on-simplicity) via [Stefan Lesser](https://twitter.com/stefanlesser)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/share-your-work.html#2024-01-06T19:02:44.240Z)

A few weeks ago I started a new series of blog posts (or “newsletters”, in Substack parlance) about  *simplicity* :



1 • [On simplicity](https://stefanlesser.substack.com/p/on-simplicity) introduces the series with how my thinking about simplicity has changed over the years.

2 • [Meaning-ful design](https://stefanlesser.substack.com/p/on-simplicity-2-meaning-ful-design) connects simplicity to meaning making and coherence.

3 • [Familiarity](https://stefanlesser.substack.com/p/on-simplicity-3-familiarity) explores how complex things can be surprisingly simple and why we can’t ignore context.

4 • [Reciprocal realization](https://stefanlesser.substack.com/p/on-simplicity-4-reciprocal-realization) frames design as a complex dynamic process of mutual adaptation between designer and designed object.

…  _I expect about four or five more posts coming after that, but I haven’t written them yet, so I have no idea._ 🙂



A lot of this draws on 4E cognitive science, design theory, and philosophy. As such it may perhaps be less technical than you would expect it to be, although I try much harder in this series to relate it more directly to programming and software development than in [my last](https://stefanlesser.substack.com/p/previously-a-recap).



And that’s why I post it here, today. I’m hoping to learn if this resonates at all with a technical audience, or if this is still too abstract. I know we’re all craving for the easily applicable  _Top 10 Things to Make Things Simple_  (and number 6 will surprise you), but I have reason to believe that it’s just not that… well… simple. But I think I’m slowly making progress towards synthesizing something valuable, even if I can’t express it as beautifully as I would like to. Yet.



Let me know what you think, and please ask any questions you may have (in thread or via DM). Appreciate your feedback!



💬 [Jim Meyer](https://twitter.com/jimmeyer)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/share-your-work.html#2024-01-07T18:18:35.602Z)

Spinners are boring, so might as well get creative with AI UX for loading states, even with fast LLMs like Mixtral.



The thinking is to not only show multiplayer presence on our canvas, but also what the AI is doing and working on, including visualizing the code its writing in real-time.

![henosia-ai-code-minimap.gif](http://history.futureofcoding.org/history/msg_files/F06/F06CL8JNRCN.gif)


# Devlog Together

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/devlog-together.html#2024-01-01T16:45:01.357Z)

I think I have a usable app development experience now on my tablet. I basically took my recent Lua Carousel and made a few changes. In Carousel (first clip) you start in the programming environment, each screen runs a separate script, scripts run in the background of the editor, and each screen manages its own canvas. The new setup (second clip) starts in the app, which takes over the entire device until I 'exit' into the programming environment. In the programming environment, screens are now just editors with a shared 'run' button and canvas. Hopefully I can now finish polishing this  ~turd~  app entirely on the tablet.

🎥 [dash-baseline](http://history.futureofcoding.org/history/msg_files/F06/F06CR52NK4G.webm)

🎥 [dash](http://history.futureofcoding.org/history/msg_files/F06/F06CR52S072.webm)

💬 [Oleksandr Kryvonos](https://twitter.com/o_kryvonos)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/devlog-together.html#2024-01-02T21:38:05.027Z)

I built a bare-minimum in-browser text editor,

it saves files immediately on every key press,

I also created a history of revisions but realised I do not need them, git works good enough for now.

🎥 [Demo](http://history.futureofcoding.org/history/msg_files/F06/F06CKLQBX1P.mov)

⚽ [Some squishy balls](https://akkartik.itch.io/carousel/devlog/660061/some-squishy-balls) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/devlog-together.html#2024-01-03T21:22:56.470Z)

🎥 [boids](http://history.futureofcoding.org/history/msg_files/F06/F06BXNDPCA3.webm)

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/devlog-together.html#2024-01-05T18:47:02.634Z)

So I've only been a real developer again for a month, but holy cow. I would have thought keeping your data persistence layer in sync with your code would be easier than this, by now. Irritating.

# Thinking Together

💡  Communicating programming ideas by [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/thinking-together.html#2024-01-01T21:17:17.966Z)

Someone reached out to ask me for more thoughts about communicating programming ideas through media other than the academic paper. I wrote a reply, and then decided it would be worth sharing here to see if other folks have their own inspirations they'd like to share, or ideas for how our industry can go  _paper-free_  ;)



---



I feel like I owe reading an apology. I certainly try to play up my "crank" side on the podcast, but it does run the risk of mixing-up  _this is being silly_ with  _this is thoughtful critique_ .



I have tremendous reverence for the communicative potential of the written word. I just think there are some kinds of ideas that lend themselves better to other forms of expression, or some ideas that can't be written down.



For instance, it's very strange to me whenever I read a paper about HCI, especially if they're discussing GUI ideas. Sure, often these papers will be accompanied by a video. But, like, the work being described is about  _interacting with interfaces_ . I think the work should be presented as an interface you can interact with!



I'm especially fond of [Bret](http://worrydream.com)'s essays, naturally. [Bartosz](https://ciechanow.ski) also does great work with visualization, though I feel like he leans a little too heavily on text and that the visualizations are too linear. [Amit](https://www.redblobgames.com) also does excellent work, but he has the advantage that most of the things he demos are inherently about interactive graphics so they lend themselves naturally to this sort of presentation (not to diminish the incredible effort Amit puts in to these articles).



The thing I want to see more of is… people finding ideas that can  _only_  be expressed through interaction. I think successfully achieving this requires that someone work natively in interaction, a lot, for a long time. As a result, most of these ideas seem to emerge in the periphery of video games.



One of my favourite examples is [Dys4ia](https://w.itch.io/dys4ia), a collection of microgames about the trans experience. It uses written language and (meaningfully crude) visual art to set up the  _plot_ , but interaction to tell the  _story_ .



Something I'm very interested in seeing (and have made a few attempts at myself, but nothing worth sharing) is an attempt to create a fully-usable programming environment  _presented as a game_  specifically for the purpose of communicating ideas about programming. There've been plenty of the inverse, where a programming system is the setting within which a game takes place (see all the works of [Zachtronics](http://zachtronics.com), for instance), but I haven't seen anyone do a game as the setting within which actual programming takes place. Closest to that might be something like Minecraft or Dreams (etc), but I don't think those were designed to communicate ideas about programming the way, say, The Witness was designed to communicate a philosophy of science.



Another close comparison might be Advent of Code, where you playfully approach programming differently than in your normal work. The programming you do for AoC should feel meaningfully different. Similarly, imagine building your own Rosetta Code from scratch. That should give you a really particular feeling. I think it's related to, say, the feeling of writing a rasterizer for the dozenth time. I think these feelings are ideas, and that there's a whole language of them, and that the language is expressed through the creation of systems. I think if we studied this language, it would guide us toward building different kinds of tools.



And hell, you might eventually be able to write a paper about that. (Countdown to someone arguing that this is what Christopher Alexander has made a career of, in a sense.) But I don't think we will arrive at those system-feeling ideas in any way other than by building and playing with systems, and with a particular intention at that.



📖 [tiktok.com/@etymologynerd](https://www.tiktok.com/@etymologynerd?lang=en) via [Steve Krouse](https://twitter.com/stevekrouse)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/thinking-together.html#2024-01-04T13:26:04.684Z)

Hey friends!



I don't know if you're familiar with this harvard linguist on tiktok but he's the best: [tiktok.com/@etymologynerd](https://www.tiktok.com/@etymologynerd?lang=en)



I think it would be AWESOME if someone from "our community" would make those style of tiktoks, but about computer and programming history. I think it would become quite popular and be super enriching and educational



I have some amount of capacity to help and sponsor this, but I mostly wanted to put it out there as a general request for someone in our community to take up the gauntlet in this new medium

💬 **Ivan Lugo**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/thinking-together.html#2024-01-06T16:05:41.625Z)

Heya internetpeoples ❤ I’ve spent a long time refining this and brought in “The LLMs” to help craft the tone here, and I think I’ve finally gotten it to a point where I feel like it hits my message and question, and doesn’t assume too much negativity or… doomcalling, heh. Thanks for the time and shared space, as always.



---



I’ve despaired when stuck on problems I just couldn’t crack. I’ve also felt the joy of those “aha!” moments when things finally click. We’ve all been there as coders. While documentation and searches can help fill gaps, little replaces another human sitting alongside, guiding with patience earned from experience. In those moments when someone more seasoned gave guidance, I felt hope renewed. How might we foster more of these vital human connections?



Key Discussion Points:



-  *Knowledge flows when passion meets patience* . I’m grateful for the patient coders who “reached down” to guide me. Let’s discuss barriers hampering these relationships. Generalizations about certain groups being “unwilling” to help are counterproductive. However, empathetic mentorship remains scarce. How might we change incentives?



- Truly supporting newcomers requires understanding their frustrations are valid. I want to open a thoughtful discussion on constructive ways we can keep improving in this regard.



- There are always exceptions by those dedicated to lifting others up. But much room remains for improving access, channels and incentives for more direct peer sharing across experience levels. It’s on each of us to reflect on where we can have an impact.



 I welcome reactions, shared experiences, and dialogue toward that aim. How might we strengthen coder communities through human connections? Where do you see the biggest opportunities? Together, I believe we can guide positive change.

# Content

📼 [Cassette is a small, Lisp-like programming language](https://cassette-lang.com/) via **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/linking-together.html#2024-01-03T18:58:29.354Z)

I ran across [Cassette](https://cassette-lang.com/), a programming language today. I liked some of the stuff on the webpage and think it is interestingly aligned with the Future of Coding community.






> I made Cassette as a simple language for “playful programming”. Playful programming is writing something for the sake of writing it. It’s making a software 3D renderer or a GIF reader, even though better implementations of those already exist. It’s making generative art programs and drawing them with a pen plotter. Cassette itself is playful programming—there are certainly other scripting languages that may be better for personal projects like these, but this one is mine.



Continuing,






>  *In particular, I wanted Cassette to feel “essential”, where each aspect of the language reflects some fundamental aspect of computing* 
>  (from a functional language perspective, at least). For example, I consider garbage collection, lexical scopes, and immutable types essential. The result is a little boring, but I hope it’s a good platform to play with other programming concepts.



 *Emphasis*  mine.



📝 [This looks fun: Creative Coding 2024](https://web.sas.upenn.edu/dream-lab/creative-coding-2024/) via **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/linking-together.html#2024-01-04T21:32:53.170Z)

[This looks fun](https://web.sas.upenn.edu/dream-lab/creative-coding-2024/)

🎥 ["What even is code? Building a non-code coding interface" - Katie Bell (LCA 2021 Online)](https://www.youtube.com/watch?v=UH0A2iujtY8) via **Nilesh Trivedi**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/linking-together.html#2024-01-07T00:23:04.303Z)

![Youtube Thumbnail](https://img.youtube.com/vi/UH0A2iujtY8/hqdefault.jpg)

by **@Katie Bell** is 👍

# 🤖

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/01/W2/of-ai.html#2024-01-07T08:21:21.798Z)

Is anyone aware of any papers on LLM assisted code generation inside a visual programming environment? I've only seen one. I'm going to be doing some experiments later this month, and I don't really know the state of the art.


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://tinyletter.com/marianoguerra/) / [Archive](https://newsletter.futureofcoding.org/) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
