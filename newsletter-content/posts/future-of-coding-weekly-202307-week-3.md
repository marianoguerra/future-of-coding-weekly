<!--
.. title: Future of Coding Weekly 2023/07 Week 3
.. slug: future-of-coding-weekly-202307-week-3
.. date: 2023-07-16 22:10:47 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

👓 Live Coding in VR 🎮 Future of functional logic languages 🖱️ AI: First New UI Paradigm in 60 Years

# Our Work

💬 **Grant Forrest**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/share-your-work.html#2023-07-10T01:17:40.173Z)

I've had this idea rattling in my head to make a frontend framework that's  _only_  signals, and after almost a year of maturation I finally put down some code today. Genuinely surprised this works.



I'm curious where it starts to break down. It's not like modern frameworks are unaware of signals, most feature them heavily, so there's probably some reason they haven't gone all-in on them too, right?



I'm using tldraw's lovely  `signia`  for signals implementation, hence the first param of atoms being a 'name' and not meaningful for execution. This also gave me an excuse to read  `signia` 's source and discover their clever trick for tracking atom inheritance which is pretty neat.

🎥 [Demo Video](http://history.futureofcoding.org/history/msg_files/F05/F05G90S5MNY.mp4)

🏗️ [Coil-Lang Structural Editor (WIP)](https://coil-editor.netlify.app/) via **Marcelle Rusu (they/them)**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/share-your-work.html#2023-07-11T13:48:56.878Z)

I've started to work on a structural editor for my language coil [coil-editor.netlify.app](https://coil-editor.netlify.app/)



It's still early & buggy, but the idea is to directly turn the AST into html with contenteditable for leaf attribute nodes.



So an expression like:

 `document.body` 

which is the coil AST:




```
{type: :property_lookup, lhs: {type: :id_lookup, name: "document"}, property: "body"}
```



Turns into:




```
<div data-kind="property_lookup">

  <div data-attr="lhs">

    <div data-kind="id_lookup">

      <div data-attr="name" contenteditable>document</div>

    </div>

  </div>

  <div data-attr="property" contenteditable>body</div>

</div>
```





And now we can easily query this expression with css selectors. So all the syntax highlighting AND formatting is done in css. It also means that static analysis can be done using querySelector.



🔗 [The Power of the Link](https://duncancragg.substack.com/p/the-power-of-the-link) via [Duncan Cragg](https://twitter.com/duncancragg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/share-your-work.html#2023-07-13T13:52:20.616Z)

My latest Object Network Lab Note is out!


Please feel free to comment either there or here!


>Small stuff that points to bigger stuff


💬 **greg kavanagh**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/share-your-work.html#2023-07-14T19:44:51.955Z)

Added some filters and shadows to QuickPoint. "We are mere shadows and filters Horatio"

🎥 [Demo Video](http://history.futureofcoding.org/history/msg_files/F05/F05HJ1DKZPB.mov)

👓🎥 [Kairon - Open Source Live Coding In VR](https://www.youtube.com/watch?v=Y2uiSF48bNY) via [Felipe Reigosa](https://twitter.com/MockMechanics)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/share-your-work.html#2023-07-16T13:26:03.397Z)

![Youtube Thumbnail](https://img.youtube.com/vi/Y2uiSF48bNY/hqdefault.jpg)

Hey Guys I've been working on a way to code in VR in an effective way. The code is open source and is available here: [github.com/felipereigosa/kairon](https://github.com/felipereigosa/kairon), for the full video where I show how it works and build a few things with it, let me know if you like it.



🎥 [Trailer Video](http://history.futureofcoding.org/history/msg_files/F05/F05HYBUHLJC.mp4)

# Thinking Together

💬 **Walker Griggs**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/thinking-together.html#2023-07-10T19:23:24.403Z)

 *I've been thinking a lot about apprenticeships over the last year and specifically the lack of apprenticeships in tech.* 



My mental model of apprenticeships is primary formed around how they apply to the arts -- people learning a craft from a single practitioner who has worked their life to develop a personal style or system. But apprenticeships also exist in trade, maybe even more so. Fundamentally, apprenticeships facilitate knowledge transfer -- all industries can benefit from that, no? So, I wonder why apprenticeships are far less common in software?






* Is it because so many industry vets were themselves self taught and so that mindset has lingered?
* Is it that so much of our industry is focused on access, democratization, and open sharing of information?
* Could it be that we need to train more software engineers than we have hours in the day, and that need for more qualified minds has pushed us beyond the 1-on-1 learning paradigm and towards bootcamps etc?
* Maybe so much of software and the knowledge around it is already accessible, so apprenticeships are just overkill? That said, there are still pockets of software where subject matter expertise and knowledge silos outweigh what is either 1) commonly taught in schools or 2) generally available.
* Software doesn't have the same requirements around professional certifications -- could that be at play?



Generally, do you all think there's value in apprenticeships or should we (continue to) move in the other direction entirely -- teach the masses? In that sense, I could see the argument that apprenticeships border on nepotism and are actually a form of gatekeeping. Have any of you been part of a formal apprenticeship (on either end)? If so, what conditions made that possible?


📝 [The Austral Language Specification: Statement Orientation](https://austral-lang.org/spec/spec.html#stmt-orientation) via **Daniel Buckmaster**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/thinking-together.html#2023-07-11T23:30:27.745Z)

 *What we talk about when we talk about expressivity* 



I enjoyed the little tangent on expressivity in the latest episode. I've had thoughts on this recently and it prompted me to skim Felleisen's paper. I really resonated with the hosts' reframing of expressivity as being the part of the language that's oriented towards the programmer, not towards the machine.



I currently think that most programmers, when talking about "expressivity", actually mean essentially two things:






* I can use my own words
* I am not restricted by grammar



These things are strongly tied to writing, as that's still how we do most of our coding.



"Using my own words" is literally that - in any given chunk of source text, how many of the words were chosen by the programmer (e.g. to be particular to their domain or their theory of the program) and how many were specified by the language or environment? Punctuation, I think, also counts as words the programmer didn't get to choose. Random examples:






* In Ruby, one can create little DSLs where almost all words in a specific part of the code are "my own words"
* In assembly languages, the programmer can choose almost none of the words (except labels?)
* Being able to rename imported symbols lets the programmer choose their own words in specific contexts (same goes for type aliases, etc.)
* Languages with few keywords should tend to have more words chosen by the programmer... or at least, by the authors of the standard library?



I equate being "unrestricted by grammar" roughly to whether a language is statement-oriented or expression-oriented. The Austral spec has a great section on why it chose to be statement-oriented, and concludes that "a statement-oriented syntax is less simple, but it forces code to be structurally simple": [austral-lang.org/spec/spec.html#stmt-orientation](https://austral-lang.org/spec/spec.html#stmt-orientation)



In Austral, it's an ideological choice to force programs into a certain shape. But in general, it seems to me that languages with less "grammatical restrictions" in their parser are described as more expressive. Maybe this is just correlation with other features of those languages.



I'd love to know how everyone else understands "expressivitiy" when we talk about programming.



💬 [Duncan Cragg](https://twitter.com/duncancragg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/thinking-together.html#2023-07-13T20:42:06.077Z)

I think this topic, based as it is on personal experience, deserves better visibility, so hopefully Rachel won't mind my reposting it here! 🤗
> [July 13th, 2023 9:38 PM] rachel: hey both! thanks for replying here.. as per your question Joe, I would consider someone a software engineer if they know how to code - whether they have a CS degree, or did a bootcamp, or learned on their own. Someone who can code and build applications. I have no formal training in coding. However, I am excited about the potential of AI to help me make an app by generating code for me.
> 
> To answer your question Duncan - I've mostly been using a combination of asking chatGPT for the steps and code, and also using an app I am working on with a cofounder called Sublayer. We noticed that the chat interface is not really the best interface for building (and changing) complex apps, but we're still exploring the right workflow for it. Definitely eager to learn from this group how others are getting the best code generation out of the existing LLMs.


🤖 [Marvin: A lightweight framework for building AI-powered software that's reliable, scalable, and easy to trust ](https://github.com/PrefectHQ/marvin) via **Scott**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/thinking-together.html#2023-07-14T21:10:45.712Z)

I've been thinking a lot about the patterns and architectures we're going to see start to emerge that lend themselves well to being written by generative AI and came across this technique being used by a library called Marvin ([github.com/PrefectHQ/marvin](https://github.com/PrefectHQ/marvin)) where they limit the tokens the LLM can respond with to just a single token corresponding to a value in an enum. They then have it respond with the value as the response to a natural language query. This is extra interesting because responding with a single token is relatively fast and cheap.



The example they give is using it in routing:






```
    USER_PROFILE = "/user-profile"

    SEARCH = "/search"

    NOTIFICATIONS = "/notifications"

    SETTINGS = "/settings"

    HELP = "/help"

    CHAT = "/chat"

    DOCS = "/docs"

    PROJECTS = "/projects"

    WORKSPACES = "/workspaces"





AppRoute("update my name")

# AppRoute.USER_PROFILE
```





But I feel like there's a seed of an idea here that points to what a piece of an LLM-core architecture may look like. I experimented with the idea a bit in chatgpt earlier today (screenshots attached) and I'd love to know if anyone finds this interesting or has any thoughts/opinions.

![image.png](http://history.futureofcoding.org/history/msg_files/F05/F05HVF1T1LG.png)

![image.png](http://history.futureofcoding.org/history/msg_files/F05/F05GZ49BPRC.png)


# Content

🎮🎥 [Beyond functional programming: a taste of Verse. Simon Peyton Jones & Tim Sweeney | Lambda Days 2023](https://www.youtube.com/watch?v=OJv8rFap0Nw) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/linking-together.html#2023-07-10T19:47:56.139Z)

![Youtube Thumbnail](https://img.youtube.com/vi/OJv8rFap0Nw/hqdefault.jpg)

[Beyond functional programming: a taste of Verse. Simon Peyton Jones & Tim Sweeney | Lambda Days 2023](https://www.youtube.com/watch?v=OJv8rFap0Nw)






> Verse is a new programming language, being designed at Epic Games as the language of the metaverse. Verse is a functional logic language, with a bunch of innovative ideas. Like Haskell, Verse is declarative (a variable in Verse stands for just one, immutable value), and higher order (lambdas are first class). But Verse goes well beyond Haskell, with existential variables, unification, expressions that yield multiple values, and much more besides. In this talk we'll give you a sense of what functional logic programming is about, what it looks like to program in Verse, and how we can give meaning to Verse programs using rewrite rules.

🖱️ [AI: First New UI Paradigm in 60 Years](https://www.nngroup.com/articles/ai-paradigm/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/linking-together.html#2023-07-10T20:15:07.746Z)

[AI: First New UI Paradigm in 60 Years](https://www.nngroup.com/articles/ai-paradigm/)



 *Summary:*  AI is introducing the third user-interface paradigm in computing history, shifting to a new interaction mechanism where users tell the computer what they want, not how to do it — thus reversing the locus of control.



💡 [Invisible Details of Interaction Design](https://rauno.me/craft/interaction-design) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/linking-together.html#2023-07-11T05:05:05.396Z)

>What makes great interactions feel right?



🦋 [gt4atproto: a dedicated environment for AT Protocol](https://lepiter.io/feenk/gt4atproto--a-dedicated-environment-for-at-7kcp8pwy6dcnomlljmtvl3wx2/) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/linking-together.html#2023-07-12T02:04:14.723Z)

 *Exploring BlueSky's AT protocol in Glamorous Toolkit* 




>gt4atproto is an environment for AT Protocol built in Glamorous Toolkit (GT). It covers several things at different levels of abstraction such as:
>
> - Creating posts and threads from inside the knowledge management system.
> - Working with a server through AT Protocol.
> - Streaming and pagination support out of the box.
> - Inspecting and visualizing results.
> - Code generation from lexicons to Smalltalk code.
> - Dedicated styling and completion support for editing lexicon JSON files.

🔳 [Interpolating Polygons](http://lambdafunk.com/2017-02-21-Interpolating-Polygons/) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/07/W3/linking-together.html#2023-07-15T19:00:16.484Z)

