import { instance } from './instance';

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
