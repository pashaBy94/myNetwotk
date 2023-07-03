import { actionAppType, setError, setErrorType, setInitiallized } from "./appReducer";
import { ActionAuthType, getCaptchaFromStore, setAuthUser, setProfile } from "./authUserReducer";
import { actionProfileType, savePhoto, setCurrentProfile, setCurrentStatus, updateAboutMyInfo } from "./profilePageReducer";
import { userAPI } from "../dal/api";
import { toggleIsLoader, setUser, setTotalCountPage, follow, unfollow, toggleDisabledFollow, setLengthCountPage, initialUserStateType, ActionUserType } from "./usersPageReducer";
import { appStateType, authStateType, profileStateType, profileType } from "../typeAndInterface/typeAndInterface";
import { ThunkAction } from "redux-thunk";

// export const setInitiallizedThank: ThunkAction<Promise<void>, appStateType, unknown, actionAppType> = () => {
//     return (dispatch) => {
//         dispatch(authUserThank()).then(() => {
//             dispatch(setInitiallized());
//         }).catch((e: any) => { dispatch(setError(e)) })
//     }
// };

export const setInitiallizedThank = (): ThunkAction<Promise<void>, appStateType, unknown, actionAppType> => {
    return async (dispatch) => {
        try {
            await dispatch(authUserThank());
            dispatch(setInitiallized());
        } catch (e) {
            dispatch(setError(e));
        }
    }
};

export function authUserThank() {
    return (dispatch: any) => {
        return (userAPI.setAuthentication().then((res) => {
            if (res.resultCode === 0) {
                let { email, login, id } = res.data;
                dispatch(setAuthUser(email, login, id, true));
                userAPI.setPageProfile(id).then((res) => {
                    dispatch(setProfile(res));
                }).catch((e: any) => { dispatch(setError(e)) })
            }
        }));
    }
}
export const getCaptchaThank = (): ThunkAction<Promise<void>, authStateType, unknown, ActionAuthType> => {
    return async (dispatch) => {
        userAPI.getCaptcha().then((res: any) => {
            if (res.status === 200)
                dispatch(getCaptchaFromStore(res.data.url));
        })
        // .catch((e: any) => { dispatch(setError(e)) })
    }
}
type ActionThunkAppAuth = ThunkAction<Promise<void>, authStateType | appStateType, unknown, ActionAuthType | setErrorType>;
// export const getCaptchaThank = (): ActionThunkAppAuth => {
//     return async (dispatch) => {
//         try {
//             const res = await userAPI.getCaptcha();
//             console.log(res);
            
//             if (res.status === 200)
//                 getCaptchaFromStore(res.data.data?.url);
//         } catch (e) {
//             dispatch(setError(e))
//         }
//     }
// }

// export const loginThank = (email: string, password: string, rememberMe: boolean, captcha: string, submitProps: any, setNoFail: any) => {
//     return (dispatch: any) => {
//         userAPI.login(email, password, rememberMe, captcha).then((res: any) => {
//             if (res.data.resultCode === 0) {
//                 dispatch(authUserThank());
//                 dispatch(getCaptchaFromStore(null));
//             } else if (res.data.resultCode === 10) {
//                 dispatch(getCaptchaThank());
//                 setNoFail(true);
//             } else {
//                 setNoFail(true);
//                 submitProps({ errors: res.data.messages })
//             }
//         }).catch((e: any) => { dispatch(setError(e)) })
//     }
// }

export const loginThank = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
    submitProps: any,
    setNoFail: any
): ActionThunkAppAuth => {
    return async (dispatch: any) => {
        try {
            const res = await userAPI.login(email, password, rememberMe, captcha);
            if (res.data.resultCode === 0) {
                await dispatch(authUserThank());
                dispatch(getCaptchaFromStore(null));
            } else if (res.data.resultCode === 10) {
                await dispatch(getCaptchaThank());
                await setNoFail(true);
            } else {
                await setNoFail(true);
                await submitProps({ errors: res.data.messages })
            }
        } catch (e) {
            dispatch(setError(e))
        }
    }
}

// export const logoutThank = () => {
//     return (dispatch: any) => {
//         userAPI.logout().then((res: any) => {
//             if (res.data.resultCode === 0) {
//                 dispatch(setAuthUser(null, null, null, false));
//             } else {
//             }
//         }).catch((e: any) => { dispatch(setError(e)) });
//     }
// }

export const logoutThank = (): ActionThunkAppAuth => {
    return async (dispatch) => {
        try {
            const res = await userAPI.logout();
            if (res.data.resultCode === 0) {
                dispatch(setAuthUser(null, null, null, false));
            }
        } catch (e) {
            dispatch(setError(e));
        }
    }
}


