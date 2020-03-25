import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { projectReducer } from './project-reducer';
import { navbarReducer } from './navbar-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';
import { profileReducer } from './profile-reducer';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { appReducer } from './app-reducer';

const reducers = combineReducers({
	createProject: projectReducer,
	navbar: navbarReducer,
	users: usersReducer,
	auth: authReducer,
	profile: profileReducer,
	form: formReducer,
	app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

  
export default store;