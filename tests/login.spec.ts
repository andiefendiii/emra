import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login';

test('unsuccessful login using ', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('andiemral@myopmail.com', '12345');

  await expect(loginPage.validateErrorMessage).toBeVisible();
})

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('andiemra@yopmail.com', '1234567890');

  await expect(loginPage.validateSuccessMessage).toBeVisible();
});

