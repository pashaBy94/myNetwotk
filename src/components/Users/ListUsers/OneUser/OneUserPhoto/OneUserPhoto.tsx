import React from "react";
import { NavLink } from "react-router-dom";
import st from "./OneUserPhoto.module.css"
import ButtonFollowed from "./ButtonFollowed";

export default function OneUserPhoto({props}){
  const {id, photos} = props.user;
    return (
      <div className={st.users__point_imag}>
          <div className={st.user__wrap}>
              <NavLink to={`/profile/${id}`}>
                <img src={photos.small?photos.small:'noava.png'} alt="" className={st.user__imag}/>
              </NavLink>
              <ButtonFollowed props={props}/>
          </div>
      </div>
    )
}