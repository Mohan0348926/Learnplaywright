import { test, expect } from "@playwright/test";
exports.addemployee = class addemployee {
    constructor(page) {
        this.page = page
        this.addemployeesubmenu = page.getByText("Add Employee")
        this.firstnameinput = page.locator('//input[@name="firstName"]')
        this.lastnameinput = page.locator('//input[@name="lastName"]')
        this.savebutton = page.locator('//button[@type="submit"]')
        //this.sucessmesg = page.locator('//a[@href="/web/index.php/pim/viewPersonalDetails/empNumber/336"]')
    }
    async addemployee(firstname,lastname) {
        await this.addemployeesubmenu.click()
        await this.firstnameinput.fill(firstname)
        await this.lastnameinput.fill(lastname)
        await this.savebutton.click()
    }
    // async verifyemployeecreated(){
    //     await expect(this.sucessmesg).toBeVisible()
    // }
}