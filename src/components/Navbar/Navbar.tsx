import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faNewspaper} from "@fortawesome/free-solid-svg-icons";
import {faIcons} from "@fortawesome/free-solid-svg-icons";
import {faUserCog} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><NavLink to="/profile"
                                                 className={({isActive}) => isActive ? style.active : style.link}>
                <FontAwesomeIcon icon={faHome}/>Profile</NavLink>
            </div>
            <div className={style.item}><NavLink to="/dialogs"
                                                 className={({isActive}) => isActive ? style.active : style.link}>
                <FontAwesomeIcon icon={faEnvelope}/>Messages</NavLink>
            </div>
            <div className={style.item}><NavLink to="/users"
                                                 className={({isActive}) => isActive ? style.active : style.link}>
                <FontAwesomeIcon icon={faUsers}/>Users</NavLink>
            </div>
            <div className={style.item}><a className={style.link} href="/news"><FontAwesomeIcon icon={faNewspaper}/>News</a>
            </div>
            <div className={style.item}><a className={style.link} href="/music"><FontAwesomeIcon
                icon={faIcons}/>Music</a></div>
            <div className={style.item}><a className={style.link} href="/settings"><FontAwesomeIcon icon={faUserCog}/>Settings</a>
            </div>
        </nav>
    )
}