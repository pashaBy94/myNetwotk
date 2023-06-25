import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { loginThank, logoutThank, getCaptchaThank } from "../../redux/thankCreator.ts";
import { Navigate} from "react-router-dom";
import { getIsAuth, getCaptchaUrl } from "../../redux/selectors.ts";

class LoginContainer extends React.Component{
    render(){
        if(this.props.isAuth) return <Navigate replace to="/profile" /> 
        return(<Login loginThank={this.props.loginThank} captchaUrl={this.props.captchaUrl} getCaptchaThank={this.props.getCaptchaThank}/>)
    }
}
const mapStateToProps = state =>({
        isAuth: getIsAuth(state),
        captchaUrl: getCaptchaUrl(state)
    });

export default connect(mapStateToProps,  {loginThank, logoutThank, getCaptchaThank})(LoginContainer)