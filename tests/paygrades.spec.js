
const{test,expect} =require('@playwright/test');

const creds={
    username:"Admin",
    password:"admin123",
}


const paygrade={
    name1:"Grade1",
    name2:"Grade2",
    name3:"Grade3",
}

for (let name in paygrade){

test(`Verify Add paygrade with mandatory fields - ${paygrade[name]}`, async ({page})=>{

await page.goto('/web/index.php/auth/login');
//enter username and password
await page.locator("input[name='username']").fill(creds.username)
await page.locator("input[type='password']").fill(creds.password)
//click on the login button
await page.locator("button[type='submit']").click()
//Assertions means Verification
await expect(page).toHaveURL("/web/index.php/dashboard/index");
//menu item
await expect (page.locator('ul[class="oxd-main-menu"]')).toBeVisible();
//click on admin module
await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
//click on the job
await page.locator("//li[contains(.,'Job')]").click();
//click on paygrades
await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[2]").click()
//click on add button
await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
//give the paygrade name
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(paygrade[name])
//save button
await page.locator("//button[@type='submit']").click()
})
}
