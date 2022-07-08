import { useState } from "react";
import { CreateVehicleForm } from "../../components";
import styles from "./CreateVehicle.module.scss";

function CreateVehicle() {
	return (
		<div className={styles.CreateVehicle}>
			<main className={styles.main}>
				<CreateVehicleForm onSubmit={() => {}} />
			</main>
		</div>
	);
}

export default CreateVehicle;
