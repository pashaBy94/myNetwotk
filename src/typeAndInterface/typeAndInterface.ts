import { reducers } from "../redux/redux-store";
import { qala } from "../components/Musics/sound/sound.js";

type RootReducerType = typeof reducers;
export type GlobalStateType = ReturnType<RootReducerType>;

type DialogsType = {
    name: string,
    id: number
};
export type MessagType = {
    messag: string,
    id: number,
    itIs: boolean
    time: string
};
export type stateDialogsType = {
    data: Array<DialogsType>,
    messag: Array<MessagType>,
};
export type appStateType = {
    initiallized: boolean,
    topFriends: Array<Object>
    error: null | Object
}
export type authenticationType = {
    email: string | null,
    login: string | null,
    id: number | null
};
export type authStateType = {
    authentication: authenticationType,
    isAuth: boolean,
    profile: object | null,
    captchaUrl: null | string,
}
type crossOrZeroType = {
    victoriCombination: Array<Array<number>>,
    countMove: number,
    currentMove: string,
    currentVictori: string,
    red: {
        nameRed: string,
        victoriRed: number,
        combinationRed: any,
    }
    blue: {
        nameBlue: string,
        victoriBlue: number,
        combinationBlue: any,
    }
}

export type gamesStateType = {
    crossOrZero: crossOrZeroType
};

export type postsDataType = Array<{
    post: string,
    id: number,
    likescount: number,
}>
export type profileType = {
    aboutMe: string,
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    userId: number,
    photos: { large: string | null, small: string | null } | null,
    contacts: { facebook: string, github: string, instagram: string, mainLink: string, twitter: string, vk: string, website: string, youtube: string }
};
export type profileStateType = {
    postsData: postsDataType,
    currentProfile: profileType | null,
    currentStatus: string,
    myProfile: null | profileType,
    isMyPages: boolean
}

type SountItemType = {
    content: typeof qala,
    name: string
};
export type MusicStateType = {
listMusics: Array<SountItemType>
};


export type UsersType = {
    follower: boolean,
    id: number,
    name: string,
    photos: { small: string | null, large: string | null },
    status: string | null,
    uniqueUrlName: string | null
};

export type PropOneUsType = {
    key: number,
    user: UsersType, 
    thunkAddFollow: (id: number) => (dispatch: any) => void,
    thunkUnFollow: (id: number) => (dispatch: any) => void,
    isDisabledFollowButton: Array<number>,
};