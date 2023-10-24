<!--
.. title: Future of Coding Weekly 2023/10 Week 4
.. slug: future-of-coding-weekly-202310-week-4
.. date: 2023-10-24 10:56:58 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🏗️ Gradual Structure Editing 💡 Notation as a tool of thought 🔗 Live 2D Compositional Programming

# Two Minute Week



# Our Work

🎥 [Algebraic effects and handlers on an Arduino board](https://vimeo.com/874870905?share=copy) via [Peter Saxton](https://twitter.com/CrowdHailer)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/share-your-work.html#2023-10-16T17:26:45.494Z)

![Vimeo Thumbnail](https://i.vimeocdn.com/video/1739161732-794966ab4484a82499bd6baee999a5b11edc0df5c71102680ea6a1f9793a5878-d_295x166)

Compiling Algebraic Effects and handlers for Arduino using tinygo

🎥 [Kopi Demo](https://www.youtube.com/watch?v=jFh6s2p9kzc) via **Mike Austin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/share-your-work.html#2023-10-17T21:09:37.936Z)

![Youtube Thumbnail](https://img.youtube.com/vi/jFh6s2p9kzc/hqdefault.jpg)

Hi all! I introduced myself and started poking around about a week ago, and have now finally created a video to share my work. It's a small, immutable, 100% async programming language, Kopi, and a React (UI framework) based desktop environment. Enjoy!

# Devlog Together

🏏 [crosstable.love: A little tool for sports cross-tables](https://git.sr.ht/~akkartik/crosstable.love) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/devlog-together.html#2023-10-17T23:53:10.698Z)

**@Matt Wynne** Do you cricket? This one's for people in a few selected locales around the world, but there's a cricket world cup going on with a lot of upsets right now, and it just got me to scratch a long-standing frustration: a tool for all-play-all cross-tables that lets me simulate potential future results, while sorting the rows and columns for me.



In the process I learned to draw janky 3D-looking buttons for the first time.



As with most of my stuff lately, you can edit this app's code live as it runs, and my platform choices allow me to accomplish that with very little code. See the Readme for details.

🎥 [Crosstable Demo](http://history.futureofcoding.org/history/msg_files/F06/F0616558NTZ.webm)

# Thinking Together

💬 [Lukas Süss](https://twitter.com/mechadense)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/thinking-together.html#2023-10-16T11:48:58.717Z)

Hey everyone, – I'm looking for some quite a few years old demo that I can vaguely remember that

was using pointfree code in a table layout (related to stack based programming).

Some cells merged and changing on evaluation IIRC.

I initially thought that it was from [Jonathan Edwards](https://twitter.com/jonathoda/), but not so sure anymore.

I was not particularly convinced about the idea but some discussion

about stack based programming came up where this would be a nice reference I guess.

 *Does anyone here still have a link to that maybe?* 

🏗️ [Gradual Structure Editing with Obligations](https://tylr.fun/vlhcc23.pdf) via [Lukas Süss](https://twitter.com/mechadense)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/thinking-together.html#2023-10-16T12:41:56.444Z)


Here's an interesting new paper on advanced structural editing with a strong "typing normally" focus:

 *Gradual Structure Editing with Obligations* 

building on [tylr.fun](https://tylr.fun/)

by **@David Moon** **@andrew blinn** **@Cyrus Omar**

– – –

And some work on seemingly lower level perhaps more near term practically applicable projectional editing:

 *Projectional Editors for JSON-Based DSLs* 

[Projectional Editors for JSON-Based DSLs](https://arxiv.org/abs/2307.11260)

[prong-editor.netlify.app](https://prong-editor.netlify.app/)

by **@Andrew McNutt** **@Ravi Chugh**

🤖 [14 Best AI Coding Assistant Tools in 2023](https://www.elegantthemes.com/blog/wordpress/best-ai-coding-assistan) via **Mike Austin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/thinking-together.html#2023-10-19T16:35:02.143Z)

Thoughts on AI code assistants?



It doesn't seem that far off from easily prototyping things like games. An AI could understand what a screen is, a sprite/character, movement, etc. Heck, just tell it to generate a random game and fine tune it.


🔗 [Live 2D Compositional Programming](https://michael.homer.nz/Publications/LIVE2022/article/) via [Lukas Süss](https://twitter.com/mechadense)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/thinking-together.html#2023-10-19T16:39:15.328Z)

 *Concatenative Programming Projection* 



2022 –  ***Interleaved 2D Notation for Concatenative Programming***  – by **@Michael Homer**

 Some quickly enlightening demo videos here:


 [Landing page](https://michael.homer.nz/Publications/PAINT2022)

 [Tryable in the browser](https://homepages.ecs.vuw.ac.nz/~mwh/demos/p22-2d-concat/)

 [Direct link to the paper](https://mwh.nz/pdf/paint2022)

 It's a concatenative language.

 It's not a stack based language. Slight differences I guess.

 Also questionably point free with with the values unnamed but live values still shown.



 *Comparison to stack based languages* 



★  ***Similarities to a stack based language:*** 

 – also no variable names

 – also the typical operations: dup, swap, dig

 – also only variables with an arity of one or more (aka functions) are shown (and literals)

 ★  ***Differences:*** 

 – There's no reverse polish notation.

 – Unlike in in a stack based language there's no single stack.

 Rather the representation make opportunities for parallel evaluation quite obvious.

 – Variables have no names but are still displaying their live value like in a spreadsheet (not referring to the layout).



 ⚠  ***It seems this is actually not a language but a projections style.*** 

 This is nice, meaning to some degree other language can potentially be projected into this representation.

 Well, plus-minus some issues. Syntactic sugar mostly not carrying over. Readability in other projections.

 Switching to a different projection one may want to give out human readable variable names though rather than assigning auto-generated ones.



 Maybe this would be a viable additional projection target for some other languages (unison)?

 No clue though how this would interact with algebraic effects.



 *Comparison to [ALDs](http://apm.bplaced.net/w/index.php?title=Annotated_lambda_diagram)* 




 ***Relation of Michael Homers model to annotated lambda diagrams:*** 

 ★ ALDs give same obviousness of parallelity opportunities

 ★ Unclear which representation is visually denser but likely not the ALDs

 ★ ALDs (as in the current mockups) are not pointfree. Variable names do appear both …

 – at the head of the function definition (and tops of let- and in- blocks) and

 – as annotations of the horizontal value lines (i.e. as the arguments to functions)

 ★ For Making the ALD code projection more aligned with Michael Homers model:

 – replace value names with live values

 – collapse let-in-blocks by substitution

 (live values could still be added as "syngraphic" sugar in extended value lines, I digress …)

 ★ flip & dig (argument permutators)

 – They both vanish in the ALD code projection no matter their location.

 – They are just permuting the arguments by swapping application lines and all preceding dependents.

 ★ dup

 – only vanishes at the top level as it turns into two forks.

 – otherwise less trivial as it induces an unavoidable let-in block.

 (Uncurrying into tuples is a bad alternative as it hides away ALD circuitry, the whole point of ALDs)


💬 [Tom Lieber](https://twitter.com/alltom)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/thinking-together.html#2023-10-21T22:11:24.202Z)

I know it's ancient tech, but there are so few parts of my computer where I can freely mix styled text, code,  _and_  data, and Mathematica is the only one where doing so feels remotely natural.



I was inspired to post something by recent workflow breakthroughs in how I keep my lab notebook, where I slice-and-dice tabular data from experiment results in-between my paragraphs of stream-of-consciousness analysis. It's a lovely way to work. My journal entries build on one another in ways they never did before, because I can use code to put the best view(s) of the data right into the notebook.

![image.png](http://history.futureofcoding.org/history/msg_files/F06/F062126EEB0.png)

# Content

💡 [Notation as a tool of thought](https://dl.acm.org/doi/10.1145/1283920.1283935) via [Jack Rusher](https://twitter.com/jackrusher)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/linking-together.html#2023-10-18T13:47:09.970Z)


> Mathematical notation has serious deficiencies. In particular, it lacks universality, and must be interpreted differently according to the topic, according to the author, and even according to the immediate context. Programming languages, because they were designed for the purpose of directing computers, offer important advantages as tools of thought. Not only are they universal (general-purpose), but they are also executable and unambiguous. Executability makes it possible to use computers to perform extensive experiments on ideas expressed in a programming language, and the lack of ambiguity makes possible precise thought experiments. In other respects, however, most programming languages are decidedly inferior to mathematical notation and are little used as tools of thought in ways that would be considered significant by, say, an applied mathematician.

 

The thesis of the present paper is that the advantages of executability and universality found in programming languages can be effectively combined, in a single coherent language, with the advantages offered by mathematical notation.

— from Iverson’s Turing lecture, still a banger 50+ years later


🎥 ["Weathering Software Winter", Handmade Seattle 2022](https://www.youtube.com/watch?v=9TJuOwy4aGA) via **Mike Austin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/linking-together.html#2023-10-19T16:24:11.435Z)

![Youtube Thumbnail](https://img.youtube.com/vi/9TJuOwy4aGA/hqdefault.jpg)

Sometimes I think you need to take a few steps back before moving forward. It's also fun to explore old technology.



"Weathering Software Winter", Handmade Seattle 2022

📝 [The New Developer Research Paper](https://www.pluralsight.com/resource-center/guides/new-developer-research-paper) via **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/linking-together.html#2023-10-19T19:33:22.733Z)

I shared this as a response to a message earlier today, but I think it may be worth sharing here, too!



Pluralsight [shared some interesting research they just completed](https://www.pluralsight.com/resource-center/guides/new-developer-research-paper). The research seeks to validate a framework that can be used to understand developers’ relationship to AI.



Quoting from the data highlights of the landing page:






* 43-45% of developers studied showed evidence of worry, anxiety and fear about whether they could succeed in this era of rapid generative-AI adoption with their current technical skill sets.
* Learning culture and belonging on software teams predicted a decrease in AI Skill Threat & an increase in both individual developer productivity and overall team effectiveness.
*  *74% of software developers are planning to upskill in AI-assisted coding. However, there are important emerging equity gaps, with female developers and LGBTQ+ developers reporting significantly lower intent to upskill. On the other hand, Racially Minoritized developers reported significantly higher intentions to upskill.* 
* 56% of Racially Minoritized developers reported a negative perception of AI Quality, compared with 28% of all developers.



Emphasis mine 😄

💻 [Magpie is a small dynamically-typed programming language built around patterns, classes, and multimethods](https://www.magpie-lang.org) via **Mike Austin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/linking-together.html#2023-10-20T19:59:55.472Z)

A programming language that inspired me, but never really took off was [magpie-lang.org](https://www.magpie-lang.org). It was heavily based on pattern matching and supported multi-methods. It's creator, Bob Nystrom, as far as I know now works on [Dart language](https://dart.dev/). [journal.stuffwithstuff.com](https://journal.stuffwithstuff.com)

🎥 [The Message Is The Medium - Douglas Crockford](https://www.youtube.com/watch?v=YD2tnHqNN7w) via [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/10/W4/linking-together.html#2023-10-21T23:02:44.587Z)

![Youtube Thumbnail](https://img.youtube.com/vi/YD2tnHqNN7w/hqdefault.jpg)


