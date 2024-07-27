> [!IMPORTANT]
> ...aaaaaand we're back: [cozy.ayco.io](https://cozy.ayco.io)
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
| Set items as Favorites | 🛠️ In-progress | v0.3.x |
| PWA: full Offline access | | v1.0.x |
| Smart insights | | v1.1.x |
| Browser Extensions | | |
| Native Apps | | |

## Usage / Options

**1. Copy, Paste**

It's simple. When you open an article and want to turn it into a more cozy reading experience, just copy the url and paste it to the app's address bar.  

**2. One-click Bookmark**

A bookmarklet could run a script to open the current page for you on ~~Cozy~~. You can create this new bookmark titled 'Get cozy!' and put the following as value for the URL:

> [!WARNING]
> This is not working, until we fix our deployed service

```
javascript:(function(){ window.open('https://cozy.ayco.io/?url=%27 + window.location.href, %27_self%27); })();
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
1. [@astrojs/prefetch](https://www.npmjs.com/package/@astrojs/prefetch) for our experimental prefetch strategy (not sure if working yet 🤣); only while we don't have a more aggressive prefetch-and-cache strategy
1. [@ayco/astro-resume](https://www.npmjs.com/package/@ayco/astro-resume) for communicating necessary data from server to client
1. [@extractus/article-extractor](https://www.npmjs.com/package/@extractus/article-extractor) for the amazing scraping of articles
1. [astro-iconify](https://www.npmjs.com/package/astro-iconify) for easily icon-sets in [iconify](https://icon-sets.iconify.design/)
1. [sass](https://www.npmjs.com/package/sass) for some nested styling
1. [ultrahtml](https://www.npmjs.com/package/ultrahtml) for any cleanup and transformation we do on the received article content

## Contributing
If any of the above seems to need improvement for you, we are always eager to hear feedback and welcome all contributions. See our [CONTRIBUTING](/CONTRIBUTING.md) guide for more info.

Join our [Discord](https://discord.gg/kkvW7GYNAp) if you need help!

