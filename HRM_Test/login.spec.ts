import { test, expect } from "@playwright/test";

let url: string =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

test("Login to Orange HRM", async ({ page }) => {
  await page.goto(url);
  console.log(`URL : ${url}`);
  let pageTiltle: string = await page.title();
  console.log(`Page Title : ${pageTiltle}`);
});
