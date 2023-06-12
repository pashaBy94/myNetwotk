import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import { dialogsPageReducer } from "./dialogsPageReducer.ts";
import { profilPageReducer } from "./profilePageReducer";
import { usersPageReducer } from './usersPageReducer';
import { authUserReducer } from './authUserReducer.ts';
import { appReducer } from './appReducer.ts';
import { musicReducer } from './musicReducer';
import thunkMiddleware from 'redux-thunk';
import { gamesReducer } from './gamesReducer.ts';


const reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilPageReducer,
    usersPage: usersPageReducer,
    authUser: authUserReducer,
    app: appReducer,
    musicPage: musicReducer,
    games: gamesReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));