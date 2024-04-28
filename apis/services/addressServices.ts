import {get, post, put, deleteRequest} from '@/apis/api';
import { parseJson } from '@/utils/parseJson';
import * as address from '@/apis/dto/addressDto';

//post

//postJson
export async function addAddress(data: address.AddAddress) {
    try {
        const response: any = await post('address/add_address', data, 'useToken', true);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//get 
export async function getAddress(data: address.GetAddress) {
    try {
        const response: any = await get('addresses/get_addresses_by_user_id', data, 'useToken');
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

export async function getCurrentAddressByUserId(data: address.GetCurrentAddressByUserId) {
    try {
        const response: any = await get('addresses/get_current_address_by_user_id', data, 'useToken');
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//put 
export async function editAddressByAddressId(data: address.editAddressByAddressId) {
    try {
        const response: any = await put(`addresses/edit_address_by_address_id?address_id=${data.address_id}`, data.body, 'useToken', true);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

export async function setCurrentAddressByAddressId(data: address.setCurrentAddressByAddressId) {
    try {
        const response: any = await put('addresses/set_current_address_by_address_id', data, 'useToken');
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//delete
export async function deleteAddressByAddressId(data: address.deleteAddressByAddressId) {
    try {
        const response: any = await deleteRequest('addresses/delete_address_by_address_id', data, 'useToken');
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}
