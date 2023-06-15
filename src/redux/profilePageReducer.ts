import { ADD_POST, SET_CURRENT_PROFILE, SET_MY_PROFILE, IS_MY_PAGES, SAVE_PHOTO, SET_CURRENT_STATUS, DELETE_POST, UPDATE_MY_INFO } from "./types";

type postAddType = {
    type: typeof ADD_POST,
    mes:string
};
type postsDeleteType = {
    type: typeof DELETE_POST,
    ids:number
}
type setCurrentProfile = {
    type: typeof SET_CURRENT_PROFILE,
    profile:object
}
type setMyProfileType = {
    type: typeof SET_MY_PROFILE
}
type setCurrentStatusType = {
    type: typeof SET_CURRENT_STATUS,
    status:string
}
type savePhotoType = {
    photos:object,
    type: typeof SAVE_PHOTO
}
type setMyPagesType = {
    type: typeof IS_MY_PAGES,
    ev: boolean
}
type updateAboutMyInfoType = {
    type: typeof UPDATE_MY_INFO,
    info:any
}

export const postAdd = (mes: string):postAddType => ({ type: ADD_POST, mes });
export const postsDelete = (ids:number):postsDeleteType => ({ type: DELETE_POST, ids });
export const setCurrentProfile = (profile:object):setCurrentProfile => ({ type: SET_CURRENT_PROFILE, profile });
export const setMyProfile = ():setMyProfileType => ({ type: SET_MY_PROFILE });
export const setCurrentStatus = (status:string):setCurrentStatusType => ({ type: SET_CURRENT_STATUS, status });
export const savePhoto = (photos:object):savePhotoType =>({type:SAVE_PHOTO, photos});
export const setMyPages = (ev: boolean):setMyPagesType =>({type:IS_MY_PAGES, ev});
export const updateAboutMyInfo = (info:any):updateAboutMyInfoType => ({type: UPDATE_MY_INFO, info});

type postsDataType = Array<{
    post: string,
    id:number,
    likescount: number,
}>
type initialStateType = {
    postsData: postsDataType,
    currentProfile: object|null,
    currentStatus: string,
    myProfile:null|object,
    isMyPages:boolean
}

const initialState:initialStateType = {
    postsData: [
        { post: 'Все ок, javaScript и HTML5 an do!', id: 1, likescount: 11 },
        { post: 'Все ', id: 2, likescount: 11 },
        { post: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 3, likescount: 11 },
        { post: 'Все ок, javaScript и HTML5 an do!', id: 4, likescount: 11 },
    ],
    currentProfile: null,
    currentStatus: '',
    myProfile: null,
    isMyPages: false,
};

export function profilPageReducer(state = initialState, action:any):initialStateType {
    let newState:initialStateType = {...state};
    switch (action.type) {
        case ADD_POST: {
            if (action.mes !== '') {
                newState.postsData = [...state.postsData];
                let post = { post: action.mes, id: state.postsData.length + 1, likescount: 0 };
                newState.postsData.push(post);
            }
            break;
        }
        case DELETE_POST: {
                newState.postsData = state.postsData.filter((el):boolean=>el.id !== action.ids);
            break;
        }
        case SET_CURRENT_PROFILE: {
            newState.currentProfile = { ...action.profile };
            break;
        }
        case SET_MY_PROFILE: {
            newState.myProfile = { ...state.currentProfile };
            break;
        }
        case SET_CURRENT_STATUS: {
            newState.currentStatus = action.status?action.status:'';
            break;
        }
        case SAVE_PHOTO: {
            newState.currentProfile = {...newState.currentProfile, photos: {...action.photos}};    
            newState.myProfile = {...newState.myProfile, photos: {...action.photos}};        
            break;
        }
        case IS_MY_PAGES: {
            newState.isMyPages = action.ev;
            break;
        }
        case UPDATE_MY_INFO: {
            newState.currentProfile = {...state.currentProfile ,...action.info};
            console.log(newState.currentProfile);
            break;
        }
        default: {}
    }
    return newState;
}

