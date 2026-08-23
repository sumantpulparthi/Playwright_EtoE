export function data(valName: string): string {
  const ap = new App_Data();
  const value = ap[valName as keyof App_Data];

  if (typeof value !== "string") {
    throw new Error(`Property "${valName}" not found or is not a string.`);
  }

  return value;
}

export class App_Data {
  url: string =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
}
