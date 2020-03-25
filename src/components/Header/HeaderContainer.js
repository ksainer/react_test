import React from 'react'
import Header from '.';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
	render() {
		return <Header login={this.props.data.login} isAuth={this.props.data.isAuth} />
	}
}

const mapStateToProps = (state) => ({ data: state.auth });

export default connect(mapStateToProps)(HeaderContainer);