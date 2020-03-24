import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar';
import ContentContainer from './components/Content/ContentContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login';
import Logout from './components/Logout';

function App(props) {
	return (
		<div>
			<HeaderContainer />
			<div className="wrapper" >
				<Navbar navList={props.state.navbar.navList} navPath="/" />
				<div className='right-col'>
					<Route path="/project-info" component={ContentContainer} />
					<Route path="/users" component={UsersContainer} />
					<Route path="/profile/:userID?" component={ProfileContainer} />
					<Route path="/login" component={Login} />
					<Route path="/logout" component={Logout} />
				</div>
			</div>
		</div>
	)
}

export default App;