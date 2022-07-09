import { FormEvent, useState } from "react";

import { IVehicleFormData } from "../../types";
import styles from "./VehicleForm.module.scss";

interface VehicleFormProps {
	initialValues?: IVehicleFormData;
	onSubmit: (data: IVehicleFormData) => void;
}

const defaultInitialValues: IVehicleFormData = {
	name: "",
	brand: "",
	description: "",
	color: "",
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
				type="text"
				id="Nome"
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>

			<label htmlFor="Marca">Marca:</label>
			<input
				type="text"
				id="Marca"
				value={brand}
				onChange={(event) => setBrand(event.target.value)}
			/>

			<label htmlFor="Descrição">Descrição:</label>
			<input
				type="text"
				id="Descrição"
				value={description}
				onChange={(event) => setDescription(event.target.value)}
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
				min="1955"
				max="2025"
				id="Ano"
				value={year.toString()}
				onChange={(event) => setYear(Number(event.target.value))}
			/>

			<label htmlFor="Placa">Placa:</label>
			<input
				type="text"
				id="Placa"
				value={plate}
				onChange={(event) => setPlate(event.target.value)}
			/>

			<label htmlFor="Preço">Preço:</label>
			<input
				type="number"
				id="Preço"
				value={price.toString()}
				onChange={(event) => setPrice(Number(event.target.value))}
			/>

			<button>Salvar</button>
		</form>
	);
};

export default VehicleForm;
