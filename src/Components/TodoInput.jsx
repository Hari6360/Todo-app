import { useState } from "react";

export const TodoInput = ({ handleAdd }) => {
	const [text, setText] = useState("");

	return (
		<div>
			<input
				type="text"
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					handleAdd(text);
				}}>
				Add Todo
			</button>
		</div>
	);
};
