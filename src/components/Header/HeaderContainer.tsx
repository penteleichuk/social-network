import React from "react";
import { compose, Dispatch } from 'redux';
import { connect } from "react-redux";
import { Header, HeaderPropsType } from "./Header";
import { logout } from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import '../../App.css';

class HeaderContainer extends React.Component<HeaderPropsType & mapDispatchToPropsType, {}> {
    render = () => <Header {...this.props} />
}

type mapDispatchToPropsType = {
    logout: () => void
}

const mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
    return {
        logout: () => dispatch(logout())
    }
}

const mapStateToProps = (state: AppStateType): HeaderPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer)