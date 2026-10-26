import{Locator, Page, expect} from "@playwright/test"
import { Randomdatagenerator } from "../utils/randomdatagenerator.spec";
import { Testconfig } from "../test.config";

export class Registerpage
{
    private readonly page:Page;
    private readonly firstnamelocator:Locator;
    private readonly lastnamelocator:Locator;
    private readonly emaillocator:Locator;
    private readonly telephonelocator:Locator;
    private readonly passwordlocator:Locator;
    private readonly confirmpasswordlocator:Locator;
    private readonly subscribelocator:Locator;
    private readonly policylocator:Locator;
    private readonly continuelocator:Locator;
    private readonly confirmationmessagelocator:Locator;
    private readonly confirmationemailmessagelocator:Locator;


    constructor(page:Page)
    {
        this.page = page;
        this.firstnamelocator = page.getByPlaceholder('First Name');
        this.lastnamelocator = page.getByPlaceholder('Last Name');
        this.emaillocator = page.getByPlaceholder('E-Mail');
        this.telephonelocator = page.getByPlaceholder('Telephone');
        this.passwordlocator = page.getByPlaceholder('Password',{exact:true});
        this.confirmpasswordlocator = page.getByPlaceholder('Password Confirm',{exact:true});
        this.subscribelocator = page.getByLabel('No');
        this.policylocator = page.locator('input[name="agree"]');
        this.continuelocator = page.locator('input[type="submit"]');
        this.confirmationmessagelocator = page.getByRole('heading', { name: 'Your Account Has Been Created!' });
        this.confirmationemailmessagelocator = page.locator("//p[contains(text(),'A confirmation has been sent to the provided e-mai')]")
    }

    async firstnamemethod(firstname:string)
    {
        await this.firstnamelocator.fill(firstname);
    }
    async lastnamemethod(lastname:string)
    {
        await this.lastnamelocator.fill(lastname);
    }
    async emailmethod(email:string)
    {
        await this.emaillocator.fill(email);
    }
    async telephonemethod(telephone:string)
    {
        await this.telephonelocator.fill(telephone);
    }
    async passwordmethod(password:string)
    {
        await this.passwordlocator.fill(password);
    }
    async confirmpasswordmethod(password:string)
    {
        await this.confirmpasswordlocator.fill(password);
    }
    async subscribercheckmethod()
    {
        await this.subscribelocator.check();
    }
    async policycheckmethod()
    {
        await this.policylocator.check();
    }
    async continuebuttonmethod()
    {
        await this.continuelocator.click();
    }
    async confirmationmessagemethod()
    {
       console.log(await this.confirmationmessagelocator.innerText());
       expect(await this.confirmationmessagelocator.innerText()).toContain("Your Account Has Been Created!");
    }

    async confirmationemailmessagemethod()
    {
        console.log(await this.confirmationemailmessagelocator.innerText());
        expect(await this.confirmationemailmessagelocator.innerText()).toContain("A confirmation has been sent to the provided e-mail address.");
    }

    async accountpageerrormethod()
    {
        try
        {
            await this.confirmationmessagelocator.innerText();
            console.log("Account is registered successfully!");
            
        }
        catch (error) 
        {
         console.log("Registration action failed:", error);
        throw error;
        }
        
   } 

    async accountregistrationrandom()
    {
        await this.firstnamemethod(Randomdatagenerator.getRandomFirstName());
        await this.lastnamemethod(Randomdatagenerator.getRandomLastName());
        await this.emailmethod(Randomdatagenerator.getRandomEmail());
        await this.telephonemethod(Randomdatagenerator.getRandomPhoneNumber());
        let password = Randomdatagenerator.getRandomPassword();
        await this.passwordmethod(password);
        await this.confirmpasswordmethod(password);
        await this.subscribercheckmethod();
        await this.policycheckmethod();
        await this.continuebuttonmethod();
        await this.accountpageerrormethod();
        await this.confirmationmessagemethod();
        await this.confirmationemailmessagemethod();
    }

     async accountregistration()
    {
        await this.firstnamemethod(Testconfig.firstname);
        await this.lastnamemethod(Testconfig.lastname);
        await this.emailmethod(Testconfig.email);
        await this.telephonemethod(Testconfig.telephone);
        let password = Randomdatagenerator.getRandomPassword();
        await this.passwordmethod(password);
        await this.confirmpasswordmethod(password);
        await this.subscribercheckmethod();
        await this.policycheckmethod();
        await this.continuebuttonmethod();
        await this.accountpageerrormethod();
        await this.confirmationmessagemethod();
        await this.confirmationemailmessagemethod();
    }
}