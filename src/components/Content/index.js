import React from 'react';
import './content.css';
import InputContainer from '../Input/InputContainer';
import InputFileContainer from '../InputFile/InputFileContainer';

function Content(props) {

	function onSubmitForm(e) {
		e.preventDefault();

		props.createProject();
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
				<div className="uploadFiles">
					<InputFileContainer index="0" />
					<InputFileContainer index="1" />
				</div>
				<div className="form__buttons">
					<button className="btn__back" type="reset" onClick={props.resetForm}>Reset</button>
					<button className="btn__submit" onClick={onSubmitForm}>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default Content;