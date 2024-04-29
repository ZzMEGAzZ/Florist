import { cookies } from 'next/headers';

interface AuthProvider {
    login: (access_token : string, user_id: number) => void
    logout: () => void
    getAccessToken: () => string | undefined
    getUserID: () => string | undefined
    getRefreshToken: () => string | undefined
    setAccessToken: (access_token: string) => void
}

export const AuthProvider : AuthProvider = {

    login: (access_token : string, user_id: number) => {
        //15 mins
        cookies().set('access_token', access_token, {expires: new Date(Date.now() + 30 * 60 * 1000), sameSite: 'lax', secure: true})
        cookies().set('user_id', user_id.toString(), {expires: new Date(Date.now() + 30 * 60 * 1000), sameSite: 'lax', secure: true})
        //1 day
        // cookies().set('refresh_token', refresh_token, {expires: new Date(Date.now() + 24 * 60 * 60 * 1000), sameSite: 'lax', secure: true})
    },
    logout: () => {
        cookies().delete('access_token')
        cookies().delete('user_id')
    },
    getAccessToken: () => {
        return cookies().get('access_token')?.value
    },
    getUserID: () => {
        return cookies().get('user_id')?.value
    },
    setAccessToken: (access_token: string) => {
        cookies().set('access_token', access_token, {expires: new Date(Date.now() + 30 * 60 * 1000), sameSite: 'lax', secure: true})
    },
    getRefreshToken: () => {
        return cookies().get('refresh_token')?.value
    },
}