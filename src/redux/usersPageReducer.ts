import { FOLLOW, UNFOLLOW, SET_USERS, SET_TOTAL_COUNT_PAGE, SET_LENGTH_COUNT_PAGE, SET_CURRENT_PAGE, TOGGLE_ISLOADER, TOGGLE_DISABLED_FOLLOW } from "./types";
import { followUnfollowHelper } from "./../utils/helpers";

type followType = {
    type: typeof FOLLOW,
    id: number
};
type unfollowType = {
    type: typeof UNFOLLOW,
    id: number
};
type setUserType = {
    type: typeof SET_USERS,
    us: Array<any>
};
type setTotalCountPageType = {
    type: typeof SET_TOTAL_COUNT_PAGE,
    totalCountPage: number
};
type setLengthCountPageType = {
    type: typeof SET_LENGTH_COUNT_PAGE,
    leng: number,
};
export type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
};
type toggleIsLoaderType = {
    type: typeof TOGGLE_ISLOADER,
    propLoader: boolean
};
type toggleDisabledFollowType = {
    type: typeof TOGGLE_DISABLED_FOLLOW,
    id: number,
    isLoad: boolean,
};

export const follow = (id: number):followType => ({ type: FOLLOW, id });
export const unfollow = (id:number):unfollowType => ({ type: UNFOLLOW, id });
export const setUser = (us:Array<any>): setUserType => ({ type: SET_USERS, us });
export const setTotalCountPage = (totalCountPage:number):setTotalCountPageType => ({ type: SET_TOTAL_COUNT_PAGE, totalCountPage });
export const setLengthCountPage = (leng:number):setLengthCountPageType => ({ type: SET_LENGTH_COUNT_PAGE, leng });
export const setCurrentPage = (currentPage:number):setCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsLoader = (propLoader:boolean):toggleIsLoaderType => ({ type: TOGGLE_ISLOADER, propLoader });
export const toggleDisabledFollow = (id:number, isLoad:boolean):toggleDisabledFollowType => ({ type: TOGGLE_DISABLED_FOLLOW, id, isLoad });

const initialState:initialStateType = {
    users: [],
    numberCurrentPage: 1,
    countUsersPage: 10,
    totalCountPage: 0,
    lengthCountPage: [],
    isLoader: true,
    isDisabledFollowButton: [],
};
type initialStateType = {
    users: Array<any>,
    numberCurrentPage: number,
    countUsersPage: number,
    totalCountPage: number,
    lengthCountPage: Array<Array<number>>,
    isLoader: boolean,
    isDisabledFollowButton: Array<number>,
};

export function usersPageReducer(state = initialState, action:any):initialStateType {
    let newState = { ...state };
    switch (action.type) {
        case FOLLOW: {
            followUnfollowHelper(newState.users, action.id, true);
            break;
        }
        case UNFOLLOW: {
            followUnfollowHelper(newState.users, action.id, false);
            break;
        }
        case SET_USERS: {
            newState.users = [...action.us];
            break;
        }
        case SET_TOTAL_COUNT_PAGE: {
            newState.totalCountPage = action.totalCountPage;
            break;
        }
        case SET_LENGTH_COUNT_PAGE: {
            let a:any = [], b:Array<number> = [];
            for (let i = 1; i <= action.leng; i++) {
                b.push(i);
                if (i % newState.countUsersPage === 0 || i ===  action.leng) {
                    a[i/newState.countUsersPage] = [...b];
                    b.length = 0;
                }
            }
            newState.lengthCountPage = a;
            break;
        }
        case SET_CURRENT_PAGE: {
            newState.numberCurrentPage = action.currentPage;
            break;
        }
        case TOGGLE_ISLOADER: {
            newState.isLoader = action.propLoader;
            break;
        }
        case TOGGLE_DISABLED_FOLLOW: {
            if (action.isLoad) {
                if (!newState.isDisabledFollowButton.includes(action.id))
                    newState.isDisabledFollowButton.push(action.id);
            } else {
                newState.isDisabledFollowButton = newState.isDisabledFollowButton.filter((id) => id !== action.id)
            }
            break;
        }
        default: { }
    }
    return newState;
}
