import { test, expect, Locator } from "@playwright/test";
let url: string = "https://testautomationpractice.blogspot.com/";

test("Sorting of Drop Down", async ({ page }) => {
  await page.goto(url);

  const animalSortList: Locator = page.locator("#animals>option");

  // Print All Text
  let myAnumalList: string[] = await animalSortList.allInnerTexts();
  let index: number = 1;
  console.log("Animal List ->");
  for (let lis of myAnumalList) {
    console.log(`${index}. ${lis}`);
    index++;
  }

  const animalText: string[] = (await animalSortList.allTextContents()).map(
    (text) => text.trim(),
  );

  const originalList: string[] = animalText;
  const sortedList: string[] = animalText.sort();
  console.log(` Original List : ${originalList}`);
  console.log(` Sorted List : ${sortedList}`);

  // Validate List Sorted or Not
  expect(originalList).toEqual(sortedList);
});

test("Sorting of Drop Down Spred Operator", async ({ page }) => {
  await page.goto(url);

  const colorsDropDown: Locator = page.locator("#colors>option");

  let optionText: string[] = (await colorsDropDown.allTextContents()).map(
    (text) => text.trim(),
  );

  let originalText: string[] = [...optionText];
  let sortedText: string[] = [...optionText].sort();

  console.log(` Original List : ${originalText}`);
  console.log(` Sorted List : ${sortedText}`);

  // Validate List Sorted or Not
  // expect(originalText).toEqual(sortedText);
});
