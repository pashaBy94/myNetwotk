import React, { FC } from "react";
import st from './AboutInfo.module.css';
import Contacts from "../Contacts/Contacts";
import { profileType } from "../../../../../typeAndInterface/typeAndInterface";

type AboutPropType = {
    profile: profileType | null,
    isMyPages:boolean,
    setModEdit:any,
};

const AboutInfo:FC<AboutPropType> = ({ profile, setModEdit, isMyPages })=> {
    return (
        <div className={st.about__info}>
            <p><strong>Looking for a job: </strong><span>{profile?.lookingForAJob?'Yes':'No'}</span></p>
            <p><strong>Looking for a job description: </strong><span>{profile?.lookingForAJob?profile.lookingForAJob:'Developer'}</span></p>
            <p><strong>About my: </strong><span>{profile?.aboutMe}</span></p>
            <p><strong>Contacts my: </strong></p>
            <Contacts contacts={profile?.contacts}/>
            {isMyPages?<button onClick={()=>setModEdit(true)} className={st.about__info__rename}>Open mode edit</button>:null}
        </div>
    )
}
export default AboutInfo;