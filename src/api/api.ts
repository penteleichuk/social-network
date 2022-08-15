import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'b0f2abba-b87d-4df6-86d7-2c86bde3a1a0',
	},
});

export const usersAPI = {
	getUsers(currentPage: number = 1, pageSize: number = 10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},

	follow(id: number) {
		return instance.post(`follow/${id}`).then(response => response.data);
	},

	unFollow(id: number) {
		return instance.delete(`follow/${id}`).then(response => response.data);
	},

	getProfile(userId: number) {
		console.warn('Obsolete method. Please use profileAPI object');
		return profileAPI.getProfile(userId);
	},
};

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

export const authAPI = {
	me() {
		return instance.get(`auth/me`).then(response => response.data);
	},
	login(email: string, password: string, rememberMe: boolean, captcha: string) {
		return instance.post(`auth/login`, {
			email: email,
			password: password,
			rememberMe: rememberMe,
			captcha: captcha,
		});
	},
	logout() {
		return instance.delete(`auth/login`);
	},
	getCaptcha() {
		return instance.get<{ url: string }>(`security/get-captcha-url`);
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
