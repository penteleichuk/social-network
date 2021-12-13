import style from './Navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}><Link to="/profile">Profile</Link></div>
            <div className={style.item}><Link to="/dialog">Messages</Link></div>
            <div className={style.item}><a href="/news">News</a></div>
            <div className={style.item}><a href="/music">Music</a></div>
            <div className={style.item}><a href="/settings">Settings</a></div>
        </nav>
    )
}

export default Navbar;