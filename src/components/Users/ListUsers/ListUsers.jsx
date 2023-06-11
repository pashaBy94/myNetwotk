import React from "react";
import st from "./ListUsers.module.css"
import OneUser from "./OneUser/OneUser";
import { listComponentWriteUsers } from "../../../utils/helpers";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ButtonToTop from "../../general/ButtonToTop/ButtonToTop";
import { subscribeScroll } from "../../../utils/helpers";

export default function ListUsers({ props }) {
    const [isBtn, setIsBtn] = useState(false);
    const refList = useRef(null);
    useEffect(()=>{
        window.addEventListener('scroll', ()=> subscribeScroll(refList, setIsBtn));
        return ()=>{
            window.removeEventListener('scroll',  ()=> subscribeScroll(refList, setIsBtn));
        }
    })
    return (
        <div className={st.users__content_list} ref={refList}>
            <hr className={st.users__content_line}/>
            {listComponentWriteUsers(props, OneUser)}
            <ButtonToTop isBtn={isBtn}/>
        </div>
    )
}