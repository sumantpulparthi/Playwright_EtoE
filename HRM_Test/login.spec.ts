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
  // Validating User name Text is Visible or not
  const username: Locator = page.locator(login.userName_text);
  log(`${await username.textContent()}`);
  expect(await username.isVisible());

  //Validate Password Text is visible or not
  const password: Locator = page.locator(login.password_text);
  log(`${await password.textContent()}`);
  expect(await username.isVisible());
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
});
