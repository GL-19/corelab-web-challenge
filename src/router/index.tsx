import { Routes, BrowserRouter, Route } from "react-router-dom";
import { CreateVehicle, VehiclesPage } from "../pages";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<VehiclesPage />}></Route>
				<Route path="/create" element={<CreateVehicle />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export { Router };
