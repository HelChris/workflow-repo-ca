import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("navigate from home page to venue details", async ({ page }) => {
    //nav to homepage:
    await page.goto("/index.html");

    //wait for venue list to load
    await page.locator("#venue-container").waitFor();

    // clicks the first venue
    await page.locator("#venue-container a").first().click();

    //wait for venue details page to load
    await page.waitForURL("**/venue/**");
    //verifies the words "venue details" is in the heading
    await expect(
      page.getByRole("heading", { name: "Venue details" }),
    ).toBeVisible();
  });
});
