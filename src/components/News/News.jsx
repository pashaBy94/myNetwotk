import React from "react";

function S1(){
    return(
        <div>gambit</div>
    )
}
function S2(){
    return(
        <div>damba</div>
    )
}

function LetDet(prop){
    return(
        <div>
            {prop.children}
        </div>
    )
}

export default function News(prop) {
    return (
        <LetDet>
            <S1 />
            <S2 />
        </LetDet>
    )
}

