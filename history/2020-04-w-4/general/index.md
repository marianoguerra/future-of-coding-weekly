*[2020-04-17 15:24:10]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-19 22:24:00]* **Jimmy Miller**:

**Ivan Reese** Mine is a bit related to Doug’s. But a bit different of a motivation.

I am building a very dynamic language.  A language that should have a very small core but with the power to implement most of the interesting things in itself.

I’ve done a bit of exploration building it in Clojure (my preferred language for many things) but found a few problems. First, the language I was making was being too heavily influenced by what was convenient for me to do in Clojure. I always ended up with a lispy thing just because I could do it quick. I know that if I stick with clojure those things will leak in more than I wanted and so I decided to not use it.

Second, and more importantly, I don’t want to spend time right now focused on speed, but I need an interpreter that is decently fast. Since most of the interesting things in my language should be implemented in itself, I will have a huge interpreter overhead. Of course, I could spend the time to optimize that away, but I’m still exploring the idea and optimization isn’t the interesting part. When I was doing things in clojure, my naive solution was already getting to the point where things weren’t interactive at the level I wanted them to be.

So for those reasons I chose Rust as my implementation language of choice. I know that in the future when I really care about the speed of everything I can make it fast. And for now, my super naive code is already fast enough for what I’m doing. I haven’t gotten quite to the point where I can really test the interpreter overhead. But I expect things to be fast enough that I can make all the ideas I have in my head in my language itself, keeping the rust I have to write to a very small amount (hopefully 500-1000 lines at most).

---

*[2020-04-13 22:47:08]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-19 22:36:07]* **J. Ryan Stinnett**:

**Kartik Agaram** (Happy to chat in a DM whenever, but at least for the moment, this is potenially an interesting discussion for the group, so I've continued here.)

> In <https://futureofcoding.slack.com/archives/C5T9GPWFL/p1586869277389100?thread_ts=1584718837.435500&cid=C5T9GPWFL> you suggested that you're trying to separate goals from solutions and focus on the former. That's reasonable as a goal for this particular page. (It's also why I find this page unsatisfying.) But it also seems reasonable for it to trigger conversations about the how. That doesn't feel like "missing the point". Isn't that sort of conversation what this page is designed to engender?
Yes, completely agreed. The mission page is trying to act as a list of ideals to aim for (and they aren't set in stone either, I'm sure they'll change and improve through feedback like this). It's great to see people talking about how they could be achieved, which goals are more important to them, etc.

> Perhaps it will help to triangulate by bringing up my mission: <http://akkartik.name/about>. Not to brag, but we're attacking highly overlapping if not isomorphic problems. By definition I should have addressed any shortcomings I bring up here. It stays high-level, focuses on goals, but also indicates the sorts of trade-offs I'm willing to make. I'd love to receive similar criticism from you about what it's lacking.
I agree, there's a good amount of overlap between the malleable principles and your own mission. Seems like we should continue to chat and compare notes as our efforts evolve. 😄

About your own mission page, overall I think it's quite good! My initial comments are only about stylistic things like making section headers more visually distinct, since my ADHD-addled brain found it hard to scan. I think with a personal mission (like your page), where you're describing your personal vision, it makes sense to link goals, constraints, and solutions together like you have done.

For the malleable site, I'd like many different voices to contribute their own views, constraints, and solutions, so that's why I've been saying they make more sense to be separate elements from the list of ideals there: I expect there to be many different answers as different people get involved. For now, I'd like to at least collect such perspectives and encourage more discussion.

> Perhaps it would help to drill down into which comments you consider to be missing the point. It might require a private conversation, but it might help make this conversation more concrete.
There's a background level of startup-y noise in there, such as <https://news.ycombinator.com/item?id=22858840>, but I never read HN these days, so perhaps that's actually a low amount of such things for the site. 😅

I agree there's useful feedback in there as well. 😄 Thanks for picking out those various threads and summarising the sentiment. I agree with your take on the ones you selected. I'll add them to my list of feedback to sift through for the future.


> *[2020-04-19 23:31:16]* **Kartik Agaram**:

Ah, I totally didn't think of the difference between a personal and collective mission statement. It makes a _lot_ more sense now. Thanks!

---

*[2020-03-20 15:40:37]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-19 22:59:40]* **J. Ryan Stinnett**:

**Kartik Agaram** Thanks for taking the time to think about it. I think it conveys your perspective well, and it's a good critique of the current content, so thanks for writing it up! I think you mostly came across as passionate about the topic, so seems like you succeeded in conveying your thoughts. 😄

---

*[2020-04-19 14:01:51]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-20 03:12:07]* **Dan Cook**:

I really like the meme that it looks to ("Not MVP, but Earliest Testable/Usable/Lovable"), even though the argument is against it:

[https://blog.crisp.se/wp-content/uploads/2016/01/mvp.png](https://blog.crisp.se/wp-content/uploads/2016/01/mvp.png)


> *[2020-04-20 03:54:57]* **Dan Cook**:

And this:
"Software is unprecedented in its low cost of development—when compared to hardware. Code, however, is arguably the most expensive medium for expressing ideas"


> *[2020-04-20 04:32:49]* **Dan Cook**:

It's amazing to keep realizing how much of "reality" (in software, society, politics, ..., etc.) is just not upon "stories" (i.e. the ways things are and how they came to be this way) that a culture buys into. (Read a book called "Ishmael" for more on that).

We all know how software was doing this bad waterfall thing, and now it's doing this good Agile thing, and everybody wants to be part of that story and be "Agile", whatever that really means.

(Alan Kay says something about people seeing the past as "like the present, but cruder", and how limiting that view is)

Similar things can be said about the perceptions of OOP, "structured programming", and probably most other paradigms in software (regarding the how things "started bad" and now we do this new good thing -- but that's just a story, and not quite accurate; reality is much more complicated). This video does a good job digging this kind of stuff up:

[https://youtu.be/eEBOvqMfPoI](https://youtu.be/eEBOvqMfPoI)


> *[2020-04-20 09:40:36]* **Konrad Hinsen**:

The first sentence of the post is the most important in my opinion: it's not about software, but about management. I wish people would stop writing about "software". That's a term just about as specific as "prose". You don't see people pontifying about how to write prose. Everybody understands that writing a novel, writing a love letter, and writing technical documentation are very different things, even though all are prose.

Agile is about developing tools for rapidly changing or incompletely understood requirements. If you are working on the perfect contribution to the Obfuscated C Code Contest, then Agile is the last thing you want. Subsuming both problems under "software development" is not helpful.

---

*[2020-04-18 03:16:30]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-20 06:25:08]* **Shalabh Chaturvedi**:

Funny I didn't think much about noise pollution when I started my blog but am thinking about it now after reading this thread. The main reasons for me were to
1) add another voice to ideas that I think are good
2) think through, clarify and organize some my thoughts - required when publishing (I find this also helps me 'move beyond' the specific idea to other ideas)
3) find folks interested in similar stuff and get comments, conversation and further evolution of the ideas

Specially wrt 3, I've been _very_ happy with the comments threads that have built up on some pages.

I dont think one needs fully formed coherent ideas to publish. A post could be a vague idea, a proposition, a perspective etc. I would personally recommend a blog, 'digital garden' or collection of unorganized notes. This is not noise, I think, but just an space folks who so desire may visit, absorb, reflect and optionally comment. People are good at filtering. Just now I found <https://twitter.com/szymon_k/status/1251887893938929665> and really like browsing this kind of collection, and looking at the various connections the author has made.


> *[2020-04-22 08:03:16]* **Konrad Hinsen**:

A blog is what you want to make of it. You can write frequent short posts, or rare long and thoughtful ones. So blogs don't imply oversharing.

---

*[2020-04-19 06:04:11]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-20 09:30:28]* **Konrad Hinsen**:

"Almost all high-level programming" sounds like a huge claim for something that looks specific to databases. Am I overlooking something that makes this idea much more general?


> *[2020-04-20 15:45:03]* **Doug Moen**:

This idea is more general than relational databases.
1. The author references "Out of the Tar Pit", which persuasively argues that relational programming should be used for general purpose programming. <http://curtclifton.net/papers/MoseleyMarks06a.pdf>
2. Every general purpose language has hierarchical data structures, and means for querying and updating these data structures. For my Curv language, I started by copying these features from popular languages. So, I have records and arrays; R.foo selects field 'foo' from R; A[i] selects element 'i' from A; etc. And I have multi-dimensional array slices. But I discovered you can't abstract properly over these language features, and they aren't properly composable. So I've broken down these features into orthogonal, composable query and update operators, and I have rediscovered the "Lens", popularized by Haskell, but Lens packages are popping up in every language. And I discovered that Lenses are good for building pure functional GUIs that are modular and composable (you use them to connect the model with the view and controller). And I noticed that my new query / update operators resemble relational algebra without the "join". So I'm looking at Tarpit and this paper, and wondering if I should just add a join.


