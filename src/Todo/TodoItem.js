import React from 'react';


class TodoItem extends React.Component {

	render() {
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
				<span>
					<input style={styles.input} type="checkbox"/>
					<strong>{this.props.index + 1}</strong>
					&nbsp;{this.props.todo.title}
				</span>
				<button className="rm">&times;</button>
			</li>
		);
	}
}

export default TodoItem;