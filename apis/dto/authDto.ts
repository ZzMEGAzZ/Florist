export interface AuthLoginDto {
    username: string;
    password: string;
    grantType?: string;
    scope?: string;
    client_id?: string;
    client_secret?: string;
}

export interface AuthRegisterDto {
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
}


