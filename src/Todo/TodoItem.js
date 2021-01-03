import React from 'react';
import Context from '../context';


class TodoItem extends React.Component {
	// static context = Context;
	removeItem(id) {
		let {removeTodo} = this.context;
        removeTodo(id);
    }

	render() {
		// console.log(this.props.todo);
		// console.log('complete', this.props.todo.completed);

		const styles = {
			li: {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '.5rem 1rem',
				border: '1px solid #ccc',
				borderRadius: '4px',
				marginBottom: '.5rem',
			},
			input: {
				marginRight: '1rem',
			},
		};
		return (
			<li style={styles.li}>
				<span className={`${this.props.todo.completed && 'done'}`}>
					<input
						type="checkbox"
						style={styles.input}
						checked={this.props.todo.completed}
						onChange={() => this.props.onChange(this.props.todo.id)}
					/>
					<strong>{this.props.index + 1}</strong>
					&nbsp;{this.props.todo.title}
				</span>
				<button
					className="close"
					onClick={() => { this.removeItem(this.props.todo.id)}}
					aria-label="Close"
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</li>
		);
	}
}
TodoItem.contextType = Context;

export default TodoItem;