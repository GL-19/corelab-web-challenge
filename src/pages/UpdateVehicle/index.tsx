import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VehicleForm } from "../../components";
import { getVehicle } from "../../lib/api";

import { useVehicles } from "../../providers/VehiclesProvider";
import { IVehicle } from "../../types";
import styles from "./UpdateVehicle.module.scss";

export function UpdateVehicle() {
	const [vehicle, setVehicle] = useState<IVehicle | null>(null);
	const { handleUpdateVehicle } = useVehicles();
	const { id } = useParams();

	useEffect(() => {
		async function fetchVehicle() {
			const response = await getVehicle(Number(id));

			setVehicle(response);
		}

		fetchVehicle();
	}, [id]);

	return (
		<div className={styles.UpdateVehicle}>
			<main className={styles.main}>
				{vehicle && (
					<VehicleForm
						onSubmit={handleUpdateVehicle}
						initialValues={{
							...vehicle,
						}}
					/>
				)}
			</main>
		</div>
	);
}

export default UpdateVehicle;
