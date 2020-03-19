import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader';

const Users = (props) => {
	let arr = [];
	for (let i = 1; i <= Math.ceil(props.totalCount / props.count); i++) {
		arr.push(i);
	}
	return <div>
		{arr.map(i => <span
			key={i}
			onClick={() => { props.page === i ? console.log('false') : props.changePage(i) }}
			className={'num-page' + (props.page === i ? ' selected' : '')}>
			{i}
		</span>)}
		{props.isFetching ? <Preloader /> : props.list.map((user, index) => (
			<div className='user' key={user.id}>
				<NavLink
					to={'/profile/' + user.id}
					className='user__link'>
					{user.name}
				</NavLink>
				{props.followingInProgress.includes(user.id)
					? <span>Processing...</span>
					: <span
						className='user__followed'
						onClick={() => props.toggleFollow(user.id, index)}>
						{user.followed ? 'follow' : 'unfollow'}
					</span>
				}
			</div>
		))}
	</div>
}

export default Users;