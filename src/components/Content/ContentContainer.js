import { connect } from "react-redux";
import Content from ".";
import { projectCreator, resetFormCreator } from "../../redux/form-project-reducer";

const mapStateToProps = (state) => {
	return {
		fields: state.form.fields,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createProject: fields => dispatch(projectCreator(...fields)),
		resetForm: () => dispatch(resetFormCreator())
	}
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer;