import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { DialogsPropsType } from "./DialogsContainer";
import s from './Dialogs.module.css'
import { DialogForm } from "../Form/DialogForm";

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d, index) => <DialogItem key={index} name={d.name} id={d.id} />);
    let messagesElements = state.messages.map((m, index) => <Message key={index} message={m.message} />);

    const onSubmit = ({ message }: { message: string }) => {
        props.sendMessage(message);
    }

    return (
        <div className="content">
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <DialogForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;