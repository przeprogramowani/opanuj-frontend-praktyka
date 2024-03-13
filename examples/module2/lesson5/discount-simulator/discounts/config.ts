import { Customer, Product } from '../types/types';

export type DiscountConfig = {
  baseDiscount: number;
  loyaltyDiscounts: Record<Customer['loyaltyStatus'], number>;
  categoryDiscounts: Record<Product['category'], number>;
  specialDiscount: number;
  maxDiscount: number;
};

export const DISCOUNT_CONFIG: DiscountConfig = {
  baseDiscount: 0.05,
  specialDiscount: 0.08,
  loyaltyDiscounts: {
    Platinum: 0.2,
    Gold: 0.1,
    Silver: 0.05,
    None: 0,
  },
  categoryDiscounts: {
    Electronics: 0.02,
    Books: 0.03,
    Other: 0,
  },
  maxDiscount: 0.25,
};
