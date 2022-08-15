import { DialogType } from '../../components/Dialogs/DialogItem/DialogItem';
import { MessageType } from '../../components/Dialogs/Message/Message';

// Const action
const SEND_MESSAGE = 'DIALOG/SEND-MESSAGE';

// Init state
const initialState = {
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is your samurai' },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' },
	] as Array<MessageType>,
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Viktor' },
		{ id: 6, name: 'Petya' },
	] as Array<DialogType>,
};

type InitialStateType = DialogsType;
export type DialogsType = typeof initialState;

// Reducer
export const dialogsReducer = (
	state: InitialStateType = initialState,
	action: DialogsActionsType
): InitialStateType => {
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
type SendMessageActionType = ReturnType<typeof sendMessageCreator>;
export type DialogsActionsType = SendMessageActionType;

export const sendMessageCreator = (message: string) =>
	({
		type: SEND_MESSAGE,
		message,
	} as const);
