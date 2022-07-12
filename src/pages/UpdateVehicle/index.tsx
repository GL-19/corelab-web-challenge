import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header, VehicleForm } from "../../components";
import { getVehicle } from "../../services/api";

import { useVehicles } from "../../providers/VehiclesProvider";
import { IVehicle } from "../../types";
import styles from "./UpdateVehicle.module.scss";

export function UpdateVehicle() {
	const { id } = useParams();
	const navigate = useNavigate();

	const { handleUpdateVehicle } = useVehicles();
	const [vehicle, setVehicle] = useState<IVehicle | null>(null);

	useEffect(() => {
		async function fetchVehicle() {
			try {
				const { data } = await getVehicle(id);

				setVehicle(data);
			} catch {
				navigate("/");
			}
		}

		fetchVehicle();
	}, [id, navigate]);

	return (
		<div className={styles.UpdateVehicle}>
			<Header onClick={() => navigate("/")} />

			{vehicle && (
				<VehicleForm
					onSubmit={handleUpdateVehicle}
					initialValues={{
						...vehicle,
					}}
				/>
			)}
		</div>
	);
}

export default UpdateVehicle;
