import { FormEvent, useState } from "react";

interface ISearch {
	placeholder: string;
	value: string;
	onSubmit: (input: string) => void;
}

const SearchForm = ({ placeholder, onSubmit }: ISearch) => {
	const [input, setInput] = useState("");

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		onSubmit(input);
	}

	return (
		<form action="submit" onSubmit={handleSubmit}>
			<button type="submit">Submit</button>
			<input
				type="text"
				placeholder="Search"
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>
		</form>
	);
};

export default SearchForm;
