import{test,expect} from "@playwright/test"
import { Homepage } from "../pages/homepage"
import { Registerpage } from "../pages/registerpage"
import { Testconfig} from "../test.config"

let homepage:Homepage;
let registerpage:Registerpage;


test.beforeEach("Test Url", async({page})=>
{
    await page.goto(Testconfig.appurl);
    homepage = new Homepage(page);
    registerpage = new Registerpage(page);

})


test("TC_RF_001", async ({page})=>
{
        //homepage access
        await homepage.Myaccountlink();
        await homepage.Registerlink();
        await registerpage.accountregistrationrandom();
        expect(await registerpage.confirmationmessagemethod()).toBe("Your Account Has Been Created!");
        expect(await registerpage.confirmationemailmessagemethod()).toContain("A confirmation has been sent to the provided e-mail address.")
})

test.skip("Account register method 2", async ({page})=>
{
        //homepage access
        await homepage.Myaccountlink();
        await homepage.Registerlink();
        await registerpage.accountregistrationadmin();
})


//