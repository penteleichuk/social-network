import '../../App.css';
import {Header, HeaderPropsType} from "./Header";
import React from "react";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/reducers/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

// Type
type mapDispatchToPropsType = {
    getAuthUserData: () => void
}
type mapStateToPropsType = HeaderPropsType
type HeaderContainerPropsType = any;// mapDispatchToPropsType & mapStateToPropsType;

// Class
class HeaderContainer extends React.Component<HeaderContainerPropsType, AppStateType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        const {isAuth, login} = this.props;
        return <Header isAuth={isAuth} login={login}/>
    }
}

// Dispatch connect
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
const mapDispatchToProps: mapDispatchToPropsType = {
    getAuthUserData
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);