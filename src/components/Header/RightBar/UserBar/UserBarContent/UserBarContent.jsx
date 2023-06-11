import React from "react";
import st from './UserBarContent.module.css'
import UserBarList from './UserBarList';

export default function UserBarContent({props}){
  if(!props.stateBar) return null
        return(
              <div className={st.header__right__menu}>
                <UserBarList logoutThank={props.logoutThank} toggleBar={props.toggleBar}/>
              </div>
              )  
    }
