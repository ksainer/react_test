import React from 'react';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect} from '../hoc/withAuthRedirect';

const Project = (props) => {
	return <div>Profile - user ID: {props.match.params.userID}</div>
}

export default withRouter(withAuthRedirect(Project));