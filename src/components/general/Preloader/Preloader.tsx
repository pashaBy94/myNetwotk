import React from "react";
import st from "./Preloader.module.css"

const Preloader = ()=>{
    return(
        <div className={st.box_circle}>
            <img src="preloader.gif" alt=''/>
            <div></div>
        </div>
    )
}
export default Preloader; 