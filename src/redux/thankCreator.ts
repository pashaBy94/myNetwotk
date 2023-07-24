import { setErrorType, actionsApp, ActionsAppType } from "./appReducer";
import { ActionAuthType, actionsAuth } from "./authUserReducer";
import { actionProfileType, savePhoto, setCurrentProfile, setCurrentStatus, updateAboutMyInfo } from "./profilePageReducer";
import { resultCodeNumb } from "../dal/api";
import { toggleIsLoader, setUser, setTotalCountPage, follow, unfollow, toggleDisabledFollow, setLengthCountPage, initialUserStateType, ActionUserType } from "./usersPageReducer";
import { appStateType, authStateType, profileStateType, profileType } from "../typeAndInterface/typeAndInterface";
import { api_Profile } from "../dal/apiProfile";
import { api_Users } from "../dal/apiUsers";
import { api_Auth } from "../dal/apiAuth";
import { BaseThunkDispatchType } from "./redux-store";
import { AnyAction } from "redux";

export const setInitiallizedThank = (): BaseThunkDispatchType<ActionsAppType, appStateType> => {
    return async (dispatch) => {
        try {
            await dispatch(authUserThank());
            dispatch(actionsApp.setInitiallized());
        } catch (e) {
            dispatch(actionsApp.setError(e));
        }
    }
};

export function authUserThank() {
    return (dispatch: any) => {
        return (api_Auth.setAuthentication().then((res) => {
            if (res.resultCode === resultCodeNumb.success) {
                let { email, login, id } = res.data;
                dispatch(actionsAuth.setAuthUser(email, login, id, true));
                api_Profile.setPageProfile(id).then((res) => {
                    dispatch(actionsAuth.setProfile(res));
                }).catch((e: any) => { dispatch(actionsApp.setError(e)) })
            }
        }));
    }
}
export const getCaptchaThank = (): BaseThunkDispatchType<ActionAuthType | setErrorType, authStateType | appStateType> => {
    return async (dispatch) => {
        api_Auth.getCaptcha().then((res: any) => {
            if (res.status === 200)
                dispatch(actionsAuth.getCaptchaFromStore(res.data.url));
        })
            .catch((e: any) => { dispatch(actionsApp.setError(e)) })
    }
}
type ActionThunkAppAuth = BaseThunkDispatchType<ActionAuthType | setErrorType, authStateType | appStateType>;

export const loginThank = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
    submitProps: any,
    setNoFail: any
): ActionThunkAppAuth => {
    return async (dispatch) => {
        try {
            const res = await api_Auth.login(email, password, rememberMe, captcha);
            if (res.data.resultCode === resultCodeNumb.success) {
                await dispatch(authUserThank());
                dispatch(actionsAuth.getCaptchaFromStore(null));
            } else if (res.data.resultCode === resultCodeNumb.captchaGet) {
                await dispatch(getCaptchaThank());
                await setNoFail(true);
            } else {
                await setNoFail(true);
                await submitProps({ errors: res.data.messages })
            }
        } catch (e) {
            dispatch(actionsApp.setError(e))
        }
    }
}

export const logoutThank = (): ActionThunkAppAuth => {
    return async (dispatch) => {
        try {
            const res = await api_Auth.logout();
            if (res.data.resultCode === resultCodeNumb.success) {
                dispatch(actionsAuth.setAuthUser(null, null, null, false));
            }
        } catch (e) {
            dispatch(actionsApp.setError(e));
        }
    }
}

type ActionThunkAppProfile = BaseThunkDispatchType<actionProfileType | setErrorType, profileStateType | appStateType>;
export const setCurrentProfileThunk = (
    usId: number,
    callback = (res: any) => ({ type: null, res })
): ActionThunkAppProfile => {
    return async dispatch => {
        try {
            const res = await api_Profile.setPageProfile(usId);
            dispatch(setCurrentProfile(res));
            dispatch(callback(res));
        } catch (e) {
            dispatch(actionsApp.setError(e))
        }
    }
}

