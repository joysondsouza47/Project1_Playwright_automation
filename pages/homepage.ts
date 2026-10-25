import{Locator, Page}  from "@playwright/test"
export class Homepage
{
    private readonly page:Page;
    private readonly  Myaccountlocator: Locator;
    private readonly  Registerlocator: Locator;
    private readonly  Loginlocator: Locator;

    
    constructor(page:Page)
    {
        this.page = page;
        this.Myaccountlocator = page.locator('span').filter({hasText:"My Account"});
        this.Registerlocator = page.getByRole('link', { name: 'Register' });
        this.Loginlocator = page.locator('a').filter({ hasText: 'Login' }).first();
    }
    

    async homepage()
    {
        const pagetitle = await this.page.title();
        if(pagetitle==="Your Store")
        {
            return true;
        }
        return false;
        
    }

    async Myaccountlink()
    {
        await this.Myaccountlocator.click();
    }

    async Registerlink()
    {
        await this.Registerlocator.click();
    }

    async LoginLink()
    {
        await this.Loginlocator.click();
    }


}