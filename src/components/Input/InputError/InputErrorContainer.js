import { connect } from "react-redux";
import InputError from ".";

const mapStateToProps = (state, props) => {
	return {
		text: state.form.fields[props.index].error.codeList[state.form.fields[props.index].error.code] || 'good',
		show: state.form.fields[props.index].error.show
	}
}

const InputErrorContainer = connect(mapStateToProps, {})(InputError)

export default InputErrorContainer;