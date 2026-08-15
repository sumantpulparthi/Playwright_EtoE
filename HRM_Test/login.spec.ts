import { test, expect } from "@playwright/test";
import { data } from "../utilities/configuration";
import { log } from "../utilities/common.ts";

const url = data("url");

test("Login to Orange HRM", async ({ page }) => {
  await page.goto(url);
  log(`URL : ${url}`);
  const pageTitle: string = await page.title();
  log(`Page Title : ${pageTitle}`);
});
