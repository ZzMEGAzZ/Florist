export interface Item {
    name: string;
    product_id: number;
    quantity: number;
    price_per_unit: number;
}

export interface OrderItems {
    Items: Item[];
}