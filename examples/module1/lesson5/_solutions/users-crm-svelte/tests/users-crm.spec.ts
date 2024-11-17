import { expect, test } from '@playwright/test';

test.describe('Users CRM', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render default list of users', async ({ page }) => {
    const usersList = page.getByTestId('users-list');
    await expect(usersList).toBeVisible();

    const userItems = page.getByTestId('user-item');
    expect(await userItems.count()).toBe(15);

    const userItem = userItems.first();
    await expect(userItem).toBeVisible();
    await expect(userItem).toContainText('Mark Zuckerberg');
  });

  test('should render user statuses stats', async ({ page }) => {
    const statusStats = page.getByTestId('status-stats-item');
    expect(await statusStats.count()).toBe(6);
  });

  test('should support adding new users to the list', async ({ page }) => {
    const addUserButton = page.getByTestId('add-user-button');
    await expect(addUserButton).toBeVisible();
    await addUserButton.click();

    const addUserDialog = page.getByTestId('add-user-dialog');
    await expect(addUserDialog).toBeVisible();

    const addUserForm = page.getByTestId('add-user-form');
    await expect(addUserForm).toBeVisible();

    const nameInput = addUserForm.getByLabel('Name');
    await nameInput.fill('John Doe');

    const statusInput = addUserForm.getByLabel('Status');
    await statusInput.selectOption('New');

    const submitButton = addUserForm.getByText('Add');
    await submitButton.click();

    await expect(addUserDialog).toBeHidden();

    const userItems = page.getByTestId('user-item');
    expect(await userItems.count()).toBe(16);

    const lastUserItem = userItems.last();
    await expect(lastUserItem).toBeVisible();
    await expect(lastUserItem).toContainText('John Doe');
  });
});
