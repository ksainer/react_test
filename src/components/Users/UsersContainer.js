import React from 'react';
import { connect } from "react-redux";
import Users from ".";
import { setUsers, setCount, setPage, setTotalCount, toggleIsFetching, toggleIsFollowed, toggleFollowingProgress } from "../../redux/users-reducer";
import { usersAPI } from '../../api';


class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(this.props.page, this.props.count)
			.then(data => {
				this.props.setUsers(data.items);
				this.props.setTotalCount(data.totalCount);
				this.props.toggleIsFetching(false);
			});
	}

	changePage = (num) => {
		if (this.props.isFetching === false) {
			this.props.toggleIsFetching(true);
			this.props.setPage(num);
			usersAPI.getUsers(this.props.page, this.props.count)
				.then(data => {
					this.props.toggleIsFetching(false);
					this.props.setUsers(data.items)
				});
		}
	}

	toggleFollow = (id, index) => {
		this.props.toggleFollowingProgress(true, id);

		if (this.props.list[index].followed) {
			usersAPI.unfollow(id)
				.then(data => {
					this.props.toggleFollowingProgress(false, id);
					if (data.resultCode === 0) {
						this.props.toggleIsFollowed(index, false);
					}
				}, e => this.props.toggleFollowingProgress(false, id))
		} else {
			usersAPI.follow(id)
				.then(data => {
					this.props.toggleFollowingProgress(false, id);
					if (data.resultCode === 0) {
						this.props.toggleIsFollowed(index, true);
					}
				}, e => this.props.toggleFollowingProgress(false, id))
		}
	}

	render() {
		return <Users
			changePage={this.changePage}
			totalCount={this.props.totalCount}
			count={this.props.count}
			page={this.props.page}
			list={this.props.list}
			isFetching={this.props.isFetching}
			toggleFollow={this.toggleFollow}
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
		followingInProgress: state.users.followingInProgress
	}
}

export default connect(mapStateToProps, {
	setUsers,
	setCount,
	setPage,
	setTotalCount,
	toggleIsFetching,
	toggleIsFollowed,
	toggleFollowingProgress
})(UsersContainer);