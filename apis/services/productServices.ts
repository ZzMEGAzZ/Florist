import {get, post, put, deleteRequest} from '@/apis/api';
import { parseJson } from '@/utils/parseJson';
import * as product from '@/apis/dto/productDto';
import { Pagination } from '../dto/@type';

//post
export async function addProductImage(data: product.AddProductImage) {
    try {
        const response: any = await post('products/add_product_image', data, 'useToken');
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//postJson
export async function addProduct(data: product.AddProduct) {
    try {
        const response: any = await post('products/add_product', data, 'useToken', true);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

export async function addCategory(data: product.AddCategory) {
    try {
        const response: any = await post('products/add_category', data, 'useToken', true);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//get
export async function getAllProducts() {
    try {
        const response: any = await get('products/get_all_products', undefined);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

export async function getProducts(data: product.GetProducts) {
    try {
        console.log(data);
        const response: any = await get(`products/get_products`, data);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

export async function getAllCategories() {
    try {
        const response: any = await get('products/get_all_categories', undefined);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

export async function getProductById(data: product.GetProductById) {
    try {
        const response: any = await get('products/get_product_by_id', data);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

export async function getProductByName(data: product.GetProductByName) {
    try {
        const response: any = await get('products/get_product_by_name', data);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//put

//delete
export async function DeleteCategory(data: product.DeleteCategory) {
    try {
        const response: any = await deleteRequest('products/delete_product', data, 'useToken');
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}