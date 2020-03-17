const UPDATE_FROM = 'UPDATE-FORM',
	CREATE_PROJECT = 'CREATE-PROJECT',
	RESET_FORM = 'RESET-FORM',
	UPDATE_ERROR = 'CHECK-ERROR',
	SHOW_ERROR = 'SHOW-ERROR';

const initialState = {
	fields: [{
		type: "text",
		text: "Project name",
		name: "projectName",
		placeholder: "Your project name",
		currentText: "",
		requirements: {
			minlength: "3",
			maxlength: "50",
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
		type: "text",
		text: "Short description (see examples for popular projects on Techcrunch)",
		name: "shortDesc",
		placeholder: "",
		currentText: "",
		requirements: {
			minlength: "3",
			maxlength: "50",
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
		type: "email",
		text: "Website",
		name: "website",
		placeholder: "Your project website",
		currentText: "",
		requirements: {
			minlength: "3",
			maxlength: "50",
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
		type: "textarea",
		text: "Full project description",
		name: "fullDesc",
		placeholder: "Describe your project in 500 symbols",
		currentText: "",
		requirements: {
			minlength: "3",
			maxlength: "1000",
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
	}]
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
			let newProject = {
				id: state.projects.length + 1,
				projectName: action.projectName,
				shortDesc: action.shortDesc,
				website: action.website,
				fullDesc: action.fullDesc
			}

			let newState = {
				...state,
				projects: [...state.projects, newProject]
			};

			newState.fields = state.fields.map(
				field => ({ ...field, currentText: '' })
			);

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
		default:
			return state;
	}
}

export const updateFormActionCreator = (index, newText) => ({
	type: UPDATE_FROM,
	index: index,
	newText: newText
});

export const projectActionCreator = (projectName, shortDesc, website, fullDesc) => ({
	type: CREATE_PROJECT,
	projectName: projectName,
	shortDesc: shortDesc,
	website: website,
	fullDesc: fullDesc
});

export const resetFormActionCreator = () => ({ type: RESET_FORM });

export const errorShowActionCreator = (fieldIndex, show) => ({ type: SHOW_ERROR, fieldIndex, show });

export const updateErrorActionCreator = (fieldIndex, newCode) => ({
	type: UPDATE_ERROR,
	fieldIndex,
	newCode
});