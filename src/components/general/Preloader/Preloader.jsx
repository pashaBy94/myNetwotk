import React from "react";
import st from "./Preloader.module.css";

export default function Preloader(props){
    return(
        <div className={st.box}>
            <img src="preloader.gif" alt='' className={st.box_circle}/>
            <div className={st.holst}></div>
        </div>
    )
}