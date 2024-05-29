export type Customer = {
  loyaltyStatus: 'Platinum' | 'Gold' | 'Silver' | 'None';
};

export type Product = {
  category: 'Electronics' | 'Books' | 'Other';
  price: number;
};

export type Purchase = {
  customer: Customer;
  products: Product[];
  isSpecialPromotionDay: boolean;
};

export type CalculationResult = {
  total: number;
  discount: number;
};
