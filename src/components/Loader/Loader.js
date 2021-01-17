import React from 'react';


class Loader extends React.Component {	
	render() {
		return (
			<div style={{display: 'flex', justifyContent: 'center', margin: '.5rem'}}>
				<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
			</div>
		);
	}
}

export default Loader;