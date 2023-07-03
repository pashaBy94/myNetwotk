import React from "react";
import { NavLink } from "react-router-dom";
import st from './Games.module.css'

export default function Games(){

    return(
        <div className={st.games}>
          <h2 className={st.games__title}>Games</h2>
          <div className={st.games__list}>
            <NavLink to='/coz' >
              <div className={st.games__item}>
                <img src="game11.png" alt=''  className={st.game__img}/>
                <h3>Cross or zero (games for the kind)</h3>
              </div>
            </NavLink>
          </div>
        </div>
    )
}