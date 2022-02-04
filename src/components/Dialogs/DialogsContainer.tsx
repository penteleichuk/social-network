import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {MessageType} from "./Message/Message";
import {DialogType} from "./DialogItem/DialogItem";
import {sendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

// Dialogs type
export type DialogsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}
export type DialogsPropsType = dispatchColBackPropsType & dispatchPropsType;

// Dispatch type
type dispatchColBackPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
type dispatchPropsType = {
    dialogsPage: DialogsType
}

// Dispatch connect
const dispatchProps = (state: AppStateType): dispatchPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const dispatchColBack = (dispatch: Dispatch): dispatchColBackPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(UpdateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
}

export const DialogsContainer = connect(dispatchProps, dispatchColBack)(Dialogs);
