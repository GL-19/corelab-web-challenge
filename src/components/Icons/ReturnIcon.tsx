import styles from "./Icon.module.scss";
import arrowIcon from "../../images/arrow-left.svg";

interface ReturnIconProps {
	onClick: () => void;
}

export default function ReturnIcon({ onClick }: ReturnIconProps) {
	return (
		<img src={arrowIcon} alt="filter-icon" className={styles.Icon} onClick={onClick} />
	);
}
