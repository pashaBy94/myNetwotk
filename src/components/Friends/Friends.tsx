import React, { memo } from "react";
import st from './Friends.module.css';
import { NavLink } from "react-router-dom";
import ListFriends from "./ListFriends/ListFriends";
import { FriendsPropType } from "../../typeAndInterface/typeAndInterface";


export default memo(function Friends({topFriends}: FriendsPropType){

    return(
        <div className={st.friends}>
            <NavLink to='/users' className={nD=>nD.isActive?st.active: ''}><h3 className={st.friends__title}>Top friends</h3></NavLink>
            <ListFriends topFriends={topFriends}/>
        </div>
    )
})