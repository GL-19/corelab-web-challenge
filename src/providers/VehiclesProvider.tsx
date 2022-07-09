import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getVehicles } from "../lib/api";
import { IFilterOptions, IVehicle } from "../types";

interface VehiclesContextData {
	filterOptions: IFilterOptions;
	search: string;
	vehicles: IVehicle[];
	handleUpdateFilterOptions: (filterOptions: IFilterOptions) => void;
	handleChangeSearch: (search: string) => void;
}

interface VehiclesProviderProps {
	children: ReactNode;
}

const VehiclesContext = createContext<VehiclesContextData>({} as VehiclesContextData);

export function VehiclesProvider({ children }: VehiclesProviderProps) {
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
	}

	function handleChangeSearch(search: string): void {
		setSearch(search);
	}

	return (
		<VehiclesContext.Provider
			value={{
				filterOptions,
				search,
				vehicles,
				handleUpdateFilterOptions,
				handleChangeSearch,
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
