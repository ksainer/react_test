import React from 'react';
import { withRouter } from 'react-router-dom';

const Project = (props) => {

	return <div>Profile - user ID: {props.match.params.userID}</div>
}

export default withRouter(Project);