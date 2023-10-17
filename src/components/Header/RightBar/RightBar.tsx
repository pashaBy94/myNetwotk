import React, { FC } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import st from './RightBar.module.css'
import UserBar from "./UserBar/UserBar";
import { useSelector } from "react-redux";
import { getIsAuth, getSuperMyProfile } from "../../../redux/selectors";
import { HeaderPropType } from "../Header";

type PropType = {props: HeaderPropType}
const RightBar:FC<PropType> = ({props})=>{
const isAuth = useSelector(getIsAuth);
const myProfile = useSelector(getSuperMyProfile);
function openBar(ev: React.MouseEvent<HTMLButtonElement>):void{
  ev.preventDefault();
  toggleBar(pr=>!pr);
}

  const [stateBar, toggleBar] = useState(false);
  const bar = isAuth?(<UserBar 
  toggleBar={toggleBar} 
  stateBar={stateBar} 
  myProfile={myProfile}
  />):(<NavLink to='/login'>Login</NavLink>);
    return(
      <div className={st.header__right}>
        <div className={st.header__right__title}>{myProfile?.fullName}</div>
        {bar}
        <button className={st.header__right__open} onClick={(e)=>openBar(e)}><img src="arrow-down-whit.png" alt="" className={st.header__btn} /></button>
      </div>
      )
}
export default RightBar;