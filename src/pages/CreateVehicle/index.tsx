import { VehicleForm } from "../../components";
import { useVehicles } from "../../providers/VehiclesProvider";
import styles from "./CreateVehicle.module.scss";

function CreateVehicle() {
	const { handleCreateVehicle } = useVehicles();

	return (
		<div className={styles.CreateVehicle}>
			<main className={styles.main}>
				<VehicleForm onSubmit={handleCreateVehicle} />
			</main>
		</div>
	);
}

export default CreateVehicle;
