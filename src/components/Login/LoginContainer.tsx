import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { loginThank, logoutThank, getCaptchaThank } from "../../redux/thankCreator";
import { Navigate} from "react-router-dom";
import { getIsAuth, getCaptchaUrl } from "../../redux/selectors";
import { GlobalStateType } from "../../typeAndInterface/typeAndInterface";

type LoginStatePropsType = {
    isAuth: boolean,
    captchaUrl: null|string 
};
type DispatchPropsType = {
    loginThank: any,
    logoutThank: any, 
    getCaptchaThank: any
};
type PropType = {};

type LoginPropsType = LoginStatePropsType & DispatchPropsType;

class LoginContainer extends React.Component<LoginPropsType>{
    render(){
        if(this.props.isAuth) return <Navigate replace to="/profile" /> 
        return(<Login loginThank={this.props.loginThank} captchaUrl={this.props.captchaUrl} getCaptchaThank={this.props.getCaptchaThank}/>)
    }
}
const mapStateToProps = (state:GlobalStateType):LoginStatePropsType =>({
        isAuth: getIsAuth(state),
        captchaUrl: getCaptchaUrl(state)
    });

export default connect<LoginStatePropsType, DispatchPropsType, PropType, GlobalStateType>(mapStateToProps,  {loginThank, logoutThank, getCaptchaThank})(LoginContainer)