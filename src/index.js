import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const state = {
	navList: [
		{id: 1, name: 'Project Info', navList: [
			{id: 1, name: 'General'},
			{id: 2, name: 'Fundraising', navList: [
				{id: 1, name: 'General'},
				{id: 2, name: 'Fundraising'},
				{id: 3, name: 'Previous rounds'},
				{id: 4, name: 'Roadmap'},
				{id: 5, name: 'Partnerships'},
			]},
			{id: 3, name: 'Previous rounds'},
			{id: 4, name: 'Roadmap'},
			{id: 5, name: 'Partnerships'},
		]},
		{id: 2, name: 'Team'},
		{id: 3, name: 'Product'},
		{id: 4, name: 'Financials'},
		{id: 5, name: 'Risks'},
		{id: 6, name: 'Data'},
		{id: 7, name: 'Reviews'},
		{id: 8, name: 'FAQ'},
		{id: 9, name: 'Mentions'},
	]
}

ReactDOM.render(<App state={state} />, document.getElementById('root'));
