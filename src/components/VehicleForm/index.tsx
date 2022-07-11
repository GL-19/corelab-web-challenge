import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { IVehicleFormData } from "../../types";
import { yearOptions, colorOptions, brandOptions } from "../../utils";

import Button from "../Button";
import styles from "./VehicleForm.module.scss";

import { useState } from "react";

interface VehicleFormProps {
	initialValues?: IVehicleFormData;
	onSubmit: (data: IVehicleFormData) => void;
}

const schema = yup.object().shape({
	name: yup.string().required(),
	brand: yup.string().required(),
	description: yup.string().required(),
	color: yup.string().required(),
	plate: yup.string().required(),
	year: yup.number().required(),
	price: yup.number().required(),
});

const defaultValues: IVehicleFormData = {
	name: "",
	brand: brandOptions[0],
	description: "",
	color: colorOptions[0].color,
	plate: "",
	year: yearOptions[0],
	price: 0,
};

const VehicleForm = ({ onSubmit, initialValues = defaultValues }: VehicleFormProps) => {
	const [error, setError] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IVehicleFormData>({
		defaultValues: initialValues,
		resolver: yupResolver(schema),
	});

	function onSubmitHandle(data: IVehicleFormData) {
		try {
			if (initialValues?.id) {
				data.id = initialValues.id;
			}

			setError("");
			onSubmit(data);
		} catch (error) {
			setError("Erro na submissão");
		}
	}

	return (
		<form
			className={styles.VehicleForm}
			action="submit"
			onSubmit={handleSubmit(onSubmitHandle)}
		>
			<label htmlFor="Name">Nome:</label>
			<input type="text" required {...register("name")} />

			<label htmlFor="brand">Marca:</label>
			<select required {...register("brand")}>
				{brandOptions.map((brand) => (
					<option key={brand} value={brand}>
						{brand}
					</option>
				))}
			</select>

			<label htmlFor="description">Descrição:</label>
			<input type="text" required {...register("description")} />

			<label htmlFor="color">Cor:</label>
			<select {...register("color")}>
				{colorOptions.map((colorOption) => (
					<option key={colorOption.name} value={colorOption.color}>
						{colorOption.name}
					</option>
				))}
			</select>

			<label htmlFor="year">Ano:</label>
			<select required {...register("year")}>
				{yearOptions.map((year) => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>

			<label htmlFor="plate">Placa:</label>
			<input
				type="text"
				required
				{...register("plate")}
				pattern="[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}"
			/>

			<label htmlFor="price">Preço:</label>
			<input type="number" required {...register("price")} />

			{error && <p>{error}</p>}

			<Button type="submit" maxWidth="8rem" fontSize="1rem">
				Salvar
			</Button>
		</form>
	);
};

export default VehicleForm;
