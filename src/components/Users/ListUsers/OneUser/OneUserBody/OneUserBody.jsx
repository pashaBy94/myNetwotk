import React from "react";
import st from "./OneUserBody.module.css"

export default function OneUserBody({user}){
    return (
      <div className={st.users__point_body}>   
          <div className={st.user__description}>
              <p className={st.user__name}>{user.name}</p>
              <p className={st.user__status}>{user.status}</p>
          </div>
          <div className={st.user__location}>
              <p>{user.location}</p>
          </div>
      </div>
    )
}