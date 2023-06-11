import React from "react";
import st from './UserBarAva.module.css';

export default function UserBarAva({toggleBar, myProfile}){
        return(
            <div className={st.header__right__ava}>
                <img alt=''
                src={myProfile?.photos?.small || 'noava.png'} 
                className={st.header__right__imag}
                onClick={()=>toggleBar(pr=>!pr)}
                />
                </div>
        )
    }
    // myProfile.photos.small ||