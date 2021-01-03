import React from 'react';

class Alert extends React.Component {	
	render() {
		if (!this.props.alert) {
			return null;
		}
		return (
			<div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
				<strong>Atention!</strong>
				 {alert.text}
				<button type="button" className="close" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		);
	}
}

export default Alert;