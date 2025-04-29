import { test, expect } from '@playwright/test';
test("Verify login with valid 1 credintials",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/")
    await page.locator("input[name='user-name']").fill("standard_user")
    await page.locator("input[name='password']").fill("secret_sauce")
    await page.locator("input[type='submit']").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
})
test("Verify login with valid 2 credintials",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/")
    await page.locator("input[name='user-name']").fill("locked_out_user")
    await page.locator("input[name='password']").fill("secret_sauce")
    await page.locator("input[type='submit']").click()
    await expect(page.locator("h3[data-test='error']")).toBeVisible();
})
test("Verify login with valid 3 credintials",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/")
    await page.locator("input[name='user-name']").fill("problem_user")
    await page.locator("input[name='password']").fill("secret_sauce")
    await page.locator("input[type='submit']").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
})
test("Verify login with valid 4 credintials",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/")
    await page.locator("input[name='user-name']").fill("performance_glitch_user")
    await page.locator("input[name='password']").fill("secret_sauce")
    await page.locator("input[type='submit']").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
})