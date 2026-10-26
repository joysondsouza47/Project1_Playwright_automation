import{test,expect} from "@playwright/test"
import{Homepage} from "../pages/homepage"
import { Testconfig } from "../test.config"


test("hopmepage", async ({page})=>
{
    const homepage = new Homepage(page);


    await page.goto(Testconfig.appurl);
    expect(await homepage.homepage()).toBeTruthy();
    await homepage.Myaccountlink();
    await homepage.Registerlink();
    await homepage.Myaccountlink();
    await homepage.LoginLink();
})

