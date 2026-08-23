import { test, Locator, expect } from "@playwright/test";

let url: string = "https://testautomationpractice.blogspot.com/";

test("Single Select DropDown", async ({ page }) => {
  await page.goto(url);

  // 1 -> Select By Visible Text
  const countryDropDown: Locator = page.locator("#country");

  //Check Visbility Drop Down Element
  await expect(countryDropDown).toBeVisible();
  expect(await countryDropDown.isVisible()).toBe(true);

  //Check Drop Down Element is Enable
  await expect(countryDropDown).toBeEnabled();

  // Selecing by Visible Value
  countryDropDown.selectOption("Canada");
  console.log("DropDown Value Selected By Visible Text");

  //Hard Wait of 5 Seconds
  await page.waitForTimeout(5000);

  // 2 -> Select By Value Attribute
  countryDropDown.selectOption({ value: "uk" });
  console.log("DropDown Value Selected by Value Attribute");

  //Hard Wait of 5 Seconds
  await page.waitForTimeout(5000);

  // 3 -> Select By label Attribute
  countryDropDown.selectOption({ label: "Germany" });
  console.log("DropDown Value Selected by label Attribute");

  //Hard Wait of 5 Seconds
  await page.waitForTimeout(5000);

  // 4 -> Select By index
  countryDropDown.selectOption({ index: 6 });
  console.log("DropDown Value Selected by Index");

  //Hard Wait of 5 Seconds
  await page.waitForTimeout(5000);
});

test("Validate DropDown Count", async ({ page }) => {
  await page.goto(url);

  const countryDropDown: Locator = page.locator("#country>option");

  // Get The Count of DropDown values
  const countryCount: number = await countryDropDown.count();
  console.log(`Country DropDown Values Count ${countryCount}`);

  // Validate DropDown Value Count
  await expect(countryDropDown).toHaveCount(10);
});
