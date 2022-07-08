import { ReactNode } from "react";
import styles from "./Card.module.scss";

interface ICard {
	title: string;
	children: ReactNode;
	color?: string;
}

const Card = ({ title, children, color }: ICard) => {
	return (
		<div className={styles.Card} style={{ backgroundColor: color ? color : "inherit" }}>
			<h2>{title}</h2>

			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default Card;
