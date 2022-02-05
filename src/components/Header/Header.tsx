import style from './Header.module.css';
import '../../App.css';
import {Navbar} from "../Navbar/Navbar";
import Logo from '../../assets/images/logo.png'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className="wrapper header__wrapper">
                <img src={Logo} alt=""/>
                <Navbar/>
            </div>
        </header>
    )
}