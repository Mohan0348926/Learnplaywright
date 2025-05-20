import { test, expect } from '@playwright/test';
import {loginpage}from "../PageObjects/loginpage.po"
import logindata from "../TestData/login.json"
import { beforeEach } from 'node:test';

let page;
let login;
test.beforeEach(async ({browser})=>{
    page=await browser.newPage()
    login=new loginpage(page)
    await login.launchApplication()
    await login.verifylogovisibility()

})
 test("Login with valid credintials" ,async() =>{
    await login.LoginwithCreds(logindata.username,logindata.password)
    await login.VerifyLoginsucess()
 })

 test("Login with valid username invalid password" ,async() =>{
    await login.LoginwithCreds(logindata.username,logindata.wrongpassword)
    await login.verifyErrorMsg()
 })
  
 test("Login with invalid username valid password" ,async() =>{
    await login.LoginwithCreds(logindata.wrongusername,logindata.password)
    await login.verifyErrorMsg()
 })
 