import { FormEvent, useState } from "react";
import { Button } from "..";
import { useVehicles } from "../../providers/VehiclesProvider";
import { brandOptions } from "../../utils/brandOptions";
import { colorOptions } from "../../utils/colorOptions";

import styles from "./FilterOptionsForm.module.scss";

const FilterOptionsForm = () => {
	const { filterOptions, handleUpdateFilterOptions } = useVehicles();

	const [brand, setBrand] = useState(filterOptions.brand);
	const [color, setColor] = useState(filterOptions.color);
	const [year, setYear] = useState(filterOptions.year);
	const [maxPrice, setMaxPrice] = useState(filterOptions.maxPrice);
	const [minPrice, setMinPrice] = useState(filterOptions.minPrice);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		handleUpdateFilterOptions({ brand, color, year, maxPrice, minPrice });
	}

	return (
		<form className={styles.FilterOptionsForm} action="submit" onSubmit={handleSubmit}>
			<label htmlFor="Marca">Marca:</label>
			<select id="Marca" value={brand} onChange={(event) => setBrand(event.target.value)}>
				{brandOptions.map((brand) => (
					<option value={brand}>{brand}</option>
				))}
			</select>

			<label htmlFor="Cor">Cor:</label>

			<select id="Cor" value={color} onChange={(event) => setColor(event.target.value)}>
				{colorOptions.map((colorOption) => (
					<option value={colorOption.color}>{colorOption.name}</option>
				))}
			</select>

			<label htmlFor="Ano">Ano:</label>
			<input
				type="number"
				id="Ano"
				value={year.toString()}
				onChange={(event) => setYear(Number(event.target.value))}
			/>

			<label htmlFor="minPrice">Preço Minimo</label>
			<input
				type="number"
				id="minPrice"
				value={minPrice.toString()}
				onChange={(event) => setMinPrice(Number(event.target.value))}
			/>

			<label htmlFor="maxPrice">Preço Máximo</label>
			<input
				type="number"
				id="maxPrice"
				value={maxPrice.toString()}
				onChange={(event) => setMaxPrice(Number(event.target.value))}
			/>

			<Button type="submit" maxWidth="8rem" fontSize="1rem">
				Salvar
			</Button>
		</form>
	);
};

export default FilterOptionsForm;
