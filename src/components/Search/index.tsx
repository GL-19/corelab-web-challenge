import { ChangeEvent } from "react";

interface ISearch {
	placeholder: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ placeholder, value, onChange }: ISearch) => {
	return (
		<input type="text" placeholder={placeholder} value={value} onChange={onChange} />
	);
};

export default Search;
