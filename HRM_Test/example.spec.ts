import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  const getStartedLink = page.getByRole("link", { name: "Get started" });
  await expect(getStartedLink).toBeVisible();
  await expect(page).toHaveTitle(/Playwright/);
});
