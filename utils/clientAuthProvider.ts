import Cookies from 'js-cookie'

interface AuthProvider {
    login: (access_token : string, user_id : number) => void
    logout: () => void
    getAccessToken: () => string | undefined
    getUserID: () => string | undefined
    getRefreshToken: () => string | undefined
    setAccessToken: (access_token: string) => void
}

export const AuthProvider : AuthProvider = {

    login: (access_token : string, user_id : number) => {
        Cookies.set('access_token', access_token, {expires: new Date(Date.now() + 30 * 60 * 1000), sameSite: 'lax', secure: true})
        Cookies.set('user_id', user_id.toString(), {expires: new Date(Date.now() + 30 * 60 * 1000), sameSite: 'lax', secure: true})
        // Cookies.set('refresh_token', refresh_token, {expires: new Date(Date.now() + 24 * 60 * 60 * 1000), sameSite: 'lax', secure: true})
    },
    logout: () => {
        Cookies.remove('access_token')
        Cookies.remove('user_id')
        // Cookies.remove('refresh_token')
    },
    getAccessToken: () => {
        return Cookies.get('access_token')
    },
    getUserID: () => {
        return Cookies.get('user_id')
    },
    setAccessToken: (access_token: string) => {
        Cookies.set('access_token', access_token, {expires: new Date(Date.now() + 30 * 60 * 1000), sameSite: 'lax', secure: true})
    },
    getRefreshToken: () => {
        return Cookies.get('refresh_token')
    },
}