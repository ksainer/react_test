import React from 'react'
import Header from '.';
import { connect } from 'react-redux';
import { getUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getUserData();
	}

	render() {
		return <Header login={this.props.data.login} isAuth={this.props.data.isAuth} />
	}
}

const mapStateToProps = (state) => ({ data: state.auth });

export default connect(mapStateToProps, { getUserData })(HeaderContainer);