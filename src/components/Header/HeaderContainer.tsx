import '../../App.css';
import {Header, HeaderPropsType} from "./Header";
import React from "react";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

// Type
type mapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}
type mapStateToPropsType = HeaderPropsType
type HeaderContainerPropsType = any;// mapDispatchToPropsType & mapStateToPropsType;

// Class
class HeaderContainer extends React.Component<HeaderContainerPropsType, AppStateType> {
    componentDidMount() {
        authAPI.getAuthUser().then(response => {
            if (response.resultCode === 0) {
                const {id, login, email} = response.data;
                this.props.setAuthUserData(id, email, login);
            }
        })
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
    setAuthUserData
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);