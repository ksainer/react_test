import React from 'react';
import './content.css';
import Input from '../Input';

function Content() {
	return (
		<div className="content">
			<h1 className="content__title">Hi, James!</h1>
			<h2 className="content__subtitle">Let's fill out the general information about your project</h2>
			<form action="/" method="post">
				<Input 
					type="text"
					name="Project name"
					placeholder="Your project name"
					maxlength="50"/>
				<Input 
					type="text"
					name="Short description (see examples for popular projects on Techcrunch)"
					maxlength="50"/>
				<Input 
					type="text"
					name="Website"
					placeholder="Your project website"
					maxlength="50"/>
				<Input 
					type="textarea"
					name="Full project description"
					placeholder="Describe your project in 500 symbols"
					maxlength="50"/>
			</form>
		</div>
	)
}

export default Content;