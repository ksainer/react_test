import React from 'react';
import ProfileStatus from './ProfileStatus';

const Project = (props) => {
	return <div>
		<h2>Profile</h2>
		<p><b>ID: </b>{props.userID}</p>
		<p><b>fullName: </b>{props.fullName} </p>
		{props.isMe
			? <ProfileStatus />
			: <p><b>Status: </b>{props.status}</p>}
	</div>
}


export default Project;