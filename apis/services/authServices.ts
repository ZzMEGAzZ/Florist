import {get, post, put, deleteRequest} from '@/apis/api';
import { parseJson } from '@/utils/parseJson';
import * as auth from '@/apis/dto/authDto';

//post
export async function login(data: auth.AuthLoginDto) {
    try {
        const response: any = await post('auth/login', data);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//postJson
export async function register(data: auth.AuthRegisterDto) {
    try {
        const response: any = await post('auth/register', data, undefined, true);
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}
