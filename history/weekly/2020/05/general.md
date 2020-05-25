*[2020-05-16 21:24:32]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-17 22:32:53]* **Tom Lieber**:

It’s literally $path. :) When you execute text *anywhere* in the UI, if it’s not a built-in command, it shells out, setting environment variables in the child process containing the ID and file path of the current window. stdin and stdout are mapped to the current selection depending on context, and the window ID can be used to connect to the Acme instance for more invasive manipulation, like managing windows or listening for events.

---

*[2020-05-17 20:53:37]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-17 22:36:56]* **Doug Moen**:

De Bruijn Notation is worth cataloguing and publicizing, just because it lets you visualize and think about lambda functions in a different way (by pushing around and pairing up "wagons"). Not to be confused with De Bruijn Indices.
<https://en.wikipedia.org/wiki/De_Bruijn_notation>


> *[2020-05-18 08:55:38]* **Prathyush**:

That’s the first time I’m coming across it. Let me take a look.


> *[2020-05-18 15:07:52]* **Max Hallinan**:

Not sure this counts. It's a visualization of the reduction steps <https://redexer.maxhallinan.com/>


> *[2020-05-18 19:53:13]* **Will Crichton**:

in a similar vein as the above tool: <https://chrisuehlinger.com/LambdaBubblePop/>


> *[2020-05-19 02:19:07]* **William Taysom**:

That Cube Composer is delightful.


> *[2020-05-19 11:13:04]* **Prathyush**:

**William Taysom** Yeah, I thought up about creating a top level building view kind of thing that can be used to visualize the trees of Lambda Calculus. Will allow for a city scape visualization.


> *[2020-05-19 11:13:58]* **Prathyush**:

**Max Hallinan** **Will Crichton** Those are pretty nice. I also a found out a cool Lambda REPL here: <https://tarao.github.io/LambdaJS>


> *[2020-05-19 14:52:23]* **andrew blinn**:

Lukas suss's stuff. Might be slightly out of scope: Take a look at Lukas Süss (@sluk_m): [https://twitter.com/sluk_m?s=09](https://twitter.com/sluk_m?s=09)

---

*[2020-05-12 06:43:47]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-18 17:11:10]* **Justin Blank**:

The DAG approach to scheduling may be related to lucid synchrone/lustre. I’m not sure, I’ve only worked with lucid, which is a predecessor that doesn’t have the idea of real-time, but is a dataflow language where each step is based on updating values from the previous step.

---

*[2020-05-19 00:57:59]* **Eddy Parkinson**:

*Programming language design* - recommend *videos*/papers/conferences/journals.
Please can you recommend any good videos/papers/conferences/journals on programming language design.
I liked these :

Robert Virding - On Language Design (Lambda Days 2016) - <https://www.youtube.com/watch?v=f3rP3JRq7Mw>
- Why a programming language becomes messy. Erlang, for the phone system. Argues that we need more domain specific languages, rather than more kitchen sink style languages.

JavaScript: The Good Parts - (Google Tech Talks) - <https://www.youtube.com/watch?v=hQVTIJBZook>
- Classic talk. While JavaScript has many problems, he covers the Good Parts of the language.

Alan Kay - Programming Languages & Programming (2013) - <https://youtu.be/prIwpKL57dM> 
- Explains the need for better programming languages. Covers problems like, maintenance, Lines of code reduction, demos a very old scratch like system, and an old drawing system.

Wiki of Journals, publications, and conferences - <https://en.wikipedia.org/wiki/Programming_language_theory#Journals,_publications,_and_conferences>
- I read a few, was hard to find topics of interest.  Would be handy if they were grouped by problem domain.


> *[2020-05-19 03:18:53]* **Garth Goldwater**:

