import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createVehicle, deleteVehicle, getVehicles, updateVehicle } from "../lib/api";
import { IFilterOptions, ICreateVehicleDTO, IVehicle } from "../types";

interface VehiclesContextData {
	filterOptions: IFilterOptions;
	search: string;
	vehicles: IVehicle[];
	handleUpdateFilterOptions: (filterOptions: IFilterOptions) => void;
	handleChangeSearch: (search: string) => void;
	handleCreateVehicle: (CreateVehicleData: ICreateVehicleDTO) => Promise<void>;
	handleUpdateVehicle: (UpdateVehicleData: ICreateVehicleDTO) => Promise<void>;
	handleDeleteVehicle: (id: number) => Promise<void>;
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
			const { data } = await getVehicles(search, filterOptions);
			setVehicles(data);
		};

		fetchVehicles();
	}, [search, filterOptions]);

	function handleUpdateFilterOptions(filterOptions: IFilterOptions): void {
		setFilterOptions(filterOptions);

		navigate("/");
	}

	function handleChangeSearch(search: string): void {
		setSearch(search);
	}

	async function handleCreateVehicle(
		CreateVehicleData: ICreateVehicleDTO
	): Promise<void> {
		await createVehicle(CreateVehicleData);

		const { data } = await getVehicles(search, filterOptions);

		setVehicles(data);

		navigate("/");
	}

	async function handleUpdateVehicle(
		CreateVehicleData: ICreateVehicleDTO
	): Promise<void> {
		if (CreateVehicleData.id) {
			await updateVehicle(CreateVehicleData, CreateVehicleData.id);
		} else {
			console.log("Id not informed!");
		}

		const { data } = await getVehicles(search, filterOptions);

		setVehicles(data);

		navigate("/");
	}

	async function handleDeleteVehicle(id: number): Promise<void> {
		await deleteVehicle(id);

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
				handleChangeSearch,
				handleCreateVehicle,
				handleDeleteVehicle,
				handleUpdateVehicle,
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
