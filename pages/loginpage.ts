import{Page,Locator} from "@playwright/test"
import { Testconfig } from "../test.config";



export class Loginlogoutpage
{
    private readonly page:Page;
    private readonly loginemaillocator:Locator;
    private readonly loginpasswordlocator : Locator;
    private readonly loginbuttonlocator: Locator;
    private readonly logoutbuttonlocator:Locator;
    private readonly myaccountlocator:Locator;


    constructor(page:Page)
    {
        this.page = page;
        this.loginemaillocator = page.getByPlaceholder('E-Mail Address');
        this.loginpasswordlocator = page.getByPlaceholder('Password', { exact: true });
        this.loginbuttonlocator = page.locator("//input[@value='Login']");
        this.logoutbuttonlocator = page.locator('a').filter({ hasText: 'Logout' }).first();
        this.myaccountlocator = page.locator('a').filter({ hasText: 'My Account' }).first()
    }


    async loginmethod(email:string,password:string)
    {
        await this.loginemaillocator.fill(email);
        await this.loginpasswordlocator.fill(password);
        await this.loginbuttonlocator.click();
    }

    async Loginpagetitlemethod()
    {
        return await this.page.title();
    }

    async logoutmethod()
    {
        await this.loginmethod(Testconfig.email,Testconfig.password);
        if(await this.Loginpagetitlemethod() === "My Account")
        {
            await this.myaccountlocator.click();
            await this.logoutbuttonlocator.click();
        }
        else
        {
            console.log("You are not in the login page to do the logout!")
        }
    }

    async Logoutpagetitlemethod()
    {
        return await this.page.title();
    }

}