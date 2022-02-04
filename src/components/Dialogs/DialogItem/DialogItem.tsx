import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogType = {
    id: number
    name: string
}

export const DialogItem = ({name, ...props}: DialogType) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}