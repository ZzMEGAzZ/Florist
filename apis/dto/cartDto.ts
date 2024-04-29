export interface AddToCart {
    user_id: number;
    items: CartItem[];
}

export interface Items {
    Items: CartItem
}

export interface CartItem {
    product_id: number;
    quantity: number;
}

export interface GetCart {
    user_id: number;
    page: number;
    limit: number;
}
