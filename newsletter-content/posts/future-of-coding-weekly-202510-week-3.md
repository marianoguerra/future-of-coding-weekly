<!--
.. title: Future of Coding Weekly 2025/10 Week 3
.. slug: future-of-coding-weekly-202510-week-3
.. date: 2025-10-20 10:08:11 UTC+02:00
.. tags:
.. category:
.. link:
.. description:
.. type: text
-->

🧬 Literate tracing 🧵 Undetermined Weaving with Machines 📑 Early Interpreters

# Share Your Work

## 🗨️ **Mariano Guerra**: [🎥 vibecard: todo app speedrun using macros](https://www.youtube.com/watch?v=D149hZVhRPg)

[🧵 conversation @ 2025-10-17](https://history.futureofcoding.org/history/weekly/2025/10/W3/share-your-work.html#2025-10-17T14:45:00.364Z)

live coding a todo app faster than the previous one with the help of a new vibecard feature: macros

![vibecard: todo app speedrun using macros](https://i.ytimg.com/vi/D149hZVhRPg/hqdefault.jpg)

## 🗨️ **Matt Curtis**: [🌐 Matt Curtis](https://www.mattcurtis.me/)

[🧵 conversation @ 2025-10-17](https://history.futureofcoding.org/history/weekly/2025/10/W3/share-your-work.html#2025-10-17T21:35:16.713Z)

since I'm starting my search for fulltime roles I did something I've managed to avoid doing for years now and made a (dundun) [personal website](https://www.mattcurtis.me/)

also trying to make more things that are sort of... just for me, you know?

anyway, idk if any of you have used Astro before (it's sort of similar to Gatsby, if you're familiar with that) but I used it for this and it's pretty neat. near first-class support for turning markdown into pages and querying and sorting collections of markdown. really great if you're building a text-heavy site. plus you can pull in components from your UI framework of choice, like React or Vue.

also got to play with a few SVG/CSS animation features I've never had the chance to fully use in a production site

would love to get any thoughts the folks here have! i feel like personal sites are sort of becoming more rare (might be just me, though)

> The personal site of Matt Curtis

![Matt Curtis](https://www.mattcurtis.me/og/general.jpg)

# DevLog Together

## 🗨️ **Tom Larkworthy**:

[🧵 conversation @ 2025-10-13](https://history.futureofcoding.org/history/weekly/2025/10/W3/devlog-together.html#2025-10-13T14:27:10.222Z)

One lame issue is Notebook 2.0, it does not support importing other Notebook 2.0s which kinda breaks my plan.  
Upvote the feature request here <https://github.com/observablehq/notebook-kit/issues/96> (they will do it and its a matter of when)

## 🗨️ **Ivan Reese**:

[🧵 conversation @ 2025-10-17](https://history.futureofcoding.org/history/weekly/2025/10/W3/devlog-together.html#2025-10-17T07:14:36.050Z)

Now that FoC stands for "feeling of computing", I can share this — I recently built a [new website for Automerge](https://automerge.org), along with the absurdly talented designer Todd Matthews. The site includes an interactive demo and a bunch of illustrations that attempt to give newcomers a sense of what Automerge does. Like, on one level, we say what it does quite directly with words. But I think it's good to also try to, like, show that somehow, even though it's occasionally a bit abstract.

It was a deeply rewarding challenge, coming up with visuals where every detail (dash patterns, directions of lines, use of shapes) had to be both pleasing to look at but also true to the meaning, and consistent with the other meanings.

You can take something technical — "everyone has their own copy of the data, changes queue, you sync with your peers, everything converges on a consistent state" — and put that into imagery.

Now, of course, I want to actually use the imagery to do the technical thing.

## 🗨️ **Tom Larkworthy**:

[🧵 conversation @ 2025-10-19](https://history.futureofcoding.org/history/weekly/2025/10/W3/devlog-together.html#2025-10-19T19:14:58.957Z)

Been thinking how Observable Notebook 2.0 format helps me. I conclude, that kind of transformation should NOT be in the low level. To run Notebook 2.0 you need compilers, but to run Lopecode the format is the low level raw JavaScript so Notebook 2.0 format puts specialised parsers/compilers in the loading path. Compilers and language choices should be in userspace, where they can be changed by the user. So I will revisit Notebook 2.0 when I have fixed the lower layer. I think it be neat as a userspace module.

So I return to where I left off. Bugs in importing from the net. I am redoing the foundational technology. I ditched importmaps and moved over to es-module-shims. It has allowed me to fix a problem that locally loaded models could not be deduped with network imported ones, which ends up causing semantic issues. importmaps are 1-way doors, es-module-shims gives you total control over import semantics at any point in time. Its a really amazing piece of software I recommend learning how it works. It has a C written Lezer parser doing the minimum parsing possible in the fastest possible way to read source code and swap "import" for "importShim" thus enclosing all import calls with a wrapper for customization.

Anyway, in the process I noticed defining the stdlib in the system space was also questionable because half those libs are broken (duckdb) and it takes up 50% of the system overheads for a large amount of extraneous code. Notebook 2.0 redid the stdlib => stdlib is subject to churn. So by a similar argument the stdlib definition should be in userspace too.

I spent a weekend on it and got surprisingly far. I can display some things, es-module-shim dedupuing seems to work and I added a userspace boot module that defines the stdlib and then loads the main module which I think its an improvement and allows the serialization format bootstrap process to be very small (26Kb). In that 26Kb you get a hot swapping reactive runtime and total control over ESM import semantics in a local-file.

![📷 image.png](https://history.futureofcoding.org/history/msg_files/F09/F09LWTKBF47.png)

# Thinking Together

## 🗨️ **maf**:

[🧵 conversation @ 2025-10-15](https://history.futureofcoding.org/history/weekly/2025/10/W3/thinking-together.html#2025-10-15T17:23:00.446Z)

Re adversarial interoperability - just figured out a fun approach. Most devices can share their screen over Miracast / AirPlay / something similar (last resort is HDMI cable). Most devices can also receive input from Bluetooth devices (alternatively, through USB cable). So as an alternative to accessibility APIs (or X11, or WinAPI input injection), one might set up another device that would spoof a Miracast display, a bluetooth mouse & a bluetooth keyboard. Such reflector could be implemented in a very cheap form factor (like a tiny ESP32) and allows another app on the original device to effectively bypass all access controls that the OS-es (especially mobile) impose.

It's not a security vulnerability per-se, since it requires the device owner to cooperate - just an interesting way to interop.

![📷 shapes at 25-10-15 19.15.08.png](https://history.futureofcoding.org/history/msg_files/F09/F09LHSCBY0K.png)

# Linking Together

## 🗨️ **Kartik Agaram**:

[🧵 conversation @ 2025-10-15](https://history.futureofcoding.org/history/weekly/2025/10/W3/linking-together.html#2025-10-15T14:11:57.668Z)

[Literate tracing](https://arxiv.org/pdf/2510.09073) [pdf]

Augments Literate Programming with primitives for running a program on specific inputs and probing the values of specific variables after.

Augments the markup language with some way to define custom pictures. But I can't quite tell what the markup for that looks like.

![📷 literate-tracing.png](https://history.futureofcoding.org/history/msg_files/F09/F09LKB0TP8V.png)

## 🗨️ **Kartik Agaram**: [🎥 Micro Maker Series: Underdetermined Weaving with Machines](https://www.youtube.com/watch?v=on_sK8KoObo)

[🧵 conversation @ 2025-10-17](https://history.futureofcoding.org/history/weekly/2025/10/W3/linking-together.html#2025-10-17T05:29:55.433Z)

Lea Albaugh, ["Undetermined Weaving with Machines"](https://www.youtube.com/watch?v=on_sK8KoObo) [video; 1 hour]

"How do we carve out a chunk of the possibility space of weaving that makes viable and interesting fabrics?"

[Paper](https://morphingmatter.org/publications/interactive-computational-handweaving)

![Micro Maker Series: Underdetermined Weaving with Machines](https://i.ytimg.com/vi/on_sK8KoObo/hqdefault.jpg)

## 🗨️ **guitarvydas**:

[🧵 conversation @ 2025-10-19](https://history.futureofcoding.org/history/weekly/2025/10/W3/linking-together.html#2025-10-19T09:01:24.582Z)

Early Interpreters  
Smalltalk “Blue Book” (esp. Part Four) <http://stephane.ducasse.free.fr/FreeBooks/BlueBook/Bluebook.pdf>  
Tiny Basic (including tiny basic virtual machine) <https://archive.org/details/dr_dobbs_journal_vol_01/page/n5/mode/2up>  
Frits van der Wateren Lisp (Lisp 1.5) (esp. LISP.TXT) <https://github.com/guitarvydas/frits-van-der-wateren-lisp>  
SmallC (strictly not an interpreter, but a compiler (I learned about compilers from this code)) <https://archive.org/details/dr_dobbs_journal_vol_05_201803/page/n189/mode/2up>, <https://github.com/trcwm/smallc_v1>

[📝 Dr. Dobb's Journal - Vol 1](https://archive.org/details/dr_dobbs_journal_vol_01/page/n5/mode/2up)

> Collected issues from Volume 1 (1976) of Dr. Dobb’s Journal of COMPUTER Calisthenics &amp; Orthodontia also known as DDJ.A Reference Journal for Users of Home...

![Dr. Dobb's Journal - Vol 1 : People's Computer Company : Free Download, Borrow, and Streaming : Internet Archive](https://archive.org/services/img/dr_dobbs_journal_vol_01)![Dr. Dobb's Journal - Vol 1 : People's Computer Company : Free Download, Borrow, and Streaming : Internet Archive](https://archive.org/services/img/dr_dobbs_journal_vol_01)

[📝 Dr. Dobb's Journal - Vol 5 ](https://archive.org/details/dr_dobbs_journal_vol_05_201803/page/n189/mode/2up)

> Collected issues from Volume 5 (1980) of Dr. Dobb’s Journal of COMPUTER Calisthenics &amp; Orthodontia also known as DDJ.A Reference Journal for Users of Home...

![Dr. Dobb's Journal - Vol 5 : People's Computer Company : Free Download, Borrow, and Streaming : Internet Archive](https://archive.org/services/img/dr_dobbs_journal_vol_05_201803)![Dr. Dobb's Journal - Vol 5 : People's Computer Company : Free Download, Borrow, and Streaming : Internet Archive](https://archive.org/services/img/dr_dobbs_journal_vol_05_201803)
