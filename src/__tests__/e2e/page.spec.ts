import test, { expect } from "@playwright/test";

test("Home page should work as expected", async ({ page }) => {
  // Start from Home page
  await page.goto("http://localhost:3000/");
  // Find page title
  await expect(page.locator("h1")).toContainText("Home");
  // Find an element with the text 'About' and click on it
  await page.click("text=About");
  // The new URL should be "/about"
  await expect(page).toHaveURL("http://localhost:3000/about");
});
