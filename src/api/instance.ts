import axios from 'axios';

export const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'b0f2abba-b87d-4df6-86d7-2c86bde3a1a0',
	},
});
