import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const Todo = ({ text }) => {
	return (
		<div>
			<TodoInput />
			{text.map((e) => (
				<TodoItem todo={e} key={e.id} />
			))}
		</div>
	);
};
