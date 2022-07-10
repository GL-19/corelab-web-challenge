import styles from "./Icon.module.scss";
import editIcon from "../../images/edit.svg";

interface EditIconProps {
	onClick: () => void;
}

export default function EditIcon({ onClick }: EditIconProps) {
	return (
		<img src={editIcon} alt="filter-icon" className={styles.Icon} onClick={onClick} />
	);
}
