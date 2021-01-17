import React from 'react';

export default class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
	}

	onEmailChange(event) {
		this.props.setEmailText(event.target.value);
	}

	onPasswordChange(event) {
		this.props.setPasswordText(event.target.value);
	}

	onRepeatPasswordChange(event) {
		this.props.setRepeatPasswordText(event.target.value);
	}

	render() {
		const { email } = this.props;
		const { password } = this.props;
		const { repeatPassword } = this.props;

		return (
			<form className="form-signin">
				<div className="text-center mb-4">
					<h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
				</div>
				<div className="mb-2 form-label-group">
					<input 
						type="text"
						name="login"
						className="form-control" 
						autoComplete="off"
						placeholder="Email address"
						value={email}
						onChange={this.onEmailChange}
						required 
						autoFocus 
					/>
				</div>
				<div className="mb-2 form-label-group">
					<input 
						type="password" 
						name="password"
						className="form-control" 
						placeholder="Password" 
						value={password}
						onChange={this.onPasswordChange}
					/>
				</div>
				<div className="mb-2 form-label-group">
					<input 
						type="password" 
						name="password"
						className="form-control" 
						placeholder="Password" 
						value={repeatPassword}
						onChange={this.onRepeatPasswordChange}
						required 
					/>
				</div>
				<div className="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me"/> Remember me
					</label>
				</div>
				<button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
			</form>
		);
	}
}