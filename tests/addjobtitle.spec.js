  import { test, expect } from '@playwright/test';
  test("verify Add job title with mandatory fields",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //login to the application
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.locator('a[href="/web/index/.php/admin/viewAdminModule"]').click();
    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.locator("//ul[@role='menu']//li[1]").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList");
    await page.locator("//button[contains(.,'Add')]").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")
  })
