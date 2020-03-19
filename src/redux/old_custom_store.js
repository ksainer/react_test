import {formProjectReducer} from './form-project-reducer';

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
	},

	_callSubscriber() {
		console.log('State changed');
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		formProjectReducer(this.state.form, action);
		this._callSubscriber(this.state);
	},
};

export default store;