import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

// load environment variables from .env file
dotenv.config();

test.describe("login", () => {
  test("login successfully with valid credentials", async ({ page }) => {
    // Navigate to the login page
    await page.goto("/login/");

    // Fill in email field with test credential
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);

    // Fill in password field with test credentials
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // Click the login button
    await page.getByRole("button", { name: "Login" }).click();

    // Verify successful login by checking for logout button visibility
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("show error message with invalid credentails", async ({ page }) => {
    // Navigate to login page
    await page.goto("/login/");

    // Fill in email field with invalid email
    await page.locator('input[name="email"]').fill("invalidemail@example.com");

    // Fill in the password field with invalid password
    await page.locator('input[name="password"]').fill("wrongpassword");

    // Click the login button
    await page.getByRole("button", { name: "Login" }).click();

    // Wait for and verify error message appears
    await expect(page.locator("#message-container")).toBeVisible();

    // Verify error message contains appropriate text | NB! could also use less specific but more resilient toBeInViewport() for the #message-container |
    await expect(page.locator("#message-container")).toContainText(
      "Please enter a noroff.no or stud.noroff.no email address.",
    );
  });
});
