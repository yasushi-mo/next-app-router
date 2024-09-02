import test, { expect } from "@playwright/test";

test("About page should work as expected", async ({ page }) => {
  // Start from About page
  await page.goto("http://localhost:3000/about");
  // Find page title
  await expect(page.locator("h1")).toContainText("About");
  // Find an element with the text 'Home' and click on it
  await page.click("text=Home");
  // The new URL should be "/"
  await expect(page).toHaveURL("http://localhost:3000/");
});
