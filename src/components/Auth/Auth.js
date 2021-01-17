import React from 'react';

export default class Auth extends React.Component {

	render() {
		return (
			<form className="form-signin">
				<div className="text-center mb-4">
					<h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
				</div>
				<div className="mb-2 form-label-group">
					<input 
						type="email"
						id="inputEmail" 
						className="form-control" 
						placeholder="Email address" 
						required 
						autoFocus 
					/>
				</div>
				<div className="mb-2 form-label-group">
					<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
				</div>
				<div className="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me" /> Remember me
					</label>
				</div>
				<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
			</form>
		);
	}
}