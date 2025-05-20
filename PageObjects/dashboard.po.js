import { test, expect } from '@playwright/test';
exports.Dashboard = class Dashboard{
    constructor(page){
         this.page=page
         this.pim=page.locator('a[href="/web/index.php/pim/viewPimModule"]')
    }
    async clickonpim(){
        await this.pim.click()
    }
   

}