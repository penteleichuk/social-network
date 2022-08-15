import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { DialogsType, sendMessageCreator } from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

// Dispatch type
type mapDispatchToPropsType = {
    sendMessage: (message: string) => void
}
type mapStateToPropsType = {
    dialogsPage: DialogsType
}

export type DialogsPropsType = mapDispatchToPropsType & mapStateToPropsType;

// Dispatch connect
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (message: string) => {
            dispatch(sendMessageCreator(message));
        },
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
