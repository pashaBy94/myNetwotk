import axios, { AxiosInstance } from 'axios';
// import { profileType } from '../typeAndInterface/typeAndInterface';

type APIUSType = {
    instance: AxiosInstance;
};

export enum resultCodeNumb {
    success = 0,
    error = 1,
    captchaGet = 10,
};

// type AuthApiType = {
//     resultCode: resultCodeNumb,
//     messages: Array<string>,
//     data: {
//         id: number,
//         email: string,
//         login: string,
//     }
// };

// type SavePhotoApiType = {
//     resultCode: resultCodeNumb
//     messages: Array<string>,
//     data: {
//         small: string,
//         large: string
//     }
// };
// type UpdateProfileApiType = {
//     resultCode: resultCodeNumb,
//     messages: Array<string>,
//     data: profileType
// };

// type SetStatusApiType = {
//     resultCode: resultCodeNumb,
//     messages: Array<string>,
//     data: object
// };
// type SetUsersApiPageType = {
//     items: Array<{
//         name: string,
//         id: number,
//         photos: {
//             small: null | string,
//             large: null | string
//         },
//         status: null | string,
//         followed: boolean,
//     }>
//     totalCount: number,
//     error: null | string
// };
// type FollowApiType = {
//     resultCode: resultCodeNumb,
//     messages: Array<string>,
//     data: object
// };
// type LoginApiType = {
//     resultCode: resultCodeNumb,
//     messages: Array<string>,
//     data: {
//         userId: number
//     }
// };
// type CaptchaApiType = {
//     status: number,
//     statusText: string,
//     headers: any,
//     config: any,
//     request: any,
//     data: {
//         url: string
//     }
// };

export class APIUS implements APIUSType {
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            withCredentials: true,
            baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        });
    };
    // async updatePhoto(photo: string | Blob) {
    //     let formData = new FormData();
    //     formData.append('image', photo);
    //     return this.instance.put<SavePhotoApiType>(`profile/photo`, formData, {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     }).catch(r => { throw Error(r) })
    // };
    // async updateInfoProfile(info: profileType) {
    //     let json = JSON.stringify(info);
    //     return this.instance.put<UpdateProfileApiType>(`profile/`, json, {
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     }).catch(r => { throw Error(r) })
    // }
    // async setAuthentication() {
    //     return this.instance.get<AuthApiType>(`auth/me`).then(res => res.data).catch(r => { throw Error(r) })
    // };
    // async setPageProfile(usId: number) {
    //     return this.instance.get<profileType>(`profile/` + usId).then(res => res.data).catch(r => { throw Error(r) })
    // };
    // async getStatus(usId: number) {
    //     return this.instance.get<string>(`profile/status/` + usId).then(res => res.data).catch(r => { throw Error(r) })
    // };
    // async setStatus(status: string) {
    //     return this.instance.put<SetStatusApiType>(`profile/status/`, { status: status }).then(res => res.data).catch(r => { throw Error(r) })
    // };
    // async setUsersPageNumber(countUsersPage: number, numPage: number) {
    //     return this.instance.get<SetUsersApiPageType>(`users?count=${countUsersPage}&page=${numPage}`).catch(r => { throw Error(r) })
    // };
    // async deleteFollowUser(id: number) {
    //     return this.instance.delete<FollowApiType>(`follow/` + id, { headers: { 'API-KEY': 'a3085c13-b7e2-4ffc-892a-9ba320b8602e' } }).catch(r => { throw Error(r) })
    // };
    // async addFollowUser(id: number) {
    //     console.log(id);
        
    //     return this.instance.post<FollowApiType>(`follow/` + id, {}, { headers: { 'API-KEY': 'a3085c13-b7e2-4ffc-892a-9ba320b8602e' } }).catch(r => { throw Error(r) })
    // };
    // async login(email: string, password: string, rememberMe: boolean, captcha: null | string) {
    //     return this.instance.post<LoginApiType>('auth/login', { email, password, rememberMe, captcha }, {}).catch(r => { throw Error(r) })
    // }
    // async logout() {
    //     return this.instance.delete<LoginApiType>('auth/login').catch(r => { throw Error(r) })
    // };
    // async getCaptcha() {
    //     return this.instance.get<CaptchaApiType>(`security/get-captcha-url`).catch(r => { throw Error(r) })
    // };
    // async addDialods(id: number) {
    //     let json = JSON.stringify({body:'Hello friend!'});
    //     return this.instance.post(`dialogs/` + id + '/messages', json, { headers: { 'API-KEY': 'a3085c13-b7e2-4ffc-892a-9ba320b8602e' } })
    // };
    // async startDialog(id: number) {
    //     return this.instance.put(`dialogs/` + id, { headers: { 'API-KEY': 'a3085c13-b7e2-4ffc-892a-9ba320b8602e' } })
    // };
}
export const userAPI = new APIUS();
