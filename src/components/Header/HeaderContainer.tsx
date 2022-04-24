import '../../App.css';
import { Header, HeaderPropsType } from "./Header";
import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { compose } from 'redux';

// Type
type mapDispatchToPropsType = {
    logout: () => void
}

type mapStateToPropsType = HeaderPropsType
// type HeaderContainerPropsType = any;// mapDispatchToPropsType & mapStateToPropsType;

// Class
//class HeaderContainer extends React.Component<any, any> {
//class HeaderContainer extends React.Component<HeaderContainerPropsType, AppStateType> {
class HeaderContainer extends React.Component<mapStateToPropsType & mapDispatchToPropsType, {}> {
    render() {
        const { isAuth, login } = this.props;
        return <Header isAuth={isAuth} login={login} logout={this.props.logout} />
    }
}

// Dispatch connect
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
const mapDispatchToProps: mapDispatchToPropsType = {
    logout
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)<any>(HeaderContainer)
//export default connect(mapStateToProps, mapDispatchToProps)<any>(HeaderContainer);