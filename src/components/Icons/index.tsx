import styles from "./Icon.module.scss";

interface IconProps {
	onClick: () => void;
	src: string;
}

function Icon({ src, onClick }: IconProps) {
	return (
		<div className={styles.Card} onClick={onClick}>
			<img src={src} alt="icon" />
		</div>
	);
}

export default Icon;
