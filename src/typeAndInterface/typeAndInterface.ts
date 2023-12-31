import { reducers } from "../redux/redux-store";
import { qala } from "../components/Musics/sound/sound.js";

type RootReducerType = typeof reducers;
export type GlobalStateType = ReturnType<RootReducerType>;

export type DialogsType = {
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
export type FriendPropType = {
    id: string,
    img:string,
    name:string,
};
export type FriendsPropType = {
    topFriends: Array<FriendPropType>;
}
export type appStateType = {
    initiallized: boolean,
    topFriends: Array<FriendPropType>
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
    profile: profileType | null,
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
export type PhotoType = { large: string | null, small: string | null } | null;
export type profileType = {
    aboutMe: string,
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    userId: number,
    photos: PhotoType,
    contacts: { facebook: string, github: string, instagram: string, mainLink: string, twitter: string, vk: string, website: string, youtube: string }
};
export type profileStateType = {
    postsData: postsDataType,
    currentProfile: profileType | null,
    currentStatus: string,
    myProfile: null | profileType,
    isMyPages: boolean
}

export type SountItemType = {
    content: undefined | typeof qala,
    name: string
};
export type MusicStateType = {
listMusics: Array<SountItemType>
};

export type UsersType = {
    followed: boolean,
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
};

export type PropMyPostType = {
    postsData: postsDataType,
    postAdd?: any,
    postsDelete: any
};

export type PropsUsersType = {
    // setCurrentPage: (currentPage:number) => object
    // numberCurrentPage: number,
    // setAjaxAndWriteUser: (numPage: number) => void
    // countUsersPage: number,
    // isLoader: boolean,
    // friend: boolean | null,
    // term: string,
    users: Array<UsersType>,
    // thunkAddFollow: (id:number)=>(dispatch:any)=>void
    // thunkAddUsers: (countUsersPage: number, numberCurrentPage: number, isLoad: boolean, friend:boolean|null, term: string) => (dispatch: any) => void
    // thunkUnFollow: (id:number)=>(dispatch:any)=>void
    // totalCountPage: number,
    // setSearch: (friendly:boolean | null, term: string)=> void
    // lengthCountPage: Array<Array<number>>
};