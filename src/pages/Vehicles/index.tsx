import { useEffect, useState } from "react";
import { getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";

const VehiclesPage = () => {
	const [vehicles, setVehicles] = useState<IVehicle[]>([]);
	const [search, setSearch] = useState<string>("");

	useEffect(() => {
		const fetchVehicles = async () => {
			const payload = await getVehicles();
			console.log("payload", payload);
			setVehicles(payload);
		};

		fetchVehicles();
	}, []);

	console.log({ vehicles });

	return (
		<div className={styles.Vehicles}>
			<main className={styles.main}>
				<Search placeholder="Search" value={search} onChange={() => {}} />

				<Button text="Add new vehicle" onClick={() => {}} />

				<div>
					{vehicles.map((vehicle) => (
						<Card key={vehicle.id} title={vehicle.name} color={vehicle.color}>
							<p>Price: {vehicle.price}</p>
							<p>Description: {vehicle.description}</p>
							<p>Year: {vehicle.year} </p>
						</Card>
					))}
				</div>
			</main>
		</div>
	);
};

export default VehiclesPage;
