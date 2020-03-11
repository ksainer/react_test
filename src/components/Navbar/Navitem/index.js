import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import './navitem.css';
import Navbar from '../../Navbar';

function Navitem(props) {

	function getPath(lastPartPath) {
		return props.path + lastPartPath;
	}

	return (
		props.navList.map(item => {

			if (item.navList && Array.isArray(item.navList) && item.navList.length) {
				return (
					<li className="navitem" key={item.id}>
						<NavLink 
							to={getPath(item.name)} 
							className="navitem__link"
							activeClassName="active">
								{item.name}
						</NavLink>
						<Route 
							path = {getPath(item.name)} 
							component = { 
								() => {
									return <Navbar 
										navList={item.navList} 
										path={getPath(item.name) + '/'} /> 
								} 
							} />
					</li>
				)
			}

			return (
				<li className="navitem" key={item.id}>
					<NavLink to={props.path + item.name} className="navitem__link" activeClassName="active">{item.name}</NavLink>
				</li>
			)

		})
	)
}

export default Navitem;


