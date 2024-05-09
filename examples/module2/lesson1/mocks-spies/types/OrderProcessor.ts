import { Order } from './Order';

export type OrderProcessor = {
  processOrder: (order: Order) => Promise<number>;
};
