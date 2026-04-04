import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly validateSuccessMessage: Locator;
    readonly validateErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.validateSuccessMessage = page.getByRole('button', { name: 'Home' });
        this.validateErrorMessage = page.getByText('Invalid credentials');
    }

    async goto() {
        await this.page.goto('https://www.emra.chat/login');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

}