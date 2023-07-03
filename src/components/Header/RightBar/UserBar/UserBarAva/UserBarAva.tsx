import React from "react";
import st from './UserBarAva.module.css';

const UserBarAva = ({toggleBar, myProfile})=> {
        return(
            <div className={st.header__right__ava}>
                <img alt=''
                src={myProfile?.photos?.small || 'noava.png'} 
                className={st.header__right__imag}
                onClick={()=>toggleBar((pr:boolean)=>!pr)}
                />
                </div>
        )
    }
    export default UserBarAva;