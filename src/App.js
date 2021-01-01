import React from 'react';
import TodoList from './Todo/TodoList';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
			todos : [
				{id: 1, completed: true, title: 'Buy bread'},
				{id: 2, completed: false, title: 'Buy milk'},
				{id: 3, completed: false, title: 'Buy beef'},
			]
		};
	}

	toggleTodo = (id) => {
		this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return this.setState({todo});
		});
	}

	render() {
		return (
			<div className="wrapper">
				<h1>Hello</h1>

				<TodoList
					todos={this.state.todos}
					onToggle={this.toggleTodo}
				/>
				
			</div>
		);
	}
}

export default App;
