*[2020-05-16 21:11:44]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-19 14:59:24]* **Jared Windover**:

This looks awesome. I haven’t had any experience with vvvv. Is this built from the ground up, or do you get some of the functionality from vvvv? I’m really impressed by the interface. Is there a gui toolkit involved, or is it just a canvas?


> *[2020-05-19 18:24:37]* **U013GB24BD4**:

Hi **Jared Windover**, thanks a lot.

Actually vvvv gamma/VL (there's also beta) comes with a lot of libraries dealing with IO, meaning that using ArtNet, OSC or MIDI protocols for instance is a breeze. How you process and generate the data to send over - your application logic - is up to you though.

Second, you can really easily tap into the .NET ecosystem ([nuget.org](http://nuget.org)) for additional libraries if the need arises, I'm using SharpDX.XInput for gamepad support for instance.

If you don't know about vvvv gamma, then I suggest you check it out, even just to see how a visual language can be designed so its powers are fundamentally on par with its textual counterparts. <https://visualprogramming.net/>

The interface is using VL.Skia, vvvv's wrapper around SkiaSharp. It provides basic primitives, paths and text, grouping of draw calls into layers, transformations and a rudimentary notification system for handling user input so it is a kind of a slightly smarter canvas.

When I started out, there was no GUI toolkit for VL so all the widgets are patched from primitives and those are then combined together in various ways. This I think allowed me to strike a very unique look and feel though, it's really closer to a game than a traditional IDE.

Nowadays there is Elementa, which is quite cool and has really extensive features with styling and all sorts of layouting. I'm considering porting all my widgets to its architecture eventually. It might benefit Schéma and maybe save me some time in the long run. But the widgets I made are so purpose-built to deal with the needs of my program so there is quite a gap in model handling, styling, etc. So I'm not sure if it would be the right step.


> *[2020-05-23 18:31:46]* **David Piepgrass**:

I wondered the whole video what this was for. In the last ten seconds there is a a hint that its purpose is to edit some kind of 3D scene or visuals.


> *[2020-05-24 17:45:48]* **U013GB24BD4**:

**David Piepgrass** Yes, I agree that it's not very clear from the video. It is mainly a tutorial to get you started with the environment.

I do understand the need for a short trailer-format presentation of the capabilities.

The 3D scene you create is only a stepping stone.

So far, I have mainly used it for light programming and setting up audio reactive, interactive and kinetic objects, in essence dealing with real-life objects.

Think stage lighting, LEDs, eg:
<https://youtu.be/9Njcf-cxLxg>

Physically interactable objects, eg:
<https://youtu.be/gG3_ubrUpfg>

Lately I've been also exploring using it as a VJ tool:
<https://youtu.be/EbdbSbtwrvA>

I highly suggest you check out <https://schema.scenic.tools/gallery/> for more examples.

The thing is, though, in essence Schéma is a general multi-purpose toolkit much in the vein of vvvv or TouchDesigner.

But it's more opinionated in how it treats various IO, scene recall, objects, data structures, DMX channel mapping, MIDI inputs, etc.

This reduces some of the flexibility but lets you not reinvent the wheel and lends the whole environment a consistent feel. with the internals knowing how to talk to one another.

This way, even entirely new functionality, such as multiuser sessions, can be brought in in the form of a plugin.

And using standard supported communication protocols such as OSC you're able to integrate Schéma with other tools.

Think for instance using MaxMSP to generate audio and then sending OSC triggers to activate light sequences authored in Schéma.

*TL;DR*
Use it to drive lights, generate visuals, create interactive media installations, integrate with other tools and think of new creative uses while you quickly iterate in the live environment.

---

*[2020-05-14 15:19:38]* **Unknown User**:

MSG NOT FOUND


> *[2020-05-21 11:19:21]* **Tyler Adams**:

Hmmm...interesting problem. I've only done adhoc drawings of systems as a graph where the thickness of the edge between nodes corresponds to how coupled they are. What are you thinking of diagramming?