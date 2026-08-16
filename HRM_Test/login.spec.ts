import { test, expect, Locator } from "@playwright/test";
import { data } from "../utilities/configuration";
import { log } from "../utilities/common.ts";
import { login } from "../orange_Hrm_Pages/loginPage.ts";

const url = data("url");

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

  // Validate DashBoard Page
  const dashboardTitle: String = await page.title();
  expect(dashboardTitle).toMatch("OrangeHRM");
  log(`${dashboardTitle}`);
});
