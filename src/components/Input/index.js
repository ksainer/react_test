import React from 'react';
import './input.css';

function Input(props) {
	const type = props.data.type,
		text = props.data.text,
		name = props.data.name,
		placeholder = props.data.placeholder,
		maxlength = props.data.maxlength,
		currentText = props.data.currentText,
		req = props.data.required;
	let checkError = false;

	const spanCurrentLength = React.createRef();
	let errorText = 'Every project needs a name, doesn’t it?';

	const updateInput = (e) => {
		props.updateCurrentValue(e.target.value);
	}

	const getElementWithType = () => {
		if (type === "text") {
			return (
				<input
					type="text"
					className={"input__field" + (checkError ? ' red' : '')}
					name={name}
					id={name}
					placeholder={placeholder}
					onChange={updateInput}
					value={currentText}
					required={req}/>
			)
		} else if (type === 'textarea') {
			return (
				<textarea
					className={"input__field" + (checkError ? ' red' : '')}
					name={name}
					id={name}
					placeholder={placeholder}
					onChange={updateInput}
					value={currentText}/>
			)
		}
	}
	
	if (maxlength && currentText.length > maxlength) {
		checkError = true;
		errorText = 'Text is too long.';
	} else {
		checkError = false;
	}

	return (
		<div className="input">
			<div className="input__topline">
				<p className="input__text">
					{text}
					{req && <span className="red">*</span>}
				</p>
				{maxlength && <p className={"input__length" + (checkError ? " red" : "")} ref={spanCurrentLength}>
					<span className="input__current-length">{currentText.length}</span>/
					<span className="input__max-length">{maxlength}</span>
				</p>}
			</div>
			{getElementWithType()}
			{checkError && <div className="input__error">{errorText}</div>}
			
		</div>
	)
}

export default Input;