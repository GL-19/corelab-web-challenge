import Icon from ".";
import heartEmptyIcon from "../../images/heart-empty.svg";
import heartFilledIcon from "../../images/heart-filled.svg";

interface FavoriteIconProps {
	onClick: () => void;
	isFavorite: boolean;
}

export default function FavoriteIcon({ isFavorite, onClick }: FavoriteIconProps) {
	return <Icon src={isFavorite ? heartFilledIcon : heartEmptyIcon} onClick={onClick} />;
}
