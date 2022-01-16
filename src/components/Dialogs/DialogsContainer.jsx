import {sendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

export const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    const sendMessage = () => {
        const action = sendMessageCreator();
        props.store.dispatch(action)
    }

    const updateNewMessageBody = (body) => {
        const action = UpdateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    }

    return (
        <Dialogs updateNewMessageBody={updateNewMessageBody} sendMessage={sendMessage} dialogsPage={state} />
    )
}
