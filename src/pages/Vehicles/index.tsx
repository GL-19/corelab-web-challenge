import { useVehicles } from "../../providers/VehiclesProvider";
import { Button, Card, SearchForm } from "../../components";
import styles from "./Vehicles.module.scss";
import { useNavigate } from "react-router-dom";

const VehiclesPage = () => {
	const { search, vehicles, handleSearch, handleDeleteVehicle } = useVehicles();
	const navigate = useNavigate();

	return (
		<div className={styles.Vehicles}>
			<main className={styles.main}>
				<SearchForm placeholder="Search" value={search} onSubmit={handleSearch} />

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
