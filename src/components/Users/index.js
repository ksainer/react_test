import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader';

const Users = (props) => {
	let arr = [];
	for (let i = 1; i <= Math.min(props.pageCount, 10); i++) {
		arr.push(i);
	}
	return <div>
		{arr.map(i => <span
			key={i}
			onClick={() => { props.page === i ? console.log('false') : props.changePage(i) }}
			className={'num-page' + (props.page === i ? ' selected' : '')}>
			{i}
		</span>)}
		{props.isFetching ? <Preloader /> : props.list.map(user => (
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