import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsDisabledFollowButton } from "../../../../../redux/selectors";
import { PropOneUsType } from "../../../../../typeAndInterface/typeAndInterface";
import { thunkAddFollow, thunkUnFollow } from "../../../../../redux/thankCreator";

import st from "./OneUserPhoto.module.css"

const ButtonFollowed:FC<{props:PropOneUsType}> = ({props})=>{
  const {id, followed} = props.user;
  const dispatch = useDispatch();
  const thunkUnFoll = (id:number)=>{
    dispatch(thunkUnFollow(id))
  }
  const thunkAddFoll = (id:number)=>{
    dispatch(thunkAddFollow(id))
  }
  const isDisabledFollowButton = useSelector(getIsDisabledFollowButton)
  return <button 
          className={st.user__followed} 
          disabled={isDisabledFollowButton.includes(id)} onClick={()=> followed?thunkUnFoll(id):thunkAddFoll(id)}
        >{followed?'Unfollower':'Follower'}</button>
}
export default ButtonFollowed;