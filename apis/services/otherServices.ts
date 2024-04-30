import {get, post, put, deleteRequest} from '@/apis/api';
import { parseJson } from '@/utils/parseJson';
import * as other from '@/apis/dto/otherDto';

//post

//postJson

//get
export async function GetProductDescriptionTts(data: other.GetProductDescriptionTts) {
    try {
        const response: any = await get('products/get_product_description_tts', data, 'useToken');
        const json:any = parseJson(response);
        return json;
    } catch (error: any) {
        throw error;
    }
}

//put

//delete