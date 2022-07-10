import { useVehicles } from "../../providers/VehiclesProvider";
import { Button, Card, SearchInput, FilterIcon, CardContent } from "../../components";
import styles from "./Vehicles.module.scss";
import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";

const VehiclesPage = () => {
	const navigate = useNavigate();
	const { search, vehicles, handleSearch, handleDeleteVehicle, handleToggleFavorite } =
		useVehicles();

	async function handleOnChange(event: ChangeEvent<HTMLInputElement>): Promise<void> {
		event.preventDefault();

		handleSearch(event.target.value);
	}

	return (
		<div className={styles.Vehicles}>
			<main className={styles.main}>
				<div className={styles.searchDiv}>
					<SearchInput placeholder="Buscar" value={search} onChange={handleOnChange} />

					<FilterIcon onClick={() => navigate("/filter-options")} />
				</div>

				<Button text="ADICIONAR" onClick={() => navigate("/create")} />

				<div>
					{vehicles.map((vehicle) => (
						<Card key={vehicle.id} title={vehicle.name} color={vehicle.color}>
							<CardContent
								onClickEdit={() => navigate(`/${vehicle.id}/update`)}
								onClickDelete={() => handleDeleteVehicle(vehicle.id)}
								onClickFavorite={() => () => handleToggleFavorite(vehicle.id)}
								vehicle={vehicle}
							/>
						</Card>
					))}
				</div>
			</main>
		</div>
	);
};

export default VehiclesPage;
