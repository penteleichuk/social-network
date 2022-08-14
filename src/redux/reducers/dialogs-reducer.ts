import { DialogsType } from '../../components/Dialogs/DialogsContainer';

// Const action
const SEND_MESSAGE = 'DIALOG/SEND-MESSAGE';

// Action type
type SendMessageActionType = {
	type: typeof SEND_MESSAGE;
	message: string;
};

type ActionsType = SendMessageActionType;

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
};

// Reducer
export const dialogsReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			return {
				...state,
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
