import React from 'react';
import TodoItem from './TodoItem';


class TodoList extends React.Component {

	
	render() {
		const styles = {
			ul: {
				listStyle: 'none',
				margin: 0,
				padding: 0,
			}
		}

		return (
		  <ul style={styles.ul}>
		  	{this.props.todos.map((todo, index) => {
		  		return <TodoItem todo={todo} key={todo.id} index={index} />
		  	})}
		  </ul>
		);
	}
}

export default TodoList;