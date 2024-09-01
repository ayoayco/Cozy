> [!IMPORTANT]
> ...aaaaaand we're back: [cozy.pub](https://cozy.pub)
> -ayo

<h1 align="center">Cozy</h1>
<p align="center">
  <a href="https://github.com/ayoayco/cozy">
    <img alt="Last Commit" src="https://img.shields.io/github/last-commit/ayoayco/cozy?logo=github" />
  </a>
  <a href="https://github.com/ayoayco/cozy-reader/releases/latest"><img alt="Alpha Version" src="https://img.shields.io/github/package-json/v/ayoayco/cozy?label=alpha" /></a><br />
  Remove distractions. Save for later.<br />
  Cozy is your modern-day reading assistant.<br /><br />
  <img src="https://raw.githubusercontent.com/ayoayco/cozy/main/.github/assets/screenshot.png" /><br />
</p>

## Why?

Visiting websites in this 'modern' time is a paradox: standard Web technologies are better but most commercial websites are pretty terrible--not only because misinformation abounds online, but also because of Big Tech's personal data farming that puts us all at a disadvantage.

[**Cozy**](https://cozy.pub) addresses this by putting people first by default: no tracking cookies will ever get into your browser, pay the minimum bandwidth to get information you need, and save everything on your browser for accessing them again later offline.

With Cozy: *The Web is Yours.*

## How is this app different?
Here's what this project is building:
1. An app that just works, no sign-ups or set-ups.
2. Progressively enhanced experience. Main feature works even without JS. Removing distractions happen on the server and dead clean HTML gets delivered
3. All your data are cached and does not leave your device;  offline access is by default
4. Cloud-sync will be opt-in, with your choice of provider
5. Will also explore smart insights, such as:
    1. text summarization
    2. dominant emotion
    3. other sources for lateral reading

## Roadmap
| Feature | Status | Version |
| --- | --- | --- |
| Remove distractions| ✅ DONE | v0.0.x |
| Save viewed history | ✅ DONE | v0.1.x |
| Open links within Cozy | ✅ DONE | v0.2.x |
| Offline access | ✅ DONE | v0.3.x |
| Set items as Favorites | 🛠️ In-progress | v0.4.x |
| Smart insights | | v0.5.x |
| Browser Extensions | | |
| Native Apps | | |

## Usage / Options

**1. Copy, Paste**

It's simple. When you open an article and want to turn it into a more cozy reading experience, just copy the url and paste it to the app's address bar.  

**2. One-click Bookmark**

A bookmarklet could run a script to open the current page for you on ~~Cozy~~. You can create this new bookmark titled 'Get cozy!' and put the following as value for the URL:

```
javascript:(function(){ window.open('https://cozy.pub/?url=%27 + window.location.href, %27_self%27); })();
```

This is possible on all major browsers, including Safari on iOS (where I personally use this often). Some screenshots:

| Firefox | Chrome |
| --- | --- |
| ![Screenshot from 2023-05-13 08-31-41](https://github.com/ayoayco/cozy/assets/4262489/9b296d4f-2722-483a-bbc2-431c6b2ae996) | ![Screenshot from 2023-05-12 23-32-08](https://github.com/ayoayco/cozy/assets/4262489/144b74f8-3949-46b9-849c-351e4af0ac12) |

**3. One-click Extension then...**

It doesn't exist yet... I'll probably get to creating a browser extension at some point. But for now, PRs welcome! :)

## Credits
We are thankful for all the building blocks provided by the following projects:
1. [Astro](https://www.npmjs.com/package/astro) for our server-side rendering framework
1. [@ayco/astro-resume](https://ayco.io/n/@ayco/astro-resume) for communicating necessary data from server to client
1. [@ayco/astro-sw](https://ayco.io/n/@ayco/astro-sw) for taking app's service worker, and injecting needed dynamic assets & variables 
1. [@extractus/article-extractor](https://www.npmjs.com/package/@extractus/article-extractor) for the amazing scraping of articles
1. [astro-iconify](https://www.npmjs.com/package/astro-iconify) for easily using icon-sets in [iconify](https://icon-sets.iconify.design/)
1. [sass](https://www.npmjs.com/package/sass) for some nested styling
1. [ultrahtml](https://www.npmjs.com/package/ultrahtml) for any cleanup and transformation we do on the received article content
1. [fastify](https://fastify.dev/) for our production server and [nginx](https://nginx.org/) as reverse proxy

## Contributing
If any of the above seems to need improvement for you, we are always eager to hear feedback and welcome all contributions. See our [CONTRIBUTING](/CONTRIBUTING.md) guide for more info.

Join our [Discord](https://discord.gg/kkvW7GYNAp) if you need help!

