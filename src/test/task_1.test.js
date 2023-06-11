// const { test } = require('picomatch');
// const bored = require('./iko');

// test(
//     'bored function',
//     () => {
//         expect(bored('3465146643')).toBe('313')
//     }

// );
// test(
//     'bored function',
//     () => {
//         expect(bored('3465146643')).toBe('313')
//     }

// );

// describe(
//     'bored function',
//     () => {
//         const testCase = [
//             {
//                 in: '346514663',
//                 out: '313'
//             },
//             {
//                 in: '2134651466',
//                 out: '2131'
//             },
//             {
//                 in: '346351466',
//                 out: '331'
//             },
//             {
//                 in: '340651466',
//                 out: '301'
//             },
//             {
//                 in: '00034651466',
//                 out: '00031'
//             },
//         ];
//         testCase.forEach((el,i)=>{
//             it(`${i}`,
//             ()=>{
//                 expect(bored(el.in)).toBe(el.out)
//             });
//         })
//     }
// );

// describe(
//     'Metod moi',
//     ()=>{
//         const arr = [{st:'4562345', out: [2,3]},{st:'24562345', out: [2,2,3]},{st:'234562345', out: [2,3,2,3]},{st:'23456245', out: [2,3,2]},{st:'23456234511', out: [2,3,2,3,1,1]}];
//         arr.forEach((el,i)=>{
//             it(`${i}`,
//             ()=>{
//                 expect(bored(el.st)).toEqual(el.out);
//             });
//         });
//     }
// );

import React from "react";
import { profilPageReducer, postAdd, postDelete } from "../redux/profilePageReducer";


const initialState = {
    postsData: [
        { post: 'Все ок, javaScript и HTML5 an do!', id: 1, likescount: 11 },
        { post: 'Все ', id: 2, likescount: 11 },
        { post: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 3, likescount: 11 },
        { post: 'Все ок, javaScript и HTML5 an do!', id: 4, likescount: 11 },
    ]
};

it(
    'profile Page Reducer',
    () => {
        let action = postAdd('New dialogs Page');
        let newState = profilPageReducer(initialState, action);
        expect(newState.postsData[4].post).toBe('New dialogs Page');
    }

);
// it(
//     'profile Page Reducer delete',
//     () => {
//         let action = postDelete(2);
//         let newState = profilPageReducer(initialState, action);
//         expect(newState.postsData.length).toBe(3);
//     }

// );