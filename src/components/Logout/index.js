import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';

const Logout = props => {
	props.logout();
	return props.isAuth ? <div>logout...</div> : <Redirect to="/login" />
}

const mapState = state => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapState, { logout })(Logout);