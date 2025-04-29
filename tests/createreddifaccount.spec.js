import { test, expect } from '@playwright/test';
test(" verify Create a reddif email account",async ({page})=>{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    await page.locator("input[placeholder='Enter your full name']").fill("N Mohankumar")
    await page.locator("input[placeholder='Enter Rediffmail ID']").fill("mohan1234")
    await page.locator("input[placeholder='Enter password']").fill("Mohan1234")
    await page.locator("input[placeholder='Retype password']").fill("Mohan1234")
    await page.locator("select.day").selectOption('11') 
    await page.locator("select.middle.month").selectOption('AUG')
    await page.locator("select.year").selectOption('2002')
    await page.locator("div#div_city>div>select").selectOption("Agra")
}) 