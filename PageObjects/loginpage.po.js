import { test, expect } from '@playwright/test';
 exports.loginpage=class loginpage{
    
    constructor(page){
        this.page=page
        this.logo=page.locator('//img[@alt="company-branding"]')
        this.usernameinput=page.locator('input[name="username"]')
        this.passwordinput=page.locator('input[name="password"]')
        this.loginbutton=page.locator('button[type="submit"]')
        this.loginerrormsg=page.locator('//p[text()="Invalid credentials"]')
    }

    async launchApplication(){
        await this.page.goto("/web/index.php/auth/login")
    }
    async verifylogovisibility(){
        await expect(this.logo).toBeVisible()
    }
    async  LoginwithCreds(username,password){
        await this.usernameinput.fill(username)
        await this.passwordinput.fill(password)
        await this.loginbutton.click()
    }
    async LoginwithInvalidcreds(){
        await this.usernameinput.fill(wrongusername)
        await this.passwordinput.fill(wrongpassword)
        await this.loginbutton.click()

    }
    async  VerifyLoginsucess(){
        await expect(this.page).toHaveURL("/web/index.php/dashboard/index")
    }
    async verifyErrorMsg(){
        await expect(this.loginerrormsg).toBeVisible("Invalid credentials")
    }
}