import { expect, test } from "@playwright/test";

const basePath = "/";

test.describe("home page", () => {
  test("has title", async ({ page }) => {
    await page.goto(basePath);

    await expect(page).toHaveTitle(/Myopic Design/);
  });

  test("has main navigation", async ({ page }) => {
    await page.goto(basePath);

    const nav = await page.getByRole("navigation", { name: "main" });
    await expect(nav).toBeInViewport();
  });

  test("has main heading", async ({ page }) => {
    await page.goto(basePath);

    const heading = await page.getByRole("heading", { level: 1, name: "Myopic Design" });
    await expect(heading).toBeInViewport();
  });

  test("has latest blog posts", async ({ page }) => {
    await page.goto(basePath);

    const heading = await page.getByRole("heading", { level: 2, name: "Latest blog posts" });
    await expect(heading).toBeAttached();
  });

  test("has social navigation", async ({ page }) => {
    await page.goto(basePath);

    const nav = await page.getByRole("navigation", { name: "social" });
    await expect(nav).toBeAttached();
  });
});
