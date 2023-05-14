# Cozy Reader
Remove distractions and store all your favorite articles for safe-keeping. That's it. That's the app.


## Usage / Options

**1. Copy, Paste**

It's simple. When you open an article and want to turn it into a more cozy reading experience, just copy the url and paste it to the [Cozy](https://cozy-reader.netlify.app/) address bar.  

**2. One-click Bookmark**

A bookmarklet could run a script to open the current page for you on Cozy. You can create this new bookmark titled 'Get cozy!' and put the following as value for the URL:

```
javascript:(function(){ window.open('https://cozy-reader.netlify.app/?url=%27 + window.location.href, %27_self%27); })();
```

This is possible on all major browsers, including Safari on iOS (where I personally use this often). Some screenshots:

| Firefox | Chrome |
| --- | --- |
| ![Screenshot from 2023-05-13 08-31-41](https://github.com/ayoayco/cozy-reader/assets/4262489/9b296d4f-2722-483a-bbc2-431c6b2ae996) | ![Screenshot from 2023-05-12 23-32-08](https://github.com/ayoayco/cozy-reader/assets/4262489/144b74f8-3949-46b9-849c-351e4af0ac12) |

**3. One-click Extension then...**

It doesn't exist yet... I'll probably get to creating a browser extension at some point. But for now, PRs welcome! :)

🧸
