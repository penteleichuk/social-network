import { DialogsType } from '../../components/Dialogs/DialogsContainer';

// Const action
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

// Action type
type SendMessageActionType = {
	type: typeof SEND_MESSAGE;
	message: string;
};
type UpdateNewMessageBodyActionType = {
	type: typeof UPDATE_NEW_MESSAGE_BODY;
	body: string;
};
type ActionsType = SendMessageActionType | UpdateNewMessageBodyActionType;

// Init
type InitialStateType = DialogsType;
const initialState: InitialStateType = {
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is your samurai' },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' },
	],
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Viktor' },
		{ id: 6, name: 'Petya' },
	],
	newMessageBody: '',
};

// Reducer
export const dialogsReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY: {
			return {
				...state,
				newMessageBody: action.body,
			};
		}

		case SEND_MESSAGE: {
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, { id: 6, message: action.message }],
			};
		}

		default: {
			return state;
		}
	}
};

// Action creator
export const sendMessageCreator = (message: string) => ({
	type: SEND_MESSAGE,
	message,
});
export const UpdateNewMessageBodyCreator = (body: string) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body,
});
