import React, { memo, useEffect, useRef } from "react";
import st from "./Users.module.css"
import Paginator from "./Paginator/Paginator";
import ListUsers from "./ListUsers/ListUsers";

export default memo(function Users(props) {
    return (
        <div className={st.users}>
            <h2 className={st.users__title}>Friends</h2>
            <Paginator 
                numberCurrentPage={props.numberCurrentPage} 
                setAjaxAndWriteUser={props.setAjaxAndWriteUser} 
                totalCountPage={props.totalCountPage} 
                lengthCountPage={props.lengthCountPage} 
                setCurrentPage={props.setCurrentPage}
            />
            <div className={st.users__content}>
                <ListUsers props={props}/>
                <div className={st.users__show}>
                    <div className={st.users__show_vrap}>
                        <button className={st.users__btn}>Show more</button>
                    </div>
                </div>
            </div>
        </div>
    )

})