import React, { FC } from "react";
import { PropOneUsType } from "../../../../../typeAndInterface/typeAndInterface";
import st from "./OneUserPhoto.module.css"

const ButtonFollowed:FC<{props:PropOneUsType}> = ({props})=>{
  const {id, followed} = props.user;
  return <button 
          className={st.user__followed} 
          disabled={props.isDisabledFollowButton.includes(id)} onClick={()=> followed?props.thunkUnFollow(id):props.thunkAddFollow(id)}
        >{followed?'Unfollower':'Follower'}</button>
}
export default ButtonFollowed;