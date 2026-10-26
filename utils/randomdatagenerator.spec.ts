import {faker, fakerEN_IN, fakerTA_IN} from "@faker-js/faker"


export class Randomdatagenerator
{
    static getRandomFirstName()         //first name
    {
        return faker.person.firstName();
    }
    static getRandomLastName()         //last name
    {
        return faker.person.lastName();
    }
    static getRandomFullName()         //full name
    {
        return faker.person.fullName();
    }
    static getRandomEmail()           // random email
    {
        return faker.internet.email();
    }
    static getRandomPhoneNumber()     // phone number
    {
        return faker.phone.number();
    }
    static getRanPassword()           // password
    {
        return faker.internet.password();
    }
    static getRandomCountry()        // country
    {
        return faker.location.country();
    }
    static getRandomState()          // state
    {
        return faker.location.state();
    }
    static getRandonCity()          // city
    {
        return faker.location.city();
    }
    static getRandomZipcode()      // zipcode
    {
        return faker.location.zipCode();
    }
    static getRandomAddress()      // adderss
    {
        return fakerEN_IN.location.streetAddress();
    }
    static getRandomPassword(length:number = 10):string   // 10char password
    {
        return faker.internet.password({length});
    }
    static getRandomAlphanumeric(length:number):string
    {
        return faker.string.alphanumeric(length);
    }
    static getRandomNumber(length:number):string
    {
        return faker.string.numeric(length);
    }
     static getRandomUUID():string
    {
        return faker.string.uuid()
    }
}