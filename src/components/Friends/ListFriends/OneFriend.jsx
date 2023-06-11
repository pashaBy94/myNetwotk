import React, { memo } from "react";
import st from './ListFriends.module.css';
import { NavLink } from "react-router-dom";


export default memo(function OneFriend({name, imag, id}){
    return(
      <li>
        <NavLink to={`/profile/${id}`}>
          <img src={imag} alt='' className={st.friends__img}/>
          <p className={st.friends__text}>{name}</p>
        </NavLink>
      </li>
    )
})