[https://youtu.be/3ka4KY7TMTU](https://youtu.be/3ka4KY7TMTU)


> *[2020-05-19 03:20:23]* **Garth Goldwater**:

[https://youtu.be/Z7dct6QG0cE](https://youtu.be/Z7dct6QG0cE)


> *[2020-05-19 03:20:41]* **Garth Goldwater**:

[https://youtu.be/f_0QlhYlS8g](https://youtu.be/f_0QlhYlS8g)


> *[2020-05-19 03:20:50]* **Garth Goldwater**:

[https://youtu.be/_IgqJr8jG8M](https://youtu.be/_IgqJr8jG8M)


> *[2020-05-19 03:21:00]* **Garth Goldwater**:

[https://youtu.be/Z4oYSByyRak](https://youtu.be/Z4oYSByyRak)


> *[2020-05-19 03:23:21]* **Garth Goldwater**:

[https://youtu.be/y4gAlrgr8PE](https://youtu.be/y4gAlrgr8PE)


> *[2020-05-19 03:23:29]* **Garth Goldwater**:

i’ll stop for now but i have more


> *[2020-05-19 07:05:58]* **Ivan Reese**:

I mean, if we're playing the hits.. [https://www.infoq.com/presentations/Simple-Made-Easy/](https://www.infoq.com/presentations/Simple-Made-Easy/)


> *[2020-05-19 07:06:46]* **Ivan Reese**:

[https://youtube.com/watch?v=_ahvzDzKdB0](https://youtube.com/watch?v=_ahvzDzKdB0)


> *[2020-05-19 14:35:27]* **Don Abrams**:

Let us not forget this: [https://www.famicol.in/language_checklist.html](https://www.famicol.in/language_checklist.html)


> *[2020-05-20 18:21:45]* **Dan Cook**:

This book gets into the nitty gritty about how to implement polymorphism, tail calls, coroutines, etc. at the low level, and how to implement low level optimizations with CPU registers. But it's top down, not just low level stuff
[https://www.cs.princeton.edu/~appel/modern/](https://www.cs.princeton.edu/~appel/modern/)


> *[2020-05-20 18:29:17]* **Dan Cook**:

I really liked this Programming language walkthrough for compiling a "regular looking" language to continuation passing style:

[http://lisperator.net/pltut/](http://lisperator.net/pltut/)


> *[2020-05-20 23:36:52]* **Emmanuel Oga**:

<https://www.amazon.com/Masterminds-Programming-Conversations-Creators-Languages/dp/0596515170>


> *[2020-05-20 23:39:43]* **Emmanuel Oga**:

you should also keep an eye over <https://hopl4.sigplan.org/track/hopl-4-papers#List-of-Accepted-Papers> which was unfortunately posponed


> *[2020-05-20 23:41:05]* **Emmanuel Oga**:

<https://en.wikipedia.org/wiki/History_of_Programming_Languages> lists previous editions

---

*[2020-05-15 16:34:32]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-19 17:57:01]* **Garth Goldwater**:

on the off chance anyone around here is really into tree querying algorithms: I’m trying to grab and copy DOM elements out of the browser with a homemade box-select extension—which has some issues because the DOM is a tree, so if you drag select over a parent and its children I end up double-counting children (because their nodes are still attached to their parents). i suspect there are better ways to do this (either algorithmically, or using some APIs I don’t know about). If anyone has any feedback please let me know in this thread!


> *[2020-05-19 18:18:55]* **Jared Windover**:

Let me see if I understand: You’re using the mouse to select a rectangle, and checking all of the dom elements to see if they live inside of that rectangle, and including the ones that do, along with their children?
A few ideas:
• Can you just ignore children?
• What about: for each element you find in the rectangle, walk up the parent tree until you find a node that doesn’t live in the rectangle. The node before that is a top-level parent in your rectangle. If you find all of the top level-parents, and include all of their children, then you’ll probably not have the duplication issue. 
I’d be concerned about elements that don’t have boundingRects inside of their parent’s boundingRect, though (I think using `transform` can probably cause that). But if you’re including children regardless already, then you’d already have that problem.
• I think a more robust way to do this might be to walk the tree once (or on updates) and build a quad tree, or other space-partitioning lookup. Then you wouldn’t have to rely on parent-child relationships at all.


> *[2020-05-19 18:33:50]* **Garth Goldwater**:

I’ve been considering the quad tree as a last resort. there are a bunch of issues pushing me that way, like the fact that it’s not just `transform`, you can have `pre` selectors and negative margins screwing around


> *[2020-05-19 18:35:07]* **Garth Goldwater**:

your description of the tool is exactly right. i’m trying to let people box-select and copy dom nodes so that they can essentially drag pieces of webpages into their own notetaking app while preserving styles


> *[2020-05-19 18:36:46]* **Garth Goldwater**:

it’s a kind of pruning, which is a lot like depth-first traversal


> *[2020-05-19 18:37:26]* **Garth Goldwater**:

my main concern is situations like this one (ignore the writing)


> *[2020-05-19 18:38:17]* **Garth Goldwater**:

where I’d want to select the last child of the first parent, and only the first two of the second. working with the native dom structures is giving me brain fog. i think the quad tree is the right idea


> *[2020-05-19 18:38:30]* **Garth Goldwater**:

thanks!


> *[2020-05-19 19:04:35]* **Garth Goldwater**:

… it’s a quad interval tree. i feel like im doing a coding interview


> *[2020-05-19 19:07:04]* **Garth Goldwater**:

the other issue is that if i throw out all the children, I have to hunt through every selected node and rehook it to its parent at the end of the process, which feels like duplicated work

---

*[2020-05-19 18:06:41]* **Ivan Reese**:

Does anyone have handy any criticisms of Self-style prototypal inheritance? I'm not interested in performance, just the idea as a mechanism for dynamic data composition that lets you manage duplication vs references. What causes it to fail (eg: become unmanageable), where other kinds of data composition do not?

Also accepting links to good summaries of how Pharo handles inheritance/composition.


> *[2020-05-19 18:26:17]* **Tyler Adams**:

Can you post a quick code sample of self style prototypal inheritance?


> *[2020-05-19 18:30:54]* **Marcel Goethals**:

“composition over inheritance”


> *[2020-05-19 18:31:35]* **Garth Goldwater**:

one thing i find confusing is understanding when state or closures are private to an instance vs its prototype 


> *[2020-05-19 18:48:14]* **Ivan Reese**:

**Tyler Adams** — Here's a decent summary I came across the other day: <http://gameprogrammingpatterns.com/prototype.html#self>

If you're familiar with JS inheritance, it's similar.

Note that in my case, I'm only interested in using prototypes as a form of data composition, not method / function / class composition.


> *[2020-05-19 18:50:43]* **U010SQSJGLS**:

Prototypical inheritance seems to me to have the worst of both worlds of dynamic typing and inheritance: fragile base class problem PLUS the ability to change the base class at runtime.


> *[2020-05-19 18:50:54]* **Ivan Reese**:

Further to my original post, I'd be curious to hear if anyone has come across the idea of field-level inheritance, where each field may be delegated to a field on a different object. Are there any systems that do this well?


> *[2020-05-19 18:54:07]* **Ivan Reese**:

U010SQSJGLS Does the fragile bass class apply to data? All the examples I can imagine are due to method inheritance, not data inheritance.


> *[2020-05-19 18:54:55]* **U010SQSJGLS**:

How do I know what fields an object has?


> *[2020-05-19 18:55:26]* **U010SQSJGLS**:

In prototype-based languages, the answer seems to be “inspect the object at runtime and see.”


> *[2020-05-19 18:55:57]* **U010SQSJGLS**:

But ultimately you need to write code that makes assumptions about what fields are there.


> *[2020-05-19 18:56:19]* **U010SQSJGLS**:

So you run the code once, see that field f is there in the debugger or whatever, assume it’s always there, and then later, BOOM.


> *[2020-05-19 18:57:51]* **Tyler Adams**:

Ah, general inheritance forces a taxonomy of your data which means there's a limited number of options and a unique parent. Which class should I inherit from? Diamond problem "I really want to inherit from both ork and car" With composition, you can get an unlimited number of options and no dependency issues. I can make an ork car, why not!

self style is a dynamic typing approach to OO. Fast and lightweight, but no static analysis help.


> *[2020-05-19 18:58:52]* **Tyler Adams**:

methods or data, it doesn't make a difference, esp in js where methods are first class


> *[2020-05-19 20:06:33]* **Edward de Jong**:

best to avoid OOP paradigm entirely. Don't ever create or destroy an object and life becomes so much simpler. Then you don't create islands of state but instead have one central ball of state which can be serialized, communicated, etc. OOP creates islands of state that are nearly impossible to transmit across the network in a synchronized manner.


> *[2020-05-19 22:55:56]* **Ivan Reese**:

Thanks for the replies everyone, but I guess I didn't articulate my inquiry very well. I'm asking very specifically about Self-style prototypal inheritance applied to data, and the idea of field-level delegation in particular. If you have a specific critique about that exact style of inheritance/delegation, that'd be helpful. General critiques of OOP, classes, inheritance, or dynamic typing — especially critiques of the form "these things are just bad, QED" — are outside the scope of my concerns at the moment.

I'm especially interested in hearing from folks who have worked with or (especially) built systems that use this style of inheritance, or who have considered using it in the design of a live programming environment but then decided not to. Eg: if **Tudor Girba** is still around, it'd be great to hear from him.


> *[2020-05-20 03:50:06]* **William Taysom**:

Done quite a bit with prototypes.  Pain points... Don't do great with objects that have complicated life-cycles.  Tend to have trouble when collaborating with other objects.  When I clone this, should I clone this part?  When I clone this, should some list of whatever's now include the clone?  You need to think a lot about aliasing, the difference between a clone and a copy, and so on.  Prototypes have an advantage in systems that try to make objects tangible, like Self, since physical tokens work in a similar sort of way making for decent transfer.


> *[2020-05-20 04:30:16]* **Ivan Reese**:

**William Taysom** Great points. I'm coming at Self prototypes from a weird angle. I've done a lot (a lot — like 5-10k hours in a past life) of 3d modelling across a dozen tools. In those environments you often have fairly rich control over aliasing/instancing vs copying, and it's unambiguous. It was a good experience (eg: the "fragile base" is a powerful tool, not a pain point). Self feels only a small bit more complicated than that, which makes me think that a sufficiently rich GUI would make Self prototypes an equally good experience.

... For data composition. Period. Prototypal code composition, on the other hand, I am not touching. Not unless I can work out some nice af way of visualizing it, which seems unlikely.


> *[2020-05-20 07:13:46]* **Edward de Jong**:

the beauty of 3D instancing vs copying is that 3D objects are collections of triangles, textures, etc. which are all static in the sense that the component triangles don't affect each other. The more purely you enter the data domain, which is where Spreadsheets excel, the more tangible it gets.  In a way the Schema designer of Filemaker Pro is a prototype designer, which has a very nice GUI. I consider Filemaker to be one of the best, if not the best, front end for MySQL around. You are effectively creating a form in which data is poured.


> *[2020-05-20 08:15:42]* **William Taysom**:

Yes, for modeling prototypes seem to work well.  The two other ideas I find interesting are parameters and holes.  By a parameter, I mean some measurement that can vary likely bound to others, which is a kind of inherence.  By a hole, I mean a blank that can be filled in.  A parameter is like having a hole filled with a sort of nondeterminist value.  And with holes, as you add more and more, you find yourself in a very lambda calculus sort of world.  At which point, manner of expressing how to fill holes seems to matter more than the basic, fully realized object.  And getting all these notes to harmonize?  Well, that's the project.


> *[2020-05-20 11:25:59]* **Tudor Girba**:

**Ivan Reese**

In our work, we use inheritance, but we favor composition.

We use inheritance strictly to model logical subtyping. But, in general, we favor composition out of tiny objects.


> *[2020-05-20 11:27:04]* **Tudor Girba**:

Take a look at this visualization showing how a single empty visual element (shown in red) is linked with many tiny non-primitive objects. For example, we have a full object representing only border (depicted in blue) which, in turn, is made of other smaller objects.


> *[2020-05-20 11:30:45]* **Tudor Girba**:

We find the composition of explicit objects to be essential. In particular, in a live environment we want to be able to swap things at runtime and we want the views to update accordingly.


> *[2020-05-20 11:42:01]* **Tudor Girba**:

We apply this concept at all levels of abstractions. Above we see how even modeling of a single visual element can be split into tiny parts. Now, when we make some of those tiny objects behave like functions, we can get very interesting effects.

For example, a common issue in user interface design is to adjust the look of widgets. Often this is set through a global theme. We want to be able to affect the look of a single widget. CSS is an interesting source of inspiration, but when people want to affect the structure of the DOM, they resort to JS. Not quite the most elegant combination.

So, we introduced the concept of a look. Any element can get a look injected, and a look can affect everything in the element, including its structure and the way it handles events. The look is an object, but it acts like a transformation. Through object composition we can swap it in and out at runtime. In a way, a look is like a property of a prototype object (in Pharo, these would be called talents, or object traits). We find this to be quite powerful.


> *[2020-05-20 11:46:11]* **Tudor Girba**:

For example, here is a single label widget. By default, it is only a case that renders nothing and has no children.


> *[2020-05-20 11:48:56]* **Tudor Girba**:

But, when we add a look to it, the look adds an actual child that draws the text.


> *[2020-05-20 11:49:56]* **Tudor Girba**:

These are some examples that relate to the ui, but we apply these ideas to everything we build.


> *[2020-05-20 11:50:08]* **Tudor Girba**:

**Ivan Reese** Does this address the question?


> *[2020-05-20 14:13:42]* **Chris Granger**:

The system we’re building is very Selfy. Physical, concrete, no inheritance, just copying and powerful group selection/edit. I’m _very_ bullish on where it’s headed. We’ve used a purely textual version to build a bunch of different things across the complexity spectrum and it’s been a breath of fresh air. 🙂 I don’t think it’s quite the right fit for text though. You really do need the concrete editor that Self has. So that’s what we’re working on at the moment. 


> *[2020-05-20 18:49:48]* **Dan Cook**:

If the goal is just code reuse, then there's no actual need for any inheritance or prototype relation to exist at runtime. This is the philosophy behind "traits", which are like mixins, where the idea is a *static* composition of code at compile time (note: many languages have a feature called traits or mixins, which are not the same thing because they are implemented using runtime inheritance -- I'm looking at you, Scala!)

Here's the actual/original paper:

[http://scg.unibe.ch/archive/papers/Scha03aTraits.pdf](http://scg.unibe.ch/archive/papers/Scha03aTraits.pdf)

And another that adds fields / properties:

[http://scg.unibe.ch/archive/papers/Berg07aStatefulTraits.pdf](http://scg.unibe.ch/archive/papers/Berg07aStatefulTraits.pdf)


> *[2020-05-21 06:01:17]* **Ivan Reese**:

**William Taysom** You're right on my wavelength. The thing you call "parameters" goes by a bunch of different names in the various 3d tools I've used, and they are _occasionally_ wonderful to work with, depending on the tool. That sort of field-level inheritance(-ish) is what I'm aiming toward. Really, it's just another form of 1-way data binding, though it really sings (to borrow your metaphor) in a live environment.


> *[2020-05-21 06:18:51]* **Ivan Reese**:

**Edward de Jong**
> the beauty of 3D instancing vs copying is that 3D objects are collections of triangles, textures, etc. which are all static in the sense that the component triangles don't affect each other. The more purely you enter the data domain, which is where Spreadsheets excel, the more tangible it gets.
Yes and no. In 3d, you hop up and down the ladder of abstraction at a blistering rate.

Yes, you'll spend a lot of time working at the level of individual verts, edges, tris, faces, but even then, you care immensely about the relationships between them. For instance: if you keep a strip or a ring of faces fairly uniform, it's easy to grab the thing and work with it as a set; by keeping face angles or areas consistent, you create an ad hoc geometric abstraction, and the tools are designed to help you do this and leverage that.

When you leave that lower level and start working with surface groups, meshes, objects, rigged collections of objects, etc., you're now working largely with nondestructive procedural modifiers, where tightly-controlled and well-understood relationships (and cross-cutting ones at that) become immensely important.

So even though the data is _at rest_, so to speak, you still need to grapple with abstraction, structure, interdependence, sequence, declaration vs procedure, memory vs computation cost (both of the data and the transformations), and so forth.

_And then_ when you start adding animation, physics simulation, particles, etc., your data is no longer at-rest, and changes to your supposedly "static" data like geometry in the small can have rippling consequences in the large. And again, there are enviably rich tools for helping you manage it.


> *[2020-05-21 06:45:50]* **Edward de Jong**:

Having tried and failed to conquer 3D Studio Max, a product i remember paying $3000 for, 3D products are by far the most complex programs people operate, and i find them very difficult to use. In Maya every operation you did on the screen was represented in their programming language, so it really was a textual command stream that you generated. A very powerful modality, but also quite complex because you are operating in two domains at once.

It is true however that 3D products and spreadsheets have lots of data, and the ratio of data to code is often very high. In my Chess program sample that i wrote in Beads, there is almost no data in the game. It's an 8x8 grid with 2 pieces of data per square (side, piece), and a handful of other data about whose turn it is, have the kings moved, etc., and the vast majority of the program is calculating legal moves, and handling the weird things like en passant capture and castling. I have programmed many things where logic dominated and data was very sparse. I found this pattern to be true, the top of the program is all graphical, and the bottom layers are all logic.


> *[2020-05-21 07:08:11]* **Ivan Reese**:

Max was my fourth or fifth 3d program, and I picked it up in the 8th grade, with no tutelage and almost no references/tutorials. Maya was next, in the 10th. (And then Modo, and then...)

They're tools that require a kind of expertise, yes. But the ramp from novice to expert is enviably smooth, such that it can just be a matter of putting in the hours doing self-driven experimentation. In terms of the way you initially explore them, they're more like learning a musical instrument than learning a language (programming or spoken), in that they are almost completely self-revealing or self-discoverable.

That's what I'm after with my enthusiasm for live programming. An interested teenager should be able to learn how to program, from novice to intermediate, with just a dev environment and no other references or guidance.


> *[2020-05-21 07:18:35]* **Ivan Reese**:

**Tudor Girba** Yes! Your comments and screenshots were immensely helpful, thank you.

I know so very little about Pharo and the GToolkit, and I owe it to myself to learn a lot more about these projects. From what I do know, they're seemingly the only things I can point to that share very many of the goals I have with my project, and have run into many of the same questions, and best of all have satisfying answers to those questions. To that end — I'd love to know what projects _you_ are looking to as the high bar. What, if anything, is the existing work outside your own immediate sphere (so not Smalltalk / Self, say) that you would like to borrow from or build on?

(As an example / aside: I had a 4 hour drive today, and I re-listened to your episode of the FoC podcast. You talked a bit about the importance of having a single render tree, so that the visual tools, introspection, etc. all work universally, and there are no dead ends where you hit a flat <canvas>-like thing. I'm working on that very same problem right now, but I think my solution is different. I allow multiple render trees, so you can use whatever rendering technology best suits each kind of data — SVG for SVG, GL for 3d, HTML for documents, etc. But each tree must be nestable, and able to generate input, and must have a way to render the editor GUI, so that it can fully participate in editing, introspection, etc.)

The idea of "looks" makes a lot of sense to me. I clearly see the need, and the utility of this approach. You then go on to mention...

> In a way, a look is like a property of a prototype object (in Pharo, these would be called talents, or object traits). We find this to be quite powerful.

I don't quite follow this simile, though. And — are these "traits" the same as in Self, or have they changed in the time since?


> *[2020-05-21 12:04:31]* **Tudor Girba**:

I a glad it is of help. If you want a tour of GT, I’d be happy to provide one.

About one rendering tree, we describe it here:
<https://medium.com/feenk/one-rendering-tree-918eae49bcff?source=friends_link&sk=c0551af8504ee919c4d8c54c390eef49>

In essence, we wanted to have visualizations as first class, and we wanted to be able to connect anything with anything live. That meant that graph layouts had to become regular layouts and that there should be no black boxes: for example, a text editor must be representable in the same tree, too.

Once we had that tree, it meant that we had one way of propagating events and that we could affect and connect anything from anywhere.

About traits/talents: traits offer a static composition mechanism (like interfaces with implementation). An object trait (or talent) is a mechanism for injecting behavior in a specific object only.

---

*[2020-05-19 19:00:55]* **undefined**:

[xmpp] <singpolyma> Once you static type it is it really OO anymore?


> *[2020-05-19 19:04:23]* **Ivan Reese**:

Hi — is this a reply to a previous post? It showed up as a top-level post in Slack. If you are replying, please use the features of your client to form your message as a reply, so that it shows up threaded in Slack in the right place. Thanks!

---

*[2020-05-19 19:05:36]* **undefined**:

[xmpp] <singpolyma> Oh, sorry. I guess the matrix bridge isnt compatible with how slack works these days? I can just lurk. Excuse the noise :)


> *[2020-05-19 19:07:02]* **undefined**:

from riot you can use this reply feature:


> *[2020-05-19 19:07:42]* **undefined**:

ah, but you cannot yet reply with an image..

---

*[2020-05-19 19:06:54]* **undefined**:



---

*[2020-05-20 07:17:14]* **Shalabh Chaturvedi**:

[https://www.theverge.com/platform/amp/2020/5/19/21260005/microsoft-office-fluid-web-document-features-build](https://www.theverge.com/platform/amp/2020/5/19/21260005/microsoft-office-fluid-web-document-features-build)


> *[2020-05-20 07:21:02]* **Edward de Jong**:

This reminds me of Apple's OpenDoc. It will probably suffer the same fate. OpenDoc had some adopters, then Apple abruptly dropped it, and those companies were screwed royally. The amount of code that is underneath this very fancy product - which is way beyond what Apple's product tried to do - must be stupendous. And therein lies the problem, anything built on top of it has millions of lines in a layer below.

I would be very curious to know how big the team is behind this project.


> *[2020-05-20 08:01:05]* **Felix Kohlgrüber**:

This sounds like a good idea. I'll be taking a closer look once it's open-sourced.


> *[2020-05-20 08:21:23]* **William Taysom**:

OpenDoc?  Oh hell!  They mention Google Wave too.  With these pluggable component systems, it seems that you ultimately want more than you have and less than you would think.  Makes one wonder whether there's a systematic reason why component systems aren't so much a thing.  Consider also browser and text editor plugins.


> *[2020-05-20 09:24:39]* **Chris Maughan**:

Reminds me of OLE (Object Linking And Embedding).  That was the promise of the tech IIRC.


> *[2020-05-20 09:25:43]* **Chris Maughan**:

Ah, they mention it towards the end of the article.


> *[2020-05-20 13:56:11]* **Jared Windover**:

**Edward de Jong** It mentions a team of about 140 employees working for 18 months to get it to where it is.


> *[2020-05-20 14:39:16]* **Roben Kleene**:

This seems very similar to Notion to me, to the point where I’d consider it a knockoff. I’d love to hear from anyone people who disagrees. E.g., Fluid Components seem analogous to Notion's Blocks? (I wish I could provide a good hyperlink to describe Notion's Blocks here, how Notion gets away with not having easily accessible documentation for its most basic concepts is bewildering to me 🤷‍♂️).


> *[2020-05-20 18:15:27]* **Shalabh Chaturvedi**:

I generally like the idea of moving away from silo-ed apps to a more open model remixable objects, which is what I like about the motivation here. Of course instead of 'word silo' and 'excel silo' we now may have a slightly bigger 'fluid' silo, but still. I'm bothered that typical links (e.g. into a google doc) jump into a completely different context rather than pulling in the relevant _slice_ of information into the current context. Now it's hard to say in practice how fluid this will feel. I'm not that familiar with Notion blocks, but this idea has been around (Chris mentioned OLE).


> *[2020-05-20 21:01:34]* **Roben Kleene**:

Here's an example of a Notion Block for embedding a diagram (from Whimsical) into a document <https://mobile.twitter.com/NotionHQ/status/1229907609970331648>


> *[2020-05-20 22:22:36]* **Edward de Jong**:

No question that it is in Microsoft's DNA to copy an existing product, and go one step further, and crush them (or fail miserably).  Some of MS's products are copies of things now forgotten because they were so roundly beaten (can you remember Borland Quattro, Lotus 1-2-3, or WordPerfect or WordStar?). I can only think of one invention, Hololens, to emerge from MS's huge research division.  They say that imitation is the sincerest form of flattery, so Notion must be pretty good. 140 people for 2 years is 70 million in R&D, which is comparable to one of the larger startup efforts in SV.


> *[2020-05-20 22:34:50]* **Roben Kleene**:

Yeah, it's huge validation for Notion's approach (also excellent side-point about the sheer scale of the resources it took to create Notion). I don't particularly like Notion as a solution for me personally, because I'm not a Cloud guy (I prefer to own my data). But my whole career I've struggled with a problem: How do you make a document for others to read, that contains embedded media that was made in other programs, and then share that document in a manner where others can then edit both the document, and the embedded media? And when I saw that little movie of embedding a Whimsical diagram into a Notion document, I was like "that's it, that's the solution".


> *[2020-05-20 22:47:41]* **Shalabh Chaturvedi**:

Side note: Notion recently went free for personal use. Just before that happened, I believe Roam Research announced they would be going non-free.


> *[2020-05-20 22:49:24]* **Shalabh Chaturvedi**:

Ah I kinda remember blocks now from me playing around with notion a while back. Aren't all docs in notion just a sequence of 'blocks'? Text sections and paragraphs are represented as 'text blocks' and inline images are 'image blocks', from what I remember. Interesting that you can have external blocks like Whimsical diagrams.


> *[2020-05-21 00:25:48]* **Roben Kleene**:

Yeah, that's my understanding too, everything is a block in Notion, including text.


> *[2020-05-21 08:15:52]* **Eddy Parkinson**:

Use case? - Am guessing this is more than Notion blocks/OLE, .. the whole pitch is more "separate apps" that link together on the web. Would be interesting to understand the rules for the bolts. The bolts that link the apps together. Things like edit rights, events, server side code.


> *[2020-05-21 09:43:44]* **Roben Kleene**:

The Whimsical+Notion example I linked to above is separate apps linked together? Is there something special I'm missing about Fluid's approach?

---

*[2020-05-16 11:04:07]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-20 07:18:02]* **Edward de Jong**:

Unfortunately today's academic system has grown so large and expensive and wealthy that it has become like the Pentagon, a universe unto itself, that serves itself. We really need to return it to a more basic structure where it connects to the rest of the world. That it costs $45 to read an article in the journal of poverty is just insane.

---

*[2020-05-20 09:21:49]* **Chris Maughan**:

<https://twitter.com/cyrildiagne/status/1256916982764646402?s=20>

---

*[2020-05-20 17:00:33]* **Michelle Valentine**:

Hi folks! I wanted to share what I’ve been working on at Airtable  - a new way to build apps! Today, Airtable is kicking off the developer preview of Custom Blocks with a $100,000 developer contest. With Custom Blocks, we’re letting developers increase the power of Airtable by building highly composable components on top of our end-user-friendly real-time database.

Now you can spend 100% of your time focused on what makes your app unique and leave the rest to Airtable. The best part? Custom Blocks are built with Javascript and React. You can leverage npm’s 1,200,000+ modules to build almost anything you can imagine.

Get all the details: <https://airtable.devpost.com>


> *[2020-05-20 21:07:31]* **Kartik Agaram**:

That looks interesting. I hadn't gotten around to checking out Airtable yet, though I have some read-only access to it for my day job. I wonder if you could help me think through some preliminaries.

When I look at <https://airtable.com/pricing> it sounds like these custom blocks will after some promotional period slot in at the $20/user/month "Pro" pricing level. Is that accurate? If so, it seems like it's geared towards enterprise usage rather than hobbyists (particularly since a single person may need multiple license 'seats' to collaborate in different spaces with different groups). Am I thinking about this the right way?

I don't intend this as criticism. We've had similar discussions in this group about our usage of Slack, now that we're starting to run up against the restrictions of the free tier. And my lesson from that experience is to be more thoughtful about whether I am in the target market before I adopt a new tool.

---

*[2020-05-20 18:53:36]* **Dan Voyce**:

London creative coding is hosting another virtual meetup tomorrow. Come and join the fun wherever you are! <https://www.meetup.com/london-creative-coding/events/270632015/>

---

*[2020-05-21 07:06:07]* **Prathyush**:

I tried to put together a list of all these newfangled Xanadu style “networked notebooks” that are coming out. With the help of Raghuveer and some friends I think I have made a somewhat comprehensive roundup, but I’d love to know if I have missed out any cool ones here: <https://github.com/prathyvsh/networked-notebooks>


> *[2020-05-21 07:22:45]* **Ivan Reese**:

This rocks!


> *[2020-05-21 09:35:59]* **Duncan Cragg**:

How about you come up with a characteristics list to help tell them apart? What are the main differentiating functions or features? Like Principal Components Analysis: on what dimension do they differ most?


> *[2020-05-21 09:41:11]* **Prathyush**:

Yeah, that could be of help, I think there are various kinds limits in the kind of operations that can be performed with each of these applications, like transclusion, bidirectional updates, reshaping data etc. But I’m a toddler in this space and this is more to serve a catalogue for inspiration. If I happen to get an understanding of the problem space a bit better, I might start creating a tradeoff matrix. Thanks for the feedback!


> *[2020-05-21 10:34:21]* **Duncan Cragg**:

Oh no that wasn't my feedback, my feedback is: great start to a very useful project! 😄


> *[2020-05-21 10:37:50]* **Duncan Cragg**:

So does Jupyter not qualify here? Maybe I'm misunderstanding the space you're delineating


> *[2020-05-21 10:38:35]* **Duncan Cragg**:

Also, you forgot the granddaddy: Tim's arrogantly-named "World Wide Web"!


> *[2020-05-21 12:55:06]* **Chris Maughan**:

Ah, a great resource, thanks 🙂


> *[2020-05-21 13:04:24]* **Roben Kleene**:

The act of self-publishing these kinds of interlinked notes (e.g., like Andy Matuschak's notes) has come to be called "Digital Gardens", here's a great Twitter thread that links to some examples [https://twitter.com/Mappletons/status/1250532315459194880](https://twitter.com/Mappletons/status/1250532315459194880)


> *[2020-05-21 14:48:02]* **U010RH58PL7**:

There's also networked-notebooks-as-a-vscode-plugin, which seems like a nice alternative that preserves whatever other editing / note taking functionality you've got (if you're a vscode user) <https://kortina.nyc/essays/suping-up-vs-code-as-a-markdown-notebook/>


> *[2020-05-21 16:43:26]* **Ivan Reese**:

This was also posted here a few times, not sure if it merits inclusion: <https://szymonkaliski.com/notes/>

---

*[2020-05-21 15:04:40]* **nicolas decoster**:

I share this article by Olia Lialina as I think some people here might find the "Turing complete user" interesting, at least the term, if not the concept behind it and her point of view.
I like how she talks about different ways of thinking about the "user".
[reader.lgru.net/texts/turing-complete-user/](http://reader.lgru.net/texts/turing-complete-user/)

---

*[2020-05-21 15:43:16]* **Chris Granger**:

Programming in plain English: [https://osmosianplainenglishprogramming.blog/](https://osmosianplainenglishprogramming.blog/)


> *[2020-05-21 16:02:14]* **nicolas decoster**:

In the article, it is answered "yes" to the question "can natural languages be parsed in a relatively “sloppy” manner?". But I wonder what are the edge cases, and if this "sloppy" parsing can lead to errors that are very subtle to debug where a formal syntax might have help to better grasp what is happening.


> *[2020-05-21 18:29:41]* **Jared Windover**:

I like this. I’m very unlikely to use it anytime soon, but seeing those programs expressed in a more clear and succinct way breaks a lot of my intuition about this topic.


> *[2020-05-21 18:43:51]* **Tom Lieber**:

Very thought-provoking, thanks!


> *[2020-05-21 18:57:11]* **Tom Lieber**:

Natural language names make it very pleasant to write code—something I noticed while using my own similarly-motivated system, [Ditty](http://alltom.com/pages/ditty/). I wasn't so bold as to eschew interface definitions entirely, but attaching behaviors to plain English names (e.g. "number of items in [x]") greatly encourages people to think of the most natural way of expressing what they want to do, and define it, even if a similar but less contextually clear alternative already exists.


> *[2020-05-21 19:02:17]* **Tom Lieber**:

I like PEP's handling of collections. We have so many convenient idioms in natural language for those.


> *[2020-05-21 19:03:59]* **Tom Lieber**:

And yet this makes me laugh out loud…


> *[2020-05-21 19:04:36]* **Tom Lieber**:

And this makes me shudder…


> *[2020-05-21 20:32:45]* **Tom Lieber**:

Spooky timing <https://futureofcoding.slack.com/archives/C5T9GPWFL/p1590081839030800>


> *[2020-05-21 20:41:16]* **Grigory Hatsevich**:

I tried to download "The Prototype" file ([www.osmosian.com/cal-4700.zip](http://www.osmosian.com/cal-4700.zip)) from this blogpost, but Windows antivirus said this file contained a trojan.

Update: now it downloads without any warning.


> *[2020-05-21 21:41:19]* **Chet Corcos**:

Wow, this is super cool! I bet **Steve Peak** would be interested


> *[2020-05-21 21:44:06]* **Chet Corcos**:

Hmm. Any ideas how I can run this on a Mac?


> *[2020-05-21 21:44:13]* **Steve Peak**:

**Chet Corcos** very much so! Very long read 🤣 but a scroll through suggests that it’s more about visual design and drawing than business logic is is very much more my interest. Each domain has quite different requirements and constraints.


> *[2020-05-21 21:45:22]* **Chet Corcos**:

Well they built a compiler with it as well as a WYSIWYG text editor and a filesystem browser... so it much be pretty flexible.


> *[2020-05-21 21:45:29]* **Steve Peak**:

**Chris Granger** If I may be candid: I don’t understand why you would apply NLP like this to drawing… strange result to use when art is is not language.


> *[2020-05-21 21:48:20]* **Steve Peak**:

Drawing and business-logic(workflows and query) and Gaming are very very different scopes. I’m not optimistic that something can satisfy all 3 requirements when they are all ooh so different: users are different, domains, constraints, usage, execution behavior, error management, everything.


> *[2020-05-21 21:49:44]* **Steve Peak**:

**Chet Corcos** PS Storyscript is not “compiled” and it’s not a programming language by definition. Representing a program in plain-text (english or other) comes with significant restrictions and more tooling work than alternative solutions that we will be demonstrating soon.


> *[2020-05-21 21:50:52]* **Chet Corcos**:

I get what you mean -- this is definitely a different use-case and lacks a lot of the usability stuff that I think you're going for. But that said, its always good to have a solid foundation...


> *[2020-05-21 21:51:27]* **Steve Peak**:

If this “plain english programming” is compiled than it will have the same limitations as the other hundreds of languages before it: you have to represent the entire programs state in text.


> *[2020-05-21 21:52:01]* **Steve Peak**:

**Chet Corcos** I cannot speak on the foundation, but IMO (just being candid and honest) if it’s “compiled” than the foundation is flawed by design.


> *[2020-05-21 21:53:24]* **Chet Corcos**:

Hmm. I think I see what you mean.


> *[2020-05-21 21:53:29]* **Steve Peak**:

I think this is where Eve also failed: being compiled and to broad of scope.


> *[2020-05-21 21:54:32]* **Steve Peak**:

I have not intention to be rude in my feedback and comments. I believe strongly in radical candor and honesty. Better than saying “cool stuff man” and moving on.


> *[2020-05-21 21:55:16]* **Chet Corcos**:

Interested to hear more on your thinking behind "if it’s “compiled” than the foundation is flawed by design."


> *[2020-05-21 21:55:23]* **Steve Peak**:

Let’s DM


> *[2020-05-21 22:01:55]* **Steve Peak**:

Also… why? Why talk to a computer like this? It is very silly. Here is difference: `Start. Open tax folder. Open each 1099. Get the amount earned…… 1000 steps later`  *VS* `computer, do my taxes` — The later is better. Drawing: `Start. Draw circle. Draw smaller circle inside. Draw 15 lines on top of the circle......` *VS* `Draw an eye.`
Less than 0.3% of the world need the former while 99% need the later.


> *[2020-05-21 22:07:20]* **Tom Lieber**:

Are you saying, drop everything and write AGI?


> *[2020-05-21 22:14:13]* **Steve Peak**:

The world is not black and white. I order things on Amazon but they still need to be built by real people in a factory. Drop everything? Heck no! But creating software still remains out of reach for *most* the worlds population.


> *[2020-05-21 22:15:13]* **Steve Peak**:

There will be farmers, there will be chefs and there will be waiters in the future of coding. I just think we should stop thinking about farmers only.


> *[2020-05-21 22:32:27]* **Chris Granger**:

> If this “plain english programming” is compiled ... you have to represent the entire programs state in text.


> *[2020-05-21 22:32:43]* **Chris Granger**:

That's a very odd thing to say. Compilation has nothing to do with text or state.


> *[2020-05-21 22:34:07]* **Chris Granger**:

Compilation is just the translation of semantics in one form to semantics in another form. We compile goals to motor actions all the time. Or thoughts to drawings, recipes, exercise routines, advice, and conversation.


> *[2020-05-21 22:34:39]* **Chris Granger**:

Perhaps you mean something else?


> *[2020-05-21 22:37:08]* **Chris Granger**:

Language itself is exceedingly general, so it seems unlikely that broadness is an inherent wall that can't be overcome. It _is_ true that different domains use different vocabulary and different cognitive tools, but they're accessible within the same framework. You can move from one domain to the other in the course of a single sentence.


> *[2020-05-21 22:40:19]* **Chris Granger**:

Art _is_ definitely a language in so many ways. From the vocabulary and idioms to how we evaluate and even experience it. It's a domain with a set of actions and rules that has a wonderfully open and powerful set of semantics.


> *[2020-05-21 22:42:58]* **Chris Granger**:

I would argue the problem with something like what's presented in the post isn't that it's NL talking about drawing. It's that it's _only_ NL. To contradict your point about broadness of scope, to capture the domain of something like art you need much more than words and you'll need much more than turtle graphics.


> *[2020-05-21 22:46:22]* **Chris Granger**:

But you _will_ need words, even if you have the most perfect set of tools in existence - afterall how would you communicate which tool you used to a friend? Or the motivation behind the art? How would others talk about how it made them feel? Or make a shopping list for the paint?


> *[2020-05-21 22:47:20]* **Chris Granger**:

Without the language, we wouldn't have Bob Ross 🙂


> *[2020-05-21 22:48:50]* **Chris Granger**:

> Why talk to a computer like this? It is very silly.


> *[2020-05-21 22:50:11]* **Steve Peak**:

Ok, “state” was the wrong word to choose. Maybe “the source of truth” is better. Same issue: plain-text compilation requires that the full truth is represented in the plain text which has significant limitations.


> *[2020-05-21 22:50:19]* **Chris Granger**:

It's exactly how we talk to anyone that requires step by step instructions. A chef teaching a new line cook, an art teacher walking you through how to paint your first watercolor sky...


> *[2020-05-21 22:52:07]* **Steve Peak**:

“Language itself is exceedingly general” is this not the problem of Eve? Why be general when you can be more pragmatic to scope to a domain. For example (not to plug it again, but it’s good example) Storyscript is not for gaming or drawing. It’s for business-logic QA and workflows. That scope makes our “language” (which it’s not really) can be designed differently.


> *[2020-05-21 22:57:52]* **Chris Granger**:

It makes your language easier to design and easier to be business-wise successful, but it's not somehow fundamentally better. Generality isn't a problem to be solved, it's a thing to strive for. Language, math, art, kinesthetics, and so on are ridiculously general and have taken us from quite literally nothing to the civilization we have now. Narrower things fill in the details, but they don't expand the canvas. So no. I don't see generality as "the problem of Eve." 🙂


> *[2020-05-21 23:00:47]* **Chris Granger**:

It really just depends on your goals and what tools/experience/insights you have at your disposal.


> *[2020-05-21 23:01:08]* **Steve Peak**:

I admit that my perspective of Eve is my own. Regardless, the demos shows how to make frontend and games which are domains that have better tools to achieve these problems, not to mention they are quite different (especially the users). I do think it was the lack of focus and to broad of scope.


> *[2020-05-21 23:01:47]* **Chris Granger**:

It's sad that we see Python and Excel withering away in their generality 😛


> *[2020-05-21 23:02:12]* **Chris Granger**:

Or the internet for that matter.


> *[2020-05-21 23:02:22]* **Steve Peak**:

I mostly agree too.


> *[2020-05-21 23:06:00]* **Steve Peak**:

>  Language, math, art, kinesthetics, and so on are ridiculously general
“Programming” is an art and it has many mediums and abstraction layers. Just like in art and language and math, there are differnt requirements at different levels of need. Languages are not abstracted enough… but we do have hope. I can “code” without code already. “Alexa, what is 1+1” It’s basic… yes… but it’s betting smarter. With time, it will do things like `weekly, look at the forecast and adjust the number of drivers required to deliver food by comparing average orders and weather`


> *[2020-05-21 23:06:24]* **Steve Peak**:

^^ That problem today *requires* programming. But I promise you that it will not in the near future.


> *[2020-05-21 23:07:25]* **Steve Peak**:

Futhermore, we won’t be writing this by saying `Start. New cron weekly. set variable weather to accuweather forcast for date…..`


> *[2020-05-21 23:14:24]* **Steve Peak**:

I think Python, Rust, Go, Typescript, CSS, etc. etc. are good languages, they solve problems in their domain well. We all know that to be a fact. The tooling will get better and new languages will replace old ones, yet remains that only very few NEED to and CAN understand this domain level. I’m not sure AI and NLP have much to help with on this level of abstraction…. but the level where the rest of the world needs technology (like Alexa and Siri level) where voice is king… that level of abstraction should not be for Python or any other language of today.


> *[2020-05-21 23:18:53]* **Chris Granger**:

It might be worth actually reading the article rather than skimming it. It's presenting a different perspective on how english might be a better python than python is.


> *[2020-05-21 23:19:32]* **Chris Granger**:

You may disagree with that, but you're not doing so in a constructive way that points to actual fallacies in the argument.


> *[2020-05-21 23:26:50]* **Joshua Cole**:

It seems like the conversation in thread might be talking about several different (and mostly orthogonal!) things at once. How general a language's capabilities are, what it's input methods are, and even where on the spectrum of implicitness (draw an eye) to explicitness (start an arc at X100Y50, ...) it falls are all completely separable decisions.


> *[2020-05-21 23:27:52]* **Joshua Cole**:

It's useful to explore each of those axes separately -- I often find the most interesting ideas in the easy-to-overlook nooks formed by combining an odd set of positions.


> *[2020-05-21 23:31:07]* **Joshua Cole**:

Relatedly, most languages actually occupy a range rather than a point on those axes, which often provides a much better experience than one endpoint or the other ever could. As an easy example, I might struggle to perfectly recreate the mona lisa working only at the "draw an eye" level (and it'd take me ages to try to recreate it using only assembly...), but I'd likely have a much easier time of it if I could start there and then successively increase the explicitness of my instructions until I got the desired look.


> *[2020-05-21 23:33:01]* **Chris Granger**:

☝ that is what the new thing we're working on is trying to cover: how do you create an environment that lets you seamlessly flow between high level implicit statements to low-level explicit refinement?


> *[2020-05-22 00:23:43]* **Tom Lieber**:

With previous Eves you’ve published reading lists of related tech. Do you have a reading list for this one yet? Holes and project templates are the extent of what I’ve seen for being able to refine software into existence.


> *[2020-05-22 00:42:30]* **Chris Granger**:

In the programming world, Self and the Alternate Reality Toolkit are the closest things I know of. Entity Component System engines are related as well. As Ivan mentioned in another thread, 3d software definitely has this feel and there are lots of games to really dive into: Minecraft, Factorio, Dreams, Little Big Planet, etc.


> *[2020-05-22 00:47:55]* **Chris Granger**:

FWIW, the new project doesn't have the same goal as Eve did. We're less concerned with explicitly trying to get end users into programming, though the approach may help do that. We just want to make an environment that we actually want to live in. 🙂


> *[2020-05-22 00:49:00]* **Chris Granger**:

We'll see where that ends up landing on the accessibility spectrum.


> *[2020-05-22 01:54:08]* **Tim Babb**:

I have to say I'm impressed with how well this natural language system appears to work.

I share some of the earlier concerns in this thread that it might be very difficult to tell what's going on when things _aren't_ working as intended— not just in terms of how the syntax is being parsed, but what the compiler and resultant program are actually _doing_.

The most difficult part of programming— mental simulation of invisible processes— is not really fixed by making the program into plain English. I'd hypothesize that an unambiguous notation is actually an aid to mental simulation, not a hindrance (it removes some guessing/degrees of freedom about what the computer might be thinking).

Of course the use of a symbolic notation itself requires more complex mental simulation (i.e. of a parser/lexer/compiler), and this "bootstrapping problem" adds yet another layer of difficulty that makes even getting started with programming so hard for many beginners. But I think it's a big fallacy to think that removing this initial barrier is what will open up programming. It's just the first hurdle; after that comes a lifetime of mentally emulating every program you work with.

It's my thesis that the future of programming will not come about until the need for mental simulation is largely removed. But this is a really interesting and unexpected peek into perhaps another, new niche of programming.


> *[2020-05-22 02:09:12]* **Tom Lieber**:

Thanks, Chris!


> *[2020-05-22 02:18:53]* **Tom Lieber**:

**Tim Babb** Are there ambiguities in the notation?


> *[2020-05-22 03:36:00]* **Eddy Parkinson**:

**Steve Peak** **Chris Granger** One problem with "Programming in plain English" is the exceptions problem. This is just not solvable unless you can solve the exceptions problem. Ripple Down Rules explains the problem, and describes a good human solution. The issues relates to rules. Rules typically have exceptions. This was made clear by some guy trying to create an expert system in a hospital. Experts would come to him with new rules for the expert system. He would code them in. Then they would come with a new rule than was an exception to the old rule. And so he invented Ripple Down Rules. This is a problem for coding, because, you need to uncover the exceptions. When given a text description of a problem, a lot of what a programmer does is look for the exceptions to the rule, the edge cases. Then they make a judgement call of if to include code that handles the exception or not. If you look at a program, sometimes it is mostly exceptions. It required a human to extract all the exceptions and then code them.
Until a computer can work through a text description of a problem, and some how uncover the exceptions, I don't think we will see this kind of thing working.


> *[2020-05-22 03:37:27]* **Tim Babb**:

**Tom Lieber** There is ambiguity in English, so certainly!

The compiler will make some choice in the face of ambiguity (including possibly to error; I don't know what this system does), but the human will still be faced with the problem of predicting what disambiguating choice the computer will make.

It seems like the compiler is doing a sort of "fuzzy match" (?), so not being an AGI, it will certainly not guess correctly what the programmer meant in all cases. So when that happens, the human will be tasked with figuring out what the computer _thought_ they meant.


> *[2020-05-22 03:59:00]* **Eddy Parkinson**:

**Tim Babb** I though we had good solutions to the ambiguity in English problem already. Systems like <https://donotpay.com/> can already handle ambiguity. I have not tested one, but I understand they do work successfully.


> *[2020-05-22 04:09:39]* **Tim Babb**:

**Eddy Parkinson** English (and pretty much all spoken language) is known to not be unambiguously parseable. Ex: "The boy lured the duck with a loaf of bread." Who had the bread, the boy or the duck? We humans know from world knowledge about ducks and loaves and animal behavior that one interpretation is more likely to be true; but either interpretation is a valid grammatical parsing. You basically couldn't solve this kind of problem in general without having a fully world-educated AGI. Even then, we can construct grammatical sentences that intelligent humans can't disambiguate with more information.


> *[2020-05-22 04:11:28]* **Tim Babb**:

"Update the variable with the value 3". What happens there? Am I writing the value "3" to something, or am I searching for something which has the value "3"? We could imagine circumstances where it'd be obvious to a human programmer, but I wouldn't expect a compiler to do better than chance.


> *[2020-05-22 04:29:17]* **Tom Lieber**:

In PEP, you'd write one of those parses as `Put 3 into the variable` and the other as something like (guessing) `Find a variable with the value 3`. I don't think its goal is to let you write whatever you want, just to ensure you don't ever have to write `var = 3` or `variables.select { |v| v == 3 }` .

`a.foo()` is ambiguous in JavaScript, and we've put a lot of engineering effort into being able to tell you which `foo` it will be. PEP seems simple enough that you could probably do it easily, maybe statically.


> *[2020-05-22 04:38:58]* **Tom Lieber**:

I made a language with no regularity, where most AST nodes presented as English-looking sentences/phrases with slots for arguments. I made it a blocks language because my parsing skills are ~0, and solved the "I don't know what to type" problem with autocomplete. Docstrings let you disambiguate the results if some were too similar to tell. If you haven't tried such a language, give it a shot, because I think the most obvious potential pitfalls are red herrings.


> *[2020-05-22 04:41:18]* **Tim Babb**:

What would happen if the programmer wrote the sentence that I did?


> *[2020-05-22 04:42:36]* **Tom Lieber**:

In PEP, I dunno. I don’t have Windows. :( In mine, you’d have an ordered list of likely parses to choose from.


> *[2020-05-22 16:58:09]* **Tom Lieber**:

😛 Never promised my system was good, just that the problems the people in my user studies ran into had nothing to do with parsing. People loved that their autocomplete/search results looked like "Play a major scale starting at [note]" instead of "play_scale(base_note)". I wish I'd written more down, but oh well.


> *[2020-05-22 22:38:53]* **Garth Goldwater**:

love this in particular:
>>>Note that formal names (proper nouns) are not required for parameters and variables. This, we believe, is a major insight. A real-world chair or table is never (in normal conversation) called “c” or “myTable” — we refer to such things simply as “the chair” or “the table”. Likewise here: “the vertex” and “the polygon” are the most natural names for these variables.


> *[2020-05-23 03:15:33]* **William Taysom**:

I see the trick with articles and pronouns is to have interactive disambiguation, else you end up with the most nuanced scope and shadowing problems.  (In one of my silly lisp phases I had `(the whatever)`, `it`, `him`, and `her`.  The last two were bound when you used comparison operators, like, I don't know `(def (min-f f x y) (if (< (f x) (f y)) him her))`.  So this returns the minium of `(f x)` and `(f y)`.


> *[2020-05-23 07:05:13]* **Zubair Quraishi**:

I really liked Chris's comment "We just want to make an environment that we actually want to live in". I actually think that before we think of making our tools for others, we have to make sure we love them ourselves! If we do that then we have already succeeded!


> *[2020-05-23 10:17:37]* **nicolas decoster**:

**Tim Babb** said:
> The most difficult part of programming— mental simulation of invisible processes— is not really fixed by making the program into plain English. I'd hypothesize that an unambiguous notation is actually an aid to mental simulation, not a hindrance (it removes some guessing/degrees of freedom about what the computer might be thinking).
I totally agree. With ambiguous systems based on natural language programming, there is a new source of complexity: for some task it can be tricky to find/guess the sentence that will make the compiler produce the behavior that you want. And maybe one compiler will "choose" one behavior that will be different than the one chosen by an other compiler. We only have this kind of problem with "unambiguous" languages where some compilers/interpreters behave differently on some parts of some standard (like C or JavaScript).


> *[2020-05-23 10:52:27]* **Chris Knott**:

I think that's true to an extent. I occasionally "resort" to mathematical style notation when English is getting clumsy - i.e. added brackets or using set notation. This is most common in reading legalese. I genuinely believe laws would be more approachable if written in pseudo-code.

I think this is rare though. Natural language is normally unambiguous. It's more common to see, for example, natural language comments elucidating a piece of code. These two sentences convey essentially exactly the same semantic information;
1. Copy the value of the 'eax' register into the 'eab' register
2. mov ebx eax
But #1 is much easier to understand. There's no reason that assembly code should *necessarily* be written like #2 and not like #1


> *[2020-05-23 10:56:22]* **Chris Knott**:

Obviously the program that can take #2-style code and produce binary is much simpler to implement than a program that can take #1-style code and produce binary


> *[2020-05-23 11:05:23]* **Chris Knott**:

e.g, just picking one of the first Google results for learning x86 - <https://www.cs.virginia.edu/~evans/cs216/guides/x86.html> - in every case it shows the assembly code on the left, and then a plain English explanation of the command on the right. Is it beyond our technical capability to build an assembler that takes the stuff _on the right_, instead of the stuff on the left? No, obviously not.

To get something like "do my taxes" to execute on a processor, we have to somehow translate "do my taxes" into a series of processor instructions that can be physically realised. This is like "essential compilation". Every stage of this process can perfectly well be described unambigously in natural language.

Separately to this, there might be an essentially arbitrary set of "compilation" between different programming languages.

---

*[2020-05-21 17:18:55]* **Nikolas Martens**:

Hi community. Who here is currently or was in the past working on turning their FoC project into a business? I'm considering it and would love to talk to somebody who has some experience with going in that direction.


> *[2020-05-21 17:42:14]* **U0123H7JRDM**:

Well, I hope to do that in the future or at least use my project in other (paid) projects. But a lot of work and thinking needs to be done before I am at that point, having the right focus/goal for my product is important. In the netherlands we have a special arrangement which you can apply for to get a subsidy for innovative projects("wbso"), that at least helps me to spend more time on development. This subsidy is a discount on your taxes.


> *[2020-05-21 19:11:12]* **Ryan King**:

My project has a heavy focus on business use cases and will be commercialised in the future. I currently I live off another project (not FoC focussed) I turned into a business and am happy to offer any advice in that regard.

What's your project? And who does it benefit?


> *[2020-05-21 19:25:18]* **Edward de Jong**:

My Beads project will be commercial eventually. I have built many tool oriented products in the past (word processor, desktop publishing, label design, bitmap painting). The commercialization of software tools has moved almost entirely to ipad and iphone as predatory firms like Google have used their near monopolies in search advertising to subsidize free tools that undermine commercial enterprises, while their overall goal is to destroy the operating systems by substituting the web as the universal VM. In the history of software we are in an unusual phase that shows the need for antitrust regulations.

The one bright aspect of today's marketplace is that it is now accepted by some to pay a subscription fee for software and that gives companies much greater financial strength compared to the old days of shrinkwrapped product that had an initial purchase with perhaps an upgrade or two down the line. I actually prefer the fixed price model, as that is how i buy hammers and other durable tools. If a software tool is well made it won't need constant updating.


> *[2020-05-21 22:19:55]* **Steve Peak**:

**Nikolas Martens** we are bringing Storyscript as a business to the market. Happy to share how/why


> *[2020-05-21 22:20:50]* **Steve Peak**:

Darklang is also going to market.


> *[2020-05-22 02:07:40]* **Tim Babb**:

Lynxtool is also a company now. 🙂


> *[2020-05-22 04:12:28]* **Eddy Parkinson**:

YC startup school is free - and you get paid to do YCombinator, also if you complete you get $100,000 last I checked. There is also <http://www.paulgraham.com/articles.html> - you can find top 10 lists for these essays. Many good videos here <https://huzzaz.com/createdby/startuptheory> the ones with paul graham in tend to stand out. While I like these videos, I think the essays are better.

There are other training course, but they are dwarfed by YC.


> *[2020-05-22 05:26:03]* **Nikolas Martens**:

Awesome thanks for the responses and the pointers. I will DM you individually.


> *[2020-05-23 06:59:01]* **Zubair Quraishi**:

Yazz Pilot has generated revenues (probably 1.5m - 2m USD) for individuals (consulting) and companies (building demo dashboards), but we have decided not to monetize it ourselves at this time.


> *[2020-05-23 15:18:04]* **Zubair Quraishi**:

But really , depends what you mean by monetize. If you mean direct sales then yazz Pilot has generated 0 dollars. I generally do solution sales where we sell a solution and the customer doesn’t care how it was implemented . It just happens that yazz let us deliver something that wasn’t possible with other tech 

---

*[2020-05-21 17:23:59]* **Vitorio Miliano**:

Did anyone see the OpenAI code generation demo during Microsoft Build this week?  Write a function name and a comment and OpenAI generated Python code that does that thing, and keeps context across functions?


> *[2020-05-21 20:25:08]* **Tom Lieber**:

I missed it! Do you have a link or name I can search for?


> *[2020-05-21 20:26:02]* **Tom Lieber**:

Looks like 29:00 into <https://twitter.com/i/broadcasts/1OyKAYWPRrWKb>


> *[2020-05-21 20:53:03]* **Vitorio Miliano**:

That's the one!


> *[2020-05-21 22:10:02]* **Steve Peak**:

Same problems different day. Look, generating Python code is not exciting. The problem is not “just” writing the code. We often forget there is learning git, infra, package management, and like a million other things that this OpenAI does not help with for the other 99% of the world that *cannot code* and regardless of an AI helping them type strange looking Python — it will not change the fact that most people cannot code.

It’s impressive, sure, but think about who benefits by writing Python faster…? Is speed really the problem?


> *[2020-05-21 22:11:10]* **Steve Peak**:

Python, and all other languages, remain to low for most people and that will not change. We need something higher-level than classes, functions, variables and importing libraries. 🤔


> *[2020-05-21 22:18:06]* **Steve Peak**:

I will come to no surprise that I think this presentation by Microsoft was not inspiring nor fully utilizing the OpenAI framework to empower more people. It may have only made it easier for people who already know how to code… 🤷


> *[2020-05-21 22:18:18]* **Tom Lieber**:

The first time I saw tech like this was in Scratch to help beginners learn to code. They could write what they wanted the code to do (“make the ball bounce”) and get a handful of snippets that they could steal from. And it worked the other way, so if they were unsure what some code did, they could press a button to get potential descriptions based on how people had described similar code. Very handy for learners.


> *[2020-05-21 22:22:07]* **Steve Peak**:

Right, but Scratch is a structured editor and essentially all-in-one. Python is far from that.


> *[2020-05-21 22:23:54]* **Steve Peak**:

Now, if this was built into Darklang… now we are talking.


> *[2020-05-21 22:29:35]* **Tom Lieber**:

A key part of the demo is that it puts you in conversation with the computer about processes _grounded in the language of your code base_. It happens that Python is part of the shared language they used in this demo, but it’s really impressive that it is even conversant in verbs the user themselves defined.

I can’t say I’d get any more or less out of it if they’d done it in Dark? The value of the demo isn’t in your ability to download it today, is it?


> *[2020-05-21 22:31:49]* **Tom Lieber**:

Honestly if they swapped out Python for system hotkeys then you’d be well on your way to being able to type “computer, do my taxes” so I’m having trouble figuring out your disappointment.


> *[2020-05-21 22:32:37]* **Steve Peak**:

I’m sorry, explain to me how system hotkeys can do my taxes?


> *[2020-05-21 22:36:32]* **Steve Peak**:

I think they picked Python for a reason. That reason being that their demos are search results in StackOverflow. I’m not inspired by writing the code they demoed because all that is in libraries. They did the simple stuff…. how is that impressive? What about the hard stuff? I don’t think it will anything to say about it. Python and essentially every single language has constructs and design principles that require abstraction and refactoring when the domain changes or knowledge is exposed. `this function reverses a list` is nothing. `this function fetches our customers from stripe and filters by company, then cross checks the results against our salesforce`…. now that is something real


> *[2020-05-21 22:37:54]* **Tom Lieber**:

The same way you do if you use tax software by pressing keys. If you wrote it out in Plain English, it’d look like “Open browser. Navigate to [taxcut.com](http://taxcut.com). Type username. Type password. Paste my 1099.” with more words because I’m on my phone 😛 The point is, every process, transcribed, is code, so interpreting natural language into code is a big deal, if not exactly what you were calling for in the other thread.


> *[2020-05-21 22:37:57]* **Steve Peak**:

It’s the unique stuff that counts. All these businesses have different constraints, services, environments, processes… OMG it’s endless. The OpenAI demoed is nothing but a search result in SO


> *[2020-05-21 22:39:04]* **Steve Peak**:

>  interpreting natural language into code is a big deal
This is where I, respectfully, disagree. At least in the context of code being a programming language currently on the market today.


> *[2020-05-21 22:40:37]* **Tom Lieber**:

I personally look forward to instructing a computer to help me generate any code required as input to every language you ever create. 😄


> *[2020-05-21 22:41:14]* **Steve Peak**:

Oh, I certainly am too. It’s what I’m building at Storyscript… but it’s NOT translating to Python


> *[2020-05-21 22:41:55]* **Steve Peak**:

`create a form with an email and after it's submitted put the results in my excel table` That is WAY better NLP. And… it works in Storyscript.


> *[2020-05-21 22:43:04]* **Steve Peak**:

`upload zoom recordings to youtube and slack me the link`…. Try doing this in OpenAI to Python. Sure you can… but you still have to deploy it, manage env, etc. etc. etc. The code is meaningless without being able to execute it effectively.


> *[2020-05-21 22:43:34]* **Steve Peak**:




> *[2020-05-21 22:44:24]* **Steve Peak**:

You see the difference here? The above is serverless, gitless, codeless, envless, deployless. It’s voice powered, context free, click-to login and runs out of the box.


> *[2020-05-21 22:44:59]* **Steve Peak**:

PS it’s not a programming language. It’s not compiled, not interpreted, not transpiled.


> *[2020-05-21 22:46:04]* **Steve Peak**:

PSS I did not type that code, it was entirely generated.


> *[2020-05-21 22:46:23]* **Tom Lieber**:

It’s hard to tell from a screenshot, but the interaction seems structurally identical?


> *[2020-05-21 22:47:52]* **Steve Peak**:

If the differences are not obvious ( `serverless, gitless, codeless, envless, deployless` ) than I’m not getting my point across.


> *[2020-05-21 22:48:44]* **Steve Peak**:

And it’s not structurally identical. Python does not have built-in WYSYIGS and you still have all the traditional concerns as listed above.


> *[2020-05-21 22:52:30]* **Tom Lieber**:

It seems like you also really like to be able to generate code from natural language, and since that’s the only part of the demo I think is significant, we’re good 👍🏽


> *[2020-05-21 22:53:32]* **Steve Peak**:

🤣   ❤  you Tom! — We can agree on that for sure. But I implore you to think about the implications of using Python (or other languages) because it’s not easy, it’s seriously a pain in the ass and why only 0.3% of the world can do it.


> *[2020-05-21 22:54:28]* **Steve Peak**:

**Chris Granger** This conversation above sheds more light on our discussion. Thank you!


> *[2020-05-21 22:54:30]* **Tom Lieber**:

Absolutely! We’re in such agreement there, and I’m honestly thrilled at seeing you take this direction in Storyscript.


> *[2020-05-21 22:56:48]* **Steve Peak**:

Ignoring Storyscript for a moment, as a Python developer myself, I don’t see the demo as being “that” useful in how I write code. Most my code is unique business-logic requiring constraints and very intentional abstractions that I’m not optimistic OpenAI will account for. I would however use this demo’s talents on generating the most basic functionality in my application so that I don’t need to search SO 😉


> *[2020-05-21 23:00:13]* **Tom Lieber**:

I think if it reaches GPT-level understanding of language (a high bar and a low bar), it should be able to converse using your abstractions. I think that was the point of the part of the demo where they said “print a receipt” and it did so using the helper method that retrieved all the line items.


> *[2020-05-21 23:09:57]* **Steve Peak**:

`print(“Data {}“)` is NOT “print a receipt”… print a receipt is format data and send data to the receipt printer to be printed on paper 😉 🤣  Great an AI can call a “print” function but it’s light-years away from figuring out how to connect to a EPOS TM88…. (which I did professionally for years, it’s a fucking nightmare to manage that complexity)


> *[2020-05-21 23:11:13]* **Steve Peak**:

The AI would help me write 1 line of code while I, manually, have to figure out how to write thousands to abstract the stupid escape character sequence to cut the paper. Yes, it left scars HAHA


> *[2020-05-21 23:51:16]* **Joshua Cole**:

One subtlety here that will probably limit the practical impact of this in the near future -- the process of verifying whether the generated code is correct or not is essentially the same as debugging somebody else's code without them around. For functions on the simpler side, that may be a simple enough task, but as complexity increases that difficulty scales superlinearly.


> *[2020-05-22 00:12:35]* **Tom Lieber**:

Steve, I’m really curious where the rubber meets the road in your ideal system.

If someone said to you, “Weekly, look at the forecast and adjust the number of drivers required to deliver food by comparing average orders and weather,” wouldn’t you start by looking at your tools an *compiling* your available actions into a *procedure* to achieve your goal? You might defer some of that work, and you might keep the original request in mind to evaluate your effectiveness and correct course over time, but so long as the request is made using language and not a timed series of motor commands injected as electrical impulses directly into your brain stem, it seems compilation is an essential part of the process of doing someone else’s work… yet you seem to hate compilation in every form people have discussed today, be it template matching of pseudo-English all the way down to machine code, or ML-based machine translation to Python—but somehow compilation of short English phrases to Storyscript gets it right?

Like… what if PEP bottomed out at Storyscript, or the OpenAI system emitted Storyscript, allowing someone to write three Storyscript statements using only one command? Neither of those systems were written to preclude this, but you act like their existence is unjustified because they don't.


> *[2020-05-22 06:41:26]* **Ian Rumac**:

So they’re just throwing ML at the problem, much surprised, very wow.

I agree with steve here - an ML trained on a bunch of snippets from github/SO is 99% sure not to have or understand what I’m doing when I’m juggling the domain abstractions. Yeah it could help with writing down the boilerplate, but wtf do we even write boilerplate then? Just make a template instead of making an “AI”.

I mean, it’s a good idea, but so far away from reality that doing this is just picking the low hanging fruit and saying “oooh future”.


> *[2020-05-22 11:58:44]* **Steve Peak**:

**Ian Rumac** **Joshua Cole** 🙏 Well said. I'm happy you both see that the challenges of generating and validating code that's is beyond simple functions.


> *[2020-05-22 12:01:18]* **Steve Peak**:

**Tom Lieber** I believe a 1:1 chat would be more productive to answer your question. It's not easy to articulate the subtleties and UX without going into the small details.


> *[2020-05-22 16:31:08]* **Tom Lieber**:

I dunno, maybe we're off in weeds that are only interesting to me, but could you point to where the boilerplate is in this example?

The bodies of these functions were written by the ML model and required making several design decisions without human intervention, about how values should be computed, what nearby methods could be reused, and what output should look like. I think in any other context, we'd call the parts that the human wrote "boilerplate" and the parts that the computer wrote "programming".


> *[2020-05-22 16:57:18]* **Steve Peak**:

**Tom Lieber** the above cannot be generated by OpenAI, there are many assumptions that it made and decisions that it made which throw many red flags for me. However again, I think we are on different pages here because what I see in this screenshot is the “simple” parts of coding, the “hard” parts concern the abstractions, security, data integrity, integration and scope concerns that an AI, in the general purpose sense, cannot manage well (and I think never will unless you narrow the scope).
**Joshua Cole** was spot on when hinting at verifying generated code. The system may have come up with multiple potential candidates, How do you pick them? How do you provide the extra context or params when required. **Tom Lieber** I promise you that this demo was hacked… I have little confidence that the results you see are fully using OpenAI. I would love to try it out and give it just a little ambiguity and see it fail constantly.
There is so many issues with the above… I don’t even know where to start. I would bet 💰 it was mostly faked.


> *[2020-05-22 16:58:37]* **Steve Peak**:

Think about all the ambiguity. Understanding the variable scope, the class structure, the functions available, the user intent… it’s far to much and far to complex to “just generate” it… This is at best snake oil..


> *[2020-05-22 17:07:13]* **Joshua Cole**:

FWIW -- I think it's very plausible that this particular example was generated honestly by the team. This is a pattern that I'd expect to be well-represented in the corpus of training material available on github, and so I'd expect the AI to usually get close. Particularly when using logical constraints as part of the generation process (think techniques like SRL). Occasionally, close will end up being completely correct. The issue with trying to use this for writing production code is that even an 80% success rate on individual expressions produces a *lot* of bugs over time without skilled programmers constantly debugging newly generated additions. I think it's probably a wash for most programmers to try to use this for development (assuming it's in that state), but reflecting more on it, this seems like potentially a *huge* _accessibility_ boost for programmers who are blind or have lost dexterity. Definitely an avenue worth exploring more on the road to AGI. 🙂


> *[2020-05-22 18:12:42]* **Chris Granger**:

Having built systems that can take arbitrary english and write sophisticated queries with high accuracy, these examples seem entirely doable given the technologies we have. Also knowing several of the people at OpenAI, including Sam, it's extremely unlikely the demos were "mostly faked." Are they general? Dunno. They made no claims that it was and we'd need to see more. But either way it's probably wrong to be so convicted that it's all just lies.

In general, you'll gain much more from evaluating things from the prospective of how they _could_ work, rather than assuming they're impossible and the people behind them are just using smoke and mirrors. It's also better for the community if we assume people are showing things in good faith, instead of trying to trick you.


> *[2020-05-22 18:19:38]* **Chris Knott**:

**Steve Peak** For what it's worth, when I made this comment - <https://futureofcoding.slack.com/archives/CCL5VVBAN/p1587142633117200?thread_ts=1587131460.117000&cid=CCL5VVBAN> - my immediate reaction to your demo had been "this must be faked"!


> *[2020-05-22 18:25:44]* **Steve Peak**:

**Chris Knott** It was faked, of course! That’s what marketing is all about.


> *[2020-05-22 18:28:13]* **Steve Peak**:

I never said it was real and it should be obvious that it was faked. The fact remains that we *are* building this and have made significant progress. Still remains, the scope of Python and challenges that come in the GPPL world are vast and the OpenAI won’t be able to generate code beyond simple functions that got seeded with nearly perfect concepts. In their demo, if you remove just one word it would fail to produce the code because that one less word created ambiguity that no AI can resolve because the answer is in your head.


> *[2020-05-22 18:35:54]* **Steve Peak**:

**Chris Granger** I’m not assuming they were intentionally tricking anyone, or being malicious. I do think however, based on experience and research in this category, that the words which were seeded to OpenAI were methodical and predefined. Like as if “If you say this exact phrase, we can generate this code”. I say this with confidence because if you change even small parts of the sentence than you lose scope/context and add ambiguity which the AI cannot understand.

---

*[2020-05-22 08:48:41]* **Shubhadeep Roychowdhury**:

Hello All, today we announced our first open source library "Tree-hugger: Source Code Mining for Human".

We published an article about it. Please have a read - <https://medium.com/codist-ai/introducing-tree-hugger-source-code-mining-for-human-b5fcd31bef55>

Also, here is the repo - <https://github.com/autosoft-dev/tree-hugger>

Do not forget to star ⭐ it if you feel it may help you 😉

---

*[2020-05-14 15:17:35]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-22 11:04:22]* **Daniel**:

Maybe a bit late to the party but there is also Finder replacement app for mac <https://www.raskinformac.com/>

---

*[2020-05-22 11:16:33]* **Daniel**:

Hi all
I'm working on DataPipes a flow-based editor for macOS. That is kind of my tribute to QuartzComposer that introduced me to the idea of flow-based programming. I always wanted to use this approach to something else than graphics - and here it is.
The main idea is to use flow-based approach to dealing with data without touching code and as a result make it easier to use real(istic) data in the design process.

Here is the short screencast of the current alpha version, any feedback highly appreciated!

PS: If you think the app is worth your attention please join early access list at <https://DataPipes.app>

<https://www.youtube.com/watch?v=0t7pv2FbDxk>


> *[2020-05-22 11:27:31]* **Chris Maughan**:

Nice!  The 'ElectronFree' comment at the end made me curious?  Are you striving to be pure JS?


> *[2020-05-22 11:27:47]* **Chris Maughan**:

And why is that a good thing 🙂 ?


> *[2020-05-22 11:33:24]* **Daniel**:

🙂 well far, far from it. I'm tired of those almost working UIs built on top of web stack and advertised as apps. Hence I've decided to go full native.


> *[2020-05-22 13:00:14]* **Chris Maughan**:

I have no skin in the game regarding this argument, I was just curious.  By full native you mean?  i.e. what is the UI/language tech?


> *[2020-05-22 13:22:29]* **Daniel**:

Sure thing. Nothing fancy I guess, just swift + objective c using AppKit (aka Cocoa).


> *[2020-05-22 15:20:27]* **Roben Kleene**:

Looks good! I'd love to hear any more thoughts on use cases you think DataPipes is a particularly good fit for, and if there are any other exiting visual programming environments besides Quartz Composer that you think it would be interesting to compare it to?


> *[2020-05-22 15:20:52]* **Roben Kleene**:

Also there was an interesting thread on Hacker News about visual programming yesterday in case you missed it <https://news.ycombinator.com/item?id=23252448>


> *[2020-05-22 16:33:32]* **Daniel**:

AFAIK flow-based UI (or something akin to) is used by a couple of ETL tools ([parabola.io](http://parabola.io) for example). My goal however is to be closer to a designer, tinkerer needs - so not scalability but flexibility rather.
DataPipes should allow its users to quickly build something useful for prototyping needs. Easy to tweak, refactor, and change without coding.
I'm just starting so we will see how it ends.

Re HN - tnx, I have not seen that discussion.


> *[2020-05-22 16:41:30]* **Julius**:

This is dope! I used QC heavily for design, and worked on origami.design

My main feedback is in two parts:
- how are you imagining implementing repeating lists with randomization within? R u thinking the Iterator route from QC or Spreads from Vvvv?
- big reason QC was so great was live refresh, would love to see this work without clicking that button at the top and refreshing in the browser (maybe quick hack to use python httpwatcher to reserve)


> *[2020-05-22 16:42:43]* **Julius**:

3rd feedback is sharing to other folks is important and I can imagine a local json server not being super helpful when sharing a live proto with someone else, what r ur thoughts for tackling that? It was def a big blocker for adoption of origami studio/QC files not to be able to share freely and view on the web


> *[2020-05-22 17:52:45]* **Daniel**:

Tnx Julius, you raised IMHO some of the most important issues I was dealing with :)

1. Re: lists - as of now there two ways already builtin - either the generator node has 'Repeat' port that takes the number of generations to make, or you can use sequences, something closer to iterator pattern than strictly imperative loop with its body
2. Live refresh - that's absolutely a priority for me too, so the current connect-run-repat chore will be gone forever
3. Sharing - from the very beginning I was thinking about the flow runtime engine to be ready to work on the server as well. So it easy to imagine the third icon in the toolbar saying "Deploy to Cloud" (with all consequences on data privacy etc).


---

*[2020-05-22 22:15:57]* **undefined**:

How many SLOC is your FoC project, at the moment?


> *[2020-05-22 22:56:44]* **Edward de Jong**:

compiler=26k, runtime JS=31k, runtime AS=35k, samples=20k, docs=10k, but i don't have a tool that discounts comments so i demoted it to under 100k.


> *[2020-05-22 22:57:17]* **Edward de Jong**:

doesn't seem to be a way to change your vote in the poll system.


> *[2020-05-22 23:20:59]* **Kartik Agaram**:

Clicking the number a second time toggles it off.


> *[2020-05-22 23:30:43]* **Kartik Agaram**:

I feel the need for an apologia for my response, given how much I talk about LoC as liability rather than asset:
* It's for a whole computer that can run in isolation. So I'm counting all dependencies.
* Most of it is in machine code, where LoC = static processor instructions.
* Conservatively 2/3rds of it is tests.

Anyways, it's bumping up on 50kLoC now, but I won't be surprised if it eventually exceeds 100k.


> *[2020-05-23 02:48:37]* **Edward de Jong**:

**Kartik Agaram** thanks for the tip.  Also, i consider LOC a very bad unit of measurement for comparison purposes because some languages like LISP, APL, and FORTH are more horizontally oriented, and so i use word instead of lines. Words compares code sizes much more accurately. Yes people are not used to thinking in terms of words, but line count drastically undercounts more combinatorial languages. 100 lines of APL might include the name number of words (tokens) as 300 lines of C.


> *[2020-05-23 05:36:41]* **U013HU44GLS**:

Ahem ... yeah so I used _cloc_ and tally-up only the actual code (e.g. no shell, latex, makefile ...) and I'm at 289682 ... (not including dependencies) 😱


> *[2020-05-23 06:09:46]* **Kartik Agaram**:

I'd love to hear more about your project, U013HU44GLS. You should do a top-level post on it.


> *[2020-05-23 06:32:30]* **Edward de Jong**:

**Kartik Agaram** The project in question is called F1zz, at <https://f1zz.org/>

As far as i have been able to determine it is a language project that combines machine learning, knowledge systems, and supports distributed systems unlike PROLOG which was for a single machine. I think it beats the pants off PROLOG, but i wouldn't call it a general purpose language. He is an expert in robot navigation.


> *[2020-05-23 06:49:23]* **U013HU44GLS**:

Thanks **Edward de Jong** for the kind words. Yeah, it's definitely not general purpose, although I did recently add some support for mixing imperative style with logic style. Also, I won't call myself an expert in robot navigation ;)


> *[2020-05-23 06:55:57]* **Zubair Quraishi**:

For Yazz Pilot the core files are around 10k lines, but most of the product is built as plug in components, so should we include those?


> *[2020-05-23 07:06:50]* **Edward de Jong**:

U013HU44GLS i was  working in Japan around the time they were running their gigantic "5th generation computer language project", which was for Japan one of their larger software projects (over 100 million in funding in those days would be like a 500 million now). They failed miserably because the leader of the project was too enamored of PROLOG at the level it was at, and could not see the limitations of that system as it was at that time. It didn't translate well into useful technology that they could apply in the key areas they were working in, and Japan in terms of software development was dead in the water until Playstation and Nindendo revitalized their fortunes. Today, Japan's games are among the best made. But anyway I like how you have created higher level constructs for storing knowledge, and tiered the information, and of course handling multiple machines at once, each of which can communicate with each other, is 10 times harder to program than a single machine which was all PROLOG supported.


> *[2020-05-23 07:09:31]* **Edward de Jong**:

**Zubair Quraishi** yes include the plug-ins because they are part of the direct system a person would use. But don't count multiple variations of the same thing. This how NPM can claim a million modules, because people have forked something and added one tiny thing, and now it is in the catalog. NPM has too many modules IMHO.


> *[2020-05-23 07:39:14]* **Chris Maughan**:

mutils(my shared lib)=7500
zep(editor)=20K
nodegraph=2K
audio=5K
jorvik(main app)=15K
Total=49.5K


> *[2020-05-23 07:40:39]* **Chris Maughan**:

Shared/OS libraries (not mine) = 1.5Million lines of C/C++


> *[2020-05-23 07:41:11]* **Chris Maughan**:

... or course, I am probably using only a small proportion of those.


> *[2020-05-23 11:41:19]* **Zubair Quraishi**:

**Edward de Jong** I guess I wouldn’t even know how to count all the lines including components. I think for me the real metric of the system is how much the core components change over time as you find new use cases. I think the yazz pilot core changes less and less every month and the data structures are pretty static (tables in SQLite) . Maybe this should be a discussion about how each project is architected instead?


> *[2020-05-23 13:18:34]* **Chris Maughan**:

**Zubair Quraishi** <https://github.com/AlDanial/cloc>


> *[2020-05-23 13:19:27]* **Chris Maughan**:

Agreed though, lines of code is just a 'how much of my personal time have I spent/wasted on this project' kind of metric 😉


> *[2020-05-23 14:23:56]* **Zubair Quraishi**:

**Chris Maughan** thanks I’ll try that tool later. I hope it works on nodejs with dynamically loaded code though. 


> *[2020-05-23 14:26:49]* **Zubair Quraishi**:

Also I view lines of code as a double edged sword. On the one hand they are like adding kgs of weight to an airplane. But on the other hand if they are essential complexity (like a jet Engine) then they are useful. So I a always trying to slim down yazz Pilot, and now really scared too, as it may be like 50000 loc 


> *[2020-05-23 16:21:41]* **U013HU44GLS**:

**Edward de Jong** Japan's 5th generation is legendary even if ill-fated! It must have been something to see it happen (that was just before my time).

---

*[2020-05-23 02:36:25]* **U0143PC0UTC**:

Hey guys. I have been going through listening to all the podcasts from the start because I find this whole topic deeply fascinating and want to make sure im up to date with everything before I start contributing here. I have one question however. In episode 3 "Inventing on Principle" with Jonathan Leung.

**Steve Krouse** and Jonathan discuss a whole bunch of really interesting things but Jonathan talks about an app I think he calls "Workflow" that he uses whenever he works on a task to help him structure how he tackles the problem. He mentions that he has shown the technique to many other people and they have all adopted it since. I would love to know more about this App and / or technique. Does anyone have any sources?


> *[2020-05-23 06:32:58]* **Ivan Reese**:

Perhaps <https://workflowy.com> ?


> *[2020-05-23 21:55:30]* **Tom Lieber**:

Yup, Workflowy


> *[2020-05-23 21:56:33]* **Tom Lieber**:

Discussion starts at 15:21 of [ep 3](https://futureofcoding.org/episodes/003)


> *[2020-05-23 22:02:59]* **Tom Lieber**:

The Workflowy workflow Jonathan describes is, when you're working on a task, each time you think of something you need to do in service of that task, you write it in Workflowy, and cross it off when you've done it. Then Steve jumps into a discussion of his dream git workflow where each item on the todo list is a branch of the repo that you "cross off" by merging it back into master. (I say dream because IIRC he imagines it having tool support that AFAIK he never wrote.)


> *[2020-05-24 01:21:26]* **U0143PC0UTC**:

awesome, thanks guys for the link and **Tom Lieber** for the description

---

*[2020-05-23 02:39:24]* **U0143PC0UTC**:

The moment in question is about 15minutes into the episode

---

*[2020-05-23 08:25:39]* **Andreas S.**:

[https://einarwh.wordpress.com/2020/05/19/into-the-tar-pit/](https://einarwh.wordpress.com/2020/05/19/into-the-tar-pit/)

---

*[2020-05-23 08:25:46]* **Andreas S.**:

Thoughts?


> *[2020-05-23 08:42:43]* **Kartik Agaram**:

Totally agreed. To quote myself from a couple of months ago:

> The authors' "ideal world" is one where computation has no cost, but social structures remain unchanged, with "users" having "requirements". But the users are all mathematical enough to want formal requirements. They don't seem to notice that the arrow in "Informal requirements -> Formal requirements" may indicate that formal requirements are themselves accidental complexity.
<https://futureofcoding.slack.com/archives/C5T9GPWFL/p1580790725492100?thread_ts=1580751504.462400&cid=C5T9GPWFL>


> *[2020-05-23 21:31:34]* **Will Crichton**:

I think your critique as valid insofar as the “Out of the Tar Pit” authors oversimplify the nature of software development and sources of complexity. But I don’t think the big ideas in the paper require having a complete problem specification. A more charitable interpretation might be: they start with a basic model of software development and its problems.

Like all models, it’s wrong, but it still usefully describes a subset of realistic situations. In those situations, the techniques the authors promote could help reduce complexity.


> *[2020-05-23 21:32:51]* **Will Crichton**:

A really great example of this is high performance image processing. For a long time, writing gnarly C++ and vector intrinsics was the only way to go. And this meant a lot of mistakes, challenging optimization, so on. Then someone came up with a clean way of separating the algorithm from the hardware implementation, and now every Android phone in the world runs Halide (<https://halide-lang.org/>).


> *[2020-05-23 21:35:31]* **Will Crichton**:

There’s a great paper in sociology called “Fuck Nuance”, which is about how researchers often point out how others’ models have one small flaw or another. But the author argues that these critiques often miss the broader value of the models. <https://journals.sagepub.com/doi/pdf/10.1177/0735275117709046>


> *[2020-05-24 01:14:24]* **Kartik Agaram**:

It's certainly true that when reasonable people arrive at different conclusions after starting from the same inputs, it's because they weight factors differently. I don't think these are minor points at all.

If Halide is to be experimental evidence for this paper, you have to motivate why _this_ particular paper over previous papers by Brooks (essential complexity) or Codd (relational state) or Parnas (decoupled design) or Knuth (stepwise refinement).


> *[2020-05-24 01:29:38]* **Kartik Agaram**:

Direct link to Will's paper: <https://kieranhealy.org/files/papers/fuck-nuance.pdf>


> *[2020-05-24 02:22:11]* **Kartik Agaram**:

I love that paper, and I find its introduction to this thread.. lacking in nuance. Only the headline applies, none of the 3 nuance traps it describes. On the contrary, I find the criticism of this thread to be about the central question, "is this theory any good?"

---

*[2020-05-03 00:01:15]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-23 11:42:51]* **Zubair Quraishi**:

Also interesting is that Chris Grangers light table inspired Swift as well


> *[2020-05-23 12:28:35]* **Ivan Reese**:

Interesting! Source / context?


> *[2020-05-23 15:13:57]* **Zubair Quraishi**:

[https://www.theatlantic.com/technology/archive/2017/09/saving-the-world-from-code/540393/](https://www.theatlantic.com/technology/archive/2017/09/saving-the-world-from-code/540393/)

---

*[2020-04-08 19:57:11]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-23 15:12:31]* **Zubair Quraishi**:

**Shalabh Chaturvedi** yeah I think the language of he future will be tuple space based 

---

*[2020-05-24 19:46:15]* **Dalton Banks**:

Are there any artists in the same headspace as folks like Alan Kay and Bret Victor, and who are exploring the “future of coding” through paint, sculpture, multimedia, etc?