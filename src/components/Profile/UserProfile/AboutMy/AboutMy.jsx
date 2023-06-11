import React from "react";
import { useState } from "react";
import AboutForm from "./AboutForm/AboutForm";
import AboutInfo from "./AboutInfo/AboutInfo";
import st from './AboutMy.module.css';

export default function AboutMy({ profile, isMyPages, updateInfoProfileThunk, authenticationId }) {
    const [modEdit, setModEdit] = useState(false);
    return (
        <div className={st.about__save}>
            {!modEdit
            ?<AboutInfo profile={profile} isMyPages={isMyPages} setModEdit={setModEdit}/>
            :<AboutForm profile={profile} updateInfoProfileThunk={updateInfoProfileThunk} isMyPages={isMyPages} setModEdit={setModEdit} authenticationId={authenticationId}/>
            }
        </div>
    )
}