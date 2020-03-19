const SET_USERS = 'SET-USERS';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWED = 'TOGGLE-IS-FOLLOWED';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';

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
		
		return { ...state, followingInProgress: action.isFetching 
			? [...state.followingInProgress, action.id] 
			: state.followingInProgress.filter(userID => userID !== action.id) }
	} else if (action.type === TOGGLE_IS_FOLLOWED) {
		const newState = { ...state, list: [...state.list] };
		newState.list[action.index] = { ...state.list[action.index], followed: action.followed };
		return newState;
	} else return state;
}

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
export const toggleIsFollowed = (index, followed) => {
	return { type: TOGGLE_IS_FOLLOWED, index, followed }
}
export const toggleFollowingProgress = (isFetching, id) => {
	return { type: TOGGLE_FOLLOWING_PROGRESS, isFetching, id }
}