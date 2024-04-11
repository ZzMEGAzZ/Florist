import { checkVerifyToken } from '@/models/services/api/loginService'
import { AuthProvider } from './clientAuthProvider'
import refreshToken from './refreshToken';

export default function verifyToken(token: string) {

    const accessToken = AuthProvider.getAccessToken();
    console.log(accessToken);

    const fetching = async () => {
        try {
            const response: any = await checkVerifyToken({
                token: token
            });
            if (response.message === 'Token is valid') {
                console.log('Token is valid');
            } else {
                refreshToken(AuthProvider.getRefreshToken() as string);
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (accessToken) {
            fetching();
        } else {
            refreshToken(AuthProvider.getRefreshToken() as string);
        }

}