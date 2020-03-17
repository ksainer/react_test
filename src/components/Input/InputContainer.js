import { connect } from "react-redux";
import Input from "./index.js";
import { updateFormCreator, updateErrorCreator, errorShowActionCreator } from "../../redux/form-project-reducer";

const mapStateToProps = (state, props) => {
	return {
		data: state.form.fields[props.index],
		index: props.index
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		updateCurrentValue: (text) => {
			dispatch(updateFormCreator(props.index, text));
		},
		updateError: (newErrorCode) => {
			dispatch(updateErrorCreator(props.index, newErrorCode));
		},
		showError: (show) => {
			dispatch(errorShowActionCreator(props.index, show))
		}
	}
}

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;