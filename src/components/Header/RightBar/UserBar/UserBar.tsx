import React, { FC } from "react";
import st from './UserBar.module.css'
import UserBarAva from "./UserBarAva/UserBarAva";
import UserBarContent from "./UserBarContent/UserBarContent";

type PropsType = {
    toggleBar:any,
    stateBar:boolean 
    myProfile:any,
    logoutThank:any,
};
const UserBar:FC<PropsType> = (props) => {
    return (
        <div className={st.header__right__bar}>
            <UserBarAva toggleBar={props.toggleBar} myProfile={props.myProfile} />
            <UserBarContent props={props} />
        </div>
    )
}
export default UserBar;