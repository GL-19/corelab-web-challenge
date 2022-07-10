import { ChangeEvent } from "react";
import searchIcon from "../../images/search.svg";

interface ISearch {
	value: string;
	placeholder: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ onChange, value, placeholder }: ISearch) => {
	return (
		<div>
			<img src={searchIcon} alt="" />

			<input type="text" placeholder={placeholder} value={value} onChange={onChange} />
		</div>
	);
};

export default SearchInput;
