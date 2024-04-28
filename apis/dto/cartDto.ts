export interface AddToCart {
    user_id: number;
    item: CartItem[];
}

export interface CartItem {
    product_id: number;
    quantity: number;
}

export interface GetCart {
    user_id: number;
}
