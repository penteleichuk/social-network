import { createSelector } from 'reselect';
import { UserType } from '../../../components/Users/UsersContainer';
import { AppStateType } from '../../redux-store';

export const getUsers = (state: AppStateType): Array<UserType> => {
	return state.usersPage.users;
};

export const getUsersSelector = createSelector(getUsers, users => {
	return users;
});

export const getPageSize = (state: AppStateType): number => {
	return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: AppStateType): number => {
	return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: AppStateType): number => {
	return state.usersPage.currentPage;
};

export const getIsFetching = (state: AppStateType): boolean => {
	return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: AppStateType): Array<number> => {
	return state.usersPage.followingInProgress;
};
