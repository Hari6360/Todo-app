export const TodoItem = ({ todo, handleDelete }) => {
	return (
		<div>
			{todo.title}-{todo.status ? "Done" : "Not Done"}
			<button>Toggle Todo</button>
			<button onClick={handleDelete}>Delete Todo</button>
		</div>
	);
};
