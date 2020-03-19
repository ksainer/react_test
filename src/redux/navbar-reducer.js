const initialState = {
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
			name: 'Users'
		},
		{
			id: 3,
			name: 'Profile'
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
	]
};

export const navbarReducer = (state = initialState, action) => {

	return state;
}