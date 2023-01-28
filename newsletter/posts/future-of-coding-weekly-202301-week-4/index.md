<!--
.. title: Future of Coding Weekly 2023/01 Week 4
.. slug: future-of-coding-weekly-202301-week-4
.. date: 2023-01-28 21:32:58 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

💻 AoC with Enso 💡 First-class Transactions 🤖 ChatGPT All The Things 🫂 Compiled vs Interpreted Languages

# Our Work

💻 [enso.org](https://enso.org) via **Sylwia Brodacka**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/01/W4/share-your-work.html#2023-01-20T19:45:16.257Z)

Little bit late, but a few findings from AoC with Enso ([enso.org](https://enso.org)):

This year we did it internally, hopefully it will be an open competition next year 🚀

> 🐦 [Enso (formerly Luna)](https://twitter.com/@enso_org): New story about our adventures with solving Advent of Code 2022 at Enso together with [@jdunkerley](https://twitter.com/jdunkerley) [@JaroslavTulach](https://twitter.com/JaroslavTulach) and [@Radeusgd](https://twitter.com/Radeusgd)  [Solving Advent of Code 2022 with Enso](https://link.medium.com/Wr1pM90aKwb)

# Devlog Together

💻 [BF](https://en.wikipedia.org/wiki/Brainfuck) via [Kartik Agaram](https://github.com/akkartik/mu)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/01/W4/devlog-together.html#2023-01-17T06:23:40.389Z)

Kicking the tyres on my environment with a [BF](https://en.wikipedia.org/wiki/Brainfuck) interpreter.



This is inspired by [Compiled and Interpreted Languages: Two Ways of Saying Tomato](https://tratt.net/laurie/blog/2023/compiled_and_interpreted_languages_two_ways_of_saying_tomato.html)

🎥 [bf](http://history.futureofcoding.org/history/msg_files/F04/F04JZN0DYA2.webm)

🎥 [bf codemap](http://history.futureofcoding.org/history/msg_files/F04/F04JZN13P2A.webm)

# Thinking Together

💡 [Are there any languages with transactions as a first-class concept?](https://www.reddit.com/r/ProgrammingLanguages/comments/10gylhm/are_there_any_languages_with_transactions_as_a/) via [Steve Dekorte](https://dekorte.com/)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/01/W4/thinking-together.html#2023-01-20T19:08:49.054Z)

Would be interested to hear the thoughts of folks here on this thread.

💭 by [Paul Tarvydas](https://guitarvydas.github.io/2021/09/23/Manifesto.html)



For me 2022 was:




* 0D
* transpiler pipelines



Explanations below.

[🧵 keep reading](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/01/W4/thinking-together.html#2023-01-22T14:06:36.762Z)

# Content

📝 [Meet Claude: Anthropic’s Rival to ChatGPTe](https://scale.com/blog/chatgpt-vs-claude) via [Shubhadeep Roychowdhury](https://github.com/rcshubhadeep)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/01/W4/linking-together.html#2023-01-18T10:37:57.978Z)

Not really topic here, but interesting development nonetheless

🧠 [SymbolicAI: A Neuro-Symbolic Perspective on Large Language Models (LLMs)](https://github.com/Xpitfire/symbolicai) via **Nilesh Trivedi**

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/01/W4/linking-together.html#2023-01-22T20:06:26.014Z)

Never came across "Neuro-symbolic programming paradigm" but looks interesting 😂

# Present of Coding

🧰 [history.futureofcoding.org/history/links](http://history.futureofcoding.org/history/links/) via [Mariano Guerra](https://twitter.com/warianoguerra)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/01/W4/present-company.html#2023-01-16T13:25:23.506Z)

Updates on future of coding's link search page: [history.futureofcoding.org/history/links](http://history.futureofcoding.org/history/links/)



Avoid screen freezes:



- Links data streaming download and parsing by segments

- Filter by segments

- Result pagination (less to render on refilter)



Shareability:



- If search query parameter is set, search that on load

  - Example: [history.futureofcoding.org/history/links/?search=hest](http://history.futureofcoding.org/history/links/?search=hest)

- Update search query param on search update



Usability:



- Sort by most recent

- Table layout fixed

- Result pagination

- Keyboard shortcuts

  - f: first, l: last, n: next, p: prev, N: page + 10, P: page - 10, s: focus search

- Loading status

- Row highlight on hover



Try it:






* [history.futureofcoding.org/history/links/?search=alan%20kay](http://history.futureofcoding.org/history/links/?search=alan%20kay)
* [history.futureofcoding.org/history/links/?search=bret%20victor](http://history.futureofcoding.org/history/links/?search=bret%20victor)



PS: I listed the improvements in detail mostly to highlight how many things are involved in a "simple" app that only has a search box and a result list, I think it's a nice [7GUIs](https://eugenkiss.github.io/7guis/) style app specification to benchmark future of coding projects

