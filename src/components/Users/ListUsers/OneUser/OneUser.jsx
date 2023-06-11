import React from "react";
import st from "./OneUser.module.css"
import OneUserPhoto from "./OneUserPhoto/OneUserPhoto";
import OneUserBody from "./OneUserBody/OneUserBody";

export default function OneUser(props){
    return (
        <div className={st.users__point}>
            <OneUserPhoto props={props}/>
            <OneUserBody user={props.user}/>
        </div>
    )
}