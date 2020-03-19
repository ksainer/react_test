import { createStore, combineReducers } from 'redux';
import { formProjectReducer } from './form-project-reducer';
import { navbarReducer } from './navbar-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';

const reducers = combineReducers({
	form: formProjectReducer,
	navbar: navbarReducer,
	users: usersReducer,
	auth: authReducer
})

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;