import React from 'react';
import Profile from '.';
import { connect } from 'react-redux';
import { getProfile, getStatus } from '../../redux/profile-reducer';
import { compose } from 'redux';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {
	componentDidMount() {
		this.props.getProfile(this.props.match.params.userID);
		this.props.getStatus(this.props.match.params.userID);
	}

	render() {
		if (!this.props.match.params.userID && !this.props.isAuth) {
			return <Redirect to="/login" />
		}
		return <Profile
			fullName={this.props.profile.fullName}
			userID={this.props.profile.userId}
			status={this.props.status}
			isMe={this.props.profile.userId === this.props.meID} />
	}
}

const mapState = (state) => ({
	profile: state.profile.profile,
	status: state.profile.status,
	meID: state.auth.id,
	isAuth: state.auth.isAuth
})

export default compose(connect(mapState, { getProfile, getStatus }), withRouter)(ProfileContainer)