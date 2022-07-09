import axios, { AxiosResponse } from "axios";
import { ICreateVehicleDTO, IFilterOptions, IVehicle } from "../types";

const baseURL = "http://localhost:3333";

const api = axios.create({
	baseURL: baseURL,
});

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

export async function createVehicle(data: ICreateVehicleDTO): Promise<AxiosResponse> {
	const response = api.post<IVehicle>("/vehicles", data);

	return response;
}

/* export const getVehiclesWithFilterOptions = async (searchString: string) => {
	return get(`/vehicles?${searchString ? `searchString=${searchString}` : ""}`);
}; */
