import { AxiosResponse } from "axios";
import { api } from "./api";

export async function deleteVehicle(id: number): Promise<AxiosResponse> {
	const response = await api.delete<void>(`vehicles/${id}`);

	return response;
}
