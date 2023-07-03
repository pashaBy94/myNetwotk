import { qala, qala2, qala3, qala4 } from "../components/Musics/sound/sound.js";
import { MusicStateType } from "../typeAndInterface/typeAndInterface.js";

const initialState: MusicStateType = {
    listMusics: [
        { content: qala, name: 'Dolphin Chatter-Rimler, Walter' },
        { content: qala2, name: 'Tyrannosaurus Rex-Waterman, J. Douglas' },
        { content: qala3, name: 'Metroid Door-Pierian Press' },
        { content: qala4, name: 'Cartoon Whistle-Rimler, Walter' },
        { content: qala, name: 'Hiccups Baby-Waterman, J. Douglas' },
        { content: qala2, name: 'Hiccups Man-Pierian Press' },
        { content: qala3, name: 'Quack Quack-Waterman, J. Douglas' },
        { content: qala4, name: 'Yelling Yee Ha-Rimler, Walter' },
        { content: qala, name: 'Dolphin Chatter-Pierian Press' },
        { content: qala2, name: 'Hiccups Kid-Pierian Press' },
    ],
};


export function musicReducer(state = initialState, action: any):MusicStateType {
    let newState:MusicStateType = { ...state };
    switch (action.type) {
        case true: {

            break;
        }
        default: { }
    }
    return newState
}
