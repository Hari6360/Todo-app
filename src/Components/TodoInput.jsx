import { useState } from "react";
import { nanoid } from "nanoid";

export const TodoInput = () => {
	const [text, setText] = useState("");

	const handleAdd = (data) => {
		console.log("HI");
		if (text === "") {
			return;
		}
		const newText = {
			id: nanoid(),
			title: data,
			status: false,
		};

		setText([...text, newText]);
	};
	return (
		<div>
			<input
				type="text"
				placeholder="Your Task"
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<button onClick={handleAdd}>Add</button>
		</div>
	);
};
