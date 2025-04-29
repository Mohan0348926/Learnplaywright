import { test, expect } from '@playwright/test';
test("Verify login with valid credintials",async({page})=>{
    username="Admin"
    password="admin123"
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill(username)
    await page.locator("input[type='password']").fill(password)
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
}) 

test("Verify login with valid Username invalid password",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("admin1233464y")
    await page.locator("button[type='submit']").click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
}) 

test("Verify login with invalid Username valid password",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("Adminkcmfkdjf")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
}) 
 
test("Verify login with invalid Username invalid password",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("Adminweu")
    await page.locator("input[type='password']").fill("admin1233464y")
    await page.locator("button[type='submit']").click()
    //await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
    await expect(page.locator("//p[text()='Invalid credentials']")).toHaveText("Invalid credentials")
}) 
