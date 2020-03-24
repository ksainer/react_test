import { usersAPI } from "../api";

const SET_USERS = 'SET-USERS',
	SET_USERS_COUNT = 'SET-USERS-COUNT',
	SET_PAGE = 'SET-PAGE',
	SET_TOTAL_COUNT = 'SET-TOTAL-COUNT',
	TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING',
	TOGGLE_IS_FOLLOWED = 'TOGGLE-IS-FOLLOWED',
	TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';

const initialState = {
	list: [],
	count: 5,
	page: 1,
	totalCount: 0,
	isFetching: false,
	followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
	if (action.type === SET_USERS) {
		return { ...state, list: [...action.list] }
	} else if (action.type === SET_USERS_COUNT) {
		return { ...state, count: action.count }
	} else if (action.type === SET_PAGE) {
		return { ...state, page: action.page }
	} else if (action.type === SET_TOTAL_COUNT) {
		return { ...state, totalCount: action.totalCount }
	} else if (action.type === TOGGLE_IS_FETCHING) {
		return { ...state, isFetching: action.isFetching }
	} else if (action.type === TOGGLE_FOLLOWING_PROGRESS) {
		return {
			...state, followingInProgress: action.isFetching
				? [...state.followingInProgress, action.id]
				: state.followingInProgress.filter(userID => userID !== action.id)
		}
	} else if (action.type === TOGGLE_IS_FOLLOWED) {
		return {
			...state, list: state.list.map(
				user => user.id === action.userID
					? { ...user, followed: action.followed }
					: user)
		};
	} else return state;
}

// dispatch creators

export const setUsers = (list) => {
	return { type: SET_USERS, list }
}
export const setCount = (count) => {
	return { type: SET_USERS_COUNT, count }
}
export const setPage = (page) => {
	return { type: SET_PAGE, page }
}
export const setTotalCount = (totalCount) => {
	return { type: SET_TOTAL_COUNT, totalCount }
}
export const toggleIsFetching = (isFetching) => {
	return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const toggleIsFollowed = (followed, userID) => {
	return { type: TOGGLE_IS_FOLLOWED, followed, userID }
}
export const toggleFollowingProgress = (isFetching, id) => {
	return { type: TOGGLE_FOLLOWING_PROGRESS, isFetching, id }
}

// thunk creators

export const getUsers = (page, count) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));

		usersAPI.getUsers(page, count)

			.then(data => {
				dispatch(setUsers(data.items));
				dispatch(setTotalCount(data.totalCount));
				dispatch(toggleIsFetching(false));
			});
	}
}

export const toggleFollow = (userID, followed) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userID));

		if (followed) {
			usersAPI.unfollow(userID)
				.then(response => {
					dispatch(toggleFollowingProgress(false, userID));
					if (response.data.resultCode === 0) {
						dispatch(toggleIsFollowed(false, userID));
					}
				}, e => dispatch(toggleFollowingProgress(false, userID)))
		} else {
			usersAPI.follow(userID)
				.then(response => {
					dispatch(toggleFollowingProgress(false, userID));
					if (response.data.resultCode === 0) {
						dispatch(toggleIsFollowed(true, userID));
					}
				}, e => dispatch(toggleFollowingProgress(false, userID)))
		}
	}
}