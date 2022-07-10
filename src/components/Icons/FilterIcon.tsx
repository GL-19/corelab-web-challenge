import styles from "./Icon.module.scss";
import filterIcon from "../../images/filter.svg";

interface FilterIconProps {
	onClick: () => void;
}

export default function FilterIcon({ onClick }: FilterIconProps) {
	return (
		<img src={filterIcon} alt="filter-icon" className={styles.Icon} onClick={onClick} />
	);
}
