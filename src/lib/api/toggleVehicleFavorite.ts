import { AxiosResponse } from "axios";
import { IVehicle } from "../../types";
import { api } from "./api";

export async function toggleVehicleFavorite(id: number): Promise<AxiosResponse> {
	const response = api.patch<IVehicle>(`/vehicles/${id}`);

	return response;
}
