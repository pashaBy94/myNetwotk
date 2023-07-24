import React, { useRef, useState, useEffect, FC } from "react";
import st from "./ListUsers.module.css"
import OneUser from "./OneUser/OneUser";
import { listComponentWriteUsers, subscribeScroll } from "../../../utils/helpers";
import ButtonToTop from "../../general/ButtonToTop/ButtonToTop";
import { useSelector } from "react-redux";
import { getUsers } from "../../../redux/selectors";

type PropType = {};
const ListUsers:FC<PropType> = ()=> {
    const [isBtn, setIsBtn] = useState<boolean>(false);
    const refList = useRef<HTMLDivElement>(null);
    const users = useSelector(getUsers);

    useEffect(()=>{
        window.addEventListener('scroll', ()=> subscribeScroll(refList, setIsBtn));
        return ()=>{
            window.removeEventListener('scroll',  ()=> subscribeScroll(refList, setIsBtn));
        }
    })
    return (
        <div className={st.users__content_list} ref={refList}>
            <hr className={st.users__content_line}/>
            {listComponentWriteUsers(users, OneUser)}
            <ButtonToTop isBtn={isBtn}/>
        </div>
    )
}
export default ListUsers;