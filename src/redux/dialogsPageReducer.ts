import { stateDialogsType } from "../typeAndInterface/typeAndInterface";
import { ADD_MESSAG } from "./types";

type messagAddType = {
    type: typeof ADD_MESSAG,
    mes: string
};

export const messagAdd = (mes:string):messagAddType => ({type: ADD_MESSAG, mes});



const initialState: stateDialogsType = {
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
        {messag: 'Все ок, javaScript и HTML5 an do!', id: 1, itIs: true, time: '11:23'},
        {messag: 'Все ', id: 2, itIs: false, time: '11:23'},
        {messag: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 3, itIs: false, time: '11:23'},
        {messag: 'Все ок, javaScript и HTML5 an do!', id: 4, itIs: true, time: '11:23'},
        {messag: 'Все ок, javaScript и HTML5 an do!', id: 5, itIs: false, time: '11:23'},
        {messag: 'Все ', id: 6, itIs: true, time: '11:23'},
        {messag: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 7, itIs: false, time: '11:24'},
        {messag: 'Все ок, javaScript и HTML5 an do!', id: 8, itIs: true, time: '11:24'},
        {messag: 'Все ок, javaScript и HTML5 an do!', id: 9, itIs: false, time: '11:24'},
        {messag: 'Все ', id: 10, itIs: true, time: '11:24'},
        {messag: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 11, itIs: false, time: '11:25'},
        {messag: 'Все ок, javaScript и HTML5 an do!', id: 12, itIs: true, time: '11:25'},
        {messag: 'Все ок, javaScript и HTML5 an do!', id: 13, itIs: false, time: '11:25'},
        {messag: 'Все ', id: 14, itIs: true, time: '11:25'},
        {messag: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 15, itIs: false, time: '11:25'},
        {messag: 'Все ок, javaScript и HTML5 an do!', id: 16, itIs: true, time: '11:25'},
        {messag: 'Все ок, javaScript и HTML5 an do!', id: 17, itIs: true, time: '11:25'},
        {messag: 'Все ', id: 18, itIs: false, time: '11:25'},
        {messag: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 19, itIs: true, time: '11:26'},
        {messag: 'Все ок, javaScript и HTML5 an do!', id: 20, itIs: false, time: '11:26'},
        {messag: 'Все ок, javaScript и HTML5 an do!', id: 21, itIs: true, time: '11:26'},
        {messag: 'Все ', id: 22, itIs: false, time: '11:26'},
        {messag: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 23, itIs: true, time: '11:26'},
        {messag: 'Все ок, javaScript и HTML5 an do!', id: 24, itIs: true, time: '11:26'}
    ]
};

export function dialogsPageReducer(state = initialState, action:any):stateDialogsType{
    let newState = {...state};
    switch (action.type) {
                case ADD_MESSAG:{
                    if(action.mes !== ''){
                        let time = new Date();
                        let mess = {messag:action.mes, id: newState.messag.length+1, itIs: true, time: `${time.getHours()}:${time.getMinutes()}`};
                        state.messag.push(mess);
                        newState.messag = [...state.messag];
                    }
                    break;
                }
                default: {}
            }
            return newState
}
