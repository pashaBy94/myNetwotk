import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authUserThank, logoutThank } from "../../redux/thankCreator";
import { setAuthUser } from "../../redux/authUserReducer";
import { getAuthenticationUser, getCurrentStatus, getIsAuth, getSuperMyProfile } from "../../redux/selectors";
import { withRouter } from "../../utils/helpers";
import { authenticationType, GlobalStateType, profileType } from "../../typeAndInterface/typeAndInterface";

export type HeaderPropType = {
    authenticationObj?: authenticationType,
    isAuth: boolean,
    myProfile: profileType | null,
    logoutThank: any,
    currentStatus: string,
    setAuthUser?:any,
    authUserThank?:any,
    user?: authenticationType
};

class HeaderContainer extends React.Component<HeaderPropType>{
    render() {
        return (<Header
            user={this.props.authenticationObj}
            isAuth={this.props.isAuth}
            myProfile={this.props.myProfile}
            logoutThank={this.props.logoutThank}
            currentStatus={this.props.currentStatus} />)
    }
}
const mapStateToProp = (state: GlobalStateType) => ({
    authenticationObj: getAuthenticationUser(state),
    isAuth: getIsAuth(state),
    myProfile: getSuperMyProfile(state),
    currentStatus: getCurrentStatus(state),
});

export default withRouter(connect(mapStateToProp, { setAuthUser, authUserThank, logoutThank })(HeaderContainer))