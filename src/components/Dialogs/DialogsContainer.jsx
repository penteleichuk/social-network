import {sendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;

            const sendMessage = () => {
                const action = sendMessageCreator();
                store.dispatch(action)
            }

            const updateNewMessageBody = (body) => {
                const action = UpdateNewMessageBodyCreator(body);
                store.dispatch(action);
            }

            return <Dialogs updateNewMessageBody={updateNewMessageBody} sendMessage={sendMessage} dialogsPage={state}/>
        }}
    </StoreContext.Consumer>
}
