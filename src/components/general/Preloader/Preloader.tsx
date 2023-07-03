import React from "react";
import st from "./Preloader.module.css";

const Preloader = ()=>{
    return(
        <div className={st.box}>
            <img src="preloader.gif" alt='' className={st.box_circle}/>
            <div className={st.holst}></div>
        </div>
    )
}
export default Preloader; 