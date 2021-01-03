import React from 'react';
import TodoList from './Todo/TodoList';
import AddTodo from './Todo/AddTodo';
import Loader from './Loader';
import Modal from './Modal/Modal';
import Context from './context';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todosOld : [
				{id: 1, completed: true, title: 'Buy bread'},
				{id: 2, completed: false, title: 'Buy milk'},
				{id: 3, completed: false, title: 'Buy beef'},
			],
			todos : [],
			loading: true,
		};
		this.removeTodo = this.removeTodo.bind(this);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(response => response.json())
			.then(todos => {
				setTimeout(() => {
					this.setState({todos});
					this.setState({loading: false});
				}, 3000);
			});
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
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id),
		});
	}

	addTodo = (title) => {
		let newList = this.state.todos.concat({
			id: this.state.todos.length + 1,
			completed: false,
			title: title
		});
		this.setState({todos: newList});
	}

	render() {
		return (
			<Context.Provider value={{ removeTodo: this.removeTodo }}>
				<div className="wrapper">
					<h1>My ToDo</h1>
					<Modal />
					<AddTodo onCreate={this.addTodo}/>
					{this.state.todos.length 
						? <TodoList
							todos={this.state.todos}
							onToggle={this.toggleTodo}
						/>
						: this.state.loading ? <Loader /> : <p>No Todos!</p> 
					}					
				</div>
			</Context.Provider>

		);
	}
}

export default App;
