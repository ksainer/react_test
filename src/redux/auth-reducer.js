import { authAPI } from "../api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_AUTH = 'TOGGLE-IS-AUTH';

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case (SET_USER_DATA): {
			return { ...state, ...action.data }
		}
		case (TOGGLE_IS_AUTH): {
			if (!action.isAuth) return { ...initialState }
			return { ...state, isAuth: action.isAuth }
		}
		default:
			return state;
	}
}

export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })

export const toggleIsAuth = (isAuth) => ({ type: TOGGLE_IS_AUTH, isAuth })

// thunks:

export const getUserData = () => dispatch => {
	return authAPI.me()
		.then(response => {
			if (response.data.resultCode === 0) {
				const { id, email, login } = response.data.data;
				dispatch(setUserData(id, email, login));
				dispatch(toggleIsAuth(true));
			}
		})
}

export const login = values => dispatch => {
	authAPI.login(values).then(res => {
		if (res.data.resultCode) {
			dispatch(stopSubmit('login', { _error: res.data.messages[0] }));
		} else {
			dispatch(getUserData());
		}
	})
}

export const logout = () => dispatch => {
	authAPI.logout().then(res => {
		if (res.data.resultCode) {
			console.warn(res.data.messages);
		} else {
			dispatch(toggleIsAuth(false));
		}
	})
}