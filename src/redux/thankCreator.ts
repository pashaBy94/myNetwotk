import { setError, setInitiallized } from "./appReducer";
import { getCaptchaFromStore, setAuthUser, setProfile } from "./authUserReducer";
import { savePhoto, setCurrentProfile, setCurrentStatus, updateAboutMyInfo } from "./profilePageReducer";
import { userAPI } from "./../dal/api.js";
import { toggleIsLoader, setUser, setTotalCountPage, follow, unfollow, toggleDisabledFollow, setLengthCountPage } from "./usersPageReducer";
import { profileType } from "../typeAndInterface/typeAndInterface";

export const setInitiallizedThank = () => {
    return (dispatch:any) => {
        dispatch(authUserThank()).then(() => {            
            dispatch(setInitiallized());
        }).catch((e:any)=>{dispatch(setError(e))})
    }
};

export function authUserThank() {
    return (dispatch:any) => {
        return (userAPI.setAuthentication().then((res:any) => {
            if (res.resultCode === 0) {
                let { email, login, id } = res.data;
                dispatch(setAuthUser(email, login, id, true));
                userAPI.setPageProfile(id).then((res:profileType) => {
                    dispatch(setProfile(res));
                }).catch((e:any)=>{dispatch(setError(e))})
            }
        }));
    }
}
export const getCaptchaThank = ()=>{
    return (dispatch:any)=>{
    userAPI.getCaptcha().then((res:any)=>{
        if(res.status === 200)
        dispatch(getCaptchaFromStore(res.data.url));
    }).catch((e:any)=>{dispatch(setError(e))})
}
}


export const loginThank = (email:string, password:string, rememberMe:boolean, captcha:string, submitProps:any, setNoFail:any) => {
    return (dispatch:any) => {
        userAPI.login(email, password, rememberMe, captcha).then((res:any) => {
            if (res.data.resultCode === 0) {
                dispatch(authUserThank());
                dispatch(getCaptchaFromStore(null));
            } else if (res.data.resultCode === 10) {
                dispatch(getCaptchaThank());
                setNoFail(true);
            } else {
                setNoFail(true);
                submitProps({ errors: res.data.messages })
            }
        }).catch((e:any)=>{dispatch(setError(e))})
    }
}

export const logoutThank = () => {
    return (dispatch:any) => {
        userAPI.logout().then((res:any) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUser(null, null, null, false));
            } else {
            }
        }).catch((e:any)=>{dispatch(setError(e))});
    }
}

export const setCurrentProfileThunk = (usId:number, callback = (res:any) => ({ type: null, res })) => {
    return (dispatch:any) => {
        userAPI.setPageProfile(usId).then((res:any) => {
            dispatch(setCurrentProfile(res));
            dispatch(callback(res));
        }).catch((e:any)=>{dispatch(setError(e))})
    }
}
export const getCurrentStatusThunk = (usId:number) => {
    return (dispatch:any) => {
        userAPI.getStatus(usId).then((res:any) => {
            dispatch(setCurrentStatus(res));
        }).catch((e:any)=>{dispatch(setError(e))})
    }
}
export const setCurrentStatusThunk = (status:string|null) => {
    return (dispatch:any) => {
        userAPI.setStatus(status).then((res:any) => {
            if (res.resultCode === 0)
                dispatch(setCurrentStatus(status));
        }).catch((e:any)=>{dispatch(setError(e))})
    }
}
export const thunkAddUsers = (countUsersPage:number, numberCurrentPage:number, isLoad:boolean) => {
    return (dispatch:any) => {
        if (!isLoad) dispatch(toggleIsLoader(true))
        userAPI.setUsersPageNumber(countUsersPage, numberCurrentPage).then((res:any) => {
            dispatch(setUser(res.data.items));
            dispatch(setTotalCountPage(res.data.totalCount));
            dispatch(setLengthCountPage(res.data.totalCount));
        }).then(() => dispatch(toggleIsLoader(false))).catch((e:any)=>{dispatch(setError(e))});
    }
}
export const thunkAddNextUsers = (numPage:number, countUsersPage:number) => {
    return (dispatch:any) => {
        dispatch(toggleIsLoader(true));
        userAPI.setUsersPageNumber(countUsersPage, numPage).then((res:any) => {
            dispatch(setUser(res.data.items));
        }).then(() => dispatch(toggleIsLoader(false))).catch((e:any)=>{dispatch(setError(e))});
    }
}
export const thunkAddFollow = (id:number) => {
    return (dispatch:any) => {
        dispatch(toggleDisabledFollow(id, true));
        userAPI.addFollowUser(id).then((res:any) => {
            if (res.data.resultCode === 0) {
                dispatch(follow(id));
            }
        }).then(() => { dispatch(toggleDisabledFollow(id, false)) }).catch((e:any)=>{dispatch(setError(e))})
    }
}
export const thunkUnFollow = (id:number) => {
    return (dispatch:any) => {
        dispatch(toggleDisabledFollow(id, true));
        userAPI.deleteFollowUser(id).then((res:any) => {
            if (res.data.resultCode === 0) {
                dispatch(unfollow(id));
            }
        }).then(() => { dispatch(toggleDisabledFollow(id, false)) }).catch((e:any)=>{dispatch(setError(e))})
    }
}
export const savePhotoThunk = (photo:any) => {
    return (dispatch:any) => {
        userAPI.updatePhoto(photo).then((res:any) => {
            if (res.data.resultCode === 0) {
                dispatch(savePhoto(res.data.data.photos));
            }
        }).catch((e:any)=>{dispatch(setError(e))})
    }
}
export const updateInfoProfileThunk = (info:profileType, submitProps:any, setModEdit:any) => {
    return (dispatch:any) => {
        userAPI.updateInfoProfile(info).then((res:any) => {
            if (res.data.resultCode === 0) {
                dispatch(updateAboutMyInfo(info));
                setModEdit(false);
            } else {
                submitProps({ errors: res.data.messages[0] })
            }
        }).catch((e:any)=>{dispatch(setError(e))})
    }
}