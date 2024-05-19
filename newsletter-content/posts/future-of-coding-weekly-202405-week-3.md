<!--
.. title: Future of Coding Weekly 2024/05 Week 3
.. slug: future-of-coding-weekly-202405-week-3
.. date: 2024-05-19 23:29:28 UTC+02:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

💻 Bend: a parallel language 🎥 New Graphical Programming Language for Audio Research & Developers 💡 The Alternative Implementation Problem

# Our Work

🪩 [Exploring Spaces 4: Sphere](https://vezwork.github.io/polylab/dist/demo/articles/exploring_spaces_4/) via **Elliot**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/share-your-work.html#2024-05-13T18:21:11.290Z)

I've made an article about 🌐 spheres and input spaces that wrap around like spheres 🌐. Let me know how it feels to move around the spheres. Does the way they are synchronized make sense? [vezwork.github.io/polylab/dist/demo/articles/exploring_spaces_4](https://vezwork.github.io/polylab/dist/demo/articles/exploring_spaces_4/)

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F073LFNMEUR.png)



💬 [Jared Forsyth](https://jaredforsyth.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/share-your-work.html#2024-05-15T20:27:51.418Z)

Hi friends! As part of my unending pursuit of creating The Best Programming Language, I've ended up building a structured editor / literate programming environment for creating self-hosted languages ... and that has turned into "An Interactive Tutorial about Compilers & Type Inference", that includes interactive implementations of the papers "Algorithm W Step by Step" and "Typing Haskell in Haskell" (with more planned). I'm currently looking for beta testers to look it over before I make a general release, and I imagine there are many people here with relevant experience 😄.

So if any of y'all are interested, send me a message! As a teaser, here's the start of the intro document:

![image.png](http://history.futureofcoding.org/history/msg_files/F07/F073F7MTV46.png)


# Devlog Together

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/devlog-together.html#2024-05-17T06:42:21.832Z)

Got to a major milestone in v2 development for §Blawx, this week. The visual code editing environment is now back to feature parity with v1, which means I can move on to re-implementing the reasoner on the back end. That's the last major obstacle before I can start doing some much more compelling neuro-symbolic AI demos.


# Reading Together

💬 **Jacob Zimmerman**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/reading-together.html#2024-05-17T16:23:20.487Z)

Has anyone worked through “Software Foundations”, and did you find it valuable?

# Thinking Together

🐦 [Tweet from @swardley](https://twitter.com/swardley/status/1787851368528576829) via [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/thinking-together.html#2024-05-16T08:09:21.582Z)

In [this tweet](https://twitter.com/swardley/status/1787851368528576829) , Simon Wardley compares making software systems explainable via moldable development (my expansion of his reference to Glamorous Toolkit) to creating maps. That sounds like a very useful metaphor to me. Many of us are interested in or even working on visual coding tools, and I wonder what their take on this metaphor is. Maps are inherently visual, but they are not the territory, i.e. the code with all the details. To me, visual tools are obviously the right choice for creating maps, but I remain unconvinced about their appropriateness for code.

I am thinking in particular of [Orion Reed](https://twitter.com/OrionReedOne)’s recent demo of infinite canvasses as user interfaces. For making multi-faceted maps to software systems, that looks like a very appopriate representation.

🕹️ [The 100 Games That Taught Me Game Design](https://www.youtube.com/watch?v=gWNXGfXOrro) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/thinking-together.html#2024-05-17T11:33:35.115Z)

![Youtube Thumbnail](https://img.youtube.com/vi/gWNXGfXOrro/hqdefault.jpg)

An interesting video: [The 100 Games That Taught Me Game Design](https://www.youtube.com/watch?v=gWNXGfXOrro)



I would like to see "The 100 Applications That Taught Me Application Design".



Which ones are yours?

💬 **Daniel Sosebee**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/thinking-together.html#2024-05-17T20:42:21.417Z)

Loose set of thoughts:




* could you make a type system that somehow captures all information possible about every value in a codebase? Like where the following is true: if typeof(a) === number, then typeof(a + 1 + 2) === number+3 !== typeof(a) …
* I might want to “pin” and “unpin” my types - e.g. before refactoring a function, to “pin” its return type. If I had a more powerful type system like described in part one, I wouldn’t want to have to write out the whole type, I would want to just say “pin this such that whatever changes I make could not possibly effect the outcome of the function for any input, or else give me errors describing exactly what part of the input space no longer maps logically the same to the output space”
* Another way to think of this might be to say, rather than writing tests, to be able to say “assume infinite test coverage of this codebase (and all tests are passing), now let me refactor things”.
* I have no idea how this would work, but it makes me think of getting fractions into “simplest form”. Maybe you could get two functions into “simplest form” to test their similarity?

I wonder if anything like that exists, or if this is gesturing at some existing area of research?

# Content

💡 [The Alternative Implementation Problem](https://pointersgonewild.com/2024/04/20/the-alternative-implementation-problem/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/linking-together.html#2024-05-13T15:55:39.888Z)

[The Alternative Implementation Problem](https://pointersgonewild.com/2024/04/20/the-alternative-implementation-problem/)






> What I’ve concluded, based on experience, is that positioning your project as an alternative implementation of something is a losing proposition. It doesn’t matter how smart you are. It doesn’t matter how hard you work. The problem is, when you build an alternative implementation, you’ve made yourself subject to the whims of the canonical implementation. They have control over the direction of the project, and all you can do is try to keep up.




🪤 [Inside the Cult of the Haskell Programmer](https://www.wired.com/story/inside-the-cult-of-the-haskell-programmer/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/linking-together.html#2024-05-13T15:57:09.499Z)

[Inside the Cult of the Haskell Programmer](https://www.wired.com/story/inside-the-cult-of-the-haskell-programmer/)






> That Haskell never gained widespread adoption exemplifies a paradoxical truth in software engineering: Great programming languages aren’t always great for programming.


📑 [Damaged Earth Catalog](https://damaged.bleu255.com/) via [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/linking-together.html#2024-05-14T06:56:23.447Z)

[Damaged Earth Catalog](https://damaged.bleu255.com/)




> We are humans and might as well get used to it. So far, remotely done power and glory—as via government, big business, formal education, church—has succeeded to the point where gross profits obscure actual loss. In response to this dilemma and to these losses a realm of intimate, community power is developing—power of communities to conduct their own education, find their own inspiration, shape their own environment, and share their knowledge with others. Practices that aid this process are sought and promoted by the DAMAGED EARTH CATALOG.


🎥 [NO MORE CODE: New Graphical Programming Language for Audio Research and Developers - ChangHun Sung](https://youtu.be/uYUblZhbG1A?si=-9HzHkusy2PWOjjb) via **Dany**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/linking-together.html#2024-05-14T14:49:58.574Z)

![Youtube Thumbnail](https://img.youtube.com/vi/uYUblZhbG1A/hqdefault.jpg)

[New Graphical Programming Language for Audio](https://youtu.be/uYUblZhbG1A?si=-9HzHkusy2PWOjjb)




> Audio software development is rapidly moving towards incorporating machine learning-based processing. While research scientists are continuously presenting us with inventive results in the field of AI, there is a lack of software engineering tools to utilize these results.

💻 [Bend: a parallel language](https://higherorderco.com/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/linking-together.html#2024-05-17T10:07:48.296Z)


> [Bend: a parallel language](https://higherorderco.com/)
> 
>  With *Bend* 
>  you can write parallel code for multi-core CPUs/GPUs without being a C/CUDA expert with 10 years of experience. It feels just like Python!
> No need to deal with the complexity of concurrent programming: locks, mutexes, atomics... 
>  *any*  work that can be done in parallel *will* be done in parallel.



[Twitter announcement (includes a short video demo)](https://twitter.com/VictorTaelin/status/1791213162525524076)






> After almost 10 years of hard work, tireless research, and a dive deep into the kernels of computer science, I finally realized a dream: running a high-level language on GPUs. And I'm giving it to the world! Bend compiles modern programming features, including: 

- Lambdas with full closure support 

- Unrestricted recursion and loops 

- Fast object allocations of all kinds 

- Folds, ADTs, continuations and much more 

To HVM2, a new runtime capable of spreading that workload across 1000's of cores, in a thread-safe, low-overhead fashion. As a result, we finally have a true high-level language that runs natively on GPUs!

📝 [Today they published the workbook that they produced from that research! ](https://developer-success-lab.gitbook.io/code-review-anxiety-workbook-1) via **Eli Mellen**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/linking-together.html#2024-05-17T13:04:22.588Z)

Once upon a time somewhere here, lost to the sands of a freemium slack instance, I shared a link about research some friends of mine were doing through the developer success lab on code review anxiety. [Today they published the workbook that they produced from that research! ](https://developer-success-lab.gitbook.io/code-review-anxiety-workbook-1)

# 🤖

💬 **Nicolay Gerold**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/of-ai.html#2024-05-14T03:45:39.483Z)

Not really sharing but a question for the curious:



What new use-cases do you think are now possible with gpt-4o that weren’t possible before (natively multimodal)?



What use-cases are now possible with way cheaper gpt-4-turbo? 



What are you excited to try / build?





I will start: I want to try and build a better screen reader for visually impaired people. 

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/of-ai.html#2024-05-14T17:09:00.981Z)

There are some call-heavy agentic or personic processes that are going to get more feasible, like what Park did in "Human Simulacra." I'm hoping to use 4o or turbo to have a more structured step by step approach to code generation in domain specific visual languages.



💬 [Chris Maughan](http://www.chrismaughan.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/of-ai.html#2024-05-15T10:00:52.532Z)

What struck me when playing with it via the 'voice chat/conversation' thing, was a) how brilliant the voice recognition is, b) how brilliant the synthesised voice is, and c) how I was drawn into having a conversation with an AI.  I don't know if it's a use case, but what I can see happening is that more and more people are going to start treating the AI as a 'friend'.  I think that is quite sad, and will further isolate people from real life conversations, but I can also see how it will fill a need in some folks;  especially once the iPhone integration happens.

# Present Company

💬 [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2024/05/W3/present-company.html#2024-05-15T01:11:04.432Z)

❇  *Thoughts and observations from today's Google I/O.* 


----------

👨🏽‍💻 By 🐘 [@marianoguerra@hachyderm.io](https://hachyderm.io/@marianoguerra) 🐦 [@warianoguerra](https://twitter.com/warianoguerra)

💬 Not a member yet? Check the [Future of Coding Community](https://futureofcoding.org/)

✉️ Not subscribed yet? [Subscribe to the Newsletter](https://newsletter.futureofcoding.org/join/) / [Archive](https://newsletter.futureofcoding.org/archive.html) / [RSS](https://history.futureofcoding.org/newsletter/rss.xml)

🎙️ Prefer podcasts? check the [Future of Coding Podcast](https://futureofcoding.org/episodes/)
