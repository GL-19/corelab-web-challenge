import { useNavigate } from "react-router-dom";
import { FilterOptionsForm, ReturnIcon } from "../../components";

import styles from "./FilterOptions.module.scss";

export function FilterOptions() {
	const navigate = useNavigate();

	return (
		<div className={styles.FilterOptions}>
			<header>
				<ReturnIcon onClick={() => navigate("/")} />
			</header>
			<main className={styles.main}>
				<FilterOptionsForm />
			</main>
		</div>
	);
}
