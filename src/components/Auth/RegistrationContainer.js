import React from 'react';
import { connect } from 'react-redux';

import { setEmailText, setPasswordText, setRepeatPasswordText } from '../../store/registration/actions';
import Registration from './Registration';

class RegistrationContainer extends React.Component {

	render() {
		return (
			<Registration
				email={this.props.email}
				password={this.props.password}
				setEmailText={this.props.setEmailText}
				setPasswordText={this.props.setPasswordText}
				setRepeatPasswordText={this.props.setRepeatPasswordText}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		repeatPassword: state.auth.repeatPassword,
	};
};

const mapDispatchToProps = {
		setEmailText,
		setPasswordText,
		setRepeatPasswordText,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);