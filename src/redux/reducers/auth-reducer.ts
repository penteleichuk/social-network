// Const action
import { Dispatch } from 'redux';
import { authAPI } from '../../api/api';
import { LoginPropsType } from '../../components/Login/Login';
import { FormikValues } from 'formik';

const SET_USER_DATA = 'AUTH/SET_USER_DATA';
const SET_AUTH_CAPTCHA = 'AUTH/SET_AUTH_CAPTCHA';

const initialState = {
	userId: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isFetching: false,
	isAuth: false,
	captcha: null as string | null,
};

type initialStateType = typeof initialState;

export const authReducer = (
	state: initialStateType = initialState,
	action: ActionsType
): initialStateType => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload,
			};
		}
		case SET_AUTH_CAPTCHA: {
			return {
				...state,
				captcha: action.url,
			};
		}
		default: {
			return state;
		}
	}
};

type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>;
type SetAuthCaptchaActionType = ReturnType<typeof setAuthCaptcha>;
type ActionsType = SetAuthUserDataActionType | SetAuthCaptchaActionType;

// Action creator
export const setAuthUserData = (
	userId: number,
	email: string,
	login: string,
	isAuth: boolean
) =>
	({
		type: SET_USER_DATA,
		payload: { userId, email, login, isAuth },
	} as const);

export const setAuthCaptcha = (url: string) => {
	return { type: SET_AUTH_CAPTCHA, url } as const;
};

// THUNK
export const getAuthUserData = () => async (dispatch: Dispatch) => {
	const res = await authAPI.me();
	if (res.resultCode === 0) {
		const { id, login, email } = res.data;
		dispatch(setAuthUserData(id, email, login, true));
	}

	return res;
};

export const login =
	(values: LoginPropsType, actions: FormikValues) => async (dispatch: any) => {
		try {
			const res = await authAPI.login(
				values.login,
				values.password,
				values.remember,
				values.captcha
			);

			if (res.data.resultCode === 0) {
				dispatch(getAuthUserData());
				return 1;
			} else if (res.data.resultCode === 10) {
				dispatch(getCaptcha());
			}
			actions.setStatus({ error: res.data.messages[0] });
		} catch (e) {}
	};

export const logout = () => async (dispatch: Dispatch) => {
	try {
		const res = await authAPI.logout();
		if (res.data.resultCode === 0) {
			dispatch(setAuthUserData(0, '', '', true));
		}
	} catch (e) {}
};

export const getCaptcha = () => async (dispatch: Dispatch) => {
	try {
		const res = await authAPI.getCaptcha();
		dispatch(setAuthCaptcha(res.data.url));
	} catch (e) {}
};
