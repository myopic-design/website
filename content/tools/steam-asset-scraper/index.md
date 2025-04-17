+++
title = "Steam Asset Scraper"
date = "2024-03-31"
+++

When releasing on Steam, you're required to provide [various graphical assets](https://partner.steamgames.com/doc/store/assets) for your game. This little tool lets you view and download the store and library assets of any existing game.
{.lead}

<!--more-->

<noscript>
{{< danger >}}
You need to enable JavaScript to run this app.
{{< /danger >}}
</noscript>

<div
  class="not-prose mt-10 rounded-lg bg-gradient-to-br from-pink-600 via-fuchsia-600 to-indigo-600 p-[1px] dark:from-pink-600 dark:via-fuchsia-400 dark:to-indigo-400 md:rounded-xl lg:rounded-2xl"
>
  <div class="rounded-lg bg-stone-50 p-8 dark:bg-stone-900 md:rounded-xl lg:rounded-2xl">
    <form id="steam-art-scraper-form">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center">
        <label for="steam-art-scraper-appid" class="font-medium">Store page URL or app ID:</label>
        <div class="flex flex-1 flex-col gap-4 sm:flex-row">
          <input
            required
            type="text"
            name="appid"
            placeholder="https://store.steampowered.com/app/268910/"
            data-template="placeholder=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F%7B%7Bappid%7D%7D%2F"
            id="steam-art-scraper-appid"
            class="form-input flex-1"
          />
          <button type="submit" class="form-button">Search</button>
        </div>
      </div>
    </form>
  </div>
</div>

---

<iframe
  title="Buy on Steam"
  src="https://store.steampowered.com/widget/268910/"
  data-template="src=https%3A%2F%2Fstore.steampowered.com%2Fwidget%2F%7B%7Bappid%7D%7D%2F"
  credentialless
  loading="lazy"
  class="my-8 h-[190px] w-full [color-scheme:light]"
></iframe>

## Store assets

These are the capsules and assets needed when constructing your Steam store page.

### Header capsule

This appears at the top of the store page, in the --- 'Recommended For You' section, in browse views on Big Picture mode, and for Daily Deals if applicable.

<figure>
  <picture>
    <img
      width="460"
      height="215"
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg"
      data-template="src=https%3A%2F%2Fcdn.cloudflare.steamstatic.com%2Fsteam%2Fapps%2F%7B%7Bappid%7D%7D%2Fheader.jpg"
      class="!rounded-none"
    />
  </picture>
  <figcaption>header.jpg — 460x215</figcaption>
</figure>

### Small capsule

These are used for various lists throughout Steam. Search results, top-sellers, new releases, etc.

<figure>
  <picture>
    <img
      width="231"
      height="87"
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/268910/capsule_231x87.jpg"
      data-template="src=https%3A%2F%2Fcdn.cloudflare.steamstatic.com%2Fsteam%2Fapps%2F%7B%7Bappid%7D%7D%2Fcapsule_231x87.jpg"
      class="!rounded-none"
    />
  </picture>
  <figcaption>capsule_231x87.jpg — 231x87</figcaption>
</figure>

### Main capsule

This image appears at the top of the Steam store home page in the Main Capsule carousel.

<figure>
  <picture>
    <img
      width="616"
      height="353"
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/268910/capsule_616x353.jpg"
      data-template="src=https%3A%2F%2Fcdn.cloudflare.steamstatic.com%2Fsteam%2Fapps%2F%7B%7Bappid%7D%7D%2Fcapsule_616x353.jpg"
      class="!rounded-none"
    />
  </picture>
  <figcaption>capsule_616x353.jpg — 616x353</figcaption>
</figure>

### Vertical capsule

These can appear at the top of the front page during seasonal sales, and on other new sale pages.

