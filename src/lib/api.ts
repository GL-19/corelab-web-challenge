const API = "http://localhost:3333";

const endpoint = (path: string): string => API + path;

const get = async (path: string): Promise<any> => {
	return fetch(endpoint(path)).then((res) => res.json());
};

export const getVehicles = async (searchString: string) => {
	return get(`/vehicles?${searchString ? `searchString=${searchString}` : ""}`);
};

/* export const getVehiclesWithFilterOptions = async (searchString: string) => {
	return get(`/vehicles?${searchString ? `searchString=${searchString}` : ""}`);
}; */
