import React from 'react';
import LoginForm from './LoginForm';

const Login = props => {
	return (
		<div>
			<h1>Login</h1>
			<LoginForm onSubmit={props.submit} />
		</div>
	)
}

export default Login;