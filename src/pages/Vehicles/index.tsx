import { useVehicles } from "../../providers/VehiclesProvider";
import {
	Button,
	Card,
	EditIcon,
	FavoriteIcon,
	DeleteIcon,
	SearchForm,
	FilterIcon,
} from "../../components";
import styles from "./Vehicles.module.scss";
import { useNavigate } from "react-router-dom";

const VehiclesPage = () => {
	const navigate = useNavigate();
	const { search, vehicles, handleSearch, handleDeleteVehicle, handleToggleFavorite } =
		useVehicles();

	return (
		<div className={styles.Vehicles}>
			<main className={styles.main}>
				<div
					style={{
						display: "flex",
					}}
				>
					<SearchForm initialValue={search} onSubmit={handleSearch} />
					<FilterIcon onClick={() => navigate("/filter-options")} />
				</div>

				<Button text="ADICIONAR" onClick={() => navigate("/create")} />

				<div>
					{vehicles.map((vehicle) => (
						<Card key={vehicle.id} title={vehicle.name} color={vehicle.color}>
							<div
								style={{
									display: "flex",
								}}
							>
								<EditIcon onClick={() => navigate(`/${vehicle.id}/update`)} />
								<DeleteIcon onClick={() => handleDeleteVehicle(vehicle.id)} />
								<FavoriteIcon
									isFavorite={vehicle.isFavorite}
									onClick={() => handleToggleFavorite(vehicle.id)}
								/>
							</div>
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
