import {combineReducers, createStore} from "redux";

import {dialogsReducer} from "./reducers/dialogs-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
