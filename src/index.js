import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// STORE
const UPDATE_FROM = 'UPDATE-FORM',
	CREATE_PROJECT = 'CREATE-PROJECT',
	RESET_FORM = 'RESET-FORM';

const store = {
	state: {
		navList: [{
				id: 1,
				name: 'Project Info',
				navList: [{
						id: 1,
						name: 'General'
					},
					{
						id: 2,
						name: 'Fundraising',
						navList: [{
								id: 1,
								name: 'General'
							},
							{
								id: 2,
								name: 'Fundraising'
							},
							{
								id: 3,
								name: 'Previous rounds'
							},
							{
								id: 4,
								name: 'Roadmap'
							},
							{
								id: 5,
								name: 'Partnerships'
							},
						]
					},
					{
						id: 3,
						name: 'Previous rounds'
					},
					{
						id: 4,
						name: 'Roadmap'
					},
					{
						id: 5,
						name: 'Partnerships'
					},
				]
			},
			{
				id: 2,
				name: 'Team'
			},
			{
				id: 3,
				name: 'Product'
			},
			{
				id: 4,
				name: 'Financials'
			},
			{
				id: 5,
				name: 'Risks'
			},
			{
				id: 6,
				name: 'Data'
			},
			{
				id: 7,
				name: 'Reviews'
			},
			{
				id: 8,
				name: 'FAQ'
			},
			{
				id: 9,
				name: 'Mentions'
			},
		],

		form: {
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
					type: "text",
					text: "Full project description",
					name: "fullDesc",
					placeholder: "Describe your project in 500 symbols",
					maxlength: "1000",
					currentText: ""
				}
			]
		},

		projects: [{
			id: 1,
			projectName: 'First project',
			shortDesc: 'short desc',
			website: 'www.website.ru',
			fullDesc: 'lorem...'
		}]
	},

	_callSubscriber() {
		console.log('State changed');
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === UPDATE_FROM) {
			this.state.form.fields[action.index].currentText = action.newText;
			this._callSubscriber(this.state);
		} else if (action.type === CREATE_PROJECT) {
			this.state.projects.push({
				id: this.state.projects.length + 1,
				projectName: action.projectName,
				shortDesc: action.shortDesc,
				website: action.website,
				fullDesc: action.fullDesc
			})
			this.state.form.fields.forEach(field => field.currentText = '');
			this._callSubscriber(this.state);

			console.log(this.state.projects);
		} else if (action.type === RESET_FORM) {
			this.state.form.fields.forEach(field => field.currentText = '');
			this._callSubscriber(this.state);
		}
	},
};

window.state = store.state;

// /STORE


function rerender(state) {
	ReactDOM.render( < App state = {
			state
		}
		dispatch = {
			store.dispatch.bind(store)
		}
		/>, 
		document.getElementById('root'));
}

rerender(store.state);

store.subscribe(rerender);