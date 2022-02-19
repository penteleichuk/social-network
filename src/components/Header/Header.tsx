import style from './Header.module.css';
import '../../App.css';
import {Navbar} from "../Navbar/Navbar";
import Logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.header}>
            <div className="wrapper header__wrapper">
                <img src={Logo} alt=""/>
                <Navbar/>

                <div className={style.loginBlock}>
                    {!props.isAuth ? <NavLink to={'/login'}>Login</NavLink> : props.login}
                </div>
            </div>
        </header>
    )
}