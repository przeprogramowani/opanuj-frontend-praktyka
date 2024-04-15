import { DiscountConfig } from '../discounts/config';
import { CalculationResult, Purchase } from '../types/types';

export class DiscountCalculator {
  private discountConfig: DiscountConfig;

  constructor(discountConfig: DiscountConfig) {
    this.discountConfig = discountConfig;
  }

  calculateDiscount(purchase: Purchase): CalculationResult {
    let totalDiscount = 0;
    let subtotal = 0;

    for (const product of purchase.products) {
      subtotal += product.price;

      if (this.discountConfig.categoryDiscounts[product.category]) {
        totalDiscount +=
          product.price *
          this.discountConfig.categoryDiscounts[product.category];
      }
    }

    if (subtotal >= 50) {
      totalDiscount += subtotal * this.discountConfig.baseDiscount;
    }

    if (purchase.customer.loyaltyStatus !== 'None') {
      totalDiscount +=
        subtotal *
        (this.discountConfig.loyaltyDiscounts[
          purchase.customer.loyaltyStatus
        ] || 0);
    }

    if (purchase.isSpecialPromotionDay) {
      totalDiscount += subtotal * this.discountConfig.specialDiscount;
    }

    totalDiscount = Math.min(
      totalDiscount,
      subtotal * this.discountConfig.maxDiscount
    );

    return { total: subtotal, discount: totalDiscount };
  }
}
