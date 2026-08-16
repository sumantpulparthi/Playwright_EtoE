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
export class login {
  static loginUser = "Admin";
  static loginPass = "admin123";

  static userName_text = "//p[contains(.,'Username :')]";
  static password_text = "//p[contains(.,'Password :')]";

  static login_UserName = "//input[@name='username']";
  static login_Password = "//input[@name='password']";
}
