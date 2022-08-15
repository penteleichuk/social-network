import { Dispatch } from 'redux';
import {
	UpdateRequestType,
	ProfilePhotosType,
	ProfilePropsType,
	profileAPI,
} from '../../api/profileAPI';
import { PostType } from '../../components/Profile/MyPosts/Post/Post';

// Const action
const ADD_POST = 'PROFILE/ADD-POST';
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE';
const SET_USER_STATUS = 'PROFILE/SET_USER_STATUS';
const SET_USER_PHOTOS = 'PROFILE/SET_USER_PHOTOS';

// Init
const initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you ?', likesCount: 20 },
		{ id: 2, message: "It's my first post", likesCount: 12 },
	] as Array<PostType>,
	profile: {
		aboutMe: '',
		contacts: {
			facebook: '',
			twitter: '',
			github: '',
			youtube: '',
		},
		lookingForAJob: false,
		lookingForAJobDescription: '',
		fullName: '',
		userId: 1,
		photos: {
			small: '',
			large: '',
		},
	} as ProfilePropsType,
	status: '',
};

type initialStateType = typeof initialState;

// Reducer
export const profileReducer = (
	state: initialStateType = initialState,
	action: ProfileActionsType
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

// Action type
type AddPostActionType = ReturnType<typeof addPostActionCreator>;
type SetUserProfileActionType = ReturnType<typeof setUserProfile>;
type SetUserStatusActionType = ReturnType<typeof setUserStatus>;
type SetUserPhotosActionType = ReturnType<typeof setUserPhotos>;

export type ProfileActionsType =
	| AddPostActionType
	| SetUserProfileActionType
	| SetUserStatusActionType
	| SetUserPhotosActionType;

// Action creator
export const addPostActionCreator = (post: string) =>
	({
		type: ADD_POST,
		post: post,
	} as const);

export const setUserProfile = (profile: ProfilePropsType) =>
	({
		type: SET_USER_PROFILE,
		profile,
	} as const);

export const setUserStatus = (status: string) =>
	({
		type: SET_USER_STATUS,
		status: status,
	} as const);

export const setUserPhotos = (files: ProfilePhotosType) =>
	({
		type: SET_USER_PHOTOS,
		files: files,
	} as const);

// THUNK
export const getProfile =
	(userId: number = 2) =>
	async (dispatch: Dispatch) => {
		try {
			const res = await profileAPI.getProfile(userId);
			dispatch(setUserProfile(res.data));
		} catch (e) {}
	};

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
	try {
		const res = await profileAPI.getStatus(userId);
		dispatch(setUserStatus(res.data));
	} catch (e) {}
};

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
	try {
		const res = await profileAPI.updateStatus(status);
		if (res.data.resultCode === 0) {
			dispatch(setUserStatus(status));
		}
	} catch (e) {}
};

export const updatePhoto = (file: string) => async (dispatch: Dispatch) => {
	try {
		const res = await profileAPI.updatePhoto(file);
		if (res.data.resultCode === 0) {
			dispatch(setUserPhotos(res.data.data.photos));
		}
	} catch (e) {}
};

export const updateProfile =
	(data: UpdateRequestType) => async (dispatch: Dispatch) => {
		try {
			const res = await profileAPI.update(data);
			if (res.data.resultCode === 0) {
				console.log('success');
			}
		} catch (e) {}
	};
