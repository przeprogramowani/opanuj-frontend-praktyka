import { Order } from './types/Order';
import { OrderProcessor } from './types/OrderProcessor';

export async function handleNewOrder(order: Order, processor: OrderProcessor) {
  if (order.quantity < 0) {
    throw new Error('Quantity cannot be negative');
  }

  if (order.name === '') {
    throw new Error('Name cannot be empty');
  }

  if (order.status === 'completed') {
    throw new Error('Cannot process completed order');
  }

  const status = await processor.processOrder(order);
  if (status === 200) {
    order.status = 'completed';
  }
  return status;
}
