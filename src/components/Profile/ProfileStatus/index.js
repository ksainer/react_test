import React from 'react';
import { connect } from 'react-redux';
import { setStatus, updateStatus } from '../../../redux/profile-reducer';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	deactivateEditMode = () => {
		if (this.props.status !== this.state.status) {
			this.props.updateStatus(this.state.status);
		}
		this.setState({
			editMode: false
		})
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	onChangeStatusText = (e) => {
		this.setState({ status: e.target.value });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status });
		}
	}

	render() {
		return <div>
			<p><b>Status:</b></p>
			{this.state.editMode
				? <input className="status__input"
					value={this.state.status} autoFocus
					onBlur={this.deactivateEditMode}
					onChange={this.onChangeStatusText} />
				: <p className="status__text"
					onDoubleClick={this.activateEditMode}>
					{this.props.statusInProgress ? 'status updating...' : this.props.status}</p>}
		</div>
	}
}

const mapState = (state) => ({
	status: state.profile.status,
	statusInProgress: state.profile.statusInProgress
})

export default connect(mapState, { setStatus, updateStatus })(ProfileStatus);