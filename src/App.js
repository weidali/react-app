import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';


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
		this.removeTodo = this.removeTodo.bind(this);
	}

	toggleTodo = (id) => {
		this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return this.setState({todo});
		});
	}

	removeTodo = (id) => {
		console.log('ok', id);
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id),
		});
	}

	render() {
		return (
			<Context.Provider value={{ removeTodo: this.removeTodo }}>
				<div className="wrapper">
					<h1>My ToDo</h1>
					{this.state.todos.length 
						? <TodoList
							todos={this.state.todos}
							onToggle={this.toggleTodo}
						/>
						: <p>No Todos!</p>
					}					
				</div>
			</Context.Provider>

		);
	}
}

export default App;
