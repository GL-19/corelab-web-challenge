import Icon from ".";
import deleteIcon from "../../images/delete.svg";

interface DeleteIconProps {
	onClick: () => void;
}

export default function DeleteIcon({ onClick }: DeleteIconProps) {
	return <Icon src={deleteIcon} onClick={onClick} />;
}
