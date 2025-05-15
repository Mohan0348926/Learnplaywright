import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://smarthr.allsectech.com/ess/Logout/Logout.aspx');
  await page.getByRole('link', { name: 'Click Here to login' }).click();
  await page.getByRole('textbox', { name: 'User Account' }).click();
  await page.getByRole('textbox', { name: 'User Account' }).fill('7031083');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://smarthr.allsectech.com/ess/SmartLogic/smartpage.aspx');
});