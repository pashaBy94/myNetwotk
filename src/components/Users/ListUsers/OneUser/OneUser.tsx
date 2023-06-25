import React, { FC } from "react";
import st from "./OneUser.module.css"
import OneUserPhoto from "./OneUserPhoto/OneUserPhoto";
import OneUserBody from "./OneUserBody/OneUserBody";
import { PropOneUsType } from "../../../../typeAndInterface/typeAndInterface";


const OneUser:FC<PropOneUsType> = (props)=>{
    return (
        <div className={st.users__point}>
            <OneUserPhoto props={props}/>
            <OneUserBody user={props.user}/>
        </div>
    )
}
export default OneUser;