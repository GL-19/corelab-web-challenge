import Icon from ".";
import filterIcon from "../../images/filter.svg";

interface FilterIconProps {
	onClick: () => void;
}

export default function FilterIcon({ onClick }: FilterIconProps) {
	return <Icon src={filterIcon} onClick={onClick} />;
}
