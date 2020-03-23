import { authAPI } from "../api";

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
			return { ...state, isAuth: action.isAuth }
		}
		default:
			return state;
	}
}

export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })

export const toggleIsAuth = (isAuth) => ({ type: TOGGLE_IS_AUTH, isAuth })

export const getUserData = () => (dispatch) => {
	authAPI.authMe()
		.then(response => {
			if (response.data.resultCode === 0) {
				const { id, email, login } = response.data.data;
				dispatch(setUserData(id, email, login));
				dispatch(toggleIsAuth(true));
			}
		})
}