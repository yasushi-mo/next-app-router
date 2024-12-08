import test, { expect } from "@playwright/test";

test("Home page should work as expected", async ({ page }) => {
  // Start from Home page
  await page.goto("http://localhost:3000/");
  // Find page heading
  await expect(page.getByRole("heading", { name: "Home" })).toBeVisible();
  // Find link  with the text 'About' and click on it
  const linkToAbout = page.getByRole("link", { name: "About" });
  await expect(linkToAbout).toBeVisible();
  await linkToAbout.click();

  // The new URL should be "/about"
  await expect(page).toHaveURL("http://localhost:3000/about");
  // Find page heading
  await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
  // Find link  with the text 'Home' and click on it
  const linkToHome = page.getByRole("link", { name: "Home" });
  await expect(linkToHome).toBeVisible();
  await linkToHome.click();

  // The new URL should be "/"
  await expect(page).toHaveURL("http://localhost:3000/");
});
