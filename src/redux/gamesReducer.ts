import { gamesStateType } from "../typeAndInterface/typeAndInterface";
import { SET_CURRENT_MOVE, SET_COMBINATION_RED, SET_COMBINATION_BLUE, CROSS_OR_ZERO_EXAMINATION, SET_NAME_BLUE, SET_NAME_RED, SET_CURRENT_VICTORI, SET_NEW_GAME_COZ } from "./types";

type setCurrentMoveType = {
  type: typeof SET_CURRENT_MOVE,
  current: string
};
type setCombinationRedType = {
  type: typeof SET_COMBINATION_RED,
  num: number
};
type setCombinationBlueType = {
  type: typeof SET_COMBINATION_BLUE,
  num: number
};
type crossOrZeroExaminationType = {
  type: typeof CROSS_OR_ZERO_EXAMINATION
};
type setCurrentVictoriType = {
  type: typeof SET_CURRENT_VICTORI,
  name: string
};
type setNewGameCrossOrZeroType = {
  type: typeof SET_NEW_GAME_COZ
};
type setNameRedType = {
  type: typeof SET_NAME_RED,
  name: string
};
type setNameBlueType = {
  type: typeof SET_NAME_BLUE,
  name: string
};

export const setCurrentMove = (current: string): setCurrentMoveType => ({ type: SET_CURRENT_MOVE, current });
export const setCombinationRed = (num: number | never): setCombinationRedType => ({ type: SET_COMBINATION_RED, num });
export const setCombinationBlue = (num: number | never): setCombinationBlueType => ({ type: SET_COMBINATION_BLUE, num });
export const crossOrZeroExamination = (): crossOrZeroExaminationType => ({ type: CROSS_OR_ZERO_EXAMINATION });
export const setCurrentVictori = (name: string): setCurrentVictoriType => ({ type: SET_CURRENT_VICTORI, name });
export const setNewGameCrossOrZero = (): setNewGameCrossOrZeroType => ({ type: SET_NEW_GAME_COZ });
export const setNameRed = (name: string): setNameRedType => ({ type: SET_NAME_RED, name });
export const setNameBlue = (name: string): setNameBlueType => ({ type: SET_NAME_BLUE, name });

export type actionGameType = setCurrentMoveType | setCombinationRedType | setCombinationBlueType |
  crossOrZeroExaminationType | setCurrentVictoriType | setNewGameCrossOrZeroType | setNameRedType |
  setNameBlueType;
const initialState = {
  crossOrZero: {
    victoriCombination: [
      [11, 12, 13], [21, 22, 23], [31, 32, 33],
      [11, 21, 31], [12, 22, 32], [13, 23, 33],
      [11, 22, 33], [13, 22, 31]],
    countMove: 9,
    currentMove: 'red',
    currentVictori: '',
    red: {
      nameRed: '',
      victoriRed: 0,
      combinationRed: [],
    },
    blue: {
      nameBlue: '',
      victoriBlue: 0,
      combinationBlue: [],
    }
  }
};

export function gamesReducer(state = initialState, action: actionGameType): gamesStateType {
  let newState: gamesStateType = structuredClone(state);
  switch (action.type) {
    case SET_CURRENT_MOVE: {
      newState.crossOrZero.currentMove = action.current;
      break;
    }
    case SET_COMBINATION_RED: {
      newState.crossOrZero.red.combinationRed.push(action.num);
      break;
    }
    case SET_COMBINATION_BLUE: {
      newState.crossOrZero.blue.combinationBlue.push(action.num);
      break;
    }
    case CROSS_OR_ZERO_EXAMINATION: {
      const arr = newState.crossOrZero.victoriCombination;
      const red = newState.crossOrZero.red.combinationRed;
      const blue = newState.crossOrZero.blue.combinationBlue;
      let result: any;
      arr.forEach((ar) => {
        let countR = 0;
        let countB = 0;
        ar.forEach((a: number) => {
          if (red.includes(String(a))) countR++;
          if (countR === 3) {
            result = 'red';
            newState.crossOrZero.red.victoriRed++;
            return
          }
          if (blue.includes(String(a))) countB++;
          if (countB === 3) {
            result = 'blue';
            newState.crossOrZero.blue.victoriBlue++;
            return
          }
        });
      });
      newState.crossOrZero.currentVictori = result;
      break;
    }
    case SET_NEW_GAME_COZ: {
      console.log('end');
      newState.crossOrZero.currentMove = 'red';
      newState.crossOrZero.currentVictori = '';
      newState.crossOrZero.red.combinationRed = [];
      newState.crossOrZero.blue.combinationBlue = [];
      break;
    }
    case SET_NAME_RED: {
      newState.crossOrZero.red.nameRed = action.name;
      break;
    }
    case SET_NAME_BLUE: {
      newState.crossOrZero.blue.nameBlue = action.name;
      break;
    }
    default: { }
  }
  return newState
}
