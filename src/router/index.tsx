import { Routes, Route } from "react-router-dom";
import { CreateVehicle, UpdateVehicle, VehiclesPage } from "../pages";

function RoutesComponent() {
	return (
		<Routes>
			<Route path="/" element={<VehiclesPage />}></Route>
			<Route path="/create" element={<CreateVehicle />}></Route>
			<Route path="/:id/update" element={<UpdateVehicle />}></Route>
		</Routes>
	);
}

export { RoutesComponent as Routes };
