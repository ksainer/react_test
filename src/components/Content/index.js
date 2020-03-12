import React from 'react';
import './content.css';
import Input from '../Input';
import { projectCreator, resetFormCreator } from '../../redux/form-project-reducer';

function Content(props) {
	const fieldList = props.form.fields.map((field, index) => {
		return (
			<Input data = {field} dispatch = { props.dispatch } index = { index } key = { index } />
		)
	})

	function onResetForm() {
		props.dispatch(resetFormCreator());
	}

	function onSubmitForm(e) {
		e.preventDefault();

		props.dispatch(projectCreator(
			props.form.fields[0].currentText,
			props.form.fields[1].currentText,
			props.form.fields[2].currentText,
			props.form.fields[3].currentText,
		))

		return false; // <= Почему-то не работает
	}
		
	return (
		<div className = "content">
			<h1 className = "content__title">Hi, James!</h1>
			<h2 className = "content__subtitle">Let's fill out the general information about your project</h2>
			<form action = "/" method = "post" >
				{ fieldList }
				<div className = "form__buttons">
					<button className = "btn__back" type = "reset" onClick = { onResetForm } >Reset</button>
					<button className = "btn__submit" onClick = { onSubmitForm } >Submit</button>
				</div>
			</form>
		</div>
	)
}

export default Content;