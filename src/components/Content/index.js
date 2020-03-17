import React from 'react';
import './content.css';
import InputContainer from '../Input/InputContainer';
import * as axios from 'axios';

function Content(props) {

	function onResetForm() {
		props.resetForm();

		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			console.log(response.data);
		});
	}
	
	function onSubmitForm(e) {
		e.preventDefault();
		let check = false;

		for (let i = 0; i < props.errorCodes.length; i++) {
			if (props.errorCodes[i] !== 200) {
				props.showError(i, true);
				check = true;
			};
		}

		if (check) return console.log('Fail!');

		const request = new XMLHttpRequest();
		request.open("POST", "/");
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		let json = JSON.stringify({
			projectName: props.fields[0],
			projectDisc: props.fields[1],
			website: props.fields[2],
			fullDesc: props.fields[3]
		 });

		request.onreadystatechange = () => {
			props.createProject(props.fields);
			console.log('Send: ', json);	
		}

		request.send(json);
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
					<button className="btn__back" type="reset" onClick={onResetForm}>Reset</button>
					<button className="btn__submit" onClick={onSubmitForm}>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default Content;