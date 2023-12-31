import React, { memo } from "react";
import st from './Friends.module.css';
import { NavLink } from "react-router-dom";
import ListFriends from "./ListFriends/ListFriends";

export default memo(function Friends(){
    return(
        <div className={st.friends}>
            <NavLink to='/users' className={nD=>nD.isActive?st.active: ''}><h3 className={st.friends__title}>Top friends</h3></NavLink>
            <ListFriends />
        </div>
    )
})