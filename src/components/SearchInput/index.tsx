import { ChangeEvent } from "react";
import styles from "./SearchInput.module.scss";
import searchIcon from "../../images/search.svg";

interface ISearchInput {
	value: string;
	placeholder: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ onChange, value, placeholder }: ISearchInput) => {
	return (
		<div className={styles.SearchInput}>
			<img src={searchIcon} alt="" className={styles.icon} />

			<input type="text" placeholder={placeholder} value={value} onChange={onChange} />
		</div>
	);
};

export default SearchInput;
