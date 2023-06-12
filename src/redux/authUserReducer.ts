import { SET_AUTH_USER, SET_PROFILE, GET_CAPTCHA } from "./types";

type setAuthUserType = {
type: typeof SET_AUTH_USER,
data: {
    email: string,
    login: string,
    id:number,
    isAuth: boolean
}
};
type setProfileType = {
    type: typeof SET_PROFILE,
    profile: object|null
};
type getCaptchaFromStoreType = {
    type: typeof GET_CAPTCHA,
    urls: string|null
};
export type authenticationType = {
    email: string | null,
    login: string | null,
    id: string | number | null
};
export type initialStateType = {
    authentication: authenticationType,
    isAuth: boolean,
    profile: object | null,
    captchaUrl: null | string | object,
}

export const setAuthUser = (email:string, login:string, id:number, isAuth:boolean):setAuthUserType => ({ type: SET_AUTH_USER, data: { email, login, id, isAuth } });

export const setProfile = (profile:object):setProfileType => ({ type: SET_PROFILE, profile });

export const getCaptchaFromStore = (urls:string|null):getCaptchaFromStoreType => ({type: GET_CAPTCHA, urls});


const initialState: initialStateType = {
    authentication: {
        email: null,
        login: null,
        id: null,
    },
    isAuth: false,
    profile: null,
    captchaUrl: null,
};

export function authUserReducer(state = initialState, action:any):initialStateType {    
    let newState = { ...state };
    switch (action.type) {
        case SET_AUTH_USER: {
            newState.authentication.id = action.data.id;
            newState.authentication.email = action.data.email;
            newState.authentication.login = action.data.login;
            newState.isAuth = action.data.isAuth;
            break;
        }
        case SET_PROFILE: {
            newState.profile = { ...action.profile };
            break;
        }
        case GET_CAPTCHA: {
            newState.captchaUrl = action.urls;
            break;
        }
        default: {}
    }
    return newState;
}
