<!--
.. title: Future of Coding Weekly 2023/11 Week 4
.. slug: future-of-coding-weekly-202311-week-4
.. date: 2023-11-26 23:26:50 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
-->

💼 Spreadsheets & Small Software 🎠 Lua Carousel 🗺️ Embark: Dynamic documents for making plans

# Two Minute Week

🎥 [Wrap and unwrap expression](https://youtu.be/frOmjdDg9n8) via **U03U0SCU5LH**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/two-minute-week.html#2023-11-22T16:00:39.890Z)

![Youtube Thumbnail](https://img.youtube.com/vi/frOmjdDg9n8/hqdefault.jpg)

Last week I worked on Wrap / Unwrap Expression. See description under video. (no audio)



Btw. if somebody has a better verb instead of wrap.. let me know.

# Our Work

💼 [Spreadsheets and Small Software](https://blog.nilenso.com/blog/2023/11/10/spreadsheets-and-small-software) via **Prabhanshu Gupta**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/share-your-work.html#2023-11-20T16:57:59.916Z)

I’ve been researching spreadsheets and writing one for a couple months. I wrote a bit about the what and the why, give it a read!

[blog.nilenso.com/blog/2023/11/10/spreadsheets-and-small-software](https://blog.nilenso.com/blog/2023/11/10/spreadsheets-and-small-software)



I wasn’t able to cover many specifics here – writing about the work seems like a lot more work than doing the actual work 😅. There’s a lot to cover and I’m hoping to get to it slowly. Until then please shoot thoughts and questions here, I’d love to answer.

🎥 [Arroost: Normalise sharing scrappy fiddles](https://youtu.be/cF2OF75ivZM) via [Lu Wilson](https://twitter.com/TodePond)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/share-your-work.html#2023-11-21T22:09:38.720Z)

![Youtube Thumbnail](https://img.youtube.com/vi/cF2OF75ivZM/hqdefault.jpg)

Watch my new talk!

It's about a music-making node-based language tool for feeling.



ARROOST: NORMALISE SHARING SCRAPPY FIDDLES


📝 [Let's Build a Programming Language](https://mike-austin.com/react-desktop/?app=markdown&args=/Let%27s%20Build%20a%20Language.md&width=1280&height=1440) via **Mike Austin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/share-your-work.html#2023-11-21T23:57:56.551Z)

I've demoed my Kopi language and Rect-Desktop projects a few weeks ago. In my experience writing Kopi, I've always wanted to write a "How to Write a Programming Language" tutorial based on it, since the core language is simple and familiar (infix operators, assignment, anonymous functions, etc.). Here's the start of something (written in Markdown, presented using the React-Desktop Markdown app:



[Let's Build a Programming Language](https://mike-austin.com/react-desktop/?app=markdown&args=/Let%27s%20Build%20a%20Language.md&width=1280&height=1440)



It's in an early draft. I like presenting ideas very incrementally, and being able to see and even interact with each small change. You can modify any of input or parser code and see the result value change.

🎠 [Lua Carousel](https://akkartik.itch.io/carousel) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/share-your-work.html#2023-11-23T19:28:48.533Z)

Lua Carousel:  A lightweight programming environment for desktop and mobile devices that you can make changes to while it's running.




repo: [git.sr.ht/~akkartik/carousel.love](https://git.sr.ht/~akkartik/carousel.love)

🎥 [Lua Carousel Demo](http://history.futureofcoding.org/history/msg_files/F06/F0673K70HDZ.webm)

💬 [Daniel Garcia](https://pel-daniel.github.io/cv/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/share-your-work.html#2023-11-24T20:03:17.537Z)

Followup on my  `~_*Colorful types*_~`  project. I’m trying to create a  `~_*map*_~`  for a codebase with different zoom levels.

I have been thinking about having 3 zoom levels:




* Level 1: Only colors for both types & functions
* Level 2: Colors and names for types, functions and parameters
* Level 3: Shows the entire source file (maybe with some extra color sugar on top?) 

Here are a couple of screenshots of level 1 & 2, and video of the WIP interface.

PS. Anyone have good recommendations of typescript codebases with a couple dozen source code files which I can use for testing?

![Screenshot 2023-11-22 at 9.01.09 PM.png](http://history.futureofcoding.org/history/msg_files/F06/F06782M2C1H.png)

![Screenshot 2023-11-22 at 8.58.08 PM.png](http://history.futureofcoding.org/history/msg_files/F06/F067X557NBA.png)

🎥 [Demo](http://history.futureofcoding.org/history/msg_files/F06/F0671G5D5TQ.mov)


# Devlog Together

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/devlog-together.html#2023-11-20T06:56:47.502Z)

More progress on a lightweight programming environment that runs on Linux, Windows, Mac, Android, iOS. Also modifiable live while it runs (though not on mobile devices).



The seed design constraint here was to structurally prevent the pop-up keyboard on a touchscreen from ever blocking my typing. That led to this design of a multi-line commandline editor in the top half, fixing the non-editable output buffer in the bottom half. Independent commands/scripts then expanded in the only other direction available: left/right.

🎥 [Carousel Shell](http://history.futureofcoding.org/history/msg_files/F06/F0669CLPCQ6.webm)

💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/devlog-together.html#2023-11-21T08:52:18.837Z)



🎥 [Carousel Shell Slider](http://history.futureofcoding.org/history/msg_files/F06/F066G8T6T9C.webm)

🗺️ [Dispatch 001:On Embark and Lude](https://www.inkandswitch.com/newsletter/dispatch-001/) via [Duncan Cragg](https://twitter.com/duncancragg)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/devlog-together.html#2023-11-23T11:18:34.108Z)

Hiya, I just read this new newsletter from Ink'n'Switch:



[inkandswitch.com/newsletter/dispatch-001](https://www.inkandswitch.com/newsletter/dispatch-001/)



And it says:






> Solo independent researchers we know often discuss the challenge of working alone. Being part of a research group can create community, social accountability, provide feedback, and just give you someone to talk to when you’re feeling stuck or bored. This is why we started our Researchers-in-Residence program.



Which made me think "this could be something we set up in FoC!"



And then I came right here to say that, without thinking it through any further...

🎥 [Creating html for nodes using gpt4 api in a visual programming system](https://youtu.be/WkyB8sdtiZ0) via [Maikel van de Lisdonk](https://www.devhelpr.com/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/devlog-together.html#2023-11-25T09:27:41.214Z)

![Youtube Thumbnail](https://img.youtube.com/vi/WkyB8sdtiZ0/hqdefault.jpg)

Hi, in this weeks video I show a new node type in which a prompt can be entered which is used to create HTML via openai gpt4. It's quite powerful .. the created nodes can receive and visualize input data from another node. This is offcourse inspired by makeitreal from tldraw which uses gpt4-vision-preview. I have been playing with the prompt to get the result that I wanted, although the results are not consistent when recreating the html using the same prompt. Still, very cool that this is possible.


💬 [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/devlog-together.html#2023-11-26T19:20:00.817Z)

Achievement unlocked: I've built an app large enough[1] that it crashes my programming environment that puts all the code on a spatial surface.



The problem: I do this snazzy initial animation (see video) that takes in the whole thing before zooming back in somewhere. That animation works by drawing the whole surface to an in-memory canvas before transforming it. Turns out drawing to a canvas still uses the video card, and I don't have enough video RAM for a virtual "monitor" of this resolution.



[1] Or spread out enough. It's not really about lines of code, just how much area the code occupies.

🎥 [bf codemap](http://history.futureofcoding.org/history/msg_files/F06/F067B7LT50S.webm)

# Reading Together

💬 **Beni Cherniavsky-Paskin**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/reading-together.html#2023-11-20T18:56:29.079Z)

I was leafing through my father's old books when this diagram caught me off-guard.

We're so used now to having an OS with apps, that it's weird to think of OS-level transitions (login->shell), inter-apps transitions (shell->vi) and inside-app transitions (vi's command<->append modes) as similar things. 🙃

But to a user new to computers, yes these are all "modes".

![IMG_20231012_130106.jpg](http://history.futureofcoding.org/history/msg_files/F06/F066D6FURRU.jpg)


💬 **Janne Aukia**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/thinking-together.html#2023-11-24T14:43:50.649Z)

I think that often the most difficult part of programming is debugging: humans aren't very good at "seeing" how an app operated when it failed. You get some log output that might or might not have references to the correct file locations.



I don't see any reason, in the long term, why humans would be better than machines at debugging. How to make that happen? I assume somebody is building this already. Would it help if an AI with a large context window + access to the VM could see the whole call logs/tree and see exactly what is going on?  AI could learn from other users, see everything that happens in a run without debugger/console.logs, try multiple solutions in parallel, and fix issues while you sleep.



Thoughts on this?

# Content

📝 [Spreadsheets and Small Software - nilenso blog](https://blog.nilenso.com/blog/2023/11/10/spreadsheets-and-small-software/) via **Benji York**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/linking-together.html#2023-11-21T21:28:47.876Z)

"We wanted tools to make sheds, we got tools to make skyscrapers."

🗺️ [Embark — Dynamic documents for making plans](https://www.inkandswitch.com/embark/) via [Ivan Reese](http://ivanish.ca/)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/linking-together.html#2023-11-21T21:51:27.530Z)

Ink & Switch just released a new essay: [Embark — Dynamic documents for making plans](https://www.inkandswitch.com/embark/).



Starting from a desire to "unbundle the app" in the name of malleable software, they explore using a bullet-point outliner as a substrate for dynamic properties, computations, and views. They ground the work with a specific use case — trip planning — and they hard-code a bunch of stuff that ought to be pushed into user space, granted. But it's easy to look at this, imagine how it could be expanded, and see some really compelling possibilities for a different way to approach creating and distributing software.



Congrats to [Paul Sonnentag](https://twitter.com/paulsonnentag), **@Alexander Obenauer**, and [Geoffrey Litt](https://twitter.com/geoffreylitt)!

💻 [Pickcode | Make cool stuff with code](https://pickcode.io/) via [Mattia Fregola](https://twitter.com/MattiaFregola)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/linking-together.html#2023-11-22T03:49:30.841Z)

[Pickcode](https://pickcode.io/) – a visual language to teach kids to code.

🧶 [There are no strings on me](https://www.scattered-thoughts.net/writing/there-are-no-strings-on-me/) via **Justin Blank**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/linking-together.html#2023-11-23T13:59:46.966Z)

An essay on the challenges of image based/live systems: [There are no strings on me](https://www.scattered-thoughts.net/writing/there-are-no-strings-on-me/)

📝 [Lua Carousel: create little programs on desktop or mobile devices](https://lobste.rs/s/ogfcnz/lua_carousel_create_little_programs_on) via **Walker Griggs**

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/linking-together.html#2023-11-24T18:16:49.253Z)

A saw a friendly face on the front page of lobsters this morning


🎥 [Bootstrap yourself into conviviality by writing your own Forth](https://vimeo.com/859408) via [Kartik Agaram](http://akkartik.name/about)

[🧵 conversation](https://history.futureofcoding.org/history/weekly/2023/11/W4/linking-together.html#2023-11-25T04:03:49.454Z)

![Vimeo Thumbnail](https://i.vimeocdn.com/video/53151468-cd7cf596ee96a516460ac0b31a74998b26a1bcd83cdd234891ba4a631f44be76-d_295x166)

I just found an absolutely  _ancient_  bit of advocacy for convivial tools. From 2008!


via [muforth.nimblemachines.com](https://muforth.nimblemachines.com)



[Jonathan Edwards](https://twitter.com/jonathoda/) Were y'all aware of this when you organized [2020.programming-conference.org/home/salon-2020](https://2020.programming-conference.org/home/salon-2020)?


