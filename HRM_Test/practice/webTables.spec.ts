import { test, expect, Locator } from "@playwright/test";
let url: string = "https://demowebshop.tricentis.com/";

test("Comparing Methords", async ({ page }) => {
  await page.goto(url);
  const products: Locator = page.locator(".product-title");

  // 1. innerText() vs textContent()

  console.log(await products.nth(1).innerText());

  console.log(await products.nth(1).textContent());

  const productCount: number = await products.count();

  for (let i = 0; i < productCount; i++) {
    const productName: string = await products.nth(i).innerText();
    console.log(`Inner Text : ${productName}`);

    const productNames: string | null = await products.nth(i).textContent();
    console.log(`Text Content : ${productNames?.trim()}`);
  }

  // 2. allInnerText() vs allTextContent()

  const productName_InnerText = await products.allInnerTexts();
  console.log(`All Inner Text -> `, productName_InnerText);

  const productName_TextContent = await products.allTextContents();
  let producName: string[] = productName_TextContent.map((text) => text.trim());
  console.log(`All Text Content -> `, producName);

  // all()

  const productLocators: Locator[] = await products.all();
  console.log(productLocators);

  //Get Specific Locator Inner Text
  const prodName: string = await productLocators[1].innerText();
  console.log(prodName);

  // Print All Values
  console.log("-----------------Print All Locator values-------------------");
  for (let prodname of productLocators) {
    console.log(await prodname.innerText());
  }
});
