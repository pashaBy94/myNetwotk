import { dialogsPageReducer } from "./dialogsPageReducer";
import { profilPageReducer } from "./profilePageReducer";

export let store = {
    _state:{
        profilePage: {
            firstPostText: '',
        postsData: [
        {post: 'Все ок, javaScript и HTML5 an do!', id: 1, likescount: 11},
        {post: 'Все ', id: 2, likescount: 11},
        {post: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 3, likescount: 11},
        {post: 'Все ок, javaScript и HTML5 an do!', id: 4, likescount: 11},
        ],
        },
        dialogsPage:{
            data: [
                {name: 'Дима', id: 1},
                {name: 'Саша', id: 2},
                {name: 'Ника', id: 3},
                {name: 'Макс', id: 4},
                {name: 'Ганс', id: 5},
                {name: 'Экдер', id: 6},
                {name: 'Экдер', id: 7},
                {name: 'Экдер', id: 8},
                {name: 'Экдер', id: 9},
                {name: 'Экдер', id: 10},
                {name: 'Экдер', id: 11},
                {name: 'Экдер', id: 12},
            ],
            messag: [
                {messag: 'Все ок, javaScript и HTML5 an do!', id: 1},
                {messag: 'Все ', id: 2},
                {messag: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 3},
                {messag: 'Все ок, javaScript и HTML5 an do!', id: 4},
                {messag: 'Все ок, javaScript и HTML5 an do!', id: 5},
                {messag: 'Все ', id: 6},
                {messag: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 7},
                {messag: 'Все ок, javaScript и HTML5 an do!', id: 8},
                {messag: 'Все ок, javaScript и HTML5 an do!', id: 9},
                {messag: 'Все ', id: 10},
                {messag: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 11},
                {messag: 'Все ок, javaScript и HTML5 an do!', id: 12},
                {messag: 'Все ок, javaScript и HTML5 an do!', id: 13},
                {messag: 'Все ', id: 14},
                {messag: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 15},
                {messag: 'Все ок, javaScript и HTML5 an do!', id: 16},
                {messag: 'Все ок, javaScript и HTML5 an do!', id: 17},
                {messag: 'Все ', id: 18},
                {messag: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 19},
                {messag: 'Все ок, javaScript и HTML5 an do!', id: 20},
                {messag: 'Все ок, javaScript и HTML5 an do!', id: 21},
                {messag: 'Все ', id: 22},
                {messag: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 23},
                {messag: 'Все ок, javaScript и HTML5 an do!', id: 24},
            ],
            newMessagText: '',
        },
    },
    _countRemoveState:0,

    getState(){
        this._countRemoveState++;
        return this._state;
    },
    subscribe(observer){
        this.callsubscribe = observer;
    }, 
    dispatch(action){
        this._state.profilePage = profilPageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this.callsubscribe(this);
    }
};

