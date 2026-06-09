import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly validateSuccessMessage: Locator;
    readonly validateErrorMessage: Locator;
    readonly menuProfile: Locator;
    readonly buttonLogout: Locator;
    readonly validateLogoutSuccess: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.validateSuccessMessage = page.getByRole('button', { name: 'Home' });
        this.validateErrorMessage = page.getByText('Invalid credentials');

        this.menuProfile = page.getByRole('button', { name: 'Andi Efendi andiemra@yopmail.' });
        this.buttonLogout = page.getByRole('menuitem', { name: 'Logout' });
        this.validateLogoutSuccess = page.getByText('Welcome Back');
    
    }

    async goto() {
        await this.page.goto('https://www.emra.chat/login');
    };

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    };

    async logout() {
        await this.menuProfile.click();
        await this.buttonLogout.click();
    };
}