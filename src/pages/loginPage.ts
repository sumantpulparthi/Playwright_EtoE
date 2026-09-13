// export function login_data(valueName: string) {
//   const ld = new login();
//   const val = ld[valueName as keyof login];
//   {
//     if (typeof val !== "string") {
//       throw new Error(`Property "${valueName}" not found or is not a string.`);
//     }

//     return val;
//   }
// }

import { expect, Locator, Page } from "@playwright/test";
import { log } from "../utils/common.ts";

export class login {
  // page: Page;
  // constructor(page: Page) {
  //   this.page = page;
  // }

  public readonly loginUser = "Admin";
  public readonly loginPass = "admin123";

  public readonly loginText = "Login";
  public readonly loginText_Case = "LoGin";

  public readonly userName_text = "//p[contains(.,'Username :')]";
  public readonly password_text = "//p[contains(.,'Password :')]";

  public readonly login_UserName = "//input[@name='username']";
  public readonly login_Password = "//input[@name='password']";

  public readonly login_SubmitButton = "Login";

  getUserName() {}

  async loginUserNamePassword(page: Page, user?: string, pass?: string) {
    if (user != undefined && pass != undefined) {
      // Entering Username & Password
      await page.locator(this.login_UserName).fill(user);
      await page.locator(this.login_Password).fill(pass);
      log(`User Name & Password Entered : ${user} ${pass}`);

      // Clicked on Login Button
      await page.getByRole("button", { name: /Login/i }).click();
      log(`Clicked on Login Button`);

      await login.errorMesg(page);
    }
  }

  // Error Message Capture & Validation
  static async errorMesg(page: Page) {
    // Element Locate
    const loginError: Locator = page.locator(
      "//*[text()='Invalid credentials']",
    );

    // Check Error Message is Enable Visiblity
    await expect(loginError).toBeVisible();
    log(`Error Message Displayed`);
    // Check Error Message is Enable
    await expect(loginError).toBeEnabled();
    log(`Error Message Enabled`);

    // Capture Message
    const message: string | null = await loginError.textContent();
    log(`Error Message : ${message?.trim()}`);

    // Validate Message
    expect(message).toBe("Invalid credentials");
    log(`Error Message Validate`);
  }
}
