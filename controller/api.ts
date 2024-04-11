import axios, { AxiosRequestConfig } from 'axios';
// import { AuthProvider } from '@/utils/clientAuthProvider';
// import verifyToken from '@/utils/verifyToken';

function getRequestConfig(method: string, url: string, data?: any, token?: 'useToken'): AxiosRequestConfig {
    // const Access_Token = AuthProvider.getAccessToken();
    // const RefreshToken = AuthProvider.getRefreshToken();

    // if (token === 'useToken' && !Access_Token) {
    //     verifyToken(Access_Token as string);
    // }

    const headers: { [key: string]: string } = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    };

    // if (token) {
    //     headers.token = `${Access_Token}`;
    // }

    return {
        method,
        url: `${process.env.NEXT_PUBLIC_API_PATH}${url}`,
        headers,
        data,
    };
}

async function sendRequest(config: AxiosRequestConfig) {
    try {
        const response = await axios(config);
        return JSON.stringify({
            status: response.status,
            data: response.data,
            message: response.data.message,
        });
    } catch (error: any) {
        throw {
            status: error.response?.status,
            message: error.response?.data?.message,
        };
    }
}

export async function get(url: string, params?: any, token?: 'useToken') {
    let queryParams = '';
    if (params) {
        const nonEmptyParams = Object.entries(params)
            .filter(([_, value]) => value !== null && value !== undefined && value !== '')
            .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.map((item) => `${key}=${item}`).join('&');
                } else {
                    return `${key}=${value}`;
                }
            });
        queryParams = nonEmptyParams.join('&');
    }
    const fullUrl = queryParams ? `${url}?${queryParams}` : url;
    const config = getRequestConfig('get', fullUrl, undefined, token);
    return sendRequest(config);
}

export async function post(url: string, data?: any, token?: 'useToken') {
    const formData = new FormData();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            formData.append(key, data[key]);
        }
    }
    const config = getRequestConfig('post', url, formData, token);
    return sendRequest(config);
}

// export async function postForm(url: string, data?: any, token: string | null = '') {
//     const formData = new FormData();
//     for (const key in data) {
//         if (data.hasOwnProperty(key)) {
//             formData.append(key, data[key]);
//         }
//     }
//     const config = getRequestConfig('post', url, formData, token);
//     if (!config.headers) {
//         config.headers = {}; // Initialize headers as an empty object if it's undefined
//     }
//     config.headers['Content-Type'] = 'multipart/form-data';
//     return sendRequest(config);
// }

export async function deleteRequest(url: string, data?: any, token?: 'useToken') {
    const config = getRequestConfig('delete', url, data, token);
    return sendRequest(config);
}

export async function put(url: string, data?: any, token?: 'useToken') {
    const config = getRequestConfig('put', url, data, token);
    return sendRequest(config);
}
