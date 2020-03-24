import React from 'react';
import styles from './FormElements.module.css';

export const renderField = ({
	input, placeholder, type, label,
	meta: { touched, error, warning }
}) => (
		<div className={touched && error ? styles.error : ''}>
			<input {...input} placeholder={placeholder} type={type} id={label && input.name} />
			{label && <label for={input.name}>{label}</label>}
			{touched &&
				((error && <span>{error}</span>) ||
					(warning && <span>{warning}</span>))}
		</div>
	)