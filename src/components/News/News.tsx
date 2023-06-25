import React from "react";

function S1():React.JSX.Element{
    return(
        <div>gambit</div>
    )
}
function S2():React.JSX.Element{
    return(
        <div>damba</div>
    )
}

function LetDet(prop:any):React.JSX.Element{
    return(
        <div>
            {prop.children}
        </div>
    )
}

export default function News():React.JSX.Element {
    return (
        <LetDet>
            <S1 />
            <S2 />
        </LetDet>
    )
}

