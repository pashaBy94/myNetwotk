import { FOLLOW, UNFOLLOW, SET_USERS, SET_TOTAL_COUNT_PAGE, SET_LENGTH_COUNT_PAGE, SET_CURRENT_PAGE, TOGGLE_ISLOADER, TOGGLE_DISABLED_FOLLOW } from "./types";
import { followUnfollowHelper } from "../utils/helpers";

export const follow = (id) => ({ type: FOLLOW, id });
export const unfollow = (id) => ({ type: UNFOLLOW, id });
export const setUser = (us) => ({ type: SET_USERS, us });
export const setTotalCountPage = (totalCountPage) => ({ type: SET_TOTAL_COUNT_PAGE, totalCountPage });
export const setLengthCountPage = (leng) => ({ type: SET_LENGTH_COUNT_PAGE, leng });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsLoader = (propLoader) => ({ type: TOGGLE_ISLOADER, propLoader });
export const toggleDisabledFollow = (id, isLoad) => ({ type: TOGGLE_DISABLED_FOLLOW, id, isLoad });

const initialState = {
    users: [],
    numberCurrentPage: 1,
    countUsersPage: 10,
    totalCountPage: 0,
    lengthCountPage: [],
    isLoader: true,
    isDisabledFollowButton: [],
};

export function usersPageReducer(state = initialState, action) {
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
            let a = [], b = [];
            for (let i = 1; i <= action.leng; i++) {
                b.push(i)
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
