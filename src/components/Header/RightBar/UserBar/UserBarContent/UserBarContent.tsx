import React from "react";
import st from './UserBarContent.module.css'
import UserBarList from './UserBarList';

const UserBarContent = ({props})=>{
  if(!props.stateBar) return null
        return(
              <div className={st.header__right__menu}>
                <UserBarList logoutThank={props.logoutThank} toggleBar={props.toggleBar}/>
              </div>
              )  
    }
export default UserBarContent;