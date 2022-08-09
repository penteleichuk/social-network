import { mapStateToPropsType } from '../../components/Profile/MyPosts/MyPostsContainer';
import { ProfilePropsType } from '../../components/Profile/ProfileContainer';
import { profileAPI, usersAPI } from '../../api/api';

// Const action
const ADD_POST = 'PROFILE/ADD-POST';
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE';
const SET_USER_STATUS = 'PROFILE/SET_USER_STATUS';

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
type ActionsType =
	| AddPostActionType
	| SetUserProfileActionType
	| SetUserStatusActionType;

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

// THUNK
export const getProfile =
	(userId: number = 2) =>
	(dispatch: any) => {
		usersAPI
			.getProfile(userId)
			.then(response => dispatch(setUserProfile(response.data)));
	};

export const getStatus = (userId: number) => (dispatch: any) => {
	profileAPI.getStatus(userId).then(res => {
		dispatch(setUserStatus(res.data));
	});
};

export const updateStatus = (status: string) => (dispatch: any) => {
	profileAPI.updateStatus(status).then(res => {
		if (res.data.resultCode === 0) {
			dispatch(setUserStatus(status));
		}
	});
};
