import React, { useEffect, useState } from "react";
import st from './ProfileStatus.module.css';

export default function ProfileStatus(props){
    let [isRedactor, setIsRedactor] = useState(false);
    let [status, setStatus] = useState(props.status);
    function openEditor() {
        setIsRedactor(true);
    };
    function closeEditor() {
        setIsRedactor(false)
        props.setCurrentStatusThunk(status);
    }
    function changeStatus(ev){
        setStatus(ev.currentTarget.value);
    }
    useEffect(() => {
        if (status !== props.status) {
            setStatus(props.status);
        }
    }, [props.status]);
    return (
        <>
            {isRedactor
                ? <div className={st.profile__status}>
                    Status: <input
                        autoFocus={true}
                        type="text"
                        onChange={changeStatus.bind(this)}
                        onBlur={closeEditor.bind(this)}
                        className={st.profile__input}
                        value={status} />
                </div>
                : <div className={st.profile__status} onClick={props.isMyPages?openEditor.bind(this):null}>
                    <p>Status: {props.status}</p>
                    <div className={props.isMyPages?st.profile__rename:st.profile__noRename}>click to rename</div>
                </div>}
        </>
    )
}