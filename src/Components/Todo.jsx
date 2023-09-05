import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

export const Todo = () => {
	const [todos, setTodos] = useState([]);

	const addtodo = (data) => {
		const t = {
			id: nanoid(),
			title: data,
			status: false,
		};
		setTodos([...todos, t]);
	};
	const handleDelete = (id) => {
		const updatedTodo = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodo);
	};
	return (
		<div>
			<TodoInput handleAdd={addtodo} />
			{todos.map((e) => (
				<TodoItem todo={e} key={e.id} onclick={handleDelete} />
			))}
		</div>
	);
};
