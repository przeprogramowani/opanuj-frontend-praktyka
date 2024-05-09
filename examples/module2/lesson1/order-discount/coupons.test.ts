import { test, expect, describe } from 'vitest';
import { calculateDiscount } from './coupons';
import { Order } from './types';

describe('Discount calculation', () => {
  test('applies 10% discount for orders over 1000', () => {
    const order: Order = {
      items: [
        {
          product: { name: 'Product 1', price: 1100 },
          quantity: 1,
          isLoyaltyItem: false,
        },
      ],
    };
    expect(calculateDiscount(order)).toBe(10);
  });

  test('applies 5% discount for orders with more than 5 products', () => {
    const order: Order = {
      items: [
        {
          product: { name: 'Product 1', price: 10 },
          quantity: 1,
          isLoyaltyItem: false,
        },
        {
          product: { name: 'Product 2', price: 10 },
          quantity: 1,
          isLoyaltyItem: false,
        },
        {
          product: { name: 'Product 3', price: 10 },
          quantity: 1,
          isLoyaltyItem: false,
        },
        {
          product: { name: 'Product 4', price: 10 },
          quantity: 1,
          isLoyaltyItem: false,
        },
        {
          product: { name: 'Product 5', price: 10 },
          quantity: 1,
          isLoyaltyItem: false,
        },
        {
          product: { name: 'Product 6', price: 10 },
          quantity: 1,
          isLoyaltyItem: false,
        },
      ],
    };

    expect(calculateDiscount(order)).toBe(5);
  });

  test('applies 15% discount for orders with at least 3 loyalty items', () => {
    const order: Order = {
      items: [
        {
          product: { name: 'Product 1', price: 200 },
          quantity: 1,
          isLoyaltyItem: true,
        },
        {
          product: { name: 'Product 2', price: 100 },
          quantity: 2,
          isLoyaltyItem: true,
        },
        {
          product: { name: 'Product 3', price: 50 },
          quantity: 3,
          isLoyaltyItem: true,
        },
      ],
    };

    expect(calculateDiscount(order)).toBe(15);
  });
});
