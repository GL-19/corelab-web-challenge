import { ChangeEvent } from "react";

import { useVehicles } from "../../providers/VehiclesProvider";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { useNavigate } from "react-router-dom";

const VehiclesPage = () => {
	const { search, vehicles, handleChangeSearch, handleDeleteVehicle } = useVehicles();
	const navigate = useNavigate();

	function handleOnChange(event: ChangeEvent<HTMLInputElement>): void {
		event.preventDefault();

		handleChangeSearch(event.target.value);
	}

	return (
		<div className={styles.Vehicles}>
			<main className={styles.main}>
				<Search placeholder="Search" value={search} onChange={handleOnChange} />

				<Button text="Filter Options" onClick={() => navigate("/filter-options")} />
				<Button text="Add new vehicle" onClick={() => navigate("/create")} />

				<div>
					{vehicles.map((vehicle) => (
						<Card key={vehicle.id} title={vehicle.name} color={vehicle.color}>
							<Button
								text="Update Vehicle"
								onClick={() => navigate(`/${vehicle.id}/update`)}
							/>
							<Button
								text="Delete Vehicle"
								onClick={() => handleDeleteVehicle(vehicle.id)}
							/>
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
