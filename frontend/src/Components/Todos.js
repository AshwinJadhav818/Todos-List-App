import React from 'react';
import TodoItem from './TodoItem';

export default function Todos({ todos, onDelete }) {
	return (
		<section>
			{todos.length === 0 ? (
				<div className="alert alert-primary" role="alert">
					No ToDos To Display
				</div>
			) : (
				todos.map((todo) => {
					return (
						<>
							<div key={todo.sno}>
								<TodoItem todoItem={todo} onDelete={onDelete} />
								<hr />
							</div>
						</>
					);
				})
			)}
		</section>
	);
}
