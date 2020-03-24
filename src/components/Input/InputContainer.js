import React from 'react';
import { connect } from "react-redux";
import Input from ".";
import { updateForm, updateError, showError } from "../../redux/project-reducer";

class InputContainer extends React.Component {


	render() {
		return <Input {...this.props} />
	}
}

const mapStateToProps = (state, props) => {
	return {
		data: state.createProject.fields[props.index],
		index: props.index
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		updateCurrentValue: (text) => {
			dispatch(updateForm(props.index, text));
		},
		updateError: (newErrorCode) => {
			dispatch(updateError(props.index, newErrorCode));
		},
		showError: (show) => {
			dispatch(showError(props.index, show))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);