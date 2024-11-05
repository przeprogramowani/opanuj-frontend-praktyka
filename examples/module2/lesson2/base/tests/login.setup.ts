import test, { expect } from '@playwright/test';
import { STORAGE_STATE } from '../../../../playwright.config';
import { LoginPage } from '../pages/login.page';
import { MainPage } from '../pages/main.page';
import { URLs } from '../utils/constants';

test('login into wiki account', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToLoginPage();

  const loginPage = new LoginPage(page);
  await loginPage.fillLoginForm(process.env.USERNAME!, process.env.PASSWORD!);

  await expect(page).toHaveURL(URLs.MAIN_PAGE);
  await expect(mainPage.getNavigation()).toContainText(process.env.USERNAME!, {
    ignoreCase: true,
  });

  await page.context().storageState({ path: STORAGE_STATE });
});
