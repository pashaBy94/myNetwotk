import { Action, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { dialogsPageReducer } from "./dialogsPageReducer";
import { profilPageReducer } from "./profilePageReducer";
import { usersPageReducer } from './usersPageReducer';
import { authUserReducer } from './authUserReducer';
import { appReducer } from './appReducer';
import { musicReducer } from './musicReducer';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { gamesReducer } from './gamesReducer';


export const reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilPageReducer,
    usersPage: usersPageReducer,
    authUser: authUserReducer,
    app: appReducer,
    musicPage: musicReducer,
    games: gamesReducer,
});
export type ActionsType<T> = T extends { [key: string]: (...args: Array<any>) => infer U} ? U : never ;
export type BaseThunkDispatchType<A extends Action, S, R = Promise<void>> = ThunkAction<R, S, unknown, A>;
export const store = createStore(reducers, applyMiddleware(thunkMiddleware));