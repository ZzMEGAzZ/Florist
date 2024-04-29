export interface Cart {
    quantity: number
    product: CartItem
  }

export interface CartItem {
    product: any;
    product_id: number;
    category_id: number;
    name: string;
    description: string;
    price: string;
    product_image: string;
}
