import Icon from ".";
import arrowIcon from "../../images/arrow-left.svg";

interface ReturnIconProps {
	onClick: () => void;
	size?: string;
}

export default function ReturnIcon({ onClick, size }: ReturnIconProps) {
	return <Icon src={arrowIcon} onClick={onClick} width={size} height={size} />;
}
