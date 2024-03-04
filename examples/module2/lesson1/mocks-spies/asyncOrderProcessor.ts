import axios from 'axios';
import { Order } from './types/Order';
import { OrderProcessor } from './types/OrderProcessor';

export const asyncOrderProcessor: OrderProcessor = {
  async processOrder(order: Order): Promise<number> {
    try {
      await axios.post('/api/orders', order);
      return 200;
    } catch (err) {
      return 500;
    }
  },
};
