import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderField } from '../../common/FormElements/FormElements';
import { required, maxLength, email } from '../../utils/validators';

const maxLength25 = maxLength(25);

const LoginForm = props => {
	const { handleSubmit, submitting } = props;
	return (
		<form onSubmit={handleSubmit}>
			{props.error && <div>COMMON ERROR: {props.error}</div>}
			<div>
				<Field component={renderField}
					type="text" name="email"
					placeholder="Login"
					validate={[required, maxLength25, email]}
					disabled={submitting} />
			</div>
			<div>
				<Field component={renderField}
					type="password" name="password"
					placeholder="Password"
					validate={[required]}
					disabled={submitting} />
			</div>
			<Field component={renderField}
				type="checkbox" name="rememberMe"
				label='Remember me'
				disabled={submitting} />
			<button disabled={submitting}>{submitting ? 'Progress...' : 'Login'}</button>
		</form>
	)
}

export default reduxForm({ form: 'login' })(LoginForm)