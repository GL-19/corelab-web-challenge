import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	createVehicle,
	deleteVehicle,
	getVehicles,
	toggleVehicleFavorite,
	updateVehicle,
} from "../lib/api";
import { IFilterOptions, IVehicleFormData, IVehicle } from "../types";

interface VehiclesContextData {
	filterOptions: IFilterOptions;
	search: string;
	vehicles: IVehicle[];
	handleSearch: (search: string) => void;
	handleUpdateFilterOptions: (filterOptions: IFilterOptions) => void;
	handleCreateVehicle: (CreateVehicleData: IVehicleFormData) => Promise<void>;
	handleUpdateVehicle: (UpdateVehicleData: IVehicleFormData) => Promise<void>;
	handleDeleteVehicle: (id: number) => Promise<void>;
	handleToggleFavorite: (id: number) => Promise<void>;
}

interface VehiclesProviderProps {
	children: ReactNode;
}

const VehiclesContext = createContext<VehiclesContextData>({} as VehiclesContextData);

export function VehiclesProvider({ children }: VehiclesProviderProps) {
	const navigate = useNavigate();

	const [search, setSearch] = useState<string>("");
	const [vehicles, setVehicles] = useState<IVehicle[]>([]);
	const [filterOptions, setFilterOptions] = useState<IFilterOptions>({
		brand: "",
		color: "",
		year: 0,
		minPrice: 0,
		maxPrice: 0,
	});

	useEffect(() => {
		const fetchVehicles = async () => {
			const { data } = await getVehicles();
			setVehicles(data);
		};

		fetchVehicles();
	}, []);

	async function handleUpdateFilterOptions(filterOptions: IFilterOptions): Promise<void> {
		setFilterOptions(filterOptions);

		const { data } = await getVehicles(search, filterOptions);

		setVehicles(data);

		navigate("/");
	}

	async function handleSearch(search: string): Promise<void> {
		setSearch(search);

		const { data } = await getVehicles(search, filterOptions);

		setVehicles(data);
	}

	async function handleCreateVehicle(CreateVehicleData: IVehicleFormData): Promise<void> {
		await createVehicle(CreateVehicleData);

		const { data } = await getVehicles(search, filterOptions);

		setVehicles(data);

		navigate("/");
	}

	async function handleUpdateVehicle(CreateVehicleData: IVehicleFormData): Promise<void> {
		if (CreateVehicleData.id) {
			await updateVehicle(CreateVehicleData, CreateVehicleData.id);

			const { data } = await getVehicles(search, filterOptions);

			setVehicles(data);

			navigate("/");
		} else {
			console.log("Id not informed!");
		}
	}

	async function handleDeleteVehicle(id: number): Promise<void> {
		await deleteVehicle(id);

		const { data } = await getVehicles(search, filterOptions);

		setVehicles(data);
	}

	async function handleToggleFavorite(id: number): Promise<void> {
		await toggleVehicleFavorite(id);

		const { data } = await getVehicles(search, filterOptions);

		setVehicles(data);
	}

	return (
		<VehiclesContext.Provider
			value={{
				filterOptions,
				search,
				vehicles,
				handleUpdateFilterOptions,
				handleSearch,
				handleCreateVehicle,
				handleDeleteVehicle,
				handleUpdateVehicle,
				handleToggleFavorite,
			}}
		>
			{children}
		</VehiclesContext.Provider>
	);
}

export function useVehicles() {
	const context = useContext(VehiclesContext);

	return context;
}
