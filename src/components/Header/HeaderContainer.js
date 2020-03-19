import React from 'react'
import Header from '.';
import { connect } from 'react-redux';
import { setUserData, toggleIsAuth } from '../../redux/auth-reducer';
import Axios from 'axios';

class HeaderContainer extends React.Component {
	componentDidMount() {
		Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
			.then(response => {
				if (response.data.resultCode === 0) {
					const { id, email, login } = response.data.data;
					this.props.setUserData(id, email, login);
					this.props.toggleIsAuth(true);
				}
			})
	}

	render() {
		return <Header login={this.props.data.login} isAuth={this.props.data.isAuth} />
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.auth,
	}
}

export default connect(mapStateToProps, { setUserData, toggleIsAuth })(HeaderContainer);