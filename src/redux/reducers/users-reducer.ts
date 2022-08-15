import { UserType } from '../../components/Users/UsersContainer';
import { usersAPI } from '../../api/usersAPI';
import { Dispatch } from 'redux';

// Const action
const FOLLOW = 'USER/FOLLOW';
const UNFOLLOW = 'USER/UNFOLLOW';
const SET_USERS = 'USER/SET_USERS';
const SET_CURRENT_PATE = 'USER/SET_CURRENT_PATE';
const SET_TOTAL_USERS_COUNT = 'USER/SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'USER/TOOGLE_IS_FETCHINGT';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'USER/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
	users: [] as Array<UserType>,
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [] as Array<number>,
};

type initialStateType = UsersType;
export type UsersType = typeof initialState;

export const usersReducer = (
	state: initialStateType = initialState,
	action: UsersActionsType
): initialStateType => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(u =>
					u.id === action.userID ? { ...u, followed: true } : u
				),
			};
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(u =>
					u.id === action.userID ? { ...u, followed: false } : u
				),
			};
		}
		case SET_USERS: {
			return { ...state, users: action.users };
		}
		case SET_CURRENT_PATE: {
			return {
				...state,
				currentPage: action.pageNumber,
			};
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.usersCount > 50 ? 50 : action.usersCount,
			};
		}
		case TOOGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			};
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId),
			};
		}
		default: {
			return state;
		}
	}
};

type FollowActionType = ReturnType<typeof followSuccess>;
type UnFollowActionType = ReturnType<typeof unFollowSuccess>;
type SetUsersType = ReturnType<typeof setUsers>;
type setCurrentPageType = ReturnType<typeof setCurrentPage>;
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>;
type setIsFetchingType = ReturnType<typeof setIsFetching>;
type SetIsFollowingProgress = ReturnType<typeof setIsFollowingProgress>;

export type UsersActionsType =
	| FollowActionType
	| UnFollowActionType
	| SetUsersType
	| setCurrentPageType
	| setTotalUsersCountType
	| setIsFetchingType
	| SetIsFollowingProgress;

// Action creator
export const followSuccess = (userID: number) =>
	({ type: FOLLOW, userID } as const);

export const unFollowSuccess = (userID: number) =>
	({ type: UNFOLLOW, userID } as const);

export const setUsers = (users: Array<UserType>) =>
	({ type: SET_USERS, users } as const);

export const setCurrentPage = (pageNumber: number) =>
	({ type: SET_CURRENT_PATE, pageNumber } as const);

export const setTotalUsersCount = (usersCount: number) =>
	({ type: SET_TOTAL_USERS_COUNT, usersCount } as const);

export const setIsFetching = (isFetching: boolean) =>
	({ type: TOOGLE_IS_FETCHING, isFetching } as const);

export const setIsFollowingProgress = (isFetching: boolean, userId: number) =>
	({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const);

// THUNK
export const requestUsers =
	(currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
		dispatch(setIsFetching(true));

		try {
			const res = await usersAPI.getUsers(currentPage, pageSize);
			dispatch(setCurrentPage(currentPage));
			dispatch(setUsers(res.items));
			dispatch(setTotalUsersCount(res.totalCount));
		} catch (e) {}

		dispatch(setIsFetching(false));
	};

export const follow = (userId: number) => async (dispatch: Dispatch) => {
	try {
		dispatch(setIsFollowingProgress(true, userId));

		const res = await usersAPI.follow(userId);
		if (res.resultCode === 0) {
			dispatch(followSuccess(userId));
		}
		dispatch(setIsFollowingProgress(false, userId));
	} catch (e) {}
};

export const unFollow = (userId: number) => async (dispatch: Dispatch) => {
	try {
		const res = await usersAPI.unFollow(userId);
		if (res.resultCode === 0) {
			dispatch(unFollowSuccess(userId));
		}
		dispatch(setIsFollowingProgress(false, userId));
	} catch (e) {}
};
