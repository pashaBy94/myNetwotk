import { SET_CURRENT_MOVE, SET_COMBINATION_RED, SET_COMBINATION_BLUE, CROSS_OR_ZERO_EXAMINATION, SET_NAME_BLUE, SET_NAME_RED, SET_CURRENT_VICTORI, SET_NEW_GAME_COZ } from "./types";

export const setCurrentMove = (current)=> ({type: SET_CURRENT_MOVE, current});
export const setCombinationRed = (num)=> ({type: SET_COMBINATION_RED, num});
export const setCombinationBlue = (num)=> ({type: SET_COMBINATION_BLUE, num});
export const crossOrZeroExamination = ()=> ({type: CROSS_OR_ZERO_EXAMINATION});
export const setCurrentVictori = (name)=> ({type: SET_CURRENT_VICTORI, name});
export const setNewGameCrossOrZero = ()=> ({type: SET_NEW_GAME_COZ});
export const setNameRed = (name)=> ({type: SET_NAME_RED, name});
export const setNameBlue = (name)=> ({type: SET_NAME_BLUE, name});




const initialState = {
    crossOrZero: {
      victoriCombination: [
        [11,12,13],[21,22,23],[31,32,33],
        [11,21,31],[12,22,32],[13,23,33],
        [11,22,33],[13,22,31]],
      countMove: 9,
      currentMove: 'red',
      currentVictori: '',
      red:{
        nameRed: '',
        victoriRed: 0,
        combinationRed: [],
      },
      blue:{
        nameBlue: '',
        victoriBlue: 0,
        combinationBlue: [],
      }
    }
};

export function gamesReducer(state = initialState, action){
    let newState = structuredClone(state);
    switch (action.type) {
                case SET_CURRENT_MOVE:{
                  newState.crossOrZero.currentMove = action.current;
                    break;
                }
                case SET_COMBINATION_RED:{
                  newState.crossOrZero.red.combinationRed.push(action.num);
                    break;
                }
                case SET_COMBINATION_BLUE:{
                  newState.crossOrZero.blue.combinationBlue.push(action.num);
                    break;
                }
                case CROSS_OR_ZERO_EXAMINATION:{
                    const arr = newState.crossOrZero.victoriCombination;
                    const red = newState.crossOrZero.red.combinationRed;
                    const blue= newState.crossOrZero.blue.combinationBlue;
                    let result;
                    arr.forEach((ar)=>{
                      let countR=0;
                      let countB=0;
                      ar.forEach((a)=>{
                        if(red.includes(String(a))) countR++;
                        if(countR === 3) {
                          result = 'red';
                          newState.crossOrZero.red.victoriRed++;
                          return
                        }
                        if(blue.includes(String(a))) countB++;
                        if(countB === 3) {
                          result = 'blue';
                          newState.crossOrZero.blue.victoriBlue++;
                          return
                        }
                      });
                    });
                    newState.crossOrZero.currentVictori = result;
                    break;
                }
                case SET_NEW_GAME_COZ:{
                  console.log('end');
                  newState.crossOrZero.currentMove = 'red';
                  newState.crossOrZero.currentVictori = '';
                  newState.crossOrZero.red.combinationRed = [];
                  newState.crossOrZero.blue.combinationBlue = [];
                    break;
                }
                case SET_NAME_RED:{
                  newState.crossOrZero.red.nameRed = action.name;
                    break;
                }
                case SET_NAME_BLUE:{
                  newState.crossOrZero.blue.nameBlue = action.name;
                    break;
                }
                default: {}
            }
            return newState
}
