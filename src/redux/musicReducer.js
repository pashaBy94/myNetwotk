import qala from "./../components/Musics/sound/sound-1.mp3"; // импорт музыки
import qala2 from "./../components/Musics/sound/sound-2.mp3"; // импорт музыки
import qala3 from "./../components/Musics/sound/sound-3.mp3"; // импорт музыки
import qala4 from "./../components/Musics/sound/sound-4.mp3"; // импорт музыки
import qala5 from "./../components/Musics/sound/sound-1.mp3"; // импорт музыки
import qala6 from "./../components/Musics/sound/sound-2.mp3"; // импорт музыки
import qala7 from "./../components/Musics/sound/sound-3.mp3"; // импорт музыки
import qala8 from "./../components/Musics/sound/sound-4.mp3"; // импорт музыки
import qala9 from "./../components/Musics/sound/sound-1.mp3"; // импорт музыки
import qala10 from "./../components/Musics/sound/sound-2.mp3"; // импорт музыки

const initialState = {
    listMusics : [
        {content: qala, name:'Dolphin Chatter-Rimler, Walter'}, 
        {content: qala2, name:'Tyrannosaurus Rex-Waterman, J. Douglas'}, 
        {content: qala3, name:'Metroid Door-Pierian Press'}, 
        {content: qala4, name:'Cartoon Whistle-Rimler, Walter'},
        {content: qala5, name:'Hiccups Baby-Waterman, J. Douglas'},
        {content: qala6, name:'Hiccups Man-Pierian Press'},
        {content: qala7, name:'Quack Quack-Waterman, J. Douglas'},
        {content: qala8, name:'Yelling Yee Ha-Rimler, Walter'},
        {content: qala9, name:'Dolphin Chatter-Pierian Press'},
        {content: qala10, name:'Hiccups Kid-Pierian Press'},
    ],
};

export function musicReducer(state = initialState, action){
    let newState = {...state};
    switch (action.type) {
                case true:{
                    
                    break;
                }
                default: {}
            }
            return newState
}
