import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { AppStateType } from "./redux/redux-store";
import { connect } from "react-redux";
import { withRouter } from "./hoc/withRouter";
import { initializeApp } from "./redux/reducers/app-reducer";
import { Preloader } from "./components/Common/Preloader/Preloader";
import { compose } from "redux";
import "./App.css";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer').then(({ DialogsContainer }) => ({ default: DialogsContainer })));

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const SettingsContainer = React.lazy(() => import('./components/Settings/SettingsContainer'));

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
                    <Suspense fallback={<Preloader />}>
                        <Routes>
                            <Route path='/' element={<ProfileContainer />} />
                            <Route path='/dialogs' element={<DialogsContainer />} />
                            <Route path='/profile/:userId' element={<ProfileContainer />} />
                            <Route path='/profile/*' element={<ProfileContainer />} />
                            <Route path='/users' element={<UsersContainer />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/settings' element={<SettingsContainer />} />
                        </Routes>
                    </Suspense>
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(App)