import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';

const rerender = () => {
	console.log(store.getState())
	ReactDOM.render( < App state = { store.getState() }
		dispatch = { store.dispatch.bind(store) }
		/>, 
		document.getElementById('root'));
}

rerender();

store.subscribe(rerender);