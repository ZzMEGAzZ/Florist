import {get, post, put, deleteRequest} from '@/apis/api';
import { parseJson } from '@/utils/parseJson';
import * as order from '@/apis/dto/orderDto';

//post

//postJson
export async function addOrder(data: order.AddOrder) {
    try {
        const response: any = await post('order/add_order', data, 'useToken', true);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//get
export async function getOrderAll() {
    try {
        const response: any = await get('order/get_order_all', undefined, 'useToken');
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

export async function getOrderByUserId(data: order.GetOrderByUserId) {
    try {
        const response: any = await get('order/get_order_by_user_id', data, 'useToken');
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

export async function getOrderByUserIdAndStatus(data: order.GetOrderByUserIdAndStatus) {
    try {
        const response: any = await get('order/get_order_by_user_id_and_status', data, 'useToken');
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//put
export async function editOrderStatus(data: order.EditOrderStatus) {
    try {
        const response: any = await put('order/edit_order_status', data, 'useToken', true);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//delete