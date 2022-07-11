import axios, { AxiosResponse } from "axios";
import { IVehicleFormData, IVehicle, IFilterOptions } from "../types";

const baseURL = "http://localhost:3333";

export const api = axios.create({
	baseURL: baseURL,
});

export function createVehicle(data: IVehicleFormData): Promise<AxiosResponse> {
	return api.post<IVehicle>("/vehicles", data);
}

export function deleteVehicle(id: number): Promise<AxiosResponse> {
	return api.delete<void>(`vehicles/${id}`);
}

export function getVehicle(id: number): Promise<AxiosResponse> {
	return api.get<IVehicle>(`vehicles/${id}`);
}

export function getVehicles(
	search: string = "",
	filterOptions?: IFilterOptions
): Promise<AxiosResponse> {
	return api.get(`/vehicles`, {
		params: {
			search,
			...filterOptions,
		},
	});
}

export function toggleVehicleFavorite(id: number): Promise<AxiosResponse> {
	return api.patch<IVehicle>(`/vehicles/${id}`);
}

export function updateVehicle(
	data: IVehicleFormData,
	id: number
): Promise<AxiosResponse> {
	return api.put<IVehicle>(`/vehicles/${id}`, data);
}
