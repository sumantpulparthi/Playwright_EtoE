import { test, expect, Locator } from "@playwright/test";

let url: string = "https://testautomationpractice.blogspot.com/";

test("Enter Data in Input Text Box", async ({ page }) => {
  await page.goto(url);
  const nameTextBox: Locator = page.locator("#name");

  // Validate Element Visiblity
  await expect(nameTextBox).toBeVisible();
  // Validate Element Enable
  await expect(nameTextBox).toBeEnabled();

  // Get Max Value that Field will Accept
  let nameMaxLength: string | null =
    await nameTextBox.getAttribute("maxlength"); // here we neeed to pass Attribute Name

  // Validation of Max Length
  expect(nameMaxLength).toBe("15");

  // Enter data
  await nameTextBox.fill("Sumant");

  // Capture Entered Value from Input Box
  let enteredValuelet: string = await nameTextBox.inputValue();

  console.log(`Entered Value in Name Input Box : `, enteredValuelet);

  // Validate What we Entered
  expect(enteredValuelet).toBe("Sumant");

  //Hared Wait of 3 Sec
  await page.waitForTimeout(3000);
});

test("Action On Radio Button", async ({ page }) => {
  await page.goto(url);
  const maleRadio: Locator = page.locator("#male");

  // Validate Element Visiblity
  await expect(maleRadio).toBeVisible();
  // Validate Element Enable
  await expect(maleRadio).toBeEnabled();
  // Radio Button is Selected or Not
  expect(await maleRadio.isChecked()).toBe(false);

  // To Select Radio Button
  await maleRadio.check();

  // Radio Button is Selected or Not
  expect(await maleRadio.isChecked()).toBe(true);
  await expect(maleRadio).toBeChecked(); // Most Widly used

  //Hared Wait of 3 Sec
  await page.waitForTimeout(3000);
});

test("Action On Check Boxes", async ({ page }) => {
  await page.goto(url);

  let sundayCheckBox: Locator = page.locator("#sunday");

  // Check that Check Box is not selected
  expect(await sundayCheckBox.isChecked()).toBe(false);

  //Select That Check Box
  await sundayCheckBox.check();

  // Check that Check Box is selected
  expect(await sundayCheckBox.isChecked()).toBe(true);

  // Multiple Check Boxes
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "friday",
    "Saturday",
  ];

  const checkBoxes: Locator[] = days.map((index) => page.getByLabel(index));

  //Number of Check Boxs
  expect(checkBoxes.length).toBe(7);

  //Select all Check Boxes
  for (const checkBox of checkBoxes) {
    await checkBox.check();
    await expect(checkBox).toBeChecked();
  }

  //Hared Wait of 3 Sec
  await page.waitForTimeout(3000);

  // Uncheck Last 3 Check Boxes
  for (const checkBox of checkBoxes.slice(-3)) {
    await checkBox.uncheck();
    await expect(checkBox).not.toBeChecked();
  }

  //Hared Wait of 3 Sec
  await page.waitForTimeout(3000);

  //Toggle CheckBoxes : If Checked , uncheked ; if Unchecked , Check ; Assert State
  for (const checkBox of checkBoxes) {
    const checkResult: boolean = await checkBox.isChecked();
    if (checkResult) {
      // If Checked
      await checkBox.uncheck();
      await expect(checkBox).not.toBeChecked();
    } else {
      // If not Checked
      await checkBox.check();
      await expect(checkBox).toBeChecked();
    }
  }

  //Hared Wait of 3 Sec
  await page.waitForTimeout(3000);

  //Select Random Check Boxes
  const indexs: number[] = [1, 3, 6];
  for (const i of indexs) {
    await checkBoxes[i].check();
    await expect(checkBoxes[i]).toBeChecked();
  }

  //Hared Wait of 3 Sec
  await page.waitForTimeout(3000);

  // Select BY Label Text
  const weekDayName: string = "Friday";

  for (const label of days) {
    if (label.toLowerCase() === weekDayName.toLowerCase()) {
      const checkBox = page.getByLabel(label);
      await checkBox.check();
      await expect(checkBox).toBeChecked();
    }
  }

  //Hared Wait of 3 Sec
  await page.waitForTimeout(3000);
});
