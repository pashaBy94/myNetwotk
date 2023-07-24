import st from "./DialogIte.module.css";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
export type DialogItemType = {
    id:number,
    title:string,
};

const DialogItem:FC<DialogItemType> = ({id, title})=>{
    const path = `/dialogs/${id}`;
    return(
            <div className={`${st.dialog__item}`} >
                <NavLink 
                    to={path} 
                    className={`${st.dialog__item_user}`}
                ><img src="noava.png" className={st.dialog__item_user_hoto} alt=""/> {title}</NavLink>
            </div>
    )
}
export default DialogItem
