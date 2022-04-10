// Const action
import {authAPI} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

// Init
export type initialStateType = {
    usersId: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
}
const initialState: initialStateType = {
    usersId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

export type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: AuthUserData
}

export type AuthUserData = {
    userId: number
    email: string
    login: string
}

type ActionsType = SetAuthUserDataActionType;

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        default: {
            return state;
        }
    }
}

// Action creator
export const setAuthUserData = (userId: number, email: string, login: string): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login}
});

// THUNK
export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then(response => {
        if (response.resultCode === 0) {
            const {id, login, email} = response.data;
            dispatch(setAuthUserData(id, email, login));
        }
    })
}