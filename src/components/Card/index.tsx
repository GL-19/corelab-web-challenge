import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import FavoriteIcon from "../Icons/FavoriteIcon";
import { IVehicle } from "../../types";
import { CardContainer, IconsContainer } from "./styles";
import { colors } from "../../utils";

interface CardProps {
	onClickEdit: () => void;
	onClickDelete: () => void;
	onClickFavorite: () => void;
	vehicle: IVehicle;
}

export default function Card({
	onClickDelete,
	onClickFavorite,
	onClickEdit,
	vehicle,
}: CardProps) {
	console.log(colors[vehicle.color.toLocaleLowerCase()]);

	return (
		<CardContainer
			darkFontColor={vehicle.color.toLocaleLowerCase() === "branco" ? true : false}
			backgroundColor={vehicle.color ? colors[vehicle.color.toLocaleLowerCase()] : "red"}
		>
			<IconsContainer>
				<EditIcon onClick={onClickEdit} />
				<DeleteIcon onClick={onClickDelete} />
				<FavoriteIcon isFavorite={vehicle.isFavorite} onClick={onClickFavorite} />
			</IconsContainer>
			<h3>{vehicle.name}</h3>
			<p>Price: {vehicle.price}</p>
			<p>Brand: {vehicle.brand}</p>
			<p>Description: {vehicle.description}</p>
			<p>Year: {vehicle.year} </p>
		</CardContainer>
	);
}
