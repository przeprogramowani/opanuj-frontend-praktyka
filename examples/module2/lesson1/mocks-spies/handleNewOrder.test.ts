import { describe, test, expect, vi } from 'vitest';
import { Order } from './types/Order';
import { handleNewOrder } from './handleNewOrder';
import { asyncOrderProcessor } from './asyncOrderProcessor';
import { OrderProcessor } from './types/OrderProcessor';

describe('order handling', () => {
  test('should reject negative quantity', async () => {
    const order: Order = {
      id: 1,
      name: 'Pizza',
      quantity: -2,
      price: 10,
      status: 'pending',
    };

    expect(async () => {
      await handleNewOrder(order, asyncOrderProcessor);
    }).rejects.toThrowError();
  });

  test('should accept valid order', async () => {
    const order: Order = {
      id: 1,
      name: 'Pasta',
      quantity: 5,
      price: 10,
      status: 'pending',
    };

    const fakeOrderProcessor: OrderProcessor = {
      processOrder: (order: Order) => Promise.resolve(200),
    };
    const spy = vi.spyOn(fakeOrderProcessor, 'processOrder');

    const result = await handleNewOrder(order, fakeOrderProcessor);

    expect(result).toBe(200);
    expect(order.status).toBe('completed');
    expect(spy.mock.calls.length).toBe(1);
    expect(spy.mock.calls[0][0].quantity).toBe(5);
  });
});
