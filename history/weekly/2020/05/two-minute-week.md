*[2020-05-15 10:59:54]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-18 06:09:14]* **U0123H7JRDM**:

**Chris Maughan** thanks for the detailed descriptions! It's really great to read about other implementations 


> *[2020-05-18 16:44:30]* **Chris Maughan**:

No problem 😉 happy to share ideas.


> *[2020-05-21 17:26:18]* **Ivan Reese**:

This idea of each node building up the data being passed through in an accumulative way, rather than just "consuming" the input, is really, really interesting to me. It makes total sense, and feels like it could allow some really interesting / different ways of working with dataflow.


> *[2020-05-21 17:27:09]* **Ivan Reese**:

Can a slider's "onChange" trigger more than one node? How would that work? Just make onChange an array?


> *[2020-05-21 17:28:25]* **Ivan Reese**:

Also — when you moved the slider on the right, was that rewinding the execution history? If so, I found it odd that the sliders didn't update. Perhaps I'm just misunderstanding what it should do.


> *[2020-05-21 18:45:51]* **U0123H7JRDM**:

The slider on the right moves through the node execution history and selects the node that was executed and shows the output payload on the bottom right. And you're right I think: it would help if a node with a slider or other kind of input control also gets updated when the history slider is moved. In one of your video's I actually saw something similar, which was my inspiration to build this history slider. In the past I have experimented with a small list of payloads to show on the side of the screen, and for debugging purposes to add additional debug-nodes. But this works better.


> *[2020-05-21 18:53:26]* **U0123H7JRDM**:

Currently the onChange property can only contain a single node, being able to add an array for this to trigger multiple nodes is a good idea. In the future I also want to make the editing of a node easier with a proper form editor or with a more visual approach (the onchange property should actually be a special kind of connection, for other similar properties this is already partly implemented)


> *[2020-05-21 19:14:41]* **U0123H7JRDM**:

Yeah, the gradually building up of the payload works quite nice, as you can see in this example it can get quite complex. Because by manipulating payload properties you can make loops. The flow in this screenshot is an implementation of the quicksort algorithm, just to see if that would be possible with the flowrunner. It even has a recursive function 😉. The blue lines are hidden connections which are configured in the nodes (here it are connections to the node where the list is stored which should be sorted). I also want to visualize the 'onChange' properties of the slider-node of the other examples like this.


> *[2020-05-21 20:05:18]* **Chris Maughan**:

Awesome 🙂


> *[2020-05-22 11:03:39]* **U0123H7JRDM**:

Thanks! :-) that quicksort implementation might look impressive but I must admit : something like list.sort() is a lot easier to use 😉

---

*[2020-05-16 20:27:22]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-18 06:13:29]* **U0123H7JRDM**:

I now watched your 1st video and it's much more clear, awesome concept! 


> *[2020-05-18 07:57:32]* **Sol Bekic**:

How come your Orca schedules events in the future? I thought it generally executes in the 'now' - are you running it "ahead of time" and delaying the output? Doesn't that mess with user interaction?


> *[2020-05-18 09:23:58]* **Chris Maughan**:

Hi **Sol Bekic**, Indeed, I am scheduling into the future, but not much....  Orca does indeed schedule immediately, but those generated notes  are effectively played after a small delay when the arrive at whatever Synth you are using; you just don't notice.  It should be a similar situation here; and although I am testing far into the future, in reality I will probably be scheduling much more closely to 'now'.  I'm trying to plan a for a future containing a music generation language I've been working on, alongside Orca.   Although Orca is very fast, a music language may not be as fast.   I know, for example, that Sonic Pi has a delay of 250->500ms which is added to generated notes.   By scheduling a little bit into the future, there is I hope more time to generate and align notes correctly.  My sense is that i need this flexibility, but we will see.  Pattern languages also let you 'see' into the future, since you can run the pattern forward; so the concept of what is happening 'next' is something I want to at least be able to see.


> *[2020-05-21 17:49:46]* **Ivan Reese**:

Yeah, that _scheduling into the future_ seems like a necessary evil when it comes to music tools. Very interesting problem space, considering every system will have a different characteristic latency to be compensated for.

---

*[2020-05-15 15:59:32]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-20 21:49:12]* **Edward de Jong**:

**Ryan King** per your request, i just added two videos on beads installation, one for mac one for windows, links on [beadslang.com](http://beadslang.com)

Beads doesn't really need installation as it it is just a few files surrounding an EXE, but you do have to add a chrome extension to run your local web apps, and of course the average person doesn't know about file associations on new suffixes.


> *[2020-05-20 21:49:46]* **Edward de Jong**:

Please let me know how hard it was to get going. If people have difficulties getting started they quit immediately.


> *[2020-05-21 19:12:24]* **Ryan King**:

Great maybe I can get some feedback for you over the weekend.

---

*[2020-05-10 02:50:26]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-21 17:11:41]* **Ivan Reese**:

Is it possible to set up the layout declarations so that the sizes of elements (eg: the `100` in `add 100 al d_dual`) can be adjusted with some runtime logic? What would the code for that look like?


> *[2020-05-21 17:13:25]* **Ivan Reese**:

Also, how do you handle the case where you want a symbol to respond to drag-over or drag-out? Can you add those to track, with something like `| EV_DRAG_OUT`?

---

*[2020-05-11 12:42:53]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-21 17:17:00]* **Ivan Reese**:

Pop Corn is totally the TodoMVC of music tools. Nice.

---

*[2020-05-15 12:20:33]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-21 17:37:51]* **Ivan Reese**:

I noticed two UI things that felt lacking, both related to scrolling, and I'm curious if / how you're planning to improve them.

