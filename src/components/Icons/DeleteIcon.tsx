import Icon from ".";
import deleteIcon from "../../images/delete.svg";

interface DeleteIconProps {
	onClick: () => void;
	size?: string;
}

export default function DeleteIcon({ onClick, size }: DeleteIconProps) {
	return <Icon src={deleteIcon} onClick={onClick} width={size} height={size} />;
}
