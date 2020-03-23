import React from 'react';
import style from './InputFile.module.css';
import delete_img from '../../img/delete.svg';
import upload_img from '../../img/upload.svg';
import success_img from '../../img/success-upload.svg';

const InputFile = (props) => {
	const fileRef = React.createRef();
	window.fileRef = fileRef;

	const onUploadFile = () => {
		if (fileRef.current.files.length) {
			// !props.accept.replace(/\s*\./g, 'image/').split(',').includes(fileRef.current.files[0].type)
			if (fileRef.current.files[0].size > props.size * 1024 * 1024) {
				fileRef.current.value = '';
				props.toggleUploadFile(props.index, false);
				return console.warn('FAIL! Bad type or big size image');
			}
			props.toggleUploadFile(props.index, true);
		} else {
			props.toggleUploadFile(props.index, false);
		}
	}

	const deleteFile = (e) => {
		e.preventDefault();
		props.toggleUploadFile(props.index, false);
		fileRef.current.value = '';
	}

	return <div className={style.block}>
		<p className={style.title}>{props.title}{props.required ? <span className="red"> *</span> : ''}</p>
		<input ref={fileRef} onInput={onUploadFile}
			type="file" accept={props.accept}
			className={style.input}
			name={props.name} id={props.name} />

		{props.uploaded
			? <div className={style.item + ' ' + style.uploaded}>
				<img src={success_img} alt="successfuly uploaded"
					className={style.imgStatus} />
				<p className={style.text}>Uploaded</p>
				<button className={style.btnDelete} onClick={deleteFile}>
					<img src={delete_img} alt="delete upload file" />
				</button>
			</div>

			: <label htmlFor={props.name} className={style.item}>
				<img src={upload_img} alt="file check upload"
					className={style.imgStatus} />
				<p className={style.text}>{`${props.accept.replace(/\./g, '').toUpperCase()}, up to ${props.size}Mb`}</p>
			</label>}
	</div>
}

export default InputFile;