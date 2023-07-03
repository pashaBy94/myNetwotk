import React from "react";
import st from './LeftBar.module.css'

export default function LeftBar(){
    return(
      <div className={st.header__left}>
        <img src='icon.png' alt='' width='40px' height='40px'/>
        <h2 className={st.header__left__tag}>#good friends</h2>
      </div>
    )
}
