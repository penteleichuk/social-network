import thunk, { ThunkAction } from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { DialogsActionsType, dialogsReducer } from './reducers/dialogs-reducer';
import { ProfileActionsType, profileReducer } from './reducers/profile-reducer';
import { UsersActionsType, usersReducer } from './reducers/users-reducer';
import { AuthActionsType, authReducer } from './reducers/auth-reducer';
import { AppActionType, appReducer } from './reducers/app-reducer';

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
type ActionsType =
	| AppActionType
	| AuthActionsType
	| DialogsActionsType
	| ProfileActionsType
	| UsersActionsType;

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppStateType,
	unknown,
	ActionsType
>;
