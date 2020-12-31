import React from 'react';

class TodoItem extends React.Component {

	
	render() {
		return (
			<li>
				<strong>{this.props.index + 1}</strong>
				{this.props.todo.title}
			</li>
		);
	}
}

export default TodoItem;