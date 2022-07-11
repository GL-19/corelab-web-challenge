import { AxiosResponse } from "axios";
import { api } from "./api";
import { IVehicle, IVehicleFormData } from "../../types";

export async function createVehicle(data: IVehicleFormData): Promise<AxiosResponse> {
	const response = api.post<IVehicle>("/vehicles", data);

	return response;
}
