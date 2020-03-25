import React from 'react';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
	const pageNums = (currentPage, maxLength) => {
		let arr = [];

		const pageNum = (i) => {
			return <span
				key={i}
				onClick={() => { currentPage === i ? console.log('false') : props.changePage(i) }}
				className={'num-page' + (currentPage === i ? ' selected' : '')}>
				{i}
			</span>
		}

		if (maxLength > 6) {
			arr.push(pageNum(1));
			if (currentPage > 5) arr.push(' ... ');

			for (let i = Math.min(Math.max(currentPage - 3, 2), maxLength - 4); i <= Math.max(Math.min(currentPage + 3, maxLength - 1), 5); i++) {
				arr.push(pageNum(i));
			}

			if (currentPage <= maxLength - 5) arr.push(' ... ');
			arr.push(pageNum(maxLength));
		} else {
			for (let i = 1; i <= maxLength; i++) {
				arr.push(pageNum(i));
			}
		}

		return arr;
	}
	
	return <div>
		{pageNums(props.page, props.pageCount)}
		{props.list.map(user => (
			<div className='user' key={user.id}>
				<NavLink
					to={'/profile/' + user.id}
					className='user__link'>
					{user.name}
				</NavLink>
				{props.followingInProgress.includes(user.id)
					? <span>Processing...</span>
					: <button
						className='user__followed'
						onClick={() => props.toggleFollow(user.id, user.followed)}>
						{user.followed ? 'follow' : 'unfollow'}
					</button>
				}
			</div>
		))}
	</div>
}

export default Users;