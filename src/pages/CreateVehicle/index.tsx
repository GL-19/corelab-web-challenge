import { CreateVehicleForm, FilterOptionsForm } from "../../components";
import { createVehicle } from "../../lib/api";
import styles from "./CreateVehicle.module.scss";

function CreateVehicle() {
	return (
		<div className={styles.CreateVehicle}>
			<main className={styles.main}>
				<CreateVehicleForm onSubmit={createVehicle} />
				{/* <FilterOptionsForm onSubmit={handleUpdateFilter} /> */}
			</main>
		</div>
	);
}

export default CreateVehicle;
