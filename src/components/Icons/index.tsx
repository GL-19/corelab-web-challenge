import styled from "styled-components";
import deleteIcon from "../../images/delete.svg";
import editIcon from "../../images/edit.svg";
import arrowIcon from "../../images/arrow-left.svg";
import heartEmptyIcon from "../../images/heart-empty.svg";
import heartFilledIcon from "../../images/heart-filled.svg";
import filterIcon from "../../images/filter.svg";

export interface IIconProps {
	onClick: () => void;
}

export interface IFavoriteIconProps extends IIconProps {
	isFavorite: boolean;
}

const Icon = styled.img`
	cursor: pointer;
	height: 100%;
`;

function DeleteIcon({ onClick }: IIconProps) {
	return <Icon src={deleteIcon} alt="delete" onClick={onClick} />;
}

function EditIcon({ onClick }: IIconProps) {
	return <Icon src={editIcon} alt="edit" onClick={onClick} />;
}

function ReturnIcon({ onClick }: IIconProps) {
	return <Icon src={arrowIcon} alt="return" onClick={onClick} />;
}

function FilterIcon({ onClick }: IIconProps) {
	return <Icon src={filterIcon} alt="return" onClick={onClick} />;
}

function FavoriteIcon({ onClick, isFavorite }: IFavoriteIconProps) {
	return (
		<Icon
			src={isFavorite ? heartFilledIcon : heartEmptyIcon}
			alt="favorite"
			onClick={onClick}
		/>
	);
}

export { Icon, ReturnIcon, EditIcon, DeleteIcon, FavoriteIcon, FilterIcon };
