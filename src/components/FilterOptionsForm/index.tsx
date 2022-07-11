import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "..";
import { useVehicles } from "../../providers/VehiclesProvider";
import { IFilterOptions } from "../../types";

import { colorOptions, brandOptions, yearOptions } from "../../utils";

import styles from "./FilterOptionsForm.module.scss";

const schema = yup.object().shape({
	brand: yup.string(),
	color: yup.string(),
	year: yup.lazy((value) => (value === "" ? yup.string() : yup.number())),
	minPrice: yup.lazy((value) => (value === "" ? yup.string() : yup.number())),
	maxPrice: yup.lazy((value) => (value === "" ? yup.string() : yup.number())),
});

const FilterOptionsForm = () => {
	const { filterOptions, handleUpdateFilterOptions } = useVehicles();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFilterOptions>({
		defaultValues: filterOptions,
		resolver: yupResolver(schema),
	});

	function onSubmitHandle(filterOptions: IFilterOptions) {
		if (filterOptions.minPrice) {
			filterOptions.minPrice = Number(filterOptions.minPrice);
		}

		if (filterOptions.maxPrice) {
			filterOptions.maxPrice = Number(filterOptions.maxPrice);
		}

		console.log(filterOptions);

		handleUpdateFilterOptions(filterOptions);
	}

	return (
		<form
			className={styles.FilterOptionsForm}
			action="submit"
			onSubmit={handleSubmit(onSubmitHandle)}
		>
			<label htmlFor="brand">Marca:</label>
			<select {...register("brand")}>
				<option value=""></option>
				{brandOptions.map((brand) => (
					<option key={brand} value={brand}>
						{brand}
					</option>
				))}
			</select>

			<label htmlFor="color">Cor:</label>
			<select {...register("color")}>
				<option value=""></option>
				{colorOptions.map((colorOption) => (
					<option key={colorOption.name} value={colorOption.color}>
						{colorOption.name}
					</option>
				))}
			</select>

			<label htmlFor="year">Ano:</label>
			<select {...register("year")}>
				<option value=""></option>
				{yearOptions.map((year) => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>
			<p>{errors.year?.message}</p>

			<label htmlFor="minPrice">Preço Minimo</label>
			<input {...register("minPrice")} type="number" />
			<p>{errors.minPrice?.message}</p>

			<label htmlFor="maxPrice">Preço Máximo</label>
			<input {...register("maxPrice")} type="number" />
			<p>{errors.maxPrice?.message}</p>

			<Button type="submit" maxWidth="8rem" fontSize="1rem">
				Salvar
			</Button>
		</form>
	);
};

export default FilterOptionsForm;
