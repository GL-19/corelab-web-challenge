import { useNavigate } from "react-router-dom";
import { Header, VehicleForm } from "../../components";
import { useVehicles } from "../../providers/VehiclesProvider";
import styles from "./CreateVehicle.module.scss";

function CreateVehicle() {
	const { handleCreateVehicle } = useVehicles();
	const navigate = useNavigate();

	return (
		<div className={styles.CreateVehicle}>
			<Header onClick={() => navigate("/")} />
			<VehicleForm onSubmit={handleCreateVehicle} />
		</div>
	);
}

export default CreateVehicle;
