import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import st from './RightBar.module.css'
import UserBar from "./UserBar/UserBar";

export default function RightBar({props}){

function openBar(ev){
  ev.preventDefault();
  toggleBar(pr=>!pr);
}

  const [stateBar, toggleBar] = useState(false);
  const bar = props.isAuth?(<UserBar 
  toggleBar={toggleBar} 
  stateBar={stateBar} 
  myProfile={props.myProfile}
  logoutThank={props.logoutThank}
  />):(<NavLink to='/login'>Login</NavLink>);
    return(
      <div className={st.header__right}>
        <div className={st.header__right__title}>{props.myProfile?.fullName}</div>
        {bar}
        <button className={st.header__right__open} onClick={(e)=>openBar(e)}><img src="arrow-down-whit.png" alt="" className={st.header__btn} /></button>
      </div>
      )
}