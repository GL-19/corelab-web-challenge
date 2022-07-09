import Icon from ".";
import editIcon from "../../images/edit.svg";

interface EditIconProps {
	onClick: () => void;
	size?: string;
}

export default function EditIcon({ onClick, size }: EditIconProps) {
	return <Icon src={editIcon} onClick={onClick} width={size} height={size} />;
}
