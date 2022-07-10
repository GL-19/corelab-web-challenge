import styles from "./CardContent.module.scss";

import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import FavoriteIcon from "../Icons/FavoriteIcon";
import { IVehicle } from "../../types";

interface CardContentProps {
	onClickEdit: () => void;
	onClickDelete: () => void;
	onClickFavorite: () => void;
	vehicle: IVehicle;
}

export default function CardContent({
	onClickDelete,
	onClickFavorite,
	onClickEdit,
	vehicle,
}: CardContentProps) {
	return (
		<>
			<div className={styles.IconsDiv}>
				<EditIcon onClick={onClickEdit} />
				<DeleteIcon onClick={onClickDelete} />
				<FavoriteIcon isFavorite={vehicle.isFavorite} onClick={onClickFavorite} />
			</div>
			<p>Price: {vehicle.price}</p>
			<p>Description: {vehicle.description}</p>
			<p>Year: {vehicle.year} </p>
		</>
	);
}
