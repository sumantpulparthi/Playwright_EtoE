import { test, expect, Locator } from "@playwright/test";
import { data } from "../src/utils/configuration.ts";
import { log } from "../src/utils/common.ts";
import { login } from "../src/pages/loginPage.ts";

const url = data("url");
const lp = new login();

test("validate Login Fields", async ({ page }) => {
  // Url Navigation
  await page.goto(url);
  log(`URL : ${url}`);
  //Capture Title
  const pageTitle: string = await page.title();
  log(`Page Title : ${pageTitle}`);

  //Validate Page Logo
  const logo: Locator = page.getByAltText("company-branding");
  await expect(logo).toBeVisible();
  log(`Page Logo is visible`);

  // Get By Text
  const text: Locator = page.getByText(login.loginText);
  await expect(text.first()).toBeVisible();
  await expect(page.getByText(login.loginText).first()).toBeVisible();
  log(`Login Text Is Visible`);

  // Validating User name Text is Visible or not
  const username: Locator = page.locator(login.userName_text);
  log(`${await username.textContent()}`);
  expect(await username.isVisible());
  await expect(username).toBeVisible();

  //Validate Password Text is visible or not
  const password: Locator = page.locator(login.password_text);
  log(`${await password.textContent()}`);
  expect(await password.isVisible());
  await expect(password).toBeVisible();
});

test("Login to Orange HRM", async ({ page }) => {
  // Url Navigation
  await page.goto(url);
  log(`URL : ${url}`);

  //Capture Title
  const pageTitle: string = await page.title();
  log(`Page Title : ${pageTitle}`);

  // Entering User Name
  await page.locator(login.login_UserName).fill(login.loginUser);
  log(`User Name Entered : ${login.loginUser}`);

  // Entering Password
  await page.locator(login.login_Password).fill(login.loginPass);
  log(`Password Entered : ${login.loginPass}`);

  //Click on Login button
  await page.getByRole("button", { name: /Login/i }).click();
  //   await page
  //     .getByRole("button", { name: new RegExp(login.login_SubmitButton, "i") })
  //     .click();

  await page.waitForLoadState("load"); // or 'domcontentloaded'

  // Validate DashBoard Page
  const dashboardTitle: String = await page.title();
  expect(dashboardTitle).toMatch("OrangeHRM");
  log(`${dashboardTitle}`);
});

test.only("Login with Invalid Credentinals", async ({ page }) => {
  // Url Navigation
  await page.goto(url);
  log(`URL : ${url}`);

  //Capture Title
  const pageTitle: string = await page.title();
  log(`Page Title : ${pageTitle}`);

  // Calling a methord
  lp.loginUserNamePassword(page, "Sumant", "Test");

  await page.waitForLoadState("load"); // or 'domcontentloaded'

  //Hared Wait of 5 Sec
  await page.waitForTimeout(5_000);
});
