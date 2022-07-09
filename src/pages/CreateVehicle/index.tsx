import { CreateVehicleForm, FilterOptionsForm } from "../../components";
import { createVehicle } from "../../lib/api";
import { useVehicles } from "../../providers/VehiclesProvider";
import styles from "./CreateVehicle.module.scss";

function CreateVehicle() {
	const { handleUpdateFilterOptions } = useVehicles();

	return (
		<div className={styles.CreateVehicle}>
			<main className={styles.main}>
				<CreateVehicleForm onSubmit={createVehicle} />
				<FilterOptionsForm onSubmit={handleUpdateFilterOptions} />
			</main>
		</div>
	);
}

export default CreateVehicle;
