import { APIUS, resultCodeNumb } from "./api";

export type GenericType< D, RC = resultCodeNumb> = {
    resultCode: RC,
    messages: Array<string>,
    data: D
};

type LoginApiType = {
        userId: number
};
type CaptchaApiType = {
    status: number,
    statusText: string,
    headers: any,
    config: any,
    request: any,
    data: {
        url: string
    }
};
type AuthApiType = {
        id: number,
        email: string,
        login: string,
    };

class apiAuth extends APIUS {
    async setAuthentication() {
        return this.instance.get<GenericType<AuthApiType>>(`auth/me`).then(res => res.data).catch(r => { throw Error(r) })
    };
    async login(email: string, password: string, rememberMe: boolean, captcha: null | string) {
        return this.instance.post<GenericType<LoginApiType>>('auth/login', { email, password, rememberMe, captcha }, {}).catch(r => { throw Error(r) })
    }
    async logout() {
        return this.instance.delete<GenericType<LoginApiType>>('auth/login').catch(r => { throw Error(r) })
    };
    async getCaptcha() {
        return this.instance.get<CaptchaApiType>(`security/get-captcha-url`).catch(r => { throw Error(r) })
    };
}
export const api_Auth = new apiAuth();