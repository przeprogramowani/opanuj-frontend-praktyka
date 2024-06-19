import { describe, test, expect } from 'vitest';
import { DiscountCalculator } from './calculator';
import { DISCOUNT_CONFIG, DiscountConfig } from '../discounts/config';
import { Purchase } from '../types/types';

describe('DiscountCalculator', () => {
  test('should apply base discount', () => {
    const calculator = new DiscountCalculator(DISCOUNT_CONFIG);
    const purchase: Purchase = {
      customer: { loyaltyStatus: 'None' },
      products: [{ price: 100, category: 'Other' }],
      isSpecialPromotionDay: false,
    };
    const result = calculator.calculateDiscount(purchase);
    expect(result.discount).toBe(5);
  });

  test('should apply loyalty discount', () => {
    const calculator = new DiscountCalculator(DISCOUNT_CONFIG);
    const purchase: Purchase = {
      customer: { loyaltyStatus: 'Gold' },
      products: [{ price: 100, category: 'Other' }],
      isSpecialPromotionDay: false,
    };
    const result = calculator.calculateDiscount(purchase);
    expect(result.discount).toBe(15);
  });

  test('should apply category discount', () => {
    const calculator = new DiscountCalculator(DISCOUNT_CONFIG);
    const purchase: Purchase = {
      customer: { loyaltyStatus: 'None' },
      products: [{ price: 100, category: 'Electronics' }],
      isSpecialPromotionDay: false,
    };
    const result = calculator.calculateDiscount(purchase);
    expect(result.discount).toBe(7);
  });

  test('should apply special promotion day discount', () => {
    const calculator = new DiscountCalculator(DISCOUNT_CONFIG);
    const purchase: Purchase = {
      customer: { loyaltyStatus: 'None' },
      products: [{ price: 100, category: 'Other' }],
      isSpecialPromotionDay: true,
    };
    const result = calculator.calculateDiscount(purchase);
    expect(result.discount).toBe(10);
  });

  test('should not exceed max discount', () => {
    const calculator = new DiscountCalculator(DISCOUNT_CONFIG);
    const purchase: Purchase = {
      customer: { loyaltyStatus: 'Platinum' },
      products: [{ price: 100, category: 'Electronics' }],
      isSpecialPromotionDay: true,
    };
    const result = calculator.calculateDiscount(purchase);
    expect(result.discount).toBe(25);
  });
});
