import React from 'react';
import './input.css';

function Input(props) {
	let formName = props.name.replace( /\s+/g, '-');
	if (formName.length > 10) {
		formName = formName.slice(0, 10);
	}

	const newText = React.createRef();
	const spanCurrentLength = React.createRef();

	function updateCurrentValue() {
		let curlen = newText.current.value.length;
		spanCurrentLength.current.textContent = curlen;
		if (curlen > props.maxlength) {
			console.log('text is too long');
		}
	}

	if (props.type === "text") {
		return (
			<div className="input">
				<div className="input__top-line">
					<p className="input__text">
						{props.name}
						<span className="red">*</span>
					</p>
					<p className="input__length">
						<span className="input__current-length" ref={spanCurrentLength}>0</span>/
						<span className="input__max-length">{props.maxlength}</span>
					</p>
				</div>
				<input 
					className="input__field" 
					type="text" 
					name={formName}
					id={formName}
					placeholder={props.placeholder}
					ref={newText}
					onChange={updateCurrentValue}/>
			</div>
		)
	} else if (props.type === 'textarea') {
		return (
			<div className="input">
				<div className="input__top-line">
					<p className="input__text">
						{props.name}
						<span className="red">*</span>
					</p>
					<p className="input__length">
						<span className="input__current-length"></span>
						<span className="input__max-length"></span>
					</p>
				</div>
				<textarea 
					className="input__field" 
					name="project-name" 
					id="project-name"
					placeholder={props.placeholder}
					ref={newText}/>
			</div>
		)
	}
	
}

export default Input;