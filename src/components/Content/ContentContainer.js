import React from 'react';
import { connect } from "react-redux";
import Content from ".";
import { postProject, resetForm, showError } from "../../redux/project-reducer";

class ContentContainer extends React.Component {

	createProject = () => {
		let checkErrors = false;
		for (let i = 0; i < this.props.errorCodes.length; i++) {
			if (this.props.errorCodes[i] !== 200) {
				this.props.showError(i, true);
				checkErrors = true;
			};
		}
		if (checkErrors) return console.log('FAIL!');

		this.props.postProject(this.props.fields);
		console.log('PROJECT SUCCESSFULLY CREATED!');
	}

	render() {
		return <Content resetForm={this.props.resetForm} createProject={this.createProject} />
	}
}

const mapStateToProps = (state) => {
	return {
		fields: state.createProject.fields.map(field => field.currentText),
		errorCodes: state.createProject.fields.map(field => field.error.code),
	}
}

export default connect(mapStateToProps, { postProject, resetForm, showError })(ContentContainer);