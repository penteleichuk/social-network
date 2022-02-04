import {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import s from './Dialogs.module.css'

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(event.target.value);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'/></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;