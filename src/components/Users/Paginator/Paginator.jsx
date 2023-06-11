import React, { useEffect, useState } from "react";
import st from "./Paginator.module.css";
import { initId } from "../../../utils/helpers";
import cn from "classnames";

export default function Paginator(props) {
    const [count, setCount] = useState(1);
    const getNumberCountPages = (numberCurrentPage, callBack, clName, lengthCountPage) => {
        if (lengthCountPage.length > 0) {
            const arr = lengthCountPage[count]
            const arrUsers = [];
            arr.forEach(el => {
                arrUsers.push((<span
                    className={numberCurrentPage === el ? clName.steps__current : clName.steps__nocurrent}
                    key={initId()}
                    onClick={() => {
                        callBack(el);
                        props.setCurrentPage(el);
                    }}
                >{el}</span>))
            });
            return arrUsers;
        }
    }
    function setPrev() {
        setCount(el=>el-1);
    }
    function setNext() {
        setCount(el=>el+1);
    }
    useEffect(()=>{
        props.setCurrentPage(1);
        props.setAjaxAndWriteUser(1);
    },[])
    return (
        <div className={st.steps}>
            <button onClick={setPrev} disabled={count===1} className={cn({[st.no__active]:count===1, [st.steps__button]:true})}>prev</button>
            {getNumberCountPages(props.numberCurrentPage, props.setAjaxAndWriteUser, st, props.lengthCountPage)}
            <button onClick={setNext} disabled={count===props.lengthCountPage.length} className={cn({[st.no__active]:count===props.lengthCountPage.length, [st.steps__button]:true})}>next</button>
        </div>
    )
}
