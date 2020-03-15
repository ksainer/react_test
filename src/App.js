import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ContentContainer from './components/Content/ContentContainer';

function App(props) {
	return (
	<div>
		<Header />
		<div className = "wrapper" >
			<Navbar navList = { props.state.navbar.navList } navPath="/" />
			{/* <Content form = { props.state.form } dispatch = { props.dispatch } /> */}
			<ContentContainer />
		</div>
	</div>
	)
}

export default App;