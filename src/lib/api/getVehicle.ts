import { AxiosResponse } from "axios";
import { IVehicle } from "../../types";
import { api } from "./api";

export async function getVehicle(id: number): Promise<AxiosResponse> {
	const response = await api.get<IVehicle>(`vehicles/${id}`);

	return response;
}
