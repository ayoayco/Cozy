<h1 align="center">Cozy</h1>
<p align="center">
  <a href="https://github.com/ayoayco/cozy">
    <img alt="Last Commit" src="https://img.shields.io/github/last-commit/ayoayco/cozy?logo=github" />
  </a>
  <a href="https://github.com/ayoayco/cozy-reader/releases/latest"><img alt="Alpha Version" src="https://img.shields.io/github/package-json/v/ayoayco/cozy?label=alpha" /></a><br />
  Remove distractions. Save for later.<br />
  Cozy is your modern-day reading assistant.<br /><br />
  <a href="https://cozy-reader.netlify.app" target="_blank"><img src="https://raw.githubusercontent.com/ayoayco/cozy/main/.github/assets/screenshot.png" /></a><br />
  <a href="https://cozy-reader.netlify.app" target="_blank">&nearr; Try the App! &nearr;</a><br />
</p>

## How is this app different?
Well here's what I’m building:
1. An app that just works, no sign ups or setups.
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
| Set items as Favorites | 🛠️ In-progress | v0.2.x |
| PWA: full Offline access | | v1.0.x |
| AI insights | | v1.1.x |
| Browser Extensions | | |
| Native Apps | | |

## Usage / Options

**1. Copy, Paste**

It's simple. When you open an article and want to turn it into a more cozy reading experience, just copy the url and paste it to the [app's](https://cozy-reader.netlify.app/) address bar.  

**2. One-click Bookmark**

A bookmarklet could run a script to open the current page for you on ~~Cozy~~. You can create this new bookmark titled 'Get cozy!' and put the following as value for the URL:

```
javascript:(function(){ window.open('https://cozy-reader.netlify.app/?url=%27 + window.location.href, %27_self%27); })();
```

This is possible on all major browsers, including Safari on iOS (where I personally use this often). Some screenshots:

| Firefox | Chrome |
| --- | --- |
| ![Screenshot from 2023-05-13 08-31-41](https://github.com/ayoayco/cozy/assets/4262489/9b296d4f-2722-483a-bbc2-431c6b2ae996) | ![Screenshot from 2023-05-12 23-32-08](https://github.com/ayoayco/cozy/assets/4262489/144b74f8-3949-46b9-849c-351e4af0ac12) |

**3. One-click Extension then...**

It doesn't exist yet... I'll probably get to creating a browser extension at some point. But for now, PRs welcome! :)

## Contributing
Speaking of PRs being welcome, see our [CONTRIBUTING guide](/CONTRIBUTING.md).
