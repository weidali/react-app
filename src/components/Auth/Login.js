import React from 'react';
import AuthContainer from './AuthContainer';
import RegistrationContainer from './RegistrationContainer';

export default class Login extends React.Component {

	render() {
		return (
			<div className="wrapper">
				<h1 className="text-center mb-5">Complex</h1>
				<div className="forms">
					<div className="row mx-auto">
						<div className="col-md-4 mx-auto">
							<AuthContainer />
						</div>
						<div className="col-md-0 border mx-auto"></div>
						<div className="col-md-4 mx-auto">
							<RegistrationContainer />
						</div>		
					</div>
				</div>		
			</div>			
		);
	}
}