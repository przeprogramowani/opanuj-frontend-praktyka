export interface Order {
    items: OrderItem[];
}

export interface OrderItem {
    product: Product;
    quantity: number;
    isLoyaltyItem: boolean;
}

export interface Product {
    name: string;
    price: number;
}
