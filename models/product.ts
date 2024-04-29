export interface Category {
    category_id: number;
    name: string;
}

export interface Product {
    product_id: number;
    category_id: number;
    category_name: string;
    name: string;
    description: string;
    price: number;
    stock_quantity: number;
    product_image: string;
}
