import Icon from ".";
import editIcon from "../../images/edit.svg";

interface EditIconProps {
	onClick: () => void;
}

export default function EditIcon({ onClick }: EditIconProps) {
	return <Icon src={editIcon} onClick={onClick} />;
}
