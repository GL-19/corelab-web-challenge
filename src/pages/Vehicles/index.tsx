import { useVehicles } from "../../providers/VehiclesProvider";
import { SearchButton, Card, SearchInput, FilterIcon, Header } from "../../components";
import styles from "./Vehicles.module.scss";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useMemo } from "react";

const VehiclesPage = () => {
	const navigate = useNavigate();
	const {
		search,
		vehicles,
		favoriteVehicles,
		filterOptions,
		handleSearch,
		handleDeleteVehicle,
		handleToggleFavorite,
		handleResetSearchAndFilter,
	} = useVehicles();

	const isFilterActive = useMemo(() => {
		for (let option in filterOptions) {
			if (filterOptions[option]) {
				return true;
			}
		}

		return false;
	}, [filterOptions]);

	const displayFavoritesSection = favoriteVehicles.length > 0;

	const displayAnnouncementTitle =
		favoriteVehicles.length > 0 && vehicles.length > favoriteVehicles.length;

	async function handleOnChange(event: ChangeEvent<HTMLInputElement>): Promise<void> {
		event.preventDefault();

		handleSearch(event.target.value);
	}

	return (
		<main className={styles.Vehicles}>
			<Header
				onClick={handleResetSearchAndFilter}
				displayButton={!!search || isFilterActive}
			/>

			<div className={styles.searchDiv}>
				<SearchInput placeholder="Buscar" value={search} onChange={handleOnChange} />
				<FilterIcon onClick={() => navigate("/filter-options")} />
			</div>

			<SearchButton onClick={() => navigate("/create")}>ADICIONAR</SearchButton>

			{displayFavoritesSection && (
				<div className={styles.cardsDiv}>
					<h2>Meus favoritos</h2>

					{vehicles
						.filter((vehicle) => vehicle.isFavorite)
						.map((vehicle) => (
							<Card
								key={vehicle.id}
								vehicle={vehicle}
								onClickEdit={() => navigate(`/update/${vehicle.id}`)}
								onClickDelete={() => handleDeleteVehicle(vehicle.id)}
								onClickFavorite={() => handleToggleFavorite(vehicle.id)}
							/>
						))}
				</div>
			)}

			<div className={styles.cardsDiv}>
				{displayAnnouncementTitle && <h2>Anúncios</h2>}

				{vehicles
					.filter((vehicle) => !vehicle.isFavorite)
					.map((vehicle) => (
						<Card
							key={vehicle.id}
							vehicle={vehicle}
							onClickEdit={() => navigate(`/update/${vehicle.id}`)}
							onClickDelete={() => handleDeleteVehicle(vehicle.id)}
							onClickFavorite={() => handleToggleFavorite(vehicle.id)}
						/>
					))}
			</div>
		</main>
	);
};

export default VehiclesPage;
