import { useVehicles } from "../../providers/VehiclesProvider";
import {
	Button,
	Card,
	EditIcon,
	FavoriteIcon,
	DeleteIcon,
	SearchForm,
} from "../../components";
import styles from "./Vehicles.module.scss";
import { useNavigate } from "react-router-dom";

const VehiclesPage = () => {
	const navigate = useNavigate();
	const { search, vehicles, handleSearch, handleDeleteVehicle } = useVehicles();

	return (
		<div className={styles.Vehicles}>
			<main className={styles.main}>
				<SearchForm initialValue={search} onSubmit={handleSearch} />

				<Button text="Filter Options" onClick={() => navigate("/filter-options")} />
				<Button text="Add new vehicle" onClick={() => navigate("/create")} />

				<div>
					{vehicles.map((vehicle) => (
						<Card key={vehicle.id} title={vehicle.name} color={vehicle.color}>
							<EditIcon onClick={() => navigate(`/${vehicle.id}/update`)} />
							<DeleteIcon onClick={() => handleDeleteVehicle(vehicle.id)} />
							<FavoriteIcon
								isFavorite={vehicle.isFavorite}
								onClick={() => console.log("toggle favorite")}
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
