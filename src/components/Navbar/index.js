import React from 'react';
import './navbar.css';
import NavItem from './NavItem';

function Navbar(props) {
	return (
		<ul className="main-nav">
			<NavItem navList={props.navList} navPath={props.navPath}/>
		</ul>
	)
}

export default Navbar;