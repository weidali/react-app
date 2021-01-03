import React from 'react';
import Modal from '../Modal/Modal';


class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
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

	updateValue = (e) => {
		this.setState({value: e.target.value});
	}
	
	render() {
		return (
			<div className="row  justify-content-between">
				<div className="col-sm-6">
					<form style={{marginBottom: '1rem'}} onSubmit = {(e) => this.addTodo(e)}>
						<div className="input-group mb-3">
							<input
								placeholder="New Todo"
								value={this.state.value}
								onChange={(e) => {this.updateValue(e)}}
								className="form-control form-control-sm"
								aria-label="New Todo"
								aria-describedby="button-addon"
							/>
							<button className="btn btn-outline-secondary btn-sm"
								type="submit" id="button-addon">Add</button>
						</div>
					</form>
				</div>
				<div className="col-sm-3">
				  <Modal />
				</div>
			</div>
		);
	}
}

export default AddTodo;