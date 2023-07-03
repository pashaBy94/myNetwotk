import { authStateType, profileType } from "../typeAndInterface/typeAndInterface";
import { SET_AUTH_USER, SET_PROFILE, GET_CAPTCHA } from "./types";

type setAuthUserType = {
type: typeof SET_AUTH_USER,
data: {
    email: string|null,
    login: string|null,
    id:number|null,
    isAuth: boolean
}
};
type setProfileType = {
    type: typeof SET_PROFILE,
    profile: profileType|null
};
type getCaptchaFromStoreType = {
    type: typeof GET_CAPTCHA,
    urls: string|null
};


export const setAuthUser = (email:string|null, login:string|null, id:number|null, isAuth:boolean):setAuthUserType => ({ type: SET_AUTH_USER, data: { email, login, id, isAuth } });

export const setProfile = (profile:profileType):setProfileType => ({ type: SET_PROFILE, profile });

export const getCaptchaFromStore = (urls:string|null):getCaptchaFromStoreType => ({type: GET_CAPTCHA, urls});

export type ActionAuthType = setAuthUserType | setProfileType | getCaptchaFromStoreType; 
const initialState: authStateType = {
    authentication: {
        email: null,
        login: null,
        id: null,
    },
    isAuth: false,
    profile: null,
    captchaUrl: null,
};

export function authUserReducer(state = initialState, action:ActionAuthType):authStateType {    
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
            console.log(action.urls);
            
            break;
        }
        default: {}
    }
    return newState;
}