> *[2020-04-20 17:47:54]* **U0119RRB1MK**:

I don't understand this at all. The low level relational algebrea is handled by the SQL engine itself. What is any of this work buying you?


> *[2020-04-20 18:14:55]* **Doug Moen**:

U0119RRB1MK The relational algebra is a more suitable abstraction for programming than SQL (aka the relational calculus). Quote:
• SQL has not been designed with composition and separation of concerns in mind,
• Avoiding strong coupling between subqueries tends to be very difficult in practice,
• Coupling hurts separation of concerns and software design.
This shows that embedding SQL in a programming language is not a great idea. It is a poor API, and this paper demonstrates a better alternative (the relational algebra).


> *[2020-04-20 18:18:11]* **Doug Moen**:

U0119RRB1MK The relational algebra is a general purpose API for querying and updating data structures. You don't need a relational database for it to be useful. Alf allows you to query .json, .csv, .yaml files and convert from one format to the other with ease. Microsoft has created Linq based on the same principles: relational algebra as a general purpose API for query and update, not restricted to relational databases. Microsoft has embedded Linq in all of their programming languages: C#, F# and so on.


> *[2020-04-20 18:20:32]* **Doug Moen**:

LINQ: <https://en.wikipedia.org/wiki/Language_Integrated_Query>
LINQ is based on the relational algebra: <https://news.ycombinator.com/item?id=9116884>


> *[2020-04-20 18:36:20]* **Andy F**:

awesome, I like this direction a lot, I’ve also had a nagging hunch that all program data can (and maybe should) be stored as relations


> *[2020-04-20 18:36:42]* **Andy F**:

if we look at the work that human programmers do all day, so much of it is taking things that are relational (at least in the abstract) and turning it into more-specific implementations, for example, any object-oriented code


> *[2020-04-20 18:53:20]* **U0119RRB1MK**:

LINQ I understand and it is good. I'm not seeing the connection between this and LINQ


> *[2020-04-20 19:02:45]* **Doug Moen**:

**Andy F** I don't agree with the Tarpit paper that *all* program data should be stored as relational tables. For my domain (computer graphics), you need multi-dimensional arrays and linear algebra. Storing a 4x4 transformation matrix as 16 individual cells in a relational database seems crazy. ADTs are heavily overused in OOP programming, and I'm not a fan of the style, but I still think we need abstract data types for at least some use cases. The ability to perform relational queries on compound data encapsulated in ADTs is cool.


> *[2020-04-20 19:32:31]* **Andy F**:

**Doug Moen** Something I’m optimistic about (and I have a baby side project in this area) is that a compiler could code-generate a fast path that doesn’t run full database queries at runtime. The programmer would need to declare all data access patterns upfront, and maybe give some implementation hints too. Then the compiler converts those access patterns into efficient in-memory operations and data structures. So the final program ends up doing the same stuff


> *[2020-04-20 19:45:20]* **U0119RRB1MK**:

If a [database stores queries themselves](https://github.com/samsquire/ideas3#17-query-database), it can make data layout and storage decisions that are fast


> *[2020-04-21 16:54:07]* **Konrad Hinsen**:

**Doug Moen** Interesting, thanks for the explanations!
Are there any examples of non-database code using relations and relational algebra? I remember being rather disappointed by the tarpit paper recommending this style but not giving any concrete examples.


> *[2020-04-21 17:43:21]* **Tom Lieber**:

**Konrad Hinsen** Eve puts almost everything into a database. IIRC, it didn't put much of a spotlight on the acts of projecting and joining, since they were so basic to the execution model.


> *[2020-04-21 17:45:06]* **David Piepgrass**:

This sounds cool, but I don't quite "get" the new algebra he is introducing. For one thing, in what sense are relations "first-class citizens"? Maybe I don't know the definition of a "relation". Also, why does the join work?
```project(
  join(suppliers, cities),
  [:sid, :name, :city, :country])```
does it choose implicitly to join on "city" just because the two tables both have a city column? But what if the column names don't match, and how is this going to work if two tables happen to share a column name but it is just a coincidence and not intended for joining?

I have always found relational algebra unnatural. In non-DB code, if you want to know what city a person lives in, it's just `person.address.city`... DBs are so clumsy in comparison, constantly making you think about how to join tables together while including and excluding the right data. You might say "well what if you want to know what people are associated with an address... not so easy then, huh?" Yeah, then I'd have to run a query like `people.Select(p => p.address).Where(a => a == address)`, but by golly, simple paths like `person.address.city`  are both very convenient and maximally efficient computationally.


> *[2020-04-21 17:49:28]* **Tom Lieber**:

**David Piepgrass** AFAICT, it's just the natural join from relational algebra, with formal definition here: <https://en.wikipedia.org/wiki/Relational_algebra#Natural_join_(%E2%8B%88)>


> *[2020-04-21 17:53:04]* **Tom Lieber**:

I can't argue with the inconvenience of your implementation of `people.address.city` except to say that the way you get the convenient `people.address.city` syntax with an ORM is to define the relations between people and addresses and cities, so a language based on relations would probably have that too.


> *[2020-04-21 19:32:37]* **Doug Moen**:

**David Piepgrass** A relation is just what you probably think: a table, or a set of tuples. Relations are first class in Alf because relations can be directly manipulated as first class objects (of class "Relation") in the host language, Ruby. This is in contrast with the software he is comparing Alf to, which allow you to run SQL queries against an external relational database, but don't model the relations as objects. In 2013, maybe this was a bigger deal than it is today.


> *[2020-04-22 16:23:03]* **Tom Lieber**:

The analogue of implementing an interface for a struct in Go in order to call a function like sort.Sort would be to project/join your way to having the right fields for applying another, first class relation. Like a SQL statement with parameters, such as `SELECT a FROM $tbl` .


> *[2020-04-23 19:40:19]* **David Piepgrass**:

Okay, so relations are not relationships (which certainly feel second-class in SQL). But what does it mean for tables to be first class? Couldn't we say, for example, that that a growable list of records (objects with properties) in C# is basically the same as a table, and that it is first-class in some sense? It seems like maybe the goal is to make "query composition" first class, or something like that.


> *[2020-04-24 01:44:42]* **U0119RRB1MK**:

i've come around to this idea now. It's a good idea.

---

*[2020-04-17 18:21:07]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-20 15:29:22]* **Garth Goldwater**:

**Tom Lieber** i would love to read that last tutorial if you still have the link


> *[2020-04-20 15:45:30]* **Tom Lieber**:

