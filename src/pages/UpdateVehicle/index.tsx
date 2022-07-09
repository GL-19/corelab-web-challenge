import { FilterOptionsForm } from "../../components";

import { useVehicles } from "../../providers/VehiclesProvider";
import styles from "./CreateVehicle.module.scss";

function UpdateVehicle() {
	const { handleUpdateFilterOptions } = useVehicles();

	return (
		<div className={styles.CreateVehicle}>
			<main className={styles.main}>
				<FilterOptionsForm onSubmit={handleUpdateFilterOptions} />
			</main>
		</div>
	);
}

export default UpdateVehicle;
