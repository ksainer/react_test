import React from 'react';
import './input.css';

function Input(props) {
	const spanCurrentLength = React.createRef();
	let errorText = 'Every project needs a name, doesn’t it?';

	function updateCurrentValue(e) {
		props.data.currentText = e.target.value;

		let curlen = e.target.value.length;
		spanCurrentLength.current.firstElementChild.textContent = curlen;
		if (curlen > props.data.maxlength) {
			console.log('text is too long');
			spanCurrentLength.current.classList.add('red');
		} else {
			spanCurrentLength.current.classList.remove('red');
		}

		props.dispatch({type: 'UPDATE-FORM', index: props.index, newText: e.target.value});

	}

	function getElementWithType() {
		if (props.data.type === "text") {
			return (
				<input 
					type="text" 
					className="input__field" 
					name={props.data.name}
					id={props.data.name}
					placeholder={props.data.placeholder}
					onChange={updateCurrentValue}
					value={props.data.currentText} />
			)
		} else if (props.data.type === 'textarea') {
			return (
				<textarea 
					className="input__field" 
					name={props.data.name} 
					id={props.data.name}
					placeholder={props.data.placeholder}
					onChange={updateCurrentValue}
					value={props.data.currentText} />
			)
		}
	}
	return (
		<div className="input">
			<div className="input__topline">
				<p className="input__text">
					{props.data.text}
					<span className="red">*</span>
				</p>
				<p className="input__length" ref={spanCurrentLength}>
					<span className="input__current-length">0</span>/
					<span className="input__max-length">{props.data.maxlength}</span>
				</p>
			</div>
			{getElementWithType()}
			<div className="input__error">{errorText}</div>
		</div>
	)	
}

export default Input;