import { test, Locator, expect } from "@playwright/test";

let url: string = "https://testautomationpractice.blogspot.com/";

test("Sorting of Drop Down", async ({ page }) => {
  await page.goto(url);

  const colorsDropDown: Locator = page.locator("#colors>option");

  let optionText: string[] = (await colorsDropDown.allTextContents()).map(
    (text) => text.trim(),
  );

  let mySet = new Set<string>();
  let duplicateText: string[] = [];

  for (const text of optionText) {
    if (mySet.has(text)) {
      duplicateText.push(text);
    } else {
      mySet.add(text);
    }
  }

  console.log(mySet);
  console.log(`Duplicate Values :  ${duplicateText}`);

  if (duplicateText.length > 0) {
    console.log("Duplicate Options Found ", duplicateText);
  } else {
    console.log("Duplicate Options not Found ", mySet);
  }
});
