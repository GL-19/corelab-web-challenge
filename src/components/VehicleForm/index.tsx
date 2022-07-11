import { FormEvent, useState } from "react";

import { IVehicleFormData } from "../../types";
import { brandOptions } from "../../utils/brandOptions";
import { colorOptions } from "../../utils/colorOptions";
import Button from "../Button";
import styles from "./VehicleForm.module.scss";

interface VehicleFormProps {
	initialValues?: IVehicleFormData;
	onSubmit: (data: IVehicleFormData) => void;
}

const defaultInitialValues: IVehicleFormData = {
	name: "",
	brand: brandOptions[0],
	description: "",
	color: colorOptions[0].color,
	plate: "",
	year: 2000,
	price: 0,
};

const VehicleForm = ({
	onSubmit,
	initialValues = defaultInitialValues,
}: VehicleFormProps) => {
	const [name, setName] = useState(initialValues.name);
	const [brand, setBrand] = useState(initialValues.brand);
	const [description, setDescription] = useState(initialValues.description);
	const [color, setColor] = useState(initialValues.color);
	const [plate, setPlate] = useState(initialValues.plate);
	const [year, setYear] = useState(initialValues.year);
	const [price, setPrice] = useState(initialValues.price);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const data: IVehicleFormData = {
			name,
			brand,
			description,
			color,
			plate,
			price,
			year,
		};

		if (initialValues?.id) {
			data.id = initialValues.id;
		}

		try {
			onSubmit(data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<form className={styles.VehicleForm} action="submit" onSubmit={handleSubmit}>
			<label htmlFor="Nome">Nome:</label>
			<input
				id="Nome"
				type="text"
				required
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>

			<label htmlFor="Marca">Marca:</label>
			<select id="Marca" value={brand} onChange={(event) => setBrand(event.target.value)}>
				{brandOptions.map((brand) => (
					<option value={brand}>{brand}</option>
				))}
			</select>

			<label htmlFor="Descrição">Descrição:</label>
			<input
				id="Descrição"
				type="text"
				required
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			/>

			<label htmlFor="Cor">Cor:</label>
			<select id="Cor" value={color} onChange={(event) => setColor(event.target.value)}>
				{colorOptions.map((colorOption) => (
					<option value={colorOption.color}>{colorOption.name}</option>
				))}
			</select>

			<label htmlFor="Ano">Ano:</label>
			<input
				id="Ano"
				type="number"
				required
				min="1955"
				max="2025"
				value={year.toString()}
				onChange={(event) => setYear(Number(event.target.value))}
			/>

			<label htmlFor="Placa">Placa:</label>
			<input
				id="Placa"
				type="text"
				required
				value={plate}
				onChange={(event) => setPlate(event.target.value)}
			/>

			<label htmlFor="Preço">Preço:</label>
			<input
				id="Preço"
				type="number"
				required
				value={price.toString()}
				onChange={(event) => setPrice(Number(event.target.value))}
			/>

			<Button type="submit" maxWidth="8rem" fontSize="1rem">
				Salvar
			</Button>
		</form>
	);
};

export default VehicleForm;
