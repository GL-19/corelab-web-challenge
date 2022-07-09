import { FilterOptionsForm } from "../../components";

import { useVehicles } from "../../providers/VehiclesProvider";
import styles from "./FilterOptions.module.scss";

export function FilterOptions() {
	const { handleUpdateFilterOptions } = useVehicles();

	return (
		<div className={styles.FilterOptions}>
			<main className={styles.main}>
				<FilterOptionsForm onSubmit={handleUpdateFilterOptions} />
			</main>
		</div>
	);
}
