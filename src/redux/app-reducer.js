import { getUserData } from "./auth-reducer";

const INITIALIZED = 'INITIALIZED';

const initialState = {
	initialized: false,
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case (INITIALIZED): {
			return { ...state, initialized: true }
		}
		default:
			return state;
	}
}

export const initializeSuccess = () => ({ type: INITIALIZED })

// thunks:

export const initializeApp = () => dispatch => {
	dispatch(getUserData())
		.then(() => dispatch(initializeSuccess()));
}