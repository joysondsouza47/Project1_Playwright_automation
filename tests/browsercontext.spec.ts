import{test,expect} from "@playwright/test"
import{Testconfig} from "../test.config.ts"
import { Loginlogoutpage } from "../pages/loginpage.ts";
import { Homepage } from "../pages/homepage.ts";
import 'dotenv/config';


test("admin and user login",async({browser})=>
{

    const email1 = process.env.USER_EMAIL1;
    const email2 = process.env.USER_EMAIL2;
    const password = process.env.USER_PASSWORD;

    if (!email1 || !password || !email2) {
    throw new Error('Login credentials are missing');
  }
     
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
    await adminloginpage.loginmethod(email1,password);

    await userPage.goto(Testconfig.appurl);
    await userhomepage.Myaccountlink();
    await userhomepage.LoginLink();
    await userloginpage.loginmethod(email2,password);
}
)