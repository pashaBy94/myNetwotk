import React, { useState } from "react";
import AboutForm from "../Profile/UserProfile/AboutMy/AboutForm/AboutForm";
import st from './Settings.module.css'
import { connect } from "react-redux";
import { updateInfoProfileThunk, savePhotoThunk, getCurrentStatusThunk, setCurrentStatusThunk, setCurrentProfileThunk } from '../../redux/thankCreator'
import { setCurrentProfile, setMyPages, setMyProfile } from "../../redux/profilePageReducer";
import { getCurrentStatus, getAuthenticationId, getSuperCurrentProfile, getIsMyPages, getSuperMyProfile } from "../../redux/selectors";
import Preloader from "../general/Preloader/Preloader";
import cn from "classnames";
import { IconContext } from "react-icons";
import { MdDoneOutline } from "react-icons/md";

function Settings(props) {
    const [modEdit, setModEdit] = useState(false);
    if (!props.currentProfile) return <Preloader />
    return (
        <div className={st.settings}>
            <h3 className={cn(st.settings__title, st.settings__body)}>Settings</h3>
            <div className={st.settings__body}>
                <AboutForm
                    profile={props.currentProfile}
                    updateInfoProfileThunk={props.updateInfoProfileThunk}
                    isMyPages={props.isMyPages}
                    setModEdit={setModEdit}
                    authenticationId={props.authenticationId}
                />
                {modEdit?<div className={st.is__ok}>
                    <IconContext.Provider value={{ size: "3em", color: "#23D16F" }}>
                        <MdDoneOutline />
                    </IconContext.Provider>
                </div>:null}
            </div>
        </div>
    )
}
const mapStateToProp = state => ({
    currentProfile: getSuperCurrentProfile(state),
    currentStatus: getCurrentStatus(state),
    authenticationId: getAuthenticationId(state),
    isMyPages: getIsMyPages(state),
    myProfile: getSuperMyProfile(state),
});


const SettingsContainer = connect(mapStateToProp, { setCurrentProfile, setCurrentProfileThunk, setCurrentStatusThunk, getCurrentStatusThunk, savePhotoThunk, setMyPages, setMyProfile, updateInfoProfileThunk })(Settings)
export default SettingsContainer;

