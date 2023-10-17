import React from "react";
import { NavLink } from "react-router-dom";
import st from './UserBarContent.module.css'
import { useDispatch } from "react-redux";
import { logoutThank } from "../../../../../redux/thankCreator";

export default function UserBarContent({ toggleBar}){
  const dispatch = useDispatch();
  const quitProfile = (e: React.MouseEvent<HTMLElement>)=>{
    e.preventDefault();
    dispatch(logoutThank());
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
