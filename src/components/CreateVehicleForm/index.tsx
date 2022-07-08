import { FormEvent, useState } from "react";
import styles from "./CreateVehicleForm.module.scss";

interface ICreateVehicleForm {
	onSubmit: () => void;
}

const CreateVehicleForm = ({ onSubmit }: ICreateVehicleForm) => {
	const [name, setName] = useState("");
	const [brand, setBrand] = useState("");
	const [description, setDescription] = useState("");
	const [color, setColor] = useState("");
	const [plate, setPlate] = useState("");
	const [year, setYear] = useState(1955);
	const [price, setPrice] = useState(0);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		onSubmit();
	}

	return (
		<form className={styles.CreateVehicleForm} action="submit" onSubmit={handleSubmit}>
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

export default CreateVehicleForm;
