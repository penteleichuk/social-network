import {UserType} from "../../components/Users/UsersContainer";

// Const action
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

// Action type
type FollowActionType = {
    type: typeof FOLLOW
    userID: number
}
type UnFollowActionType = {
    type: typeof UNFOLLOW
    userID: number
}
type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
type ActionsType = FollowActionType | UnFollowActionType | SetUsersType


// Init
export type initialStateType = {
    users: Array<UserType>
}
const initialState: initialStateType = {
    users: []
}

export const usersReducer = (state:initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]};
        }
        default: {
            return state;
        }
    }
}

// Action creator
export const followAC = (userID: number) => ({type: FOLLOW, userID});
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users});