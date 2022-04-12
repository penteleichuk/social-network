import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': 'b0f2abba-b87d-4df6-86d7-2c86bde3a1a0',
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },

    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },

    getProfile(userId: number) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}