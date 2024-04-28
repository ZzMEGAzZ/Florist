import { CartItem } from "./cartDto";

export interface AddOrder {
    user_id: number;
    address_id: number;
    order_date: string;
    status: string;
    total_price: number;
    order_items: CartItem[];
}

export interface GetOrderByUserId {
    user_id: number;
}

export interface GetOrderByUserIdAndStatus {
    user_id: number;
    status: string;
}

export interface EditOrderStatus {
    order_id: number;
    status: string;
}