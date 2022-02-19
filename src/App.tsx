import {Routes, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import "./App.css";

export const App = () => {
    return (
        <div className="app">
            <HeaderContainer/>
            <div className="wrapper">
                <div className="content">
                    <Routes>
                        <Route path='/' element={<ProfileContainer/>}/>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/profile/*' element={<ProfileContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}
