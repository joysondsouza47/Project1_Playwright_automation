import {test,expect} from "@playwright/test"
import {Testconfig} from "../test.config"
import {Homepage} from "../pages/homepage"
import {Loginlogoutpage} from "../pages/loginpage";


let homepage:Homepage;
let loginlogoutpage:Loginlogoutpage;
const loginpagetitle = "My Account";
const logoutpagetitle = "Account Logout";

test.beforeEach("URL and class objects", async ({page})=>
{
    
    homepage = new Homepage(page);
    loginlogoutpage = new Loginlogoutpage(page);
    //url
    await page.goto(Testconfig.appurl);
    //homepage
    await homepage.Myaccountlink();
    await homepage.LoginLink();

})

test("login test",async({page})=>
{
    //login page access
    await loginlogoutpage.loginmethod(Testconfig.email,Testconfig.password);
    //login check
    expect(await loginlogoutpage.Loginpagetitlemethod()).toBe(loginpagetitle)
    console.log("login successful!");
})

test("logout test",async({page})=>
{
    //logout page
    await loginlogoutpage.logoutmethod();
    expect(await loginlogoutpage.Loginpagetitlemethod()).toBe(logoutpagetitle)
    console.log("Logout successful!")
})