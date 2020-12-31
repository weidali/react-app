import React from 'react';
import TodoList from './Todo/TodoList';


class App extends React.Component {

	render() {
		const todos = [
			{id: 1, completed: false, title: 'Buy bread'},
			{id: 2, completed: false, title: 'Buy milk'},
			{id: 3, completed: false, title: 'Buy beef'},
		];
		return (
			<div className="wrapper">
				<h1>Hello</h1>

				<TodoList todos={todos} />
				
			</div>
		);
	}
}

export default App;
