import { FormEvent, useState } from "react";
import { IFilterOptions } from "../../types";

import styles from "./FilterOptionsForm.module.scss";

interface FilterOptionsFormProps {
	onSubmit: (data: IFilterOptions) => void;
}

const FilterOptionsForm = ({ onSubmit }: FilterOptionsFormProps) => {
	const [brand, setBrand] = useState("");
	const [color, setColor] = useState("");
	const [year, setYear] = useState(0);
	const [maxPrice, setMaxPrice] = useState(0);
	const [minPrice, setMinPrice] = useState(0);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		onSubmit({ brand, color, year, maxPrice, minPrice });
	}

	return (
		<form className={styles.FilterOptionsForm} action="submit" onSubmit={handleSubmit}>
			<label htmlFor="Marca">Marca:</label>
			<input
				type="text"
				id="Marca"
				value={brand}
				onChange={(event) => setBrand(event.target.value)}
			/>

			<label htmlFor="Cor">Cor:</label>
			<input
				type="text"
				id="Cor"
				value={color}
				onChange={(event) => setColor(event.target.value)}
			/>

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

			<button>Salvar</button>
		</form>
	);
};

export default FilterOptionsForm;
