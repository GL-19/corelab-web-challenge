import { useVehicles } from "../../providers/VehiclesProvider";
import { Button, Card, SearchInput, FilterIcon } from "../../components";
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

				<Button onClick={() => navigate("/create")}>ADICIONAR</Button>

				<div className={styles.cardsDiv}>
					{vehicles.map((vehicle) => (
						<Card
							key={vehicle.id}
							vehicle={vehicle}
							onClickEdit={() => navigate(`/${vehicle.id}/update`)}
							onClickDelete={() => handleDeleteVehicle(vehicle.id)}
							onClickFavorite={() => handleToggleFavorite(vehicle.id)}
						/>
					))}
				</div>
			</main>
		</div>
	);
};

export default VehiclesPage;