Now that I've read past the intro, I wouldn't exactly _endorse_ this tutorial, but [here it is](http://www.sqlcourse.com). :)


> *[2020-04-20 17:56:49]* **Garth Goldwater**:

ahh dang i really liked the framing device


> *[2020-04-20 17:57:43]* **Garth Goldwater**:

looked through it a bit and i too wish they followed up such a high quality pitch with some higher quality pedagogy. always on the lookout for examples of really foundational, clean introductions to topics

---

*[2020-04-20 18:57:48]* **Mariano Guerra**:

<https://www.youtube.com/watch?v=jtQMV8InOMY>


> *[2020-04-21 07:30:49]* **Prathyush**:

Check out
Reltron: <https://kevinlynagh.com/reltron/>

Gamma: <https://thegamma.net/>

Stencil: <https://stenci.la/blog/introducing-sheets/>

and other works from CSAIL on databases like Espalier: <https://sdg.csail.mit.edu/projects/espalier>

in this context.


> *[2020-04-21 17:21:01]* **Tom Lieber**:

That fish-eye view of an infinite spreadsheet in Espalier is 💯


> *[2020-04-22 05:17:06]* **Garth Goldwater**:

i had no idea that object spreadsheets was still being worked on—it’s great to see how much progress they’ve made!


> *[2020-04-22 05:20:50]* **Garth Goldwater**:

**Tom Lieber** which view are you referencing? not sure i saw it in the screen cap on the website or in the new ui video


> *[2020-04-22 16:17:41]* **Tom Lieber**:

This guy, where just enough extra cells exist for you to add stuff in any direction


> *[2020-04-22 18:05:41]* **Garth Goldwater**:

ahh i thought you meant something way more literal by fisheye lol


> *[2020-04-22 18:05:53]* **Garth Goldwater**:

yeah i like their cell structure a lot


> *[2020-04-22 20:08:51]* **Tom Lieber**:

Yeah, I guess that was a little too non-literal 😅


> *[2020-04-23 17:59:31]* **Garth Goldwater**:

i honestly just got excited at the thought of like a wacky hyperbolic geometry interface to grid structures or something

---

*[2020-04-21 08:19:27]* **Mariano Guerra**:

<https://billwadge.wordpress.com/2020/04/20/the-intensional-spreadsheet/>

---

*[2020-04-21 14:12:28]* **Jonathan Edwards**:

The Convivial Computing Salon will be held on Zoom May 4-9. Each session will include a presentation, a response, and a public Q&A
<https://docs.google.com/spreadsheets/d/1tuyRit9qQN1kwckS3rND8GmvSKPo-qBJW8aroEIwFt8/edit?usp=sharing>


> *[2020-04-21 14:24:39]* **Jimmy Miller**:

Is there anywhere that tickets can be purchased for one or more of these?


> *[2020-04-21 14:25:56]* **Jonathan Edwards**:

It will be open to the public


> *[2020-04-21 14:30:07]* **U010SQSJGLS**:

How does one attend?


> *[2020-04-21 19:31:32]* **Ian Rumac**:

its open? awesomeee!


> *[2020-04-21 22:33:03]* **Shalabh Chaturvedi**:

wow that's a great lineup


> *[2020-04-22 13:30:28]* **Jonathan Edwards**:

Zoom links will be posted to the sheet

---

*[2020-04-21 14:37:21]* **Mariano Guerra**:

<http://tomasp.net/blog/2020/data-exploration-calculus/>


> *[2020-04-21 15:10:32]* **Will Crichton**:

Hmm, this seems not too distinct from what the R folks are doing. a grammar of data manipulation (<https://dplyr.tidyverse.org/>), a grammar of graphics (<https://ggplot2.tidyverse.org/>), etc.


> *[2020-04-21 15:19:56]* **Mariano Guerra**:

an algebra instead of a grammar maybe? 🙂


> *[2020-04-21 15:20:15]* **Mariano Guerra**:

but yeah, I see them as parts of the same thing


> *[2020-04-21 18:10:27]* **Srini Kadamati**:

**Garth Goldwater**

---

*[2020-04-18 18:40:13]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-21 17:19:03]* **Stefan Lesser**:

Hey **Ivan Reese**, this is such a great idea. Do you mind sharing what inspired it and/or what made you set up the new channel?


> *[2020-04-21 17:20:18]* **Stefan Lesser**:

Never mind… found it in the much more appropriate #random — clearly I’m doing this in the wrong order.


> *[2020-04-21 17:28:54]* **Ivan Reese**:

Whenever we do these sorts of "New Community Initiative!" things, there's often a preceeding discussion in **`#meta`** — here's the relevant one for this new channel: <https://futureofcoding.slack.com/archives/CEXED56UR/p1586759935039000>


> *[2020-04-21 18:04:00]* **David Piepgrass**:

Anyone know of a easy2use tool for doing a screen recording with a webcam in the corner of the screen?


> *[2020-04-21 18:07:46]* **Ivan Reese**:

OBS is reasonably easy to get the hang of, and there should be a gazillion good tutorials for it since it's the ubiquitous tool of streamers. It will let you visually arrange the different video feeds however you want.


> *[2020-04-21 18:08:23]* **Ivan Reese**:

If you have questions about what quality settings to use, shoot me a DM and I'll help you hash it out.

---

*[2020-04-05 17:47:12]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-21 22:14:44]* **David Piepgrass**:

Er... I thought I agreed, but you lost me at "machine code".

---

*[2020-03-30 17:21:53]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-21 22:42:20]* **David Piepgrass**:

Well, my LES/Loyc tree project standardizes (to some extent) the structure of code independent from its syntax. You can take a Loyc tree (an in-memory language-independent syntax tree) and serialize it in a textual syntax (LES2, LES3, EC#) or in a binary format (Jonathan Van der Cruysse invented one). It's not a programming language nor an environment; it's intended as a foundation for others to build languages and environments on.


> *[2020-04-22 06:24:51]* **Vladimir Gordeev**:

**David Piepgrass** Hey! I've seen your project when I was searching for existing solutions, it is indeed interesting. It is great that you are here also.

There are some things that I didn't like in loyc trees. Specifically use of literals.

I wanted this tree data structure to be used by as many parties as possible. I expected it to be easily stored as JSON in text file, stored as file tree in Git or tree in IPFS. Use of literals like uint64 goes against that, since Git files are not typed and JSON numbers are expected to be numbers of JavaScript, which are doubles internally and cannot denote max value of uint64.

Thus, allowing different kinds of literals might create a lot of friction, many little hacks how to denote this of that kind of literals in this or that storage.

My solution to that is to have only one kind of literal: binary blob. Other kinds of values can be denoted with a wrap that will be represented equally on all storage systems: `{"uint32": "\0x00000001"}`


> *[2020-04-22 06:29:00]* **Vladimir Gordeev**:

How to interpret it, what is number what is not, what is annotation and what is not -- all of this is decided on level higher, in the tree editor


> *[2020-04-22 12:13:39]* **David Piepgrass**:

Vladimir, LES2 is intended to be used instead of JSON and is backward-compatible with it, although I guess a JSON encoding would be... possible. Now, for LES3 I decided that in order to achieve better cross-language compatibility, it was necessary to not require all implementations to support data types like int64, so I introduced Custom Literals. I think I'll be changing the implementation of this at some point, but conceptually my new approach is that everything is a string, but could, incidentally, also be a number, a Regex, a boolean, or whatever. For example, a literal like `1234f` (single-precision float 1234) would be equivalent to `_f"1234"` in LES3 which is a character sequence `['1','2','3','4']` and a type marker `_f`  in which the leading underscore means "formatted as a number literal, if possible". So you can treat all literals as pairs of two strings. Related comment on my repo: <https://github.com/qwertie/ecsharp/issues/52#issuecomment-331034896>


> *[2020-04-22 12:23:15]* **David Piepgrass**:

Fun fact, I invented an encoding for binary blobs in JSON, which I called BAIS: <https://stackoverflow.com/a/56712198/22820>


> *[2020-04-22 16:03:04]* **Vladimir Gordeev**:

There is also BSON created by MongoDB team. There is also CBOR, which is kinda similar

---

*[2020-03-30 15:54:46]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-22 15:54:14]* **David Piepgrass**:

Well, I just got laid off, so I hope the current situation will let me pair up with someone here on FoC and do a project!

---

*[2020-04-22 20:07:09]* **Tom Lieber**:

