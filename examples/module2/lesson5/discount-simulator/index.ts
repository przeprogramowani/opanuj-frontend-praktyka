import { DiscountCalculator } from './calculator/calculator';
import { DISCOUNT_CONFIG } from './discounts/config';
import { Purchase } from './types/types';

const calculator = new DiscountCalculator(DISCOUNT_CONFIG);

const total = document.querySelector('#total') as HTMLParagraphElement;
const loyaltySelect = document.querySelector('#loyalty') as HTMLSelectElement;
const extraDiscountSelect = document.querySelector(
  '#extra-discount'
) as HTMLSelectElement;

function recalculate() {
  const loyaltyStatus = loyaltySelect.value as 'Gold' | 'Silver' | 'None';
  const extraDiscount = parseInt(extraDiscountSelect.value);

  const purchase: Purchase = {
    customer: { loyaltyStatus },
    products: [
      { category: 'Electronics', price: 200 },
      { category: 'Books', price: 30 },
    ],
    isSpecialPromotionDay: extraDiscount === 1,
  };

  const result = calculator.calculateDiscount(purchase);
  total.innerHTML = `Wartość: $${result.total.toFixed(
    2
  )}; Zniżka: $${result.discount.toFixed(2)}`;
}

recalculate();

loyaltySelect.addEventListener('change', () => {
  recalculate();
});

extraDiscountSelect.addEventListener('change', () => {
  recalculate();
});
