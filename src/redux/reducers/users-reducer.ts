import {UserType} from "../../components/Users/UsersContainer";

// Const action
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PATE = 'SET_CURRENT_PATE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHINGT';

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
type setCurrentPageType = {
    type: typeof SET_CURRENT_PATE
    pageNumber: number
}
type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    usersCount: number
}
type setIsFetchingType = {
    type: typeof TOOGLE_IS_FETCHING
    isFetching: boolean
}
type ActionsType = FollowActionType | UnFollowActionType | SetUsersType | setCurrentPageType | setTotalUsersCountType | setIsFetchingType

// Init
export type initialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
const initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
            return {...state, users: action.users};
        }
        case SET_CURRENT_PATE: {
            return {
                ...state,
                currentPage: action.pageNumber,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.usersCount > 50 ? 50 : action.usersCount,
            }
        }
        case TOOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        default: {
            return state;
        }
    }
}

// Action creator
export const followAC = (userID: number): FollowActionType => ({type: FOLLOW, userID});
export const unFollowAC = (userID: number): UnFollowActionType => ({type: UNFOLLOW, userID});
export const setUsersAC = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users});
export const setCurrentPageAC = (pageNumber: number): setCurrentPageType => ({type: SET_CURRENT_PATE, pageNumber});
export const setTotalUsersCountAC = (usersCount: number): setTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, usersCount});
export const setIsFetchingAC = (isFetching: boolean): setIsFetchingType => ({type: TOOGLE_IS_FETCHING, isFetching});