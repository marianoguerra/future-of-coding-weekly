_[2020-07-05 12:20:27]_ **Unknown User**:




> _[2020-07-06 03:11:57]_ **Kartik Agaram**:

The synthesis of many positions is that conventional syntax highlighting is extremely useful for highlighting two things: comments and literals (especially string literals). Beyond that the returns start diminishing quite quickly. I believe this so strongly that I disable highlighting for most things but have 4(!!) colors of comments based on different leaders. (I also like to highlight early exits: `break`/`continue`/`return`.)



And then I find the colors I save to be occasionally useful for highlighting individual variables on demand but randomly and persistently (across restarts), giving me a sort of synesthesia where I start to expect certain variable names in certain parts of a codebase to be colored a certain way. Invaluable for highlighting dataflow and side-effects.



Here's a couple of screenshots from various points in the past that show off all these features. (I love talking about this topic but often repeat myself.)



* [https://mastodon.social/@akkartik/101163809901430347](https://mastodon.social/@akkartik/101163809901430347)

* [https://i.imgur.com/EmFMTtv.png](https://i.imgur.com/EmFMTtv.png)



Here's what I use for "dataflow highlighting": [https://www.reddit.com/r/programming/comments/1w76um/coding_in_color/cezpios](https://www.reddit.com/r/programming/comments/1w76um/coding_in_color/cezpios)


> _[2020-07-06 03:16:26]_ **Kartik Agaram**:

These days Mu has slightly more conventional highlighting of keywords just because I expect most people to be unfamiliar with the syntax: [http://akkartik.github.io/mu/html/apps/arith.mu.html](http://akkartik.github.io/mu/html/apps/arith.mu.html). But you can still see multiple colors of comments here.


> _[2020-07-10 01:01:58]_ **Ivan Reese**:

I've been using semanticolor for the past few days, and I don't dislike it, so I'll probably keep using it. I look forward to offering some deeper n=1 self-evaluation the next time this subject comes up :)

---

_[2020-07-02 20:59:48]_ **Unknown User**:




> _[2020-07-06 03:51:43]_ **Peter Abrahamsen**:

Hi! I’ve been a bit checked out of this Slack but Slack+knowledge base is something I’ve been thinking about and prototyping a bit for a while now. 


> _[2020-07-06 03:55:11]_ **Peter Abrahamsen**:

There’s tons to explore here, and it would be great to hear where your imaginations are going. I think an environment for prototyping and a very patient, motivated user base are key, though, to getting our priorities straight. 


> _[2020-07-06 03:58:00]_ **Peter Abrahamsen**:

Datalog, or Prolog, are promising tools for prototyping. I’ve used clojure only a little, but if I can ignore the JVM, am drawn to it as well. 


> _[2020-07-06 14:42:53]_ **Ryan King**:

[Peter Abrahamsen](https://twitter.com/peidran) I sent you a dm if you want to join our call later today


> _[2020-07-06 17:03:06]_ **Peter Abrahamsen**:

Thanks! The biggest thing for me entering this discourse is that we tend to jump right into a solution space—structures, mechanisms, techniques—without spending enough time thinking about the problems in their own terms: audience, goals, expressivity, timeliness, coherence, and so forth. I was glad to hear [Max Krieger](https://twitter.com/maxkriegers) talk in his comic about the “sublime symbiosis of speaking”. I don’t want to reduce discourse to an organizational problem.


> _[2020-07-06 17:07:03]_ **Peter Abrahamsen**:

Some scoping is necessary. When I think about these things, I often ground myself by thinking about the social life and work of this community, which are deeply intellectual. Do you all have the same kind of thing in mind?

---

_[2020-07-06 04:41:04]_ **yoshiki**:

Recently discovered this prototype of micro-versioning:


> Experimentation plays an essential role in exploratory programming, and programmers apply version control operations when switching the part of the source code back to the past state during experimentation. However, these operations, which we refer to as > micro-versioning> , are not well supported in current programming environments. We first examined previous studies to clarify the requirements for a micro-versioning tool. We then developed a micro-versioning tool that displays visual cues representing possible micro-versioning operations in a textual code editor. Our tool includes a history model that generates meaningful candidates by combining a regional undo model and tree-structured undo model. The history model uses code executions as a delimiter to segment text edit operations into meaning groups.[https://hiroakimikami.github.io/micro-versioning-tool/index.html](https://hiroakimikami.github.io/micro-versioning-tool/index.html)


> _[2020-07-06 09:35:24]_ **Jack Rusher**:

It's nice to see someone exploring this space. Has the teamed looked at `undo-tree` in emacs? It also provides, as the name suggests, a tree-structured undo model.



(A-ha! Found the reference in the paper. 😊)


> _[2020-07-06 12:17:11]_ **Edward de Jong**:

in my normal work I don’t use Undo of work very often. It’s one of the reasons I’ve never liked source code control systems because it’s extremely rare to undo work. Understanding the implications of making changes to code it is really at the crux of the future of computing. Can you make it so that someone can easily understand the implications of what they’re about to change? This is why strong typing It’s so important because it helps the reader understand what could go in a variable. In 99% of the code each variable is going to be used a single way. Users name is never going to become his age. The name is always a string, and it’s only point is to mostly disambiguate a human being from another. One of the problems with these editor Features is that it is not recording why you made the change, so you have this branching tree but you don’t know why you did what you did, so it isn’t that useful.


> _[2020-07-06 18:37:07]_ **Ivan Reese**:

In Photoshop, I frequently make use of the History panel and Snapshot features, so that I can branch off new variations of an artwork at various points in the past. I could see myself adopting a similarly exploratory programming workflow if my entire toolset were more accommodating of it. Current programming wasn't designed with this freedom in mind, so of course we don't do much of it.


> _[2020-07-08 18:11:40]_ **Jack Rusher**:

While I agree that one should understand what effect a given change should have, that is not the same as knowing if it is the change one will have wanted to have made after considering it in context, possibly alongside a number of other experimental changes. In general, any theory of programming that assumes we know our destination before we've begun our journey rules out many areas of human endeavor.

---

_[2020-07-02 12:13:39]_ **Unknown User**:




> _[2020-07-06 07:24:24]_ **Gregg Tavares**:

I interpreted the walled garden as FB Messenger, WhatsApp, WeChat, iMessage, Line, Kik, etc do not work with each other. I can't be in WhatsApp and message someone using WeChat.



Same with Zoom, Facetime, Meet, Skype, etc... I can't video conference with someone from Zoom if they're running Facetime. They have to download Zoom.



I don't know if re-mixing and open standards are important here or not. Except for iMessage (haha) all the others work everywhere and are free so if someone says "contact me on X" I just install X. I think it's likely to get worse. If you believe in the acceleration of change then before you can standardize something it will become irrelevant? Like there was a SMS standard. Who still uses it (I'm sure India or some place like that still uses it). My point is a 140 character standard has mostly been supplanted. Next we need images in our messages. Then we need video clips, then live voice, then live video, tomorrow we'll require shared AR or shared VR or something.



On the other hand, the Web is pretty good at remixing. Iframes and other APIs let me mix stuff from all over.



[https://driveandlisten.herokuapp.com/](https://driveandlisten.herokuapp.com/)



Yet another reason I'm glad for web tech and often anti-native apps 😛

---

_[2020-07-02 08:13:30]_ **Unknown User**:




> _[2020-07-06 07:44:12]_ **Konrad Hinsen**:

I have been playing with it for a while, see [https://github.com/khinsen/ipfs-pharo](https://github.com/khinsen/ipfs-pharo) and [https://github.com/activepapers/activepapers-pharo](https://github.com/activepapers/activepapers-pharo) (though neither project is likely to be of interest to you unless you care about the application domains they address). There are lots of good ideas in there, and I also like its visual style. Be warned though that it says "alpha release" for a reason (but stability has improved enormously in recent months).


> _[2020-07-06 15:02:13]_ **Zubair Quraishi**:

Which application domains do they address?


> _[2020-07-06 16:41:35]_ **Konrad Hinsen**:

The first is an [http://ipfs.io/](http://ipfs.io/) interface to Pharo, with a user interface layer using GToolkit that (for now) contains an explorer for data stored in IPFS and a reader/editor for Wikis stored in IPFS.



The second is a proof-of-concept implementation of a next-generation computational notebook for use in computational science.


> _[2020-07-08 07:05:39]_ **Konrad Hinsen**:

This recent blog post gives a good idea of what makes GToolkit different. It's written for people with some Pharo background, but I suppose most people here will get the gist even without that.  [https://blog.feenk.com/glamorous-toolkit-and-pharo-5aufgcequ38az2s0dj0t1nu0f/](https://blog.feenk.com/glamorous-toolkit-and-pharo-5aufgcequ38az2s0dj0t1nu0f/)

---

_[2020-07-06 09:07:17]_ **S.M Mukarram Nainar**:

[Kartik Agaram](http://akkartik.name/about) This reminds me of your code organization scheme, with the feature splicing and stuff: [https://github.com/kiselgra/cm-fop](https://github.com/kiselgra/cm-fop) , though their focus is more on outputs than inputs—they ended up with this by optimizing for exploratory programming with heterogenous outputs, not readability/understandablity. I think it goes to show how much overlap there is between those goals—maintaining understanding of a codebase is a key part of enabling exploration. 

I'd never heard of feature-oriented programming before, but it's neat


> _[2020-07-06 09:09:15]_ **S.M Mukarram Nainar**:

Also, there's a nice paper on it: [http://dl.acm.org/citation.cfm?id=2814220](http://dl.acm.org/citation.cfm?id=2814220)

paywalled, unfortunately, though

---

_[2020-07-06 18:36:29]_ **Harry Brundage**:

Is anyone aware of a good meta-analysis on why node and link based programming has only found limited success? lookin' to learn more


> _[2020-07-06 18:41:07]_ **Ivan Reese**:

I have the littlest stub of something like this in my Visual Programming Codex: [https://github.com/ivanreese/visual-programming-codex/blob/master/criticisms.md](https://github.com/ivanreese/visual-programming-codex/blob/master/criticisms.md)


> _[2020-07-06 18:53:20]_ **Ivan Reese**:

My personal feeling is that visual programming hasn't had its moment yet because we haven't yet seen an Autodesk-calibre VP tool. There's a bit of a catch 22 here. Most new VP tools are made for non-programmers, or are created by small teams with tight constraints. As a result, these tools aren't appealing to existing programmers, which reinforces the myth that visual programming isn't for real programmers.



I think one recipe for a breakthrough VP tool is:




* Borrow heavily from video games — modern graphics tech, time manipulation, high visual interest, tight latency, fluid feel, engrossing first-run / self-tutorial, and insane polish
* Focus on advanced programmers, not beginners
* Focus on expert users, ensuring they can fly through the tool like experts can fly through Photoshop or Modo
* Don't make it easy to drop down to text
* Focus more on interactive performance than execution performance

(I have like 20 more of these things that I see as "reasons current tools are bad", but they get increasingly.. weeds-y)


> _[2020-07-06 19:03:52]_ **Aleks Litynski**:

I have a theory about this, but haven't seen it explored formally anywhere.



Mostly, I think node-and-wire programming hasn't tried to be generally successful and is happy with being used in limited contexts.



Consider python, a 'generally successful' programming language. It can be used to program embedded systems, write web servers, script game engines, and script 3d modeling tools like blender. It's widely used for scientific computing and data processing. There's some things you might not want to do with python, but there's nothing you can't do with python.



Compare that to the most successful node-and-wire systems. They're always tied up in some complex runtime. I can't copy Unreal Blueprints into Max MSP the way I could copy python from a web server to a Blender script.



It feels like node-and-wire systems are in the same place scripting languages were in the 90s. Every application has its own bespoke node-and-wire system. None of them are very high performance, and none of them work together.



Often, there's no library ecosystem for node-and-write tools, and even if there were an ecosystem, every platform would end up re-implementing the same libraries.



Presumably, expert users also fall out of these tools. At some point, I assume the best users of Unreal Blueprints just start learning C++, so you end up with only the mediocre users and the users with a principled attachment to the tool sticking around.



Which is to say, node-and-wire tools need to reach all the way down the stack (there can't be a moment where you need to leave the node and wire system to use the more powerful tool 'underneath') and they need to reach across the stack - a node-and-write tool that only works for one very particular use case will never have the general success that a tool like C# has.


> _[2020-07-06 19:04:53]_ **Harry Brundage**:

^ i think that criticism is actually captured in the snippets Ivan pulled out from No Silver Bullet, haven't been any examples of abstraction in the visual world that is as powerful as objects in the OO world


> _[2020-07-06 19:05:25]_ **Harry Brundage**:

it's named functions at best


> _[2020-07-06 19:06:49]_ **Chris Granger**:

[Ivan Reese](https://twitter.com/spiralganglion) I'd be curious to hear more about those 20 weeds-y things if you ever write them down. We're taking an approach pretty similar to what you described and always looking to learn more.


> _[2020-07-06 19:06:54]_ **Harry Brundage**:

oh nevermind sorry it's not in No Silver Bullet, but i think the argument still has weight, it's hard to capture procedure + state together in a visual abstraction that can be re-used


> _[2020-07-06 19:10:55]_ **Harry Brundage**:

i find the argument from No Silver Bullet about there being no natural spatial embedding for general software systems kind of weird also -- there's also no natural embedding into a set of files and folders, yet we find a way to do that every time anyways by just picking a convention


> _[2020-07-06 19:15:00]_ **nicolas decoster**:


> why node and link based programming has only found limited success?My guess is that node and link programming expressivity is limited. I mean it is extremely expressive for some programming artifacts (say, audio processing, event flow, etc.) but very poor for some others (math expressions first come to mind, but I need to find mor examples). So I guess a language that is exclusively based on nodes and links won't be able to be general enough for major success.


> _[2020-07-06 19:18:04]_ **Ope**:

plus won’t it still need labels and text? To be powerful it would need primitives, combinations, abstraction and a way of generalising over patterns. not obvious to me how to do that with just nodes. Sounds like it would require learning another alphabet


> _[2020-07-06 19:18:37]_ **nicolas decoster**:

That is why I was really impress by the expressivity and easy of use of PureData and Max/MSP for lots of programming task and feel very frustrated when I wanted to do some simple message/string manipulation. I then fall back to JavaScript and the combination of the two was very good.


> _[2020-07-06 19:21:30]_ **Ope**:

I wish there was visual documentation/annotation instead. Perhaps might help with documentation and debugging.  I know I often need to draw diagrams to design/understand what my code does


> _[2020-07-06 19:22:15]_ **nicolas decoster**:

That means that I don't fully agree with [Ivan Reese](https://twitter.com/spiralganglion) point "Don't make it easy to drop down to text" 😉 Or, I can agree if there is another visual "semantic" for the cases where "node and link" are poorly expressive.


> _[2020-07-06 19:25:27]_ **Aleks Litynski**:

I suspect visual programming will eventually be adapted for a very mundane reason - textual programming languages are running out of space. A rust function signature might look like


```
fn longest<'a, 'b>(x: &'a str, y: &'b str) -> &str
```

and you can easily imagine a language wanting to say


```
public static async fn longest<'a, 'b>(x: &'a str, y: &'b str) -> &str
```



If its not happening already, textual languages will eventually have to turn down features because they just make the function signature too long.


> _[2020-07-06 19:26:54]_ **nicolas decoster**:

But I fully agree with this one: "Focus on expert users, ensuring they can fly through the tool like experts can fly through Photoshop or Modo" 💯 Power users are very important. In fact one way to achieve that is to consider yourself (as a designer of a visual language) as the first user with all the tools you like (good shortcuts, etc.).


> _[2020-07-06 19:27:44]_ **Ope**:

[Ivan Reese](https://twitter.com/spiralganglion) nice stuff in that repo! Defo hadn’t heard of Dynamic land


> _[2020-07-06 19:40:49]_ **Christopher Galtenberg**:

Spatial thinking is a skill that has to be obtained, vs linear thinking which is typically innate [https://www.nap.edu/read/11019/chapter/6](https://www.nap.edu/read/11019/chapter/6)


> _[2020-07-06 19:52:32]_ **nicolas decoster**:

[Christopher Galtenberg](https://twitter.com/galtenberg) Yes, but some problems don't fit well with linear representations, mainly problems that are inherently trees or graphs. For example: audio processing, infrastructure architecture, relations in a database...


> _[2020-07-06 19:53:30]_ **Christopher Galtenberg**:

I wasn't suggesting that problems be fit into a particular mode


> _[2020-07-06 21:45:41]_ **Tim Babb**:

Most node and wire tools confine themselves to a domain— they are designed to work on one kind of data, and the primitives are chosen by the system designers to be the ones they think you need for that domain. If you need new/different primitives to solve your problem, it's usually difficult or impossible to create/express them.



Successful programming languages have primitives which are agnostic about the domain/problem you are solving, and furthermore are chosen to elegantly span the space of computable functions, which means you never have to leave the system to fully express your solution.



Disagree that the first successful node-and-wire programming language will be targeted at high-power developers. See: the exact reasons that Dark had to scale back the other week.


> _[2020-07-06 21:46:44]_ **Tim Babb**:

You cannot start with a complex system and add simplicity. You must start with a simple system and remove restrictions.


> _[2020-07-06 23:01:34]_ **Doug Moen**:

I would distinguish node+wire style visual programming from visual programming in the broader sense. In the broad sense, it's definitely possible to create a powerful, wide spectrum visual programming language that scales as well as text only languages. I would start with the principle that code has a hierarchical structure (like a syntax tree). Each node in the tree has potentially multiple different visualizations available, depending on its type, and you can flip between different visual syntaxes. You can create different visual DSLs for different domains (eg, music sequencing languages use different visual conventions than 3D graphics languages). And you can mix multiple DSLs in the same program: these are just different node types.


> _[2020-07-07 08:20:59]_ **Stefan Lesser**:

Here’s my cognitive-science-hobbyist theory of what’s the problem with node-link languages:



Node-link makes effective use of the link image schema ([https://en.m.wikipedia.org/wiki/Image_schema](https://en.m.wikipedia.org/wiki/Image_schema)). Such schemas are universal patterns that structure our thinking on the lowest levels. These patterns also provide the infrastructure for spoken and written language as well, so they sit both under visual and text-based languages. (If “sitting under” makes sense to you in that previous sentence, that’s because it’s an example for a spatial metaphor build on top of image schemas.)



Node-link languages work well, because they hook into that particular link pattern which we all intuitively understand. That’s where their power comes from. Unfortunately, one pattern isn’t enough to model everything. However, it’s great when it’s almost all you need in the domain you are modeling for.



Some node-link languages add a second image schema by allowing containment. The container schema is also why files and folders and directory structures are so pervasive. That’s a little more expressive, but two patterns are still not enough to model all the complex things general programming languages can.



Where node-link languages break down is: they usually offer no solution to the problem of anchoring things to locations. It usually doesn’t matter where you put nodes on an often infinite canvas. Location has no meaning, like it does in a map, or a scatter plot, where each dot is precisely tied to a location. 



While placing things arbitrarily on a canvas sounds positive like flexibility and freedom, it creates cognitive effort because we will quickly feel overwhelmed placing large number of objects in a space without any supporting structure. So we invent that structure on the fly, trying something like ordering nodes by data flow, which works well enough for when you’re just modeling how data flows through a number of filters and transformers. But often we end up with conflicting structures. That’s when we start talking about how it all looks like spaghettis.



For some reason media apps are good at taking advantage of image schemas and metaphorical structuring, which I believe is all happy accidents simply because these patterns are how we think and when designing UI we gravitate towards them even if we don’t know why. 



Think waveform visualizations in audio recording software or MIDI notes. X-axis is often bound to time giving position meaning — the same reason why charts and diagrams are often easier to grasp: image schemas giving rise to powerful spatial metaphors.



That media apps seem to discover these schemas is less of a coincidence and connected to how we understand media as events spread across time (yep, guess what’s the basis for that…). In general programming we think much more abstract and have many completely incompatible orderings at the same time, e.g. data flow with concurrency, static type hierarchies, hierarchical stack frames, sequential memory — it’s easy to visualize each one of them at a time, but it’s essentially just different views on the same system.



I firmly believe that we can deliberately take advantage of this particular knowledge in cognitive science in UI design and ultimately for designing better “visual” languages. If you see any research that’s combining these fields, please send it my way. And if you want to learn more about the cognitive science parts feel free to contact me. I’m happy to provide plenty of pointers to resources I can recommend.


> _[2020-07-07 14:44:40]_ **Garth Goldwater**:

my sketchy thoughts:


* node and wire diagrams tend to prioritize a bunch of things but very rarely have clear points of view on visual hierarchy (in the graphic design sense). so it’s hard to see which 1-4 things are of primary interest when looking at an expansive diagram
* they don’t tend to have super-robust notions of focusing in on a particular eg function or object. i think there’s a lot of available blue ocean space for tools that let you filter down to a compact representation of what you’re working on and its immediate dependencies
* visual display of data structures: node and wire diagrams tend to do a lot for visualizing where data comes from but not a lot for what your data is shaped like or what operations are available for that data shape. this is particularly weird to me because data formats, whether json or haskell, tend to be pretty visual in ascii-land—containers for stricter or maps represented by {}, or strings with quotes, or even the idea of ordering fluent OOP interfaces where something.operation.secondOperation(arg1, arg2) usually means “take a thing AND THEN do operation AND THEN do second operation and stick these arguments INSIDE second operation”
* finally you should check out self if you haven’t [https://youtu.be/Ox5P7QyL774](https://youtu.be/Ox5P7QyL774) and [https://youtu.be/3ka4KY7TMTU](https://youtu.be/3ka4KY7TMTU)


> _[2020-07-07 14:49:42]_ **Garth Goldwater**:

oh i also forgot one more piece on the visual data structures front: object destructuring and pattern matching suggest to me a super visual way to do a lot of data transformation: if you represent, say, a hash map/dictionary as a spreadsheet, on one side you have empty cells and on the other you have the object. let users select an empty cell and then click on the field in the object they want to copy over to the empty cell. idk why no ones doing that


> _[2020-07-07 14:51:02]_ **Garth Goldwater**:

apparently slipped my thumb on “also send to #general” when i was editing that message sorry everyone


> _[2020-07-07 15:46:33]_ **William Taysom**:

I'll second [Stefan Lesser](https://twitter.com/stefanlesser), "Where node-link languages break down is: they usually offer no solution to the problem of anchoring things to locations."  The difference between a delight and a tangle.  For this reason, I favor near-automatic layout.


> _[2020-07-07 15:48:23]_ **Chris Granger**:

hah, I was writing about just that yesterday:


> In both blocks and nodes editors, the interaction loop boils down to summoning a node and then connecting, or placing, it into context. This ends up being a very verb-centric model where you get the > `+`>  node/block and then wire it up. This is like painting off to the side, moving it to the correct location, and then blending it into the rest of the painting. While there are times where that flow is useful, it’s much less direct than just painting in place and requires tedious actions inserted in the middle. Going from two steps to three for every action in a system adds up quickly and makes even the most basic operations feel heavy in these editors. Rather than operating in context, you’re always working off to the side and then rewiring things to make them work.


> _[2020-07-07 15:54:25]_ **William Taysom**:

One fresh take from Loglo [https://loglo.app/](https://loglo.app/) is sticking to a grid favoring arguments coming from the left and maybe above but with the freedom to reference whatever cell.  I say this as one who gets on a concatenative language kick every few years.  Where they represent one extreme (single line of nodes), a regular node-link system represents the other: anything goes.


> _[2020-07-07 16:20:40]_ **Ivan Reese**:

Re: William




> For this reason, I favor near-automatic layout.



One of my weed-dweller ideas is that automatic layout is useful, but not in the arrangement of nodes and wires themselves, which (I argue) must be laid out by hand with great care – and tooling needs to be excellent, in order to make this process a joy (like gardening) rather than a chore (like cleaning up).



(The cases where automatic layout is useful... that's much deeper in the weeds. At some point, I'll dredge that patch and plop whatever trinkets and bike tires and fish guts come out on my blog)


> _[2020-07-07 16:38:05]_ **Stefan Lesser**:

If your visual representation is interactive and bi-directional, moving things around could change their meaning/properties based on where you place them. Think interactive scatter plot where moving a data point changes its values. How useful that particular use case is, is a separate debate. But in general I like to think much more about interactions than about visualizations. You might have caught me before putting the “visual” in “visual language” in quotes. For reasons. 



Aren’t all the good examples for visual representations we admire getting most of their usefulness out of their interactions? Wires that snap into place on a connector. MIDI notes that change their pitch when moving them up and down. Scrubbing through an audio or video file. 

I’d have lots more to say about how that also hooks into image schemas and metaphors and embodied cognition, and it’ll tell you why I’m all about leaving mice and keyboards behind (just as optional accessories, not killing them entirely) and fully embracing both touch and freehand gestures. But I’ll save that for another thread.


> _[2020-07-07 16:59:34]_ **Doug Moen**:

I like Stefan's comment about making interaction the focus. As for layout, I don't want a visualization that "must be laid out by hand with great care" [Ivan], because that's a big waste of my time. In the Go language community, they have this culture where you don't format your code by personal preference, there is only one true layout, enforced by the gofmt program. I want to use code visualizations where there is automatic layout, and there is only one way to lay out any given program. Different layout means different meaning. I don't want to "burn" interaction gestures on manual layout. There's only so much convenient interaction syntax available, and it must be used wisely. If I move a graphical object from one position to another, it shouldn't be because the object looks prettier in the new position, the gesture must change the meaning of the program (like moving a MIDI note up and down in Stefan's example).


> _[2020-07-07 17:13:11]_ **Max Krieger**:

Extremely obligatory: [https://en.m.wikipedia.org/wiki/Deutsch_limit](https://en.m.wikipedia.org/wiki/Deutsch_limit)


> _[2020-07-07 17:16:25]_ **Max Krieger**:

An important point that unifies [Stefan Lesser](https://twitter.com/stefanlesser) / [Garth Goldwater](https://twitter.com/no_defects)'s cognitive insights: any visual depiction only shows a certain category of logical relations between entities. From Kosslyn's "Case for Mental Imagery": a comparison of "descriptive and depictive relations" (attached)

This is touched on empirically in Larkin & Simon's "why a diagram is sometimes worth ten thousand words" in how students solve physics problems with free body diagrams. Simon actually turns the visual relations into LISP statements in a giant table (not pictured)


> _[2020-07-07 17:20:04]_ **Ivan Reese**:

Who said anything about looking prettier?



Overlooked in all this talk about whether and how positioning has meaning: manual layout is meaningful to the author, for the sake of their own thought process, that the environment doesn't need to care about. Go formats your code, but it doesn't force you to use automatically generated variable/function names. You choose the names, and it's worth spending the effort to choose great names, because that's how you structure your thinking about the problem.



In other words, the formatting of text code and the layout of visual code are not directly comparable.


> _[2020-07-07 17:38:21]_ **Garth Goldwater**:

(except insofar as a lot of formatting of text code is an impoverished attempt to garner some of the benefits of visual layout)


> _[2020-07-07 19:14:17]_ **Doug Moen**:


> Go doesn't force you to use automatically generated variable/function names. . You choose the names, and it's worth spending the effort to choose great names...Inventing names for trivial things is a pain. One of the killer features of node+wire programming is that you aren't forced to choose names for local variables. Choosing names for important high level concepts, or using 2D layout as a way to organize important high level, is beneficial. But don't make me manually lay out the nodes for 'x + y + z'.


> _[2020-07-07 19:44:30]_ **Aleks Litynski**:

[Doug Moen](http://curv3d.org/) this brings up something I'm curious about, which is how to talk about node and wire code. Text is cool because it can always be verbal or written. Code isn't quite natural langauge, so something like `function add(a, b)` doesn't necessarily have a canonical spoken representation, but it feels more obvious than if it were three unlabeled boxes.


> _[2020-07-07 20:05:32]_ **nicolas decoster**:

Nodes and wires programming doesn't necessarily imply that you have to position and link things with tedious mouse manipulations. The merit of nodes and wires is mainly their expressivity for some programming artifacts. But one can imagine some HCI that make it easier to manipulate than clicking somewhere, dragging in the canvas, dropping, etc.



In fact, like most people coming from text languages I was frustrated to have to always use the mouse with Max/MSP, and as someone that once tasted the power of vim, I was really frustrated.



So I experimented that in my "zed" editor where (nearly) every action can be done "easily" with the keyboard: in my **#two-minute-week** video of last week I only use the mouse to move in the canvas, all (the few) editing/navigating actions are done with the keyboard. For example hitting "a" then "s" adds a script node just below the current node, then hitting "i" connects the node input to the output of the previous, etc.



I agree this kind of manipulations is reserved to power users, but as Ivan previously said it is important to make things work fine for power users and it shows that if the mouse is seen as a complicated way to edit/navigate one can also imagine some easier way to do things.


> _[2020-07-07 20:14:04]_ **Garth Goldwater**:

on the mouse/keyboard sub-subject: I wish more apps took the desktop-video-game approach of prioritizing inputs for simultaneous keyboard-and-mouse use—eg wasd to move and mouse to select


> _[2020-07-07 21:32:34]_ **nicolas decoster**:

I like the idea and yet never thought to try it. I definitely will! Thanks [Garth Goldwater](https://twitter.com/no_defects) 🙂


> _[2020-07-07 22:07:20]_ **Ivan Reese**:

Re: Doug


> [very good comment that I enjoyed and agreed with, ending with...] But don't make me manually lay out the nodes for 'x + y + z'.

Agreed! No good node editor would make you do that. (There is a paucity of good node editors.)



That said, `Vec3.add(x, Vec3.add(y, z))` is bad too — and it's common in languages that don't have operator overloading. But operator overloading isn't a total win either, given precedence is typically fixed (good luck using `^` for the geometric wedge product). So in the end, you still often have to manually lay out your equations, just using extra verbosity instead of extra cabling.


> _[2020-07-07 23:00:16]_ **Ivan Reese**:

The ideal is probably something like a rich symbolic algebra editor, and it'd be easier to build that within a powerful visual environment than within a powerful text-grid environment.



(Considering that things like Atom and Code are built within a web rendering engine, the distinction becomes less and less meaningful)


> _[2020-07-07 23:00:23]_ **Doug Moen**:


> But don't make me manually lay out the nodes for 'x + y + z'.

> Agreed! No > good>  node editor would make you do that.Show me an example of one that doesn't make me do that. The problem with node+wire is that once you add a node to the canvas, it is stuck in that position until you move it. So what happens after you have written a substantial amount of code, and need to revise it? Suppose I want to insert 'x + y + z' into the middle of a computation, but it won't fit, there is no room on the canvas to put those nodes where I want. So either I manually rearrange all the nodes to make room for the new code, or I put the new code off to one side where there is space, and drag input and output wires from the place where the computation needs to be, off to where I put the nodes, and now the code looks like a plate of spaghetti.



So that's why I want automatic layout. If I insert nodes, the code automatically reflows to make room. If I delete nodes, the code automatically reflows to fill in the gap.


> _[2020-07-07 23:02:26]_ **Doug Moen**:

[Ivan Reese](https://twitter.com/spiralganglion) "The ideal is probably something like a rich symbolic algebra editor" -- Are we agreeing that the ideal is not node+wire?


> _[2020-07-07 23:07:22]_ **Tim Babb**:

[Doug Moen](http://curv3d.org/) Though few editors do this, "moving stuff out of the way to make room for new construction" is the kind of "auto-tidying" that a good editor should do. I don't think that's in conflict with allowing the user to spatially organize, as long as it doesn't outright prevent the user from moving stuff around on their own.


> _[2020-07-07 23:20:30]_ **Ivan Reese**:


> moving stuff out of the way

3d modelling tools have solved this problem without automatic layout. They give you rich tools to manipulate objects in space, and the space itself, by leveraging the properties of the structure of objects and space.



Want to insert something in the middle of a dense mesh? Grab a vertex and spread out new vertices along every inbound edge, turning the original vertex into a face — in 1 keypress + click. Or, slice a plane through the mesh, and push both halves of the mesh apart. Or, band-select all the faces pointing toward the camera, and pull them away from all the faces looking away from the camera. At all times, you have full control over exactly where every vertex is, and when editing in bulk, exactly how each vertex is moving — you would absolutely not want to tell the program "just move my vertices out of the way somehow".



There are, also, automatic tools you can use. But the manual modelling tools are so good, you rarely want to use the automatic tools. (This gets more weedsy when talking about animation, UV mapping, mesh sculpting, etc. — those areas have manual+automatic hybrids. But they're also less about putting things in places and more about setting relationships, which is relevant to us, but not relevant to this question.)




> Are we agreeing that the ideal is not node+wire?

A rich symbolic algebra editor could (and should) just be another node. (And, ideally, you should be able to crack it open and play with the nodes inside it.)



This thread is broadly about node-and-wire programming, implicitly vs text editing, so that's where I've been focusing my thoughts. But do count me in with team "node-and-wire isn't the best that visual programming has to offer".




> Show me an example of one that doesn't make me do that.

"There is a paucity of good node editors." So, you'll have to use your imagination :(



(There are a bunch of node-and-wire tools that let you put JavaScript or C++ or whatever inside a node. I view that as cheating. There are some node editors, though their names escape me, that do have dedicated equation nodes. None of them are especially rich.)


> _[2020-07-07 23:43:01]_ **Christopher Galtenberg**:

Notebooks feel like the first avenue where node-and-wire will go beyond PoC applications — the scripts to replace are small / the number of pieces to display and enable are limited (and are already on screen, to understand) — and notebooks are already a half-visual / hybrid context, going full-visual is a win for the audience (vs a meh for developers anywhere else)



Something like [https://github.com/IBM/node-red-dsx-workflow](https://github.com/IBM/node-red-dsx-workflow) but cell-by-cell within a notebook


> _[2020-07-08 08:25:17]_ **William Taysom**:

[Max Krieger](https://twitter.com/maxkriegers) thanks for bringing up the Deutsch limit.  I don't know about others, but when a whole page of text is in front of me, I certainly cannot parse out 50 items at once.  It may be dense, but it is no more clear than zooming out on a diagram (or a mechanical assembly).  As for the quote, "Well, this is all fine and well, but the problem with visual programming languages is that you can’t have more than 50 visual primitives on the screen at the same time. How are you going to write an operating system?"  Is he trolling us?  I mean I have handy here a project of... ~20,000 LoC.  I can't see all of that at once.*  A dozen people are working on it.  I'm sure there are horrors to be found that a decent visualization would reveal — both at the level of basic formatting, style, structuring and at the deeper level of knotted up semantics, conditionals, wrapping something up only to unwrap it elsewhere.  The usual suspects.


> _[2020-07-08 08:26:16]_ **William Taysom**:

* Text search works great though.  So that's something visual tools could benefit from.


> _[2020-07-08 13:35:49]_ **Doug Moen**:

We shouldn't discuss the Deutsch limit without also discussing APL/J/K. In the communities that use these languages, dense code is highly valued. Because this allows you to put a large program on the screen in its entirety, and read it without scrolling. APL was invented in the late 1950's, and there has been 60 years of work on achieving ever higher code densities. So now you can put the logic from 10,000 lines of C++ code in two pages and read it without scrolling. The claim is that once you surmount the steep learning curve, you become more productive. You can write a page of C code in a few keystrokes. There is less use of libraries: the attitude is that if the name of a library function is more keystrokes than inline coding the same logic using language primitives, then you should use language primitives instead.


> _[2020-07-08 13:38:51]_ **Doug Moen**:

I think there is an opportunity to combine the ideas from APL with visual programming and projectional editing. I like the idea of a "zoom out to APL" feature. Dense APL-style code would have a less steep learning curve, and be more accessible, if it was just one of several different code views that you could select among. I also find the APL operator symbols beautiful and suggestive: icons instead of words.


> _[2020-07-08 15:01:57]_ **Ivan Reese**:

I recently tweeted a reflection on the Deutsch Limit: [https://twitter.com/spiralganglion/status/1272613075292532736](https://twitter.com/spiralganglion/status/1272613075292532736)


> _[2020-07-08 16:26:59]_ **Garth Goldwater**:

APL also has a great sense of using positioning and punning to deliver more information [Doug Moen](http://curv3d.org/) . glad to see it brought up in combination. also, some of the symbols are IMO just plain visual genius (eg: tally)


> _[2020-07-08 16:28:14]_ **Garth Goldwater**:

actually, now that i think about it, the insistence on REPL-driven development and properly formatted tables are two more marks in the “APL has stuff to offer visual programming environments” column 

---

_[2020-07-07 12:45:40]_ **Mariano Guerra**:


```
Interface matters to me more than anything else, and it always has. I just never realized that. I've spent a lot of time over the years desperately trying to think of a "thing" to change the world. I now know why the search was fruitless -- things don't change the world. People change the world by using things. The focus must be on the "using", not the "thing". Now that I'm looking through the right end of the binoculars, I can see a lot more clearly, and there are projects and possibilities that genuinely interest me deeply.
```



-- [http://worrydream.com/quotes/#bret-victor-email](http://worrydream.com/quotes/#bret-victor-email)


> _[2020-07-07 13:09:16]_ **Stefan Lesser**:

As the link is not clickable and the whole collection of quotes is worthwhile reading: [http://worrydream.com/quotes/](http://worrydream.com/quotes/)


> _[2020-07-07 13:29:10]_ **Steve Peak**:

Interface is everything — the foundation of a product where all other decisions are made upon.


> _[2020-07-07 15:08:28]_ **Ope**:

Thanks for this!

---

_[2020-07-07 13:46:56]_ **Stefan Lesser**:

When you are beyond the prototyping stage and start to put together an early version of something you intend to use yourself extensively and probably also give to a small number of people to try out, what are the measures you take and practices you follow to make that a great experience? For instance, what do you do to make sure data isn‘t reset or lost between updates or can be migrated easily?


> _[2020-07-07 13:52:52]_ **Mariano Guerra**:

I usually pick 3 use cases that are close to real problems, add some helpers to make them easier to try, implement export/import, with export/import I implement templeate loading with a few clicks, later persistence and an easy way to "continue where you left off". Regarding migrations, in the early stage I assume and communicate that I will break backwards compatibility periodically, at some point I decide that the serialization format should be stable and start taking backward compatibility seriously.


> _[2020-07-07 13:56:19]_ **Steve Peak**:

These questions, IMO, are different stages of a product. I’ve personally had and seen (even very recently) examples of not focusing on the root issues in the product. Knowing your customer, what behaviors they have, and what behaviors you want to bring to them is instrumental. You should prototype to get learnings, not data. Data will skew your insights because it’s easy to misinterpret it or have a bias looking at the data you want to see and not the data you should be seeing. Forget the data — focus on UX.


> _[2020-07-07 14:17:39]_ **Stefan Lesser**:

[Steve Peak](https://twitter.com/iopeak) Not sure if I explained that well enough: by „data“ I mean the data users put in to use the software. Think of a note taking app where you put in your notes. You won‘t get any value out of it, if you don‘t trust that you‘ll be able to get your data back out or it‘ll be corrupted by the next update and you have to start over. So I‘m mostly concerned about the user experience. It seems you interpreted this differently?


> _[2020-07-07 14:20:53]_ **Steve Peak**:

What are you optimizing for? It sounds like scaling, uptime, and trust. If I were to create a novel approach to taking notes I would not advertise to my initial test users anything suggesting the information they enter will be saved; in fact I would explicitly tell them that anything they enter could be lost at any point during these initial prototypes as we are optimizing for learning user behaviors.


> _[2020-07-07 14:45:13]_ **Stefan Lesser**:

[Steve Peak](https://twitter.com/iopeak) Oh, I see where you‘re coming from. I‘m not looking for product / startup advice. It‘s not an MVP, and I’m not trying to attract investors. What I‘m doing is still much more research than business.



I was more looking for technical advice and best practices on how to migrate data across changing schemas, or alternative techniques to be able to change significant parts of a system while simultaneously having a small number of people actually using — not just testing — it.


> _[2020-07-07 14:48:44]_ **Steve Peak**:

[Stefan Lesser](https://twitter.com/stefanlesser) gotcha! I’m happy to chat about how to attract investors, it’s something I’ve done before: both attracting and helping others.


> _[2020-07-07 15:02:42]_ **Mariano Guerra**:

[Stefan Lesser](https://twitter.com/stefanlesser) my response wasn't right then 🙂 related to migration, I implemented a serialization library that has versioning, so I can register functions that will migrate fron version N to N+1, when I encounter an old version while deserializing I run the migration functions until the last one, tl;dr: migration on read, keep all versions info, this means I can be carrying versions forever if I'm conservative, I will report the experience (hopefully) in a few years 😛


> _[2020-07-07 15:05:27]_ **Mariano Guerra**:

are you using a statically or dynamically typed language?


> _[2020-07-07 15:33:48]_ **Stefan Lesser**:

[Mariano Guerra](https://twitter.com/warianoguerra) Your thoughts on import/export and serialization were on point. I‘m also looking for a broad set of approaches for the more abstract challenge of minimizing friction for users. Migrating data was just a more specific example for one area where I know it‘s going to be a challenge.



I‘m using a statically typed language, but I‘d still be happy to look at how other languages approach this. And now I‘m even more intrigued to find out how that distinction is connected to the problem?


> _[2020-07-07 15:38:26]_ **Mariano Guerra**:

in statically typed languages to avoid the versioning being a pain I guess you could use avro/protocol buffers which support versioning and migration, in dynamically typed languages it's easier to "patch it as you go"


> _[2020-07-07 15:40:31]_ **Mariano Guerra**:

more generally I try to get to "zero steps to start using", for example I can share a url that get's you directly to a trial session: [https://app.instadeq.com/?try](https://app.instadeq.com/?try)


> _[2020-07-07 15:40:55]_ **Mariano Guerra**:

the second tab in that cell has a list of templates for use cases, I still have to create them since just recently I stabilized the serialization


> _[2020-07-07 15:42:00]_ **Mariano Guerra**:

later I will add the feature to get a url to start a trial session with a specific template loaded


> _[2020-07-07 15:42:34]_ **Mariano Guerra**:

I also added a "Notes" cell specifically to add explanations in the templates and not somewhere else, I will also embed gifs and videos there


> _[2020-07-07 15:43:43]_ **Mariano Guerra**:

last week I even implemented "sharing" on a trial session, which has no persistence, so it's all done on the frontend, the idea is that anyone can try the whole experience without extra steps


> _[2020-07-07 15:45:26]_ **Mariano Guerra**:

today I added version and browser information on the "about" cell to make it easier to troubleshoot


> _[2020-07-07 15:46:12]_ **Mariano Guerra**:

like blink 182 would say "all the small things (that we almost never talk about in FoC but will make the difference)"


> _[2020-07-07 15:46:24]_ **Mariano Guerra**:

ok, the stuff between parenthesis may not be from blink 182 😛


> _[2020-07-07 15:59:05]_ **Stefan Lesser**:

Thanks, [Mariano Guerra](https://twitter.com/warianoguerra), lots of great ideas here! Using URLs to short-circuit onboarding is something I hadn’t thought about and would be extremely simple to do. And I can already see so many uses for this, not just to get people to a specific part quickly, but also to trigger certain debug/support actions, because I can totally schedule a call with a user, send them a link, and ask them, “Hey, can you click that link while we’re on the call?” Which could also trigger some sort of data model migration, ha!



Re migrations: I’m probably using JSON and dedicated model structs just for import/export. Then I can add properties whenever I want and handle larger structural changes in the actual data structures one level higher, with a lightweight migration transformation that only has to work in one direction.



A lot of the other things you mention are also good for onboarding in general. In hindsight kind of obvious that what I was asking for is somewhat related to onboarding.


> _[2020-07-07 16:04:05]_ **Mariano Guerra**:

the other way around a notebook can be downloaded, so if someone gets stuck they can share the notebook via a file with me and I can check it out


> _[2020-07-07 16:04:58]_ **Mariano Guerra**:

this book may jhelp you too [http://momtestbook.com/](http://momtestbook.com/)


> _[2020-07-07 16:25:31]_ **Stefan Lesser**:

[Mariano Guerra](https://twitter.com/warianoguerra) It just occurred to me that it was totally unclear that I’m thinking about a packaged app, not a web service. Which is probably why that URL idea caught me in a very different sense than you probably intended or expected, as I understand you provide a web-based service/app. :-)



I’ll check out the book. They had quite a copy writer for that landing page…


> _[2020-07-08 00:22:41]_ **Shalabh Chaturvedi**:

Specifically wrt data schemas, [Stefan Lesser](https://twitter.com/stefanlesser) have you seen Cambria from Ink & Switch? Its early research but could be interesting reading [https://inkandswitch.github.io/cambria/](https://inkandswitch.github.io/cambria/)


> _[2020-07-08 00:45:24]_ **Shalabh Chaturvedi**:

Wat Peter just posted this to **#feedback** today and I only now saw it heh: [https://futureofcoding.slack.com/archives/CCL5VVBAN/p1594164273362200](https://futureofcoding.slack.com/archives/CCL5VVBAN/p1594164273362200)

---

_[2020-07-07 14:14:51]_ **Andreas S.**:

I was wondering was this discussed here before? ( I couldn't find it via search?)

---

_[2020-07-07 14:14:52]_ **Andreas S.**:

[https://twitter.com/jasonyuandesign/status/1133429180362821632?s=20](https://twitter.com/jasonyuandesign/status/1133429180362821632?s=20)


> _[2020-07-07 14:27:58]_ **Felix Kohlgrüber**:

I'm pretty sure this was discussed here when it first appeared, but I can't find it in the archives either.


> _[2020-07-07 14:33:07]_ **Steve Peak**:

Thanks for sharing! My initial impression, if I may share unfiltered, is that it feels very iOS to me — in good ways. If I were a gambler, I would bet that Apple’s MacOS will start to aim more into this direction over time. The success of iPadOS and iOS has shifted the landscape; it would not shock me at all to see MacOS look more like iPadOS.


> _[2020-07-07 14:34:09]_ **Steve Peak**:

Ha! Jason worked at Apple… shocker 😉


> _[2020-07-07 14:44:37]_ **Shubhadeep Roychowdhury**:

Totally agree [Steve Peak](https://twitter.com/iopeak)


> _[2020-07-07 14:46:44]_ **Shubhadeep Roychowdhury**:

It does feel so much like iOS. the design, the color scheme and all. And I am not really sure exactly what it offers which I can't get in my Debian.


> _[2020-07-07 16:28:01]_ **yoshiki**:

Makespace is the sequel, and it’s looking beautiful:



[https://makespace.fun/](https://makespace.fun/)


> _[2020-07-07 16:29:32]_ **Steve Peak**:

**@Nikolas Martens** ^^ This is your jam 😉 🎶


> _[2020-07-07 16:33:20]_ **yoshiki**:

As for Mercury, the emphasis on neurodiversity really shook my assumptions about operating system design, and interface design in general, and has stuck with me since.


> _[2020-07-07 17:51:20]_ **Max Krieger**:

was actually talking to Jason about that last night [yoshiki](https://twitter.com/yoshikischmitz)


> _[2020-07-07 17:54:59]_ **Max Krieger**:

In particular I noticed that ADHD is seen as a north star for design of complex systems. It's slowly becoming a "design persona" in itself, and am wondering what the implications are especially since the disorder itself has been in flux since its formalization


> _[2020-07-07 17:57:46]_ **Max Krieger**:

They're tough and contentious topics but as cognition gets more attention with system designers wanting to get closer "to the metal" of how we work, they're going to be examined one way or another


> _[2020-07-08 00:38:13]_ **Shalabh Chaturvedi**:

I loved Mercury when I saw it originally. I didn't know about makespace but that looks great too.



The main thing that struck me about Mercury isn't just the clean UI but that the software is organized around 'app-free intentions aka flows'. All operating systems (iOS, Linux, Windows) are very app oriented. Mercury provides your 'intention' or 'workflow' as a concrete organizational model. Typically you jump from app to app to app to acomplish a given intention - the thread of intention just lives in your head, but nothing connects the corresponding windows on your screen. Mercury solves this.



Check out this 'flow' of a single intention (getting coffee with a friend) that spans multiple apps - nothing like this exists in any mainstream OS: [https://miro.medium.com/max/1000/1*0hAZt7GMWzgSjSDK5VBwCA.gif](https://miro.medium.com/max/1000/1*0hAZt7GMWzgSjSDK5VBwCA.gif)



I would love to create threads that connect snippets of information across multiple 'apps' - all are related to one intention. Unfortunately what I do is just reframe a calendar view or mail view I already have open (for one purpose) to another purpose. I end up with a cluster of app windows with different purposes all mixed together. Not at all ideal, but something we're just used to I guess.


> _[2020-07-08 16:16:29]_ **Garth Goldwater**:

WOW makespace looks ridiculously cool and relevant to my interests thank you for sharing it!! 


> _[2020-07-08 16:16:37]_ **Garth Goldwater**:

IMO deserves its own thread

---

_[2020-07-01 21:16:15]_ **Unknown User**:




> _[2020-07-07 15:04:55]_ **Don Abrams**:

jq has a pretty big surface, so I'm glad you're shedding light there. At my current job we actually use a homegrown language for JS transformation instead of jq. I normally frown upon that kind of thing, but the implementation is so clean I was ok with it (given the decision was already made): [https://github.com/schibsted/jslt](https://github.com/schibsted/jslt). It'll never be popular due to the unfortunate naming, hah

---

_[2020-07-02 20:33:22]_ **Unknown User**:




> _[2020-07-07 15:13:20]_ **Don Abrams**:

This list feel more like language/tooling smells rather than coding requirements. What's stopping you from moving faster, adding more features, using some dependency, or handling problems later? These are super valuable questions for a language designer...


> _[2020-07-07 16:46:37]_ **Kartik Agaram**:


> > .."need to move slow now"



What's stopping you from moving faster?The scenario I was thinking of: I often want to do some big fuzzy thing, and I realize just how big it is after some false starts, and start to think harder about decomposing into smaller pieces. So what I initially thought was going to be a single commit eventually turns into a series of commits. And in the process my understanding of the problem becomes much more precise. "What tooling can get rid of the process of clarifying one's understanding?" feels as hard a problem as "world peace".




> > .."this feature adds too much complexity"



What's stopping you from adding more features? ... feels more like a language/tooling smellI'm thinking here about the principle of parsimony in design. There are two ways to add a feature. One yields a state space of size `M+N`, another of size `M*N`. The extra complexity in the latter isn't needed for its purpose. Again, no tool is going to help you with this sort of problem until tools become sentient and turn us out of jobs.



More strongly, I make the case in my recent paper ([http://akkartik.name/akkartik-convivial-20200607.pdf](http://akkartik.name/akkartik-convivial-20200607.pdf)) that all features have costs, and end-user computing requires making end users aware of these costs, so they can better decide if they need them. "Zoom's going to start a webserver on your computer which adds a little convenience but a lot of risk. Yes/no?"



Tools for handling problems later.. just, no. Say you're building a prototype, and you don't care about a bunch of things. There are still things you need to get right that will otherwise pollute the signal you're hoping to get. No tool is going to substitute for the imagination needed to anticipate how your A/B test might get messed up. With all the attendant slow-down and context-switching overhead that each such bug causes.



It's pretty clear now that my original prompt was abysmally unclear. Hopefully this helps clarify things.


> _[2020-07-07 22:04:43]_ **Kartik Agaram**:

[Steve Dekorte](https://dekorte.com/) sorry I dropped your (rhetorical?) question. What I was getting at is the distinction between using synchronization primitives and having to reason about synchronization. Every time I create a shell pipeline I use synchronization. But I don't need to think about it. Do programmers need to think about or appreciate synchronization more than they do today? I'm not yet convinced. And similarly for many of your other axes. They're the stuff of CS degrees, sure, and I have a CS degree so I'm closer to them than most. But they feel like accidental complexity in most situations.


> _[2020-07-12 16:25:09]_ **Don Abrams**:

[Kartik Agaram](http://akkartik.name/about)  thanks for clarifying! In this case I have a few more thoughts that may be useful:

 * Designing a language to purposely help increase the understanding of the problem would be interesting. Maybe allowing for both specific -> general (like TDD) and general -> specific (like Haskell type declarations before impl). Idris and type-driven development is one angle that's interesting here, and rust/elm/purescript+typedholes also leads devs to have a "conversation" with the compiler as well. (FWIW, I'm fairly ignorant of Mu so unsure what opinion it takes here, if any).

 * M*N situations do arise sadly. Most of abstract algebra and category theory is about describing ways to simplify and (hopefully) efficiently compose these cases. I believe that tools can help us with these, such as statebox, but the barrier to entry feels pretty high still. I worked on this a bit at Invision too (fun exceptions when nesting state machines that non-programming designers needed to be able to "configure"). [Side note: M*N problems are particularly annoying to represent in a linear view like text-based languages.  There's fun stuff from the category theory people on diagrammung multi-dimensional composition "easier" but I haven't seen non-math nerds be able to develop intuition around them yet. ]

 * Delaying complexity until later is super important to prototyping quickly. The problem is *knowing* that you skipped over something and if you are "polluting your signal." I believe the sweet spot here is gradually typed languages, though I'd say they have mixed results in terms of lowering complexity so far. I'd bet that AI would be able to "fill in the blanks" sooner than they could design the skeleton.


> _[2020-07-12 16:44:34]_ **Steve Dekorte**:

[Kartik Agaram](http://akkartik.name/about) wrt synchronization, I was thinking about synchronization between UI, model, and database. This is an area that most developers would not think much about until they took a close look at how much of their code base (an bugs) is consumed with code that deals with these issues in poorly designed and inconsistent ways.


> _[2020-07-12 17:50:02]_ **Kartik Agaram**:

Oh, I totally misunderstood what you meant by the word. Yes, the importance of keeping two distant sub-systems "in sync" in some way that's hard to express -- absolutely fits my original question.


> _[2020-07-12 17:57:26]_ **Steve Dekorte**:

A garbage collector could be seen as one form of automatic synchronization (of the free memory table and referenced objects). Either you do it manually (which involves tons of code and bugs) or you abstract it such that it can be done automatically (with far less net code and far greater reliability).


> _[2020-07-12 18:07:56]_ **Kartik Agaram**:

**@Don Abrams** I still feel like we're talking past each other. Yes, tools can amplify capabilities at various tasks. But if we're trying to teach the elements of programming thinking, tools can paradoxically make that more difficult, by reducing the opportunities for some sort of thinking or other.


> _[2020-07-12 19:36:25]_ **Kartik Agaram**:

To back up to your original comment:



> This list feel more like language/tooling smells rather than coding requirements.



Are there any things to your mind that programmers have to think about? Or are they all 'smells'? Is the role of the language designer to eliminate the need for thought altogether? How do you draw the line?


> _[2020-07-12 20:29:53]_ **Don Abrams**:

Awesome question! To me, the definition of the problem and its constraints are unique for each program and cross all languages (by the writer, not necessarily the reader, and not necessarily explicit in the code). Once you get to the how, opinions start. The role languages play is forcing or allowing a programmer to answer certain questions (usually some variation of where and when).


> _[2020-07-12 20:34:56]_ **Kartik Agaram**:

I don't follow that at all.. 😄

---

_[2020-07-08 13:20:26]_ **Andreas S.**:

So when people on social media notice how social media fails, even in not too advanced ways, is it our fault as programmers? Designers? Who designs Cultural myths like Apps and social media designs like “feeds” and threads ? 


> _[2020-07-08 13:50:49]_ **Chris Knott**:

The issue here is that comment threads are a phenomenally complicated type of conversation with no equivalent in the real world


> _[2020-07-08 13:52:40]_ **Chris Knott**:

If you pick a leaf node, you can read it fine as a linear conversation from the root. If you start with the root you're screwed


> _[2020-07-08 14:24:36]_ **S.M Mukarram Nainar**:

Twitter comment threads are, sure, but that's a choice they made for who knows what reason. Pretty much every other major web forum has clearer comment threads and are generally not all that ambiguous


> _[2020-07-08 14:25:37]_ **S.M Mukarram Nainar**:

Here's a project I saw recently, it tries to reify the underlying graph: [https://man.sr.ht/~whereswaldon/arborchat/](https://man.sr.ht/~whereswaldon/arborchat/)


> _[2020-07-08 14:31:50]_ **Paul Butler**:

Twitter comments are especially complicated now because they went from being trees to being potentially cyclic graphs (if you consider both quote-tweets and replies to be edges). A pet project of mine is a tool for visualizing the tree portion of the graph (i.e. ignoring the quote tweet edges): [http://treeverse.app](http://treeverse.app)

---

_[2020-07-08 20:43:00]_ **Stefan Lesser**:


> What if, instead of lowering source code down for the purpose of execution, we raised source code for the purpose of understanding?



What if we took the lessons of the semantic web and applied them to source code?> 

> 

[https://nshipster.com/as-we-may-code/](https://nshipster.com/as-we-may-code/)


> _[2020-07-08 20:53:32]_ **Tudor Girba**:

Interesting article. It’s interesting to note that it is written as an invitation to imagine a better world. There really isn’t any need to imagine representing code as data and adding semantics to it by reasoning about it as data. That future is already here.


> _[2020-07-09 00:03:26]_ **Kartik Agaram**:

The premise feels overblown for the rest of the content. Generating RDF triples from source code is not raising. At best it is flattening (not lowering). The distinction becomes clearer if cast in terms of information content. Lowering takes away information. Not lowering is feasible. But raising is adding information. What can we do to add information that the code doesn't already contain? That's a really hard problem that the article doesn't address.



For starters, mining just the code has limited value because there are many properties of a program that someone reading it can (laboriously) deduce that don't actually exist in software. You may know things about the production environment or expected inputs based on past experience. You may inspect runtime using a debugger.



Bottomline: the premise is a well-known holy grail akin to "world peace", and the rest of the content is doable/novel but of far more limited utility.


> _[2020-07-09 07:39:46]_ **Jack Rusher**:

[Kartik Agaram](http://akkartik.name/about) There is value in placing the extracted triples in the context of an ontology, thus facilitating richer queries and automatic reasoning about the code. It "adds" knowledge to the codebase in the same way that having knowledge of programming adds to one's understanding of a given piece of code.



I think it would be quite interesting to combine the ideas in that article with the direction seen in Codeq: [https://blog.datomic.com/2012/10/codeq.html](https://blog.datomic.com/2012/10/codeq.html)


> _[2020-07-09 08:22:34]_ **Stefan Lesser**:

I really appreciate **@Tudor Girba**’s:




> It’s interesting to note that it is written as an invitation to imagine a better world.



Because the two things we all seem to like most is (a) imagining a better world and (b) telling other people why their imagined version of a better world isn’t going to work. ;-)


> _[2020-07-09 08:29:55]_ **Tudor Girba**:

[Kartik Agaram](http://akkartik.name/about) The representation itself does not add or remove any semantics, but once you see code as data, the semantics are added in the queries, visualizations you can do with that data. It is the act of formulating thought through those analysese that is the key.


> _[2020-07-09 09:04:35]_ **Emmanuel Oga**:

Some of the ideas on that blog post reminded me of existing projects:


* Queries over a code base: [https://www.ndepend.com/features/cqlinq#CQL](https://www.ndepend.com/features/cqlinq#CQL)
* Addressability of code: [https://www.unisonweb.org/docs/tour](https://www.unisonweb.org/docs/tour)


> _[2020-07-09 09:08:41]_ **Emmanuel Oga**:

Also came across this tiny ontology in teh past... I think it is a student project but who knows, may be useful if you decide to actually explore the RDF idea further: [https://fno.io/spec/](https://fno.io/spec/)

---

_[2020-07-09 00:40:30]_ **Ryan King**:

Does anyone have database recommendations for user generated data structures? I'm currently using postgres and it's feeling a little inadequate. For example, a user might have simple formula like `10 + 5` which I store as a string, and I have a `numberCache` column storing `15` for querying. But a formula can also be a string, or a date, so now I need a `stringCache` column and a `boolCache` column. And then there's user input `if statements` which I haven't thought about yet and may need to calculate on the fly.



I have dynamic types, and dynamic relationships, and I'm wrangling postgres into shape, but I can't help but feel there must be something better suited? I was thinking of playing with something more schema-less like mongoDB. Any advice would be appreciated!


> _[2020-07-09 01:18:52]_ **Paul Butler**:

What about using a JSON type in postgres? [https://www.postgresql.org/docs/10/datatype-json.html](https://www.postgresql.org/docs/10/datatype-json.html)


> _[2020-07-09 01:32:35]_ **Kartik Agaram**:

I'd need more information about what you're trying to do. "User generated data structures" doesn't seem like a well-posed category that one can make generalizations about. For example, why would you want to cache the result of `10 + 5`? Repeatedly recomputing it would be almost certainly cheaper than a database lookup. If it is worth caching, the first choice of cache is in memory, which would again be much faster than a database lookup. Do you have millions of users running billions of programs a day? If not, a simple program without a database or caching would likely be sufficient for your purposes.


> _[2020-07-09 03:07:01]_ **Ryan King**:

Yes, you're right, maybe I'm overthinking it and should just compute on the fly. The most complex user inputs might have many dependencies. ie. `v1 = 100`, `v2 = v1+50`, `v3 = v1 + v2` - but I wouldn't expect a chain greater than 20-30 dependencies. It's just important the data is queryable & aggregatable in the future. And I wouldn't be aggregating more than than 10,000 items



I find postgres json columns aren't very great for queries that go more then 1 level deep but maybe I can make things as flat as possible.



Thanks for your help!


> _[2020-07-09 03:45:30]_ **Ivan Reese**:

I find the syntax of Postgres JSON really frustrating to work with. I also have mixed feelings about schemaless, but it does seem like a slightly better fit for this kind of a use case, assuming you go with something that lets you do your queries and aggregations in the DB rather than the client.


> _[2020-07-09 04:02:29]_ **Kartik Agaram**:

[Ryan King](https://twitter.com/_RyKi_) I'm still curious to hear more about an app where the database has code expressions.


> _[2020-07-09 04:21:37]_ **Ryan King**:

I'm building an interactive gantt chart tool. A quick 2 min overview here [https://youtu.be/Anv8-3sZFVE](https://youtu.be/Anv8-3sZFVE)


> _[2020-07-09 04:24:04]_ **Ryan King**:

A user will have many `tasks` and `resources` . A task has various properties (including custom properties) same with resources. A task property may be dependant on other tasks and resources.


> _[2020-07-09 04:26:47]_ **Ryan King**:

All properties can be formulas, stored as strings. The idea is to try to be very excel-like and the user could theoretically use this for any time / scheduling based calculations.


> _[2020-07-09 04:27:28]_ **Edward de Jong**:

For building an interactive gantt chart tool, my Beads language would offer a RAM database that has number, string, image, sound, records, pointers, etc., and will greatly simplify the tricky issue of resizing your interface to fit different screen resolutions your software will be run on. Desktop resolutions are around 100 dpi, but mobile can reach 500, and any drawing in pixels will not work well, nor will calculating sizes in points work in all cases, as the physical screen sizes vary quite a bit as well. In a Gantt chart program, the majority of the code will be related to drawing, not calculating dates.



But you might be happier using an OpenGL foundation because you may want to zoom smoothly in real time, and nothing zooms more beautifully than 3D rendered stuff which of course can just move the camera to zoom without rebuilding anything.


> _[2020-07-09 04:33:12]_ **Ryan King**:

[Edward de Jong](http://beadslang.com/) thanks but I have no issues with drawing for the time being. Hopefully I can test out beads when I have a spare moment though :)


> _[2020-07-09 07:45:03]_ **Jack Rusher**:

You might consider a graph database for storing the (ahem) graph?


> _[2020-07-09 08:51:00]_ **Emmanuel Oga**:

I've been using BaseX recently and I was pleasantly surprised how nice XQuery 3.1 is to use. Since you are talking about storing expressions XML may be perfect for that. Who knows... you may even enjoy transforming your AST with XSLT  3.1 (although you don't need XSLT). [https://docs.basex.org/wiki/Main_Page](https://docs.basex.org/wiki/Main_Page)


> _[2020-07-09 12:51:38]_ **Harry Brundage**:

[Ryan King](https://twitter.com/_RyKi_) have you seen Materialize? [https://materialize.io/](https://materialize.io/) if you could represent your computation as a SQL query it would do what you want very efficiently and typed all the way through


> _[2020-07-09 14:36:41]_ **Ryan King**:

**@Jack Rusher** I was thinking a graph database but all the relationships are stored in the formula string as well. Perhaps I could split the formula into a ast and store that but that feels a little absurd.



**@Emmanuel Oga** Thanks, will take a look.



[Harry Brundage](https://twitter.com/harrybrundage) Interesting approach. Will look into it!


> _[2020-07-09 16:49:26]_ **Jack Rusher**:

Ah, I think I misunderstood the situation! It seemed to me that you might have multiple pieces of code in different places that referenced one another, in which case you'd want some link between a node in one AST to a node in another AST to keep track of dependencies between "code blocks".


> _[2020-07-09 16:58:17]_ **Edward de Jong**:

If you insist on an external database then Neo4j is a lot of fun the two-way relationships are very useful when you’re crawling your graph all different directions. There in my design spec but I actually haven’t needed to use them yet. It’s a very powerful data structure and illuminates most and use cases that would otherwise call for a relational database


> _[2020-07-09 18:03:57]_ **Ryan King**:

Yes, that could definitely be beneficial, thanks! I'll have to develop better understanding of what jobs are required from the database and client to reach the best solution (I also need the graph on the client).



I'm thinking mongo might be the simplest solution for the time being - it's easy to learn and will remove the constraints I'm experiencing with postgres. And once the app is further developed I can reassess if a graph database will be more beneficial, I think it's too early to know right now.



Thanks for all your advice, it's been really helpful :)


> _[2020-07-09 20:31:35]_ **Edward de Jong**:

Also when you are asking about Database is you kind a need to specify what language your programming in because not every database has bindings for every language, and also some languages have concepts and data types which are not storable in many databases. It becomes a gigantic pain in the ass when you are having to encode and decode constantly when moving to and from the database. I would call this in impedance mismatch, and it’s one of the reasons I put the database inside the language in Beads because I have data types that don’t exist and other systems such as extended arithmetic, and a bookean that has four states. 

---

_[2020-07-09 06:43:19]_ **Ivan Reese**:

One way to categorize FoC projects is to consider the following spectrum. (Go with me here — resist the urge to treat this as a multidimensional space.)



In the center, we have projects that resemble typical programming languages. These tools are designed with particular semantics that the programmer will employ to structure their problem solving. They are general purpose. They don't have much regard for the particular kinds of problems being solved. This is your Java, Clojure, Vulkan, brainfuck, etc.



Off to one side, you have programming tools that have both tightly defined semantics and a focus on solving particular kinds of problems. These are specialized. This is Excel, Notion, Max/MSP, OpenGL, bash, etc.



Off to the other side, we have programming tools that, while they still have semantics, don't expect you to work entirely within those semantics. They have even less regard for the problem domain. These are tools that expect you to first build some new tools from or within them, then solve your problem with those tools. This is Racket, and arguably REST, RDF, stored procedures in a DB, and other things.



Now my question: are you building an FoC project that falls into the latter category? If so, talk about that a bit. What's the rationale?


> _[2020-07-09 07:18:47]_ **nicolas decoster**:

One important aspect of what I want to build, is the possibility for the users to define their own visual representations for their programming artifacts. Of course the programming environment will come with some visual semantics as building blocks or general tools, but I would like to allow anybody to add new one.



The idea is that the history of visual programming is full of unsuccessful attempts (for an "incomplete"/old list see for example: [http://blog.interfacevision.com/design/design-visual-progarmming-languages-snapshots/](http://blog.interfacevision.com/design/design-visual-progarmming-languages-snapshots/)). So I feel that finding and designing the "good one" from start is quite hard and will most certainly miss essentials features. So I want to provide some core functionalities that are enough to build complete things but also let some other visual tools emerge from actual usages.



This idea is in fact at the core of my project.


> _[2020-07-09 07:21:39]_ **nicolas decoster**:

In fact, "visual representations of programming artifacts" will be first class citizens in my programming environment, I guess in a similar way that functions are first class citizens in function oriented programming.


> _[2020-07-09 08:47:54]_ **Stefan Lesser**:

I’m having a hard time resisting that urge to at least turn this into a 2-by-2, but ok… I’ll play by the rules.



Given that spectrum I guess I fall into the latter extreme, because I think the power that programming gives to programmers is to improve their own process and often through building their own tools (albeit “tool” here can have a much broader definition). If you can program, you can make computers do things that regular people can’t make them do. 



To democratize access to that power, a great alternative to teaching everybody how to code is to instead make building things easier. And I still believe that is very much possible, because we currently live deep in just one specific branch of the solution space which was strongly influenced by the needs to not just create things, but to satisfy certain success metrics (revenue, popularity, engagement, etc.).



That’s why we can find so many promising ideas closer to the trunk of the tree in the papers of the 60-80s, when using computers was much closer to programming them, and when visions were mostly driven by imagination and less warped by specific incentives.



The most important reason for giving people the power to build their own tools instead of building them for them is that they know what they need best and I will never be as good as them to really understand what they really want or need. They might not understand it fully themselves. That’s why they need to build it themselves. They need to invent it themselves. They need to discover solutions on their own. And to do so, they need to have the power to do that. And that needs to be simpler than it is today.


> _[2020-07-09 14:40:52]_ **Garth Goldwater**:

i’m trying to build the latter but i’m trying to make it explicitly feel like the opposite side, where the problem domain is the transformation of data over time. hard to describe with words but i’ll give it a shot:



if your tools let you describe and transform structured data, and they can take unstructured data and turn it into data, and you describe those transformations and build the tool in the same data format, then you should be able to use the tool on itself to make the tool look like your domain


> _[2020-07-09 14:55:07]_ **Garth Goldwater**:

like, you start by putting some specific piece of data into, idk, a form? and then you extract the stuff that changes, describe how it changes, and then repeat until you have your model of the domain


> _[2020-07-09 18:40:47]_ **Ivan Reese**:

**@nicolas decoster**




> One important aspect of what I want to build, is the possibility for the users to define their own visual representations for their programming artifacts. Of course the programming environment will come with some visual semantics as building blocks or general tools, but I would like to allow anybody to add new one

When the user defines a new visual representation, is that like defining a new datatype or function, or is it more like defining a new paradigm or means of evaluation — new semantics — like imperative, FP, stack-based, CSP, eager-vs-lazy, curried, etc.?


> _[2020-07-09 18:52:24]_ **Ivan Reese**:

Based on the responses so far (thanks!) I think I underspecified the last category. I was hoping the examples would make it clear, but in the cold light of morning yadda yadda.



As I said in the reply to Nicolas, I'm interested in thoughts/work at the paradigms & semantics level. Tools that are designed to be a scaffold for language (or "programming system", though I dislike the term) experimentation. As a node-and-wire example, it'd be an environment that may include nodes and wires, and some execution strategy that covers what to do with those nodes and wires, but that doesn't expect you to stick with that execution strategy. You can (and are encouraged to) define what it means to be a node or an edge — to turn [http://puredata.info](http://puredata.info) into [http://joshuahhh.com/projects/pane/](http://joshuahhh.com/projects/pane/). You can decide that there are no edges.



When someone like Rich Hickey [https://clojure.org/about/history](https://clojure.org/about/history) a Clojure or a Datomic, this is the level that he's thinking at: What semantics should Clojure have, and why? I'm interested in tools that are designed to support working at this level. I don't know what to call them, or how to even frame them.


> _[2020-07-09 19:39:00]_ **nicolas decoster**:

Ivan, it is exactly what I have in mind and what I want to build: an environment that provides tools to allow the definition of visual representations and how these representations are used to produced a behavior. Even if it can stay at the "new datatype or function" definition level, the real plus is to allow the user to tell what to do with the information in the visual representation.



So, one can define some nodes and wires representation for a build system, where rounded boxes defines files, squared boxes for bash building rules and links for dependencies, and that this produces a `Makefile`. Someone else might use something similar but to produce a `.gitlab-ci.yml` file. And a third one will have the rules in something else than bash (maybe another visual?) and that it is plugged directly to a "live" customed building system (maybe a serverless infra).


> _[2020-07-09 20:38:41]_ **Ivan Reese**:

If I understand it correctly, that's all stuff you could do with a programming language like C or Java, right? In your system, the programmer defines some data or a function and binds it to a certain graphic ("rounded boxes defines files, squared boxes for bash building rules"), which is akin to binding symbols/identifiers to functions or data in a text PL, and then the programer decides which of those graphics to invoke in various contexts and at various times ("links for dependencies") much like writing the main() function. That means what you're designing will be a peer to a traditional general purpose programming languages, whereas most visual languages currently aren't even designed to be that powerful.



But what you can't do within C or Java is change their semantics. You can't change the way code is executed, not without changing the compiler/interpreter (at which point, you're no longer making a typical C or Java program that'd work with any C compiler or JVM). You can't turn C into a lazy evaluated language. At best, you can use C to create a new language that is lazy evaluated.



An example in a hypothetical visual language where code is tree-structured would be: can you, working entirely within the language, decide whether execution is "pushed" from the root node down, reevaluating every node as it goes, or whether execution is "pulled", starting from a leaf and evaluating back up to the root?



Another example — a visual programming environment in which you can define the "grammar" and how it's parsed. So you could build an execution strategy that makes use of color, or that makes use of proximity, or that makes use of the fineness of detail. You aren't saying "round boxes represent files", but rather "roundness of corners is a semantic detail, so whenever a corner is rounded, here's how to interpret that". For instance, you could say that shapes should be evaluated in order of roundness: circles come first, roundrects second, and boxes last.



Another example — a node-and-wire environment where you can control whether edges simply associate something on one end with something on the other end (as like a function call), or mutably remove a value from storage on one side and insert it into storage on the other side (as like an inbox/outbox), or are themselves mutable storage (as like a queue).



I think what you've described is a big improvement on what currently exists. But it doesn't feel like it fits the (admittedly, very poorly defined) region of concept space I'm trying to map out. I wish I had better theoretical PL chops so I could know what, if any, terminology to use here.


> _[2020-07-09 20:54:59]_ **Garth Goldwater**:

i don’t know if there are specific terms for that but it’s exactly what VPRI was working on


> _[2020-07-09 21:03:34]_ **nicolas decoster**:

First, I must say that as I haven't yet actually worked on all this, I have not a precise vision of how this will work, and maybe the examples are not very well chosen/realistic/etc.

But the idea is really to try to give the maximum opportunities to users to define some visual representations and what they means in terms of behaviors. So ultimately, all your examples are really good illustrations of the kind of things I would like to allow the users to do. I agree, my examples are too simple: only mapping visuals to text languages, I definitely want to go further!


> _[2020-07-09 21:04:25]_ **Garth Goldwater**:

link spam (none of these are visual, unfortunately):


* open, extensible composition models: [http://www.vpri.org/pdf/tr2011002_oecm.pdf](http://www.vpri.org/pdf/tr2011002_oecm.pdf)
* open, extensible object models: [https://www.piumarta.com/software/cola/objmodel2.pdf](https://www.piumarta.com/software/cola/objmodel2.pdf)
* the reflective language Black by Kenichi Asai: [http://pllab.is.ocha.ac.jp/~asai/Black/](http://pllab.is.ocha.ac.jp/~asai/Black/)   
*         some pretty cool video content on this subject by Nada Amin: [https://www.youtube.com/watch?v=SrKj4hYic5A](https://www.youtube.com/watch?v=SrKj4hYic5A)
*         another one on towers of interpreters: [https://www.youtube.com/watch?v=Ywy_eSzCLi8](https://www.youtube.com/watch?v=Ywy_eSzCLi8)
* red/rebol programming language (this is not well documented. if anyone wants to go on a hunt i’m looking for study partners): [https://www.red-lang.org/](https://www.red-lang.org/)
*        in particular: its weird binding methodology [https://en.wikibooks.org/wiki/Rebol_Programming/Advanced/Bindology](https://en.wikibooks.org/wiki/Rebol_Programming/Advanced/Bindology) (rebol and red are very similar)
* the kernel programming language: [https://web.cs.wpi.edu/~jshutt/kernel.html](https://web.cs.wpi.edu/~jshutt/kernel.html)
* the io programming language: [https://iolanguage.org/](https://iolanguage.org/)
* the ioke programming language: [https://ioke.org/](https://ioke.org/)
* the factor programming language: [https://factorcode.org/](https://factorcode.org/)
*       especially the “parsing words” section here: [https://andreaferretti.github.io/factor-tutorial/](https://andreaferretti.github.io/factor-tutorial/)


> _[2020-07-09 21:08:45]_ **Garth Goldwater**:

[Ivan Reese](https://twitter.com/spiralganglion) this area is a particular obsession of mine, and I suspect it may require a visual representation of some primitives to do with the barest stuff computation/interpretation/semantics are made out of—stuff like transformation, parsing, term rewriting, replacement, storage, etc


> _[2020-07-09 21:10:32]_ **Garth Goldwater**:

incidentally, i’m trying to figure out a good visual representation for lists like the one i just dropped in here—anyone have any ideas? i don’t know what to call them… bundles?


> _[2020-07-09 22:48:48]_ **Ivan Reese**:


> trying to figure out a good visual representation [...] i don’t know what to call them

This dissonance is delightful.


> _[2020-07-09 23:23:59]_ **Ivan Reese**:


> lists like the one i just dropped in here

Which list? The "link spam", or the "stuff like transformation..."?


> _[2020-07-09 23:27:12]_ **Garth Goldwater**:

“link spam”—and dissonance is the house i live in, baby


> _[2020-07-09 23:28:21]_ **Garth Goldwater**:

stuff like little packages of information with a few references and some comments—i often find myself sending them on various messaging platforms and the form feels wrong. plus messages are functionally ephemeral


> _[2020-07-09 23:40:52]_ **Shalabh Chaturvedi**:

Not sure if I'm getting it right, but I don't think these are programming 'tools' as much as they are 'programming material'.



These could allow a fair bit of diversity in not just what kinds of tools emerge but what kinds of paradigms emerge as well. The main thing is whatever is built on top can be mapped back into the 'material view' where you just look at the built system through a view showing 'blobs of the original material'.



Would you say Unix is such material - (tends to be flexible in terms of what the static structures and dynamic processes mean). Unix with byte files and OS processes provides some structure for static/dynamic structures but within that we have a wide variety of programming paradigms.



Another example maybe could be apparatus? ([http://aprt.us/](http://aprt.us/))


> _[2020-07-09 23:59:52]_ **Ivan Reese**:

Yeah, I think "programming material" is a good hand-wave to throw into the dance we've got going.




> The main thing is whatever is built on top can be mapped back into the 'material view' where you just look at the built system through a view showing 'blobs of the original material'.

I mean, that'd be cool, but it depends what one's goals are. That's why I'm curious to see what folks here are doing that might fit this jello mold (as in a mold made of jello) — what rationale might one have for wanting to force so much responsibility onto the user?



Yeah, Unix probably counts as something like this, in that it's a "thing that sits under my compiler and generally doesn't force my compiler into a particular paradigm". But on the other hand, it's not exactly like you are building your language paradigms out of the pieces unix provides. Unix is just there to facilitate reading, writing, and executing. So in that sense, it might even be too far to that latter extreme of the spectrum.



I think the VPRI connection was the best fit, so far, for what I have in mind. So — who here is taking another crack at that chestnut?


> _[2020-07-10 00:06:15]_ **Shalabh Chaturvedi**:

OK I got a couple of more terms that might be of interest: Language Workbench and Language oriented programming: [https://en.wikipedia.org/wiki/Language_workbench](https://en.wikipedia.org/wiki/Language_workbench)

(you said Racket and Racket is an example on page, so..)


> _[2020-07-10 00:30:54]_ **Garth Goldwater**:

ah, i found a better link for Red: [https://www.red-lang.org/2013/11/041-introducing-parse.html#:~:text=It%20is%20an%20embedded%20DSL,implementing%20embedded%20and%20external%20DSLs](https://www.red-lang.org/2013/11/041-introducing-parse.html#:~:text=It%20is%20an%20embedded%20DSL,implementing%20embedded%20and%20external%20DSLs). the parse dialect is really where it starts to shine IMO


> _[2020-07-10 00:33:54]_ **Garth Goldwater**:

dynamic dialect development (again underdocumented): [https://gist.github.com/dockimbel/7830815](https://gist.github.com/dockimbel/7830815)

cant believe ive only found this site just now—it looks very promising: [https://ungaretti.gitbooks.io/red-language-notebook/content/parse.html](https://ungaretti.gitbooks.io/red-language-notebook/content/parse.html)

a pretty good overview of some of the weirdness that lets parse be so adaptable: [http://blog.hostilefork.com/why-rebol-red-parse-cool/](http://blog.hostilefork.com/why-rebol-red-parse-cool/)


> _[2020-07-10 06:08:13]_ **nicolas decoster**:

I also like a lot "programming material". It conveys the good meaning: some things that can be used/assembled/combined for programming, without being to precise about its origin which can exist a priori or that can be set up on need.


> _[2020-07-10 07:46:40]_ **Konrad Hinsen**:

[Shalabh Chaturvedi](https://twitter.com/chatur_shalabh) Wondering if your term "programming material" is an explicit reference to Alan Kay's comment about Lisp not being a language but building material.


> _[2020-07-10 08:51:57]_ **Shalabh Chaturvedi**:

**@Konrad Hinsen** that wasn't in my active memory, but I have heard that quote.


> _[2020-07-10 13:34:23]_ **nicolas decoster**:


> what rationale might one have for wanting to force > so much>  responsibility onto the user?In my vision, the idea is not to force the user but instead give this ability to those who want/need it. I.e mainly  power users. And once a user has create an expressive visual representation it can be shared to other users that can use it without having to take this "responsability".

---

_[2020-07-09 08:37:40]_ **Shubhadeep Roychowdhury**:

Did you guys know about this one - [https://brython.info/index.html](https://brython.info/index.html)


> _[2020-07-10 00:09:35]_ **Ope**:

Interesting. Hadn’t heard of it


> _[2020-07-10 09:24:11]_ **Shubhadeep Roychowdhury**:

Me neither.

---

_[2020-07-09 14:30:00]_ **Tyler Adams**:



---

_[2020-07-09 14:35:13]_ **Garth Goldwater**:

one thing i’d like to see in visual programming paradigms is using an object-oriented heuristic: if you have a bunch of identifiers that start or end with the same word (eg xReducer, yReducer or ICommand, IUser), in OOP it should probably be a type. in visual programming it should probably be an affordance, like a color, shape, symbol, or some combination


> _[2020-07-09 14:59:12]_ **Ryan King**:

Reminds me of zachtronics games [http://www.zachtronics.com/opus-magnum/](http://www.zachtronics.com/opus-magnum/)



There's also something interesting about being able to see your code move and execute. It makes it really easy to spot failures in logic.


> _[2020-07-09 15:14:06]_ **Ope**:

Hm I think this is a good idea but I worry it would get out of hand quickly. 

Another example of an affordance would be that if it’s a commutative operation the symbol has to be symmetric etc. There are probably more rules like this - also similar to linting rules where class names are capitalised. Functions are lowercase etc


> _[2020-07-09 16:32:39]_ **Sverrir Thorgeirsson**:

I really like that [Ryan King](https://twitter.com/_RyKi_). being able to see the code move and execute is also the core idea behind Philip Guo's Python Tutor ([http://www.pythontutor.com](http://www.pythontutor.com) for those who are unfamiliar with it)


> _[2020-07-09 18:22:09]_ **Garth Goldwater**:

[Ope](https://twitter.com/opeispo) i think you’re right about it getting out of hand if the system isn’t carefully designed. there are a few ways to combine things that might make such a system more robust to change. For example, in the case of a data structure, if you have visual primitives that match your data primitives, you could potentially combine those visual primitives in the same way you combine the semantic primitives. i think it’d also be important to start with something smaller than, say, java.



At a minimum, we’re doing our best to keep all this complexity in our heads using naming things for our existing systems, which work ok (for a sufficiently cynical definition of “ok”)



On the other hand, we track a lot of visual primitives in everyday life. In the common case with languages like english that are made up of letters, cognitive studies show that we tend to read words sort of like individual gylphs (wihch is why you can raed wrods werhe the ltetrs are jmuebld according to Many Memes). and with experts using systems, like airline pilots, mathematicians, and carpenters, people seem to have a facility for remembering thousands of things provided that they have a context where theyre using them often. Or even in games—for example, most hearthstone players have all of the cards and their effects memorized by picture just as a side effect of playing the game. more so for magic the gathering, where the smallest set of allowed cards for tournament play is usually around 2,700


> _[2020-07-09 20:38:35]_ **Ope**:

[Garth Goldwater](https://twitter.com/no_defects) Yup, totally. I think that’s why text is so powerful. Each word becomes a unit - has an associated sound, conceptually a thing. Like the example you just so elegantly described - it means there is redundancy and we can error correct to get the information back out even when it has been distorted. 


> _[2020-07-09 20:41:24]_ **Ope**:

And about visual primitives it’s interesting that memory systems use things like a memory palace. I think the key trick is making information more interesting and redundant - can’t just be a bunch of unrelated symbols on a screen. So maybe text isn’t that powerful 😄


> _[2020-07-09 21:15:19]_ **Garth Goldwater**:

now im thinking that… if data has a “default” visual display, and you start with example data, and things like “user profile” are displayed visually somewhere… you may just be able to get away with reusing the visual design from the interface you want to display as the default symbol for that data structure…? and the buttons or dials or whatever for the actions


> _[2020-07-09 21:15:32]_ **Garth Goldwater**:

seems like a big stretch, but the type you could train your system to make


> _[2020-07-09 22:12:16]_ **Ope**:

Not sure I understand you but there are things that are better edited visually and others that text is more suited for. Data structures are static and can easily be visualised, actions less so. I suspect that’s a key part of the problem


> _[2020-07-09 22:21:54]_ **Garth Goldwater**:

hm. but most actions can be visualized as a transformation from one piece of data to another is what im saying (i think)


> _[2020-07-10 07:29:20]_ **Konrad Hinsen**:

Throwing in a weird idea: has anyone looked at the coding equivalent of different types of writing systems? For example, is there a useful analog of Chinese writing, i.e. a mixture of visual and symbolic clues for expressing computations?


> _[2020-07-10 13:13:56]_ **Garth Goldwater**:

sparklines, explorable explanations/nicky case’s work immediately occur to me. also [http://calca.io](http://calca.io)


> _[2020-07-11 06:38:51]_ **Konrad Hinsen**:

Sparklines are a great example! Explorable explanations are more in the realm of visualization for me: all visual, very little symbolic. As for calca... never seen this before, looks like a pragmatic adaptation of the idea of LightTable. Makes me consider much of mathematics notation as a visual/symbolic hybrid.


> _[2020-07-11 22:00:15]_ **Garth Goldwater**:

you might also be pleased to see (if you haven’t) the inspiration for sparklines: [https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=00004p](https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=00004p)


> _[2020-07-11 22:01:12]_ **Garth Goldwater**:

roughly “if you look at saturn with a really great lens on your telescope, it looks like <this>. if you look at it with a really crappy lens, it looks like <this>—galileo

---

_[2020-07-10 01:19:44]_ **Ope**:

Looks relevant to this group - [http://shape-of-code.coding-guidelines.com/2020/06/30/beta-evidence-based-software-engineering-book/](http://shape-of-code.coding-guidelines.com/2020/06/30/beta-evidence-based-software-engineering-book/)


> _[2020-07-10 03:50:57]_ **Zubair Quraishi**:

A great but also long read. Any parts of this stand out to you in particular?


> _[2020-07-10 10:05:33]_ **Ope**:

Very long read 😅 -  It contains a book. Not read it but skimmed the table of contents and thought it was relevant.

---

_[2020-07-10 11:05:54]_ **Jacob Chapman**:

this is an interesting comparison of syntax across many languages



[http://rigaux.org/language-study/syntax-across-languages.html](http://rigaux.org/language-study/syntax-across-languages.html)



I'm trying to find a website that is similar and shows how to implement specific algorithms in each language grouped by algorithm. does anyone know the name of that website?


> _[2020-07-10 11:23:23]_ **Ishan**:

probably this?

[http://rosettacode.org/wiki/Rosetta_Code](http://rosettacode.org/wiki/Rosetta_Code)


> _[2020-07-10 11:29:36]_ **Jacob Chapman**:

ahh yeah I think that's the one. I must have glanced over it thinking it was an ad for rosetta stone lol


> _[2020-07-10 12:40:13]_ **Felix Kohlgrüber**:

There's also [https://en.wikibooks.org/wiki/Algorithm_Implementation](https://en.wikibooks.org/wiki/Algorithm_Implementation)


> _[2020-07-10 14:59:45]_ **Wouter van Oortmerssen**:

yup, used that page a couple of times when I was ambivalent on how to do some syntax in my language 🙂


> _[2020-07-10 19:15:02]_ **Edward de Jong**:

The "syntax across language" is a great page, very interesting to see the different approaches.

---

_[2020-07-10 12:32:46]_ **Xandor Schiefer**:

Related (happened to be watching this today): [https://www.youtube.com/watch?v=uEFrE6cgVNY](https://www.youtube.com/watch?v=uEFrE6cgVNY)


> _[2020-07-10 21:38:47]_ **Ope**:

Really really loved this talk. For example the repeat bit. 


> _[2020-07-11 19:18:57]_ **Ray Imber**:

Random story. I graduated from UNLV the semester before Dr. Stefik was hired there. I remember there being some buzz in the CS department about this new professor lol. I regret that I never was able to meet him or take a class with him. His work is really interesting.

---

_[2020-07-10 19:23:56]_ **Garth Goldwater**:

[https://youtu.be/A_fe2c6IUUo](https://youtu.be/A_fe2c6IUUo) i know ink & switch gets a lot of play here. this video has it all: a really cool app, a discussion of interface philosophy and decisions, and engineering roadblocks at the edge of performance (plus a Q&A i haven’t finished)


> _[2020-07-10 23:35:22]_ **Edward de Jong**:

requiring the pencil for your app to work relegates the product to niche status. I remember products requiring a Light Pen, boy was that lousy technology. Software that requires hardware narrows your audience terribly. It also prevents people from trying it out on a 30 day trial, because they don't own the pre-requisite hardware. History has not been kind to software with this requirement. The Wacom tablets are used by most of the artists I know, because they have a tilt sensing in the pen, and it has really high precision. The Apple pencil is different technology than Wacom, and doesn't have tilt compensation. But it is pretty good, and much cheaper than the Wacom. Apple has the ability to bump the refresh rate up on their iPad Pro tablets, an obscure feature that few realize exists. So far, nobody has beaten the Wacom Cintiq system for overall artistic feel. There is also the friction coefficient, which Wacom cares about. Apple has a glossy surface which doesn't "bite" well. An artist's time is very valuable, and having the best equipment is cheap in the larger scheme of things.


> _[2020-07-11 00:51:23]_ **Garth Goldwater**:

procreate is a counterpoint to that idea from this very day


> _[2020-07-11 00:51:42]_ **Garth Goldwater**:

not to mention the entire concept of a tablet computer… which requires tablet hardware


> _[2020-07-11 01:16:33]_ **Edward de Jong**:

I have revised the term.


> _[2020-07-11 13:21:29]_ **Chris Maughan**:

FWIW, regarding friction, I have the iPad Pro with a Paperlike 2 screen protector, and it is easily the closest thing to paper I've ever used.   I mostly use iPad for notes these days (along with the 'Concepts' app with an infinite canvas).


> _[2020-07-11 20:39:22]_ **Edward de Jong**:

Ever since the iPad lowered its price dramatically (often during holiday times, dropping below $300), Apple has crushed the Android competition, and with its incredible software store is a formidable computing platform, now actually a larger installed base than their desktop computers.  I can see the real reason for ARM on the MacBooks is that they want to have the same software available, because the Mac OS has stagnated, and as a percentage of total computing is dropping fast. I sure didn't like it when Apple orphaned the iPad 2 and 3, turned my pristine devices into paperweights. But that's Apple for you; fairly ruthless about backwards compatibility.


> _[2020-07-12 21:44:38]_ **Ray Imber**:


> engineering roadblocks at the edge of performance

I can't help but get the impression that she isn't aware of the years of research in 3D game engine design. She is basically re-discovering scene graph optimization techniques like LOD rendering and spatial B-tree optimizations that game engines have been using for years. Techniques like offloading tasks onto another thread that may cause you to miss hard real time deadlines is how game engine physics and game AI have been implemented for years.



It's weird because she mentions taking the idea of a frame rate counter from graphics programming, but then seems to ignore everything else from graphics programming?



Definitely a cool app from a UI / UX research perspective though 🙂

---

_[2020-07-10 21:37:45]_ **Ope**:

I think this is quite interesting - [https://twitter.com/ProvablyFlarnie/status/1281696078811676672?s=20](https://twitter.com/ProvablyFlarnie/status/1281696078811676672?s=20) speaks to how we see code differently. Do you see code? Do you see a flowchart or see nothing?


> _[2020-07-11 01:42:24]_ **Ivan Reese**:

Whoa those are some restrictive choices. Very normcore. Yeesh.



I see something that resembles a little factory. Like Factorio, I guess. Lots of little machines moving around, picking up data, scanning it for three-ness or five-ness, passing the data to other machines.



Maybe I've been watching too much [https://www.youtube.com/watch?v=ei7wHywxJj0](https://www.youtube.com/watch?v=ei7wHywxJj0).


> _[2020-07-11 04:35:55]_ **Andrew F**:

My visualization of FizzBuzz is closer to a truth table than anything else.


> _[2020-07-11 08:14:11]_ **nicolas decoster**:

I see circle graphs (with three and five nodes)


> _[2020-07-11 08:52:21]_ **Tor**:

I imagine the output from 1-100


> _[2020-07-11 09:00:58]_ **Ionuț G. Stan**:

I think I see a stream of numbers flowing from left to right entering some boxes that would: 1. limit the stream to 100 numbers and 2. map each incoming number to its string representation, as asked by the problem. And what I see in the boxes is code.


> _[2020-07-12 07:12:11]_ **Jack Rusher**:

I see a sort of 3D manifold with different number classes in different lobes.

---

_[2020-07-11 09:00:04]_ **Tor**:

What are some good resources around the power imbalance in the interaction of software and users? For example, the disregard for consent in a dialog box where the option “No” is replaced with “Not now”.


> _[2020-07-11 09:01:18]_ **Tor**:

Or the way many apps hold your data “hostage” and only allows you to work on it with whatever functionality is implemented in the app


> _[2020-07-11 09:08:25]_ **Tor**:

Would it be an exaggeration to make a political analogy to fascism? As I understand fascism it’s designed to be acceptable to the majority, despite being an autocratic/bureaucratic and nonconsensual system. That seems to be the ideology behind a lot of software as well: it only has the pretense of the user having power, when the system actually has absolute power and probably won’t accept user actions that go against its own interests. But for the most part we accept the system for the benefits we can get from it.


> _[2020-07-11 09:18:06]_ **Mariano Guerra**:

[https://www.darkpatterns.org/](https://www.darkpatterns.org/)


> _[2020-07-11 09:54:31]_ **Tor**:

Thanks. Dark patterns are a good collection of examples of violations, but I’m looking for more of an idea-based or philosophical perspective on these issues. I’m imagining the free software movement might have ideas, but I’m not sure they are always so concerned with the user-experience angle


> _[2020-07-11 11:50:59]_ **Doug Moen**:

For a philosophical perspective on power imbalance in technology, you could look at Ivan Illich's book "Tools for Conviviality". Here are some quotes I took from my reading of the book:


* I use the term “tool” broadly enough to include not only simple hardware such as drills, pots, syringes, brooms, building elements, or motors, and not just large machines like cars or power stations; I also include among tools productive institutions such as factories that produce tangible commodities like corn flakes or electric current, and productive systems for intangible commodities such as those which produce “education,” “health,” “knowledge,” or “decisions.” I use this term because it allows me to subsume into one category all rationally designed devices, be they artifacts or rules, codes or operators, and to distinguish all these planned and engineered instrumentalities from other things such as basic food or implements, which in a given culture are not deemed to be subject to rationalization. School curricula or marriage laws are no less purposely shaped social devices than road networks.
* A convivial society should be designed to allow all its members the most autonomous action by means of tools least controlled by others. People feel joy, as opposed to mere pleasure, to the extent that their activities are creative; while the growth of tools beyond a certain point increases regimentation, dependence, exploitation, and impotence.
* Tools are intrinsic to social relationships. An individual relates himself in action to his society through the use of tools that he actively masters, or by which he is passively acted upon. To the degree that he masters his tools, he can invest the world with his meaning; to the degree that he is mastered by his tools, the shape of the tool determines his own self-image. Convivial tools are those which give each person who uses them the greatest opportunity to enrich the environment with the fruits of his or her vision. Industrial tools deny this possibility to those who use them and they allow their designers to determine the meaning and expectations of others. Most tools today cannot be used in a convivial fashion.


> _[2020-07-11 11:56:44]_ **Doug Moen**:

In May, there was a "Convivial Computing Salon", with organizers, presenters and attendees drawn from the FoC community, and inspired by Illich's book. I like the term "convivial computing" as a slogan for humanistic computing. [https://2020.programming-conference.org/home/salon-2020#About](https://2020.programming-conference.org/home/salon-2020#About)


> _[2020-07-11 12:32:31]_ **Doug Moen**:

In my own thinking on humanistic or human-centred computing, I distinguish between two rather different goals for computing technology:


* Computers are tools that make us smarter (as individual users), that "augment human intellect", in the words of Douglas Engelbart. Computers serve the needs of users.
* Computers are tools that exist to serve the needs of the oligarchy and the state. The role of users is to be exploited by the corporations that create, own and control the technology. Cory Doctorow's blog and the [http://EFF.org](http://EFF.org) (Electronic Frontier Foundation) are working to publicize this trend and organize resistance against it.


> _[2020-07-11 14:43:00]_ **Kartik Agaram**:

Jaron Lanier's writings might be relevant. I think he's talked about AI being on one side of this divide and IA on the other. I don't have a citation off-hand, sadly.



I've never heard mainstream software compared explicitly to Fascism, though. Also curious if any one else has.


> _[2020-07-11 16:13:20]_ **Wouter van Oortmerssen**:

besides "dark pattern", "user hostile" is another good term to google for


> _[2020-07-11 16:14:36]_ **Wouter van Oortmerssen**:

sadly, this mode of software is almost the default for any software where not 100% of the functionality/data is on the local device (i.e. connects to a "cloud").


> _[2020-07-11 16:16:39]_ **Wouter van Oortmerssen**:

software thats entirely local (old-skool productivity app, or a single player game) has no motivation to use dark patterns, since it can't profit from it


> _[2020-07-11 16:17:07]_ **Wouter van Oortmerssen**:

So that's increasingly the kind of software I am drawn to.. its refreshing


> _[2020-07-11 16:33:16]_ **Wouter van Oortmerssen**:

Even something like the Slack we're typing this into.. it is clear we are the product, not the customer. Slack's goal is to attract as many users as possible, not to make anyone individually happy. Which means UI design optimized for the middle of the bell curve. I remeber the last desktop slack-like I used, Mirc, with its gazillion options and user side scripting. Slack would never have that because it doesn't serve its purpose. It's only meant to help you when it helps them.


> _[2020-07-11 18:40:35]_ **Shalabh Chaturvedi**:

If we're talking about agency and ownership on data, Local-first software may be relevant: [https://www.inkandswitch.com/local-first.html](https://www.inkandswitch.com/local-first.html)


> _[2020-07-11 20:24:16]_ **Edward de Jong**:

Unfortunately, the greed and stupidity of users has brought us to the current situation, where companies have been forced by the communists/fascists amongst us, who insist that all software be free. But companies are a kind of living thing, they need to obtain energy in the form of money to keep their staffs going, and so inevitably you then see ruthless firms like Facebook who intensely data mine so as to generate an income stream. If people would pay a fair price for the services they use, the companies wouldn't need to resort to tricks to find revenue on the back end. You don't see Adobe Creative Cloud users getting mined like this, because they are paying a subscription fee, and Adobe thus doesn't need to do this kind of thing. But the minute you make a service that actually costs hundreds of millions to run free to users, then you are going to have some invisible revenue generating mechanism, that might be highly detrimental to your privacy or have other non-obvious negative effects.



Asking something for nothing is my definition of a jerk. Yet people now have been trained by savage firms to expect this, and it is quite unfortunate.


> _[2020-07-11 20:27:38]_ **Edward de Jong**:

The article above by Ink and Switch has a fun graph (optimistic numbers, not really achievable) of the time between cities.


> _[2020-07-11 20:44:05]_ **Ivan Reese**:

Adobe are a great example of this sort of power imbalance. They introduce undocumented breaking changes into CC apps, but don't let you stay on old versions past a certain point — this one has repeatedly hurt our art team. They only let businesses adjust licensing on a fixed schedule, so you can't easily downsize your plan if (say) half of your art team switches entirely to non-Adobe tools. They use all the bundling tactics we hate from cable companies. They're increasingly requiring reliance on their cloud features instead of local, user-ownable data. They continue to use pseudo-proprietary file formats for said local data. They are a vendor of various adtech integrations (sup, TypeKit).



Adobe are a land of contrasts, to borrow a meme. We often look at their products as exemplars of direct manipulation and iterative evolution across decades, but as a business they're every bit as hostile as FAANG.


> _[2020-07-11 21:22:18]_ **Kartik Agaram**:

More so, from the sound of it.  More like Oracle or IBM levels of evil.


> _[2020-07-11 21:40:13]_ **Wouter van Oortmerssen**:

[Edward de Jong](http://beadslang.com/) err.. that graph contains roundtrip numbers for packets, and they are entirely achievable


> _[2020-07-11 21:43:44]_ **Kartik Agaram**:

A few years ago I wrote [https://www.ribbonfarm.com/2014/09/09/geopolitics-for-individuals](https://www.ribbonfarm.com/2014/09/09/geopolitics-for-individuals), which seems relevant here. Every new technology creates a space for a more geopolitical way of thinking to come to the fore. (Not everyone does it, but those who do find surprising opportunities.) The original age of diplomacy was about the implications of oil. The age of Fascism was about mass media. We're currently exploring the implications of software infrastructure. Firefox and Adobe don't have a fixed pecking order when it comes to virtue. Each can do things that align more with one group or another. Our periodic angst about Slack is also a sign of relying on something whose provider isn't aligned perfectly with us. In that situation it's easy for alliance to slip into exploitation. (And I use both words without any connotation of good or bad. It's worth thinking of them as just different parts of a single state space.)


> _[2020-07-11 22:25:42]_ **Tor**:

Thanks everybody for insights. Speaking of the types of business practices [Ivan Reese](https://twitter.com/spiralganglion) mentioned, it strikes me that maybe this is not really a problem of our relationship with the software itself, but of business behind it. The software is a similar proxy as a traditional service rep; both are employed to help customers when helping them is in the interest of the business, politely refusing to help using specific sanctioned language when it’s not, and just empathizing without really helping in the gray area between.


> _[2020-07-11 22:29:20]_ **Tor**:

Thus when Apple insists on me updating my OS, they can’t allow me to tell them “No”, because they believe they need to keep as many users as possible in the latest version.


> _[2020-07-11 22:34:16]_ **Tor**:

Of course, I can just keep hitting “remind me later” and it’s effectively a “No”, so it’s effectively just a silly power demonstration


> _[2020-07-12 01:33:15]_ **Edward de Jong**:

Adobe in the post Warnock era, has shifted from a purchase model to a rental model, and this has its attendant drawbacks. As a long time user of Adobe's Creative Suite, one cannot lay all of the problems with breaking changes on Adobe. Apple has deliberately broken with each successive version of OSX the super important CS series. OSX 10.14 breaks many of the apps, and OSX 10.15 kills off all 32 bit apps for no good reason other than to force you to buy new stuff. When you pay over $1000 for software, you plan to keep it working, and i personally hate subscription model software when it is a program i use perhaps once a month. Most of us are not practicing artists, and Adobe is creating the competition that may eventually damage them severely. But i also have to point out that other big companies in the software field have always been envious of Adobe, and have at times gone to war against them, spending resources to hinder or destroy them.  They have also been massive victims of piracy in the past, and the OS vendors did nothing to help them. The iTunes App Store is the first piracy free ecosystem for the PC, and it has flourished. Cheating ruins the game of capitalism, and there is so much cheating today that people are souring on the concept of capitalism. Mutually beneficial exchange of goods and services is the foundation of modern civilization, but many entities figure out it is cheaper to rig the game than to do more for less, which is the promise of ever higher technology.


> _[2020-07-12 09:39:11]_ **Stefan Lesser**:

It’s all about the business models.



If you want to have people voluntarily give you large amounts of money preferably on a regular basis, you can either deliver value that one decision maker in a company can justify (B2B) or you deliver value that consumers want to pay for (B2C), which is a lot easier if you sell bits together with atoms.



If that’s not your thing, or you want “everyone to be able to use it”, you make it free and find other ways to get paid for the value you create. That can start with harmless ads, but then often spirals into selling data about your users to advertisers because targeted ads make so much more money.



If you build something customers pay you for directly, you need to keep pleasing them by adding value; you need to keep innovating. Then everything that holds you back is in your way.



If your users aren’t your customers, you optimize for other things. Then your software just needs to run and you care a lot less about what it runs on, as long as it’s still functional and users are still using it. Better yet, you might even optimize for staying around on older platforms for longer to maximize reach.



I do believe that it’s ultimately good that we have these very different approaches, as they somewhat keep each other in check. I also think that free (as in beer) software has done a lot more harm than good to our software ecosystems.



What I find particularly interesting is that a lot of people in our industry who supposedly understand software very well, want things to be stable for eternity but at the same time always use the latest technology and don’t seem to see any problems with that.


> _[2020-07-12 10:24:24]_ **yoshiki**:

**@Tor** The Timeless Way of Building by Christopher Alexander might have the philosophy you’re searching for. It’s a book about buildings(but so much more), and one theme is his rejection of architecture as this highly professionalized, prescriptive, and paternalistic practice, instead advocating for the users of the building to be fully involved in its creation and ongoing maintenance. And to echo Doug’s quotes from Ilich, part of that is rejecting industrial methods that diminish the individual.



I feel strongly it has many deep parallels to the current situation we’re in with software, and it has inspired me to create software that truly empowers people and makes them feel alive.


> _[2020-07-12 20:21:46]_ **Kartik Agaram**:

This post feels really timely: [https://breakingsmart.substack.com/p/the-next-experiments-in-elitism](https://breakingsmart.substack.com/p/the-next-experiments-in-elitism)

---

_[2020-07-11 22:05:14]_ **Garth Goldwater**:

finally found a blog post about rebol/red that communicates some of what I suspected was interesting about it: [http://www.codeconscious.com/rebol/articles/rebol-concepts.html](http://www.codeconscious.com/rebol/articles/rebol-concepts.html) . in particular, in the screencap: the body of a function and its argument list are just data structures. so you can use them as first-class citzens as you like. please let me know if any of you know of any other languages with this level of flexibility!


> _[2020-07-11 22:06:01]_ **Garth Goldwater**:

bizarrely, some of rebol’s choices about mutability extend to the source code:


> _[2020-07-11 22:06:35]_ **Garth Goldwater**:




> _[2020-07-11 22:49:52]_ **Ray Imber**:

Lisp is the benevolent grandparent of this concept. But this aspect of Red / Rebol reminds me more of concatenative languages and stack languages like [https://en.wikipedia.org/wiki/Forth_(programming_language)](https://en.wikipedia.org/wiki/Forth_(programming_language)).



My hobby language of choice is [https://nim-lang.org/](https://nim-lang.org/). Nim is a much more traditional programming language in many ways. It exposes the "code as data" / macro features by essentially providing you with the same AST data structures that the compiler itself uses. Macros in Nim are "compiler plugins" in a very concrete way. This has it's own pros and cons and gotchas.



Not many "big syntax", non-homoiconic languages are able to do this. Rebol/Red is one of the few in this category that can.



Ruby and Smalltalk arguably achieve similar things, but in a different way. They push more semantics into the runtime via OOP and message passing.


> _[2020-07-11 23:09:26]_ **Garth Goldwater**:

yeah—this is a step beyond lisp (and by extension ruby, and maaybe smalltalk)


> _[2020-07-12 00:14:08]_ **Ray Imber**:

Can you elaborate on what you mean by "a step beyond lisp"?



It's pretty hard to beat lisp on flexibility lol.

If you look at [https://gist.github.com/chaitanyagupta/9324402](https://gist.github.com/chaitanyagupta/9324402), and Racket with [https://cacm.acm.org/magazines/2018/3/225475-a-programmable-programming-language/fulltext](https://cacm.acm.org/magazines/2018/3/225475-a-programmable-programming-language/fulltext), I think you will see the same level of flexibility, just in a different form.



IMO this is not a case in which one solution is strictly better or more powerful than another. I have a hunch that many macro, DSL generation, "code as data", and "programmable programming language" ideas are isomorphic to each other and are fundamentally equivalent.



It comes down to taste, and which solution you prefer on a practical level. I think this is an example of the phrase "there are many ways to cook an egg..." (replace with equivalent phrase from your childhood here 🙂 ).


> _[2020-07-12 00:25:49]_ **Kartik Agaram**:

It's beyond Lisp because arguments are received unevaluated, and different operations may parse their args in very different ways. More powerful than reader macros.



Also, there's a principled way for macros to track the scope of variables.



I'm not experienced in it so don't have a sense for what the cons (ha!) are.


> _[2020-07-12 00:31:50]_ **Ray Imber**:

"It's beyond Lisp because arguments are received unevaluated, and different operations may parse their args in very different ways."

Can you explain that more? I have to admit I have limited experience with reader macros myself. What you are describing sounds equivalent to reader macros to me.


> _[2020-07-12 00:41:21]_ **Kartik Agaram**:

Reader macros have to follow certain rules Red doesn't. I don't remember the details, but Red allows special syntax for urls and html I believe. You can't do that with reader macros.


> _[2020-07-12 01:01:56]_ **Ray Imber**:

The link in my first post uses as an example a reader macro for embedding a full JSON object directly into a lisp program. And [https://docs.racket-lang.org/scribble/index.html](https://docs.racket-lang.org/scribble/index.html) is like a fully embedded markdown parser that can freely mix with lisp code to create a "literate code" experience.


> _[2020-07-12 01:07:13]_ **Kartik Agaram**:

I'm not an expert on reader macros, and I wasn't including Scribble. Feel free to dig into Red and show me how I'm wrong 🙂


> _[2020-07-12 01:11:02]_ **Ray Imber**:

lol. Fair enough. I'm not trying to attack your premise. I'm legitimately curious what the differences are now. I find macros and DSL's endlessly fascinating 🙂 . I'm now googling for more details, though I'm not sure if it will bear any fruit.


> _[2020-07-12 01:13:45]_ **Kartik Agaram**:

No reason to be skeptical. I'm sure this has been discussed many times out there. I haven't seen anyone say Lisp reader macros are equivalent.



Ah, found the link about how Red tracks variable scope in macros: [https://stackoverflow.com/questions/21964110/is-there-a-overall-explanation-about-definitional-scoping-in-rebol-and-red](https://stackoverflow.com/questions/21964110/is-there-a-overall-explanation-about-definitional-scoping-in-rebol-and-red)


> _[2020-07-12 01:13:55]_ **Edward de Jong**:

Red is the rebirth of Rebol. Nenad is running the project. They have funding (done via a Crypto coin offering), and they have very active community on Gitter. They don't visit here at FoC at all. I occasionally pop in and kibitz. Anyway Rebol is effectively a language where each function is its own domain specific language.



It is fairly jarring to those coming from Algol family languages. They use colon (:) for the equal sign, and parameters to functions, which they call refinements, are prefaced with a slash /. They use a clever feature to distinguish type name spaces, a type name has an exclamation point afterwards like rect!, and then you can tell if a name is a variable or is it a type name. I've considered imitating this feature, it solves a lot of namespace collision issues.



There are various libraries which go way beyond what a Python library does for example, because it is a whole domain specific language. Red can be justly proud of its "Parse" module, which approaches the pattern matching power of Icon, the king of string manipulators.



The Red team is focusing on crypto contracts, but it has a GUI library that can make interesting things. Any dynamic language like LISP or Red abounds with user created custom languages, and learning the subtleties of those languages is not easy. I personally find that the dynamic languages create a memory burden on the reader, as the reader must have in their mind the domain specific language. For very bright people, these languages are attractive, but the high leverage achieved in these languages means that small changes can have drastic effects. Leverage works both ways.



Instead of trying to create ever more powerful stacks of function by long sequences of domain specific languages or function composition, i have tried in my Beads language to create compartmentalization, where a section of code's possible effects are constantly being narrowed, so that a mistake in a module can only have a local effect, and thus the overall system is more robust.



CSS is an example of a language i consider maddening, because an extra or missing character can cause a baffling scrambling of a page's layout. This type of fragility is not friendly to maintenance. PHP has a similar fragility to it, because it is typically generating HTML/CSS code, and thus doubly fragile. For this reason PHP is losing its luster.


> _[2020-07-12 01:15:10]_ **Kartik Agaram**:


> Instead of trying to create ever more powerful stacks of function by long sequences of domain specific languages or function composition, i have tried in my Beads language to create compartmentalization, where a section of code's possible effects are constantly being narrowed, so that a mistake in a module can only have a local effect, and thus the overall system is more robust.

Nice!


> _[2020-07-12 01:30:19]_ **Ray Imber**:


> I personally find that the dynamic languages create a memory burden on the reader, as the reader must have in their mind the domain specific language. For very bright people, these languages are attractive, but the high leverage achieved in these languages means that small changes can have drastic effects. Leverage works both ways.This is a really good point. DSL's and Macros are a double edge sword for exactly this reason. I think it has been a big contributor to lisps downfall. It's something I personally struggle with reconciling.




> Beads language to create compartmentalization, where a section of code's possible effects are constantly being narrowed, so that a mistake in a module can only have a local effect, and thus the overall system is more robust.I'm curious about how you achieve this. It reminds me of this research project, [https://github.com/melt-umn/ableC](https://github.com/melt-umn/ableC), in which they try to create a C compiler that supports extensions / plugins that could be proven to have only local effects in much the same way.


> _[2020-07-12 01:43:01]_ **Ray Imber**:

[Kartik Agaram](http://akkartik.name/about) That Stack Overflow article about scoping was very enlightening. Thank you! It makes Red remind me even more of Forth now! That's the only other language I can think of that works in a similar way.


> _[2020-07-12 01:54:34]_ **Doug Moen**:


> It's beyond Lisp because arguments are received unevaluated, and different operations may parse their args in very different ways.So it's the same thing as FEXPRs in Lisp. Not really beyond Lisp, because the idea was invented by Lisp first. [https://en.wikipedia.org/wiki/Fexpr](https://en.wikipedia.org/wiki/Fexpr)


> _[2020-07-12 01:58:50]_ **Doug Moen**:

Smalltalk-72 had something similar: an object could dynamically parse the token stream as a sequence of unevaluated arguments, and that is how message passing worked. It was incredibly powerful, but the idea was abandoned in Smalltalk-76 for a syntax that is more static and more amenable to compilation. The real issue for Smalltalk was that it was difficult for humans to predict how a program would be parsed, and the API for parsing the message stream was more complex than what Smalltalk uses today for specifying message patterns.


> _[2020-07-12 02:05:51]_ **Garth Goldwater**:

when I was referencing lisp, I meant modern and popular lisps from today—I think rebol’s model is a lot like fexprs but they seem to have a bunch of different handles for dealing with that situation. and they seem to use fexpr-equivalent stuff about a thousand times more often than older lisp programs did. I said “maybe smalltalk” because I was specifically thinking about that thing about every object carrying its own parser. i think rebol gets around some of the lack of clarity by in general writing very small programs (I’m not an expert) and keeping rules for how to treat unevaluated data very close to where you use those rules


> _[2020-07-12 02:06:04]_ **Garth Goldwater**:

forth is super similar, and I think factor’s compilation model leverages some very similar stuff


> _[2020-07-12 02:08:58]_ **Garth Goldwater**:

as far as the extra tooling for fexpr-like stuff—red/rebol seem to have a bunch of quote-like facilities for dealing with different stages of evaluation etc. like a `set-word:` vs a `'lit-word` vs a `:get-word` vs a `word`. havent figured out how all of it works together yet, but it seems like it uses the same data structure in pretty much every case… almost like clojure’s omnipresent use of nested maps/edn—but it seems to extend to binding syntax instead of just raw data. idk. I’m finding it pretty mind-bending


> _[2020-07-12 02:17:41]_ **Garth Goldwater**:

[http://blog.hostilefork.com/rebol-vs-lisp-macros/](http://blog.hostilefork.com/rebol-vs-lisp-macros/) found via a thread


> _[2020-07-12 02:28:13]_ **Shalabh Chaturvedi**:

Also relevant [https://en.m.wikipedia.org/wiki/Fexpr](https://en.m.wikipedia.org/wiki/Fexpr)


> _[2020-07-12 02:39:01]_ **Doug Moen**:

There is also this Hacker News discussion: [https://news.ycombinator.com/item?id=11587952](https://news.ycombinator.com/item?id=11587952)


> _[2020-07-12 02:44:03]_ **Ray Imber**:

Lol. I've been schooled. I was not familiar with this particular corner of comparative PL analysis. 🤣 Thank you all for the reading material. 🙏


> _[2020-07-12 03:09:57]_ **Kartik Agaram**:

As someone who's built an fexpr-based Lisp: no, Red is not like fexprs. Y'all know I like Lisp, but we lispers need to beware of treating other models as equivalent just because we can do what they do as long as we stick to s-expressions. Even reader macros (which are quite unlispy) don't get you out of jail free from the restrictions of s-expressions.



The correct response from a lisper on conversations of syntax is to pooh-pooh it: "syntax doesn't matter, dontcha know?" 😉


> _[2020-07-12 03:14:39]_ **Aleks Litynski**:

I'm sure I could google this, but what's the debugging experience like in rebol? It seems like the very flexible syntax you're describing would make visualizing debug information kind of tricky.


> _[2020-07-12 03:42:22]_ **Garth Goldwater**:

red and rebol are both actually extremely difficult to google, and the documentation is either scattered or written directly to new programmers or at people who fully grok the language (the community is similar to that of APL in this regard). from what I can tell, debugging relies very heavily on the same reflection capabilities—they have some specialized words i’m not fluent in, like `probe`, `mold`,  `bind` , and `BIND?`. I imagine that if you’ve fully learned to read the matrix, it can be really pleasant to hook into code and inspect what’s bound where, evaluate with one function and compare it to another. Like if you had wrenches that fit all the nuts and bolts on your step-through debugger—but it also seems like you have to build the debugger yourself from the kit. I’m no expert, though. I hope (wish?) we have some people with more experience with red and/or rebol specifically in the slack


> _[2020-07-12 03:43:50]_ **Garth Goldwater**:

sidenote: APL also has a really weird scoping model that I don’t fully understand but that’s alluded to during a very fast-paced breakdown of the defn compiler (available on youtube. I can find the link if anyone wants it)


> _[2020-07-12 03:48:17]_ **Edward de Jong**:

I should also point out that there are 2 main dialects of Red, Red/System is a special limited version that is intended for raw metal. It is intended for systems programming applications. Red has one big advantage is that the entire toolchain is around 1MB. So it is like FORTH in that it is super small.  A clever person can get a lot out of a language like Red.


> _[2020-07-12 09:06:48]_ **Konrad Hinsen**:

A comment on the "memory burden" issue with DSLs and related methods: it's all a matter of scale. Plenty of research papers in mathematics and physics start by introducing some new notation, which is the moral equivalent of a DSL. As long as it's a bit per paper, with no idea of universality or reusability behind it, that works very well. It starts getting problematic when someone starts with "using the notation introduced by X in referende Y ...". If you have to read another paper first just to parse the notation, it becomes a chore.

So perhaps a good solution is PSL (problem-specific language) rather than DSL. A very local scope for the language. In Lisp terms, one or two short macros that readers are expected to read and understand, rather than a complex language extension packaged as a library (which is what Racket advocates).


> _[2020-07-12 09:19:03]_ **yoshiki**:

I was always intrigued by Red's promise of being "truly full stack". I wonder how it works out in practice. Specifically, the lower level is a DSL over Red itself, so what does it feel like to cross the boundary between levels?


> _[2020-07-12 10:24:18]_ **Konrad Hinsen**:

Good question... another one: is there a good reason to choose two levels with an explicit boundary in between them? Why not just one (as e.g. on a Lisp machine)? Why not more than two? In other words, is two some kind of optimum, or just a historical accident?


> _[2020-07-12 10:28:27]_ **Doug Moen**:


>  As someone who's built an fexpr-based Lisp: no, Red is not like fexprs.The original post was about Rebol, and I was talking about Rebol, not Red. Rebol and Red are different.

There are two kinds of Lisp dialect.


* In the Macro dialects (modern compiled dialects like Common Lisp and Scheme), there are no FEXPRs. Instead, there are Macros, which receive their arguments as unevaluated syntax objects. There are two phases of evaluation. Calls to macros are expanded at compile time, not at run time. Macros are not first class values. 
* In the FEXPR dialects, you have FEXPR objects, which are like functions, except that the arguments are unevaluated syntax objects. FEXPRs are first class values. There is only one phase of evaluation: calls to FEXPRs are evaluated at run time. These dialects are interpreted, not compiled. Older examples are Lisp 1.5 and 3Lisp (these are historical dialects, not used today). A newer example is the Kernel language, a dialect of Scheme with FEXPRs instead of Macros, with multiple implementations on github: [http://web.cs.wpi.edu/~jshutt/kernel.html](http://web.cs.wpi.edu/~jshutt/kernel.html)Everything I said about FEXPR Lisp dialects seems to be also true of Rebol, and everything I said about Macro Lisp dialects seems to be also true of Red. So that is how I am categorizing Rebol and Red, pending more information. This page from the Red language site seems to confirm what I just wrote: [https://www.red-lang.org/2016/12/entering-world-of-macros.html](https://www.red-lang.org/2016/12/entering-world-of-macros.html)


> _[2020-07-12 11:11:13]_ **Doug Moen**:


> Good question... another one: is there a good reason to choose two levels with an explicit boundary in between them? Why not just one (as e.g. on a Lisp machine)? Why not more than two? In other words, is two some kind of optimum, or just a historical accident?I don't know enough about Red to answer this in the Red context, but I can talk about my own experience. My Curv language has exactly 2 levels because Curv can be either interpreted on a CPU, or it can be compiled into GPU shader code and run on a GPU. The run time requirements for these two execution environments are quite different. On the GPU, I can't have a garbage collector, or first class function values, or general run-time polymorphism, whereas on the CPU, I can. So any Curv code that runs on the GPU is restricted to a statically typed subset of Curv. This statically typed subset is upward compatible with the full language, and GPU code can be executed on the CPU without any ceremony, so it feels like you are programming in a single language.



The Red language is claimed to be suitable for writing operating systems. You don't want to have a garbage-collected runtime environment inside an operating system kernel, because garbage collection pauses are incompatible with real time programming. For example, you need to be able process interrupts with guaranteed latency bounds. From [http://Red-lang.org](http://Red-lang.org), "Red/System is a C level language, where you are responsible for allocating and freeing memory, and where you may need precise manual control over those actions."



I know that the Lisp machine operating system was written in Lisp. I don't know the details, but it seems plausible that they would have used a statically typed Lisp subset for low-level OS code (device drivers and such), which if true, would put Lisp machine Lisp into the same category as Curv and Red (two levels, including a low-level systems programming dialect).


> _[2020-07-12 17:41:21]_ **Konrad Hinsen**:

If the system language were a strict subset, I wouldn't count it as distinct. In Lisp, for example, you can use type declarations as much as you like. A subset that requires them everywhere would be more of a style of using Lisp than a dialect, from my point of view at least. I do wonder how Lisp machines got around garbage collection at the lowest level though. In the Lisps I know, there is no opt-out.


> _[2020-07-12 18:57:57]_ **Kartik Agaram**:

[Doug Moen](http://curv3d.org/), what "original post" are you referring to? Was it outside this thread?



You're right that I'd been clumping Rebol and Red in my mind. After your comment I went back and reread [http://blog.hostilefork.com/rebol-vs-lisp-macros](http://blog.hostilefork.com/rebol-vs-lisp-macros), and I still want to push back on your statement that "Everything I said about FEXPR Lisp dialects seems to be also true of Rebol." The notion of definitional scoping turns out to also exist in Rebol, and it has a huge impact on how Rebol operations evaluate their arguments.



It's a very fruitful exercise to compare and contrast different programming models. Saying, "A is just like B" flattens a lot of the richness, I think. Even if an idea was "invented by Lisp first," there's still been lots of parallel evolution that has converged in surprising ways. Rebol is worth framing as its own thing, on the same order as Forth. It's not a Lisp derivative.

---

_[2020-04-04 17:42:38]_ **Unknown User**:




> _[2020-07-12 05:58:19]_ **Dan Cook**:

I don't want to deviate the topic too much, but have a look at "video game historian" on YouTube. It's amazing how work, history, and context there is behind some things. Apparently Tetris played a major role in bridging connections between the US and Russia in the wake of the cold war.

---

_[2020-07-12 10:05:54]_ **Stefan Lesser**:

Finding powerful new primitives of thought:

[https://twitter.com/michael_nielsen/status/1282142109680590848?s=20](https://twitter.com/michael_nielsen/status/1282142109680590848?s=20)



Refers to [https://distill.pub/2017/aia/](https://distill.pub/2017/aia/)


> _[2020-07-12 10:08:07]_ **Stefan Lesser**:

Sorry, I’m on my phone and it seems I’m not able to do anything about the six expanded links… 😟

---

_[2020-07-12 19:10:07]_ **S.M Mukarram Nainar**:

Some pretty interesting speculative design here:

[https://gavinhoward.com/2020/02/computing-is-broken-and-how-to-fix-it/](https://gavinhoward.com/2020/02/computing-is-broken-and-how-to-fix-it/)


> _[2020-07-12 19:12:34]_ **S.M Mukarram Nainar**:

He doesn't seem to talk about low level latency stuff that comes with that kind of hw design, NUMA, etc, which seems like an oversight. It's interesting to imagine what programming such a system would look like though.



Also, he says he wants C interop, but that he will only use safe languages, which is kinda odd.


> _[2020-07-12 20:07:05]_ **Edward de Jong**:

He has some mistaken ideas. speculative execution is not a problem for hardly anyone. Is invisible to programmers. The chips are working perfectly well.


> _[2020-07-12 20:10:32]_ **Ionuț G. Stan**:

Speculative execution is the root cause of Spectre... [https://meltdownattack.com/](https://meltdownattack.com/)


> _[2020-07-12 20:10:59]_ **Edward de Jong**:

And to imagine everything is a file is a major mistake, files are pain in the ass. They are unstructured arrays of bytes and one is constantly having to decode and encode files. Apple used to use a thing called a resource fork which was a secondary structured section of a file, in which to store indexed meta information. it was wonderful, tut because the Internet was based on stupid old unix and couldn't transfer files easily, they dropped it. And Microsoft had taken 10 years to copy that feature in a version of their file system called WinFS, was just about to release it and then they dropped it too, pushing us back to the 60s.


> _[2020-07-12 20:16:05]_ **Chris Knott**:

NTFS actually supports arbitrary meta data (called "alternate data streams") but they don't advertise it much because it confuses people that the info is lost when emailed or put on FAT32 usb stick


> _[2020-07-12 20:30:12]_ **S.M Mukarram Nainar**:

Yeah I'm not much of a file fan either


> _[2020-07-12 20:30:41]_ **S.M Mukarram Nainar**:

I find it interesting how some of those ideas have already made it to the mainstream though


> _[2020-07-12 20:31:43]_ **S.M Mukarram Nainar**:

For example, his stuff about managing message passing with shared memory (ring) buffers will look familiar to anyone keeping up with linux kernel development as the recent io_uring facility