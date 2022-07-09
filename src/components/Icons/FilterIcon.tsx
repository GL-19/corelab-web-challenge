import Icon from ".";
import filterIcon from "../../images/filter.svg";

interface FilterIconProps {
	onClick: () => void;
	size?: string;
}

export default function FilterIcon({ onClick, size }: FilterIconProps) {
	return <Icon src={filterIcon} onClick={onClick} width={size} height={size} />;
}
