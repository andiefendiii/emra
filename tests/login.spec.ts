import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/Login';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('andiemra@yopmail.com', '1234567890');
  await expect(loginPage.validateSuccessMessage).toBeVisible();
  await loginPage.logout();
  await expect(loginPage.validateLogoutSuccess).toBeVisible();
});

test('unsuccessful login using ', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('andiemral@myopmail.com', '12345');
  await expect(loginPage.validateErrorMessage).toBeVisible();
});





