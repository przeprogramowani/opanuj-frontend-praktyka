import { Order } from './types';

export function calculateDiscount(order: Order): number {
  let discount = 0;

  // Jeśli suma zamówienia przekroczy 1000, dodaj 10% zniżki
  const totalAmount = order.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  if (totalAmount > 1000) {
    discount += 10;
  }

  // Jeśli zamówienie zawiera więcej niż 5 produktów, dodaj 5% zniżki
  if (order.items.length > 5) {
    discount += 5;
  }

  // Jeśli zamówienie zawiera więcej niż 5 produktów lojalnościowych, dodaj 15% zniżki
  const loyaltyItems = order.items.filter((i) => i.isLoyaltyItem).length;

  if (loyaltyItems >= 3) {
    discount += 15;
  }

  return discount;
}
