import { test, expect } from '@playwright/test';
import {loginpage} from "../PageObjects/loginpage.po";
import {Dashboard} from "../PageObjects/dashboard.po";
import {addemployee} from "../PageObjects/addemployee.po";
import logindata from "../TestData/login.json";
import addemployeedata from "../TestData/addemployee.json";

test("Verify Add Employee", async ({ page }) => {
    const login=new loginpage(page)
    const dashboard=new Dashboard(page)
    const addemp=new addemployee(page)
    await login.launchApplication()
    await login.LoginwithCreds(logindata.username,logindata.password)
    await login.VerifyLoginsucess()
    await dashboard.clickonpim()
    await addemp.addemployee(addemployeedata.firstname,addemployeedata.lastname)
    await addemp.verifyemployeecreated()

})