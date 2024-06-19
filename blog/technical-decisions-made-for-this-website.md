---
title: Technical decisions made for this website
description: All the decisions about the tech stack, philosophy and compromises I made for this website
layout: post
date: 2024-06-15
---

## Constraints

My main goal was to complete this website in a short amount of time (less than 72 hours) using the simplest stack possible to ensure easy maintenance and a super fast experience. I wanted a solution that wouldn't require me to remember complex configurations in the future, so I avoided using databases or CMSs. Additionally, I wanted to experiment with the latest web APIs, such as view transitions, speculation and CSS nesting (more on that later). As a result, the website only supports modern browsers, which is acceptable since I expect most visitors to be tech-savvy individuals who keep their software updated. The site is optimized for Chrome 125 and later.

## Tools

Given these constraints, I chose to use primarily HTML, CSS, and minimal JavaScript. Eleventy was the perfect build tool for this setup, allowing me to write blog posts in Markdown and create templates using Liquid. For JavaScript, I opted for Alpine.js with some vanilla JavaScript as needed. For deployment, I used Netlify and GitHub.

## CSS

I decided to stick with pure CSS because, for this small website, I don't need additional styling tools. Managing class names won’t be overwhelming, given the site's simplicity and using the new nesting feature, I can keep my styles fairly DRY and organized.

I utilized several modern features to enhance both performance and user experience. I employed CSS custom properties (variables) to maintain consistent theming across the site. The `::view-transition` pseudo-element and the `@view-transition` at-rule are used to create smooth transitions between different states of elements, leveraging the new View Transitions API. I utilized the `text-wrap: balance` property for better text wrapping in headings. For animations, I defined keyframes create dynamic visual effects. These modern CSS features contribute to a more interactive and visually appealing website, while also ensuring it remains lightweight and fast.

### Modern web APIs

I am using the [view transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) to create smooth navigation between page. I think it is a really cool feature that doesn't require the installation of additional libraries and it creates a really nice ux. Aditionally I am using the [speculation API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API), which preloads the content of other routes before the user visits them. This way when the user navigates to another page, the switch feels pretty much instant and it seems like the page is not doing a full refresh, even when it does. This allows the animations in the menu to happen really smoothly. [Cross document view transitions](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document) were just released last week and I will be implementing them very soon.

I'm using the [view transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) to create smooth navigation between pages. It's a fantastic feature that doesn't require additional libraries and enhances the user experience. Additionally, I implemented the [speculation API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API) to preload content from other routes before users visit them. This ensures that navigation feels instantaneous, even when the page does a full refresh. The menu animations are smooth as a result. I'm also excited to implement [Cross document view transitions](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document), which were released recently.

Finally, I used the new [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) in the wizard which was a really huge time saver.

## State management

Managing state via the URL makes a lot of sense for the web. On my homepage, I manage the state of the "wizard" using query parameters. This allows users to jump to any step in the wizard via a link. It's a powerful mechanism the web provides for free, yet it’s often underutilized in today's SPA-centric world we are axperiencing at the moment.

## Locality of behavior

After reading [Hypermedia Systems](https://hypermedia.systems/) by Carson Gross, Adam Stepinski, and Deniz Akşimşek, I was compelled by the concept of locality of behavior. While I didn't use HTMX for this website, I applied this concept by embedding scripts directly into the relevant HTML templates instead of separate files. This approach makes the code more maintainable and clarifies which elements are affected by the scripts. Alpine.js is really compatible with this approach.

## Conclusion

After years of procrastinating, I finally developed my personal website, meeting all the constraints I set for myself. While it may not be the flashiest site, I’m very pleased with it because it embodies my strong opinions on how simple websites should be built. Additionally, it served as an excellent playground for experimenting with modern web APIs and exciting new CSS features.
