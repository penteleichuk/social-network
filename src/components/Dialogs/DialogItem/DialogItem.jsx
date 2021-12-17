import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = ({name, ...props}) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;