// export const setCurrentProfileThunk = (usId: number, callback = (res: any) => ({ type: null, res })) => {
//     return (dispatch: any) => {
//         userAPI.setPageProfile(usId).then((res: any) => {
//             dispatch(setCurrentProfile(res));
//             dispatch(callback(res));
//         }).catch((e: any) => { dispatch(setError(e)) })
//     }
// }

type ActionThunkAppProfile = ThunkAction<Promise<void>, profileStateType | appStateType, unknown, actionProfileType | setErrorType>;
export const setCurrentProfileThunk = (
    usId: number,
    callback = (res: any) => ({ type: null, res })
): ActionThunkAppProfile => {
    return async dispatch => {
        try {
            const res = await userAPI.setPageProfile(usId);
            dispatch(setCurrentProfile(res));
            dispatch(callback(res));
        } catch (e) {
            dispatch(setError(e))
        }
    }
}

// export const getCurrentStatusThunk = (usId: number) => {
//     return (dispatch: any) => {
//         userAPI.getStatus(usId).then((res: any) => {
//             dispatch(setCurrentStatus(res));
//         }).catch((e: any) => { dispatch(setError(e)) })
//     }
// }
export const getCurrentStatusThunk = (usId: number): ActionThunkAppProfile => {
    return async (dispatch: any) => {
        userAPI.getStatus(usId).then((res: any) => {
            dispatch(setCurrentStatus(res));
        }).catch((e: any) => { dispatch(setError(e)) })
    }
}

// export const setCurrentStatusThunk = (status: string | null) => {
//     return (dispatch: any) => {
//         userAPI.setStatus(status).then((res: any) => {
//             if (res.resultCode === 0)
//                 dispatch(setCurrentStatus(status));
//         }).catch((e: any) => { dispatch(setError(e)) })
//     }
// }
export const setCurrentStatusThunk = (status: string | null): ActionThunkAppProfile => {
    return async (dispatch) => {
        userAPI.setStatus(status).then((res: any) => {
            if (res.resultCode === 0)
                dispatch(setCurrentStatus(status));
        }).catch((e: Error) => { dispatch(setError(e)) })
    }
}

type ActionThunkAppUser = ThunkAction<Promise<void>, initialUserStateType | appStateType, unknown, ActionUserType | setErrorType>
export const thunkAddUsers = (countUsersPage: number, numberCurrentPage: number, isLoad: boolean): ActionThunkAppUser => {
    return async (dispatch) => {
        if (!isLoad) dispatch(toggleIsLoader(true))
        userAPI.setUsersPageNumber(countUsersPage, numberCurrentPage).then((res: any) => {
            dispatch(setUser(res.data.items));
            dispatch(setTotalCountPage(res.data.totalCount));
            dispatch(setLengthCountPage(res.data.totalCount));
        }).then(() => dispatch(toggleIsLoader(false))).catch((e: Error) => { dispatch(setError(e)) });
    }
}
export const thunkAddNextUsers = (numPage: number, countUsersPage: number): ActionThunkAppUser => {
    return async (dispatch) => {
        dispatch(toggleIsLoader(true));
        userAPI.setUsersPageNumber(countUsersPage, numPage).then((res) => {
            dispatch(setUser(res.data.items));
        }).then(() => dispatch(toggleIsLoader(false))).catch((e: Error) => { dispatch(setError(e)) });
    }
}
export const thunkAddFollow = (id: number): ActionThunkAppUser => {
    return async (dispatch) => {
        dispatch(toggleDisabledFollow(id, true));
        userAPI.addFollowUser(id).then((res: any) => {
            if (res.data.resultCode === 0) {
                dispatch(follow(id));
            }
        }).then(() => { dispatch(toggleDisabledFollow(id, false)) }).catch((e: Error) => { dispatch(setError(e)) })
    }
}
export const thunkUnFollow = (id: number): ActionThunkAppUser => {
    return async (dispatch) => {
        dispatch(toggleDisabledFollow(id, true));
        userAPI.deleteFollowUser(id).then((res: any) => {
            if (res.data.resultCode === 0) {
                dispatch(unfollow(id));
            }
        }).then(() => { dispatch(toggleDisabledFollow(id, false)) }).catch((e: Error) => { dispatch(setError(e)) })
    }
}
export const savePhotoThunk = (photo: string | Blob): ActionThunkAppProfile => {
    return async (dispatch) => {
        userAPI.updatePhoto(photo).then((res: any) => {
            if (res.data.resultCode === 0) {
                dispatch(savePhoto(res.data.data.photos));
            }
        }).catch((e: Error) => { dispatch(setError(e)) })
    }
}
export const updateInfoProfileThunk = (info: profileType, submitProps: any, setModEdit: any): ActionThunkAppProfile => {
    return async (dispatch) => {
        userAPI.updateInfoProfile(info).then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(updateAboutMyInfo(info));
                setModEdit(false);
            } else {
                submitProps({ errors: res.data.messages[0] })
            }
        }).catch((e: Error) => { dispatch(setError(e)) })
    }
}