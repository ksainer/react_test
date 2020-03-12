const UPDATE_FROM = 'UPDATE-FORM',
	CREATE_PROJECT = 'CREATE-PROJECT',
	RESET_FORM = 'RESET-FORM';

const initialState = {
	fields: [{
			type: "text",
			text: "Project name",
			name: "projectName",
			placeholder: "Your project name",
			maxlength: "50",
			currentText: ""
		},
		{
			type: "text",
			text: "Short description (see examples for popular projects on Techcrunch)",
			name: "shortDesc",
			placeholder: "",
			maxlength: "50",
			currentText: ""
		},
		{
			type: "text",
			text: "Website",
			name: "website",
			placeholder: "Your project website",
			maxlength: "50",
			currentText: ""
		},
		{
			type: "textarea",
			text: "Full project description",
			name: "fullDesc",
			placeholder: "Describe your project in 500 symbols",
			maxlength: "1000",
			currentText: ""
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
		case UPDATE_FROM:
			state.fields[action.index].currentText = action.newText;
			return state;
		case CREATE_PROJECT:
			state.projects.push({
				id: state.projects.length + 1,
				projectName: action.projectName,
				shortDesc: action.shortDesc,
				website: action.website,
				fullDesc: action.fullDesc
			})
			state.fields.forEach(field => field.currentText = ''); 
			console.log(state.projects);
			return state;
		case RESET_FORM:
			state.fields.forEach(field => field.currentText = '');
			return state;
		default: 
			return state;
	}
}

export const updateFormCreator = (index, newText) => ({
	type: UPDATE_FROM, 
	index: index, 
	newText: newText
});

export const projectCreator = (projectName, shortDesc, website, fullDesc) => ({
	type: CREATE_PROJECT,
	projectName: projectName,
	shortDesc: shortDesc,
	website: website,
	fullDesc: fullDesc
});

export const resetFormCreator = () => ({type: RESET_FORM});