import { getAuthUserData } from './auth-reducer';

const SET_INITIALIZED = 'APP/SET_INITIALIZED';

type SetInitialActionType = {
	type: typeof SET_INITIALIZED;
	initialized: boolean;
};

type ActionType = SetInitialActionType;

type initialStateType = {
	initialized: boolean;
};

const initialState = {
	initialized: false,
};

export const appReducer = (
	state: initialStateType = initialState,
	action: ActionType
): initialStateType => {
	switch (action.type) {
		case SET_INITIALIZED: {
			return {
				...state,
				initialized: action.initialized,
			};
		}

		default: {
			return state;
		}
	}
};

export const setInitializeApp = (
	initialized: boolean
): SetInitialActionType => {
	return { type: SET_INITIALIZED, initialized };
};

export const initializeApp = () => async (dispatch: any) => {
	await dispatch(getAuthUserData());
	dispatch(setInitializeApp(true));
};
