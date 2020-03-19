import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ContentContainer from './components/Content/ContentContainer';
import UsersContainer from './components/Users/UsersContainer';
import Preloader from './components/common/Preloader';
import Profile from './components/Profile';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
	return (
	<div>
		<HeaderContainer />
		<div className = "wrapper" >
			<Navbar navList = { props.state.navbar.navList } navPath="/" />
			<div className='right-col'>
				<Route path="/project-info" component={ContentContainer} />
				<Route path="/users" component={UsersContainer}/>
				<Route path="/faq" component={Preloader}/>
				<Route path="/profile/:userID" component={Profile}/>
			</div>
		</div>
	</div>
	)
}

export default App;