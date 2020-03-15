import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import './navItem.css';
import Navbar from '../../Navbar';

function NavItem(props) {

	function getPath(lastPartPath) {
		return props.navPath + lastPartPath.replace(/\s+/g, '-').toLowerCase();
	}

	return (
		props.navList.map(item => {
			return (
				<li className="navitem" key={item.id}>
					<NavLink 
						to={getPath(item.name)} 
						className="navitem__link"
						activeClassName="active">{item.name}</NavLink>
					{ ( item.navList && Array.isArray(item.navList) && item.navList.length ) &&
					<Route 
						path = {getPath(item.name)} 
						component = { 
							() => {
								return <Navbar 
									navList={item.navList} 
									navPath={getPath(item.name) + '/'} /> 
							} 
						} />
					}
				</li>
			)

		})
	)
}

export default NavItem;


