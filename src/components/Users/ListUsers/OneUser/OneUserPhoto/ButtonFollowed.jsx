import React from "react";
import st from "./OneUserPhoto.module.css"

export default function ButtonFollowed({props}){
  const {id, followed} = props.user;
  return <button 
          className={st.user__followed} 
          disabled={props.isDisabledFollowButton.includes(id)} onClick={()=> followed?props.thunkUnFollow(id):props.thunkAddFollow(id)}
        >{followed?'Unfollower':'Follower'}</button>
}