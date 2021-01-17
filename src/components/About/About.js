import React from 'react';


class About extends React.Component {	
	render() {
		return (
			<div className="jumbotron">
				<div className="container">
					<h1 className="display-4">About page</h1>
					<p className="lead">React aplication TheTuddle version <strong>1.0.1</strong></p>
					<p>An app for exploring and testing various features of React JS.</p>
				</div>
			</div>
		);
	}
}

export default About;