<figure>
  <picture>
    <img
      width="374"
      height="448"
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/268910/hero_capsule.jpg"
      data-template="src=https%3A%2F%2Fcdn.cloudflare.steamstatic.com%2Fsteam%2Fapps%2F%7B%7Bappid%7D%7D%2Fhero_capsule.jpg"
      class="!rounded-none"
    />
  </picture>
  <figcaption>hero_capsule.jpg — 374x448</figcaption>
</figure>

### Page background

This is the image that may be used in the background of your store page.

<figure>
  <picture>
    <img
      width="1438"
      height="810"
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/268910/page_bg_raw.jpg"
      data-template="src=https%3A%2F%2Fcdn.cloudflare.steamstatic.com%2Fsteam%2Fapps%2F%7B%7Bappid%7D%7D%2Fpage_bg_raw.jpg"
      class="!rounded-none"
    />
  </picture>
  <figcaption>page_bg_raw.jpg — 1438x810</figcaption>
</figure>

An overlay is automatically applied to it.

<figure>
  <picture>
    <img
      width="1438"
      height="810"
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/268910/page_bg_generated_v6b.jpg"
      data-template="src=https%3A%2F%2Fcdn.cloudflare.steamstatic.com%2Fsteam%2Fapps%2F%7B%7Bappid%7D%7D%2Fpage_bg_generated_v6b.jpg"
      class="!rounded-none"
    />
  </picture>
  <figcaption>page_bg_generated_v6b.jpg — 1438x810</figcaption>
</figure>

## Library assets

These are the capsules and graphics needed for the Steam Library presentation of your game.

### Library capsule

This image is primarily used in the library overview and collection views.

<figure>
  <picture>
    <img
      width="600"
      height="900"
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/268910/library_600x900_2x.jpg"
      data-template="src=https%3A%2F%2Fcdn.cloudflare.steamstatic.com%2Fsteam%2Fapps%2F%7B%7Bappid%7D%7D%2Flibrary_600x900_2x.jpg"
      class="!rounded-none"
    />
  </picture>
  <figcaption>library_600x900.jpg — 600x900</figcaption>
</figure>

### Library hero

Appears at the top of a user’s library details page for this product.

<figure>
  <picture>
    <img
      width="3840"
      height="1240"
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/268910/library_hero.jpg"
      data-template="src=https%3A%2F%2Fcdn.cloudflare.steamstatic.com%2Fsteam%2Fapps%2F%7B%7Bappid%7D%7D%2Flibrary_hero.jpg"
      class="!rounded-none"
    />
  </picture>
  <figcaption>library_hero.jpg — 3840x1240</figcaption>
</figure>

### Library logo

Appears at the top of a user’s library details page for this product, placed on top of the hero graphic.

<figure>
  <picture>
    <img
      width="1280"
      height="720"
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/268910/logo.png"
      data-template="src=https%3A%2F%2Fcdn.cloudflare.steamstatic.com%2Fsteam%2Fapps%2F%7B%7Bappid%7D%7D%2Flogo.png"
      class="!rounded-none"
    />
  </picture>
  <figcaption>logo.png — 1280x720</figcaption>
</figure>

{{< script >}}
const location = new URL(window.location);
const { searchParams } = location;
const searchParamsFallbacks = { appid: "268910" };
const searchParamsTransformers = { appid: (value) => value.match(/\d+/)?.[0] };

Object.entries(searchParamsFallbacks).forEach(([key, fallback]) => {
  const value = searchParams.get(key);
  const transformedValueOrFallback = (value && searchParamsTransformers[key](value)) || fallback;
  searchParams.set(key, transformedValueOrFallback);
});

window.history.replaceState(null, "", location.toString());

const replacer = (str, key) => searchParams.get(key);

const nodes = document.querySelectorAll("[data-template]");
nodes.forEach((node) => {
  const templateParams = new URLSearchParams(node.dataset.template);
  for (const [key, value] of templateParams) {
    node[key] = value.replace(/\{\{([^}]+)\}\}/, replacer);
  }
});
{{< /script >}}
