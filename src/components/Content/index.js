import React from 'react';
import './content.css';
import InputContainer from '../Input/InputContainer';

function Content(props) {

	function onResetForm() {
		props.resetForm();
	}

	function onSubmitForm(e) {
		e.preventDefault();

		props.createProject(props.fields.map(field => field.currentText))

		return false; // <= Почему-то не работает
	}

	return (
		<div className="content">
			<h1 className="content__title">Hi, James!</h1>
			<h2 className="content__subtitle">Let's fill out the general information about your project</h2>
			<form action="/" method="post" >
				<InputContainer index="0" />
				<InputContainer index="1" />
				<InputContainer index="2" />
				<InputContainer index="3" />
				<div className="form__buttons">
					<button className="btn__back" type="reset" onClick={onResetForm} >Reset</button>
					<button className="btn__submit" onClick={onSubmitForm} >Submit</button>
				</div>
			</form>
		</div>
	)
}

export default Content;