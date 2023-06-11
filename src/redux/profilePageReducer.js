import { ADD_POST, SET_CURRENT_PROFILE, SET_MY_PROFILE, IS_MY_PAGES, SAVE_PHOTO, SET_CURRENT_STATUS, DELETE_POST, UPDATE_MY_INFO } from "./types";

export const postAdd = (mes) => ({ type: ADD_POST, mes });
export const postsDelete = (ids) => ({ type: DELETE_POST, ids });
export const setCurrentProfile = (profile) => ({ type: SET_CURRENT_PROFILE, profile });
export const setMyProfile = () => ({ type: SET_MY_PROFILE });
export const setCurrentStatus = (status) => ({ type: SET_CURRENT_STATUS, status });
export const savePhoto = (photos) =>({type:SAVE_PHOTO, photos});
export const setMyPages = (ev) =>({type:IS_MY_PAGES, ev});
export const updateAboutMyInfo = (info) => ({type: UPDATE_MY_INFO, info})

const initialState = {
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

export function profilPageReducer(state = initialState, action) {
    let newState = {...state};
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
                newState.postsData = state.postsData.filter(el=>el.id !== action.ids);
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

