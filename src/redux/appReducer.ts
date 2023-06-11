import { SET_INITIALLIZED, SET_TOP_FRIENDS, SET_ERROR } from "./types";

type setInitiallizedType = {
    type: typeof SET_INITIALLIZED
};
type setTopFriendsType = {
    list: Array<String>,
    type: typeof SET_TOP_FRIENDS,
};
type setErrorType = {
    error: object | string,
    type: typeof SET_ERROR
};
export const setInitiallized = (): setInitiallizedType => ({ type: SET_INITIALLIZED });
export const setTopFriends = (list: Array<string>): setTopFriendsType => ({ type: SET_TOP_FRIENDS, list });
export const setError = (error: string | object): setErrorType => ({ type: SET_ERROR, error });

export type initialStateType = {
    initiallized: boolean,
    topFriends: Array<Object>
    error: null | Object
}

const initialState: initialStateType = {
    initiallized: false,
    topFriends: [{ img: "noava.png", name: 'Dima', id: '23566' }, { img: "noava.png", name: 'Lola', id: '23567' }, { img: "noava.png", name: 'Miha', id: '23557' }, { img: "noava.png", name: 'Miha', id: '23557' }, { img: "noava.png", name: 'Miha', id: '23557' }, { img: "noava.png", name: 'Miha', id: '23557' }],
    error: null,
};

export function appReducer(state = initialState, action:any): initialStateType {
    let newState = { ...state };
    switch (action.type) {
        case SET_INITIALLIZED: {
            newState.initiallized = true;
            break;
        }
        case SET_TOP_FRIENDS: {
            newState.topFriends = action.list;
            break;
        }
        case SET_ERROR: {
            newState.error = action.error;
            break;
        }
        default: { }
    }
    return newState
}