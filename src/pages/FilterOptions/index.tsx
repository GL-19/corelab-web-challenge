import { FilterOptionsForm } from "../../components";

import styles from "./FilterOptions.module.scss";

export function FilterOptions() {
	return (
		<div className={styles.FilterOptions}>
			<main className={styles.main}>
				<FilterOptionsForm />
			</main>
		</div>
	);
}
