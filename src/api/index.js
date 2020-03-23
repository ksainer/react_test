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
			.then(response => response.data);
	},
	follow(id) {
		return instance.post(`follow/${id}`);
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`);
	},
}

export const authAPI = {
	authMe() {
		return instance.get(`auth/me`);
	}
}

export const formAPI = {
	postProject(fields) {
		const request = new XMLHttpRequest();
		request.open("POST", "/");
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		let json = JSON.stringify({
			projectName: fields[0],
			projectDisc: fields[1],
			website: fields[2],
			fullDesc: fields[3]
		});

		request.onreadystatechange = () => {
			console.log('Send: ', json);
		}
		
		request.send(json);
	}
}