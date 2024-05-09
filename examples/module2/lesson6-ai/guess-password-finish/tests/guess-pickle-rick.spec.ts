import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('(Copilot) User can guess the password using hints', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.locator('input#password').fill('wrong password');
  await page.locator('text=Zgadnij').click();

  await expect(page.locator('.text-red-500')).toHaveText(
    'Niepoprawne hasło. Spróbuj ponownie lub skorzystaj z podpowiedzi.'
  );

  await page.locator('text=Pokaż podpowiedź').click();
  await expect(page.locator('[data-testid="hint-text"]')).toHaveText(
    'Ogórek i Rick połączeni w jedno'
  );

  await page.locator('text=Pokaż podpowiedź').click();
  await expect(page.locator('[data-testid="hint-text"]')).toHaveText(
    'Hasło to dwa słowa, drugie to imię'
  );

  await page.locator('input#password').fill('Pickle Rick');
  await page.locator('text=Zgadnij').click();

  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Brawo! Zgadłeś hasło.');
    await dialog.dismiss();
  });
});

test('(GPT-4) should guide the user through incorrect guesses, hints, and finally correct guess', async ({
  page,
}) => {
  await page.goto('http://localhost:3000');

  await page.getByPlaceholder('Wpisz hasło...').fill('wrong password');
  await page.getByRole('button', { name: 'Zgadnij' }).click();

  await expect(
    page.getByTestId('guess-form').locator('.text-red-500')
  ).toHaveText(
    'Niepoprawne hasło. Spróbuj ponownie lub skorzystaj z podpowiedzi.'
  );

  await page.getByRole('button', { name: 'Pokaż podpowiedź' }).click();

  await expect(page.getByTestId('hint-text')).toHaveText(
    'Ogórek i Rick połączeni w jedno'
  );

  await page.getByRole('button', { name: 'Pokaż podpowiedź' }).click();

  await expect(page.getByTestId('hint-text')).toHaveText(
    'Hasło to dwa słowa, drugie to imię'
  );

  await page.getByPlaceholder('Wpisz hasło...').fill('Pickle Rick');
  await page.getByRole('button', { name: 'Zgadnij' }).click();

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toEqual('Brawo! Zgadłeś hasło.');
    await dialog.dismiss();
  });
});

test('should not have any automatically detectable accessibility issues', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');

  await page.getByPlaceholder('Wpisz hasło...').fill('wrong password');
  await page.getByRole('button', { name: 'Zgadnij' }).click();
  await page.getByRole('button', { name: 'Pokaż podpowiedź' }).click();

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
