# Myopic Design — Website

This website is built using:

- ⚡️ [Hugo](https://gohugo.io/)
- 🌬️ [Tailwind](https://tailwindcss.com/)
- 🎭 [Playwright](https://playwright.dev/)
- 💡 [Lighthouse](https://developer.chrome.com/docs/lighthouse/)
- 🤖 [CommitLint](https://commitlint.js.org/)
- 💖 [Prettier](https://prettier.io/)
- 📦 [pnpm](https://pnpm.io/)
- 👷 [Github Actions](https://github.com/features/actions)

## Setup

Install [Hugo](https://gohugo.io/). Then run the following:

```
git clone https://github.com/myopic-design/myopic-design.github.io.git website
cd website
pnpm install
```

## Develop

If you want to start a server in development mode, run:

```
pnpm dev
```

## Build

If you want to build your website for production, run:

```
pnpm build
```

## End-to-end tests

If you want to run e2e tests, run:

```
pnpm test:e2e
```
