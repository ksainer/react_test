import { formAPI } from "../api";

const UPDATE_FROM = 'UPDATE-FORM',
	CREATE_PROJECT = 'CREATE-PROJECT',
	RESET_FORM = 'RESET-FORM',
	UPDATE_ERROR = 'CHECK-ERROR',
	SHOW_ERROR = 'SHOW-ERROR',
	TOGGLE_UPLOAD_FILE = 'TOGGLE_UPLOAD_FILE',
	SET_FILE = 'SET_FILE';

const initialState = {
	fields: [{
		type: 'text',
		text: 'Project name',
		name: 'projectName',
		placeholder: 'Your project name',
		currentText: '',
		requirements: {
			minlength: '3',
			maxlength: '50',
			req: true,
			pattern: /^[a-zA-Z\d\s]+$/,
		},
		error: {
			codeList: ['Please write something here', 'Text is too SHORT', 'Text is too LONG', 'Please write correct value'],
			code: 0,
			show: false
		}
	},
	{
		type: 'text',
		text: 'Short description (see examples for popular projects on Techcrunch)',
		name: 'shortDesc',
		placeholder: '',
		currentText: '',
		requirements: {
			minlength: '3',
			maxlength: '50',
			req: true,
			pattern: /^[a-zA-Z\d\s]+$/,
		},
		error: {
			codeList: ['Please write something here', 'Text is too SHORT', 'Text is too LONG', 'Please write correct value'],
			code: 0,
			show: false
		}
	},
	{
		type: 'email',
		text: 'Website',
		name: 'website',
		placeholder: 'Your project website',
		currentText: '',
		requirements: {
			minlength: '3',
			maxlength: '50',
			req: true,
			pattern: /^[a-z0-9._%+-]{2,}@[a-z0-9.-]{2,}\.[a-z]{2,4}$/,
		},
		error: {
			codeList: ['Please write something here', 'Text is too SHORT', 'Text is too LONG', 'Please write correct value'],
			code: 0,
			show: false
		}
	},
	{
		type: 'textarea',
		text: 'Full project description',
		name: 'fullDesc',
		placeholder: 'Describe your project in 500 symbols',
		currentText: '',
		requirements: {
			minlength: '3',
			maxlength: '1000',
			req: true,
			pattern: /.+/,
		},
		error: {
			codeList: ['Please write something here', 'Text is too SHORT', 'Text is too LONG', 'Please write correct value'],
			code: 0,
			show: false
		}
	}
	],
	projects: [{
		id: 1,
		projectName: 'First project',
		shortDesc: 'short desc',
		website: 'www.website.ru',
		fullDesc: 'lorem...'
	}],
	uploadFiles: [
		{
			title: 'Whitepaper',
			name: 'whitepaper',
			required: false,
			file: null,
			accept: '.jpeg, .jpg, .png',
			size: 2,
			uploaded: false
		},
		{
			title: 'Pitch deck (see template)',
			name: 'deck',
			required: true,
			file: null,
			accept: '.pdf',
			size: 40,
			uploaded: false
		}
	]
}

export const formProjectReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_FROM: {
			let newState = { ...state };
			newState.fields[action.index] = {
				...state.fields[action.index],
				currentText: action.newText
			};
			return newState;
		}
		case CREATE_PROJECT: {
			const newProject = {
				id: state.projects.length + 1,
				projectName: state.fields[0].currentText,
				shortDesc: state.fields[1].currentText,
				website: state.fields[2].currentText,
				fullDesc: state.fields[3].currentText
			}

			const newState = {
				...state,
				projects: [...state.projects, newProject]
			};

			newState.fields = state.fields.map(
				field => ({
					...field,
					currentText: '',
					error: { ...field.error, code: 0 }
				})
			);

			return newState;
		}
		case RESET_FORM: {
			let newState = { ...state };
			newState.fields = state.fields.map(
				field => ({ ...field, currentText: '' })
			);

			return newState;
		}
		case UPDATE_ERROR: {
			let newState = { ...state };
			newState.fields = state.fields.map((field, index) => {
				if (index === +action.fieldIndex) {
					return {
						...field,
						error: { ...field.error, code: action.newCode }
					}
				}
				return field
			});

			return newState;
		}
		case SHOW_ERROR: {
			let newState = { ...state };
			newState.fields = state.fields.map((field, index) => {
				if (index === +action.fieldIndex) {
					return {
						...field,
						error: { ...field.error, show: action.show }
					}
				}
				return field
			});

			return newState;
		}
		case TOGGLE_UPLOAD_FILE: {
			let newState = { ...state, uploadFiles: [...state.uploadFiles] };

			newState.uploadFiles[action.index] = { ...state.uploadFiles[action.index], uploaded: action.uploaded }

			return newState;
		}
		default:
			return state;
	}
}

export const updateForm = (index, newText) => ({
	type: UPDATE_FROM, index, newText
});

export const resetForm = () => ({ type: RESET_FORM });

export const createProject = () => ({ type: CREATE_PROJECT });

export const showError = (fieldIndex, show) => ({ type: SHOW_ERROR, fieldIndex, show });

export const updateError = (fieldIndex, newCode) => ({
	type: UPDATE_ERROR, fieldIndex, newCode
});

export const postProject = (fields) => (dispatch) => {
	// formAPI.postProject(fields)
	// 	.then(() => )
	dispatch(createProject())
}

export const toggleUploadFile = (index, uploaded) => ({ type: TOGGLE_UPLOAD_FILE, index, uploaded })