import React from "react";
import { Routes, Route } from "react-router-dom";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { AppStateType } from "./redux/redux-store";
import { connect } from "react-redux";
import { withRouter } from "./hoc/withRouter";
import { initializeApp } from "./redux/reducers/app-reducer";
import { Preloader } from "./components/Common/Preloader/Preloader";
import "./App.css";
import { compose } from "redux";

class App extends React.Component<any, AppStateType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="app">
                <HeaderContainer />
                <div className="wrapper">
                    <Routes>
                        <Route path='/' element={<ProfileContainer />} />
                        <Route path='/dialogs' element={<DialogsContainer />} />
                        <Route path='/profile/:userId' element={<ProfileContainer />} />
                        <Route path='/profile/*' element={<ProfileContainer />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </div>
            </div>
        )
    }
}

type mapDispatchType = {
    initializeApp: () => void
}

const mapDispatchToProps: mapDispatchType = {
    initializeApp
}

const mapStateToProps = (state: AppStateType): { initialized: boolean } => {
    return {
        initialized: state.app.initialized
    }
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default compose<any>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    // withAuthRedirect,
)(App)