import React, { FC } from "react";
import { useState } from "react";
import { profileType } from "../../../../typeAndInterface/typeAndInterface";
import AboutForm from "./AboutForm/AboutForm";
import AboutInfo from "./AboutInfo/AboutInfo";
import st from './AboutMy.module.css';

export type AboutPropType = {
    profile: profileType | null,
    updateInfoProfileThunk:any,
    isMyPages:boolean,
    setModEdit?:any,
    authenticationId:number | null,
    setOk?: any
};

const AboutMy:FC<AboutPropType> = ({ profile, isMyPages, updateInfoProfileThunk, authenticationId })=> {
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
export default AboutMy;