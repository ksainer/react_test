import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar';
import ContentContainer from './components/Content/ContentContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import Logout from './components/Logout';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div>
				<HeaderContainer />
				<div className="wrapper" >
					<Navbar navList={this.props.state.navbar.navList} navPath="/" />
					<div className='right-col'>
						<Route path="/project-info" component={ContentContainer} />
						<Route path="/users" component={UsersContainer} />
						<Route path="/profile/:userID?" component={ProfileContainer} />
						<Route path="/login" component={LoginContainer} />
						<Route path="/logout" component={Logout} />
						<Route path="/faq" component={Preloader} />
					</div>
				</div>
			</div>
		)
	}
}

const mapState = state => ({
	initialized: state.app.initialized
})

export default compose(withRouter,
	connect(mapState, { initializeApp }))(App);