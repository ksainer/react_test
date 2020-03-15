import { connect } from "react-redux";
import Input from "./index.js";
import { updateFormCreator } from "../../redux/form-project-reducer";

const mapStateToProps = (state, props) => {
	return {
		data: state.form.fields[props.index],
		key: state.form.fields[props.index].id,
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		updateCurrentValue: (text) => {
			dispatch(updateFormCreator(props.index, text));
		}
	}
}

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;