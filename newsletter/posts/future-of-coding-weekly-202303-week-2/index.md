<!--
.. title: Future of Coding Weekly 2023/03 Week 2
.. slug: future-of-coding-weekly-202303-week-2
.. date: 2023-03-13 00:24:24 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

💡 Data Particles 🔙 Future of Undo 🎹 Computer-Assisted Composition 🌌 Universal Programs

# Two Minute Week

🌌🎥 [Universal Programs](https://vimeo.com/805246256) via [Peter Saxton](https://twitter.com/CrowdHailer)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/03/W2/two-minute-week.html#2023-03-11T22:47:15.669Z)

![Vimeo Thumbnail](https://i.vimeocdn.com/video/1625888760-c6e1734615d5509f80d6b29b38f2b2304ed43dce036fcf982de9cda8e6d3692c-d_295x166)

Re-implemented Universal or isomorphic programs.

# Thinking Together

🔙💬 [Jared Forsyth](https://jaredforsyth.com/)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/03/W2/thinking-together.html#2023-03-06T18:54:33.587Z)

Do y'all know of any editors with undo/redo behavior that's more interesting/granular than just scrubbing through all of the edits you've done to a file in order?

I often find my self wanting "undo the last change to *this function*" 🤔

# Content

🎹 [OpenMusic: Visual Programming | Computer-Assisted Composition](https://openmusic-project.github.io/openmusic/) via [Konrad Hinsen](https://khinsen.net/)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/03/W2/linking-together.html#2023-03-06T11:27:23.165Z)

Just came across OpenMusic, a visual programming language based on Lisp, developed for musical composition but not limited to it

💡🎥 [DataParticles: Block-based and Language-oriented Authoring of Animated Unit Visualizations](https://youtu.be/2yzP70KTeJo) via [Garth Goldwater](https://twitter.com/no_defects)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/03/W2/linking-together.html#2023-03-09T00:31:20.602Z)

![Youtube Thumbnail](https://img.youtube.com/vi/2yzP70KTeJo/hqdefault.jpg)

a channel i follow on youtube (Creativity Labs) just released three absolutely banger prototype videos in the last hour 




* [first](https://youtu.be/2yzP70KTeJo) data visualization with a really neat linked code<->text description interface
* [second](https://youtu.be/vItfhC-5fvs) interactive programming visualizer/debugger that’s kind of like the next, more-interactive step for a lot of Bret Victor’s little diagrams
* [third](https://youtu.be/apqF8_7dgbY) (ridiculously souped up logging that (in their example) hooks logs from the same place over time, associates them to elements on the page, enables filtering by call site, scope, and spatially on the page



Are they members of this slack (no idea how i found the channel otherwise)?? If so, I’d love to get in touch!

🎥 [CrossCode: Multi-level Visualization of Program Execution](https://youtu.be/vItfhC-5fvs)

🎥 [Log-it: Supporting Programming with Interactive, Contextual, Structured, and Visual Logs](https://youtu.be/apqF8_7dgbY)


# Devlog Together

💬 [Jared Forsyth](https://jaredforsyth.com/)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/03/W2/devlog-together.html#2023-03-12T05:55:32.285Z)

today's progress, emoji support! it mostly consisted of  `text => new Intl.Segmenter('en').segment(text).map(s => s.segment)`  in a bunch of places, so that offset calculations made sense. I also had to add a hidden  `<input/>`  onto the page instead of just harvesting  `keypress` , because emoji-pickers don't actually send valid keypresses, but they do trigger  `oninput`  in a focused  `<input/>`  🎉

🎥 [Demo](http://history.futureofcoding.org/history/msg_files/F04/F04THUYQFU3.mov)

💬 [Jason Morris](https://twitter.com/RoundTableLaw)

[🧵 conversation](https://marianoguerra.github.io/future-of-coding-weekly/history/weekly/2023/03/W2/devlog-together.html#2023-03-12T14:54:44.672Z)

Managed to release v1.5.0-alpha of Blawx this week, with better defeasibility features including defeated defeaters, and applicability checking. Only one major feature left to add to the language (that I am aware of): temporal reasoning.

