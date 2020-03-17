import { connect } from "react-redux";
import Content from ".";
import { projectCreator, resetFormCreator, errorShowActionCreator } from "../../redux/form-project-reducer";

const mapStateToProps = (state) => {
	return {
		fields: state.form.fields.map(field => field.currentText),
		requirements: state.form.fields.map(field => field.requirements),
		errorCodes: state.form.fields.map(field => field.error.code),
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		createProject: fields => dispatch(projectCreator(...fields)),
		resetForm: () => dispatch(resetFormCreator()),
		showError: (fieldIndex, show) => {
			dispatch(errorShowActionCreator(fieldIndex, show))
		}
	}
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer;