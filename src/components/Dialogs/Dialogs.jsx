import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogsData, messagesData, ...props}) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsData.map(({name, id, ...u}) => <DialogItem name={name} id={id}/>)}
            </div>
            <div className={style.messages}>
                {messagesData.map(({message, ...m}) => <Message message={message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;