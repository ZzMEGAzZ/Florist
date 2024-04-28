export interface GetProducts {
    category_id: number;
}

export interface AddProduct {
    category_id: number;
    name: string;
    description: string;
    price: number;
    stock_quantity: number;
    product_image: string;
}

export interface AddProductImage {
    product_id: number;
    file: any;
}

export interface AddCategory {
    name: string;
}

export interface DeleteCategory {
    category_id: number;
}