import { instance } from './instance';

export const usersAPI = {
	async getUsers(currentPage: number = 1, pageSize: number = 10) {
		const response = await instance.get(
			`users?page=${currentPage}&count=${pageSize}`
		);
		return response.data;
	},

	async follow(id: number) {
		const response = await instance.post(`follow/${id}`);
		return response.data;
	},

	async unFollow(id: number) {
		const response = await instance.delete(`follow/${id}`);
		return response.data;
	},
};
