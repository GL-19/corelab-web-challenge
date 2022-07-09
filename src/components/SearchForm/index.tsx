import { FormEvent, useState } from "react";
import searchIcon from "../../images/search.svg";

interface ISearch {
	initialValue: string;
	onSubmit: (input: string) => void;
}

const SearchForm = ({ onSubmit, initialValue = "" }: ISearch) => {
	const [input, setInput] = useState(initialValue);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		onSubmit(input);
	}

	return (
		<form action="submit" onSubmit={handleSubmit}>
			<button type="submit">
				<img src={searchIcon} alt="" />
			</button>
			<input
				type="text"
				placeholder="Buscar"
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>
		</form>
	);
};

export default SearchForm;
