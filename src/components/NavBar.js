import React from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {	
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<NavLink className="navbar-brand" to="/">ToDo</NavLink>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink 
									className="nav-link" 
									to="/"
									exact
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink 
									className="nav-link" 
									to="/about"
								>
									About
								</NavLink>
							</li>
						</ul>

					</div>
  				</div>
				
			</nav>
		);
	}
}

export default NavBar;