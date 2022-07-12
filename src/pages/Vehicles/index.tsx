import { useVehicles } from "../../providers/VehiclesProvider";
import { SearchButton, Card, SearchInput, FilterIcon, Header } from "../../components";
import styles from "./Vehicles.module.scss";
import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";

const VehiclesPage = () => {
	const navigate = useNavigate();
	const {
		search,
		vehicles,
		handleSearch,
		handleDeleteVehicle,
		handleToggleFavorite,
		handleResetSearchAndFilter,
	} = useVehicles();

	async function handleOnChange(event: ChangeEvent<HTMLInputElement>): Promise<void> {
		event.preventDefault();

		console.log(event.target.value);

		handleSearch(event.target.value);
	}

	return (
		<main className={styles.Vehicles}>
			<Header onClick={handleResetSearchAndFilter} displayButton={!!search} />

			<div className={styles.searchDiv}>
				<SearchInput placeholder="Buscar" value={search} onChange={handleOnChange} />
				<FilterIcon onClick={() => navigate("/filter-options")} />
			</div>

			<SearchButton onClick={() => navigate("/create")}>ADICIONAR</SearchButton>

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
	);
};

export default VehiclesPage;
