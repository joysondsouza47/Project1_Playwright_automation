import { test, expect } from '@playwright/test';

const loginURL =
    'https://tutorialsninja.com/demo/index.php?route=account/login';

test('Login API - Valid credentials @api', async ({ request }) => {

    const response = await request.post(loginURL, {
        form: {
            email: 'joysondsouza@gmail.com',
            password: 'joyson1234'
        },
        maxRedirects: 0
    });

    console.log('Status:', response.status());
    console.log('Location:', response.headers()['location']);

    // Successful login should redirect to the account page
    expect(response.status()).toBe(302);

    expect(response.headers()['location']).toContain('route=account/account');
});

test('Login API - Invalid credentials @api', async ({ request }) => {

    const response = await request.post(loginURL, {
        form: {
            email: 'invaliduser123@gmail.com',
            password: 'WrongPassword123'
        },
        maxRedirects: 0
    });

    const responseBody = await response.text();

    console.log('Status:', response.status());
    console.log('Response:', responseBody);

    expect(response.status()).toBe(200);

    expect(responseBody).toContain(
        'Warning: No match for E-Mail Address and/or Password.'
    );
});