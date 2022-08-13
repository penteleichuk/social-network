import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? style.active : style.link}>
                    <FontAwesomeIcon icon={faHome as IconProp} />Profile
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? style.active : style.link}>
                    <FontAwesomeIcon icon={faEnvelope as IconProp} />Messages
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users" className={({ isActive }) => isActive ? style.active : style.link}>
                    <FontAwesomeIcon icon={faUsers as IconProp} />Users
                </NavLink>
            </div>
            <div className={style.item}>
                <a className={style.link} href="/settings"><FontAwesomeIcon icon={faUserCog as IconProp} />Settings</a>
            </div>
        </nav>
    )
}