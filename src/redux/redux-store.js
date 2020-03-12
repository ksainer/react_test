import { createStore, combineReducers } from 'redux';
import { formProjectReducer } from './form-project-reducer';
import { navbarReducer } from './navbar-reducer';

const reducers = combineReducers({
	form: formProjectReducer,
	navbar: navbarReducer
})

let store = createStore(reducers);

export default store;