import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("navigate from home page to venue details", async ({ page }) => {
    // Navigate to homepage:
    await page.goto("/");

    // Wait for venue list to load
    await page.locator("#venue-container").waitFor();

    // Click the first venue
    await page.click("#venue-container a:first-child");

    // Verify venue details page heading
    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
