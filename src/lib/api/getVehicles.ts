import { AxiosResponse } from "axios";
import { IFilterOptions } from "../../types";
import { api } from "./api";

export async function getVehicles(
	searchString: string = "",
	filterOptions?: IFilterOptions
): Promise<AxiosResponse> {
	const response = await api.get(`/vehicles`, {
		params: {
			searchString,
			...filterOptions,
		},
	});

	return response;
}
