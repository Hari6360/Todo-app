export const TodoItem = ({ todo }) => {
	return (
		<div>
			{todo.title}-{todo.status ? "Done" : "Not Done"}
			<button>Toggle Todo</button>
		</div>
	);
};
