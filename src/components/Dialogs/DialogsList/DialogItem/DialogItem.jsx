import React from "react";
import st from "./DialogItem.module.css"
import { NavLink } from "react-router-dom";

export default function DialogItem({id, title}){
    const path = `/dialogs/${id}`;
    return(
            <div className={`${st.dialog__item}` }>
                <NavLink to={path} className={`${st.dialog__item_user}`}><img src="noava.png" className={st.dialog__item_user_hoto} alt=""/> {title}</NavLink>
            </div>
    )
}