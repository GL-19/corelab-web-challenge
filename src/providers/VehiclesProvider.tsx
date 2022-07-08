import { createContext, ReactNode, useContext, useState } from "react";
import { IFilterOptions } from "../types";

interface VehiclesContextData {
	filterOptions: IFilterOptions;
	handleUpdateFilterOptions: (filterOptions: IFilterOptions) => void;
}

interface VehiclesProviderProps {
	children: ReactNode;
}

const VehiclesContext = createContext<VehiclesContextData>({} as VehiclesContextData);

export function VehiclesProvider({ children }: VehiclesProviderProps) {
	const [filterOptions, setFilterOptions] = useState<IFilterOptions>({
		brand: "",
		color: "",
		year: 0,
		minPrice: 0,
		maxPrice: 0,
	});

	function handleUpdateFilterOptions(filterOptions: IFilterOptions): void {
		setFilterOptions(filterOptions);
	}

	return (
		<VehiclesContext.Provider
			value={{
				filterOptions,
				handleUpdateFilterOptions,
			}}
		>
			{children}
		</VehiclesContext.Provider>
	);
}

export function useFilterOptions() {
	const context = useContext(VehiclesContext);

	return context;
}
