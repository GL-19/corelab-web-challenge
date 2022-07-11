import { AxiosResponse } from "axios";
import { api } from "./api";
import { IVehicle, IVehicleFormData } from "../../types";

export async function updateVehicle(
	data: IVehicleFormData,
	id: number
): Promise<AxiosResponse> {
	const response = api.put<IVehicle>(`/vehicles/${id}`, data);

	return response;
}
