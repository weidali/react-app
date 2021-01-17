import React from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {	
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
				<NavLink className="navbar-brand" to="/">TheTuddle</NavLink>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav mr-auto">
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
					<div className="form-inline mt-2 mt-md-0">
						<div className="nav-item">
							<NavLink 
								className="btn btn-sm btn-outline-secondary" 
								to="/login"
							>
								Login
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;