The Googler book on how different engineering is with tens of thousands of developers is apparently out! [https://twitter.com/gergelyorosz/status/1253051516228952067](https://twitter.com/gergelyorosz/status/1253051516228952067)


> *[2020-04-22 20:07:43]* **Tom Lieber**:

(I work at Google but I don’t have anything to do with the book.)


> *[2020-04-22 20:53:09]* **Ivan Reese**:

Is Google's code still all stored in a giant monorepo?


> *[2020-04-22 20:54:47]* **Tom Lieber**:

Almost al of it. The open source projects sometimes find other arrangements to better support outside collaboration.


> *[2020-04-22 22:02:39]* **Roben Kleene**:

I came here to ask the same monorepo question. The question I'm always so curious about with monorepos is what you do about your CI? In my personal repos, one of my biggest annoyances is waiting for CI to run, and the main way I keep the CI time as short as possible is modularizing my code into different repos.


> *[2020-04-22 22:04:05]* **Roben Kleene**:

I'm guessing they probably use heuristics to determine which parts have to be rebuilt? But I'm surprised there's not more discussion of how that technique works. In my opinion *no one* should be using a monorepo without a solution to that problem.


> *[2020-04-22 22:06:38]* **Tom Lieber**:

I’m not too eager to go on the Permanent Record about corp internals, so I will just point at the book again and hope it answers that question. 😅


> *[2020-04-22 22:14:04]* **Roben Kleene**:

Fair 🙂


> *[2020-04-22 22:21:16]* **Edward de Jong**:

There is no better evidence for the "system is broken" assertion, than the gigantosaur that is the google central code base, which is so large they don't even want to admit how big it is, because it shows that massive code duplication is going on.  It was 2 billion lines in 2015, and probably over 10 billion lines now. Clearly it is easier for the engineers to reinvent the wheel than search through the giant pile of stuff they have. We have yet to enter the era of interchangeable parts, and that will be a revolution.


> *[2020-04-22 22:43:37]* **Tom Lieber**:

I think it’d be more accurate to say it’s easier to reinvent and/or copy a wheel than to repurpose one.


> *[2020-04-22 23:05:34]* **Kartik Agaram**:

**Roben Kleene** your CI question should be answered by [https://bazel.build](https://bazel.build). The unit of integration doesn't really have to be a repo.


> *[2020-04-22 23:59:44]* **Edward de Jong**:

**Tom Lieber** you bet, i would wager there is tons of copy/paste going on inside that monstrous pile of code. Contrast that with a set of well tested, documented components that do one small thing well. Lego vs. the library of congress.


> *[2020-04-23 00:09:57]* **Edward de Jong**:

Bazel looks nicer than Make, but since it doesn't compute the dependencies, you have to set up the dependencies yourself, and making the makefile for C was always a pain. It is one of the weaknesses of many older languages is that you can't compute the dependencies quickly and easily. Contrast that with Modula-2 which did not allow dynamic dependencies, and forced all IMPORT statements in the first lines of the program, so you can could scan them instantly to find out what other modules are needed. I am trying like heck to not need a tool like Bazel in my language. Especially with possible remote installation steps to consider, it is a very tricky problem indeed.


> *[2020-04-23 01:33:09]* **Justin Blank**:

Certainly more duplication of effort outside Google in the tens/hundreds of thousands of software companies who write their own glue code than inside Google. (The same is true of any big company, mind you).


> *[2020-04-23 01:57:30]* **Tom Lieber**:

Yeah, I don’t think Edward was saying Google’s repo was any more of a cesspool than any other (in this instance? :), but that even in a situation that theoretically maximizes the capacity for reuse, there’s a crazy amount of code, which I would agree with.

Hickey had that whole talk about decoupling the various semantics of “map” just to the extent that it could run in serial or in parallel, and it’s just plain impossible for every engineer to put that amount of thought into every bit of code they write. I feel that most of the lack of reuse / repo bloat is just that: someone writes a module that complects the type of input, type of output, programming language, runtime, threading model, framework, etc, and separating any of those is just so hard that it gets rewritten instead, but with all the same rigidness in a new configuration, because it’s still hard to write in a factored way.


> *[2020-04-23 03:50:58]* **Edward de Jong**:

It is the tangle of dependencies that one encounters that is the main impediment to code re-use. You try to use just one routine, but it calls 3 others which call 3 others, etc., leading to an above-linear increase in the number of included code accompanying the small piece you really wanted. Some languages are more easy to "tree shake" than others. I once converted a giant C program to Modula2, and the lines dropped in half, even though the languages are 1:1 identical in almost every statement. The trick was that in Modula2 you had to name every import, and it took work to do that, and to avoid that hassle, unconsciously you would write code that minimized dependencies, and the net result was a higher level of sharing. I would bet with their high salaries and consequent high quality of workers, Google is probably  better than average companies at encouraging code re-use, but Google cannot escape the fact that they are using C++, JS, Java, etc; all languages designed without much care about code re-use, so the geometric increases are going to happen whether they like it or not, simply because of the languages they are using. This same problem of "copy-pasta" i believe it is called happened at IBM many years ago. IBM actually encouraged duplication (!) because they felt that otherwise you would be breaking other people's projects with your changes, so they thought non-sharing was safer. Of course it leads to low productivity and the non-fixing of bugs across semi-shared code. Then you have the opposite approach in big open source projects where the damn thing is broken constantly, and you have to cherry pick the right release day to get something reasonably stable. No question in my mind that a world of interchangeable software parts is possible, and will represent a seismic shift in the industry.


> *[2020-04-23 03:57:18]* **Edward de Jong**:

150 lines of code added per person per day, times 200 days a year times 30K developers equals 900 million lines per year added to the repository. If it was 2 billion lines 2015, let's guess that it is about 4-5 billion lines now, based on hopefully replacements rather than pure addition.


> *[2020-04-23 03:59:39]* **Kartik Agaram**:

Fortunately 150 LoC/day is an order of magnitude too high for a large company. By the time you've checked that things work for 100M users, and gone through 30k tests, and put up with 16 rounds of bikeshedding and miscellaneous language lawyers, you're lucky to average 10 lines a day.


> *[2020-04-23 04:20:30]* **Tom Lieber**:

Excuse my ignorance of Modula2, but when you say that it encourages you to minimize dependencies, and that you solve that in a way besides copy-pasting, does that mean you have just one dependency on a “kitchensink” module?


> *[2020-04-23 06:59:53]* **Edward de Jong**:

I built two of the biggest Modula-2 projects ever made in the language, and used it exclusively for 20 years. Modula2 was the 10 year later sequel to Pascal. The big improvement other than a few expansions of the type system so you could have POINTER TO ARRAY [-5..+5] OF A_RECORD, which beats the hell out of C's nutty notation, was the module system. Modula2 had a unique approach that actually Prof. Wirth discard as cumbersome in Oberon. In Modula-2 each module had 2 separate files, an implementation file (the big one with the actual code) and a definition module, which held publicly visible constants, types, and function declarations. You compiled each of these 2 files separately; the definition first of course. What this gave you is that once you pinned down the external aspects of a module you were free to change the implementation part, and any other module that depended on it did not have to be recompiled when you change only the implementation file; just relink the program and execute. This goes way beyond compiled headers in C, because most of the time you change something in the implementation module, and don't modify the number or type of function parameters. This means recompilation of a 100k line program takes seconds. For small projects it is like having a REPL. There is a freeware Windows compiler (formerly the Stony Brook compiler) on the ADW website. This was the compiler i used for the WIndows side, and there is a small german firm P1 that made the Macintosh compiler.

Anyway by forcing you to constantly evaluate what symbols are public or private, and being able to check that every call has the correct precise type, a great many errors are caught at compile time. Modula-2 was targeting system programming; it had no graphical primitives, so I used Win32 API and on the Macintosh the QuickDraw system (for OS7).  The way the language is structured, it drives you subtly towards a very modular type of coding style. You end up with various function libraries that tackle different tasks, and as your program gets larger you tend to make it even more modular and systematic. So it is a language that encourages virtue and a slightly lower exponent of expansion than C for example. When runtime checks are fully enabled in Modula-2 it puffs up the code by 30%, but that means you have tens of thousands of range checks, assignment compatibility, null pointer, etc. that are very helpful during testing. For golden master you turn them off and your program gets a big speed boost. Although i only got to speak with Prof. Wirth once, i consider myself a disciple of his Swiss school of programming which is all about neatness, economy, and rigor.

Modula2 as a language was damaged severely when Prof. Wirth made a sequel called Oberon, but in Oberon 1 he stripped out some very valuable features from Modula-2 and thus made it impossible for the Modula-2 users to move forward. This was not corrected until Oberon 2 and by that time the world has discovered the new panacea of OOP (a disaster IMHO), and Java ran away with the academic market. Modula2 did not have a good free compiler. Interestingly enough Logitech, the famous Mouse maker, was founded by a Swiss person, and they offered one of the first symbolic debuggers, which had the amazing feature that when your program crashed, it would save the entire state of memory and registers, and you could then browse the moment of the crash will full symbols. This post-mortem dump as it was called was a fantastic step forward over the memory dumps and very crude crash reporting systems of other languages.

I mention this because the single hardest feature of my Beads language is the ability to time travel debug post mortem from user submitted dumps. It is pretty easy on a huge development machine to support time travel debugging, but to do that in a shipping product in the customer hands, that is something you don't see often. It is the intermittent errors that are the hardest to debug in my experience, and recreating the exact conditions of the user can be often impossible. I think the biggest scandal in computers today is not the size of the code bases, because with enough sweat and blood you can get  code pretty clean; what is embarrassing is that all the big companies have bug reports numbering in the hundreds of thousands if not millions of open cases that will never get fixed because the staff "cannot duplicate".


> *[2020-04-23 07:01:25]* **Edward de Jong**:

Here is an example of a bug i recently encountered, where Chrome doesn't display the chess unicode character for white piece correctly, because even when instructed to not promote to an emoji form, it does it anyway. I looked it up, and this bug has been outstanding in Chrome for over a year. Companies just can't seem to get their software fully correct. There's always a huge backlog of feature requests and bug reports, and years can go by with obvious errors lingering. This is the scandal. The hardware guys don't have this problem.


> *[2020-04-23 07:01:50]* **Edward de Jong**:

white pawns are drawing as emoji incorrectly


> *[2020-04-23 09:30:17]* **Yair Chuchem**:

When you have strict rules people will hack them aka “game the system”.

An anecdote from 10 years ago - someone filed a ticket to request that the Python API for an internal service that I was maintaining be more Pythonic, which I guess it indeed wasn’t.

To motivate his case he linked to 3 Pythonic wrappers for the API in the Google code base.
This was quite fishy in my eyes - if someone already made a Pythonic wrapper why did the other two write their own rather than use it? So I checked and indeed those 2 were pieces of code that were used to obtain the coveted internal language proficiency certification called “Readability”. While that certification was easy to get for many, due to its conditions it was challenging specifically for those tasked with maintaining existing production systems, so they needed to write unnecessary duplicated code to get the certification..

This is a small example out of many of how the system incentivized inefficiency and work of lesser quality.


> *[2020-04-23 09:35:01]* **Konrad Hinsen**:

**Edward de Jong**'s comment about Modula2 (which I remember fondly as well) reminds me of something I have been looking for for a while: a comparative evaluation of software architectures that different languages and toolsets end up encouraging in practice. Has anyone ever seen something like that?


> *[2020-04-23 19:59:56]* **Scott Anderson**:

**Edward de Jong** you're assuming the primary function of large companies is some sort of idealized engineering efficiency (and that shared components and small code bases would realize that...)  and not primarily financially and politically motivated


> *[2020-04-23 20:00:58]* **Scott Anderson**:

At big tech companies employees are rewarded when they duplicate engineering work in manner that is efficient for the business and/or efficient politically


> *[2020-04-23 20:02:20]* **Scott Anderson**:

That means impress/appease someone higher up than you and potentially other teams that are in alignment, but harming teams that are in competition with you by making it harder for them to share can also be advantageous


> *[2020-04-23 20:03:08]* **Scott Anderson**:

I'm not saying it's not fucked up, but you can't examine any large tech company's engineering practice and ignore the business incentives that got us here


> *[2020-04-23 20:04:29]* **Scott Anderson**:

Much of this starts with hypergrowth preferring VC investment, but large multinational corporations are generally "inefficient" when that inefficiency can lead to some kind of economic success


> *[2020-04-23 20:06:00]* **Scott Anderson**:

I am not arguing against you btw, I'm mostly on agreement


> *[2020-04-23 20:06:24]* **Scott Anderson**:

I think it's worth examining how large companies get to where they are though


> *[2020-04-23 22:22:44]* **Edward de Jong**:

I have long suspected that COBOL was selected over the mostly superior FORTRAN by the employees of big corporations because it afforded more billable hours. Many a computer company lived on consulting fees earned programming in a supposedly easy to maintain language like COBOL. COBOL was verbose and very annoying. It did have BCD arithmetic and a convenient number formatting syntax, but overall was inferior. The same kind of decision was made to elevate Java to the #1 slot, when it is also a ponderous, ugly language. If your managers have no clue as to the quality of your work, they may indeed judge you "by the pound", and the more verbose the language, and the more copy/paste you perform, the higher your apparent productivity. The inability to measure and judge accurately the code quality of programmers is an interesting area. It is pretty easy for anyone to recognize good singing, dancing, and painting. Poetry is a great deal more subjective. I think programming is a great deal like mathematical poetry. And people f*cking hate poetry.

---

*[2020-04-02 20:53:59]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-22 20:55:58]* **Tudor Girba**:

**Will Crichton** I missed your message. We are still documenting GT. Our current focus is to make the environment itself be the description. To this end, we have documents and interactive slideshows inside the environment.

---

*[2020-04-15 03:44:54]* **Unknown User**:

MSG NOT FOUND


> *[2020-04-23 15:44:55]* **Doug Moen**:

As I programming language designer, I do believe in a weak form of the Sapir-Whorf hypothesis. There is now enough experimental evidence that I consider it proven. See the work by Lera Boroditsky, for example.


> *[2020-04-23 15:46:58]* **Doug Moen**:

The author says that programming languages aren't languages, and that Sapir Whorf doesn't apply to programming languages. My personal experience contradicts both statements.


> *[2020-04-23 16:24:13]* **Doug Moen**:

Programming languages are more than just tools. They are notation for describing algorithms. For communicating ideas between human beings, just like written language. In the early days of programming, before the first compiler, we wrote programs in high level languages for the purpose of communicating algorithms between programmers, and mathematical notation was invented centuries before that. The lambda calculus is now considered an early programming language, but it was invented in the 1930's as a notation for describing recursive functions, and it clearly wasn't a "tool" then.


> *[2020-04-23 16:51:49]* **Doug Moen**:

Here's another perspective. Hominins have been making tools for a million years (fire, stone knives). Anatomically modern homo sapiens has existed for 200,000 years (AFAWK our brains have been anatomically modern for this long). But language is only about 40,000 years old. Language is a technology: it is a tool of communication, and a tool of thought. We invented language as a tool, just as we invented flint knives and various other technologies in even earlier eras.

---

*[2020-04-24 05:06:59]* **noahtren**:

A question I've been wondering about recently is why aren't programming languages more... modular? Like, why isn't there a system for using X interpreter/compiler with Y syntax? Every language is bound to a specific runtime environment and syntax, but would it be possible to mix and match these somehow?


> *[2020-04-24 05:07:36]* **Chet Corcos**:

Well theres LLVM and WASM which is kind of like that


> *[2020-04-24 05:08:36]* **noahtren**:

this question is partially inspired by seeing that, interestingly, Python and JavaScript are much faster than Java and C# for AWS Lambda (serverless computing.) So I'm curious to what degree you can swap out the runtime with the same code


> *[2020-04-24 05:09:55]* **noahtren**:

**Chet Corcos** LLVM is a good example. But I'm curious if there's something like that for interpreted langs? A common backend for multiple syntaxes/standard libs


> *[2020-04-24 05:13:13]* **Chet Corcos**:

Yeah, interesting. WASM is actually even better in some ways -- its an intermediate representation. Languages compile to WASM, and WASM can run on various runtimes...


> *[2020-04-24 05:13:41]* **Chet Corcos**:

For what its worth, I'm not too familiar with WASM but I know there's a lot of coolaid over there.


> *[2020-04-24 05:15:31]* **Chet Corcos**:

I'm reminded of this talk I saw a while ago: <https://vimeo.com/341873497>


> *[2020-04-24 07:09:48]* **Edward de Jong**:

Languages today are inextricably linked with very complex runtimes. You can't even consider running Elixir or Erlang without the special virtual machine. That runtime has a very clever heap-per-thread architecture, unique among languages, and if you have a task to do that requires 300,000 simultaneous threads, you are going to get pounded with memory management problems in any conventional runtime. Languages also don't agree on data types. C has a 2 value boolean. JS has a 3-value boolean (undefined, true, false), and Beads has  a 4-value boolean (undefined, error, true, false) in order to have a uniform top and bottom value for all data types. These types of minute details make data interchange basically impractical between languages, so the idea of a universal runtime is unrealistic in this universe.


> *[2020-04-24 07:49:08]* **Mariano Guerra**:

there was an attempt a (long?) time ago called parrot to provide a vm for multiple dynamic languages: <https://en.wikipedia.org/wiki/Parrot_virtual_machine>


> *[2020-04-24 07:53:40]* **Mariano Guerra**:

and graalvm in the jvm: <https://www.graalvm.org/docs/reference-manual/polyglot/>


> *[2020-04-24 11:50:22]* **Nuno Leiria**:

This is also relevant: <https://tratt.net/laurie/blog/entries/fine_grained_language_composition.html>


> *[2020-04-24 12:07:55]* **Vladimir Gordeev**:

People help each other, share each other's code. It would be very inconvenient if people used many different syntaxes for same language


> *[2020-04-24 13:13:01]* **Justin Blank**:

One thing that would make that hard is translating the standard library/built in types. You not only would have to translate the code you’re working with, but everything it depends on. At that point, what’s the benefit?


> *[2020-04-24 13:13:59]* **Justin Blank**:

Important to note that GraalVM works based off of hand-written interpreters for other languages. They had to go and write an interpreter for Ruby that can be run inside that VM and interoperate with an interpreter for JS/Python, etc.


> *[2020-04-24 13:14:40]* **Justin Blank**:

GraalVM works because of a lot of manual effort, and because it’s built on tremendous compiler technology that lets those interpreters run efficiently without as much hand-optimization.


> *[2020-04-24 13:20:01]* **Justin Blank**:

Java has poor startup time. But it’s not really because the runtime is bad per se. It’s more that the language spec requires behaviors that are very hard to implement with a system that starts up quickly.

GraalVM offers an alternative that avoids a lot of that, but I believe its AOT compilation isn’t 100% compatible with other JVMs, and it’s a huge engineering effort.


> *[2020-04-24 17:09:38]* **Tom Lieber**:

Counterpoint to **Vladimir Gordeev**’s comment: "We can make machines do it any way we like, and we can have policies that can allow you to do both. Remember, a real engineer doesn't want just a religion about how to solve a problem, like _object-oriented_, or _functional_, or _imperative_, or _logic programming_. This piece of the problem wants to be a functional program. This piece of the program wants to be imperative. This piece wants to be object-oriented. And guess what, this piece wants to be logic-based. And they all want to work together usefully. And that's because of the way the problem is structured, whatever it is. And I don't wanna think that there's any correct answer to any of those questions. It would be awful bad writing a device driver in a functional language. It would be awful bad writing anything like a symbolic manipulator in a thing with complicated syntax. It's awful bad to write a numerical program in anything but Fortran." —Gerald Sussman <https://www.youtube.com/watch?v=O3tVctB_VSU>


> *[2020-04-24 18:53:02]* **David Piepgrass**:

**noahtren** My work at <http://loyc.net> is specifically aimed at solving bits of that problem. I'd like to build a system that will have syntax modules, semantic modules, and a multi-language standard library.


> *[2020-04-24 18:54:45]* **David Piepgrass**:

So far I've made the most progress on the syntax side. I haven't made a lot of progress in recent years, but I'm hoping to find someone around here with whom to partner up and design more of this. In contrast to projects mentioned above that are focused on dynamic languages, I want to focus mainly on static typing with dynamic typing as (1) a special case (like C#'s `dynamic`) and (2) an code generation target (JaveScript).


