import { test, expect } from "@playwright/test";
import { data } from "../utilities/configuration";
import { log } from "../utilities/common.ts";
import { login } from "../orange_Hrm_Pages/loginPage.ts";

const url = data("url");

test("Login to Orange HRM", async ({ page }) => {
  await page.goto(url);
  log(`URL : ${url}`);
  const pageTitle: string = await page.title();
  log(`Page Title : ${pageTitle}`);
  await page.locator(login.login_UserName).fill(login.loginUser);
  log(`User Entered : ${login.loginUser}`);
  await page.locator(login.login_Password).fill(login.loginPass);
  log(`User Entered : ${login.loginPass}`);
});
