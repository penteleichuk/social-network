import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map((m, key) => <Message key={key} message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (event) => {
        const body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;