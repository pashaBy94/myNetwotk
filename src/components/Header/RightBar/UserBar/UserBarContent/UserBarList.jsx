import React from "react";
import { NavLink } from "react-router-dom";
import st from './UserBarContent.module.css'

export default function UserBarContent({logoutThank, toggleBar}){
  const quitProfile = (e)=>{
    e.preventDefault();
    logoutThank();
    toggleBar(false);
  }
  const goToLink = ()=>{
    toggleBar(false);
  }     
  return(
    <ul className={st.header__right__list}>
        <li><NavLink to='/profile' onClick={goToLink}>My profile</NavLink></li>
        <li><hr></hr></li>
        <li><NavLink to='/users' onClick={goToLink}>My friends</NavLink></li>
        <li><NavLink to='/news' onClick={goToLink}>My news</NavLink></li>
        <li><NavLink to='/musics' onClick={goToLink}>My music</NavLink></li>
        <li><hr></hr></li>
        <li><NavLink to="/" onClick={quitProfile}>Quit</NavLink>
        </li>
    </ul>
  )  
}
