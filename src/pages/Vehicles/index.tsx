import { ChangeEvent } from "react";

import { useVehicles } from "../../providers/VehiclesProvider";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { useNavigate } from "react-router-dom";

const VehiclesPage = () => {
	const { search, handleChangeSearch, vehicles } = useVehicles();
	const navigate = useNavigate();

	function handleOnChange(event: ChangeEvent<HTMLInputElement>): void {
		event.preventDefault();

		handleChangeSearch(event.target.value);
	}

	return (
		<div className={styles.Vehicles}>
			<main className={styles.main}>
				<Search placeholder="Search" value={search} onChange={handleOnChange} />

				<Button text="Add new vehicle" onClick={() => navigate("/create")} />

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
