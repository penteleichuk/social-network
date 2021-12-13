import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={style.dialog}><NavLink exact to={path}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem name="Andrey" id="1"/>
                <DialogItem name="Sasha" id="2"/>
                <DialogItem name="Vasya" id="3"/>
            </div>
            <div className={style.messages}>
                <Message message="Hi" />
                <Message message="How is your samurai" />
                <Message message="Yo" />
                <Message message="Yo" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

export default Dialogs;