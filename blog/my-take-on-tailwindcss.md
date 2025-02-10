---
title: My take on TailwindCSS
description: While I think tailwind is a great tool, I don't reaally like it for most use cases
layout: post
date: 2025-02-10
---

Tailwind CSS is a hot topic in web development, and while I get why it's popular, I've got some thoughts I wanted to share. Basically, it's a tool that tries to make styling your website easier, and in some ways, it does. But for me, it also adds some hurdles.

Don't get me wrong, Tailwind is well-made and solves some real problems. It's just that after working with CSS for almost 20 years, learning Tailwind feels like learning a whole new language just to do the same thing. Sure, some stuff is pretty straightforward, but I still find myself Googling or asking AI for help way more than I'd like. It's like, I already know how to do this in CSS, why do I have to learn a new way?

Here's what bugs me about it:

HTML Overload: All those utility classes in the HTML just make it look messy. It's harder to read and understand what's going on.

Debugging Headaches: Trying to figure out why something isn't styled right in Chrome DevTools is a pain with Tailwind. For example, with regular CSS, it's super easy to toggle a property on or off, or change its value right there in DevTools. With Tailwind, you would have to either edit the classes in the html (which can be a little cumbersome in comparison) or you have to edit the properties in the utility class, but that is not always what you want, since other elements in the screen could be using that class too. Anyway, that's just one example, and I've run into a bunch of other little things that just annoy me when I'm debugging Tailwind. I know there are tools to help with this, but again... I already have a way of doing these things. Do I really want to install more plugins and tools just to debug css?

Double the Debugging: Sometimes you have to look in your HTML and your CSS to find the problem. It's like having to check two places instead of one, which just slows things down.

That said, I see where Tailwind can be useful. For example, projects like v0.dev, where you need to keep all the pieces of a component together, Tailwind makes it much easier. Trying to do that with regular CSS would be a nightmare.

It can also be a good starting point for people who are new to CSS. It gives them a way to style things without having to learn all the nitty-gritty details right away.

Bottom line: For me, personally, I wouldn't use Tailwind for a new project unless I was working with something like v0.dev. The extra complexity and cluttered HTML just aren't worth it. But I get why some people like it, and I definitely see its value in certain situations.
