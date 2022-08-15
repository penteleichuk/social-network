import { instance } from './instance';

export const profileAPI = {
	getProfile(userId: number) {
		return instance.get(`profile/${userId}`);
	},

	getStatus(userId: number) {
		return instance.get(`profile/status/${userId}`);
	},

	updateStatus(status: string) {
		return instance.put(`profile/status`, { status });
	},

	updatePhoto(file: string) {
		const formData = new FormData();
		formData.append('image', file);
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
	},

	update(data: UpdateRequestType) {
		return instance.put(`profile`, data);
	},
};

export type UpdateRequestType = {
	fullName: string | undefined;
	aboutMe: string | undefined;
	lookingForAJob: string | undefined;
	lookingForAJobDescription: string | undefined;
	contacts: {
		facebook: string;
		twitter: string;
		github: string;
		youtube: string;
	};
};

export type ProfilePhotosType = {
	small: string;
	large: string;
};

export type ProfileContactsType = {
	facebook: string;
	website: string;
	vk: string;
	twitter: string;
	instagram: string;
	youtube: string;
	github: string;
	mainLink: string;
};

export type ProfilePropsType = {
	aboutMe: string;
	contacts: ProfileContactsType;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	userId: number;
	photos: ProfilePhotosType;
};
