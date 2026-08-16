import { test, expect, Locator } from "@playwright/test";
import { data } from "../utilities/configuration";
import { log } from "../utilities/common.ts";
import { login } from "../orange_Hrm_Pages/loginPage.ts";

/*
    Locators 
*/

const url = data("url");

test("Get By Text", async ({ page }) => {
  // Url Navigation
  await page.goto(url);
  log(`URL : ${url}`);
  //Capture Title
  const pageTitle: string = await page.title();
  log(`Page Title : ${pageTitle}`);

  // Get By Text
  const text: Locator = page.getByText(login.loginText);
  await expect(text.first()).toBeVisible();
  await expect(page.getByText(login.loginText).first()).toBeVisible();
  log(`Login Text Is Visible`);
});

test("Get By Alt Text", async ({ page }) => {
  // Url Navigation
  await page.goto(url);
  log(`URL : ${url}`);
  //Capture Title
  const pageTitle: string = await page.title();
  log(`Page Title : ${pageTitle}`);

  // Get By Text
  const text: Locator = page.getByText(login.loginText);
  await expect(text.first()).toBeVisible();
  await expect(page.getByText(login.loginText).first()).toBeVisible();
  log(`Login Text Is Visible`);
  //   await expect(
  //     page.getByText("/Welcome\s+to\s+Our\s+Store/i").first(),
  //   ).toBeVisible();

  // Get By Alt text
  // Page Logo :-  <img data-v-17f5fb62="" src="/web/images/ohrm_branding.png?v=1783336755185" alt="company-branding">
  const logo: Locator = page.getByAltText("company-branding");
  await expect(logo).toBeVisible();
  log(`Page Logo is visible`);

  // Entering User Name
  await page.locator(login.login_UserName).fill(login.loginUser);
  log(`User Name Entered : ${login.loginUser}`);
  // Entering Password
  await page.locator(login.login_Password).fill(login.loginPass);
  log(`Password Entered : ${login.loginPass}`);
});

test("Get By Role", async ({ page }) => {
  // Url Navigation
  await page.goto(url);
  log(`URL : ${url}`);
  //Capture Title
  const pageTitle: string = await page.title();
  log(`Page Title : ${pageTitle}`);

  // Get By Text
  const text: Locator = page.getByText(login.loginText);
  await expect(text.first()).toBeVisible();
  await expect(page.getByText(login.loginText).first()).toBeVisible();
  log(`Login Text Is Visible`);
  //   await expect(
  //     page.getByText("/Welcome\s+to\s+Our\s+Store/i").first(),
  //   ).toBeVisible();

  // Get By Alt text
  // Page Logo :-  <img data-v-17f5fb62="" src="/web/images/ohrm_branding.png?v=1783336755185" alt="company-branding">
  const logo: Locator = page.getByAltText("company-branding");
  await expect(logo).toBeVisible();
  log(`Page Logo is visible`);

  // Entering User Name
  await page.locator(login.login_UserName).fill(login.loginUser);
  log(`User Name Entered : ${login.loginUser}`);
  // Entering Password
  await page.locator(login.login_Password).fill(login.loginPass);
  log(`Password Entered : ${login.loginPass}`);

  // Get By Role

  //Click on Login button
  await page.getByRole("button", { name: /Login/i }).click();
  //   await page
  //     .getByRole("button", { name: new RegExp(login.login_SubmitButton, "i") })
  //     .click();

  // Validate DashBoard Page
  const dashboardTitle: String = await page.title();
  expect(dashboardTitle).toMatch("OrangeHRM");
  log(`${dashboardTitle}`);
});
