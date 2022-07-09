import axios, { AxiosResponse } from "axios";
import { IVehicleFormData, IFilterOptions, IVehicle } from "../types";

const baseURL = "http://localhost:3333";

export const api = axios.create({
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

export async function getVehicle(id: number): Promise<IVehicle> {
	const { data } = await api.get<IVehicle>(`vehicles/${id}`);
	return data;
}

export async function deleteVehicle(id: number): Promise<void> {
	await api.delete<void>(`vehicles/${id}`);
}

export async function createVehicle(data: IVehicleFormData): Promise<AxiosResponse> {
	const response = api.post<IVehicle>("/vehicles", data);

	return response;
}

export async function updateVehicle(
	data: IVehicleFormData,
	id: number
): Promise<AxiosResponse> {
	const response = api.put<IVehicle>(`/vehicles/${id}`, data);

	return response;
}

export async function toggleVehicleFavorite(id: number): Promise<AxiosResponse> {
	const response = api.patch<IVehicle>(`/vehicles/${id}`);

	return response;
}
