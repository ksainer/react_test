import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { formProjectReducer } from './form-project-reducer';
import { navbarReducer } from './navbar-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
	form: formProjectReducer,
	navbar: navbarReducer,
	users: usersReducer,
	auth: authReducer
})

// let store = createStore(reducers, applyMiddleware(thunk));
// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

  
export default store;