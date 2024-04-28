export interface AddAddress {
    user_id: number;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
    is_current: true | false;
}

export interface GetAddress {
    user_id: number;
}

export interface GetCurrentAddressByUserId {
    user_id: number;
}

export interface editAddressByAddressId {
    address_id: number;
    body: AddAddress;
}

export interface deleteAddressByAddressId {
    address_id: number;
}

export interface setCurrentAddressByAddressId {
    address_id: number;
}