1. When you want to connect two things that are far apart on the page (at 0:50), you grab one and then drag it to the top of the page, and then wait while the page scrolls up.
2. When you drag the slider (1:04), the select table grows and shrinks. Since you're looking at the slider, which is below the table, the whole page jumps up and down.


> *[2020-05-21 18:37:43]* **Mariano Guerra**:

for 1 I have the basket, I don't always use it but for long drags it's really useful, for 2, yes, I've noticed it too and I don't  know yet how to best solve it, I was thinking some sort of portal and/or side by side temporary view to see effects of one cell into another one, open to ideas on this one


> *[2020-05-21 22:29:52]* **Ivan Reese**:

For 1, can you select those draggable value label things (like "goals" in the video)? If so, can you copy-paste them to achieve the same thing as a drag?

For 2, I've tried solving this problem by adjusting the scroll position to compensate for changing element sizes higher up on the page, but that never worked well enough for me to ship it. I've compensated by basically removing things from the DOM when they're outside the view, so that they can't mess with scrolling, and then reinserting them into the DOM in response to a user action. I don't think that'd work in your case, though. So perhaps the idea of pulling controls out of the main flow is the best bet. You've certainly got a lot of horizontal space to play with in your layout, so you could maybe carve off room for a panel along the left or right that could house vertical sliders and other controls. * shrug *


> *[2020-05-22 07:06:54]* **Mariano Guerra**:

here's a short demo of the basket  tool to drag and drop things to it and then take them from there in the other place


> *[2020-05-22 07:09:02]* **Mariano Guerra**:

now I understood what you mean by 2, one partial solution for it was to render tables always with 10 rows, if it has less they will have empty rows, this would avoid most of the growing and shrinking of cells, it would add unused vertical space but at least it would be stable.


> *[2020-05-22 07:09:38]* **Mariano Guerra**:

before I thought you meant that it was hard to see the effect of the slider on the other cell since it was not on the viewport, my answer did not make sense to what you actually said 😛


> *[2020-05-22 07:12:36]* **Mariano Guerra**:

an alternative solution is to add another navigation mode that allows you to go to the next/previous cell but the current one is always "full screen", I could add some basic tile management to have 2 or more cells instead of just one

---

*[2020-05-22 12:46:35]* **Mariano Guerra**:

Instadeq Week in Two Minutes #6: Form Field Reorder and Create at Position, Chart Settings, Remove Notebooks and More <https://youtu.be/CsJ8M9aN0Uc>


> *[2020-05-22 12:52:41]* **U0123H7JRDM**:

You had a productive week! Are you also planning to have forms where you can place input-controls on the same row in multiple columns?


> *[2020-05-22 12:53:45]* **Mariano Guerra**:

not yet, may add some basic layout capabilities later, but there's a lot in front of that feature 😄


> *[2020-05-22 12:58:02]* **U0123H7JRDM**:

Yeah, priority management is very important😄. Do you use the html5 drag and drop api directly or an external lib to also handle touch interfaces?


> *[2020-05-22 13:00:15]* **Mariano Guerra**:

html5 api directly, it kind of works on touch with patience but the default timeout to detect drag plus having scrollbars doesn't make it as nice as drag with a mouse


> *[2020-05-22 13:30:18]* **Ivan Reese**:

Space X provider — live updates about launch times?


> *[2020-05-22 13:37:23]* **Mariano Guerra**:

here's a short explanation on what is and how it works

---

*[2020-05-23 16:56:30]* **Chris Maughan**:

Jorvik, Part 6.  This week I focused on abstracting my graph renderer to make it graphics API independent, drawing it into an offscreen surface, and incorporating it into an ImGui window with pan and scale options.


> *[2020-05-24 05:08:52]* **Ivan Reese**:

Anything behind the name Jorvik?


> *[2020-05-24 06:03:54]* **U013HU44GLS**:

yay! nanovg! cool!


> *[2020-05-24 10:27:03]* **Chris Maughan**:

**Ivan Reese** It refers to where I live, in York.   I have no idea if this is the final name - haven't decided.  It is pronounced with a 'Y'  <https://en.wikipedia.org/wiki/Scandinavian_York>


> *[2020-05-24 10:29:19]* **Chris Maughan**:

U013HU44GLS I like nanovg a lot, but I'm only using it instead of ImGui because it has the gradient fills I use, which I think helps lift the UI off the screen a little.  Now I'm abstracted, it won't be hard to try other approaches.


> *[2020-05-24 10:29:48]* **Chris Maughan**:

The downside is it only supports GL and D3D9 (a backend I contributed a long time ago).  ImGui might be more sensible long term.


> *[2020-05-24 16:08:56]* **U013HU44GLS**:

I haven't looked at imGui for a couple of years so it may have improved since. But I selected nanovg because it was plain C and the implementation was a lot cleaner than imGui


> *[2020-05-24 19:08:03]* **Chris Maughan**:

ImGui is pretty amazing these days; especially with the new Docking stuff.  But it wasn't long ago I looked, and there was no gradient fill.


> *[2020-05-24 19:08:15]* **Chris Maughan**:

Hence the hybrid approach....

---

*[2020-05-24 05:54:00]* **Edward de Jong**:

This week in Beads language development was devoted to implementing code coverage measurement. In Beads you have the concept of a monitor program that can run another program inside a window. This is useful for performance analysis and automated testing. I expanded the Builder program to have a toggle switch which shows the number of times each function/subroutine in the system has been called. By identifying functions with 0 calls you can see which parts of your code have not been tested.  <https://youtu.be/rW3H_BR7gLk>  This counts are also useful for identifying super high frequency utility functions, as those are strong candidates for putting in time on performance. It is always better to measure frequency of use before trying to optimize your code.