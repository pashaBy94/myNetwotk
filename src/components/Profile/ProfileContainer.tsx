import React, { ComponentType } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setCurrentProfileThunk, savePhotoThunk, setCurrentStatusThunk, getCurrentStatusThunk, updateInfoProfileThunk } from "../../redux/thankCreator";
import { setCurrentProfile, setMyPages, setMyProfile } from "../../redux/profilePageReducer";
import { withRouter } from "../../utils/helpers";
import { compose } from "redux";
import Preloader from "../general/Preloader/Preloader";
import { authUs } from "../../hot/authUs";
import { getCurrentStatus, getAuthenticationId, getSuperCurrentProfile, getIsMyPages, getSuperMyProfile, getError } from "../../redux/selectors";
import { GlobalStateType, profileType } from "../../typeAndInterface/typeAndInterface";

type MapStateProfileType = {
    currentProfile: profileType | null;
    currentStatus: string;
    authenticationId: number | null;
    isMyPages: boolean;
    myProfile: profileType | null;
    error: object | null;
};
type MapDispatchProfileType = {
    setCurrentProfile: any, 
    setCurrentProfileThunk: any,
    setCurrentStatusThunk: any, 
    getCurrentStatusThunk: any, 
    savePhotoThunk: any, 
    setMyPages: any, 
    setMyProfile: any, 
    updateInfoProfileThunk: any
};
type PropsProfyleType = {
    router: any
};

type PropsProfileType = MapStateProfileType & MapDispatchProfileType & PropsProfyleType;

class ProfileContainer extends React.Component<PropsProfileType> {
    componentDidMount() {
        let usId = this.props.router.params.usId;
        if (!usId) {
            usId = this.props.authenticationId;
            this.props.setMyPages(true);
            this.props.setCurrentProfileThunk(usId, this.props.setMyProfile);
        } else {
            this.props.setMyPages(false);
            this.props.setCurrentProfileThunk(usId);
        }
        this.props.getCurrentStatusThunk(usId);
    }
    componentDidUpdate(prevProp:PropsProfileType) {
        if (this.props.router.params.usId !== prevProp.router.params.usId) {
            let usId = this.props.router.params.usId;
            if (!usId) {
                usId = this.props.authenticationId;
                this.props.setMyPages(true);
                this.props.setCurrentProfileThunk(usId, this.props.setMyProfile);

            } else {
                this.props.setMyPages(false);
                this.props.setCurrentProfileThunk(usId);
            }
            this.props.getCurrentStatusThunk(usId);
        }
    }
    render() {
        if (!this.props.currentProfile) return <Preloader />
        return (<Profile
            profile={this.props.currentProfile}
            status={this.props.currentStatus}
            savePhotoThunk={this.props.savePhotoThunk}
            setCurrentStatusThunk={this.props.setCurrentStatusThunk}
            isMyPages={this.props.isMyPages}
            authenticationId={this.props.authenticationId}
            updateInfoProfileThunk={this.props.updateInfoProfileThunk}
            myProfile={this.props.myProfile} />)
    }
}

const mapStateToProp = (state: GlobalStateType) => ({
    currentProfile: getSuperCurrentProfile(state),
    currentStatus: getCurrentStatus(state),
    authenticationId: getAuthenticationId(state),
    isMyPages: getIsMyPages(state),
    myProfile: getSuperMyProfile(state),
    error: getError(state),
});

export default compose<ComponentType>(
    connect(mapStateToProp, { setCurrentProfile, setCurrentProfileThunk, setCurrentStatusThunk, getCurrentStatusThunk, savePhotoThunk, setMyPages, setMyProfile, updateInfoProfileThunk }),
    authUs,
    withRouter
)(ProfileContainer)