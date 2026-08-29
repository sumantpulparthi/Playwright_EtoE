import { test, expect } from "@playwright/test";

function addValue(x: number, y: number): String {
  let total = x + y;
  return `Total Value of ${x} & ${y} : ${total}`;
}

test("Validate Data Variables Scope", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  let x = 20;
  let y = 60;

  console.log(addValue(x, y));
});

// test("get Call", async ({ request }) => {
//   request.get("abc");
// });
