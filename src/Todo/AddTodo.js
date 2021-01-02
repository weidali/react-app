import React from 'react';


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

	// addTodo(e) {
 //        e.preventDefault();
 //        this.setState({ todos: [ this.state.text, ...this.state.todos ] });
 //        this.setState({ text: ''});
 //    }

	updateValue = (e) => {
		this.setState({value: e.target.value});
	}
	
	render() {
		// console.log(this.state.value);
		return (
		  <form style={{marginBottom: '1rem'}} onSubmit = {(e) => this.addTodo(e)}>
		  	<input 
		  		placeholder="New Todo"
		  		value={this.state.value}
		  		onChange={(e) => {this.updateValue(e)}}
		  	/>
		  	<button type="submit">Add</button>
		  </form>
		);
	}
}

export default AddTodo;