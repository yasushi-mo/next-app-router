import { test, expect } from "@playwright/test";

test("displays mock data from API", async ({ page }) => {
  await page.route(
    "https://official-joke-api.appspot.com/random_joke",
    (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          type: "general",
          setup: "Where do hamburgers go to dance?",
          punchline: "The meat-ball.",
          id: 285,
        }),
      })
  );

  await page.goto("http://localhost:3000/random-joke/server-component");

  await expect(
    page.getByText("Where do hamburgers go to dance?")
  ).toBeVisible();
});
