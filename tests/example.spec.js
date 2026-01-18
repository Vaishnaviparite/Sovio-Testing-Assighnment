const { test, expect } = require('@playwright/test');

test('User Registration - Happy Path', async ({ page }) => {
  await page.goto('https://dev.sovio.id/');

  await page.getByText('Sign Up').click();

  await page.fill('input[type="email"]', 'testuser123@example.com');
  await page.fill('input[type="password"]', 'Test@12345');

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page).toHaveURL(/login|dashboard/);
});

test('User Login - Happy Path', async ({ page }) => {
  await page.goto('https://dev.sovio.id/');

  await page.getByText('Sign In').click();

  await page.fill('input[type="email"]', 'testuser123@example.com');
  await page.fill('input[type="password"]', 'Test@12345');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);
});
