+++
title = "Tips for Releasing Web Games"
date = "2023-08-18"
tags = ["Web"]
+++

I recently watched [this talk from Björn Ritzl](https://youtu.be/EbOmEuoTc7g) where he covered best practices for successful web game releases. Here's my key takeaways.
{.lead}

<!--more-->

## Distribution

Think about **where** and **how** to release your game.

- For **mobile** you have [Google Play](https://play.google.com) for Android, and [App Store](https://www.apple.com/app-store/) for iOS.

- For **desktop** you only have [Steam](https://store.steampowered.com), really. _([Epic Games Store](https://store.epicgames.com) launched [self-publishing](https://store.epicgames.com/news/epic-games-store-launches-self-publishing-tools-for-game-developers-and-publishers) recently, so maybe it'll become a thing?)_

- For **web games** there's so many options: [itch.io](https://itch.io), [Poki](https://poki.com), [Game Jolt](https://gamejolt.com), [Facebook Instant Games](https://www.facebook.com/games/), [Google GameSnacks](https://gamesnacks.com), [Yandex Games](https://yandex.com/games/), [GameDistribution](https://gamedistribution.com), [Newgrounds](https://www.newgrounds.com/games/), [CrazyGames](https://www.crazygames.com), [GameSnacks](https://gamesnacks.com), [Rune](https://www.rune.ai), and more.

- Distinguish between **open** platforms (like itch.io) and **curated** ones (with approval processes).

- Select a **launch partner** wisely. Their alignment with your game's audience matters.

## Monetization

Design for **monetization** from the start. Study successful games in your genre, understand their game loop and meta, and apply the learnings to your game.

- **Ad revenue** is the most popular choice for web games. Distributors like Poki, Facebook, Yandex, or GameDistribution, have their own ad SDKs that you _have_ to use in order to launch on their platform. Alternatively, Google has a platform-agnostic solution, [Ad Placement](https://developers.google.com/ad-placement), that you can use wherever you want.

- You can also **license** your game to a publisher like GameSnacks, or **sell** it on itch.io.

- **In-app purchases** are way more popular on native mobile games than on web games, so you probably **don't** want to go that route.

## Conversion to play

Poki created this metric **"conversion to play"** that tracks what percentage of players drop off between discovery and first play. Their data shows clear correlation between slow loading times and player attrition. _(You can learn more in [this talk by Kasper Mol](https://youtu.be/1odNKssL3Oc).)_

- To improve **discovery**, make sure to stand out from the crowd. Really work on your icon, banner, title, etc.

- Prioritize the **loading experience**. Make it visually interesting. Show a progress indicator. Show helpful tips?

- Attention spans are short. You have around **8 seconds** to engage players. Skip the main menu for new players, drop them straight into a tutorial. For recurring players, reduce the amount of interaction needed to start a game.

- Wow your players in the first few seconds of gameplay, to grab their attention, and to gain their trust. [Adam Saltsman](https://adamatomic.com) calls this ["generous game design"](https://flippfly.com/lessons-from-a-master-adam-saltsman/):

  > [...] giving something to the player, in hopes that they will sort of subconsciously decide <q>ok that was cool, I'll give you more of my time, what else you got</q>.

- Consider incorporating "short loops", experiences that you complete, and have fun with, in a short period of time. [Torsten Reil](https://twitter.com/torstenreil) calls this ["the Starbucks test"](https://www.gamesbrief.com/2012/08/free-to-play-design-rule-2-the-starbucks-test/):

  > Can you play your game and have a meaningful experience in the time it takes for a barista to make your macchiato?

## Size matters

- The **game engine** you choose will have an impact on the size of your distributables. Make sure it aligns with your requirements.

- Optimize **content size**:
  - Pack and compress **textures**.
  - Compress **sounds**. _(Do you really need stereo?)_
  - Generate things **procedurally**.
  - Use **gzip/brotli** when serving game data.

- Split content into **chunks**. Download only what's needed initially, then load additional content as players progress.

## Web standards

- People play web games not just on **desktop**, but also on **mobile**. Consider things like orientation, aspect ratio, and camera notch / island.

- Support **gamepads**. It's essential for desktop, and for potential console ports. Handle disconnects, for example by pausing the game.

- Take [browser policies](https://developer.mozilla.org/docs/Web/Media/Autoplay_guide) into account. You can only start playing sounds in response to a user interaction. Remember to **pause sounds** while showing ads. Add settings to **toggle** music and sound effects, and persist them between sessions.

- **Localize** game content. At a minimum consider <abbr title="English, French, Italian, German, and Spanish">EFIGS</abbr>. Depending on launch partner, you may need more: Yandex will require Russian, GameDistribution will require Polish and Portuguese, etc. Try to **auto-detect** device language.
