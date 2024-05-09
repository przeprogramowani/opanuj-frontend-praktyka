export interface Order {
  id: number;
  name: string;
  quantity: number;
  price: number;
  status: 'pending' | 'completed';
}
