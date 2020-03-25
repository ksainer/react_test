import React from 'react';
import Login from '.';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';

const LoginContainer = props => {
	const submit = formData => {
		props.login(formData);
	};

	if (props.isAuth) return <Redirect to="/profile" />

	return <Login submit={submit} />
}
const mapState = state => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapState, { login })(LoginContainer);