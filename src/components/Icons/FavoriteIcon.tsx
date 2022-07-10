import styles from "./Icon.module.scss";
import heartEmptyIcon from "../../images/heart-empty.svg";
import heartFilledIcon from "../../images/heart-filled.svg";

interface FavoriteIconProps {
	onClick: () => void;
	isFavorite: boolean;
}

export default function FavoriteIcon({ isFavorite = false, onClick }: FavoriteIconProps) {
	return (
		<img
			src={isFavorite ? heartFilledIcon : heartEmptyIcon}
			alt="favorite-icon"
			onClick={onClick}
			className={styles.Icon}
		/>
	);
}
