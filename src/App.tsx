import {Routes, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";

export const App = () => {
    return (
        <div className="app">
            <Header/>
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
