import React from 'react';
import InputFile from '.';
import { connect } from 'react-redux';
import { toggleUploadFile } from '../../redux/form-project-reducer';

class InputFileContainer extends React.Component {
	render() {
		return <InputFile {...this.props.data}
			toggleUploadFile={this.props.toggleUploadFile}
			index={this.props.index} />
	}
}

const mapStateToProps = (state, props) => {
	return {
		data: state.form.uploadFiles[props.index],
		index: props.index
	}
}


export default connect(mapStateToProps, { toggleUploadFile })(InputFileContainer);