> *[2020-04-24 22:42:08]* **Dan Cook**:

re: hard to share across inconsistent languages

Maybe that would look different if there was one common representation, and other languages were just (or could be added as) projections to/from it.

I think that would fit in with what David is doing with LOYC?


> *[2020-04-24 22:45:14]* **Dan Cook**:

re: JavaScript faster than Java on AWS lambda

Maybe that's a matter of which is faster to parse and interpret, if that's how it works (note: I'm only vaguely aware of what AWS lambda is). For example, compare:

(a, b) => a+b

Versus:

class X { public static int plus(int a, int b) { return a+b; } }


> *[2020-04-24 22:52:05]* **Dan Cook**:

**noahtren** 

I have my own ideas about replacing a compiler (and programming language), with composing regular old programming paraphernalia that generate the code you want, from whatever data / syntax you want. The main difference is that it's not something separate from the code that's "written in it", and it replaces programming language as a (metaphorical) framework, with language as a (literal!) code library.

I'll DM you

---

*[2020-04-24 15:57:06]* **Jack**:

*Call for Workshop Proposals: "Hybrid Live Coding Interfaces: performance and craft"*

• *Permanent link to the call:* <https://hybrid-livecode.pubpub.org/pub/nimecfp>
• *Shareable Tweet*: <https://twitter.com/jdkarmitage/status/1253625078899761152>
• Venue: [New Interfaces for Musical Expression (NIME) 2020](https://nime2020.bcu.ac.uk/), 21-25 July, Royal Birmingham Conservatoire, United Kingdom ([hosted virtually](https://nime2020.bcu.ac.uk/#nime2020update)).
• Format: Research workshop with short ‘lightning’ presentations followed by moderated discussion.
• Time and place: Online, three hour workshop, 21st July 2020 BST. _(hours to be decided in response to participant survey)._
• Proposal deadline: 24th May 2020 AoE.
• Participation fee: Free for all participants and presenters.
• Outcome: Exchange and generation of ideas, new contacts and potential new collaborations.
• Workshop chairs: 
• [Shelly Knotts](https://shellyknotts.wordpress.com/) (University of Durham).
• [Jack Armitage](http://www.jackarmitage.com/) (Centre for Digital Music, Queen Mary University of London).
• [Alex McLean](https://slab.org/) (Deutsches Museum Research Institute / FoAM Kernow).
• Contact: [hybridlive_@jarm.is](mailto:hybridlive_@jarm.is).
The live coding field has grown over the past 20 years from [a community of artists and researchers](http://art.runme.org/1107861145-2780-0/livecoding.pdf) interested in “changing rules while they are followed” -- that is, the creative practice of using a computer programming language as a live interface, mainly in the performing arts. This field has since grown into the international “[TOPLAP](https://toplap.org/)” community, with [dozens of local nodes](https://toplap.org/nodes/) and offshoots such as [Algorave](http://algorave.com/) algorithmic dance music events, with events taking place in over a hundred cities with [growing](https://www.theguardian.com/music/2017/nov/30/is-algorave-the-future-of-dance-music-sheffield-algomech-festival) [media](https://cdm.link/2018/05/inside-the-livecoding-algorave-movement-and-what-it-says-about-music/) [interest](https://mixmag.net/feature/algorave/4).

Live coders have worked collectively to make their technology and culture accessible, with [almost all systems shared as free/open source software](https://github.com/toplap/awesome-livecoding#languages), and attempts to instill [inclusivity, diversity](https://github.com/Algorave/guidelines) and [safety](https://github.com/Algorave/algoraveconduct) across organisations and lineups. On this foundation, [current research](https://iclc.toplap.org/) in the field is increasingly looking outward, beyond now well-established practices such as [algorave](https://algorave.com/), livecode [network music](https://networkmusicfestival.org/) and [slow coding](http://www.ludions.com/texts/2007a/). This includes new interfaces based on old practices including the [Stenophone](https://github.com/jarmitage/Stenophone/) made from a court transcription device, a [live-codable loom](https://penelope.hypotheses.org/1780) based on ancient weaving technology, and experiments in punk genres such as riot grrrl remixed with live codeable machine listening tools.

This workshop aims to bring together current thinking on how live coding techniques can be combined with other algorithmic practices, and augmented and hybridised with gestural and physical interfaces. A feature of this research is humility, as researchers realise that relatively young computer science innovations have everything to learn from physical interface designs, which have developed through practice over hundreds and perhaps thousands of years. This online workshop explores these themes through discussion and exploration of interfaces and practices.

This is a call for proposals for short demos, talks and other interventions exploring hybrid live coding interfaces in performance and craft. Proposals could present:

---

*[2020-04-24 15:57:06]* **Jack**:

• Examples of algorithmic practices from ancient history.
• Recent outcomes of research and/or practice.
• Speculative design fictions about not yet invented or impossible live coding interfaces.
• Examples of craft culture informed community building and events relevant to live coding.
• [Remediations](https://mitpress.mit.edu/books/remediation) of traditional craft tools, materials and processes.
• Craft practice inspired algorithmic pattern interfaces and novel computational media.
• Tactile, tangible, gestural and bodily interfaces that write, run and edit live programs.
• Augmented, hybridised and AI-based live coding systems.
• Deconstructions and recompositions of 20th century computer interfaces.
*Submissions Deadline: 24th May 2020* 

Notification of acceptance will follow three weeks after the deadline.

Submissions form: `<https://forms.gle/FN2mGPZNmHr3u6Pu8>`

_We recognise that many are very short on time and energy during lockdown conditions. We have therefore made the submission process as light as possible. Armed with an idea, it should only take you 5-10 minutes to write and submit a proposal. If you have any further questions please contact [hybridlive_@jarm.is](mailto:hybridlive_@jarm.is)._

---

*[2020-04-24 16:03:12]* **Jack**:

Hey all, excited about this online workshop. Hope everyone is doing well here!

Bonus: happy Avril 14th if you missed it 😬 <https://twitter.com/lildata/status/1250158507367817216>

---

*[2020-04-24 16:47:57]* **Stefan Lesser**:

I'm working my way through Bob Nystrom's _Crafting Interpreters_ (recommended — extremely approachable guide to creating your own programming language) and [this part in chapter 12](http://craftinginterpreters.com/classes.html#design-note) just felt super relevant:

> We language nerds have a tendency to fetishize minimalism. Personally, I think simplicity is only part of the equation. What we really want to give the user is _power_, which I define as:
> 
> `power = breadth × ease ÷ complexity`
> 
> None of these are precise numeric measures. I’m using math as analogy here, not actual quantification.
> 
> *Breadth* is the range of different things the language lets you express. C has a lot of breadth—it’s been used for everything from operating systems to user applications to games. Domain-specific languages like AppleScript and Matlab have less breadth.
> 
> *Ease* is how little effort it takes to make the language do what you want. “Usability” might be another term, though it carries more baggage than I want to bring in. “Higher-level” languages tend to have more ease than lower-level ones. Most languages have a “grain” to them where some things feel easier to express than others.
> 
> *Complexity* is how big the language is (and its runtime, core libraries, tools, ecosystem, etc.). People talk about how many pages are in a language’s spec, or how many keywords it has. It’s how much the user has to load into their wetware before they can be productive in the system. It is the antonym of simplicity.
> 
> Reducing complexity _does_ increase power. The smaller the denominator, the larger the resulting value, so our intuition that simplicity is good is valid. However, when reducing complexity, we must take care not to sacrifice breadth or ease in the process, or the total power may go down. Java would be a strictly _simpler_ language if it removed strings, but it probably wouldn’t handle text manipulation tasks well, nor would it be as easy to get things done.
> 
> The art, then is finding _accidental_ complexity that can be omitted. Language features and interactions that don’t carry their weight by increasing the breadth or ease of using the language.


> *[2020-04-24 17:12:28]* **Tom Lieber**:

Really dig that final summarizing sentence


> *[2020-04-24 19:26:52]* **Doug Moen**:

The final paragraph about removing accidental complexity from a programming language is good, but there is a whole lot of detail about *how* you do this that remains unsaid.


> *[2020-04-24 19:35:44]* **Doug Moen**:

However, the idea that a single number, "power", characterizes the fitness of a language, and that the language designer's goal is to maximize this "power", is I think a fallacy. The reality is that you have to make compromises based on engineering tradeoffs and on the goals of your language. Maximizing breadth results in a swiss army knife; it doesn't result in the best possible tool for all possible situations. That's why we have DSLs. The power equation also asks you to increase ease and reduce complexity. In reality, you can only increase ease and decrease complexity relative to some context, and a DSL provides this context. So what I'm saying
is that there is a tradeoff between breadth and the other desired qualities.


> *[2020-04-24 19:59:19]* **Stefan Lesser**:

I don’t think it’s the authors intention to boil it down to one variable power. He’s just trying to explain some
design choices he made in that chapter. I have taken this out of context just because I hoped it would make some of you interested in the other stuff he has to say around that tiny paragraph, but I can see how it’s a little misleading. 

The goal of the book is teaching people how to craft a programming language and not to create the best possible language. A lot of the choices he makes are to keep it simple and illustrate important concepts. I think he’s doing an excellent job throughout the book making people aware of all the big and small trade offs that go into the design of a language and I hope you don’t get the wrong impression from that tiny piece that I chose to present here.

That said, I do agree with your comment, **Doug Moen**, what I'm basically trying to say is don’t blame the author because there’s a lot of context missing and blame me instead. :-)


> *[2020-04-24 20:20:41]* **Doug Moen**:

**Stefan Lesser** Your quotation hit a nerve, because I used to believe in that power equation. My university thesis took the power equation as its starting point, and tried to show how to design the "one true programming language" (not in those exact words) that had maximum expressive power. I no longer believe in this idea, so it was kind of exciting to see what I now consider to be a fundamental fallacy of language design expressed so bluntly and directly, as a simple equation.


> *[2020-04-24 23:11:28]* **Srini Kadamati**:

We need this guy in this slack! **Ivan Reese** 


> *[2020-04-25 04:04:11]* **Ivan Reese**:

Hi


> *[2020-04-25 14:57:46]* **Srini Kadamati**:

Bob Nystrom I mean :P


> *[2020-04-25 16:16:12]* **Ivan Reese**:

Yeah, hah. I should have been more articulate, but I was on my phone, so I hoped the joke answer would suffice. Sorry!

I'm no more equipped to invite people to this community than anyone else. If there's someone you'd like to see join, invite them! The best thing would be for someone here who already has a relationship with that person to extend an invitation, so if you're looking to make a "they should be here" call, then that's the call to make. In this regard, I'm just another bystander.

---

*[2020-04-25 06:43:01]* **Ivan Reese**:

🎺 Episode 46 of the podcast is now a thing that exists in the world!

Oh what's that?

📊 The results of the first ever Future of Coding Community Survey are now published!

Can we do one more?

🎙 I made a 10+ minute long audio piece exploring what the _future of coding_ means.

In the bastardized words of the crazy one — Episode 46. Survey results. The true meaning of FoCmass. _These are not three separate projects._

<https://futureofcoding.org/episodes/046>

🍰


> *[2020-04-25 06:58:55]* **Ivan Reese**:

For the tl;dr crowd, here's a link straight to the _should we leave Slack_ outcome: <https://futureofcoding.org/episodes/046#question-eighteen-now-that-youve-seen-the-options-what-is-your-1-pick>


> *[2020-04-25 10:07:55]* **Duncan Cragg**:

So 54 want to leave and 36 stay with Slack. If you split the not-bothered 50:50, that's about 71:53 to leave. So no, not overwhelming, but a clear signal that Slack isn't the favourite option


> *[2020-04-25 10:09:35]* **Duncan Cragg**:

If you had a transferrable vote on the Leave choices, I'm sure Leavers would be happy to compromise on their non-Slack preference


> *[2020-04-25 10:16:49]* **Duncan Cragg**:

I'm now in the not-bothered category I think, by the way, as I don't come here as often as I used to.


> *[2020-04-25 12:01:24]* **Jack**:

Genuine question: was the topic of diversity excluded, or not considered at all?


> *[2020-04-25 13:04:05]* **Stefan Lesser**:

> So 54 want to leave and 36 stay with Slack. If you split the not-bothered 50:50, …
> 
> 
I don’t think that is how this works. But I do understand a little better how we got to Brexit now. 😜


> *[2020-04-25 13:30:59]* **Ivan Reese**:

**Jack** — I had thought about asking for gender, but didn't feel comfortable about it at the time I wrote the survey. My thoughts about this have changed in the time since, though. Next year, it's something I want to get more info about, not to mention the fact that it signals, "This is related to a problem here and we care about solving it!"

Aside from gender, are there any diversity-oriented questions you wish had been asked? I have a pretty bad blind spot here, and it's something I want to improve.


> *[2020-04-25 13:36:08]* **Ivan Reese**:

**Duncan Cragg** — IANAL (inauspicious wink), but I don't think leave votes transfer to other leave options. That's what the previous questions in this section established.


> *[2020-04-25 14:25:41]* **Jack**:

**Ivan Reese** if you don’t feel comfortable it’s a sign that you should do something about it, not turn away from it. That could start with simply starting an open discussion here, and then having breakout discussions with those whose views and backgrounds aren’t well represented here. And then forming positive actions for the community as a whole. It wouldn’t be too much to do an additional diversity survey as an addendum to this rather than waiting a year. I would recommend to consult outside of this community to write such a survey. 

Diversity means different things in different contexts. There is a wealth of diversity here in some dimensions, and a dearth in other dimensions, gender being the most obvious one. The issue also is a broader sociopolitical one: the lack of gender diversity reflects structural inequalities and oppression across society. This community can either be an ally towards justice by working actively to dismantle that, or it can continue in its bubble implicitly excluding everyone else from the “future of coding” conversation, and ignorant of its own biases and weaknesses. 


> *[2020-04-25 14:38:40]* **Jack**:

Thinking empathically, how much more uncomfortable would you imagine many people feel by looking at this community from the outside and thinking “oh no it’s another ~100% male community”?


> *[2020-04-25 14:40:27]* **Jack**:

I do want to say that this place feels much more like a community since you have taken over, but the collective lack of impetus to address this issue remains the top reason why I don’t want to stick around here or visit often 


> *[2020-04-25 14:52:21]* **Jack**:

This book is about racism, but I think the way the author talks about fragility applies equally to gender diversity issues. It basically says, the fact that you felt uncomfortable in this case (or fragile as the author would say), is actually a good thing that you should confront, investigate and channel: 

White Fragility: Why It's So Hard for White People to Talk About Racism [https://www.amazon.co.uk/dp/0141990562/](https://www.amazon.co.uk/dp/0141990562/)


> *[2020-04-25 15:13:38]* **Ivan Reese**:

There have already been some conversations over in **`#meta`**, especially in light of the new Code of Conduct, about the dire lack of diversity here. We need a clear signal to the outside world that this is something we care about and want to improve. I'm excited to find many ways to send that signal.

With respect to consultation specifically, there are ways it can backfire — creating additional work for people who are already disadvantaged; implicitly asking individuals to act as representatives of a class. I want to do it, but I don't want to do it badly.

That's what made me uncomfortable to ask about gender. On one one hand, asking is a signal that it's something we care about and want to learn about. On the other hand, I've seen instances where the very people I'd like to reach are bothered by the tone-deaf way in which others have tried to reach them. To some, a survey question about gender might be seen as interest. To others, it might be seen as a gate.

I like the idea of a diversity survey. I'm going to spin up a conversation about that in **`#meta`**, so if you have thoughts on what that could look like I'd love to have your input.


> *[2020-04-25 15:21:02]* **Ivan Reese**:

One positive outcome from the survey is that, while it was intended to be about Slack and only broadened beyond that in a last-minute flash of opportunism, it led directly to the Code of Conduct, which led to these conversations about diversity and inclusion. When I first took over, none of those conversations were happening here, and I was highly aware that some people would react with "ugh agenda" if I started making noise about it (edit: and I was looking for a way to start those conversations on a more constructive note). Now, we're having those conversations, and while some people are tipping their hand a bit in how they respond, I believe that the vast, vast majority of people here are interested in improving things and, like me, probably weren't sure how best to approach that before. We're still doing _activity_, and not making _progress_, but it's a start and I have no intention of letting the issue go.


> *[2020-04-25 15:31:59]* **Ivan Reese**:

(Discussion about the diversity survey and related initiatives here: <https://futureofcoding.slack.com/archives/CEXED56UR/p1587828680053400>)


> *[2020-04-25 15:56:42]* **Shalabh Chaturvedi**:

**Ivan Reese** I just want you say thank you for doing all the work in putting this together!


> *[2020-04-25 17:03:25]* **Jack**:

Regarding consultation, I was imagining more along the lines of asking other community leaders who are further along in their journey than here to lend some advice. I'm sure there must be readily accessible resources out there.


> *[2020-04-25 17:04:12]* **Jack**:

I wasn't aware of the CoC, that's great news.


> *[2020-04-25 17:22:45]* **Ivan Reese**:

I'm pretty proud of it: [https://github.com/futureofcoding/code-of-conduct](https://github.com/futureofcoding/code-of-conduct)


> *[2020-04-26 09:15:34]* **Ivan Reese**:

I've deleted a handful of messages in this thread and my replies to them, which had pushed the topic of discussion away from the the community survey, introduced sexism that broke the Code of Conduct, and would have dissuaded newcomers from participating in the community. I've reached out to the authors of these messages. If you have thoughts or concerns about this moderation, please DM me.

If you would like to further discuss diversity, please search the Slack history and review the extensive, high-quality discussions we've had about it very recently. The vast majority of the community is in favour of improving diversity. Arguments opposed to this are not welcome. If you would like to help, please see the latest discussion in **`#meta`**, linked above. If you have concerns, DM me.

---

I made a huge effort across the past 4 months to draft the survey, review the results, record the podcast, write the transcript, and plan multiple new projects that will unfold over the coming year based on what I learned. It _stings_ that this thread has devolved so. I would very much like to return this thread to discussion of the survey and podcast, so if you have thoughts to share about this, I would love to hear them.


> *[2020-04-26 17:46:18]* **Achraf Kassioui**:

I think it is wrong to delete some messages just because they don't fit your particular political bias. You started a political line of questions, people should be able to express themselves, as long as hard rules are not broken (such as incitement to hatred or discrimination).


> *[2020-04-26 19:11:41]* **Duncan Cragg**:

I'm also inclined against censoring uncomfortable views, especially in these days of increasing state-sponsored corporate censorship. I would be a hypocrite to support what you're doing here at the same time as being vocal against such suppression of speech.


> *[2020-04-26 19:56:08]* **Ivan Reese**:

Achraf, the rules _were_ broken, as I said. I reached out to you and others privately, explaining this move and offering to discuss it, and in those private messages I also told you directly that I feel bad doing this. Instead of responding to me, you've come back to this thread and continued to push it off topic. If you'd rather discuss this out in the open rather than in private, that's fine — please take a look at our existing diversity-focused discussions in **`#meta`** and add your thoughts there, or start a new meta thread to discuss how I've handled this situation. If you are going to discuss this in public, please respond to the substance of what people have said and done. Don't just slap on a label like "political bias" or "identity politics" — please explain what underlies your concerns and how you're being affected by what we're doing here, and help me do a better job of making the community work for you.

---

*[2020-04-25 11:55:07]* **Mariano Guerra**:

This week's newsletter will have the first link to the archived week in html and markdown 🙂 sneak peek: <https://marianoguerra.github.io/future-of-coding-weekly/history/2020-04-w-3/general/index.html> and <https://marianoguerra.github.io/future-of-coding-weekly/history/2020-04-w-3/general/index.md>


> *[2020-04-25 11:55:55]* **Mariano Guerra**:

need to add some anchors to be able to link to the archive directly


> *[2020-04-25 11:57:13]* **Mariano Guerra**:

MSG NOT FOUND is because the message is from the previous week, will add some logic to add previous weeks until all messages are found


> *[2020-04-25 12:33:55]* **Ian Rumac**:

woah **Mariano Guerra** this is pretty interesting, how is the archive generated?


> *[2020-04-25 12:34:11]* **Ian Rumac**:

do we have an observer bot that forks them into a DB or?


> *[2020-04-25 12:35:34]* **Mariano Guerra**:

<https://github.com/marianoguerra/future-of-coding-weekly/tree/gh-pages#archiver>


> *[2020-04-25 12:55:10]* **Ian Rumac**:

great, thnx!


> *[2020-04-25 14:08:32]* **Mariano Guerra**:

anchors implemented: <https://marianoguerra.github.io/future-of-coding-weekly/history/2020-04-w-3/general/index.html#2020-04-12T22:13:50.367Z>


> *[2020-04-25 14:08:46]* **Mariano Guerra**:

click on the message's date and you get the anchor


> *[2020-04-25 15:10:46]* **Mariano Guerra**:

📯 emoji support, pretty printing of channel and @ references (like channel): <https://marianoguerra.github.io/future-of-coding-weekly/history/2020-04-w-3/general/index.html#2020-04-18T18:40:13.070Z>


> *[2020-04-25 15:11:08]* **Mariano Guerra**:

I more proud than I should of the emoji stuff 😄

---

*[2020-04-25 18:30:10]* **Mariano Guerra**:

<https://blog.metaobject.com/2020/04/maybe-visual-programming-is-answer.html>


> *[2020-04-25 19:53:33]* **Ian Rumac**:

We don’t want to program visually, we want to think visually, observe the state, and interact with large parts of the program. UI should give us clues and hints or help where it can, but not be the main interaction point as long as we operate it with a mouse.


> *[2020-04-25 20:55:49]* **Mariano Guerra**:

HN discussion <https://news.ycombinator.com/item?id=22978454>


> *[2020-04-26 00:14:55]* **Scott Anderson**:

HN discussion is pretty good


> *[2020-04-26 07:06:31]* **U0123H7JRDM**:

I think that visually programming can be a solution for programming on "application level". The deeper stuff can be coded inside plugins. The underlaying format can be a graph stored in json format which can be read and processed in a lot of languages. An advantage of a visual programming environment is also that it can serve as part of the documentation needed for a project


> *[2020-04-26 07:57:37]* **Edward de Jong**:

It doesn't really matter what grizzled veterans think about text vs. visual programming; the newbies have spoken, and for a generation brought up on video games, they insist that a more graphical way of programming be offered. So we gotta build it, because that is what the customers (i.e. new programmers) demand. There are about 100 million people learning to program now. Enormous competition going on to build the tools acceptable to this new generation.


> *[2020-04-26 08:09:29]* **Konrad Hinsen**:

I have always wondered if visual vs textual programming is a fashion, a matter of personal preference, or a domain-dependent result of satisficing. Did anyone explore this question? I see mainly people for who visual programming is evidently the way to go, and people who don't care much about it (myself included).


> *[2020-04-26 08:25:47]* **Mariano Guerra**:

I don't see how visual studio code with all the popups, squiggly lines, annotations on the line number, code overview on the right and autocomplete is just "plain text" programming. there's a spectrum between 70's text and visual, and we haven't explored much of it.


> *[2020-04-26 08:45:07]* **U0123H7JRDM**:

Visual studio code is offcourse a great tool for programming (I love it and use it daily) but not "visual programming" I think. Although it has lots of visual helpers. For me visually programming is visually connecting nodes that represent plugins/variables or can call a "sub-flow" (a function in normal programming), but you still need code to wire it up and provide additional functionality depending on the application (if you write a webapp server flow this could be the connection with the webserver to handle http endpoints in the visual environment for example)


> *[2020-04-26 18:33:32]* **Kartik Agaram**:

This comment about Luna/Enso was useful:

[https://lobste.rs/s/9t0pjr/maybe_visual_programming_is_answer_maybe#c_admgsr](https://lobste.rs/s/9t0pjr/maybe_visual_programming_is_answer_maybe#c_admgsr)


> *[2020-04-26 19:33:28]* **Christopher Galtenberg**:

Visual programming for visual components. Find appropriate metaphors for other types of components.


> *[2020-04-26 19:38:29]* **Christopher Galtenberg**:

Observable’s visual dataflows is the best hint at the future of metaphors for non-visual logic [https://twitter.com/observablehq/status/1250122115778519046](https://twitter.com/observablehq/status/1250122115778519046)

---

*[2020-04-26 19:29:52]* **Christopher Galtenberg**:

SPARQL for RDF querying [https://twitter.com/bobdc/status/1254431101440983043](https://twitter.com/bobdc/status/1254431101440983043)


> *[2020-04-26 21:57:50]* **Emmanuel Oga**:

"I use these rarely enough that I re-read the “Named Graphs” section of my book’s “Updating Data with SPARQL” chapter as a review before I assembled the steps below."


> *[2020-04-26 21:58:29]* **Emmanuel Oga**:

this is weird to me since it seems like such useful feature, given the difficulty to address triples. The named graph makes the triple a quad


> *[2020-04-26 21:58:43]* **Emmanuel Oga**:

so you can use that forth quad to determine origin of the triple for instance


> *[2020-04-26 21:59:33]* **Emmanuel Oga**:

if the graph is named "emmanuel:2020-04-26" then potentially I can use that info to determine author and date of each of the triples on that graph