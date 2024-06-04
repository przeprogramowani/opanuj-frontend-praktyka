import { test as baseTest, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { LoginPage } from './pages/login.page';
import { MainPage } from './pages/main.page';
import { acquireAccount } from './utils/acquire-account';
import { URLs } from './utils/constants';

export * from '@playwright/test';
export const test = baseTest.extend<object, { workerStorageState: string }>({
  // Współdziel stan sesji pomiędzy wszystkimi testami w ramach jednego workera.
  storageState: ({ workerStorageState }, use) => use(workerStorageState),

  // Wykonaj uwierzytelnianie dla każdego z workerów.
  workerStorageState: [
    async ({ browser }, use) => {
      // parallelIndex służy unikalnego identyfikatora dla każdego pracownika.
      const id = test.info().parallelIndex;

      if (id >= 2) {
        // Ograniczamy liczbę obsługiwanych workerów do dwóch ze względu na brak możliwości tworzenia nowych kont przez API.
        throw new Error('This example project only supports two workers');
      }

      const fileName = path.resolve(
        test.info().project.outputDir,
        `.auth/${id}.json`
      );

      if (fs.existsSync(fileName)) {
        // Ponowne wykorzystanie istniejącego stanu uwierzytelniania, jeśli taki istnieje.
        await use(fileName);
        return;
      }

      // Important: Upewnij się, że uwierzytelniamy się w czystym środowisku, usuwając ustawienie stanu przechowywania.
      const page = await browser.newPage({ storageState: undefined });

      // Uzyskaj dostęp do konta w oparciu o ID workera.
      // W przykładzie korzystamy z dwóch kont zdefiniowanych na poziomie .env.
      // Na produkcji zwykle korzystamy z dedykowanego API do tworzenia dedykowanych kont testowych.
      const account = await acquireAccount(id);

      // Przejdź przez proces logowania.
      const loginPage = new LoginPage(page);
      await loginPage.navigate();
      await loginPage.fillLoginForm(account.username, account.password);

      // Czekamy aż strona otrzyma cookiesy z uwierzytelnieniem.
      // Czasami proces logowania może składać się z kilku redirectów,
      // stąd warto zaczekać na finalny URL, aby mieć pewność że mamy wszystkie cookiesy.
      const mainPage = new MainPage(page);
      await expect(page).toHaveURL(URLs.MAIN_PAGE);
      await expect(mainPage.getNavigation()).toContainText(account.username, {
        ignoreCase: true,
      });

      // Koniec uwierzytelniania.
      await page.context().storageState({ path: fileName });
      await page.close();
      await use(fileName);
    },
    { scope: 'worker' },
  ],
});
