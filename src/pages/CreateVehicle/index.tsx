import { useNavigate } from "react-router-dom";
import { ReturnIcon, VehicleForm } from "../../components";
import { useVehicles } from "../../providers/VehiclesProvider";
import styles from "./CreateVehicle.module.scss";

function CreateVehicle() {
	const { handleCreateVehicle } = useVehicles();
	const navigate = useNavigate();

	return (
		<div className={styles.CreateVehicle}>
			<header>
				<ReturnIcon onClick={() => navigate("/")} />
			</header>
			<main className={styles.main}>
				<VehicleForm onSubmit={handleCreateVehicle} />
			</main>
		</div>
	);
}

export default CreateVehicle;
