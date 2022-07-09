import styles from "./Icon.module.scss";

interface IconProps {
	onClick: () => void;
	src: string;
	width?: string;
	height?: string;
}

function Icon({ src, onClick, width = "2.5rem", height = "2.5rem" }: IconProps) {
	return (
		<div className={styles.Icon} style={{ width, height }} onClick={onClick}>
			<img src={src} alt="icon" />
		</div>
	);
}

export default Icon;
