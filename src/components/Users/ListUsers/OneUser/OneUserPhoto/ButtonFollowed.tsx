import React, { FC } from "react";
import { PropOneUsType } from "../../../../../typeAndInterface/typeAndInterface";
import st from "./OneUserPhoto.module.css"

const ButtonFollowed:FC<{props:PropOneUsType}> = ({props})=>{
  const {id, follower} = props.user;
  return <button 
          className={st.user__followed} 
          disabled={props.isDisabledFollowButton.includes(id)} onClick={()=> follower?props.thunkUnFollow(id):props.thunkAddFollow(id)}
        >{follower?'Unfollower':'Follower'}</button>
}
export default ButtonFollowed;