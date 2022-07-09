interface IconProps {
	onClick: () => void;
	src: string;
}

function Icon({ src, onClick }: IconProps) {
	return (
		<button onClick={onClick}>
			<img src={src} alt="icon" />
		</button>
	);
}

export default Icon;
