import { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class LoginPage {
  private readonly page: Page;
  private readonly url = URLs.LOGIN_PAGE;
  private readonly loginForm: Locator;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly rememberMeCheckbox: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginForm = page.locator('#userloginForm');
    this.usernameInput = this.loginForm.getByLabel('Username');
    this.passwordInput = this.loginForm.getByLabel('Password');
    this.rememberMeCheckbox = this.loginForm.locator('#wpRemember');
    this.loginButton = this.loginForm.getByRole('button', { name: 'Log in' });
  }

  navigate() {
    return this.page.goto(this.url);
  }

  async fillLoginForm(username: string, password: string, rememberMe = false) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    if (rememberMe) {
      await this.clickRememberMe();
    }

    return this.loginButton.click();
  }

  private fillUsername(username: string) {
    return this.usernameInput.fill(username);
  }

  private fillPassword(password: string) {
    return this.passwordInput.fill(password);
  }

  private clickRememberMe() {
    return this.rememberMeCheckbox.check();
  }
}
