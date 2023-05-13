# Cozy Reader 🧸

Store all your favorite online articles for safe-keeping. That's it. That's the app.

👉 [**cozy-reader.netlify.app/**](https://cozy-reader.netlify.app/)

| Cozy | Actual |
|--------|--------|
| ![cozy](https://github.com/ayoayco/cozy-reader/assets/4262489/802f25ae-d970-4df4-8b87-f65cbc7fe24c) | ![actual](https://github.com/ayoayco/cozy-reader/assets/4262489/dc7ab81f-8353-4d7b-9388-f08a3772b9d4) |

## Usage / Options

**1. Copy, Paste**

It's simple. When you open an article and want to turn it into a more cozy reading experience, just copy the url and paste it to the cozy app's address bar.

*Oh, you're too lazy for that?*

**2. One-click Bookmark**

A bookmarklet could run a script to open the current page for you on Cozy. You can create this new bookmark titled 'Get cozy!' and put the following as value for the URL:

```
javascript:(function(){ window.open('https://cozy-reader.netlify.app/?url=%27 + window.location.href, %27_self%27); })();
```

This is possible on all major browsers, including Safari on iOS (where I personally use this often). Some screenshots:

| Firefox | Chrome |
| --- | --- |
| ![Screenshot from 2023-05-13 08-31-41](https://github.com/ayoayco/cozy-reader/assets/4262489/9b296d4f-2722-483a-bbc2-431c6b2ae996) | ![Screenshot from 2023-05-12 23-32-08](https://github.com/ayoayco/cozy-reader/assets/4262489/144b74f8-3949-46b9-849c-351e4af0ac12) |

*Oh, you don't want a bookmark?*

**3. One-click Extension then...**

It doesn't exist yet... I'll probably get to creating a browser extension at some point. Either that, or I'll write a CONTRIBUTING.md and PRs will be welcome. 


