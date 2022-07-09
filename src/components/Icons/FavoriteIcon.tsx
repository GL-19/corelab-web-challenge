import Icon from ".";
import heartEmptyIcon from "../../images/heart-empty.svg";
import heartFilledIcon from "../../images/heart-filled.svg";

interface FavoriteIconProps {
	onClick: () => void;
	isFavorite: boolean;
	size?: string;
}

export default function FavoriteIcon({
	isFavorite = false,
	onClick,
	size,
}: FavoriteIconProps) {
	return (
		<Icon
			src={isFavorite ? heartFilledIcon : heartEmptyIcon}
			onClick={onClick}
			width={size}
			height={size}
		/>
	);
}
