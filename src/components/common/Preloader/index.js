import React from 'react';
import preloader from '../../../img/preloader.svg';

class Preloader extends React.Component {
	render() {
		return <div className="preloader-wrap">
			<img src={preloader} alt="preloader" />
		</div>
	}
}

export default Preloader;