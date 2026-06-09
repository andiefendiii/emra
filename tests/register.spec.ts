import {test, expect} from '@playwright/test';
import {RegisterPage} from '../pages/Register';
import { faker } from '@faker-js/faker';

let email : string
email = faker.internet.email(),


test('successful register', async ({ page }) => {
  await page.goto('https://www.emra.chat/login');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
 await page.getByRole('textbox', { name: 'Email' }).fill(email+`@gmail.com`);

//   await page.getByRole('textbox', { name: 'Email' }).fill(email+`+`+Date.now()+`@gmail.com`);

  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('1234567890');
  await page.waitForTimeout(3000); 

  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('1234567890');
  await page.waitForTimeout(3000); 
  await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('textbox', { name: 'Full Name' }).click();
//   await page.getByRole('textbox', { name: 'Full Name' }).fill('nama orang');
//   await page.getByRole('combobox').click();
//   await page.getByLabel('Suggestions').getByText('Indonesia (+62)').click();
//   await page.getByRole('textbox', { name: 'Phone Number' }).click();
//   await page.getByRole('textbox', { name: 'Phone Number' }).click();
//   await page.getByRole('textbox', { name: 'Phone Number' }).fill('81200000001');
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('textbox', { name: 'Company Name' }).click();
//   await page.getByRole('textbox', { name: 'Company Name' }).fill('PT Emra');
//   await page.getByLabel('Industry').selectOption('education');
//   await page.getByLabel('Company Size').selectOption('51-200');
//   await page.getByRole('button', { name: 'Create Account' }).click();
//   await expect(page.getByRole('heading', { name: 'Emra' })).toBeVisible();
});