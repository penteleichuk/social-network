import { ComponentType } from "react";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../redux/redux-store";
import { connect } from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: mapStateToPropsType) {
        const { isAuth, ...restProps } = props;

        if (!isAuth) return <Navigate to={'/login'} />

        return <Component {...restProps as T} />;
    }

    return connect(mapStateToProps)(RedirectComponent);
}