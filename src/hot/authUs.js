import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropRedirect = state => ({ isAuth: state.authUser.isAuth});
export function authUs(Component){
    let WrapComponent = props =>{
        if(!props.isAuth) return <Navigate to='/login' />
        return <Component {...props}/>
    }
    WrapComponent = connect(mapStateToPropRedirect, {})(WrapComponent)
    return WrapComponent
}


