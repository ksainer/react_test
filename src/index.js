import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const rerender = () => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App state = {store.getState()}	dispatch = { store.dispatch.bind(store) }/>
			</Provider>
		</BrowserRouter>,
		document.getElementById('root'));
}

rerender();
