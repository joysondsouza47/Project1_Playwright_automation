import{test,expect} from "@playwright/test"
import{Testconfig} from "../test.config.ts"
import { Loginlogoutpage } from "../pages/loginpage.ts";
import { Homepage } from "../pages/homepage.ts";


test("admin and user login",async({browser})=>
{
     
    const adminContext = await browser.newContext();
    const adminPage = await adminContext.newPage();

    const userContext = await browser.newContext();
    const userPage = await userContext.newPage();

    const adminloginpage = new Loginlogoutpage(adminPage);
    const userloginpage = new Loginlogoutpage(userPage);
    const adminhomepage = new Homepage(adminPage);
    const userhomepage = new Homepage(userPage);

    await adminPage.goto(Testconfig.appurl);
    await adminhomepage.Myaccountlink();
    await adminhomepage.LoginLink();
    await adminloginpage.loginmethod(Testconfig.email1,Testconfig.password);

    await userPage.goto(Testconfig.appurl);
    await userhomepage.Myaccountlink();
    await userhomepage.LoginLink();
    await userloginpage.loginmethod(Testconfig.email2,Testconfig.password);
}
)