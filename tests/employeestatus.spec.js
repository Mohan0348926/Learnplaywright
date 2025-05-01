import { test, expect } from '@playwright/test';

  const creds={
    username:"Admin",
    password:"admin123",
 }
 const employer = {

      empl1 : "fulltime",
      empl2 : "contract",
      empl3 : "parttime",
      empl4 : "intership",
 }


for(let emp in employer){

test(`data driven testing   - ${employer[emp]}`,async ({page}) => {

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   await page.locator("input[name='username']").fill(creds.username)

   await page.locator("input[type='password']").fill(creds.password)

   await page.locator("button[type='submit']").click()

   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

   await expect(page.locator('ul[class="oxd-main-menu"]')).toBeVisible()
   await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

   
   await page.locator("//li[contains(.,'Job')]").click();
   await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[3]").click();
   await page.locator("i.oxd-icon.bi-plus.oxd-button-icon").click();

   await page.locator("//label[normalize-space(text())='Name']/following::input").fill(employer[emp]);
   await page.locator("(//div[@class='oxd-form-actions']//button)[2]").click();
   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus")
})
}