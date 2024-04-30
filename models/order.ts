export interface OrderItem {
    user_id: number;
    address_id: number;
    order_date: string;
    status: 'paid' | 'shiping' | 'delivered' | 'canceled'
    total_price: number;
    order_items: Item[];
    order_id: number;
}

export interface Item {
    product_id: number;
    quantity: number;
    price_per_unit: number;
    order_item_id: number;
    product_details: ProductDetails;
}

export interface ProductDetails {
    name: string;
    description: string;
    price: number;
    category_id: number;
    product_image: string;
}
