import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import {BrowserRouter} from 'react-router-dom';

function App(props) {
	return (
		<BrowserRouter>
			<Header />
			<div className="wrapper">
				<Navbar navList={props.state.navList} path="/"/>
				<Content />
			</div>
		</BrowserRouter>
	)
}

export default App;