import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import "./App.css";
import { Login } from "./components/Login/Login";

export const App = () => {
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
    );
}
