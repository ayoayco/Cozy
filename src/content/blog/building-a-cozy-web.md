---
title: Building a Cozy Web
description: Let us build the web we want!
pubDate: 'Aug 14 2024'
heroImage: '/cozy.jpg'
---

> This was originally posted on [Ayo's Blog](https://ayos.blog/building-a-cozy-web).

Have you ever clicked a link to an article, all hyped up to read the content, only to be slapped in the face with popups over popups of requests to subscribe and asking consent to track you with cookies?

Do you sometimes wish you can have a consistent experience when opening articles... a place to save all your favorites, and possibly get helpful insights?

Ah, well you're not alone. 🤣

This is exactly why I started [**Cozy** 🧸](https://cozy.ayco.io/).

It's a simple web page that can make any web page content-focused! 🎉

It uses a library called [@extractus/article-extractor](https://www.npmjs.com/package/@extractus/article-extractor) to fetch and extract just the content.

Then with [Astro](https://astro.build), we can server-side render the page so your browser only gets clean HTML!

No nonsense. No headaches.

The project and the road map for features are all public on my [GitHub](https://github.com/ayoayco/cozy-reader)

## Cozy Features

Right now, it successfully extracts the content and delivers a clean page to your browser.

I'm working toward bringing the following in the coming weeks:
1. Save favorites to a library
2. Offline access
3. Smart Insights about the article
4. Easier usage (browser extensions or apps?)

## Coziest Usage

The most convenient way to use it right now is through what we call a browser bookmarklet.

Basically you can have a button there beside your other bookmarks that will open the current page in Cozy.

You can create this new bookmark titled 'Get cozy!' and put the following as value for the URL:

```js
javascript:(function(){ window.open('https://cozy.ayco.io/?url=%27 + window.location.href, %27_self%27); })();
```

This is possible on all major browsers, including Safari on iOS (where I personally use this often). Some screenshots:

| Firefox | Chrome |
| --- | --- |
| ![Screenshot from 2023-05-13 08-31-41](https://github.com/ayoayco/cozy-reader/assets/4262489/9b296d4f-2722-483a-bbc2-431c6b2ae996) | ![Screenshot from 2023-05-12 23-32-08](https://github.com/ayoayco/cozy-reader/assets/4262489/144b74f8-3949-46b9-849c-351e4af0ac12) |

## Join the Project!

I'm sure this looks very simple, but I think this is the most exciting hobby project I've started yet.

There's a lot that happened and a lot of problems could have been avoided if people were equipped to assess the content they find online.

I think there's lots of good a simple tool could bring if it allows users to cut-through all the distractions and are presented with unbiased and accurate information.

This project is a groundwork for this experience.

Let's build the web we want! 🧸