import React from 'react';

const InputError = (props) => {
	if (props.show) {
		return (
			<div className="input__error">{props.text}</div>
		)
	} else return <div></div>
}

export default InputError;