import { getAuthUserData } from './auth-reducer';

const SET_INITIALIZED = 'APP/SET_INITIALIZED';

const initialState = {
	initialized: false,
};

type initialStateType = typeof initialState;

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

type SetInitialActionType = ReturnType<typeof setInitializeApp>;
type ActionType = SetInitialActionType;

export const setInitializeApp = (initialized: boolean) => {
	return { type: SET_INITIALIZED, initialized } as const;
};

export const initializeApp = () => async (dispatch: any) => {
	await dispatch(getAuthUserData());
	dispatch(setInitializeApp(true));
};
