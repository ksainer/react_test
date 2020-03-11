import React from 'react';
import './navbar.css';
import Navitem from './Navitem';

function Navbar(props) {
	return (
		<ul className="main-nav">
			<Navitem navList={props.navList} path={props.path}/>
		</ul>
	)
}

export default Navbar;