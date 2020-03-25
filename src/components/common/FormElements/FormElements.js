import React from 'react';
import styles from './FormElements.module.css';

export const renderField = ({
	input, placeholder, type, label, disabled,
	meta: { touched, error }
}) => (
		<div className={touched && error ? styles.error : ''}>
			<input {...input} placeholder={placeholder} type={type} id={label && input.name} disabled={disabled} />
			{label && <label htmlFor={input.name}>{label}</label>}
			{touched && (error && <span>{error}</span>)}
		</div>
	)