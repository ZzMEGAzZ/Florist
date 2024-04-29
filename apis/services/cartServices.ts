import {get, post, put, deleteRequest} from '@/apis/api';
import { parseJson } from '@/utils/parseJson';
import * as cart from '@/apis/dto/cartDto';
import { Pagination } from '../dto/@type';

//post

//postJson
export async function addToCart(data: cart.AddToCart) {
    try {
        const response: any = await post('cart/add_to_cart', data, 'useToken', true);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//get
export async function getCart(data: cart.GetCart) {
    try {
        const response: any = await get(`cart/get_cart_pagination`, data, 'useToken');
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//put

//delete