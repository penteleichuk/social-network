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
		facebook: string | undefined;
		twitter: string | undefined;
		github: string | undefined;
		youtube: string | undefined;
	};
};

export type ProfilePhotosType = {
	small: string | null;
	large: string | null | undefined;
};

type ProfileContactsType = {
	facebook: string | null | undefined;
	website: string | null | undefined;
	vk: string | null | undefined;
	twitter: string | null | undefined;
	instagram: string | null | undefined;
	youtube: string | null | undefined;
	github: string | null | undefined;
	mainLink: string | null | undefined;
};

export type ProfilePropsType = {
	aboutMe?: string | null | undefined;
	contacts?: ProfileContactsType;
	lookingForAJob?: boolean;
	lookingForAJobDescription?: string | undefined;
	fullName?: string | undefined;
	userId?: number;
	photos?: ProfilePhotosType;
} | null;
