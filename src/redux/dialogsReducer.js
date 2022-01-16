const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;

            break;
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});

            break;
        }

        default: break;
    }

    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const UpdateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})