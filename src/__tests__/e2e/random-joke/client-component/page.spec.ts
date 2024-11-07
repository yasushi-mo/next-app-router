import test, { expect } from "@playwright/test";

test("API response should be displayed as expected", async ({ page }) => {
  // Mock the api call before navigating
  await page.route(
    "https://official-joke-api.appspot.com/random_joke",
    async (route) => {
      const json = {
        id: 8,
        type: "general",
        setup: "How many lips does a flower have?",
        punchline: "Tulips",
      };
      await route.fulfill({ json });
    }
  );

  // Go to the page
  await page.goto("http://localhost:3000/random-joke/client-component");

  // API response is visible
  await expect(page.getByRole("heading", { name: "general" })).toBeVisible();
  await expect(
    page.getByText("How many lips does a flower have?")
  ).toBeVisible();
  await expect(page.getByText("Tulips")).toBeVisible();
});
