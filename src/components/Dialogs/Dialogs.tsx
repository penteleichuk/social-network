import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { DialogsPropsType } from "./DialogsContainer";
import { DialogForm } from "../Form/DialogForm";
import styles from './Dialogs.module.css'

const Dialogs = (props: DialogsPropsType) => {
    const { sendMessage, dialogsPage } = props;

    const dialogsRender = dialogsPage.dialogs.map((el, index) => <DialogItem key={index} name={el.name} id={el.id} />);
    const messagesRender = dialogsPage.messages.map((el, index) => <Message key={index} message={el.message} />);

    return (
        <div className="content">
            <div className={styles.dialogs}>
                <div className={styles.dialogItems}>
                    {dialogsRender}
                </div>
                <div className={styles.messages}>
                    <div>{messagesRender}</div>
                    <DialogForm onSubmit={sendMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;