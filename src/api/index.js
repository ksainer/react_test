import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	headers: {
		'API-KEY': 'c6939a33-9198-4833-a3f8-20a1915d8f9b',
	},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
	getUsers(page = 1, count = 10) {
		return instance.get(`users?page=${page}&count=${count}`)
			.then(response => response.data)
	},
	follow(id) {
		return instance.post(`follow/${id}`).then(response => response.data)
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`).then(response => response.data)
	}
}