import styles from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

export type DialogType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogType) => {
    const { name, id } = props;
    const path = `/dialogs/${id}`

    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}