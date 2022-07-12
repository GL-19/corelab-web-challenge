import styles from "./Card.module.scss";

import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import FavoriteIcon from "../Icons/FavoriteIcon";
import { IVehicle } from "../../types";

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
	return (
		<div
			className={styles.Card}
			style={{
				backgroundColor: vehicle.color ? vehicle.color : "black",
			}}
		>
			<div className={styles.IconsDiv}>
				<EditIcon onClick={onClickEdit} />
				<DeleteIcon onClick={onClickDelete} />
				<FavoriteIcon isFavorite={vehicle.isFavorite} onClick={onClickFavorite} />
			</div>
			<h3>{vehicle.name}</h3>
			<p>Price: {vehicle.price}</p>
			<p>Brand: {vehicle.brand}</p>
			<p>Description: {vehicle.description}</p>
			<p>Year: {vehicle.year} </p>
		</div>
	);
}
