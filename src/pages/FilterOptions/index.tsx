import { useNavigate } from "react-router-dom";
import { FilterOptionsForm, Header } from "../../components";

import styles from "./FilterOptions.module.scss";

export function FilterOptions() {
	const navigate = useNavigate();

	return (
		<div className={styles.FilterOptions}>
			<Header onClick={() => navigate("/")} />

			<FilterOptionsForm />
		</div>
	);
}
