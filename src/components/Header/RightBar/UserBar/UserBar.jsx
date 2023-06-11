import React from "react";
import st from './UserBar.module.css'
import UserBarAva from "./UserBarAva/UserBarAva";
import UserBarContent from "./UserBarContent/UserBarContent";

export default function UserBar(props){
        return(
        <div className={st.header__right__bar}>
            <UserBarAva toggleBar={props.toggleBar} myProfile={props.myProfile}/>
            <UserBarContent props={props}/>
        </div>
        )
    }
