<!--
.. title: Future of Coding Weekly 2023/04 Week 3
.. slug: future-of-coding-weekly-202304-week-3
.. date: 2023-04-16 23:17:05 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

🗨 Speech Act Oriented Programming 📚 Journal of Unconventional Computing 🧠 LLMing Fast & Slow 🧞 JIT UIs

# Two Minute Week

💬 **Joakim Ahnfelt-Rønne**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/two-minute-week.html#2023-04-14T19:01:11.311Z)

🎥 [Type inference on hover for Firefly](http://history.futureofcoding.org/history/msg_files/F05/F053E7LA8BE.mp4)

🎥 [Visual Programming Tool | Visual Programming for the Modern Web](https://www.youtube.com/watch?v=7x5Ij4aVi_o) via **Gabriel Grinberg**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/two-minute-week.html#2023-04-15T19:21:21.804Z)

Some [Flyde](https://www.flyde.dev) progress:




* Run flow from the editor itself! (before that, you had to write some  code to load the flow and trigger it yourself 
* 5 "New flow" templates - from HTTP examples to a memoized recursive Fibonacci sequence 🤓 
* Some general UI tweaks (Large "part menu", hotkeys screen)

# Our Work

🐦 [Tweet from @jvuillermet](https://twitter.com/jvuillermet/status/1645862317597380616) via **Jeremy Vuillermet**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/share-your-work.html#2023-04-11T21:17:01.138Z)

Hi everyone, here is [a recording of a data-first design tool I demoed during last future of code meetup. ](https://twitter.com/jvuillermet/status/1645862317597380616)



Next, I would like to explore how to improve the formula input/editor. I think there is an opportunity for more structured editing while adding playfulness and intermediate value preview. I like those 2 directions so far:




* [adacraft.org](https://www.adacraft.org/) from Nicolas Decoster
* [direct programming from Jonathan Edwards](https://vimeo.com/274771188)



Any other idea or reference in that space?


# Devlog Together

💬 [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/devlog-together.html#2023-04-15T09:12:04.851Z)

I'm making a node-based language for a youtube video. This is my current plan: 



It's all about 'pointing'.



In the engine, there are various different types of arrow. And all of these arrows can 'fire' in their own way. For example, some of them fire when you click on them. Some of them fire when they move in a cellular automata grid.



When an arrow fires, it *does something*. For example, some arrows make a noise. Some arrows create more arrows.



When an arrow fires, it also fires anything else that it points to. It could point to just one other arrow, or many, or even itself.



This 'firing' happens instantly. An arrow fires on the same beat as what it points to.



But you can change the connection, and make it fire one beat *later* instead. This lets you set up chains of events. One arrow fires, then the next, then the next. You can make loops with this quite easily. Just point an arrow back to itself at some point.



Here's the fun bit: Just like you can make an arrow fire one beat *later*, you can also make it fire one beat *earlier*. An arrow in the future can make an arrow fire in the past. This seems to break the rules of causation! But it doesn't, and it's possible, and I'm really excited about it.

# Thinking Together

💬 [Josh Justice](https://codingitwrong.com/)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/thinking-together.html#2023-04-10T12:44:38.227Z)

Has anyone read Christopher Alexander’s  _The Timeless Way of Building_  in light of future of code? He’s the literal architect whose concept of patterns inspired the software patterns movement. In practice, Java enterprise software patterns are a lot of the past-of-code that we want to get away from. I’ve read that Alexander thought that community missed the point, and from  _Timeless Way_  I believe it. From the first chapter he gets into the concept that people should be able to build their own buildings, that it doesn’t take extensive planning, and that it resonates with something very natural within us and within the world. I don’t want to say more as I really think you need to read it in context for it to sink in; but I’d recommend picking up a copy.

💬 [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/thinking-together.html#2023-04-11T08:58:24.609Z)

Brooks said in the Mythical Man Month.



Fail.



Fail again.



Succeed.



You want to find a way to fail-fast the first two times.  Using type-checked, bloatware languages ain’t the way to fail-fast.

🐦 [Tweet from @nileshtrivedi](https://twitter.com/nileshtrivedi/status/1645779203210764289) via **Nilesh Trivedi**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/thinking-together.html#2023-04-11T13:32:14.723Z)

I've been thinking: We might need new languages for describing workflows that involve both humans and bots. Something much nicer than BPMN (which is XML-based): 

[We need new languages where projects/workflows can be distributed to both human and AI agents, while supporting full capabilities of both. Something much nicer than BPMN](https://twitter.com/nileshtrivedi/status/1645779203210764289)

🗨📝 [Elephant 2000](http://www-formal.stanford.edu/jmc/elephant.pdf) via **Eli Mellen**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/thinking-together.html#2023-04-12T22:50:15.067Z)

I’ll be leaning a discussion at my work about [Elephant 2000](http://www-formal.stanford.edu/jmc/elephant.pdf) soon, and found [this very valuable context](https://www.wtamu.edu/~mjacobsen/SpActCats.htm) to help ground the paper in some common, yet not clearly defined terms.



Anyone have thoughts on Elephant 2000?

💬 **Eli Mellen**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/thinking-together.html#2023-04-14T20:17:12.978Z)

Anyone planning to read anything interesting and future of code adjacent this weekend?

📝 [csvbase.com](https://csvbase.com/) via [Christopher Galtenberg](https://twitter.com/galtenberg)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/linking-together.html#2023-04-10T21:40:45.457Z)

In the space of making data end-user too

CSVbase is another open/public data site [csvbase.com](https://csvbase.com/) (pay/subscribe to keep private data)

Easy to get parquet too, just add  `~_*.parquet*_~`  after any data url

About page [csvbase.com/about](https://csvbase.com/about)

Sharing data is as easy as pasting [csvbase.com/new-table/paste](https://csvbase.com/new-table/paste) even straight from excel

The blog is off to a good start, teaching some basics [csvbase.com/blog](https://csvbase.com/blog)

📝 [Two algorithms for randomly generating aperiodic tilings](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/aperiodic-tilings/) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/linking-together.html#2023-04-11T01:34:24.229Z)

📚 [International Journal of Unconventional Computing](https://www.oldcitypublishing.com/journals/ijuc-home/) via [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/linking-together.html#2023-04-13T06:57:20.275Z)

TIL about the "International Journal of Unconventional Computing"

📝 [A proposed Stack Exchange site for programming language development is close to entering beta!](https://www.reddit.com/r/programming/comments/12k8oxy/a_proposed_stack_exchange_site_for_programming/?utm_source=share&utm_medium=ios_app&utm_name=ioscss&utm_content=2&utm_term=1) via [George Campbell](https://gibr.net/)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/linking-together.html#2023-04-13T13:47:49.872Z)

StackExchange for programming language development

📝 [The early days of Linux](https://lwn.net/SubscriberLink/928581/841b747332791ac4/) via [Shubhadeep Roychowdhury](https://github.com/rcshubhadeep)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/linking-together.html#2023-04-15T04:28:20.974Z)

# 🤖

🧠💬 **Eric Normand**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/of-ai.html#2023-04-10T14:30:31.688Z)

If we assume GPT is system 1, can we get it to "develop" a system 2 by asking it the right questions?






* I and others have had success asking it to work step-by-step and talk out loud.
* I've also had success asking it to provide a better answer after it answers.
* I've tried doing a de Bono's Thinking Hats scenario to answer questions.



I think there's some interesting work there to be done, especially regarding "frameworks". Like ask it to use a framework to answer the question. Ask it to use several different frameworks then synthesize a single answer.



The cool thing is, it tends to already know the framework. You don't have to program it in, you just have to ask it to use the framework.



I also don't know if there is any advantage to using multiple chats (that don't share history) to collaborate on an answer vs using a single chat with a single history.

🧞🐘 [Steve Troughton-Smith (@stroughtonsmith@mastodon.social)](https://mastodon.social/@stroughtonsmith/110193697691243762) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/of-ai.html#2023-04-13T22:34:54.342Z)

Using GPT to generate an app's GUI on the fly. Basically, the design of the app is transient and created dynamically based on the exact need of the moment.

💡 [Programming as Theory Building](https://futureofcoding.org/episodes/061) via **David Alan Hjelle**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/04/W3/present-company.html#2023-04-14T15:20:57.172Z)

Inspired by the [podcast on Programming as Theory Building](https://futureofcoding.org/episodes/061), I put together a [short talk](https://gitlab.com/dahjelle/programming-as-theory-building-2023-04-20) with my attempt at trying to explain and/or share my take-aways from the paper. It's for a [local (Fargo, ND) developer meet-up](https://www.meetup.com/fullstackfargo/events/292846647/). I tried to steer towards the practical implications as much as I could since we have a pretty diverse (in terms of interest and skill-set) audience.

