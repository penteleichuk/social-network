import { mapStateToPropsType } from '../../components/Profile/MyPosts/MyPostsContainer';
import {
	ProfilePhotosType,
	ProfilePropsType,
} from '../../components/Profile/ProfileContainer';
import { profileAPI, usersAPI } from '../../api/api';

// Const action
const ADD_POST = 'PROFILE/ADD-POST';
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE';
const SET_USER_STATUS = 'PROFILE/SET_USER_STATUS';
const SET_USER_PHOTOS = 'PROFILE/SET_USER_PHOTOS';

// Action type
type AddPostActionType = {
	type: typeof ADD_POST;
	post: string;
};
type SetUserProfileActionType = {
	type: typeof SET_USER_PROFILE;
	profile: any;
};
type SetUserStatusActionType = {
	type: typeof SET_USER_STATUS;
	status: string;
};
type SetUserPhotosActionType = {
	type: typeof SET_USER_PHOTOS;
	files: ProfilePhotosType;
};
type ActionsType =
	| AddPostActionType
	| SetUserProfileActionType
	| SetUserStatusActionType
	| SetUserPhotosActionType;

// Init
type initialStateType = mapStateToPropsType;
const initialState: initialStateType = {
	posts: [
		{ id: 1, message: 'Hi, how are you ?', likesCount: 20 },
		{ id: 2, message: "It's my first post", likesCount: 12 },
	],
	profile: null,
	status: '',
};

// Reducer
export const profileReducer = (
	state: initialStateType = initialState,
	action: ActionsType
): initialStateType => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = { id: 5, message: action.post, likesCount: 0 };
			return { ...state, posts: [newPost, ...state.posts] };
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile };
		}
		case SET_USER_STATUS: {
			return { ...state, status: action.status };
		}
		case SET_USER_PHOTOS: {
			return {
				...state,
				profile: { ...state.profile, photos: action.files },
			};
		}
		default: {
			return state;
		}
	}
};

// Action creator
export const addPostActionCreator = (post: string): AddPostActionType => ({
	type: ADD_POST,
	post: post,
});

export const setUserProfile = (
	profile: ProfilePropsType
): SetUserProfileActionType => ({
	type: SET_USER_PROFILE,
	profile,
});

export const setUserStatus = (status: string): SetUserStatusActionType => ({
	type: SET_USER_STATUS,
	status: status,
});

export const setUserPhotos = (
	files: ProfilePhotosType
): SetUserPhotosActionType => ({
	type: SET_USER_PHOTOS,
	files: files,
});

// THUNK
export const getProfile =
	(userId: number = 2) =>
	async (dispatch: any) => {
		try {
			const res = await usersAPI.getProfile(userId);
			dispatch(setUserProfile(res.data));
		} catch (e) {}
	};

export const getStatus = (userId: number) => async (dispatch: any) => {
	try {
		const res = await profileAPI.getStatus(userId);
		dispatch(setUserStatus(res.data));
	} catch (e) {}
};

export const updateStatus = (status: string) => async (dispatch: any) => {
	try {
		const res = await profileAPI.updateStatus(status);
		if (res.data.resultCode === 0) {
			dispatch(setUserStatus(status));
		}
	} catch (e) {}
};

export const updatePhoto = (file: string) => async (dispatch: any) => {
	try {
		const res = await profileAPI.updatePhoto(file);
		if (res.data.resultCode === 0) {
			dispatch(setUserPhotos(res.data.data.photos));
		}
	} catch (e) {}
};
