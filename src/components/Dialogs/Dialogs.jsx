import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogs, messages, ...props}) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogs.map(({name, id, ...u}) => <DialogItem name={name} id={id}/>)}
            </div>
            <div className={style.messages}>
                {messages.map(({message, ...m}) => <Message message={message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;