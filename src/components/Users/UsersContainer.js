import React from 'react';
import { connect } from "react-redux";
import Users from ".";
import { setPage, getUsers, toggleFollow } from "../../redux/users-reducer";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.page, this.props.count);
	}

	changePage = (num) => {
		if (this.props.isFetching === false) {
			this.props.setPage(num);
			this.props.getUsers(num, this.props.count);
		}
	}

	render() {
		return <Users
			changePage={this.changePage}
			pageCount={Math.ceil(this.props.totalCount / this.props.count)}
			page={this.props.page}
			list={this.props.list}
			isFetching={this.props.isFetching}
			toggleFollow={this.props.toggleFollow}
			followingInProgress={this.props.followingInProgress}
		/>
	}
}

const mapStateToProps = (state) => {
	return {
		list: state.users.list,
		page: state.users.page,
		count: state.users.count,
		totalCount: state.users.totalCount,
		isFetching: state.users.isFetching,
		followingInProgress: state.users.followingInProgress,
	}
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { getUsers, setPage, toggleFollow })
)(UsersContainer);