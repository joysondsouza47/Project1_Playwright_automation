import { test, expect } from '@playwright/test';

test('Validate GET API @api @e2e', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status()).toBe(200);


    console.log(response.status());
    console.log(await response.json());
    console.log(await response.text());
    // console.log(response.headers());
    console.log(response.ok());


});
