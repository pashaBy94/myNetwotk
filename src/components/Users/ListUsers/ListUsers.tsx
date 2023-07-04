import React, { useRef, useState, useEffect, FC } from "react";
import st from "./ListUsers.module.css"
import OneUser from "./OneUser/OneUser";
import { listComponentWriteUsers, subscribeScroll } from "../../../utils/helpers";
import ButtonToTop from "../../general/ButtonToTop/ButtonToTop";
import { PropsType } from "../UsersC";

type PropType = {
    props: PropsType
};
const ListUsers:FC<PropType> = ({ props })=> {
    const [isBtn, setIsBtn] = useState<boolean>(false);
    const refList = useRef<HTMLDivElement>(null);
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
export default ListUsers;