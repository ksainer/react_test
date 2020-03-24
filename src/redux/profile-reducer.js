import { profileAPI } from "../api";


const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const STATUS_UPDATE_PROGRESS = 'STATUS_UPDATE_PROGRESS';

const initialState = {
	profile: { fullName: null, userId: null },
	status: '',
	statusInProgress: false
}

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case (SET_PROFILE): {
			return { ...state, profile: action.profile }
		}
		case (SET_STATUS): {
			return { ...state, status: action.status }
		}
		case (STATUS_UPDATE_PROGRESS): {
			return { ...state, statusInProgress: action.statusInProgress }
		}
		default: {
			return state
		}
	}
}

// dispatch creators:

const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

const statusUpdatingProgress = (statusInProgress) => ({
	type: STATUS_UPDATE_PROGRESS, statusInProgress
})

// thunk creators: 

export const getProfile = (userID) => (dispatch) => {
	profileAPI.getProfile(userID).then(response => dispatch(setProfile(response.data)));
}

export const getStatus = (userID) => (dispatch) => {
	profileAPI.getStatus(userID).then(response => dispatch(setStatus(response.data)));
}

export const updateStatus = (status) => (dispatch) => {
	dispatch(statusUpdatingProgress(true));
	profileAPI.updateStatus(status).then((response) => {
		if (!response.resultCode) {
			dispatch(setStatus(status));
			dispatch(statusUpdatingProgress(false));
		}
	});
}