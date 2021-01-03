import React from 'react';
import './Modal.css';


class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	addTodo = (e) => {
		e.preventDefault();
		

		if (this.state.value.trim()) {
			// console.log(this.state.value);
			this.props.onCreate(this.state.value);
			this.setState({value: ''});
		}
	}
	
	render() {
		return (
			<>
			<button style={{float: 'right'}} 
				onClick={() => this.setState({isOpen: true})}>Open modal</button>
			
			{this.state.isOpen && (
				<div className="modal">
					<div className="modal-body">
						<h1>Modal title</h1>
						<p>This is modal text...</p>
						<button onClick={() => this.setState({isOpen: false})}>Close</button>
					</div>
				</div>
			)}			
			</>
		);
	}
}

export default Modal;