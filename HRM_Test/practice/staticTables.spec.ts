import { test, expect, Locator } from "@playwright/test";

let url: string = "https://testautomationpractice.blogspot.com/";

test("Static Web tables", async ({ page }) => {
  await page.goto(url);

  const table: Locator = page.locator("table[name='BookTable'] tbody");

  await expect(table).toBeVisible();

  // 1. Count Number of Rows
  const row: Locator = page.locator("table[name='BookTable'] tbody tr");
  // Approch 1
  expect(row).toHaveCount(7);

  // Approch 2
  const rowCount: number = await row.count();
  console.log(`No of Rows in a Table : ${rowCount}`);
  expect(rowCount).toBe(7);

  // Chainig of Locator
  const Rows: Locator = table.locator("tr");
  console.log("Getting Row Count by Chaining :", await Rows.count());
});
