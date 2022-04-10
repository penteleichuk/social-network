import React from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType): { isAuth: boolean } => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component: any) => {
    function RedirectComponent(props: any) {

        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props}/>;
    }

    return connect(mapStateToProps)(RedirectComponent);
}