import { Pagination } from "./@type";

export interface GetProducts {
    category_id?: number;
    limit?: number;
    page?: number;
}

export interface GetProductById {
    product_id: number;
}

export interface GetProductByName {
    product_name: string;
}

export interface AddProduct {
    category_id: number;
    category_name: string;
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