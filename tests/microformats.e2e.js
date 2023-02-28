import { expect, test } from "@playwright/test";

const checks = {
  home: {
    url: "/",
    selectors: {
      ".h-feed": { minCount: 1, maxCount: 1 },
      ".h-entry": { minCount: 1, maxCount: 25 },
      ".h-card[rel=me]": { minCount: 1, maxCount: 1 },
    },
  },
  about: {
    url: "/about/",
    selectors: {
      ".h-card[rel=me]": { minCount: 1, maxCount: 1 },
    },
  },
  "games-index": {
    url: "/games/",
    selectors: {
      ".h-feed": { minCount: 1, maxCount: 1 },
      ".h-entry": { minCount: 1, maxCount: 25 },
      ".h-card[rel=me]": { minCount: 1, maxCount: 1 },
    },
  },
  "blog-index": {
    url: "/blog/",
    selectors: {
      ".h-feed": { minCount: 1, maxCount: 1 },
      ".h-entry": { minCount: 1, maxCount: 25 },
      ".h-card[rel=me]": { minCount: 1, maxCount: 1 },
    },
  },
  "blog-article": {
    url: "/blog/my-first-post/",
    selectors: {
      ".h-entry": { minCount: 1, maxCount: 1 },
      ".h-card[rel=me]": { minCount: 1, maxCount: 1 },
    },
  },
};

test("has the expected microformats", async ({ page }) => {
  for (const checkName in checks) {
    const { url, selectors } = checks[checkName];

    await page.goto(url);

    for (const selector in selectors) {
      const { minCount, maxCount } = selectors[selector];
      const elements = await page.$$(selector);
      expect(elements.length).toBeGreaterThanOrEqual(minCount);
      expect(elements.length).toBeLessThanOrEqual(maxCount);
    }
  }
});
