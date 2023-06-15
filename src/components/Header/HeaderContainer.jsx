import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authUserThank, logoutThank } from "../../redux/thankCreator";
import { setAuthUser } from "../../redux/authUserReducer.ts";
import { getAuthenticationUser, getCurrentStatus, getIsAuth, getSuperMyProfile } from "../../redux/selectors.ts";
import { withRouter } from "../../utils/helpers";

class HeaderContainer extends React.Component{
    render() {
        return(<Header 
            user={this.props.authenticationObj} 
            isAuth={this.props.isAuth} 
            myProfile={this.props.myProfile}
            logoutThank={this.props.logoutThank}
            currentStatus={this.props.currentStatus}/>)
    }
}
const mapStateToProp = state => ({
        authenticationObj: getAuthenticationUser(state),
        isAuth: getIsAuth(state),
        myProfile: getSuperMyProfile(state),
        currentStatus: getCurrentStatus(state),
    });

export default withRouter(connect(mapStateToProp, {setAuthUser, authUserThank, logoutThank})(HeaderContainer))