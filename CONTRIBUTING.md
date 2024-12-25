# Contributing to Cozy

Thank you for your interest in building the coziest web experience for people like you and me.

## Tech Stack

You will need [to install nodejs](https://nodejs.org/en/download) and [pnpm](https://pnpm.io/installation) if you do not have them yet in your machine.

This project is built with the following tech

1. TypeScript, HTML, CSS - even just knowing basic JS and CSS will give you familiarity of the code
1. [Astro](https://astro.build) - Astro is the chosen framework, please read throught the basics on their docs if you are unfamiliar

- we don't use any framework that ships to the browser, we only write Astro components for server-side rendering, and vanilla DOM manipulation via `script` tags.

1. [@extractus/article-extractor](https://www.npmjs.com/package/@extractus/article-extractor) - Article Extractor is the library we use to fetch and extract article content

## Setting up the project

1. Clone

```
git clone https://github.com/ayoayco/cozy.git
```

2. install dependencies using `pnpm`

```
cd cozy
pnpm install
```

3. run the dev server

```
pnpm start
```

## Good first issues

Go to our [issues page](https://github.com/ayoayco/cozy/issues) to watch out for issues we label as "good first issue" or "help wanted"

## Code of Conduct

Our [CODE OF CONDUCT](/CODE_OF_CONDUCT.md) follows the [Contributor Covenant](https://www.contributor-covenant.org)
