import styles from "./Icon.module.scss";
import deleteIcon from "../../images/delete.svg";

interface DeleteIconProps {
	onClick: () => void;
}

export default function DeleteIcon({ onClick }: DeleteIconProps) {
	return (
		<img src={deleteIcon} alt="delete-icon" className={styles.Icon} onClick={onClick} />
	);
}
