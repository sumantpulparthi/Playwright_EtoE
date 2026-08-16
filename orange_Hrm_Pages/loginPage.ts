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

import { test, expect, Locator, Page } from "@playwright/test";
export class login {
  static loginUser = "Admin";
  static loginPass = "admin123";

  static loginText = "Login";
  static loginText_Case = "LoGin";

  static userName_text = "//p[contains(.,'Username :')]";
  static password_text = "//p[contains(.,'Password :')]";

  static login_UserName = "//input[@name='username']";
  static login_Password = "//input[@name='password']";

  static login_SubmitButton = "Login";

  getUserName() {}
}
