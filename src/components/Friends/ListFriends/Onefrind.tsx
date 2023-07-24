import React, { memo } from "react";
import st from './ListFriends.module.css';
import { NavLink } from "react-router-dom";


export type OneFriendsType = {
  name:string,
  imag:string,
  id:number
};

export default memo(function OneFriend({name, imag, id}:OneFriendsType){
    return(
      <li>
        <NavLink to={`/profile/${id}`}>
          <img src={imag} alt='' className={st.friends__img}/>
          <p className={st.friends__text}>{name}</p>
        </NavLink>
      </li>
    )
})