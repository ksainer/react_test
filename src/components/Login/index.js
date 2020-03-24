import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderField } from '../common/FormElements/FormElements';
import { required, maxLength, email } from '../utils/validators';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';

const maxLength25 = maxLength(25);

const LoginForm = props => {
	console.log(props)
	return (
		<form action="/" onSubmit={props.handleSubmit}>
			<Field component={renderField}
				type="text" name="email"
				placeholder="Login"
				validate={[required, maxLength25, email]} />
			<Field component={renderField}
				type="password" name="password"
				placeholder="Password"
				validate={[required]} />
			<Field component={renderField}
				type="checkbox" name="rememberMe"
				label='Remember me' />
			<button>Login</button>
		</form>
	)
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
	const submit = formData => {
		console.log('post:', formData);
		props.login(formData);
	}

	return props.isAuth
		? <Redirect to="/profile" />
		: <div>
			<h1>Login</h1>
			<ReduxLoginForm onSubmit={submit} />
		</div>
}
const mapState = state => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapState, { login })(Login);