export const getCurrentStatusThunk = (usId: number): ActionThunkAppProfile => {
    return async (dispatch) => {
        api_Profile.getStatus(usId).then((res: any) => {
            dispatch(setCurrentStatus(res));
        }).catch((e: any) => { dispatch(actionsApp.setError(e)) })
    }
}

export const setCurrentStatusThunk = (status: string | null): ActionThunkAppProfile => {
    return async (dispatch) => {
        api_Profile.setStatus(status).then((res: any) => {
            if (res.resultCode === resultCodeNumb.success)
                dispatch(setCurrentStatus(status));
        }).catch((e: Error) => { dispatch(actionsApp.setError(e)) })
    }
}

export type ActionThunkAppUser = BaseThunkDispatchType<ActionUserType | setErrorType, initialUserStateType | appStateType> | AnyAction;
export const thunkAddUsers = (countUsersPage: number, numberCurrentPage: number, isLoad: boolean, friend?: boolean|null, term?: string): ActionThunkAppUser => {
    return async (dispatch) => {
        if (!isLoad) dispatch(toggleIsLoader(true))
        api_Users.setUsersPageNumber(countUsersPage, numberCurrentPage, friend, term).then((res: any) => {
            dispatch(setUser(res.data.items));
            dispatch(setTotalCountPage(res.data.totalCount));
            dispatch(setLengthCountPage(res.data.totalCount));
        }).then(() => dispatch(toggleIsLoader(false))).catch((e: Error) => { dispatch(actionsApp.setError(e)) });
    }
}
export const thunkAddNextUsers = (numPage: number, countUsersPage: number, friend?:boolean|null, term?: string): ActionThunkAppUser => {
    return async (dispatch) => {
        dispatch(toggleIsLoader(true));
        api_Users.setUsersPageNumber(countUsersPage, numPage, friend, term).then((res) => {
            dispatch(setUser(res.data.items));
        }).then(() => dispatch(toggleIsLoader(false))).catch((e: Error) => { dispatch(actionsApp.setError(e)) });
    }
}
export const thunkAddFollow = (id: number): ActionThunkAppUser => {
    return async (dispatch) => {
        api_Users.addFollowUser(id).then((res: any) => {
            if (res.data.resultCode === resultCodeNumb.success) {
                dispatch(follow(id));
            }
        }).then(() => { dispatch(toggleDisabledFollow(id, false)) }).catch((e: Error) => { dispatch(actionsApp.setError(e)) })
    }
}
export const thunkUnFollow = (id: number): ActionThunkAppUser => {
    return async (dispatch) => {
        dispatch(toggleDisabledFollow(id, true));
        api_Users.deleteFollowUser(id).then((res: any) => {
            if (res.data.resultCode === resultCodeNumb.success) {
                dispatch(unfollow(id));
            }
        }).then(() => { dispatch(toggleDisabledFollow(id, false)) }).catch((e: Error) => { dispatch(actionsApp.setError(e)) })
    }
}
export const savePhotoThunk = (photo: string | Blob): ActionThunkAppProfile => {
    return async (dispatch) => {
        api_Profile.updatePhoto(photo).then((res: any) => {
            if (res.data.resultCode === resultCodeNumb.success) {
                dispatch(savePhoto(res.data.data.photos));
            }
        }).catch((e: Error) => { dispatch(actionsApp.setError(e)) })
    }
}
export const updateInfoProfileThunk = (info: profileType, submitProps: any, setModEdit: any): ActionThunkAppProfile => {
    return async (dispatch) => {
        api_Profile.updateInfoProfile(info).then((res) => {
            if (res.data.resultCode === resultCodeNumb.success) {
                dispatch(updateAboutMyInfo(info));
                setModEdit(false);
            } else {
                submitProps({ errors: res.data.messages[0] })
            }
        }).catch((e: Error) => { dispatch(actionsApp.setError(e)) })
    }
}