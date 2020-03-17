import React from 'react';
import './input.css';
import InputErrorContainer from './InputError/InputErrorContainer';

function Input(props) {
	const type = props.data.type,
		text = props.data.text,
		name = props.data.name,
		placeholder = props.data.placeholder,
		requirements = {...props.data.requirements},
		currentText = props.data.currentText;

	const spanCurrentLength = React.createRef();

	const checkError = (currentText) => {
		if (!currentText.length) {
			props.updateError(0);
			return 0;
		} else if (requirements.minlength && currentText.length < requirements.minlength) {
			props.updateError(1);
			return 1;
		} else if (requirements.maxlength && currentText.length > requirements.maxlength) {
			props.updateError(2);
			return 2;
		} else  if (requirements.pattern && !requirements.pattern.test(currentText)) {
			props.updateError(3);
			return 3;
		} else {
			props.updateError(200);
			return 200;
		}
	}

	const onChangeField = (e) => {
		props.updateCurrentValue(e.target.value);
		
		if (checkError(e.target.value) === 2) {
			e.target.classList.add('red');
			props.showError(true);
		} else {
			e.target.classList.remove('red');
			props.showError(false);
		}
	}

	const onBlurField = (e) => {
		if ([1,2,3].includes(checkError(e.target.value))) {
			e.target.classList.add('red');
			props.showError(true);
		} else {
			e.target.classList.remove('red');
			props.showError(false);
		}
	}

	const getElementWithType = () => {
		if (["text", "email"].includes(type)) {
			return (
				<input
					type={type}
					className={"input__field" + (false ? ' red' : '')}
					name={name}
					id={name}
					placeholder={placeholder}
					onChange={onChangeField}
					onBlur={onBlurField}
					value={currentText}
					required={requirements.req}
					pattern={requirements.pattern}/>
			)
		} else if (type === 'textarea') {
			return (
				<textarea
					className={"input__field" + (false ? ' red' : '')}
					name={name}
					id={name}
					placeholder={placeholder}
					onChange={onChangeField}
					onBlur={onBlurField}
					value={currentText}
					required={requirements.req}
					pattern={requirements.pattern}/>
			)
		}
	}

	return (
		<div className="input">
			<div className="input__topline">
				<p className="input__text">
					{text}
					{requirements.req && <span className="red">*</span>}
				</p>
				{requirements.maxlength && <p className={"input__length" + (false ? " red" : "")} ref={spanCurrentLength}>
					<span className="input__current-length">{currentText.length}</span>/
					<span className="input__max-length">{requirements.maxlength}</span>
				</p>}
			</div>
			<div className="input__wrap">
				{getElementWithType()}
				<InputErrorContainer index={props.index}/>
			</div>			
		</div>
	)
}

export default Input;