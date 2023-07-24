import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { GlobalStateType } from "../typeAndInterface/typeAndInterface";
import { ComponentType } from "react";
import * as React from "react";

type mapPropsType = { isAuth: boolean };

const mapStateToPropRedirect = (state: GlobalStateType): mapPropsType => ({ isAuth: state.authUser.isAuth });
export function authUs(Component: ComponentType) {
    let WrapComponent = (props: mapPropsType) => {
        let { isAuth, ...restProps } = props;
        if (!isAuth) return <Navigate to='/login' />
        return <Component {...restProps} />
    }
    const WrapedComponent = connect(mapStateToPropRedirect, {})(WrapComponent)
    return WrapedComponent
}


