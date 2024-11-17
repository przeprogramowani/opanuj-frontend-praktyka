import { expect, Page, test } from '@playwright/test';

test.describe('Shop RTK Application', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  const addProductToCart = async (page: Page, productIndex: number = 0) => {
    const products = page.getByTestId('product');
    const addToCartButton = products
      .nth(productIndex)
      .getByTestId('add-to-cart-button');
    await addToCartButton.click();
  };

  test('Fetch and display products', async ({ page }) => {
    const products = page.getByTestId('product');
    await expect(products).toHaveCount(20);
  });

  test('Add item to cart', async ({ page }) => {
    await addProductToCart(page, 0);
    const cartCount = page.getByTestId('cart-count');
    await expect(cartCount).toHaveText('1');
  });

  test('Increase item quantity in cart', async ({ page }) => {
    await addProductToCart(page, 0);
    await addProductToCart(page, 0);

    await page.getByTestId('cart-button').click();

    const cartCount = page.getByTestId('cart-count-sidebar');
    await expect(cartCount).toHaveText('1');

    let cartItemAmount = page.getByTestId('cart-item-amount');
    await expect(cartItemAmount).toHaveText('2');

    await page.getByRole('button', { name: 'Increase amount' }).click();

    cartItemAmount = page.getByTestId('cart-item-amount');
    await expect(cartItemAmount).toHaveText('3');
  });

  test('Decrease item quantity in cart', async ({ page }) => {
    await addProductToCart(page, 0);
    await addProductToCart(page, 0);

    await page.getByTestId('cart-button').click();
    await page.getByRole('button', { name: 'Decrease amount' }).click();

    const cartCount = page.getByTestId('cart-count-sidebar');
    await expect(cartCount).toHaveText('1');

    const cartItemAmount = page.getByTestId('cart-item-amount');
    await expect(cartItemAmount).toHaveText('1');
  });

  test('Clear the cart', async ({ page }) => {
    await addProductToCart(page, 0);
    await addProductToCart(page, 2);

    await page.getByTestId('cart-button').click();

    await page.getByRole('button', { name: 'Clear cart' }).click();

    const cartCount = page.getByTestId('cart-count-sidebar');
    await expect(cartCount).toHaveText('0');
  });

  test('Navigate to Product Details page', async ({ page }) => {
    await page.getByTestId('product').first().hover();
    await page.getByTestId('view-details-button').first().click();

    await expect(page.getByTestId('product-details')).toBeVisible();
  });

  test('Add item to cart from Product Details page', async ({ page }) => {
    await page.getByTestId('product').first().hover();

    await page.getByTestId('view-details-button').first().click();

    await expect(page.getByTestId('product-details')).toBeVisible();

    await page.getByTestId('add-to-cart-button').click();

    const cartCount = page.getByTestId('cart-count');
    await expect(cartCount).toHaveText('1');
  });
});
