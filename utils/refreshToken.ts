// import { postRefreshToken } from "@/models/services/api/loginService"
// import { AuthProvider } from "./clientAuthProvider"


// export default function refreshToken(refreshToken: string) {
    
//     const fetching = async () => {
//         try {
//             const response: any = await postRefreshToken({
//                 refresh_token: refreshToken
//             });
//             if (response.status === 200) {
//                 const data = response.data;
//                 AuthProvider.setAccessToken(data.access_token);
//             } else {
//                 console.log(response);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     fetching()
// }